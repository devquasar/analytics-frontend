<template>
  <div class="container">
    <h1>Session analytics report</h1>
    <table class="striped centered">
      <thead>
        <tr>
          <th>Session ID</th>
          <th>User ID</th>
          <th>Start</th>
          <th>End</th>
          <th>Diff(minutes)</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in data" :key="item.sessions_session_id">
          <td>{{ item.sessions_session_id }}</td>
          <td>{{ item.sessions_user_id }}</td>
          <td>
            {{ format(new Date(item.sessions_start), "MM/dd/yyyy HH:mm") }}
          </td>
          <td>
            {{
              item.sessions_end
                ? format(new Date(item.sessions_end), "MM/dd/yyyy HH:mm")
                : "Not over yet"
            }}
          </td>
          <td>
            {{
              item.sessions_end
                ? differenceInMinutes(
                    new Date(item.sessions_end),
                    new Date(item.sessions_start)
                  )
                : "Not over yet"
            }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { differenceInMinutes, format } from "date-fns";

export default {
  data() {
    return {
      visitCodeForDb: 7,
      data: null,
      differenceInMinutes,
      format,
    };
  },
  methods: {
    async setUser(userId) {
      this.$socket.emit("addUser", { user_id: userId });
      this.$socket.emit("addSession", {
        user_id: userId,
        start: new Date(),
      });

      return "All OK!";
    },
  },

  sockets: {
    sessionsDataToClient: function(data) {
      this.data = data;
    },
  },

  created: function() {
    let cookie = this.$cookies.get("user_id");
    if (!cookie) {
      this.$cookies.set("user_id", this.$uuid.v4());
    }
    console.log(`UserId is: ${cookie}`);
  },

  mounted() {
    this.setUser(this.$cookies.get("user_id"));
    console.log(this.visitCodeForDb);
    this.$socket.emit("visit", {
      user_id: this.$cookies.get("user_id"),
      action_id: this.visitCodeForDb,
    });
    this.$socket.emit("getSessionsData", {});
  },
};
</script>

<style scoped>
.container {
  width: 1300px;
}
</style>

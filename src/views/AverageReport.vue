<template>
  <div class="container">
    <h1>Pages per session report</h1>
    <table class="striped">
      <thead>
        <tr>
          <th>Session ID</th>
          <th>User ID</th>
          <th>Pages count</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in data" :key="item.user_actions_session_id">
          <td>{{ item.session_id }}</td>
          <td>{{ item.user_id }}</td>
          <td>{{ item.count }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visitCodeForDb: 8,
      data: null,
    };
  },
  methods: {
    async setUser(userId) {
      this.$socket.emit("addUser", { user_id: userId });
      this.$socket.emit("addSession", {
        user_id: userId,
        start: new Date(),
      });

      return "All is OK!";
    },
  },

  sockets: {
    averageDataToClient: function(data) {
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
    this.$socket.emit("visit", {
      user_id: this.$cookies.get("user_id"),
      action_id: this.visitCodeForDb,
    });
    this.$socket.emit("getAverageData", {});
  },
};
</script>

<style scoped>
.container {
  width: 1300px;
}
</style>

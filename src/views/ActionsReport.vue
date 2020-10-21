<template>
  <div class="container">
    <h1>Action analytics report</h1>
    <table class="striped centered">
      <thead>
        <tr>
          <th>ID</th>
          <th>User ID</th>
          <th>Session ID</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in data" :key="item.user_actions_id">
          <td>{{ item.user_actions_id }}</td>
          <td>{{ item.user_actions_user_id }}</td>
          <td>{{ item.user_actions_session_id }}</td>
          <td>{{ item.actions_display }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visitCodeForDb: 6,
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

      return "All was OK!";
    },
  },

  sockets: {
    actionsDataToClient: function(data) {
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
    this.$socket.emit("getActionsData", {});
  },
};
</script>

<style scoped>
.container {
  width: 1300px;
}
</style>

<template>
  <div>
    <h2>Two</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visitCodeForDb: 2,
    };
  },

  sockets: {
    sessionId: function(data) {
      console.log("sessionId :>> ", data);
    },
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
  created: function() {
    let cookie = this.$cookies.get("user_id");
    if (!cookie) {
      this.$cookies.set("user_id", this.$uuid.v4());
    }
    console.log(`userId :>>  ${cookie}`);
  },

  mounted() {
    this.setUser(this.$cookies.get("user_id"));
    console.log(this.visitCodeForDb);
    this.$socket.emit("visit", {
      user_id: this.$cookies.get("user_id"),
      action_id: this.visitCodeForDb,
    });
    this.$socket.emit("getSessionId", {});
  },
};
</script>

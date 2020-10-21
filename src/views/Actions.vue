<template>
  <div>
    <div class="row">
      <div class="col s6">
        <h3>Actions</h3>
        <form id="myid" @submit.prevent="submitHandler">
          <div class="input-field">
            <input v-model="text" id="text" type="text" />
          </div>
          <button
            class="waves-effect waves-light btn blue darken-2"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      visitCodeForDb: 4,
      submitCodeForDb: 5,
    };
  },

  methods: {
    submitHandler() {
      if (this.text) {
        this.logSubmit();
        this.text = "";
      }
    },

    logSubmit() {
      this.$socket.emit("visit", {
        user_id: this.$cookies.get("user_id"),
        action_id: this.submitCodeForDb,
      });
    },

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
    console.log(`UserId is : ${cookie}`);
  },

  mounted() {
    this.setUser(this.$cookies.get("user_id"));
    console.log(this.visitCodeForDb);
    this.$socket.emit("visit", {
      user_id: this.$cookies.get("user_id"),
      action_id: this.visitCodeForDb,
    });
  },
};
</script>

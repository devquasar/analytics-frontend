<template>
  <div class="container">
    <h1>{{ foo }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      foo: "bar",
    };
  },
  created: function() {
    let cookie = this.$cookies.get("user_id");

    if (!cookie) {
      this.$cookies.set("user_id", this.$uuid.v4());
    }

    console.log(`Cookie value is: ${cookie}`);
  },
};
</script>

<style scoped></style>

<template>
  <nav class="blue darken-3">
    <div class="nav-wrapper">
      <a href="https://github.com/devquasar" class="brand-logo">d3vquasar</a>
      <ul class="right hide-on-med-and-down">
        <router-link tag="li" to="/" exact active-class="active">
          <a href="/">One</a>
        </router-link>
        <router-link tag="li" to="/two" active-class="active">
          <a href="/">Two</a>
        </router-link>
        <router-link tag="li" to="/three" active-class="active">
          <a href="/">Three</a>
        </router-link>
        <router-link tag="li" to="/actions" active-class="active">
          <a href="/">Actions</a>
        </router-link>
        <router-link tag="li" to="/report" active-class="active">
          <a href="/">Report</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  padding: 0 2rem;
}
</style>

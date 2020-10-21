<template>
  <div>
    <ul id="dropdown1" class="dropdown-content">
      <router-link tag="li" to="/report/actions" exact active-class="active">
        <a href="/">Actions</a>
      </router-link>
      <router-link tag="li" to="/report/sessions" exact active-class="active">
        <a href="/">Sessions</a>
      </router-link>
      <router-link tag="li" to="/report/avg" exact active-class="active">
        <a href="/">Avg pages</a>
      </router-link>
    </ul>
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
          <li>
            <a class="dropdown-trigger" href="#!" data-target="dropdown1"
              >Reports<i class="material-icons right">arrow_drop_down</i></a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import M from "materialize-css";
export default {
  mounted() {
    var el = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(el, { hover: true });
  },
};
</script>

<style lang="scss" scoped>
nav {
  padding: 0 2rem;
}
</style>

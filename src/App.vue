<template>
  <div id="app">
    <app-spinner v-show="loading"></app-spinner>
    <notifications group="message" data-test="notification" />
    <app-nav></app-nav>

    <div class="container" style="margin-top:4em">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppNav from "@/components/AppNav";
export default {
  data() {
    return {
      user: null
    };
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    }
  },
  created() {
    this.$store.dispatch("getUser");
  },
  components: {
    AppNav
  }
};
</script>

<style>
html,
body {
  overflow: hidden;
}

.nav-link.router-link-exact-active {
  background: #fff;
  color: #000 !important;
  border-radius: 3px;
}
</style>

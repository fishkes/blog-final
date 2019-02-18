<template>
  <nav class="navbar navbar-expand-lg bg-primary navbar-dark fixed-top">
    <div class="container">
      <router-link exact class="navbar-brand" :to="{ name: 'posts' }"
        >Aqua Blog</router-link
      >

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'posts' }"
              >Posts</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'albums' }"
              >Albums</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNav"
};
</script>

<style scoped></style>

<template>
  <div class="mask justify-content-center align-items-center">
    <div
      class="spinner-grow text-success"
      role="status"
      style="width: 3rem; height: 3rem;"
    >
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Spinner"
};
</script>

<style scoped>
.mask {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10000;
}
</style>

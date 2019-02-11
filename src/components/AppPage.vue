<template>
  <div class="row page py-4">
    <div class="col">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "AppPage"
};
</script>

<style scoped>
.page {
  height: calc(100vh - 65px);
  overflow: auto;
}
</style>

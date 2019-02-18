<template>
  <div class="row page py-4">
    <div class="col">
      <h2 class="page-title">{{ title }}</h2>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "AppPage",
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.page {
  height: calc(100vh - 65px);
  overflow: auto;
}
</style>

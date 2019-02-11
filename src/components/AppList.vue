<template>
  <ul class="list-unstyled">
    <li
      class="media list-group-item-primary px-4 py-2 mb-2"
      v-for="item in items"
      :key="item.id"
      @click="$emit('click', item)"
    >
      <slot :item="item" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "AppList",
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.author {
  height: 75px;
  width: 75px;
}
.media {
  cursor: pointer;
}
</style>

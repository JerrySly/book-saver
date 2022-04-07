<template>
  <div class="tag-wrapper" :style="'background-color:' + tag.color">
    {{ tag.name }}
  </div>
</template>

<script>
export default {
  props: {
    tag: Object,
  },
};
</script>

<style scoped>
.tag-wrapper {
  display: inline-block;
  border-radius: 5px;
  padding: 2px 5px 2px 5px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.11);
  color: white;
}
</style>

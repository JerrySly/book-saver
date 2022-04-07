<template>
  <div class="status-wrapper" :style="'background-color:' + status.color">
    {{ status.name }}
  </div>
</template>

<script>
export default {
  props: {
    status: Object,
  },
  setup() {},
};
</script>

<style scoped>
.status-wrapper {
  display: inline-block;
  border-radius: 5px;
  padding: 2px 5px 2px 5px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.11);
  color: white;
}
</style>

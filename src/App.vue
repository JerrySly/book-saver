<template>
  <div>
    <nav-menu></nav-menu>
    <router-view />
  </div>
</template>
<script>
import NavMenu from "@/components/NavMenu.vue";
export default {
  components: {
    NavMenu,
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300&display=swap');

</style>

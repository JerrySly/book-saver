<template>
  <div class="nav-wrapper">
    <div class="side-block"></div>
    <div class="center-block">
      <ul>
        <li :class="{ active: activeArray[0] }" @click="setActive(0)">
          Добавление
        </li>
        <li :class="{ active: activeArray[1] }" @click="setActive(1)">
          Таблица
        </li>
      </ul>
    </div>
    <div class="side-block"></div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const activeArray = ref([true, false]);
    const setActive = (index) => {
      activeArray.value = activeArray.value.map((x) => (!x ? false : false));
      activeArray.value[index] = true;
    };
    return {
      activeArray,
      setActive,
    };
  },
  created() {
    console.log(this.$router);
  },
};
</script>

<style scoped>
.nav-wrapper {
  flex-direction: row;
  display: flex;
}
.nav-wrapper ul {
  display: flex;
  margin: auto;
}
.side-block,
.center-block {
  display: flex;
  flex-grow: 1;
}
.side-block {
  flex: auto;
}
.center-block {
  width: 300px;
}
.nav-wrapper ul li {
  padding: 5px 10px 10px 10px;
  display: flex;
  cursor: pointer;
  font-size: 24px;
  font-family: "IBM Plex Sans Arabic", sans-serif;
  color: #e366b5;
}
.active {
  border-bottom: 3px solid green;
  transition: 0.1s;
}
</style>

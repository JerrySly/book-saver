<template>
  <div>
    <table id="book-table">
      <thead class="head-table">
        <th>Номер</th>
        <th>Имя</th>
        <th>Автор</th>
        <th>Теги</th>
        <th>Статус</th>
        <th>Действия</th>
      </thead>
      <tbody>
        <tr v-for="book in Data.books" :key="book.id">
          <td>{{ book.id }}</td>
          <td>{{ book.name }}</td>
          <td>{{ book.author }}</td>
          <td><tag-block :tag="getTag(book.tagId)" /></td>
          <td>{{ getStatus(book.statusId).name }}</td>
          <td>
            <icon-base :height="25" :width="25">
              <path :d="constants.edit"></path>
            </icon-base>
            <icon-base :height="25" :width="25">
              <path :d="constants.remove"></path>
            </icon-base>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Data from "@/models";
import constants from "@/constants/mdIcons.js";
export default {
  setup() {
    const getTag = (index) => {
      let temp = Data.tags.find((x) => x.id == index);
      return temp;
    };
    const getStatus = (index) => {
      return Data.statuses.find((x) => x.id == index);
    };
    return { Data, getTag, getStatus, constants };
  },
};
</script>
<style></style>
<style scoped>
.head-table th {
  padding: 10px 10px 10px 10px !important;
  color: white;
}
thead {
  background-color: rgb(68, 167, 55);
}

thead th:nth-child(1) {
  border-top-left-radius: 10px !important;
  width: 7%;
}
thead th:nth-child(2) {
  width: 20%;
}
thead th:nth-child(3) {
  width: 20%;
}
thead th:nth-child(4) {
  width: 20%;
}
thead th:nth-child(5) {
  width: 20%;
}
thead th:nth-child(6) {
  border-top-right-radius: 10px !important;
  width: 13%;
}
#book-table {
  margin: auto;
  margin-top: 200px;
  font-size: 24px;
  border-collapse: collapse;
  font-family: "IBM Plex Sans Arabic", sans-serif;
  text-align: center;
}
td {
  padding: 5px 10px 5px 10px;
  margin: 0 !important;
}
tr {
  font-weight: 400;
  font-size: 20px;
  border-bottom: 4px solid rgb(66, 66, 66, 0.3);
}
tr:hover {
  background-color: rgba(255, 228, 196, 0.562);
  cursor: pointer;
}
</style>

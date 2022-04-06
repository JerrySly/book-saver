<template>
  <div>
    <table id="book-table">
      <thead class="head-table">
        <th>Id</th>
        <th>Имя</th>
        <th>Автор</th>
        <th>Теги</th>
        <th>Статус</th>
      </thead>
      <tbody>
        <tr v-for="book in Data.books" :key="book.id">
          <td>{{ book.id }}</td>
          <td>{{ book.name }}</td>
          <td>{{ book.author }}</td>
          <td><tag-block :tag="getTag(book.tagId)" /></td>
          <td>{{ getStatus(book.statusId).name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Data from "@/models";
export default {
  setup() {
    const getTag = (index) => {
      let temp = Data.tags.find((x) => x.id == index);
      return temp;
    };
    const getStatus = (index) => {
      return Data.statuses.find((x) => x.id == index);
    };
    return { Data, getTag, getStatus };
  },
};
</script>
<style></style>
<style scoped>
.head-table th {
  border-bottom: solid 5px green !important;
  border-color: green !important;
  padding-bottom: 10px !important;
}

thead th:nth-child(1) {
  width: 5%;
}
thead th:nth-child(2) {
  width: 25%;
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
tr:hover {
  background-color: bisque;
  cursor: pointer;
}
</style>

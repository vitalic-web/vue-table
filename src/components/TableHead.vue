<template>
  <tr>
    <th class="table-head" @click="sortData">{{userName}}</th>
    <th class="table-head" @click="sortData">{{phone}}</th>
    <th class="table-head" @click="sortData">{{email}}</th>
    <th class="table-head" @click="sortData">{{name}}</th>
    <th class="table-head" @click="sortData">{{surname}}</th>
    <th class="table-head" @click="sortData">{{birthday}}</th>
    <th class="table-head" @click="sortData">{{age}}</th>
  </tr>
</template>

<script>
export default {
  name: 'TableHead',
  props: {
    userName: String,
    phone: String,
    email: String,
    name: String,
    surname: String,
    birthday: String,
    age: String,
    sortData: Function,
  },
};
</script>

<style>
.table-head {
  border: 1px solid black;
  padding: 0 10px;
}

.table-head:hover {
  cursor: pointer;
}
</style>

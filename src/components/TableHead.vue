<template>
  <tr>
    <th class="table-head" @click="sortName">{{userName}}</th>
    <th class="table-head" @click="sortName">{{phone}}</th>
    <th class="table-head" @click="sortDate">{{email}}</th>
    <th class="table-head" @click="sortYear">{{name}}</th>
    <th class="table-head" @click="sortName">{{surname}}</th>
    <th class="table-head" @click="sortDate">{{birthday}}</th>
    <th class="table-head" @click="sortYear">{{age}}</th>
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
    sortName: Function,
    sortDate: Function,
    sortYear: Function,
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

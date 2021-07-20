<template>
  <tr>
    <th class="table-head" data-column="userName" @click="sortData">{{userName}}
      <!-- <span class="table-head__sort-symbol" v-if="isAscending">&#9650;</span>
      <span class="table-head__sort-symbol" v-else>&#9660;</span> -->
    </th>
    <th class="table-head" data-column="phone" @click="sortData">{{phone}}</th>
    <th class="table-head" data-column="email" @click="sortData">{{email}}</th>
    <th class="table-head" data-column="name" @click="sortData">{{name}}</th>
    <th class="table-head" data-column="surname" @click="sortData">{{surname}}</th>
    <th class="table-head" data-column="birthday" @click="sortData">{{birthday}}</th>
    <th class="table-head" data-column="age" @click="sortData">{{age}}</th>
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
    isAscending: Boolean,
  },
};
</script>

<style>
.table-head {
  border: 1px solid black;
  padding: 0 10px;
  position: relative;
}

.table-head:hover {
  cursor: pointer;
}

.table-head__sort-symbol {
  position: absolute;
  right: 3px;
}
</style>

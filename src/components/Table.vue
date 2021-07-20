<template>
<div class="table-container">
  <input
    class="table__search"
    type="text"
    placeholder="Search"
    :value="inputValue"
    @input="getInputValue"
  >
  <table class="table">
    <caption class="table__name">{{tableNames.name}}</caption>
    <TableHead
      :userName="tableNames.head.userName"
      :phone="tableNames.head.phone"
      :email="tableNames.head.email"
      :name="tableNames.head.name"
      :surname="tableNames.head.surname"
      :birthday="tableNames.head.birthday"
      :age="tableNames.head.age"
      :sortData="sortData"
    />
    <TableRow v-for="row in sortedData"
      :key="row.name"
      :userName="row.username"
      :phone="row.phone"
      :email="row.email"
      :name="row.person.name"
      :surname="row.person.surname"
      :birthday="row.person.birthday"
      :age="row.person.age"
    />
  </table>
  <button @click="log">log</button>
</div>
</template>

<script>
import TableHead from '@/components/TableHead.vue';
import TableRow from '@/components/TableRow.vue';
import { tableNames } from '@/common/constants';
import { sortMethods } from '@/common/utils';

export default {
  name: 'Table',
  components: {
    TableHead,
    TableRow,
  },
  props: {
    usersDataTable: Array,
  },
  data() {
    return {
      tableNames,
      isAscending: true,
      currentSortName: 'Base',
      inputValue: '',
    };
  },
  computed: {
    sortedData() {
      switch (this.currentSortName) {
        case 'User Name':
          return sortMethods
            .sortString(this.usersDataTable, this.isAscending, this.currentSortName);
        case 'Phone':
          return sortMethods
            .sortNumber(this.usersDataTable, this.isAscending, this.currentSortName);
        case 'Base':
          return this.usersDataTable;
        case 'Email':
          return sortMethods
            .sortString(this.usersDataTable, this.isAscending, this.currentSortName);
        case 'Name':
          return sortMethods
            .sortString(this.usersDataTable, this.isAscending, this.currentSortName);
        case 'Surname':
          return sortMethods
            .sortString(this.usersDataTable, this.isAscending, this.currentSortName);
        case 'Age':
          return sortMethods
            .sortNumber(this.usersDataTable, this.isAscending, this.currentSortName);
        case 'Birthday':
          return sortMethods.sortDate(this.usersDataTable, this.isAscending);
        default:
          return this.usersDataTable;
      }
    },
  },
  methods: {
    sortData(evt) {
      this.currentSortName = evt.target.textContent;
      this.isAscending = !this.isAscending;
    },
    getInputValue(evt) {
      console.log(evt.target.value);
      this.inputValue = evt.target.value;
    },
    log() {
      console.log(this.usersDataTable);
    },
  },
};
</script>

<style>
.table-container {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.table {
  width: 100%;
  font-size: 14px;
  border-spacing: 0;
  border-collapse: collapse;
}

.table__name {
  border: 1px solid black;
  border-bottom: none;
  font-size: 18px;
  font-weight: bold;
}

.table__search {
  border: 1px solid black;
  align-self: flex-end;
  margin: 0 0 16px;
  height: 20px;
  width: 164px;
}
</style>

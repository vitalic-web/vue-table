<template>
<div class="table-container">
  <input
    class="table__search"
    type="text"
    placeholder="Search"
    :value="inputValue"
    @input="getInputValue"
  >
  <button
    class="table__search-clear-btn"
    type="button"
    @click="clearSearch"
  >Clear Search</button>
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
      :isAscending="isAscending"
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
  <p v-if="!filteredData.length">Nothing found. Please enter a valid request.</p>
</div>
</template>

<script>
import TableHead from '@/components/TableHead.vue';
import TableRow from '@/components/TableRow.vue';
import { tableNames } from '@/common/constants';
import sortMethods from '@/utils/sortMethods';
import sortData from '@/utils/sortData';

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
    filteredData() {
      if (!this.inputValue) {
        return this.usersDataTable;
      } return sortMethods.search(this.usersDataTable, this.inputValue);
    },
    sortedData() {
      return sortData(this.currentSortName, this.filteredData, this.isAscending);
    },
  },
  methods: {
    sortData(evt) {
      this.currentSortName = evt.target.dataset.column;
      this.isAscending = !this.isAscending;
    },
    getInputValue(evt) {
      this.inputValue = evt.target.value;
    },
    clearSearch() {
      this.inputValue = '';
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
  height: 20px;
  width: 164px;
}

.table__search-clear-btn {
  align-self: flex-end;
  margin: 16px 0 16px;
}
</style>

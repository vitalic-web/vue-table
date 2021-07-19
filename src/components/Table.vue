<template>
  <table class="table">
    <caption class="table__name">{{tableNames.name}}</caption>

    <TableHead
      :userName="tableNames.head.userName"
      :email="tableNames.head.email"
      :name="tableNames.head.name"
      :surname="tableNames.head.surname"
      :birthday="tableNames.head.birthday"
      :age="tableNames.head.age"
      :sortName="sortName"
      :sortDate="sortDate"
      :sortYear="sortYear"
    />

    <template v-for="cell in usersData">
      <TableRow
        :key="cell.name"
        :userName="cell.userName"
        :date="cell.date"
        :year="cell.year"
      />
    </template>

    <div>{{usersDataTable}}</div>
  </table>
</template>

<script>
import TableHead from '@/components/TableHead.vue';
import TableRow from '@/components/TableRow.vue';
import { tableNames } from '@/common/constants';
// import tableData from '@/common/tableData';
import { getFullDate } from '@/common/utils';

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
      usersData: this.usersDataTable ? this.usersDataTable : [],
      tableNames,
      isNameUp: false,
      isDateUp: false,
      isYearUp: false,
    };
  },
  computed: {
    test() {
      return this.sortName(this.usersData);
    },
  },
  methods: {
    sortName() {
      console.log(this.usersData);
      if (!this.isNameUp) {
        this.usersData.sort((a, b) => {
          if (a.userName < b.userName) return -1;
          if (a.userName > b.userName) return 1;
          return 0;
        });
        this.isNameUp = true;
      } else {
        this.usersData.sort((a, b) => {
          if (b.userName < a.userName) return -1;
          if (b.userName > a.userName) return 1;
          return 0;
        });
        this.isNameUp = false;
      }
    },
    sortDate() {
      if (!this.isDateUp) {
        // eslint-disable-next-line max-len
        this.usersData.sort((a, b) => new Date(getFullDate(a.date)) - new Date(getFullDate(b.date)));
        this.isDateUp = true;
      } else {
        // eslint-disable-next-line max-len
        this.usersData.sort((a, b) => new Date(getFullDate(b.date)) - new Date(getFullDate(a.date)));
        this.isDateUp = false;
      }
    },
    sortYear() {
      if (!this.isYearUp) {
        this.usersData.sort((a, b) => {
          if (a.year < b.year) return -1;
          if (a.year > b.year) return 1;
          return 0;
        });
        this.isYearUp = true;
      } else {
        this.usersData.sort((a, b) => {
          if (b.year < a.year) return -1;
          if (b.year > a.year) return 1;
          return 0;
        });
        this.isYearUp = false;
      }
    },
  },
};
</script>

<style>
.table {
  font-size: 14px;
  border-spacing: 0;
  border-collapse: collapse;
  width: 90%;
}

.table__name {
  border: 1px solid black;
  border-bottom: none;
  font-size: 18px;
  font-weight: bold;
}
</style>

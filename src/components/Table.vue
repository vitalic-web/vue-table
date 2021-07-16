<template>
  <table class="table">
    <caption class="table__name">{{ usersData.name }}</caption>

    <TableHead
      :userNameTitle="usersData.head.name"
      :dateTitle="usersData.head.date"
      :yearTitle="usersData.head.year"
      :sortName="sortName"
      :sortDate="sortDate"
      :sortYear="sortYear"
    />

    <template v-for="cell in usersData.data">
      <TableRow
        :key="cell.name"
        :userName="cell.userName"
        :date="cell.date"
        :year="cell.year"
      />
    </template>
  </table>
</template>

<script>
import TableHead from '@/components/TableHead.vue';
import TableRow from '@/components/TableRow.vue';
import tableData from '@/common/tableData';
import { getISODate, addYear } from '@/common/utils';

export default {
  name: 'Table',
  components: {
    TableHead,
    TableRow,
  },
  data() {
    return {
      usersData: addYear(tableData),
      isNameUp: false,
      isDateUp: false,
      isYearUp: false,
    };
  },
  methods: {
    sortName() {
      if (!this.isNameUp) {
        this.usersData.data.sort((a, b) => {
          if (a.userName < b.userName) return -1;
          if (a.userName > b.userName) return 1;
          return 0;
        });
        this.isNameUp = true;
      } else {
        this.usersData.data.sort((a, b) => {
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
        this.usersData.data.sort((a, b) => new Date(getISODate(a.date)) - new Date(getISODate(b.date)));
        this.isDateUp = true;
      } else {
        // eslint-disable-next-line max-len
        this.usersData.data.sort((a, b) => new Date(getISODate(b.date)) - new Date(getISODate(a.date)));
        this.isDateUp = false;
      }
    },
    sortYear() {
      if (!this.isYearUp) {
        this.usersData.data.sort((a, b) => {
          if (a.year < b.year) return -1;
          if (a.year > b.year) return 1;
          return 0;
        });
        this.isYearUp = true;
      } else {
        this.usersData.data.sort((a, b) => {
          if (b.year < a.year) return -1;
          if (b.year > a.year) return 1;
          return 0;
        });
        this.isYearUp = false;
      }
    },
  },
  computed: {
    addYear() {
      return this.tableData.head;
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

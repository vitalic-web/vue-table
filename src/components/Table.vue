<template>
  <table>
    <caption>{{ tableData1.name }}</caption>

    <TableHead
      :userNameTitle="tableData1.head.name"
      :dateTitle="tableData1.head.date"
      :yearTitle="tableData1.head.year"
    />

    <template v-for="cell in tableData1.data">
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
import { addYear } from '@/common/utils';

export default {
  name: 'Table',
  components: {
    TableHead,
    TableRow,
  },
  data() {
    return {
      tableData1: addYear(tableData),
    };
  },
  computed: {
    addYear() {
      return this.tableData.head;
    },
  },
};
</script>

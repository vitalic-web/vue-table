<template>
  <table>
    <caption>{{ tableData.name }}</caption>
    <tr>
      <th v-for="item in tableData.head" :key="item">
        <TableHeadItem :item="item"/>
      </th>
    </tr>
  </table>
</template>

<script>
import TableHeadItem from '@/components/TableHeadItem.vue';
import tableData from '@/utils/tableData';

export default {
  name: 'Table',
  components: {
    TableHeadItem,
  },
  data() {
    return {
      tableData,
    };
  },
  // computed: {
  //   getTableHead() {
  //     return this.tableData.head;
  //   },
  // },
};
</script>

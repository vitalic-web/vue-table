<template>
  <main>
    <h1>Table</h1>
    <Table />
    <!-- <Table :tableData="tableData"/> -->
  </main>
</template>

<script>
import Table from '@/components/Table.vue';
// import tableData from '@/utils/tableData';

export default {
  name: 'Main',
  components: {
    Table,
  },
  // data() {
  //   return {
  //     tableData,
  //   };
  // },
};
</script>

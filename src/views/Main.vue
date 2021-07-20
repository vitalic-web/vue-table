<template>
  <main class="main">
    <h1>Hello Vue Table!</h1>
    <Table :usersDataTable="fullTableData"/>
  </main>
</template>

<script>
import Table from '@/components/Table.vue';
import { transformData } from '@/common/utils';

const axios = require('axios');

export default {
  name: 'Main',
  components: {
    Table,
  },
  data() {
    return {
      tableData: [],
    };
  },
  computed: {
    fullTableData() {
      return transformData(this.tableData);
    },
  },
  async created() {
    axios
      .get('https://mocki.io/v1/34307c00-66b6-4d8f-a1c2-89979dbabdf7')
      // eslint-disable-next-line no-return-assign
      .then((response) => (this.tableData = response.data));
  },
};
</script>

<style>
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

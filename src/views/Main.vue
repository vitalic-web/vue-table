<template>
  <main class="main">
    <h1>Hello Vue Table!</h1>
    <Table />
  </main>
</template>

<script>
import Table from '@/components/Table.vue';

export default {
  name: 'Main',
  components: {
    Table,
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

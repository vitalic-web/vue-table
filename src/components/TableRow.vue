<template>
  <tr>
    <td class="table-row">{{userName}}</td>
    <td class="table-row">{{date}}</td>
    <td class="table-row">{{year}}</td>
  </tr>
</template>

<script>
export default {
  name: 'TableRow',
  props: {
    userName: String,
    date: String,
    year: Number,
  },
};
</script>

<style>
.table-row {
  border: 1px solid black;
}
</style>

<template>
  <tr>
    <td>{{userName}}</td>
    <td>{{date}}</td>
    <td>{{year}}</td>
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

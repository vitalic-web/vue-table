<template>
  <tr>
    <th>{{userNameTitle}}</th>
    <th>{{dateTitle}}</th>
    <th>{{yearTitle}}</th>
  </tr>
</template>

<script>
export default {
  name: 'TableHead',
  props: {
    userNameTitle: String,
    dateTitle: String,
    yearTitle: String,
  },
};
</script>

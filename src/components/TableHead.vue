<template>
  <tr>
    <th @click="sortName">{{userNameTitle}}</th>
    <th @click="sortDate">{{dateTitle}}</th>
    <th @click="sortYear">{{yearTitle}}</th>
  </tr>
</template>

<script>
export default {
  name: 'TableHead',
  props: {
    userNameTitle: String,
    dateTitle: String,
    yearTitle: String,
    sortName: Function,
    sortDate: Function,
    sortYear: Function,
  },
};
</script>

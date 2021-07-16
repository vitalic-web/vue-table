<template>
  <tr>
    <th class="table-head" @click="sortName">{{userNameTitle}}</th>
    <th class="table-head" @click="sortDate">{{dateTitle}}</th>
    <th class="table-head" @click="sortYear">{{yearTitle}}</th>
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

<style>
.table-head {
  border: 1px solid black;
  padding: 0 10px;
}

.table-head:hover {
  cursor: pointer;
}
</style>

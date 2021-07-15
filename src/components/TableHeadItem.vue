<template>
  <th>{{ item }}</th>
</template>

<script>
export default {
  name: 'TableHeadItem',
  props: {
    item: String,
  },
};
</script>

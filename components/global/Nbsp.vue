<template>
  <span>
    <span v-for="index in spaces" :key="index">&nbsp;</span>
  </span>
</template>

<script>
export default {
  props: {
    spaces: {
      type: Number,
      default: 1,
    },
  },
};
</script>
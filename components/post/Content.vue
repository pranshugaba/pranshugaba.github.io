<template>
  <div class="max-w-prose">
    <NuxtContent :document="post" />
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
};
</script>
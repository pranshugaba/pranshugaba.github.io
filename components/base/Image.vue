<template>
  <img
    :src="src"
    :alt="alt"
    class="object-cover rounded-lg max-h-[90vh] mx-auto shadow-md"
  />
</template>

<script>
export default {
  props: {
    src: String,
    alt: String,
  },
};
</script>

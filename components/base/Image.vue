<template>
  <img
    :src="src"
    :alt="alt"
    class="object-cover mx-auto"
    :class="`${rounded ? 'rounded-lg' : ''} ${shadow ? 'shadow-md' : ''}`"
  />
</template>

<script>
export default {
  props: {
    src: String,
    alt: String,
    rounded: {
      default: true,
    },
    shadow: {
      default: true,
    },
  },
};
</script>

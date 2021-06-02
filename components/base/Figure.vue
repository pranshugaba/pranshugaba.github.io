<template>
  <figure>
    <BaseImage :src="src" :alt="alt" />
    <figcaption
      class="mt-3 mb-2 text-xs text-gray-600 dark:text-gray-400 text-center transition-colors"
    >
      <span v-if="caption">
        {{ caption }}
      </span>
      <span v-else-if="caption !== false"> Photo by Pranshu Gaba </span>
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    src: String,
    alt: String,
    caption: String,
  },
};
</script>
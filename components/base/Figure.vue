<template>
  <figure>
    <BaseImage :src="src" :alt="alt" :rounded="rounded" :shadow="shadow" />
    <figcaption
      class="
        mt-3
        mb-2
        text-xs text-gray-600
        dark:text-gray-400
        text-center
        transition-colors
      "
    >
      <span v-if="caption">
        {{ caption }}
      </span>
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    src: String,
    alt: String,
    caption: {
      default: "Photo by Pranshu Gaba",
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    shadow: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
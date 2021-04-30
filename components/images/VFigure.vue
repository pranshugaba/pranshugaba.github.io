<template>
  <figure>
    <VImage :src="imgSrc" />
    <figcaption
      class="mt-2 mb-8 text-sm text-gray-600 dark:text-gray-400 text-center transition-colors"
    >
      <span v-if="caption">
        {{ caption }}
      </span>
      <span v-else-if="caption !== false"> Photo by Pranshu Gaba </span>
    </figcaption>
  </figure>
</template>

<script>
import VImage from "~/components/images/VImage";
export default {
  components: {
    VImage,
  },
  props: {
    imgSrc: String,
    caption: String,
  },
};
</script>
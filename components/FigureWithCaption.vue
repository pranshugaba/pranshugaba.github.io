<template>
  <div>
    <figure v-if="img">
      <FeaturedImage :src="require(`~/assets/images/poems/${img}`)" />
      <figcaption v-if="caption">
        {{ caption }}
      </figcaption>
      <figcaption
        class="my-2 text-sm text-gray-600 dark:text-gray-400 text-center"
        v-else-if="caption !== false"
      >
        Photo by Pranshu Gaba
      </figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  name: "figureWithCaption",
  props: {
    img: String,
    caption: String,
  },
};
</script>

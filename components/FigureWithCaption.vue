<template>
  <figure v-if="img" class="full-width">
    <FeaturedImage :src="require(`~/assets/images/poems/${img}`)" />
    <figcaption v-if="caption">
      {{ caption }}
    </figcaption>
    <figcaption
      class="mt-2 mb-8 text-sm text-gray-600 dark:text-gray-400 text-center transition-colors"
      v-else-if="caption !== false"
    >
      Photo by Pranshu Gaba
    </figcaption>
  </figure>
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

<style scoped>
@media screen and (max-width: 767.9px) {
  .full-width {
    left: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    max-width: 100vw;
    width: 100vw;
    position: relative;
    right: 50%;
  }
}
</style>
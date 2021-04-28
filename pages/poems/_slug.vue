<template>
  <main>
    <h1>{{ poem.title }}</h1>
    <p class="description">{{ poem.summary }}</p>
    <author-chip :authors="authors" :updatedDate="poem.updatedAt" />
    <figure v-if="poem.featuredImage">
      <FeaturedImage
        :src="require(`~/assets/images/poems/${poem.featuredImage}`)"
      />
      <figcaption v-if="poem.caption">
        {{ poem.caption }}
      </figcaption>
      <figcaption v-else-if="poem.caption !== false">
        Photo by Pranshu Gaba
      </figcaption>
    </figure>
    <nuxt-content :document="poem" />

    <TagChips :tags="poem.tags" />
    <PrevNext :prev="prev" :next="next" />
  </main>
</template>

<script>
import FeaturedImage from "../../components/FeaturedImage";
export default {
  components: {
    FeaturedImage,
  },
  async asyncData({ $content, params }) {
    const poem = await $content("poems", params.slug).fetch();

    const authors = await $content("authors")
      .where({ slug: { $in: poem.authors } })
      .fetch();

    const [prev, next] = await $content("poems")
      .only(["title", "slug", "path"])
      .sortBy("createdAt", "desc")
      .surround(params.slug)
      .fetch();

    return { poem, authors, prev, next };
  },
  head() {
    return {
      title: this.poem.title,
      titleTemplate: "%s | A poem by Pranshu Gaba",
      // description: this.poem.summary,
    };
  },
};
</script>

<style lang="scss" scoped>
::v-deep .nuxt-content {
  h1 {
    font-weight: bold;
    font-size: 34px;
  }
  h2 {
    font-weight: bold;
    font-size: 22px;
  }
}
</style>

<template>
  <main>
    <h1 class="mb-2">{{ poem.title }}</h1>
    <p class="text-lg mt-0 mb-6 text-gray-700 dark:text-gray-300">
      {{ poem.summary }}
    </p>

    <AuthorChip
      :authors="authors"
      :updatedDate="poem.updatedAt"
      :readingTime="false"
    />

    <FigureWithCaption :img="poem.featuredImage" :caption="poem.caption" />

    <NuxtContent :document="poem" />

    <TagChips :tags="poem.tags" />

    <PrevNext :prev="prev" :next="next" />
  </main>
</template>

<script>
import FeaturedImage from "~/components/FeaturedImage";

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

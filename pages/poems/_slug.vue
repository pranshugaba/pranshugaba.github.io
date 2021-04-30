<template>
  <main>
    <PostTitle>{{ poem.title }}</PostTitle>
    <p class="text-lg mt-0 mb-6 text-gray-700 dark:text-gray-300">
      {{ poem.summary }}
    </p>

    <PostInfoChip
      :authors="authors"
      :updatedDate="poem.updatedAt"
      :readingTime="'false'"
    />

    <VFigure
      :imgSrc="require(`~/assets/images/poems/${poem.featuredImage}`)"
      :caption="poem.caption"
    />

    <NuxtContent class="text-2xl font-serif" :document="poem" />

    <TagChips :tags="poem.tags" />

    <PrevNextUp :prev="prev" :next="next" :up="up" />
  </main>
</template>

<script>
import VFigure from "~/components/images/VFigure";
import PrevNextUp from "~/components/post_components/PrevNextUp";
import TagChips from "~/components/post_components/TagChips";

export default {
  components: {
    VFigure,
    TagChips,
    PrevNextUp,
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
  data() {
    return {
      up: {
        path: "/poems",
        title: "Poems",
      },
    };
  },
};
</script>
<template>
  <main class="content-width">
    <PostTitle>Articles</PostTitle>
    <PostSubtitle>About GameDev and WebDev</PostSubtitle>
    <ul>
      <li v-for="article of articles" :key="article.slug">
        <PostPreviewFancyList :post="article" />
      </li>
    </ul>
  </main>
</template>

<script>
import { formatDate } from "~/utils/helpers";
export default {
  async asyncData({ $content }) {
    const articles = await $content("articles")
      .only(["title", "slug", "createdAt", "path", "description"])
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      articles,
    };
  },
  methods: {
    formatDate,
  },
  head: {
    title: "Puzzles",
  },
};
</script>

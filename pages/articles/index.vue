<template>
  <main>
    <PostTitle>Articles</PostTitle>
    <PostSubtitle>About Linux and Webdev</PostSubtitle>
    <ul>
      <li v-for="article of articles" :key="article.slug">
        <PostPreviewList :post="article" />
      </li>
    </ul>
  </main>
</template>

<script>
import { formatDate } from "~/utils/date";
export default {
  async asyncData({ $content }) {
    const articles = await $content("articles")
      .only(["title", "slug", "createdAt"])
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

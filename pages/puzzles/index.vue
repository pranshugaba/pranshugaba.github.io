<template>
  <main class="content-width">
    <PostTitle>Puzzles</PostTitle>
    <PostSubtitle>Thought-provoking, mind-bending puzzles</PostSubtitle>
    <ul>
      <li v-for="puzzle of puzzles" :key="puzzle.slug">
        <PostPreviewList :post="puzzle"
          >#{{ puzzle.slug }} - {{ puzzle.title }}
        </PostPreviewList>
      </li>
    </ul>
  </main>
</template>

<script>
import { formatDate } from "~/utils/helpers";
export default {
  async asyncData({ $content }) {
    const puzzles = await $content("puzzles")
      .only(["title", "slug", "createdAt", "path"])
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      puzzles,
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

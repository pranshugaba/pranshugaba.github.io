<template>
  <main>
    <PostTitle>Puzzles</PostTitle>
    <PostSubtitle>Thought-provoking, mind-bending puzzles</PostSubtitle>
    <ul>
      <li v-for="puzzle of puzzles" :key="puzzle.slug">
        <span
          class="font-mono text-gray-500 dark:text-gray-400 transition-colors mr-1"
        >
          {{
            formatDate(puzzle.createdAt, {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })
          }}
          &raquo;
        </span>
        <NuxtLink :to="{ name: 'puzzles-slug', params: { slug: puzzle.slug } }">
          #{{ puzzle.slug }} - {{ puzzle.title }}
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>

<script>
import { formatDate } from "~/utils/date";
export default {
  async asyncData({ $content, params }) {
    const puzzles = await $content("puzzles")
      .only(["title", "description", "slug", "author", "createdAt"])
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

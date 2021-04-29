<template>
  <main>
    <h1 class="mb-2">{{ puzzle.title }}</h1>
    <p class="text-lg mt-0 mb-6 text-gray-600 dark:text-gray-400">
      {{ puzzle.summary }}
    </p>
    <AuthorChip
      :authors="authors"
      :updatedDate="puzzle.updatedAt"
      :readingTime="readingTime(puzzle)"
    />

    <NuxtContent :document="puzzle" />

    <TagChips :tags="puzzle.tags" />

    <div class="authorBios">
      <author-bio
        v-for="author of authors"
        :key="author.slug"
        :author="author"
      />
    </div>
    <PrevNext :prev="prev" :next="next" />
  </main>
</template>

<script>
import { readingTime } from "~/utils/helpers";
export default {
  methods: {
    readingTime,
  },
  async asyncData({ $content, params }) {
    const puzzle = await $content("puzzles", params.slug).fetch();

    const authors = await $content("authors")
      .where({ slug: { $in: puzzle.authors } })
      .fetch();

    const [prev, next] = await $content("puzzles")
      .only(["title", "slug", "path"])
      .sortBy("createdAt", "desc")
      .surround(params.slug)
      .fetch();

    return { puzzle, prev, next, authors };
  },
  head() {
    return {
      title: this.puzzle.title,
      description: this.puzzle.summary,
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/katex@0.13.2/dist/katex.min.css",
        },
      ],
    };
  },
};
</script>

<style scoped>
.nuxt-content h1 {
  font-weight: bold;
  font-size: 34px;
}
.nuxt-content h2 {
  font-weight: bold;
  font-size: 22px;
}
</style>

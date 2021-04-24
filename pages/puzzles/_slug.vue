<template>
  <main>
    <h1>{{ puzzle.title }}</h1>
    <p class="description">{{ puzzle.summary }}</p>
    <p>{{ formatDate(puzzle.updatedAt) }}</p>

    <nuxt-content :document="puzzle" />
    <author :author="puzzle.author" />
    <prev-next :prev="prev" :next="next" />
  </main>
</template>

<script>
import Author from "~/components/Author";
export default {
  components: { Author },
  async asyncData({ $content, params }) {
    const puzzle = await $content("puzzles", params.slug).fetch();

    const [prev, next] = await $content("puzzles")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();

    return { puzzle, prev, next };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
  head() {
    return {
      title: this.puzzle.title,
    };
  },
};
</script>

<style>
.description {
  color: gray;
}
.nuxt-content h1 {
  font-weight: bold;
  font-size: 34px;
}
.nuxt-content h2 {
  font-weight: bold;
  font-size: 22px;
}
</style>

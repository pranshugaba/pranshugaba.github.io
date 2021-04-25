<template>
  <main>
    <h1>{{ puzzle.title }}</h1>
    <p class="description">{{ puzzle.summary }}</p>

    By
    <ul>
      <li v-for="author of authors" :key="author.slug">
        <NuxtLink
          :to="{ name: 'authors-author', params: { author: author.slug } }"
          >{{ author.name }}</NuxtLink
        >
      </li>
    </ul>
    <p>{{ formatDate(puzzle.updatedAt) }}</p>

    <nuxt-content :document="puzzle" />

    Tags:
    <ul>
      <li v-for="tag of puzzle.tags" :key="tag">
        <NuxtLink :to="{ name: 'tags-tag', params: { tag: tag } }">{{
          tag
        }}</NuxtLink>
      </li>
    </ul>
    <prev-next :prev="prev" :next="next" />
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const puzzle = await $content("puzzles", params.slug).fetch();

    const authors = await $content("authors")
      .where({ slug: { $in: puzzle.authors } })
      .fetch();

    const [prev, next] = await $content("puzzles")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();

    return { puzzle, prev, next, authors };
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
      description: this.puzzle.summary,
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

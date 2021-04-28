<template>
  <main>
    <h1>Posts</h1>
    <h2>Poems</h2>
    <ul>
      <li v-for="poem of poems" :key="poem.slug">
        {{ formatDate(poem.createdAt) }} -
        <NuxtLink :to="{ name: 'poems-slug', params: { slug: poem.slug } }">
          {{ poem.title }} - {{ poem.subtitle }}
        </NuxtLink>
      </li>
    </ul>
    <NuxtLink to="/poems"> See all poems </NuxtLink>

    <h2 class="mt-6 mb-2">Puzzles</h2>
    <ul>
      <li v-for="puzzle of puzzles" :key="puzzle.slug">
        {{ formatDate(puzzle.createdAt) }} -
        <NuxtLink :to="{ name: 'puzzles-slug', params: { slug: puzzle.slug } }">
          {{ puzzle.title }} - {{ puzzle.subtitle }}
        </NuxtLink>
      </li>
    </ul>
    <NuxtLink to="/puzzles"> See all puzzles </NuxtLink>
    <h2>Comics</h2>
    <ul>
      <li>Boo!</li>
    </ul>
    <h2>Stories</h2>
    <ul>
      <li>The Errand</li>
    </ul>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const poems = await $content("poems")
      .only(["title", "subtitle", "slug", "createdAt"])
      .sortBy("createdAt", "desc")
      .limit(5)
      .fetch();

    const puzzles = await $content("puzzles")
      .only(["title", "subtitle", "slug", "createdAt"])
      .sortBy("createdAt", "desc")
      .limit(5)
      .fetch();

    return {
      poems,
      puzzles,
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
  head: {
    title: "Posts",
  },
};
</script>
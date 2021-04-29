<template>
  <main>
    <h1>Puzzles</h1>
    <ul>
      <li v-for="puzzle of puzzles" :key="puzzle.slug">
        #{{ puzzle.slug }} &nbsp;
        <NuxtLink :to="{ name: 'puzzles-slug', params: { slug: puzzle.slug } }">
          {{ puzzle.title }}
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const puzzles = await $content("puzzles")
      .only(["title", "description", "img", "slug", "author"])
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      puzzles,
    };
  },
  head: {
    title: "Puzzles",
  },
};
</script>

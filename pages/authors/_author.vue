<template>
  <main>
    <h1>{{ author.name }}</h1>
    <p class="description">{{ author.bio }}</p>

    Puzzles by {{ author.name }}
    <ul>
      <li v-for="puzzle of puzzles" :key="puzzle.slug">
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
    const author = await $content("authors", params.author).fetch();

    const puzzles = await $content("puzzles")
      .where({ authors: { $containsAny: author.slug } })
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .fetch();

    return { params, author, puzzles };
  },
  // head() {
  //   return {
  //     title: this.author.name,
  //     description: this.author.bio,
  //   };
  // },
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

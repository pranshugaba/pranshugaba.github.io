<template>
  <main>
    <h1>{{ tag }}</h1>

    <div v-if="puzzles.length > 0">
      Puzzles tagged with {{ tag }}
      <ul>
        <li v-for="puzzle of puzzles" :key="puzzle.slug">
          <NuxtLink
            :to="{ name: 'puzzles-slug', params: { slug: puzzle.slug } }"
          >
            {{ puzzle.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No posts with this tag.</p>
    </div>
    <p>
      <NuxtLink to="/tags"> View all tags </NuxtLink>
    </p>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const tag = params.tag;

    const puzzles = await $content("puzzles") 
      .where({ tags: { $containsAny: tag } })
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .fetch();

    return { params, puzzles, tag };
  },
  head() {
    return {
      title: this.tag,
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

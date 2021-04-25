<template>
  <main>
    <h1>Poems</h1>
    <ul>
      <li v-for="poem of poems" :key="poem.slug">
        {{ formatDate(poem.createdAt) }} -
        <NuxtLink :to="{ name: 'poems-slug', params: { slug: poem.slug } }">
          {{ poem.title }} - {{ poem.subtitle }}
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const poems = await $content("poems")
      .only(["title", "subtitle", "description", "slug", "createdAt"])
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      poems,
    };
  },

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },

  head: {
    title: "Poems",
  },
};
</script>

<style lang="scss" scoped>
li {
  padding-bottom: 0.75rem;
}
</style>

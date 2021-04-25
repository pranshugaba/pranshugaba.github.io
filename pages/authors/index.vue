<template>
  <main>
    <h1>Authors</h1>
    Authors that have contributed on this website:
    <ul>
      <li v-for="author of authors" :key="author.slug">
        <NuxtLink
          :to="{ name: 'authors-author', params: { author: author.slug } }"
        >
          {{ author.name }}
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const authors = await $content("authors")
      .where({ slug: { $ne: "dummy" } })
      .only(["name", "slug"])
      .sortBy("name", "asc")
      .fetch();

    return {
      authors,
    };
  },
  head: {
    title: "Authors",
  },
};
</script>

<style lang="scss" scoped>
li {
  padding-bottom: 0.75rem;
}
</style>

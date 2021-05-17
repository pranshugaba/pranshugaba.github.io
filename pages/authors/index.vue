<template>
  <main>
    <h1>Authors</h1>
    <p>Authors that have contributed on this website:</p>
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
  async asyncData({ $content }) {
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
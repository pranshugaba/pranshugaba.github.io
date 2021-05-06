<template>
  <main>
    <PostTitle>Posts</PostTitle>
    <PostSubtitle>Poems, puzzles and more!</PostSubtitle>
    <h2>Poems</h2>
    <ul>
      <li v-for="poem of poems" :key="poem.slug">
        <PostPreviewThumbnail
          :post="poem"
          :show-category="false"
          :authors="poem.authors"
        />
      </li>
    </ul>
    <div class="text-right">
      <NuxtLink to="/poems"> See all poems &#10230;</NuxtLink>
    </div>

    <h2 class="mt-6 mb-2">Puzzles</h2>
    <ul>
      <li v-for="puzzle of puzzles" :key="puzzle.slug">
        {{ formatDate(puzzle.createdAt) }} -
        <NuxtLink :to="{ name: 'puzzles-slug', params: { slug: puzzle.slug } }">
          {{ puzzle.title }} - {{ puzzle.subtitle }}
        </NuxtLink>
      </li>
    </ul>
    <div class="text-right">
      <NuxtLink to="/puzzles"> See all puzzles &#10230;</NuxtLink>
    </div>
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
  async asyncData({ $content }) {
    const poems = await $content("poems")
      .only([
        "title",
        "description",
        "slug",
        "createdAt",
        "updatedAt",
        "path",
        "category",
        "featuredImage",
        "authors",
      ])
      .sortBy("createdAt", "desc")
      .limit(3)
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
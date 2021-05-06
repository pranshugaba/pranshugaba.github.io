<template>
  <main>
    <PostTitle>Poems</PostTitle>
    <PostSubtitle>haiku, tankas, and limericks</PostSubtitle>
    <ul>
      <li v-for="poem of poems" :key="poem.slug">
        <PostPreviewThumbnail
          :post="poem"
          :show-category="false"
          :authors="poem.authors"
        />
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const poems = await $content("poems")
      .only([
        "title",
        "description",
        "slug",
        "updatedAt",
        "path",
        "category",
        "featuredImage",
        "authors",
      ])
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
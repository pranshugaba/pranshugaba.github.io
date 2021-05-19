<template>
  <div class="content-width">
    <PostTitle>Poems</PostTitle>
    <PostSubtitle>Haiku, tankas, and limericks</PostSubtitle>
    <ul>
      <li v-for="poem of poems" :key="poem.slug">
        <PostPreviewThumbnail
          :post="poem"
          :show-category="false"
          :authors="filterAuthors(poem.authors)"
        />
      </li>
    </ul>
    <!-- <p class="text-center">
      Poems {{ startPost }} - {{ endPost }} of {{ totalPosts }}
    </p> -->
    <Pagination :totalPages="lastPage" :postsPerPage="postsPerPage" />
  </div>
</template>

<script>
import Pagination from "~/components/pagination/Pagination";
export default {
  components: {
    Pagination,
  },
  async asyncData({ $content, params, error }) {
    const postsPerPage = 5;
    const currentPage = parseInt(params.page);
    const allPosts = await $content("poems").fetch();
    const totalPosts = allPosts.length;
    const lastPage = Math.ceil(totalPosts / postsPerPage);
    const lastPageCount = totalPosts % postsPerPage;
    const postsSkipped = (currentPage - 1) * postsPerPage;
    const startPost = postsSkipped + 1;
    const endPost = Math.min(totalPosts, postsSkipped + postsPerPage);

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
      .skip(postsSkipped)
      .limit(postsPerPage)
      .fetch();

    if (currentPage === 0 || !poems.length) {
      return error({ statusCode: 404, message: "No articles found!" });
    }
    const allAuthors = await $content("authors").fetch();

    return {
      poems,
      postsPerPage,
      currentPage,
      totalPosts,
      lastPage,
      startPost,
      endPost,
      allAuthors,
    };
  },
  head: {
    title: "Poems",
  },
  methods: {
    filterAuthors: function (authorSlugs) {
      const postAuthors = this.allAuthors.filter((post) =>
        authorSlugs.includes(post.slug)
      );
      return postAuthors;
    },
  },
};
</script>

<template>
  <div>
    <PostTitle>Poems</PostTitle>
    <PostSubtitle>Haiku, tankas, and limericks</PostSubtitle>
    <p class="text-center">
      Posts {{ startPost }}-{{ endPost }} of {{ totalPosts }}
    </p>
    <ul>
      <li v-for="poem of poems" :key="poem.slug">
        <PostPreviewThumbnail :post="poem" :show-category="false" />
      </li>
    </ul>
    <p class="text-center">Page {{ currentPage }} of {{ lastPage }}</p>
    <Pagination :totalPages="lastPage" :postsPerPage="postsPerPage" />
  </div>
</template>

<script>
import Pagination from "~/components/navigation/Pagination";
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

    return {
      poems,
      postsPerPage,
      currentPage,
      totalPosts,
      lastPage,
      startPost,
      endPost,
    };
  },
  head: {
    title: "Poems",
  },
};
</script>

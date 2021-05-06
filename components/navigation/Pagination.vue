<template>
  <div class="grid grid-cols-2">
    <NuxtLink
      :to="{
        name: 'poems-page-page',
        params: { page: prevPage },
      }"
    >
      prev page
    </NuxtLink>
    <NuxtLink
      class="text-right"
      :to="{
        name: 'poems-page-page',
        params: { page: nextPage },
      }"
    >
      next page
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    totalPosts: {
      type: Number,
      default: 26,
    },
    postsPerPage: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalPosts / this.postsPerPage);
    },
    prevPage() {
      return this.currentPage > 1 ? this.currentPage - 1 : 1;
    },
    currentPage() {
      return parseInt(this.$route.params.page) || 1;
    },
    nextPage() {
      return this.currentPage < this.totalPages
        ? this.currentPage + 1
        : this.totalPages;
    },
  },
};
</script>
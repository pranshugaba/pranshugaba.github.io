<template>
  <div>
    <ul class="flex items-center justify-center space-x-2 mt-8">
      <li class="disabled">
        <NuxtLink
          :to="{
            name: 'poems-page-page',
            params: { page: prevPage },
          }"
          class="pr-4"
        >
          <button
            :disabled="currentPage === 1 ? true : false"
            class="disabled:text-gray-500 disabled:opacity-50 transition-colors"
          >
            prev
          </button>
        </NuxtLink>
      </li>
      <li v-for="index in totalPages" :key="index">
        <NuxtLink
          :to="{
            name: 'poems-page-page',
            params: { page: index },
          }"
          class="hover:no-underline group"
        >
          <div
            class="px-2 py-0.5 rounded transition-colors"
            :class="index === currentPage ? `current-page` : `other-page`"
          >
            {{ index }}
          </div>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          :to="{
            name: 'poems-page-page',
            params: { page: nextPage },
          }"
          class="pl-4"
        >
          <button
            :disabled="currentPage === totalPages ? true : false"
            class="disabled:text-gray-500 disabled:opacity-50 transition-colors"
          >
            next
          </button>
        </NuxtLink>
      </li>
    </ul>
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

<style scoped>
.current-page {
  @apply bg-primary-light text-white dark:bg-primary-dark dark:text-black
  group-hover:no-underline;
}
.other-page {
  @apply border border-transparent group-hover:no-underline group-hover:border-primary-light dark:group-hover:border-primary-dark;
}
</style>
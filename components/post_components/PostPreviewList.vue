<template>
  <NuxtLink
    :to="post.path"
    class="inline-block hover:no-underline transform transition hover:-translate-y-1 mb-6"
  >
    <div class="flex flex-wrap items-center group">
      <p
        v-if="showCategory"
        class="uppercase text-xs tracking-wider mb-1 text-blue-700 dark:text-blue-300 transition-colors"
      >
        {{ post.category }}
      </p>
      <h2
        class="mt-0 mb-0 text-xl text-black dark:group-hover:text-blue-400 group-hover:text-blue-600"
      >
        {{ post.title }}
      </h2>
      <!-- Truncate description with ellipsis -->
      <p class="text-gray-600 dark:text-gray-400 transition-colors">
        {{ post.description }}
      </p>
      <p class="text-sm text-gray-600 dark:text-gray-400 transition-colors">
        By
        <span v-for="(author, index) of authors" :key="author">
          <span class="text-gray-700 dark:text-gray-300 transition-colors">
            {{ author }}<span v-if="index != authors.length - 1">, </span>
          </span>
        </span>
        &#183;
        {{ formatDate(post.updatedAt) }}
      </p>
    </div>
  </NuxtLink>
</template>

<script>
import { formatDate } from "~/utils/date";

export default {
  props: {
    post: Object,
    authors: {
      type: Array,
    },
    showCategory: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    formatDate,
  },
};
</script>
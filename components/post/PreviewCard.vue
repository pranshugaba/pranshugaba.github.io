<template>
  <NuxtLink
    :to="post.path"
    class="inline-block hover:no-underline transform transition hover:-translate-y-1 mb-6"
  >
    <div
      class="overflow-hidden rounded-lg shadow-lg dark:bg-gray-800 transition-colors group"
    >
      <VImage
        class="w-full"
        :src="require(`~/assets/images/poems/${post.featuredImage}`)"
      />
      <div class="px-4 pt-4">
        <p
          v-if="showCategory"
          class="uppercase text-xs tracking-wider mb-1 text-primary-light dark:text-primary-dark transition-colors"
        >
          {{ post.category }}
        </p>
        <h2
          class="mt-0 mb-0 text-2xl text-black dark:group-hover:text-primary-dark group-hover:text-primary-light"
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
    </div>
  </NuxtLink>
</template>

<script>
import VImage from "~/components/images/VImage";
import { formatDate } from "~/utils/helpers";

export default {
  components: {
    VImage,
  },
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
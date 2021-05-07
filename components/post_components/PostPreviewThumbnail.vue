<template>
  <NuxtLink
    :to="post.path"
    class="inline-block hover:no-underline mb-6"
  >
    <div class="flex flex-wrap items-center group">
      <div class="w-1/3">
        <VImage
          class="rounded-lg shadow-lg"
          :src="require(`~/assets/images/poems/${post.featuredImage}`)"
        />
      </div>
      <div class="w-2/3 pl-4 pt-4">
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
        <p class="text-gray-600 dark:text-gray-400 transition-colors my-1">
          {{ post.description }}
        </p>
        <p class="text-sm text-gray-600 dark:text-gray-400 transition-colors mb-1">
          By
          <span v-for="(author, index) of authors" :key="author.slug">
            <span class="text-gray-700 dark:text-gray-300 transition-colors">
              <NuxtLink :to="author.path"> {{ author.name }}</NuxtLink
              ><span v-if="index != post.authors.length - 1">, </span>
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
import { formatDate } from "~/utils/date";

export default {
  components: {
    VImage,
  },
  props: {
    post: Object,
    showCategory: {
      type: Boolean,
      default: true,
    },
    authors: Array,
  },
  methods: {
    formatDate,
  },
};
</script>
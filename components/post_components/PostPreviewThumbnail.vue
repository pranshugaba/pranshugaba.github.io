<template>
  <NuxtLink :to="post.path" class="inline-block hover:no-underline mb-6">
    <div class="flex flex-wrap items-center group">
      <div class="w-[40%]">
        <VImage :src="require(`~/assets/images/poems/${post.featuredImage}`)" />
      </div>
      <div class="w-[60%] pl-4">
        <p
          v-if="showCategory"
          class="uppercase text-xs tracking-wider mb-1 text-primary-light dark:text-primary-dark transition-colors"
        >
          {{ post.category }}
        </p>
        <h2
          class="mt-0 mb-0 text-xl text-black group-hover:text-primary-light dark:group-hover:text-primary-dark"
        >
          {{ post.title }}
        </h2>
        <!-- Truncate description with ellipsis -->
        <p class="text-gray-600 dark:text-gray-400 transition-colors my-1">
          {{ post.description }}
        </p>
        <p
          class="text-sm text-gray-600 dark:text-gray-400 transition-colors mt-4 mb-1"
        >
          <!-- By
          <span v-for="(author, index) of authors" :key="author.slug">
            <span class="text-gray-700 dark:text-gray-300 transition-colors">
              <NuxtLink :to="author.path"> {{ author.name }}</NuxtLink
              ><span v-if="index != post.authors.length - 1">, </span>
            </span>
          </span>
          &#183; -->
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
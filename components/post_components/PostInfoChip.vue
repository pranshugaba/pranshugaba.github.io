<template>
  <div class="mt-8 mb-10 flex items-center justify-start space-x-3">
    <div v-for="author of authors" :key="author.slug">
      <img
        class="h-12 w-12 rounded-full"
        :src="require(`~/assets/images/authors/${author.avatar}`)"
        alt="Avatar of the author"
      />
    </div>
    <div>
      <span v-for="(author, index) of authors" :key="author.slug">
        <span class="text-gray-700 dark:text-gray-300 transition-colors">
          <NuxtLink
            :to="author.path"
            class="text-gray-800 dark:text-gray-200 transition-colors font-medium"
            >{{ author.name }}</NuxtLink
          ><span v-if="index != authors.length - 1">, </span>
        </span>
      </span>
      <div class="text-gray-600 dark:text-gray-400 text-sm transition-colors">
        {{ formatDateHideCurrentYear(post.updatedAt) }}
        <span v-if="post.showReadingTime">
          <span class="pl-1"> &#183; </span>
          <span class="pl-1">{{ readingTime(post) }} min read</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDateHideCurrentYear, readingTime } from "~/utils/helpers";

export default {
  props: {
    authors: {
      type: Array,
      required: true,
    },
    post: {
      type: Object,
    },
  },
  methods: {
    formatDateHideCurrentYear,
    readingTime,
  },
};
</script>
<template>
  <div class="mt-6 mb-6">
    <NuxtLink :to="post.path" :class="theme" class="text-lg">
      <slot>{{ post.title }} </slot>
    </NuxtLink>
    <div
      class="mt-0.5 mb-1.5 text-gray-900 dark:text-gray-200 transition-colors"
    >
      {{ trimString(post.description, descriptionLength) }}
    </div>
    <div class="text-sm text-gray-500 dark:text-gray-400 transition-colors">
      {{
        formatDate(post.createdAt, {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
      }}
    </div>
  </div>
</template>

<script>
import {
  formatDate,
  getCategoryFromRoute,
  getThemeFromCategory,
  trimString,
} from "~/utils/helpers";

export default {
  props: {
    post: Object,
    descriptionLength: {
      type: Number,
      default: 280,
    },
  },
  methods: {
    formatDate,
    getCategoryFromRoute,
    getThemeFromCategory,
    trimString,
  },
  computed: {
    category: function () {
      return getCategoryFromRoute(this.post.path);
    },
    theme: function () {
      return getThemeFromCategory(this.category);
    },
  },
};
</script>
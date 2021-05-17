<template>
  <div>
    <span
      class="font-mono text-sm text-gray-500 dark:text-gray-400 transition-colors mr-1"
    >
      {{
        formatDate(post.createdAt, {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
      }}
      &raquo;
    </span>
    <NuxtLink :to="post.path" :class="theme">
      <slot>{{ post.title }} </slot>
    </NuxtLink>
  </div>
</template>

<script>
import { formatDate } from "~/utils/helpers";
import { getCategoryFromRoute, getThemeFromCategory } from "~/utils/helpers";

export default {
  props: {
    post: Object,
  },
  methods: {
    formatDate,
    getCategoryFromRoute,
    getThemeFromCategory,
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
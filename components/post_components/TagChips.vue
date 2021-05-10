<template>
  <ul class="mt-12 mb-4 flex items-center justify-start space-x-3">
    <li
      class="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-md text-sm"
      v-for="tag of tags"
      :key="tag"
    >
      <NuxtLink
        class="text-gray-800 dark:text-gray-200 transition-colors"
        :to="{ name: 'tags-tag', params: { tag: tag } }"
      >
        {{ kebabToTitle(tag) }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
import { kebabToTitle } from "~/utils/helpers";
export default {
  name: "tagChips",
  props: {
    tags: {
      type: Array,
    },
  },
  methods: {
    kebabToTitle,
  },
};
</script>

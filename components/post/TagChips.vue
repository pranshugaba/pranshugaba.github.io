<template>
  <ul class="mt-16 mb-4 flex items-center justify-start space-x-3">
    <NuxtLink
      class="text-gray-800 dark:text-gray-200 transition-colors hover:no-underline group"
      :to="{ name: 'tags-tag', params: { tag: tag } }"
      v-for="tag of tags"
      :key="tag"
    >
      <li
        class="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-md text-sm group-hover:bg-primary-light transition-colors group-hover:text-white dark:group-hover:bg-primary-dark dark:group-hover:text-black"
      >
        {{ kebabToTitle(tag) }}
      </li>
    </NuxtLink>
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

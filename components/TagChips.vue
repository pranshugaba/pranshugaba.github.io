<template>
  <ul class="my-6 flex items-center justify-start space-x-3">
    <li class="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-md text-sm" v-for="tag of tags" :key="tag">
      <NuxtLink :to="{ name: 'tags-tag', params: { tag: tag } }">
        {{ tag }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  name: "tagChips",
  props: {
    tags: {
      type: Array,
    },
  },
};
</script>

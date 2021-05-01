<template>
  <div class="mb-12">
    <hr class="border-blue-600 dark:border-blue-400 transition-colors"/>
    <div
      class="mt-6 mb-3 text-gray-700 dark:text-gray-300 transition-colors uppercase tracking-wider"
    >
      Written by
    </div>
    <div
      v-for="author of authors"
      :key="author.slug"
      class="mb-6 px-4 py-4 flex items-center justify-start space-x-4 bg-gray-200 dark:bg-gray-700 transition-colors rounded-xl"
    >
      <img
        class="h-20 rounded-xl"
        :src="require(`~/assets/images/authors/${author.avatar}`)"
        alt="Avatar of the author"
      />
      <div>
        <div class="text-lg font-semibold">
          <NuxtLink :to="author.path"> {{ author.name }} </NuxtLink>
        </div>
        <p class="my-0 leading-normal">{{ author.bio }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    authors: {
      type: Array,
    },
  },
};
</script>

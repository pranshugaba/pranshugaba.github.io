<template>
  <div class="my-6 px-4 py-4 flex items-center justify-center space-x-4 bg-gray-200 dark:bg-gray-700 rounded-xl">
    <img
      class="h-20 rounded-xl"
      :src="require(`~/assets/images/authors/${author.avatar}`)"
      alt="Avatar of the author"
    />
    <div>
      <div class="text-lg font-semibold">
        <NuxtLink :to="author.path"> {{ author.name }} </NuxtLink>
      </div>
      <p class="my-0">{{ author.bio }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
};
</script>

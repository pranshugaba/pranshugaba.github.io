<template>
  <div class="mb-12">
    <hr
      class="border-primary-light dark:border-primary-dark transition-colors"
    />
    <div
      class="
        mt-4
        mb-4
        text-gray-700
        dark:text-gray-300
        transition-colors
        uppercase
        tracking-wider
      "
    >
      Written by
    </div>
    <div
      v-for="author of authors"
      :key="author.slug"
      class="
        mb-6
        px-4
        py-4
        flex
        items-center
        justify-start
        space-x-4
        bg-primary-light bg-opacity-10
        dark:bg-primary-dark dark:bg-opacity-20
        transition-colors
        rounded-xl
      "
    >
      <NuxtImg
        class="h-20 rounded-xl"
        :src="`/img/authors/${author.avatar}`"
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

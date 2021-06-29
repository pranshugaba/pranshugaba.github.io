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
        py-6
        sm:flex
        items-center
        justify-start
        gap-4
        bg-primary-light bg-opacity-10
        dark:bg-primary-dark dark:bg-opacity-20
        transition-colors
        rounded-xl
      "
    >
      <NuxtImg
        class="h-24 sm:h-20 rounded-xl mx-auto mb-2 sm:my-0"
        :src="`/img/authors/${author.avatar}`"
        alt="Avatar of the author"
      />
      <div>
        <div
          class="text-lg text-center sm:text-left mb-2 sm:mb-1 font-semibold"
        >
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

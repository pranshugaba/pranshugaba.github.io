<template>
  <div class="flex items-center mb-10">
    <div class="w-1/3">
      <NuxtImg
        :src="`/img/reading-list/${book.cover}`"
        class="rounded-sm shadow-md"
      />
    </div>
    <div class="w-2/3 pl-4">
      <h3 class="mb-0">{{ book.title }}</h3>
      <p class="my-2">{{ book.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    book: Object,
  },
};
</script>
<template>
  <NuxtLink
    :to="post.path"
    class="inline-block hover:no-underline transform transition hover:-translate-y-1.5 mb-6"
  >
    <div class="overflow-hidden rounded-lg shadow-lg dark:bg-gray-800 group">
      <VImage
        class="w-full"
        :src="require(`~/assets/images/poems/${post.featuredImage}`)"
      />
      <div class="pl-4 pt-4">
        <PostTitle
          class="mb-0 text-2xl text-black dark:group-hover:text-blue-400 group-hover:text-blue-600"
          >{{ post.title }}</PostTitle
        >
        <p class="text-gray-600 dark:text-gray-400 transition-colors">
          {{ post.description }}
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
import VImage from "~/components/images/VImage";
export default {
  components: {
    VImage,
  },
  props: {
    post: Object,
  },
};
</script>
<template>
  <div>
    <PostCategory>{{ post.category }}</PostCategory>
    <PostTitle>{{ post.title }}</PostTitle>
    <PostSubtitle>{{ post.subtitle }}</PostSubtitle>

    <PostInfoChip :authors="authors" :post="post" />
  </div>
</template>

<script>
import { readingTime } from "~/utils/helpers";
export default {
  props: {
    post: Object,
    authors: Array,
  },
  methods: {
    readingTime,
  },
};
</script>
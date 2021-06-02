<template>
  <div>
    <PostCategory>{{ category }}</PostCategory>
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
    category: {
      type: String,
      default: function () {
        return this.post.category;
      },
    },
  },
  methods: {
    readingTime,
  },
};
</script>
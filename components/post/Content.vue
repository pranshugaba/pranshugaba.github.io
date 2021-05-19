<template>
  <div class="content-width">
    <PostHeading :post="post" :authors="authors" />

    <BaseFigure
      v-if="post.featuredImage"
      :src="require(`~/assets/images/puzzles/${post}.featuredImage}`)"
      :caption="post.caption"
    />
    <NuxtContent :document="post" />

    <PostTagChips :tags="post.tags" />

    <PostAuthorBios :authors="authors" />
    <PostPrevNextUp :prev="prev" :next="next" :up="up" />
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
    authors: Object,
  },
};
</script>
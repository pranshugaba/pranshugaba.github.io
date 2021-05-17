<template>
  <main class="content-width">
    <PostTitle>{{ kebabToTitle(tag) }}</PostTitle>

    <div v-if="posts.length > 0">
      <PostSubtitle>Posts tagged with {{ tag }}</PostSubtitle>
      <ul>
        <li v-for="post of posts" :key="post.slug">
          <PostPreviewList :post="post" />
        </li>
      </ul>
    </div>
    <div v-else>
      <PostSubtitle>No posts with this tag.</PostSubtitle>
    </div>
    <div class="text-right">
      <NuxtLink to="/tags"> See all tags &#10230;</NuxtLink>
    </div>
  </main>
</template>

<script>
import { kebabToTitle } from "~/utils/helpers";
export default {
  methods: {
    kebabToTitle,
  },
  async asyncData({ $content, params }) {
    const tag = params.tag;

    const posts = await $content("/", { deep: true })
      .where({
        tags: { $contains: tag },
      })
      .only(["title", "slug", "path", "createdAt"])
      .sortBy("createdAt", "desc")
      .fetch();

    return { params, posts, tag };
  },
  head() {
    return {
      title: this.tag,
    };
  },
};
</script>
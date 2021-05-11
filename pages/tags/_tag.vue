<template>
  <main>
    <h1>{{ tag }}</h1>

    <div v-if="posts.length > 0">
      <p>Posts tagged with {{ tag }}</p>
      <ul>
        <li v-for="post of posts" :key="post.slug">
          <PostPreviewList :post="post" />
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No posts with this tag.</p>
    </div>
    <div class="text-right">
      <NuxtLink to="/tags"> See all tags &#10230;</NuxtLink>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const tag = params.tag;

    const posts = await $content("/", { deep: true })
      .where({
        tags: { $contains: tag },
      })
      .only(["title", "slug", "path", "createdAt"])
      .sortBy("createdAt", "asc")
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
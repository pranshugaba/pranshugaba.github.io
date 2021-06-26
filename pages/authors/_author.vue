<template>
  <main class="max-w-screen-lg">
    <div class="mb-12 md:flex md:items-center md:justify-between">
      <NuxtImg
        :src="`/img/authors/${author.avatar}`"
        class="
          rounded-3xl
          max-w-[40%]
          sm:max-w-[30%]
          md:max-w-[20%]
          mx-auto
          md:mx-0
          md:mr-8
          my-8
          md:my-0
          shadow-md
        "
      />
      <div>
        <PostSubtitle class="mb-0">Posts by</PostSubtitle>
        <PostTitle>{{ author.name }}</PostTitle>
        <p class="text-lg mb-0">{{ author.bio }}</p>
      </div>
    </div>
    <ul class="content-width mt-8">
      <li v-for="post of posts" :key="post.slug">
        <PostPreviewList :post="post" />
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const author = await $content("authors", params.author).fetch();

    const posts = await $content("/", { deep: true })
      .where({ authors: { $contains: author.slug } })
      .only(["title", "slug", "createdAt", "path"])
      .sortBy("createdAt", "desc")
      .fetch();

    return { params, author, posts };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
  // head() {
  //   return {
  //     title: this.author.name,
  //     description: this.author.bio,
  //   };
  // },
};
</script>

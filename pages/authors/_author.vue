<template>
  <main class="max-w-screen-lg">
    <div class="block md:flex md:items-center md:justify-between">
      <NuxtImg
        :src="`/img/authors/${author.avatar}`"
        class="rounded-3xl max-w-1/4 md:max-w-[20%] mx-auto md:mx-0 md:mr-8 my-8 md:my-0 shadow-md"
      />
      <div>
        <p class="mb-0">Posts by</p>
        <h1 class="mb-0">{{ author.name }}</h1>
        <p class="description">{{ author.bio }}</p>
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
import VImage from "~/components/images/VImage";
export default {
  components: {
    VImage,
  },
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

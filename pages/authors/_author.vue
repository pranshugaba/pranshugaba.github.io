<template>
  <main>
    <VImage
      class="rounded-full max-w-1/4 mx-auto"
      :src="require(`~/assets/images/authors/${author.avatar}`)"
    />
    <p class="mb-0">Posts by</p>
    <h1 class="mb-0">{{ author.name }}</h1>
    <p class="description">{{ author.bio }}</p>
    <ul>
      <li v-for="post of posts" :key="post.slug">
        {{ formatDate(post.createdAt) }} -
        <NuxtLink :to="post.path">
          {{ post.title }}
        </NuxtLink>
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

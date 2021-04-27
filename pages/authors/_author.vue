<template>
  <main>
    <img
      class="avatar"
      :src="require(`~/assets/images/authors/${author.avatar}`)"
      alt="Avatar of the author"
    />
    <p>Posts by</p>
    <h1>{{ author.name }}</h1>
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

<style>
.description {
  color: gray;
}
.nuxt-content h1 {
  font-weight: bold;
  font-size: 34px;
}
.nuxt-content h2 {
  font-weight: bold;
  font-size: 22px;
}

.avatar {
  width: 96px;
  border-radius: 10px;
}
</style>

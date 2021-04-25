<template>
  <main>
    <h1>{{ poem.title }}</h1>
    
    <p class="description">{{ poem.summary }}</p>
    By
    <ul>
      <li v-for="author of authors" :key="author.slug">
        <NuxtLink
          :to="{ name: 'authors-author', params: { author: author.slug } }"
          >{{ author.name }}</NuxtLink
        >
      </li>
    </ul>
    <p>{{ formatDate(poem.updatedAt) }}</p>

    <nuxt-content :document="poem" />

    Tags:
    <ul>
      <li v-for="tag of poem.tags" :key="tag">
        <NuxtLink :to="{ name: 'tags-tag', params: { tag: tag } }">{{
          tag
        }}</NuxtLink>
      </li>
    </ul>
    <prev-next-poem :prev="prev" :next="next" />
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const poem = await $content("poems", params.slug).fetch();

    const authors = await $content("authors")
      .where({ slug: { $in: poem.authors } })
      .fetch();

    const [prev, next] = await $content("poems")
      .only(["title", "slug"])
      .sortBy("createdAt", "desc")
      .surround(params.slug)
      .fetch();

    return { poem, authors, prev, next };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
  head() {
    return {
      title: this.poem.title,
      // description: this.poem.summary,
    };
  },
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
</style>

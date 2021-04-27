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
    <figure v-if="poem.featuredImage">
      <img :src="require(`~/assets/images/poems/${poem.featuredImage}`)" />
      <figcaption v-if="poem.caption">
        {{ poem.caption }}
      </figcaption>
      <figcaption v-else-if="poem.caption !== false">
        Photo by Pranshu Gaba
      </figcaption>
    </figure>
    <nuxt-content :document="poem" />

    <ul class="tagList">
      <li class="tagItem" v-for="tag of poem.tags" :key="tag">
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
      titleTemplate: "%s | A poem by Pranshu Gaba",
      // description: this.poem.summary,
    };
  },
};
</script>

<style lang="scss" scoped>

::v-deep .nuxt-content {
  h1 {
    font-weight: bold;
    font-size: 34px;
  }
  h2 {
    font-weight: bold;
    font-size: 22px;
  }
}

.description {
  color: gray;
}

.tagList {
  display: flex;
  list-style: none;
  padding-left: 0;
  margin-top: 2rem;
}

.tagItem {
  background-color: #e9e9e9;
  border-radius: 5px;
  padding: 2px 4px;
  margin-right: 10px;
}
</style>

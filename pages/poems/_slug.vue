<template>
  <main>
    <h1>{{ poem.title }}</h1>
    <p class="description">{{ poem.summary }}</p>
    <ul class="author-bios">
      <li v-for="author of authors" :key="author.slug">
        <author-chip :author="author" />
      </li>
    </ul>
    <p>{{ formatDate(poem.updatedAt) }}</p>
    <figure v-if="poem.featuredImage">
      <img
        class="featured-img"
        :src="require(`~/assets/images/poems/${poem.featuredImage}`)"
      />
      <figcaption v-if="poem.caption">
        {{ poem.caption }}
      </figcaption>
      <figcaption v-else-if="poem.caption !== false">
        Photo by Pranshu Gaba
      </figcaption>
    </figure>
    <nuxt-content :document="poem" />

    <ul class="tag-list">
      <li class="tag-item" v-for="tag of poem.tags" :key="tag">
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

.tag-list {
  display: flex;
  list-style: none;
  padding-left: 0;
  margin-top: 2rem;
}

.tag-item {
  background-color: #f2f2f2;
  border-radius: 5px;
  padding: 4px 8px;
  margin-right: 10px;
}

.author-bios {
  list-style: none;
  padding-left: 0;
}

figcaption {
  width: 100%;
  margin: 10px auto;
  font-size: 0.8rem;
  color: #333;
  text-align: right;
}

.featured-img {
  border-radius: 15px;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.3);
}
</style>

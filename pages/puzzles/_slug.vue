<template>
  <main>
    <h1>{{ puzzle.title }}</h1>
    <p class="description">{{ puzzle.summary }}</p>

    <ul class="author-bios">
      <li v-for="author of authors" :key="author.slug">
        <author-chip :author="author" />
      </li>
    </ul>
    <p>{{ formatDate(puzzle.updatedAt) }}</p>

    <nuxt-content :document="puzzle" />

    <ul class="tag-list">
      <li class="tag-item" v-for="tag of puzzle.tags" :key="tag">
        <NuxtLink :to="{ name: 'tags-tag', params: { tag: tag } }">{{
          tag
        }}</NuxtLink>
      </li>
    </ul>

    <div class="authorBios">
      <author-bio
        v-for="author of authors"
        :key="author.slug"
        :author="author"
      />
    </div>
    <prev-next :prev="prev" :next="next" />
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const puzzle = await $content("puzzles", params.slug).fetch();

    const authors = await $content("authors")
      .where({ slug: { $in: puzzle.authors } })
      .fetch();

    const [prev, next] = await $content("puzzles")
      .only(["title", "slug"])
      .sortBy("createdAt", "desc")
      .surround(params.slug)
      .fetch();

    return { puzzle, prev, next, authors };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
  head() {
    return {
      title: this.puzzle.title,
      description: this.puzzle.summary,
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/katex@0.13.2/dist/katex.min.css",
        },
      ],
    };
  },
};
</script>

<style scoped>
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
</style>

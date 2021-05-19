<template>
  <main class="content-width">
    <PostHeading :post="article" :authors="authors" />

    <NuxtContent :document="article" />

    <PostTagChips :tags="article.tags" />

    <PostAuthorBios :authors="authors" />
    <PostPrevNextUp :prev="prev" :next="next" :up="up" />
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    const authors = await $content("authors")
      .where({ slug: { $in: article.authors } })
      .fetch();

    const [prev, next] = await $content("articles")
      .only(["title", "slug", "path", "createdAt"])
      .sortBy("createdAt", "desc")
      .surround(params.slug)
      .fetch();

    return { article, prev, next, authors };
  },
  head() {
    return {
      title: this.article.title,
      description: this.article.description,
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/katex@0.13.2/dist/katex.min.css",
        },
      ],
    };
  },
  data() {
    return {
      up: {
        path: "/articles",
        title: "Articles",
      },
    };
  },
};
</script>
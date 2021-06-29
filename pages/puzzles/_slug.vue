<template>
  <main class="content-width">
    <PostHeading
      :category="`${puzzle.category} #${puzzle.slug}`"
      :post="puzzle"
      :authors="authors"
    />

    <BaseFigure
      v-if="puzzle.featuredImage"
      :src="require(`~/assets/images/puzzles/${puzzle.featuredImage}`)"
      :caption="puzzle.caption"
    />

    <NuxtContent :document="puzzle" />

    <PostTagChips :tags="puzzle.tags" />

    <PostAuthorBios :authors="authors" />
    <PostPrevNextUp :prev="prev" :next="next" :up="up" />
  </main>
</template>

<script>
import { readingTime } from "~/utils/helpers";

export default {
  methods: {
    readingTime,
  },
  async asyncData({ $content, params }) {
    const puzzle = await $content("puzzles", params.slug).fetch();

    const authors = await $content("authors")
      .where({ slug: { $in: puzzle.authors } })
      .fetch();

    const [prev, next] = await $content("puzzles")
      .only(["title", "slug", "path"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();

    return { puzzle, prev, next, authors };
  },
  head() {
    return {
      title: this.puzzle.title,
      // description: this.puzzle.description,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.puzzle.description,
        },
        // Open Graph
        { hid: "og:title", property: "og:title", content: this.puzzle.title },
        {
          hid: "og:description",
          property: "og:description",
          content: this.puzzle.description,
        },
        // Twitter Card
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.puzzle.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.puzzle.description,
        },
      ],
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
        path: "/puzzles",
        title: "Puzzles",
      },
    };
  },
};
</script>
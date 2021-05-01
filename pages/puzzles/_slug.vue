<template>
  <main>
    <PostHeading :post="puzzle" :authors="authors" />

    <NuxtContent :document="puzzle" />

    <TagChips :tags="puzzle.tags" />

    <PostAuthorBios :authors="authors" />
    <PrevNextUp :prev="prev" :next="next" :up="up" />
  </main>
</template>

<script>
import { readingTime } from "~/utils/helpers";
import VFigure from "~/components/images/VFigure";
import PrevNextUp from "~/components/post_components/PrevNextUp";
import TagChips from "~/components/post_components/TagChips";
import PostAuthorBios from "~/components/post_components/PostAuthorBios";

export default {
  components: {
    VFigure,
    PrevNextUp,
    TagChips,
    PostAuthorBios,
  },
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
      .sortBy("createdAt", "desc")
      .surround(params.slug)
      .fetch();

    return { puzzle, prev, next, authors };
  },
  head() {
    return {
      title: this.puzzle.title,
      description: this.puzzle.description,
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
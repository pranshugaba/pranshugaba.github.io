<template>
  <main>
    <PostTitle>Hello There!</PostTitle>
    <PostSubtitle>How are you?</PostSubtitle>
    <p>
      I am Pranshu Gaba. I am a PhD student in computer science. Welcome to my
      (new) website.
    </p>
    <h2>Recent posts</h2>
    <h3>Puzzles</h3>
    <ul>
      <li v-for="puzzle of puzzles" :key="puzzle.slug">
        <span
          class="font-mono text-sm text-gray-500 dark:text-gray-400 transition-colors mr-1"
        >
          {{
            formatDate(puzzle.createdAt, {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })
          }}
          &raquo;
        </span>
        <NuxtLink :to="{ name: 'puzzles-slug', params: { slug: puzzle.slug } }">
          #{{ puzzle.slug }} - {{ puzzle.title }}
        </NuxtLink>
      </li>
    </ul>
    <!-- <div class="text-right">
      <NuxtLink to="/puzzles"> See all puzzles &#10230;</NuxtLink>
    </div> -->
    <h3>Poems</h3>
    <ul>
      <li v-for="poem of poems" :key="poem.slug">
        <PostPreviewThumbnail
          :post="poem"
          :show-category="false"
          :authors="filterAuthors(poem.authors)"
        />
      </li>
    </ul>
    <div class="text-right">
      <NuxtLink to="/poems"> See all poems &#10230;</NuxtLink>
    </div>

    <!-- <h2>Comics</h2>
    <ul>
      <li>Boo!</li>
    </ul>
    <h2>Stories</h2>
    <ul>
      <li>The Errand</li>
    </ul> -->
  </main>
</template>

<script>
import { formatDate } from "~/utils/date";

export default {
  async asyncData({ $content }) {
    const poems = await $content("poems")
      .only([
        "title",
        "description",
        "slug",
        "createdAt",
        "updatedAt",
        "path",
        "category",
        "featuredImage",
        "authors",
      ])
      .sortBy("createdAt", "desc")
      .limit(2)
      .fetch();

    const allAuthors = await $content("authors").fetch();

    const puzzles = await $content("puzzles")
      .only(["title", "subtitle", "slug", "createdAt"])
      .sortBy("createdAt", "desc")
      .limit(5)
      .fetch();

    return {
      poems,
      puzzles,
      allAuthors,
    };
  },
  methods: {
    formatDate,
    filterAuthors: function (authorSlugs) {
      const postAuthors = this.allAuthors.filter((post) =>
        authorSlugs.includes(post.slug)
      );
      return postAuthors;
    },
  },
  head: {
    title: "Home",
  },
};
</script>
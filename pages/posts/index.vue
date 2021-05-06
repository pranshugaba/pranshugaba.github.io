<template>
  <main>
    <PostTitle>Posts</PostTitle>
    <PostSubtitle>Puzzles, poems and more!</PostSubtitle>
    <h2>Puzzles</h2>
    <ul>
      <li v-for="puzzle of puzzles" :key="puzzle.slug">
        <span class="text-gray-500 dark:text-gray-400 transition-colors mr-1">
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
    <h2>Poems</h2>
    <ul>
      <li v-for="poem of poems" :key="poem.slug">
        <PostPreviewThumbnail
          :post="poem"
          :show-category="false"
          :authors="poem.authors"
        />
      </li>
    </ul>
    <div class="text-right">
      <NuxtLink to="/poems"> See all poems &#10230;</NuxtLink>
    </div>

    <h2>Comics</h2>
    <ul>
      <li>Boo!</li>
    </ul>
    <h2>Stories</h2>
    <ul>
      <li>The Errand</li>
    </ul>
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
      .limit(3)
      .fetch();

    const puzzles = await $content("puzzles")
      .only(["title", "subtitle", "slug", "createdAt"])
      .sortBy("createdAt", "desc")
      .limit(5)
      .fetch();

    return {
      poems,
      puzzles,
    };
  },
  methods: {
    formatDate,
  },
  head: {
    title: "Posts",
  },
};
</script>
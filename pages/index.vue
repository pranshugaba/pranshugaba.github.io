<template>
  <main class="max-w-screen-lg">
    <NavigationHero img="/img/yellow.webp">
      <PostTitle>Hello There!</PostTitle>
      <PostSubtitle>How are you?</PostSubtitle>
      <p>
        I am Pranshu Gaba. I am a PhD student in computer science. Welcome to my
        (new) website!
      </p>
    </NavigationHero>

    <h2>Recent posts</h2>
    <h3>Puzzles</h3>
    <ul class="theme-puzzle">
      <li v-for="puzzle of puzzles" :key="puzzle.slug">
        <PostPreviewList :post="puzzle"
          >#{{ puzzle.slug }} - {{ puzzle.title }}
        </PostPreviewList>
      </li>
    </ul>

    <h3>Articles</h3>
    <ul class="theme-article">
      <li v-for="article of articles" :key="article.slug">
        <PostPreviewList :post="article" />
      </li>
    </ul>

    <h3>Poems</h3>
    <ul class="theme-poem">
      <li v-for="poem of poems" :key="poem.slug">
        <PostPreviewList :post="poem" />
      </li>
    </ul>

    <div class="theme-poem text-right">
      <NuxtLink to="/poems/page/1"> See all poems &#10230;</NuxtLink>
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
import { formatDate } from "~/utils/helpers";

export default {
  async asyncData({ $content }) {
    const allAuthors = await $content("authors").fetch();

    const poems = await $content("poems")
      .only(["title", "slug", "createdAt", "path"])
      .sortBy("createdAt", "desc")
      .limit(3)
      .fetch();

    const puzzles = await $content("puzzles")
      .only(["title", "slug", "createdAt", "path"])
      .sortBy("createdAt", "desc")
      .limit(3)
      .fetch();

    const articles = await $content("articles")
      .only(["title", "slug", "createdAt", "path"])
      .sortBy("createdAt", "desc")
      .limit(3)
      .fetch();

    return {
      allAuthors,
      articles,
      poems,
      puzzles,
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
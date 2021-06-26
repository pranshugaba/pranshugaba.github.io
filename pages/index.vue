<template>
  <main class="max-w-screen-lg">
    <SocialHead title="Home" image="/img/authors/pranshu.webp" />
    <PageHero
      img="/img/yellow.webp"
      alt="Pranshu Gaba standing in front of yellow flowers, holding a yellow umbrella."
    >
      <PostTitle>Hello There!</PostTitle>
      <PostSubtitle>How are you?</PostSubtitle>
      <p>
        I am Pranshu Gaba. I am a PhD student in computer science. Welcome to my
        (new) website!
      </p>
    </PageHero>

    <div
      class="
        border-t border-primary-light
        dark:border-primary-dark
        transition-colors
        mt-12
      "
    >
      <h2 class="font-medium text-4xl tracking-tight mt-12">Recent posts</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div
          class="
            theme-article
            p-4
            bg-primary-dark bg-opacity-10
            rounded-xl
            transition-colors
          "
        >
          <h3
            class="
              pb-0.5
              mt-0
              border-b-2 border-primary-light border-dotted
              dark:border-primary-dark
              transition-colors
              max-w-max
            "
          >
            Articles
          </h3>
          <ul>
            <li v-for="article of articles" :key="article.slug">
              <PostPreviewFancyList :post="article" :descriptionLength="140" />
            </li>
          </ul>
        </div>

        <div class="theme-poem p-4 bg-primary-dark bg-opacity-10 rounded-xl">
          <h3
            class="
              pb-0.5
              mt-0
              border-b-2 border-dotted border-primary-light
              dark:border-primary-dark
              transition-colors
              max-w-max
            "
          >
            Poems
          </h3>
          <ul>
            <li v-for="poem of poems" :key="poem.slug">
              <PostPreviewFancyList :post="poem" />
            </li>
          </ul>
          <div class="text-right">
            <NuxtLink to="/poems/page/1">
              See all {{ totalPoems }} poems -></NuxtLink
            >
          </div>
        </div>

        <div class="theme-puzzle p-4 bg-primary-dark bg-opacity-10 rounded-xl">
          <h3
            class="
              pb-0.5
              mt-0
              border-b-2 border-dotted border-primary-light
              dark:border-primary-dark
              transition-colors
              max-w-max
            "
          >
            Puzzles
          </h3>
          <ul>
            <li v-for="puzzle of puzzles" :key="puzzle.slug">
              <PostPreviewFancyList :post="puzzle"
                >#{{ puzzle.slug }} - {{ puzzle.title }}
              </PostPreviewFancyList>
            </li>
          </ul>
        </div>

        <!-- <h2>Comics</h2>
    <ul>
      <li>Boo!</li>
    </ul>
    <h2>Stories</h2>
    <ul>
      <li>The Errand</li>
    </ul> -->
      </div>
    </div>
  </main>
</template>

<script>
import { formatDate } from "~/utils/helpers";

export default {
  async asyncData({ $content }) {
    const allAuthors = await $content("authors").fetch();

    const poems = await $content("poems")
      .only(["title", "slug", "createdAt", "path", "description"])
      .sortBy("createdAt", "desc")
      .limit(3)
      .fetch();

    const allPoems = await $content("poems").only(["slug"]).fetch();
    const totalPoems = allPoems.length;

    const puzzles = await $content("puzzles")
      .only(["title", "slug", "createdAt", "path", "description"])
      .sortBy("createdAt", "desc")
      .limit(3)
      .fetch();

    const articles = await $content("articles")
      .only(["title", "slug", "createdAt", "path", "description"])
      .sortBy("createdAt", "desc")
      .limit(3)
      .fetch();

    return {
      allAuthors,
      articles,
      poems,
      totalPoems,
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
};
</script>
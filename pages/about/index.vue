<template>
  <main class="max-w-screen-lg">
    <div class="block md:flex md:items-center md:justify-between">
      <NuxtImg
        src="/img/about/pranshu_cover.webp"
        class="sm:max-w-3/4 md:max-w-[45%] mx-auto md:mx-0 md:mr-8 my-8 md:my-0 rounded-xl shadow-md"
      />
      <div>
        <PostTitle>About Me</PostTitle>
        <p>
          I am a PhD student in Theoretical Computer Science at
          <NavigationExtLink to="https://www.tifr.res.in/"
            >TIFR, Mumbai</NavigationExtLink
          >. I did my undergraduate studies in Maths at
          <NavigationExtLink to="https://iisc.ac.in/"
            >IISc, Bangalore</NavigationExtLink
          >.
        </p>

        <p>
          My research interests include (but are not limited to) Automata
          Theory, Logic, Discrete Maths, and Algorithms.
        </p>
        <p>
          I
          <NuxtLink to="/poems">make photopoetry</NuxtLink>,
          <NuxtLink to="/puzzles">create puzzles</NuxtLink>, draw comics,
          develop apps and games, and write stories.
        </p>
        <p>
          I also love playing chess, solving puzzles, swimming and cycling but
          not both at once.
        </p>
      </div>
    </div>
    <div class="content-width">
      <h2>Reading</h2>
      <p>I am currently reading The Hobbit, or There and Back again.</p>
      <div class="text-right">
        <NuxtLink to="/reading-list">See my reading list &#10230;</NuxtLink>
      </div>

      <h2>Projects</h2>
      <ul>
        <li>Decimal Clock</li>
        <li>Maths Wiki</li>
      </ul>
      <div class="text-right">
        <NuxtLink to="/projects"
          >See what I have been working on &#10230;</NuxtLink
        >
      </div>

      <h2>Uses</h2>
      <ul>
        <li>Arch Linux</li>
        <li>VSCodium</li>
        <li>Godot</li>
      </ul>
      <div class="text-right">
        <NuxtLink to="/uses">See what I use &#10230;</NuxtLink>
      </div>

      <h1 class="mt-16">About this site</h1>
      <p>
        This site is built using
        <NavigationExtLink to="https://nuxtjs.org/">Nuxt.js</NavigationExtLink>
        and
        <NavigationExtLink to="https://vuejs.org/">Vue.js</NavigationExtLink>.
        You can find the source code for this site on
        <NavigationExtLink
          to="https://github.com/pranshugaba/pranshugaba.github.io"
          >GitHub</NavigationExtLink
        >.
      </p>
      <h2>Statistics</h2>
      <p>There are currently</p>
      <ul class="list-disc list-inside ml-6">
        <li>
          <NuxtLink to="/poems"> {{ totalPoems }} poems</NuxtLink>,
        </li>
        <li>
          <NuxtLink to="/puzzles"> {{ totalPuzzles }} puzzles</NuxtLink>,
        </li>
        <li>
          and <NuxtLink to="/articles"> {{ totalArticles }} article</NuxtLink>
        </li>
      </ul>
      <p>on this website.</p>
      <p>Last updated on {{ getBuildDate() }}</p>
      <h2>Tags</h2>
      <NavigationTagCloud :tagList="tagList" />
    </div>
  </main>
</template>

<script>
import VImage from "~/components/images/VImage.vue";
import { formatDate, getBuildDate } from "~/utils/helpers";
import { getTagsFrequency } from "~/utils/getData";

export default {
  components: { VImage },
  head: {
    title: "About Me",
  },
  methods: {
    formatDate,
    getBuildDate,
  },
  async asyncData({ $content }) {
    const poems = await $content("poems").fetch();
    const totalPoems = poems.length;

    const puzzles = await $content("puzzles").fetch();
    const totalPuzzles = puzzles.length;

    const articles = await $content("articles").fetch();
    const totalArticles = articles.length;

    const tagsData = await $content("/", { deep: true }).only(["tags"]).fetch();
    const tagList = getTagsFrequency(tagsData);

    return {
      totalPoems,
      totalPuzzles,
      totalArticles,
      tagList,
    };
  },
};
</script>
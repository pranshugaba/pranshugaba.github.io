<template>
  <main>
    <h1>About Me</h1>
    <p>I am a PhD student in Theoretical Computer Science.</p>
    <p>
      I click pictures, write poetry, create puzzles, draw comics, develop apps
      and games, and write stories.
    </p>
    <p>
      I also love playing chess, solving puzzles, swimming and cycling but not
      both at once.
    </p>

    <h2>Projects</h2>
    <ul>
      <li>Decimal Clock</li>
      <li>Maths Wiki</li>
    </ul>
    <div class="text-right">
      <NuxtLink to="/projects"> See all projects &#10230;</NuxtLink>
    </div>

    <h2>Reading</h2>
    <p>I am currently reading The Hobbit, or There and Back again.</p>

    <h2>Uses</h2>
    <ul>
      <li>Arch Linux</li>
    </ul>

    <h2>About this website</h2>
    <p>Built using Nuxt.js</p>
    <ul>
      <li>26 poems</li>
      <li>2 puzzles</li>
    </ul>
    <p>{{ getCurrentDate() }}</p>
  </main>
</template>

<script>
import { formatDate } from "~/utils/date";
export default {
  head: {
    title: "About Me",
  },
  methods: {
    formatDate,
    getCurrentDate: function () {
      const currentdate = new Date();
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      };
      return currentdate.toLocaleDateString("en", options);
    },
  },
};
</script>
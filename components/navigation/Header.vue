<template>
  <header class="pt-1 mb-10">
    <!-- <div class="text-xl">{{ cat }}</div> -->
    <div class="flex flex-wrap items-center justify-between py-4">
      <NuxtLink
        to="/"
        class="font-bold text-lg text-gray-900 dark:text-gray-100 transition-colors"
      >
        Pranshu Gaba
      </NuxtLink>
      <ul class="flex flex-wrap space-x-6">
        <li>
          <NuxtLink
            to="/about"
            class="text-gray-900 dark:text-gray-100 transition-colors"
            >About</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/contact"
            class="text-gray-900 dark:text-gray-100 transition-colors"
            >Contact</NuxtLink
          >
        </li>
      </ul>
    </div>
    <nav>
      <ul
        class="flex flex-wrap items-center justify-evenly border-t border-b border-primary-light dark:border-primary-dark border-opacity-50 dark:border-opacity-50 transition-colors"
      >
        <li>
          <NuxtLink
            to="/articles"
            class="text-gray-900 dark:text-gray-100 transition-colors"
            >Articles</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/poems/page/1"
            class="text-gray-900 dark:text-gray-100 transition-colors"
            >Poems</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/puzzles"
            class="text-gray-900 dark:text-gray-100 transition-colors"
            >Puzzles</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { getCategoryFromRoute } from "~/utils/helpers";
export default {
  methods: {
    getCategoryFromRoute,
  },
  computed: {
    cat: function () {
      return getCategoryFromRoute(this.$route.path);
    },
  },
};
</script>
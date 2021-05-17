<template>
  <header class="pt-1 mb-10">
    <div class="flex flex-wrap items-center justify-between pt-4 pb-4">
      <NuxtLink
        to="/"
        class="font-bold text-lg text-primary-light dark:text-primary-dark transition-colors logo"
      >
        Pranshu Gaba
      </NuxtLink>
      <ul class="flex flex-wrap space-x-6">
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </li>
      </ul>
    </div>
    <nav class="categories">
      <ul
        class="flex flex-wrap items-center justify-evenly border-t border-b border-primary-light dark:border-primary-dark border-opacity-50 dark:border-opacity-50 transition-colors py-0.5"
      >
        <li>
          <NuxtLink to="/articles" class="theme-article">Articles</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/poems" class="theme-poem">Poems</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/puzzles" class="theme-puzzle">Puzzles</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
a {
  @apply px-2 py-1 rounded-md hover:no-underline;
}

.nuxt-link-active:not(.logo),
.nuxt-link-exact-active,
a:hover {
  @apply bg-primary-light text-gray-100 dark:bg-primary-dark dark:text-gray-900;
}
</style>
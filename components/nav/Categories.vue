<template>
  <nav>
    <ul class="flex flex-wrap items-center justify-evenly md:space-x-4">
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
</template>

<style scoped >
a {
  @apply px-2 py-1 rounded-md hover:no-underline;
}

.nuxt-link-active:not(.logo),
.nuxt-link-exact-active,
a:hover {
  @apply bg-primary-light text-gray-100 dark:bg-primary-dark dark:text-gray-900;
}
</style>
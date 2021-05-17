<template>
  <header class="pt-1 mb-12">
    <div
      class="flex flex-wrap items-center justify-between pt-4 pb-3 border-primary-light dark:border-primary-dark border-b px-2"
    >
      <NuxtLink
        to="/"
        class="font-bold text-lg text-primary-light dark:text-primary-dark transition-colors logo"
      >
        Pranshu Gaba
      </NuxtLink>

      <nav class="categories flex flex-wrap space-x-6">
        <ul class="flex flex-wrap items-center justify-evenly space-x-4">
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
        <ul class="flex flex-wrap space-x-4">
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact">Contact</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
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
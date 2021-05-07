<template>
  <header class="mb-16 pt-2 pb-2">
    <div class="flex items-center justify-between pb-2">
      <NuxtLink to="/" class="font-bold text-lg text-gray-900 dark:text-gray-100 transition-colors"> Pranshu Gaba </NuxtLink>
      <ul class="flex space-x-6">
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
        class="flex space-x-6 items-center justify-center border-t border-b border-blue-700 dark:border-blue-300 transition-colors"
      >
        <li>
          <NuxtLink
            to="/poems"
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
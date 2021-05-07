<template>
  <header
    class=" mb-16 pt-2 pb-2 border-b border-blue-600 dark:border-blue-300 transition-colors"
  >
    <div class="flex items-center justify-between pb-2">
      <NuxtLink to="/" class="font-bold text-lg"> Pranshu Gaba </NuxtLink>
      <ul class="flex space-x-6">
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </li>
      </ul>
    </div>
    <nav>
      <ul class="flex space-x-6 items-center justify-center">
        <li>
          <NuxtLink to="/poems">Poems</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/puzzles">Puzzles</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
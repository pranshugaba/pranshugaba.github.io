<template>
  <header class="pt-1 mb-10 md:mb-12 md:max-w-screen-lg md:mx-auto">
    <div
      class="
        flex flex-wrap
        items-center
        justify-between
        pt-4
        pb-4
        md:border-primary-light
        md:dark:border-primary-dark
        md:border-b
        md:px-2
      "
    >
      <NuxtLink
        to="/"
        class="
          font-semibold
          text-xl text-primary-light
          dark:text-primary-dark
          transition-colors
          tracking-tight
          logo
        "
      >
        Pranshu Gaba
      </NuxtLink>

      <nav class="flex flex-wrap space-x-6">
        <NavCategories class="hidden md:block" />
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
    <NavCategories
      class="
        border-t border-b border-primary-light
        dark:border-primary-dark
        border-opacity-50
        dark:border-opacity-50
        transition-colors
        py-0.5
        md:hidden
      "
    />
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
<template>
  <header class="container">
    <NuxtLink to="/" class="logo"> Pranshu Gaba </NuxtLink>
    <nav>
      <NuxtLink to="/about" class="link"> About</NuxtLink>
      <NuxtLink to="/posts" class="link"> Posts</NuxtLink>
      <NuxtLink to="/puzzles" class="link"> Puzzles</NuxtLink>
      <NuxtLink to="/projects" class="link"> Projects</NuxtLink>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/variables.scss";

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
}

a.link.nuxt-link-active {
  color: $secondary;
  text-decoration: underline;
}

.logo {
  font-weight: bolder;
}

.link {
  margin-left: 20px;
}
</style>
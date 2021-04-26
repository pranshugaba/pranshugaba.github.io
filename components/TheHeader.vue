<template>
  <header class="container">
    <NuxtLink to="/" class="logo"> Pranshu Gaba </NuxtLink>
    <nav>
      <NuxtLink to="/about" class="link"> About</NuxtLink>
      <NuxtLink to="/posts" class="link"> Posts</NuxtLink>
      <NuxtLink to="/contact" class="link">Contact</NuxtLink>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/variables.scss";

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin-bottom: 30px;
}

.logo {
  font-weight: bolder;
}

.link {
  margin-left: 20px;
}
</style>
<template>
  <div class="layout">
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<style scoped>
.layout {
  max-width: 42rem;
  padding: 0 1rem;
  padding-left: calc(100vw - 100%);
  margin: 1rem auto 3rem;
}
</style>
<template>
  <main class="content-width">
    <NuxtContent :document="uses" />
  </main>
</template>

<script>
export default {
  head: {
    title: "Uses",
  },
  async asyncData({ $content }) {
    const uses = await $content("/", "uses").fetch();

    return { uses };
  },
};
</script>

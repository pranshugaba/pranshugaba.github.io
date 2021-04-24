<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("puzzles", params.slug).fetch();

    return { article };
  },
};
</script>

<template>
    <article>
        <nuxt-content :document="article"/>
    </article>
</template>
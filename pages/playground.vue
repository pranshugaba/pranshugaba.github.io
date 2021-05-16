<template>
  <main>
    <PostTitle>Playground</PostTitle>
    <PostSubtitle>Testing out new features for this website</PostSubtitle>

    <h2>Random quote from ASOIAF</h2>
    <blockquote>
      <p>{{ quote.sentence }}</p>
      <cite class="text-right block">-- {{ quote.character.name }}</cite>
    </blockquote>
  </main>
</template>

<script>
export default {
  data() {
    return {
      quote: {},
    };
  },
  async fetch() {
    this.quote = await fetch(
      "https://game-of-thrones-quotes.herokuapp.com/v1/random"
    ).then((res) => res.json());
  },
};
</script>
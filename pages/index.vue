<template>
  <main>
    <h1>Hello There</h1>
    <p>I am Pranshu Gaba. Welcome to my (new) website.</p>
    <p class="mb-4">
      This website is still under construction. I am learning Vue.js and
      Nuxt.js, and am building this website along the way.
    </p>
    <p>
      In the meantime, you can visit
      <ExtLink to="https://pranshugaba.com">my existing website</ExtLink> that I
      have built using Hugo.
    </p>
  </main>
</template>

<script>
export default {
  head: {
    title: "Home",
  },
};
</script>
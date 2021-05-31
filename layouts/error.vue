<template>
  <div class="content-width">
    <h1 v-if="error.statusCode === 404">404 - Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <p>
      <NuxtLink to="/">Return to Home page</NuxtLink>
    </p>
    <!-- TODO: Add recent posts-->
  </div>
</template>

<script>
export default {
  props: ["error"],
  head: {
    title: "404 - Page not found",
  },
  layout: "error", // you can set a custom layout for the error page
};
</script>

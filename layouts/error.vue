<template>
  <div class="content-width">
    <PostTitle v-if="error.statusCode === 404">404 - Page not found</PostTitle>
    <PostTitle v-else>An error occurred</PostTitle>
    <PostSubtitle>The page you requested could not be found. </PostSubtitle>
    <p>
      <NuxtLink to="/">Return to the homepage</NuxtLink>
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

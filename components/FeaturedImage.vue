<template>
  <img class="md:rounded-xl shadow-md" :src="src" />
</template>

<script>
export default {
  name: "featuredImage",
  props: ["src"],
};
</script>

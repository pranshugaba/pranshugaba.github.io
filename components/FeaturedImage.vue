<template>
  <img class="rounded-2xl shadow-sm" :src="src" />
</template>

<script>
export default {
  name: "featuredImage",
  props: ["src"],
};
</script>

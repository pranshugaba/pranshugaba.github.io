<template>
  <img :src="src" class="h-auto" />
</template>

<script>
export default {
  name: "vImage",
  props: ["src"],
};
</script>

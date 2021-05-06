<template>
  <img :src="src" class="h-auto object-cover" />
</template>

<script>
export default {
  name: "vImage",
  props: ["src"],
};
</script>

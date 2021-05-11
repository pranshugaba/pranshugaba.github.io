<template>
  <img :src="src" class="h-auto object-cover rounded-lg shadow-md" />
</template>

<script>
export default {
  name: "vImage",
  props: ["src"],
};
</script>

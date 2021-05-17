<template>
  <img
    :src="src"
    class="object-cover rounded-lg max-h-[90vh] mx-auto shadow-md"
  />
</template>

<script>
export default {
  name: "vImage",
  props: ["src"],
};
</script>

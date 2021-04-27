<template>
  <NuxtLink
    :to="to"
    class="text-blue-600 hover:text-pink-600 hover:underline active:text-purple-600"
  >
    <slot>NavLink</slot>
  </NuxtLink>
</template>

<script>
export default {
  props: ["to"],
};
</script>
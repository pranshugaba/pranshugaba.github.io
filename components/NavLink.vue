<template>
  <NuxtLink
    :to="to"
    class="text-blue-600 hover:underline active:text-pink-600 dark:text-blue-300 dark:active:text-pink-300"
  >
    <slot>NavLink</slot>
  </NuxtLink>
</template>

<script>
export default {
  props: ["to"],
};
</script>
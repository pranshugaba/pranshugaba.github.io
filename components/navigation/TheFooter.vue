<template>
  <footer
    class="mt-6 pt-3 pb-1 border-t border-gray-600 dark:border-gray-400 transition flex justify-between"
  >
    <NuxtLink to="/licence"> © 2021 Pranshu Gaba </NuxtLink>
    <ColorModeToggle />
  </footer>
</template>

<script>
import ColorModeToggle from "~/components/utils/ColorModeToggle";
export default {
  components: {
    ColorModeToggle,
  },
};
</script>

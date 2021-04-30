<template>
  <button
    class="w-6 hover:text-blue-600 dark:hover:text-blue-300 transition dark:text-gray-300 text-gray-700 cursor-pointer"
  >
    <SunIcon
      v-if="$colorMode.value === 'light'"
      @click="$colorMode.preference = 'dark'"
    />
    <MoonIcon v-else @click="$colorMode.preference = 'light'" />
  </button>
</template>

<script>
import SunIcon from "~/assets/images/sun.svg?inline";
import MoonIcon from "~/assets/images/moon.svg?inline";
export default {
  components: {
    SunIcon,
    MoonIcon,
  },
};
</script>
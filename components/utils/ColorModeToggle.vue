<template>
  <button
    class="w-6 text-primary-light dark:text-primary-dark transition-colors cursor-pointer"
    aria-label="Toggle dark mode"
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
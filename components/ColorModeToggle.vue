<template>
  <div class="w-6 dark:text-gray-400 text-gray-600 cursor-pointer">
    <SunIcon
      v-if="$colorMode.value === 'light'"
      @click="$colorMode.preference = 'dark'"
    />
    <MoonIcon
      v-if="$colorMode.value === 'dark'"
      @click="$colorMode.preference = 'light'"
    />
  </div>
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
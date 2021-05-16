<template>
  <div
    class="px-4 mx-auto sm:max-w-lg md:max-w-xl lg:max-w-prose"
    :class="theme"
  >
    <NavigationHeader />
    <Nuxt />
    <NavigationFooter />
  </div>
</template>

<script>
import { getCategoryFromRoute, getThemeFromCategory } from "~/utils/helpers";
export default {
  methods: {
    getCategoryFromRoute,
    getThemeFromCategory,
  },
  computed: {
    cat: function () {
      return getCategoryFromRoute(this.$route.path);
    },
    theme: function () {
      return getThemeFromCategory(this.cat);
    },
  },
};
</script>
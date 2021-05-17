<template>
  <div class="px-4 mx-auto max-w-screen-lg" :class="theme">
    <NavigationHeaderSmall class="md:hidden" />
    <NavigationHeaderLarge class="hidden md:block" />
    <Nuxt class="md:mx-auto md:px-4" />
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
<template>
  <div class="px-4 mx-auto max-w-screen-xl" :class="theme">
    <NavHeader />
    <Nuxt class="md:mx-auto lg:px-4" />
    <NavFooter />
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
<template>
  <div class="px-4 py-4 mx-auto sm:max-w-lg md:max-w-xl lg:max-w-2xl">
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "~/components/navigation/TheHeader";
import TheFooter from "~/components/navigation/TheFooter";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
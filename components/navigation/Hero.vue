<template>
  <div
    class="block md:flex md:flex-row-reverse md:items-center md:justify-between"
  >
    <NuxtImg
      :src="img"
      :alt="alt"
      class="w-3/5 max-w-sm mx-auto md:mx-0 md:ml-4 my-8 md:my-0 rounded-2xl shadow-md"
    />
    <div class="max-w-md">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    alt: String,
  },
};
</script>
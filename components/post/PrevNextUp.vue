<template>
  <div class="grid grid-cols-3 gap-8">
    <div class="py-2">
      <NuxtLink v-if="prev" :to="prev.path" class="inline-block">
        <span class="block font-semibold text-sm">prev</span>
        <span class="text-gray-700 dark:text-gray-300 transition-colors">{{ prev.title }}</span>
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </div>
    <div class="py-2 text-center">
      <NuxtLink v-if="up" :to="up.path" class="inline-block">
        <span class="block text-sm font-semibold">up</span>
        <span class="text-gray-700 dark:text-gray-300 transition-colors">{{ up.title }}</span>
      </NuxtLink>
    </div>
    <div class="py-2 text-right">
      <NuxtLink v-if="next" :to="next.path" class="inline-block">
        <span class="block font-semibold text-sm">next</span>
        <span class="text-gray-700 dark:text-gray-300 transition-colors">{{ next.title }}</span>
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
    up: {
      type: Object,
      default: () => null,
    },
  },
};
</script>

<template>
  <div class="grid grid-cols-2 gap-8">
    <div class="prev py-2">
      <NuxtLink
        v-if="prev"
        :to="prev.path"
        class="font-bold hover:underline inline-block"
      >
        <span class="block text-sm">prev</span>
        {{ prev.title }}
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </div>
    <div class="inline-block py-2 text-right">
      <NuxtLink
        v-if="next"
        :to="next.path"
        class="font-bold hover:underline inline-block"
      >
        <span class="block text-sm">next</span>
        {{ next.title }}
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
  },
};
</script>

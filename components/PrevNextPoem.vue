<template>
  <div class="container">
    <div class="prev">
      <NuxtLink
        v-if="prev"
        :to="{ name: 'poems-slug', params: { slug: prev.slug } }"
      >
      <span class="label">prev</span>
       {{ prev.title }}
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </div>
    <div class="next">
      <NuxtLink
        v-if="next"
        :to="{ name: 'poems-slug', params: { slug: next.slug } }"
      >
        <span class="label">next</span>
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

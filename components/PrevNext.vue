<template>
  <div class="container">
    <div class="prev">
      <NuxtLink
        v-if="prev"
        :to="{ name: 'puzzles-slug', params: { slug: prev.slug } }"
        class="text-primary font-bold hover:underline"
      >
      <span class="label">prev</span>
       {{ prev.title }}
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </div>
    <div class="next">
      <NuxtLink
        v-if="next"
        :to="{ name: 'puzzles-slug', params: { slug: next.slug } }"
        class="font-bold hover:underline"
      >
        <span class="label">next</span>
         {{ next.title }}
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 10px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: grid;
  grid-template-columns: repeat(2,minmax(0,1fr));
  gap: 2rem;
}
.next {
  text-align: right;
}
.label{
  display: block;
  color: black;
}
</style>

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

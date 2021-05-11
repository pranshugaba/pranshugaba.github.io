<template>
  <div>
    <ul class="flex flex-wrap items-baseline">
      <li
        class="mr-4"
        :style="{ fontSize: calculateFontSize(tag[1]) + 'rem' }"
        v-for="tag of tagList"
        :key="tag[0]"
      >
        <NuxtLink :to="{ name: 'tags-tag', params: { tag: tag[0] } }">
          {{ tag[0] }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tagList: Array,
  },
  methods: {
    calculateFontSize: function (frequency) {
      return 0.7 + Math.sqrt(frequency) * 0.3;
    },
  },
};
</script>
<template>
  <main>
    <h1>Tags</h1>
    Tags used:
    <ul>
      <li v-for="tag of tagOccurences" :key="tag[0]">
        <NuxtLink :to="{ name: 'tags-tag', params: { tag: tag[0] } }">
          {{ tag[0] }}
        </NuxtLink>
        ({{ tag[1] }})
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const tagsData = await $content("puzzles").only(["tags"]).fetch();

    // Concatenates the tags arrays of all pages
    const tagsDuplicate = tagsData.reduce((a, b) => [...a.tags, ...b.tags]);

    // Change array to object for better syntax
    const map = tagsDuplicate.reduce(
      (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
      new Map()
    );

    // sorts tags in descending order of frequency
    const tagOccurences = [...map.entries()].sort((a, b) => {
      if (a[0] === b[0]) {
        return 0;
      } else {
        return a[0] < b[0] ? -1 : 1;
      }
    });

    return {
      tagOccurences,
    };
  },
  head: {
    title: "Tags",
  },
};
</script>

<style lang="scss" scoped>
li {
  padding-bottom: 0.75rem;
}
</style>

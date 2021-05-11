<template>
  <main>
    <PostTitle>Tags</PostTitle>
    <PostSubtitle>Common tags</PostSubtitle>
    <NavigationTagCloud :tagList="tagList" />
  </main>
</template>

<script>
import { getTagsFrequency } from "~/utils/getData";

export default {
  async asyncData({ $content }) {
    const tagsData = await $content("/", { deep: true }).only(["tags"]).fetch();
    const tagList = getTagsFrequency(tagsData);

    return {
      tagList,
    };
  },
  head: {
    title: "Tags",
  },
};
</script>
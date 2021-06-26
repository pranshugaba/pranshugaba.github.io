<template>
  <main class="content-width">
    <PostTitle>Tags</PostTitle>
    <PostSubtitle
      >All tags used on this site. <br />
      Bigger tags have a higher freqeuncy.
    </PostSubtitle>
    <NavTagCloud :tagList="tagList" />
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
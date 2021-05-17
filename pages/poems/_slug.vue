<template>
  <main>
    <PostHeading :post="poem" :authors="authors" class="content-width" />

    <div class="block md:flex md:items-center md:justify-center">
      <VFigure
        :src="require(`~/assets/images/poems/${poem.featuredImage}`)"
        :caption="poem.caption"
        class="md:max-w-[55%] mx-auto md:mx-0"
      />
      <div class="mx-auto w-full sm:w-max md:mx-0 md:ml-5 lg:ml-7">
        <NuxtContent class="text-2xl font-serif" :document="poem" />
      </div>
    </div>

    <div class="content-width">
      <TagChips :tags="poem.tags" />
      <PostAuthorBios :authors="authors" />
      <PrevNextUp :prev="prev" :next="next" :up="up" />
    </div>
  </main>
</template>

<script>
import VFigure from "~/components/images/VFigure";
import PrevNextUp from "~/components/post_components/PrevNextUp";
import TagChips from "~/components/post_components/TagChips";
import PostAuthorBios from "~/components/post_components/PostAuthorBios";

export default {
  components: {
    VFigure,
    TagChips,
    PrevNextUp,
    PostAuthorBios,
  },
  async asyncData({ $content, params }) {
    const poem = await $content("poems", params.slug).fetch();

    const authors = await $content("authors")
      .where({ slug: { $in: poem.authors } })
      .fetch();

    const [prev, next] = await $content("poems")
      .only(["title", "slug", "path"])
      .sortBy("createdAt", "desc")
      .surround(params.slug)
      .fetch();

    return { poem, authors, prev, next };
  },
  head() {
    return {
      title: this.poem.title,
      titleTemplate: "%s | A poem by Pranshu Gaba",
      // description: this.poem.description,
    };
  },
  data() {
    return {
      up: {
        path: "/poems",
        title: "Poems",
      },
    };
  },
};
</script>
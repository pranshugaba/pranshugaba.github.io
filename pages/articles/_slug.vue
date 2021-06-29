<template>
  <main class="max-w-screen-lg">
    <div class="md:grid md:grid-cols-12">
      <PostHeading
        :post="article"
        :authors="authors"
        class="md:col-start-4 md:col-end-13 md:ml-12"
      />
    </div>
    <div class="md:grid md:grid-cols-12 md:mt-2">
      <PostTableOfContents :article-toc="article.toc" />
      <div class="md:col-start-4 md:col-end-13 max-w-prose md:ml-12">
        <NuxtContent :document="article" />
        <PostTagChips :tags="article.tags" />
      </div>
    </div>
    <div class="md:grid md:grid-cols-12">
      <div class="md:col-start-4 md:col-end-13 md:ml-12">
        <PostAuthorBios :authors="authors" />
        <PostPrevNextUp :prev="prev" :next="next" :up="up" />
      </div>
    </div>
  </main>
</template>

<script>
import getShareImage from "@jlengstorf/get-share-image";
import getSiteMetadata from "~/utils/getSiteMetadata";

export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    const authors = await $content("authors")
      .where({ slug: { $in: article.authors } })
      .fetch();

    const [prev, next] = await $content("articles")
      .only(["title", "slug", "path", "createdAt"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();

    const socialImage = getShareImage({
      title: article.title,
      tagline: article.subtitle,
      cloudName: "pranshugaba",
      imagePublicID: "social-image.png",
      titleFont: "inter-semibold.ttf",
      titleFontSize: 72,
      titleExtraConfig: "_line_spacing_-8",
      taglineExtraConfig: "_letter_spacing_-1",
      taglineFont: "inter-regular.ttf",
      textColor: "dce9fd",
      textAreaWidth: 720,
      textLeftOffset: 520,
      titleBottomOffset: 350,
      taglineTopOffset: 370,
    });
    return { article, prev, next, authors, socialImage };
  },
  computed: {
    meta() {
      const metaData = {
        type: "article",
        title: this.article.title,
        description: this.article.description,
        url: `https://pranshugaba.com/articles/${this.$route.params.slug}`,
        mainImage: this.socialImage,
      };
      return getSiteMetadata(metaData);
    },
  },
  head() {
    return {
      title: this.article.title,
      meta: [...this.meta],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/katex@0.13.2/dist/katex.min.css",
        },
      ],
    };
  },
  data() {
    return {
      up: {
        path: "/articles",
        title: "Articles",
      },
    };
  },
};
</script>
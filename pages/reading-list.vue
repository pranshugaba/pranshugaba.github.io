<template>
  <div class="content-width">
    <PostTitle>My Reading List</PostTitle>
    <PostSubtitle>Some books that I have read recently</PostSubtitle>
    <ul>
      <li v-for="book in books" :key="book.slug">
        <ReadingListBook :book="book" />
      </li>
    </ul>
  </div>
</template>
<script>
import ReadingListBook from "~/components/utils/ReadingListBook";
export default {
  components: {
    ReadingListBook,
  },
  async asyncData({ $content }) {
    const books = await $content("reading-list").fetch();

    return {
      books,
    };
  },
  head: {
    title: "Reading List",
  },
};
</script>
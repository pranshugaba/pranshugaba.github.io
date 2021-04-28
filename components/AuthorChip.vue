<template>
  <div class="my-4 flex items-center justify-start space-x-3">
    <div v-for="author of authors" :key="author.slug">
      <img
        class="h-12 rounded-full"
        :src="require(`~/assets/images/authors/${author.avatar}`)"
        alt="Avatar of the author"
      />
    </div>
    <div class="text-black">
      <span v-for="(author, index) of authors" :key="author.slug">
        <span class="author-name">
          <NavLink :to="author.path">{{ author.name }}</NavLink
          ><span v-if="index != authors.length - 1">, </span>
        </span>
      </span>
      <div class="text-gray-600 dark:text-gray-300 text-sm">
        {{ formatDate(updatedDate) }}
        <!-- &#183; 3 min read -->
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "../utils/date";
export default {
  props: {
    authors: {
      type: Array,
      required: true,
    },
    updatedDate: {
      type: String,
    },
  },
  methods: {
    formatDate,
  },
};
</script>
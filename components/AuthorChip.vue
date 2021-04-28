<template>
  <div class="py-4 flex items-center justify-start">
    <img
      class="h-12 rounded-full"
      :src="require(`~/assets/images/authors/${author.avatar}`)"
      alt="Avatar of the author"
    />
    <div class="ml-3">
      <div class="author-name">
        <NavLink :to="author.path"> {{ author.name }} </NavLink>
      </div>
      <div class="text-gray-600 text-sm">Apr 6, 2021 &#183; 3 min read</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
};
</script>
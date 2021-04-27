<template>
  <div class="py-4 flex items-center justify-start">
    <img
      class="h-8 mr-2 rounded-full"
      :src="require(`~/assets/images/authors/${author.avatar}`)"
      alt="Avatar of the author"
    />
    <div class="author-name">
      <NavLink :to="author.path"> {{ author.name }} </NavLink>
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
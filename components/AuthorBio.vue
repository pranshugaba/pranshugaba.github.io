<template>
  <div class="colophon">
    <img
      class="avatar"
      :src="require(`~/assets/images/authors/${author.avatar}`)"
      alt="Avatar of the author"
    />
    <div class="text">
      <h4>
        <nuxt-link :to="author.path"> {{ author.name }} </nuxt-link>
      </h4>
      <p>{{ author.bio }}</p>
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

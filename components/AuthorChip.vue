<template>
  <div class="author-chip">
    <img
      class="avatar"
      :src="require(`~/assets/images/authors/${author.avatar}`)"
      alt="Avatar of the author"
    />
    <div class="author-name">
      <nuxt-link :to="author.path"> {{ author.name }} </nuxt-link>
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

<style scoped lang="scss">
@import "~/assets/styles/variables.scss";

// TODO: Put text below image when not wide enough
.author-chip {
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

img {
  width: 36px;
  margin-right: 8px;
  border-radius: 50%;
}
</style>
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

<style scoped lang="scss">
@import "~/assets/styles/variables.scss";

// TODO: Put text below image when not wide enough
.colophon {
  background-color: #f8f8f8;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 70px 1fr;
  padding: 15px 15px 20px;
  margin-top: 30px;
  margin-bottom: 30px;
  column-gap: 15px;
}

h4 {
  font-size: 1.1rem;
  margin: 0;
  padding-bottom: 5px;
}
p {
  margin: 0;
}
img {
  width: 64px;
  margin: auto;
  border-radius: 20%;
//  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
}
</style>
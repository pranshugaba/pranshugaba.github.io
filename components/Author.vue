<template>
  <div class="colophon">
    <img class="avatar" src="~/assets/images/avatar.png" alt="Avatar of the author"/>
    <div class="text">
      <h4>
        <nuxt-link to="/about"> {{ author.name }} </nuxt-link>
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
  background-color:papayawhip;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 70px 1fr;
  padding: 15px 15px 20px;
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
}
</style>
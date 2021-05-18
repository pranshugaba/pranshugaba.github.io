<template>
  <main class="max-w-screen-lg">
    <NavigationHero img="/img/contact/pranshu_kimono.webp">
      <PostTitle>Contact me</PostTitle>
      <PostSubtitle>Get in touch</PostSubtitle>
      <ul>
        <li>
          Email:
          <a href="mailto:pranshu@pranshugaba.com">pranshu@pranshugaba.com</a>
        </li>
        <li>
          Github:
          <ExtLink to="https://github.com/pranshugaba">@pranshugaba</ExtLink>
        </li>
        <li>
          Twitter:
          <ExtLink to="https://twitter.com/pranshugaba">@pranshugaba</ExtLink>
        </li>
      </ul>
    </NavigationHero>
  </main>
</template>

<script>
import ExtLink from "~/components/navigation/ExtLink";
export default {
  components: {
    ExtLink,
  },
  head: {
    title: "Contact",
  },
};
</script>
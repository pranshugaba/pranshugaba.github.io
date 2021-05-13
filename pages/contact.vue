<template>
  <main>
    <NuxtImg
      src="/img/contact/pranshu_kimono.webp"
      class="w-3/5 h-auto mx-auto my-8 rounded-xl shadow-md"
    />
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
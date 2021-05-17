<template>
  <main class="max-w-screen-lg">
    <div
      class="block md:flex md:flex-row-reverse md:items-center md:justify-between"
    >
      <NuxtImg
        src="/img/contact/pranshu_kimono.webp"
        class="w-3/5 max-w-sm mx-auto md:mx-0 my-8 md:my-0 rounded-2xl shadow-md"
      />
      <div class="max-w-prose">
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
      </div>
    </div>
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
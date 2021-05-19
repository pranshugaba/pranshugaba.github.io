<template>
  <main class="max-w-screen-lg">
    <PageHero img="/img/contact/pranshu_kimono.webp">
      <PostTitle>Contact me</PostTitle>
      <PostSubtitle>Get in touch</PostSubtitle>
      <ul>
        <li>
          Email:
          <a href="mailto:pranshu@pranshugaba.com">pranshu@pranshugaba.com</a>
        </li>
        <li>
          Github:
          <NavExtLink to="https://github.com/pranshugaba">@pranshugaba</NavExtLink>
        </li>
        <li>
          Twitter:
          <NavExtLink to="https://twitter.com/pranshugaba">@pranshugaba</NavExtLink>
        </li>
      </ul>
    </PageHero>
  </main>
</template>

<script>
export default {
  head: {
    title: "Contact",
  },
};
</script>
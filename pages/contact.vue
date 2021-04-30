<template>
  <main>
    <h1>Contact me</h1>
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
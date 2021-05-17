<template>
  <div class="content-width">
    <h1>Licence</h1>
    <h2>CC-BY-SA 4.0</h2>
    <p>
      Unless otherwise stated, all content on this website is licensed under a
      <ExtLink to="https://creativecommons.org/licenses/by-sa/4.0/">
        Commons Attribution-ShareAlike 4.0 International License </ExtLink
      >.
    </p>

    <h3>Attributions</h3>
    <ul>
      <li>
        <ExtLink
          to="https://freeicons.io/free-space-icons/external-link-icon-icon"
          >External link </ExtLink
        >,
        <ExtLink to="https://freeicons.io/free-space-icons/sun-icon-icon"
          >Sun </ExtLink
        >, and
        <ExtLink to="https://freeicons.io/free-space-icons/moon-icon-icon"
          >Moon</ExtLink
        >
        icons by
        <ExtLink to="https://freeicons.io/profile/714" target="_blank"
          >Raj Dev</ExtLink
        >
        are licensed under
        <ExtLink to="https://creativecommons.org/licenses/by-sa/3.0/"
          >CC BY-SA 3.0</ExtLink
        >.
      </li>
    </ul>
  </div>
</template>

<script>
import ExtLink from "~/components/navigation/ExtLink";
export default {
  components: {
    ExtLink,
  },
  head: {
    title: "Licence",
  },
};
</script>
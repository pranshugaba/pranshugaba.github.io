<template>
  <a :href="to">
    <slot/>
    <ExternalIcon class="inline h-4 mb-1 text-gray-600 dark:text-gray-400" />
  </a>
</template>

<script>
import ExternalIcon from "~/assets/images/external_link.svg?inline";
export default {
  props: {
    to: {
      type: String,
    },
    linkText: {
      type: String,
      default: "ExternalLink",
    },
  },
  components: { ExternalIcon },
};
</script>
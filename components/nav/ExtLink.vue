<template>
  <span>
    <a :href="to" target="_blank" rel="noopener">
      <slot />
    </a>
    <ExternalIcon
      class="inline h-4 mb-1 text-gray-600 dark:text-gray-400 transition-colors"
    />
  </span>
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
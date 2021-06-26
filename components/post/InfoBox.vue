<template>
  <div class="my-8 rounded-lg info">
    <p
      class="
        mt-1
        mb-0
        px-2
        pt-1
        pb-1
        text-sm
        font-semibold
        rounded-t
        capitalize
        title
      "
      :class="type"
    >
      {{ title }}
    </p>

    <p class="mt-0 mb-0 pt-2 px-2 pb-2 rounded-b content" :class="type">
      <slot />
    </p>
  </div>
</template>


<script>
export default {
  props: {
    type: {
      type: String,
      default: "note",
    },
    title: {
      type: String,
      default: function () {
        return this.type;
      },
    },
  },
};
</script>


<style scoped>
.tip {
  @apply text-green-900  dark:text-green-100;
}
.tip.title {
  @apply bg-green-500/30 dark:bg-green-600/40;
}
.tip.content {
  @apply bg-green-500/20 dark:bg-green-600/30;
}

.note {
  @apply text-sky-900  dark:text-sky-100;
}
.note.title {
  @apply bg-sky-500/30 dark:bg-sky-600/40;
}
.note.content {
  @apply bg-sky-500/20 dark:bg-sky-600/30;
}

.warning {
  @apply text-yellow-900  dark:text-yellow-100;
}
.warning.title {
  @apply bg-yellow-500/30 dark:bg-yellow-500/40;
}
.warning.content {
  @apply bg-yellow-500/20 dark:bg-yellow-500/30;
}

.example {
  @apply text-purple-900  dark:text-purple-100;
}
.example.title {
  @apply bg-purple-500/30 dark:bg-purple-500/40;
}
.example.content {
  @apply bg-purple-500/20 dark:bg-purple-500/30;
}

.quote {
  @apply text-gray-900  dark:text-gray-100;
}
.quote.title {
  @apply bg-gray-500/30 dark:bg-gray-500/40;
}
.quote.content {
  @apply bg-gray-500/20 dark:bg-gray-500/30;
}

.error {
  @apply text-red-900  dark:text-red-100;
}
.error.title {
  @apply bg-red-500/30 dark:bg-red-500/40;
}
.error.content {
  @apply bg-red-500/20 dark:bg-red-500/30;
}
</style>
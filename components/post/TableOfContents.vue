<template>
  <aside class="hidden md:block col-span-3">
    <div
      class="
        sticky
        top-8
        border-r border-gray-300
        dark:border-gray-700
        transition-colors
        pr-3
      "
    >
      <p class="font-bold my-2 text-sm">Table of Contents</p>
      <ul>
        <li
          v-for="link of articleToc"
          :key="link.id"
          :class="{ 'ml-0': link.depth === 2, 'ml-4': link.depth === 3 }"
          class="m-0"
        >
          <a
            :class="{
              'text-primary-900 bg-primary-dark bg-opacity-30 dark:text-primary-100 dark:bg-primary-light dark:bg-opacity-20':
                link.id === currentlyActiveToc,
              'text-gray-600 dark:text-gray-300':
                link.id !== currentlyActiveToc,
            }"
            class="transition-colors text-sm p-1 my-0 rounded block"
            :href="`#${link.id}`"
            >{{ link.text }}</a
          >
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    articleToc: {
      required: false,
    },
  },
  data() {
    return {
      currentlyActiveToc: "",
      observer: null,
      observerOptions: {
        root: this.$refs.nuxtContent,
        threshold: 0.25,
      },
    };
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (entry.isIntersecting) {
          this.currentlyActiveToc = id;
        }
      });
    }, this.observerOptions);

    // Track all sections that have an `id` applied
    document
      .querySelectorAll(".nuxt-content h2[id], .nuxt-content h3[id]")
      .forEach((section) => {
        this.observer.observe(section);
      });
  },
  beforeDestroy() {
    this.observer.disconnect();
  },
};
</script>
<template>
  <aside
    class="
      ml-4
      sm:ml-12
      md:mx-0
      mb-8
      md:mb-0
      mt-12
      md:mt-0
      px-4
      md:p-0
      py-2
      max-w-xs
      md:max-w-lg
      rounded-lg
      bg-primary-light bg-opacity-5
      dark:bg-primary-dark dark:bg-opacity-10
      md:bg-transparent
      md:dark:bg-transparent
      md:block
      col-span-3
    "
  >
    <div
      class="
        sticky
        top-8
        md:border-r
        border-gray-300
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
              'text-primary-light dark:text-primary-dark md:text-primary-900 md:bg-primary-dark md:bg-opacity-30 md:dark:text-primary-100 md:dark:bg-primary-light md:dark:bg-opacity-20':
                link.id === currentlyActiveToc,
              'text-primary-light dark:text-primary-dark md:text-gray-600 md:dark:text-gray-300':
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
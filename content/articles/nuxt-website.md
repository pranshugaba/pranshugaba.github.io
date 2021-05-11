---
title: "How I made this site using Nuxt.js"
subtitle: "Spoiler alert: It was fun to make"
description: "How I made this site using Nuxt.js"

featuredImage: "avatar.png"

authors: ["pranshu"]

tags: ["nuxtjs", "vuejs", "webdev"]
category: webdev

createdAt: 2021-05-11T19:30:00+05:30
updatedAt: 2021-05-11T19:30:00+05:30

showReadingTime: true
math: false

draft: false
featured: false
---

This site is built using Nuxt.js, and I have had a great time making it. In this post, I outline how I made this site. I hope it helps anyone who is looking to make a static site using Nuxt.js.

The previous version of this website (now retired to <NavigationExtLink to="https://hugo.pranshugaba.com">hugo.pranshugaba.com</NavigationExtLink>) was built using Hugo. Hugo is quick to install and very easy to get started with.
There are loads of user-submitted themes available, and the Academic theme was favourite. It served me well at the beginning, however, customizing it was not pleasant. 

I had to modify the theme templates, in some cases rewriting them completely. I had to override CSS styles, and this would often cause unintended effects. 
I wanted to create a theme from scratch, and I realized that frameworks such as React or Vue would be more powerful. I had heard that Vue is easier to learn than React, so I looked for static site generators based on Vue. I found Vuepress, Nuxt.js, and Gridsome.

I tried out Gridsome (learned some GraphQL) and Next.js (learned React) before ending up with Nuxt.js.
I did the theming and styling from scratch. I was able to match all the features offered in Hugo, and then some.

## Features

### Prefetching

One of the biggest advantages of using Nuxt is the prefetching. It prefetches the outgoing links on any page, so the links begin to load even before you click on them. This makes the site feel fast and snappy!

### Tags

### Pagination

### Author pages

### Math equations

Install `remark-math` and `rehype-katex` modules and you are good to go!

You can have inline math $e^{i\pi} + 1 = 0$, and
displaystyle math too!

$$
\sum_{k=1}^{\infty} \frac{1}{k^2} = \frac{\pi^2}{6}
$$

### Code blocks

Prism js comes pre-installed with Nuxt. You can install themes and plugins too.

```rust [hello.rs]
fn main() {
    println!("Hello, world!");
}
```

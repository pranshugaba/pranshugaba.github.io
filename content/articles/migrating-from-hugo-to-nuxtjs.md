---
title: "Migrating from Hugo to Nuxt.js"
subtitle: "Also stopping by Gridsome and Next.js on the way"
description: "Migrating from Hugo to Nuxt.js"

# featuredImage: "avatar.png"

authors: ["pranshu"]

tags: ["nuxtjs", "vuejs", "webdev"]
category: webdev

createdAt: 2021-05-11T19:30:00+05:30
updatedAt: 2021-05-11T19:30:00+05:30

showReadingTime: true
math: false
toc: false

draft: false
featured: false
---

This site is built using Nuxt.js, and I have had a great time making it. In this post, I outline how I made the switch. I hope this helps anyone who is looking to make a static site using Nuxt.js.

The previous version of this website (now retired to <NavigationExtLink to="https://hugo.pranshugaba.com">hugo.pranshugaba.com</NavigationExtLink>) was built using Hugo. Hugo is quick to install and very easy to get started with.
There are loads of user-submitted themes available, and the Academic theme was my favourite. It served me well at the beginning, however, customizing it was not pleasant.

When I wanted to modify the theme, I would have to override the templates, and in some cases rewrite them completely. This would often cause unintended effects.
I wanted to create a theme from scratch, and I realized that frameworks such as React and Vue are better suited for this.

I chose Vue because I had read that it is easier to learn than React. The top static site generators that I found for Vue were Nuxt.js and Gridsome.

I tried out Gridsome first because it was more oriented towards static sites. It was easy to set up. I had to learn GraphQL in order to parse the markdown files.

Next, I tried out Next.js which uses React. I was surprised to see how easily I could pickup React since I knew Vue. Again, it wasn't easy parsing markdown files.

I discovered the awesome-nuxtjs page on Github, and I loved the number of first-party plugins that Nuxt has.

The Nuxt Content makes it very easy to access markdown files.
Plugins are great, more contributors and better documentation.

I did the theming and styling from scratch and am adding features gradually. I was able to match all the features offered in Hugo, and then some.

## Features

### Prefetching

One of the biggest advantages of using Nuxt is the prefetching. It prefetches the outgoing links on any page, so the links begin to load even before you click on them. This makes the site feel fast and snappy!

### Tags

### Pagination

### Author pages

### Math equations

Install `remark-math` and `rehype-katex` modules and we are good to go!

I can have inline math $e^{i\pi} + 1 = 0$, and
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

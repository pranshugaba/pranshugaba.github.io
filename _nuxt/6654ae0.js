(window.webpackJsonp=window.webpackJsonp||[]).push([[18,3],{248:function(e,t,r){"use strict";r.r(t);var n={name:"vImage",props:["src"]},o=r(14),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("img",{staticClass:"h-auto object-cover rounded-lg shadow-md",attrs:{src:e.src}})}),[],!1,null,null,null);t.default=component.exports},254:function(e,t,r){var map={"./ambulance.webp":255,"./beads.webp":256,"./beyond.webp":257,"./crossing.webp":258,"./debris.webp":259,"./equines.webp":260,"./fire.webp":261,"./flames.webp":262,"./grey-water.webp":263,"./lightning.webp":264,"./liquefy.webp":265,"./masks.webp":266,"./mcswirl.webp":267,"./mirror-world.webp":268,"./ocean.webp":269,"./pink.webp":270,"./purple.webp":271,"./sofa.webp":272,"./spider.webp":273,"./spring.webp":274,"./streaks.webp":275,"./the-cat-named-toad.webp":276,"./the-shopping-trolley-in-the-hall.webp":277,"./tributaries.webp":278,"./two-monkeys-on-a-bicycle.webp":279,"./vines.webp":280};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=o,e.exports=n,n.id=254},255:function(e,t,r){e.exports=r.p+"img/ambulance.6bae38f.webp"},256:function(e,t,r){e.exports=r.p+"img/beads.f41b920.webp"},257:function(e,t,r){e.exports=r.p+"img/beyond.11d3e73.webp"},258:function(e,t,r){e.exports=r.p+"img/crossing.bdf2771.webp"},259:function(e,t,r){e.exports=r.p+"img/debris.7d0fe65.webp"},260:function(e,t,r){e.exports=r.p+"img/equines.ddb18fd.webp"},261:function(e,t,r){e.exports=r.p+"img/fire.faaa9c5.webp"},262:function(e,t,r){e.exports=r.p+"img/flames.f218b06.webp"},263:function(e,t,r){e.exports=r.p+"img/grey-water.42f86d0.webp"},264:function(e,t,r){e.exports=r.p+"img/lightning.ff1f944.webp"},265:function(e,t,r){e.exports=r.p+"img/liquefy.6da3df8.webp"},266:function(e,t,r){e.exports=r.p+"img/masks.cfd5246.webp"},267:function(e,t,r){e.exports=r.p+"img/mcswirl.8310442.webp"},268:function(e,t,r){e.exports=r.p+"img/mirror-world.9380c58.webp"},269:function(e,t,r){e.exports=r.p+"img/ocean.4e538b5.webp"},270:function(e,t,r){e.exports=r.p+"img/pink.26c988d.webp"},271:function(e,t,r){e.exports=r.p+"img/purple.c1114e5.webp"},272:function(e,t,r){e.exports=r.p+"img/sofa.a4ef07f.webp"},273:function(e,t,r){e.exports=r.p+"img/spider.3fb3fad.webp"},274:function(e,t,r){e.exports=r.p+"img/spring.7ca2be2.webp"},275:function(e,t,r){e.exports=r.p+"img/streaks.76ff496.webp"},276:function(e,t,r){e.exports=r.p+"img/the-cat-named-toad.08d702e.webp"},277:function(e,t,r){e.exports=r.p+"img/the-shopping-trolley-in-the-hall.bd3e16c.webp"},278:function(e,t,r){e.exports=r.p+"img/tributaries.3a0101e.webp"},279:function(e,t,r){e.exports=r.p+"img/two-monkeys-on-a-bicycle.f407ef0.webp"},280:function(e,t,r){e.exports=r.p+"img/vines.a7a1020.webp"},310:function(e,t,r){"use strict";r.r(t);var n=r(248),o=r(58),c={components:{VImage:n.default},props:{post:Object,showCategory:{type:Boolean,default:!0},authors:Array},methods:{formatDate:o.a}},f=r(14),component=Object(f.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("NuxtLink",{staticClass:"inline-block hover:no-underline mb-6",attrs:{to:e.post.path}},[n("div",{staticClass:"flex flex-wrap items-center group"},[n("div",{staticClass:"w-1/3"},[n("VImage",{staticClass:"rounded-md shadow-md",attrs:{src:r(254)("./"+e.post.featuredImage)}})],1),e._v(" "),n("div",{staticClass:"w-2/3 pl-4"},[e.showCategory?n("p",{staticClass:"uppercase text-xs tracking-wider mb-1 text-primary-light dark:text-primary-dark transition-colors"},[e._v("\n        "+e._s(e.post.category)+"\n      ")]):e._e(),e._v(" "),n("h2",{staticClass:"mt-0 mb-0 text-xl text-black group-hover:text-primary-light dark:group-hover:text-primary-dark"},[e._v("\n        "+e._s(e.post.title)+"\n      ")]),e._v(" "),n("p",{staticClass:"text-gray-600 dark:text-gray-400 transition-colors my-1"},[e._v("\n        "+e._s(e.post.description)+"\n      ")]),e._v(" "),n("p",{staticClass:"text-sm text-gray-600 dark:text-gray-400 transition-colors mt-4 mb-1"},[e._v("\n        "+e._s(e.formatDate(e.post.updatedAt))+"\n      ")])])])])}),[],!1,null,null,null);t.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[22,3,15,16,17],{236:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r={year:"numeric",month:"short",day:"numeric"};function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r;return new Date(t).toLocaleDateString("en",e)}},237:function(t,e,n){"use strict";n.r(e);var r={name:"vImage",props:["src"]},o=n(13),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{staticClass:"h-auto object-cover",attrs:{src:t.src}})}),[],!1,null,null,null);e.default=component.exports},238:function(t,e,n){"use strict";n.r(e);var r=n(13),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h1",{staticClass:"mb-2"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},239:function(t,e,n){"use strict";n.r(e);var r=n(13),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"text-xl mt-0 mb-6 text-gray-600 dark:text-gray-400 transition-colors"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},246:function(t,e,n){var map={"./ambulance.webp":247,"./beads.webp":248,"./beyond.webp":249,"./crossing.webp":250,"./debris.webp":251,"./equines.webp":252,"./fire.webp":253,"./flames.webp":254,"./grey-water.webp":255,"./lightning.webp":256,"./liquefy.webp":257,"./masks.webp":258,"./mcswirl.webp":259,"./mirror-world.webp":260,"./ocean.webp":261,"./pink.webp":262,"./purple.webp":263,"./sofa.webp":264,"./spider.webp":265,"./spring.webp":266,"./streaks.webp":267,"./the-cat-named-toad.webp":268,"./the-shopping-trolley-in-the-hall.webp":269,"./tributaries.webp":270,"./two-monkeys-on-a-bicycle.webp":271,"./vines.webp":272};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=246},247:function(t,e,n){t.exports=n.p+"img/ambulance.6bae38f.webp"},248:function(t,e,n){t.exports=n.p+"img/beads.f41b920.webp"},249:function(t,e,n){t.exports=n.p+"img/beyond.11d3e73.webp"},250:function(t,e,n){t.exports=n.p+"img/crossing.bdf2771.webp"},251:function(t,e,n){t.exports=n.p+"img/debris.7d0fe65.webp"},252:function(t,e,n){t.exports=n.p+"img/equines.ddb18fd.webp"},253:function(t,e,n){t.exports=n.p+"img/fire.faaa9c5.webp"},254:function(t,e,n){t.exports=n.p+"img/flames.f218b06.webp"},255:function(t,e,n){t.exports=n.p+"img/grey-water.42f86d0.webp"},256:function(t,e,n){t.exports=n.p+"img/lightning.ff1f944.webp"},257:function(t,e,n){t.exports=n.p+"img/liquefy.6da3df8.webp"},258:function(t,e,n){t.exports=n.p+"img/masks.cfd5246.webp"},259:function(t,e,n){t.exports=n.p+"img/mcswirl.8310442.webp"},260:function(t,e,n){t.exports=n.p+"img/mirror-world.9380c58.webp"},261:function(t,e,n){t.exports=n.p+"img/ocean.4e538b5.webp"},262:function(t,e,n){t.exports=n.p+"img/pink.26c988d.webp"},263:function(t,e,n){t.exports=n.p+"img/purple.c1114e5.webp"},264:function(t,e,n){t.exports=n.p+"img/sofa.a4ef07f.webp"},265:function(t,e,n){t.exports=n.p+"img/spider.3fb3fad.webp"},266:function(t,e,n){t.exports=n.p+"img/spring.7ca2be2.webp"},267:function(t,e,n){t.exports=n.p+"img/streaks.76ff496.webp"},268:function(t,e,n){t.exports=n.p+"img/the-cat-named-toad.08d702e.webp"},269:function(t,e,n){t.exports=n.p+"img/the-shopping-trolley-in-the-hall.bd3e16c.webp"},270:function(t,e,n){t.exports=n.p+"img/tributaries.3a0101e.webp"},271:function(t,e,n){t.exports=n.p+"img/two-monkeys-on-a-bicycle.f407ef0.webp"},272:function(t,e,n){t.exports=n.p+"img/vines.a7a1020.webp"},277:function(t,e,n){"use strict";n.r(e);var r=n(237),o=n(236),l={components:{VImage:r.default},props:{post:Object,showCategory:{type:Boolean,default:!0},authors:Array},methods:{formatDate:o.a}},c=n(13),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("NuxtLink",{staticClass:"inline-block hover:no-underline mb-6",attrs:{to:t.post.path}},[r("div",{staticClass:"flex flex-wrap items-center group"},[r("div",{staticClass:"w-1/3"},[r("VImage",{staticClass:"rounded-lg shadow-lg",attrs:{src:n(246)("./"+t.post.featuredImage)}})],1),t._v(" "),r("div",{staticClass:"w-2/3 pl-4 pt-4"},[t.showCategory?r("p",{staticClass:"uppercase text-xs tracking-wider mb-1 text-blue-700 dark:text-blue-300 transition-colors"},[t._v("\n        "+t._s(t.post.category)+"\n      ")]):t._e(),t._v(" "),r("h2",{staticClass:"mt-0 mb-0 text-xl text-black dark:group-hover:text-blue-400 group-hover:text-blue-600"},[t._v("\n        "+t._s(t.post.title)+"\n      ")]),t._v(" "),r("p",{staticClass:"text-gray-600 dark:text-gray-400 transition-colors my-1"},[t._v("\n        "+t._s(t.post.description)+"\n      ")]),t._v(" "),r("p",{staticClass:"text-sm text-gray-600 dark:text-gray-400 transition-colors"},[t._v("\n        By\n        "),t._l(t.authors,(function(e,n){return r("span",{key:e.slug},[r("span",{staticClass:"text-gray-700 dark:text-gray-300 transition-colors"},[r("NuxtLink",{attrs:{to:e.path}},[t._v(" "+t._s(e.name))]),n!=t.post.authors.length-1?r("span",[t._v(", ")]):t._e()],1)])})),t._v("\n        ·\n        "+t._s(t.formatDate(t.post.updatedAt))+"\n      ")],2)])])])}),[],!1,null,null,null);e.default=component.exports},334:function(t,e,n){"use strict";n.r(e);var r=n(5),o=(n(27),n(47),n(56),n(33),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("poems").only(["title","description","slug","createdAt","updatedAt","path","category","featuredImage","authors"]).sortBy("createdAt","desc").limit(2).fetch();case 3:return r=e.sent,e.next=6,n("authors").fetch();case 6:return o=e.sent,e.next=9,n("puzzles").only(["title","subtitle","slug","createdAt"]).sortBy("createdAt","desc").limit(5).fetch();case 9:return l=e.sent,e.abrupt("return",{poems:r,puzzles:l,allAuthors:o});case 11:case"end":return e.stop()}}),e)})))()},methods:{formatDate:n(236).a,filterAuthors:function(t){return this.allAuthors.filter((function(e){return t.includes(e.slug)}))}},head:{title:"Home"}}),l=n(13),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("PostTitle",[t._v("Hello There!")]),t._v(" "),n("PostSubtitle",[t._v("How are you?")]),t._v(" "),n("p",[t._v("\n    I am Pranshu Gaba. I am a PhD student in computer science. Welcome to my\n    (new) website.\n  ")]),t._v(" "),n("h2",[t._v("Recent posts")]),t._v(" "),n("h3",[t._v("Puzzles")]),t._v(" "),n("ul",t._l(t.puzzles,(function(e){return n("li",{key:e.slug},[n("span",{staticClass:"font-mono text-gray-500 dark:text-gray-400 transition-colors mr-1"},[t._v("\n        "+t._s(t.formatDate(e.createdAt,{day:"2-digit",month:"short",year:"numeric"}))+"\n        »\n      ")]),t._v(" "),n("NuxtLink",{attrs:{to:{name:"puzzles-slug",params:{slug:e.slug}}}},[t._v("\n        #"+t._s(e.slug)+" - "+t._s(e.title)+"\n      ")])],1)})),0),t._v(" "),n("h3",[t._v("Poems")]),t._v(" "),n("ul",t._l(t.poems,(function(e){return n("li",{key:e.slug},[n("PostPreviewThumbnail",{attrs:{post:e,"show-category":!1,authors:t.filterAuthors(e.authors)}})],1)})),0),t._v(" "),n("div",{staticClass:"text-right"},[n("NuxtLink",{attrs:{to:"/poems"}},[t._v(" See all poems ⟶")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PostTitle:n(238).default,PostSubtitle:n(239).default,PostPreviewThumbnail:n(277).default})}}]);
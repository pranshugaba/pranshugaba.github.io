(window.webpackJsonp=window.webpackJsonp||[]).push([[31,10,18,21,23],{249:function(t,e,r){"use strict";r.r(e);var n=r(11),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h1",{staticClass:"mb-3"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},250:function(t,e,r){"use strict";r.r(e);var n=r(11),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"text-xl mt-0 mb-6 text-gray-600 dark:text-gray-400 transition-colors"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},253:function(t,e,r){"use strict";r.r(e);var n=r(58),l={props:{post:Object},methods:{formatDate:n.a,getCategoryFromRoute:n.c,getThemeFromCategory:n.d},computed:{category:function(){return Object(n.c)(this.post.path)},theme:function(){return Object(n.d)(this.category)}}},o=r(11),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("span",{staticClass:"font-mono text-sm text-gray-500 dark:text-gray-400 transition-colors mr-1"},[t._v("\n    "+t._s(t.formatDate(t.post.createdAt,{day:"2-digit",month:"short",year:"numeric"}))+"\n    »\n  ")]),t._v(" "),r("NuxtLink",{class:t.theme,attrs:{to:t.post.path}},[t._t("default",[t._v(t._s(t.post.title)+" ")])],2)],1)}),[],!1,null,null,null);e.default=component.exports},292:function(t,e,r){"use strict";r.r(e);var n={props:{img:String,alt:String}},l=r(11),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"block md:flex md:flex-row-reverse md:items-center md:justify-between"},[r("NuxtImg",{staticClass:"w-3/5 max-w-sm mx-auto md:mx-0 md:ml-4 my-8 md:my-0 rounded-2xl shadow-md",attrs:{src:t.img,alt:t.alt}}),t._v(" "),r("div",{staticClass:"max-w-md"},[t._t("default")],2)],1)}),[],!1,null,null,null);e.default=component.exports},355:function(t,e,r){"use strict";r.r(e);var n=r(2),l=(r(13),r(37),r(50),r(32),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("authors").fetch();case 3:return n=e.sent,e.next=6,r("poems").only(["title","slug","createdAt","path"]).sortBy("createdAt","desc").limit(3).fetch();case 6:return l=e.sent,e.next=9,r("puzzles").only(["title","slug","createdAt","path"]).sortBy("createdAt","desc").limit(3).fetch();case 9:return o=e.sent,e.next=12,r("articles").only(["title","slug","createdAt","path"]).sortBy("createdAt","desc").limit(3).fetch();case 12:return c=e.sent,e.abrupt("return",{allAuthors:n,articles:c,poems:l,puzzles:o});case 14:case"end":return e.stop()}}),e)})))()},methods:{formatDate:r(58).a,filterAuthors:function(t){return this.allAuthors.filter((function(e){return t.includes(e.slug)}))}},head:{title:"Home"}}),o=r(11),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"max-w-screen-lg"},[r("PageHero",{attrs:{img:"/img/yellow.webp",alt:"Pranshu Gaba standing in front of yellow flowers, holding a yellow umbrella."}},[r("PostTitle",[t._v("Hello There!")]),t._v(" "),r("PostSubtitle",[t._v("How are you?")]),t._v(" "),r("p",[t._v("\n      I am Pranshu Gaba. I am a PhD student in computer science. Welcome to my\n      (new) website!\n    ")])],1),t._v(" "),r("h2",[t._v("Recent posts")]),t._v(" "),r("h3",[t._v("Puzzles")]),t._v(" "),r("ul",{staticClass:"theme-puzzle"},t._l(t.puzzles,(function(e){return r("li",{key:e.slug},[r("PostPreviewList",{attrs:{post:e}},[t._v("#"+t._s(e.slug)+" - "+t._s(e.title)+"\n      ")])],1)})),0),t._v(" "),r("h3",[t._v("Articles")]),t._v(" "),r("ul",{staticClass:"theme-article"},t._l(t.articles,(function(article){return r("li",{key:article.slug},[r("PostPreviewList",{attrs:{post:article}})],1)})),0),t._v(" "),r("h3",[t._v("Poems")]),t._v(" "),r("ul",{staticClass:"theme-poem"},t._l(t.poems,(function(t){return r("li",{key:t.slug},[r("PostPreviewList",{attrs:{post:t}})],1)})),0),t._v(" "),r("div",{staticClass:"theme-poem text-right"},[r("NuxtLink",{attrs:{to:"/poems/page/1"}},[t._v(" See all poems ⟶")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PostTitle:r(249).default,PostSubtitle:r(250).default,PageHero:r(292).default,PostPreviewList:r(253).default})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[13,10,14,18,19],{242:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return l})),r.d(e,"d",(function(){return f})),r.d(e,"e",(function(){return d})),r.d(e,"c",(function(){return m}));r(37),r(58),r(32),r(44),r(71),r(14),r(43),r(57);var n={year:"numeric",month:"short",day:"numeric"};function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n;new Date;return new Date(t).toLocaleDateString("en",e)}function l(t){var e,r=new Date(t),n=new Date;return e=r.getFullYear()<n.getFullYear()?{year:"numeric",month:"short",day:"numeric"}:{month:"short",day:"numeric"},r.toLocaleDateString("en",e)}function c(t){return t.charAt(0).toUpperCase()+t.slice(1)}function f(t){return t.split("-").map((function(t){return c(t)})).join(" ")}function d(content){var t=JSON.stringify(content).split(" ").length;return Math.ceil(t/200)}function m(){return o("2021-05-11T18:58:53",{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"})}},243:function(t,e,r){"use strict";r.r(e);var n=r(13),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h1",{staticClass:"mb-3"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},244:function(t,e,r){"use strict";r.r(e);var n=r(13),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"text-xl mt-0 mb-6 text-gray-600 dark:text-gray-400 transition-colors"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},247:function(t,e,r){t.exports=r.p+"img/cycling.c60012c.webp"},249:function(t,e,r){var map={"./cycling.webp":247,"./farm.webp":250};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=249},250:function(t,e,r){t.exports=r.p+"img/farm.f74f09a.webp"},252:function(t,e,r){"use strict";r.r(e);var n=r(242),o={props:{authors:{type:Array,required:!0},post:{type:Object}},methods:{formatDateHideCurrentYear:n.b,readingTime:n.e}},l=r(13),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-8 mb-10 flex items-center justify-start space-x-3"},[t._l(t.authors,(function(t){return n("div",{key:t.slug},[n("img",{staticClass:"h-12 w-12 rounded-full",attrs:{src:r(249)("./"+t.avatar),alt:"Avatar of the author"}})])})),t._v(" "),n("div",[t._l(t.authors,(function(e,r){return n("span",{key:e.slug},[n("span",{staticClass:"text-gray-700 dark:text-gray-300 transition-colors"},[n("NuxtLink",{staticClass:"text-gray-800 dark:text-gray-200 transition-colors font-medium",attrs:{to:e.path}},[t._v(t._s(e.name))]),r!=t.authors.length-1?n("span",[t._v(", ")]):t._e()],1)])})),t._v(" "),n("div",{staticClass:"text-gray-600 dark:text-gray-400 text-sm transition-colors"},[t._v("\n      "+t._s(t.formatDateHideCurrentYear(t.post.updatedAt))+"\n      "),t.post.showReadingTime?n("span",[n("span",{staticClass:"pl-1"},[t._v(" · ")]),t._v(" "),n("span",{staticClass:"pl-1"},[t._v(t._s(t.readingTime(t.post))+" min read")])]):t._e()])],2)],2)}),[],!1,null,null,null);e.default=component.exports},253:function(t,e,r){"use strict";r.r(e);var n=r(13),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"mb-3 text-sm text-blue-700 font-medium dark:text-blue-300 uppercase tracking-wider"},[t._t("default",[t._v("Category")])],2)}),[],!1,null,null,null);e.default=component.exports},287:function(t,e,r){"use strict";r.r(e);var n=r(242),o={props:{post:Object,authors:Array},methods:{readingTime:n.e}},l=r(13),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("PostCategory",[t._v(t._s(t.post.category))]),t._v(" "),r("PostTitle",[t._v(t._s(t.post.title))]),t._v(" "),r("PostSubtitle",[t._v(t._s(t.post.subtitle))]),t._v(" "),r("PostInfoChip",{attrs:{authors:t.authors,post:t.post}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PostCategory:r(253).default,PostTitle:r(243).default,PostSubtitle:r(244).default,PostInfoChip:r(252).default})}}]);
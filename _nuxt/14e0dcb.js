(window.webpackJsonp=window.webpackJsonp||[]).push([[18,5],{236:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r={year:"numeric",month:"short",day:"numeric"};function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r;return new Date(t).toLocaleDateString("en",e)}},246:function(t,e,n){n(28),n(14),n(27),n(34),n(23),n(35);var r=n(123),o=n(124);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}n(46),t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),l=e.children,v=void 0===l?[]:l,_=data.class,h=data.staticClass,style=data.style,f=data.staticStyle,d=data.attrs,m=void 0===d?{}:d,y=o(data,["class","staticClass","style","staticStyle","attrs"]);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:["feather feather-external-link",_,h],style:[style,f],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},m)},y),v.concat([n("path",{attrs:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}}),n("polyline",{attrs:{points:"15 3 21 3 21 9"}}),n("line",{attrs:{x1:"10",y1:"14",x2:"21",y2:"3"}})]))}}},274:function(t,e,n){"use strict";n.r(e);var r=n(246),o={props:{to:{type:String},linkText:{type:String,default:"ExternalLink"}},components:{ExternalIcon:n.n(r).a}},c=n(13),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("a",{attrs:{href:t.to,target:"_blank",rel:"noopener"}},[t._t("default")],2),t._v(" "),n("ExternalIcon",{staticClass:"inline h-4 mb-1 mr-1 text-gray-600 dark:text-gray-400 transition-colors"})],1)}),[],!1,null,null,null);e.default=component.exports},282:function(t,e,n){"use strict";(function(t){var r=n(5),o=(n(33),n(236));e.a={head:{title:"About Me"},methods:{formatDate:o.a,getBuildDate:function(){return Object(o.a)(t.env.NUXT_BUILD_DATE_TIME,{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"})}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("poems").fetch();case 3:return r=e.sent,o=r.length,e.next=7,n("puzzles").fetch();case 7:return c=e.sent,l=c.length,e.abrupt("return",{totalPoems:o,totalPuzzles:l});case 10:case"end":return e.stop()}}),e)})))()}}}).call(this,n(186))},337:function(t,e,n){"use strict";n.r(e);var r=n(282).a,o=n(13),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("h1",[t._v("About Me")]),t._v(" "),n("p",[t._v("I am a PhD student in Theoretical Computer Science.")]),t._v(" "),n("p",[t._v("\n    I click pictures, write poetry, create puzzles, draw comics, develop apps\n    and games, and write stories.\n  ")]),t._v(" "),n("p",[t._v("\n    I also love playing chess, solving puzzles, swimming and cycling but not\n    both at once.\n  ")]),t._v(" "),n("h2",[t._v("Projects")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"text-right"},[n("NuxtLink",{attrs:{to:"/projects"}},[t._v(" See all projects ⟶")])],1),t._v(" "),n("h2",[t._v("Reading")]),t._v(" "),n("p",[t._v("I am currently reading The Hobbit, or There and Back again.")]),t._v(" "),n("h2",[t._v("Uses")]),t._v(" "),t._m(1),t._v(" "),n("h2",[t._v("About this site")]),t._v(" "),n("p",[t._v("\n    This site is built using Nuxt.js and Vue.js. You can find the source code\n    on\n    "),n("NavigationExtLink",{attrs:{to:"https://github.com/pranshugaba/nuxt-website"}},[t._v("GitHub")]),t._v(".\n  ")],1),t._v(" "),n("p",[t._v("There are currently")]),t._v(" "),n("ul",{staticClass:"list-disc list-inside"},[n("li",[t._v(t._s(t.totalPoems)+" poems")]),t._v(" "),n("li",[t._v(t._s(t.totalPuzzles)+" puzzles")])]),t._v(" "),n("p",[t._v("on this website.")]),t._v(" "),n("p",[t._v("Last updated at "+t._s(t.getBuildDate()))])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("Decimal Clock")]),t._v(" "),n("li",[t._v("Maths Wiki")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("Arch Linux")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{NavigationExtLink:n(274).default})}}]);
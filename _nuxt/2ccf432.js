(window.webpackJsonp=window.webpackJsonp||[]).push([[30,6,10,21,23],{249:function(t,e,r){"use strict";r.r(e);var n=r(11),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h1",{staticClass:"mb-3"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},250:function(t,e,r){"use strict";r.r(e);var n=r(11),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"text-xl mt-0 mb-6 text-gray-600 dark:text-gray-400 transition-colors"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},260:function(t,e,r){r(15),r(12),r(13),r(22),r(14),r(23);var n=r(127),l=r(128);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(33),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),c=e.children,f=void 0===c?[]:c,m=data.class,d=data.staticClass,style=data.style,v=data.staticStyle,h=data.attrs,x=void 0===h?{}:h,_=l(data,["class","staticClass","style","staticStyle","attrs"]);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:["feather feather-external-link",m,d],style:[style,v],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},x)},_),f.concat([r("path",{attrs:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}}),r("polyline",{attrs:{points:"15 3 21 3 21 9"}}),r("line",{attrs:{x1:"10",y1:"14",x2:"21",y2:"3"}})]))}}},289:function(t,e,r){"use strict";r.r(e);var n=r(260),l={props:{to:{type:String},linkText:{type:String,default:"ExternalLink"}},components:{ExternalIcon:r.n(n).a}},o=r(11),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("a",{attrs:{href:t.to,target:"_blank",rel:"noopener"}},[t._t("default")],2),t._v(" "),r("ExternalIcon",{staticClass:"inline h-4 mb-1 text-gray-600 dark:text-gray-400 transition-colors"})],1)}),[],!1,null,null,null);e.default=component.exports},292:function(t,e,r){"use strict";r.r(e);var n={props:{img:String,alt:String}},l=r(11),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"block md:flex md:flex-row-reverse md:items-center md:justify-between"},[r("NuxtImg",{staticClass:"w-3/5 max-w-sm mx-auto md:mx-0 md:ml-4 my-8 md:my-0 rounded-2xl shadow-md",attrs:{src:t.img,alt:t.alt}}),t._v(" "),r("div",{staticClass:"max-w-md"},[t._t("default")],2)],1)}),[],!1,null,null,null);e.default=component.exports},341:function(t,e,r){"use strict";r.r(e);var n={head:{title:"Contact"}},l=r(11),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"max-w-screen-lg"},[r("PageHero",{attrs:{img:"/img/contact/pranshu_kimono.webp"}},[r("PostTitle",[t._v("Contact me")]),t._v(" "),r("PostSubtitle",[t._v("Get in touch")]),t._v(" "),r("ul",[r("li",[t._v("\n        Email:\n        "),r("a",{attrs:{href:"mailto:pranshu@pranshugaba.com"}},[t._v("pranshu@pranshugaba.com")])]),t._v(" "),r("li",[t._v("\n        Github:\n        "),r("NavExtLink",{attrs:{to:"https://github.com/pranshugaba"}},[t._v("@pranshugaba")])],1),t._v(" "),r("li",[t._v("\n        Twitter:\n        "),r("NavExtLink",{attrs:{to:"https://twitter.com/pranshugaba"}},[t._v("@pranshugaba")])],1)])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PostTitle:r(249).default,PostSubtitle:r(250).default,NavExtLink:r(289).default,PageHero:r(292).default})}}]);
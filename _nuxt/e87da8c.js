(window.webpackJsonp=window.webpackJsonp||[]).push([[40,18],{253:function(t,e,n){"use strict";n.r(e);var r=n(58),o={props:{post:Object},methods:{formatDate:r.a,getCategoryFromRoute:r.c,getThemeFromCategory:r.d},computed:{category:function(){return Object(r.c)(this.post.path)},theme:function(){return Object(r.d)(this.category)}}},c=n(11),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",{staticClass:"font-mono text-sm text-gray-500 dark:text-gray-400 transition-colors mr-1"},[t._v("\n    "+t._s(t.formatDate(t.post.createdAt,{day:"2-digit",month:"short",year:"numeric"}))+"\n    »\n  ")]),t._v(" "),n("NuxtLink",{class:t.theme,attrs:{to:t.post.path}},[t._t("default",[t._v(t._s(t.post.title)+" ")])],2)],1)}),[],!1,null,null,null);e.default=component.exports},349:function(t,e,n){"use strict";n.r(e);var r=n(2),o=(n(32),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,o=r.tag,e.next=4,n("/",{deep:!0}).where({tags:{$contains:o}}).only(["title","slug","path","createdAt"]).sortBy("createdAt","asc").fetch();case 4:return c=e.sent,e.abrupt("return",{params:r,posts:c,tag:o});case 6:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.tag}}}),c=n(11),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"content-width"},[n("h1",[t._v(t._s(t.tag))]),t._v(" "),t.posts.length>0?n("div",[n("p",[t._v("Posts tagged with "+t._s(t.tag))]),t._v(" "),n("ul",t._l(t.posts,(function(t){return n("li",{key:t.slug},[n("PostPreviewList",{attrs:{post:t}})],1)})),0)]):n("div",[n("p",[t._v("No posts with this tag.")])]),t._v(" "),n("div",{staticClass:"text-right"},[n("NuxtLink",{attrs:{to:"/tags"}},[t._v(" See all tags ⟶")])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PostPreviewList:n(253).default})}}]);
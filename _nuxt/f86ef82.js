(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{291:function(t,e,r){var content=r(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(61).default)("563c6a8b",content,!0,{sourceMap:!1})},293:function(t,e,r){"use strict";r(291)},294:function(t,e,r){var o=r(60)((function(i){return i[1]}));o.push([t.i,".current-page[data-v-6c92a53a]{background-color:var(--color-primary);--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.group:hover .current-page[data-v-6c92a53a]{text-decoration:none}.dark .current-page[data-v-6c92a53a]{background-color:var(--color-primary-dark);--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity))}.other-page[data-v-6c92a53a]{border-width:1px;border-color:transparent}.group:hover .other-page[data-v-6c92a53a]{border-color:var(--color-primary);text-decoration:none}.dark .group:hover .other-page[data-v-6c92a53a]{border-color:var(--color-primary-dark)}",""]),t.exports=o},300:function(t,e,r){"use strict";r.r(e);r(190);var o={props:{totalPosts:{type:Number,default:26},postsPerPage:{type:Number,default:5}},computed:{totalPages:function(){return Math.ceil(this.totalPosts/this.postsPerPage)},prevPage:function(){return this.currentPage>1?this.currentPage-1:1},currentPage:function(){return parseInt(this.$route.params.page)||1},nextPage:function(){return this.currentPage<this.totalPages?this.currentPage+1:this.totalPages}}},n=(r(293),r(11)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ul",{staticClass:"flex items-center justify-center space-x-2 mt-8"},[r("li",{staticClass:"disabled"},[r("NuxtLink",{staticClass:"pr-4",attrs:{to:{name:"poems-page-page",params:{page:t.prevPage}}}},[r("button",{staticClass:"disabled:text-gray-500 disabled:opacity-50 transition-colors",attrs:{disabled:1===t.currentPage}},[t._v("\n          prev\n        ")])])],1),t._v(" "),t._l(t.totalPages,(function(e){return r("li",{key:e},[r("NuxtLink",{staticClass:"hover:no-underline group",attrs:{to:{name:"poems-page-page",params:{page:e}}}},[r("div",{staticClass:"px-2 py-0.5 rounded transition-colors",class:e===t.currentPage?"current-page":"other-page"},[t._v("\n          "+t._s(e)+"\n        ")])])],1)})),t._v(" "),r("li",[r("NuxtLink",{staticClass:"pl-4",attrs:{to:{name:"poems-page-page",params:{page:t.nextPage}}}},[r("button",{staticClass:"disabled:text-gray-500 disabled:opacity-50 transition-colors",attrs:{disabled:t.currentPage===t.totalPages}},[t._v("\n          next\n        ")])])],1)],2)])}),[],!1,null,"6c92a53a",null);e.default=component.exports}}]);
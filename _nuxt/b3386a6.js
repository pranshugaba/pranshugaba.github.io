(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{181:function(n,t,e){e(15),e(11),e(14),e(25),e(12),e(26);var r=e(126),o=e(127);function l(object,n){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(object,n).enumerable}))),t.push.apply(t,e)}return t}e(33),n.exports={functional:!0,render:function(n,t){var e=t._c,data=(t._v,t.data),c=t.children,d=void 0===c?[]:c,m=data.class,h=data.staticClass,style=data.style,f=data.staticStyle,y=data.attrs,w=void 0===y?{}:y,x=o(data,["class","staticClass","style","staticStyle","attrs"]);return e("svg",function(n){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){r(n,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(source,t))}))}return n}({class:["feather feather-sun",m,h],style:[style,f],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},w)},x),d.concat([e("circle",{attrs:{cx:"12",cy:"12",r:"5"}}),e("line",{attrs:{x1:"12",y1:"1",x2:"12",y2:"3"}}),e("line",{attrs:{x1:"12",y1:"21",x2:"12",y2:"23"}}),e("line",{attrs:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}}),e("line",{attrs:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}}),e("line",{attrs:{x1:"1",y1:"12",x2:"3",y2:"12"}}),e("line",{attrs:{x1:"21",y1:"12",x2:"23",y2:"12"}}),e("line",{attrs:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}}),e("line",{attrs:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"}})]))}}},182:function(n,t,e){e(15),e(11),e(14),e(25),e(12),e(26);var r=e(126),o=e(127);function l(object,n){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(object,n).enumerable}))),t.push.apply(t,e)}return t}e(33),n.exports={functional:!0,render:function(n,t){var e=t._c,data=(t._v,t.data),c=t.children,d=void 0===c?[]:c,m=data.class,h=data.staticClass,style=data.style,f=data.staticStyle,y=data.attrs,w=void 0===y?{}:y,x=o(data,["class","staticClass","style","staticStyle","attrs"]);return e("svg",function(n){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){r(n,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(source,t))}))}return n}({class:["feather feather-moon",m,h],style:[style,f],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},w)},x),d.concat([e("path",{attrs:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}})]))}}},186:function(n,t,e){"use strict";var r=e(13),component=Object(r.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"px-4 mx-auto sm:max-w-lg md:max-w-xl lg:max-w-prose"},[e("NavigationHeader"),n._v(" "),e("Nuxt"),n._v(" "),e("NavigationFooter")],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{NavigationHeader:e(237).default,NavigationFooter:e(238).default})},192:function(n,t,e){e(193),n.exports=e(194)},223:function(n,t,e){var content=e(224);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(120).default)("33401e2c",content,!0,{sourceMap:!1})},224:function(n,t,e){var r=e(118)((function(i){return i[1]}));r.push([n.i,"/*! tailwindcss v2.1.2 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n  margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n  font-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'] {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n  padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n */\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * Make replaced elements `display: block` by default as that's\n * the behavior you want almost all of the time. Inspired by\n * CSS Remedy, with `svg` added as well.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  vertical-align: middle;\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\nh1{\n  font-weight:700;\n  font-size:2.25rem;\n  line-height:2.5rem;\n  margin-bottom:1.5rem\n}\n\n.dark h1{\n  --tw-text-opacity:1;\n  color:rgba(243, 244, 246, var(--tw-text-opacity));\n}\n\nh1{\n  transition-property:background-color, border-color, color, fill, stroke;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:250ms;\n}\n\nh2{\n  font-weight:600;\n  font-size:1.875rem;\n  line-height:2.25rem;\n  margin-bottom:1rem;\n  margin-top:2.5rem\n}\n\n.dark h2{\n  --tw-text-opacity:1;\n  color:rgba(243, 244, 246, var(--tw-text-opacity));\n}\n\nh2{\n  transition-property:background-color, border-color, color, fill, stroke;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:250ms;\n}\n\nh3{\n  font-weight:600;\n  font-size:1.5rem;\n  line-height:2rem;\n  margin-bottom:0.75rem;\n  margin-top:2rem\n}\n\n.dark h3{\n  --tw-text-opacity:1;\n  color:rgba(243, 244, 246, var(--tw-text-opacity));\n}\n\nh3{\n  transition-property:background-color, border-color, color, fill, stroke;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:250ms;\n}\n\nh4{\n  font-weight:500;\n  font-size:1.25rem;\n  line-height:1.75rem;\n  margin-bottom:0.5rem;\n  margin-top:1.5rem\n}\n\n.dark h4{\n  --tw-text-opacity:1;\n  color:rgba(243, 244, 246, var(--tw-text-opacity));\n}\n\nh4{\n  transition-property:background-color, border-color, color, fill, stroke;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:250ms;\n}\n\np{\n  line-height:1.625;\n  margin-top:1.5rem;\n  margin-bottom:1.5rem\n}\n\n.dark p{\n  --tw-text-opacity:1;\n  color:rgba(243, 244, 246, var(--tw-text-opacity));\n}\n\np{\n  transition-property:background-color, border-color, color, fill, stroke;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:250ms;\n}\n\nli{\n  margin-top:0.5rem;\n  margin-bottom:0.5rem\n}\n\n.dark li{\n  --tw-text-opacity:1;\n  color:rgba(243, 244, 246, var(--tw-text-opacity));\n}\n\nli{\n  transition-property:background-color, border-color, color, fill, stroke;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:250ms;\n}\n\na{\n  --tw-text-opacity:1;\n  color:rgba(37, 99, 235, var(--tw-text-opacity))\n}\n\na:active{\n  --tw-text-opacity:1;\n  color:rgba(219, 39, 119, var(--tw-text-opacity));\n}\n\n.dark a{\n  --tw-text-opacity:1;\n  color:rgba(147, 197, 253, var(--tw-text-opacity));\n}\n\n.dark a:active{\n  --tw-text-opacity:1;\n  color:rgba(249, 168, 212, var(--tw-text-opacity));\n}\n\na:hover{\n  text-decoration:underline;\n}\n\na{\n  transition-property:background-color, border-color, color, fill, stroke;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:250ms;\n}\n\nhr{\n  --tw-border-opacity:1;\n  border-color:rgba(75, 85, 99, var(--tw-border-opacity))\n}\n\n.dark hr{\n  --tw-border-opacity:1;\n  border-color:rgba(156, 163, 175, var(--tw-border-opacity));\n}\n\nhr{\n  margin-top:1.5rem;\n  margin-bottom:1.5rem;\n  transition-property:background-color, border-color, color, fill, stroke;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:250ms;\n}\n\nblockquote{\n  --tw-bg-opacity:1;\n  background-color:rgba(229, 231, 235, var(--tw-bg-opacity))\n}\n\n.dark blockquote{\n  --tw-bg-opacity:1;\n  background-color:rgba(31, 41, 55, var(--tw-bg-opacity));\n}\n\nblockquote{\n  --tw-border-opacity:1;\n  border-color:rgba(156, 163, 175, var(--tw-border-opacity));\n}\n\n.dark blockquote{\n  --tw-border-opacity:1;\n  border-color:rgba(156, 163, 175, var(--tw-border-opacity));\n}\n\nblockquote{\n  border-radius:0.125rem;\n  border-left-width:4px;\n  font-size:1.125rem;\n  line-height:1.75rem;\n  max-width:-webkit-max-content;\n  max-width:-moz-max-content;\n  max-width:max-content;\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n  padding-left:0.75rem;\n  padding-right:0.75rem;\n  transition-property:background-color, border-color, color, fill, stroke;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:250ms;\n}\n\nblockquote p{\n  display:inline\n}\n\n.space-x-3 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse:0;\n  margin-right:calc(0.75rem * var(--tw-space-x-reverse));\n  margin-left:calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.space-x-4 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse:0;\n  margin-right:calc(1rem * var(--tw-space-x-reverse));\n  margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.space-x-6 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse:0;\n  margin-right:calc(1.5rem * var(--tw-space-x-reverse));\n  margin-left:calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.bg-gray-100{\n  --tw-bg-opacity:1;\n  background-color:rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n\n.bg-gray-200{\n  --tw-bg-opacity:1;\n  background-color:rgba(229, 231, 235, var(--tw-bg-opacity));\n}\n\n.dark .dark\\:bg-gray-700{\n  --tw-bg-opacity:1;\n  background-color:rgba(55, 65, 81, var(--tw-bg-opacity));\n}\n\n.dark .dark\\:bg-gray-800{\n  --tw-bg-opacity:1;\n  background-color:rgba(31, 41, 55, var(--tw-bg-opacity));\n}\n\n.dark .dark\\:bg-gray-900{\n  --tw-bg-opacity:1;\n  background-color:rgba(17, 24, 39, var(--tw-bg-opacity));\n}\n\n.border-blue-600{\n  --tw-border-opacity:1;\n  border-color:rgba(37, 99, 235, var(--tw-border-opacity));\n}\n\n.border-blue-700{\n  --tw-border-opacity:1;\n  border-color:rgba(29, 78, 216, var(--tw-border-opacity));\n}\n\n.dark .dark\\:border-blue-300{\n  --tw-border-opacity:1;\n  border-color:rgba(147, 197, 253, var(--tw-border-opacity));\n}\n\n.dark .dark\\:border-blue-400{\n  --tw-border-opacity:1;\n  border-color:rgba(96, 165, 250, var(--tw-border-opacity));\n}\n\n.border-opacity-50{\n  --tw-border-opacity:0.5;\n}\n\n.dark .dark\\:border-opacity-50{\n  --tw-border-opacity:0.5;\n}\n\n.rounded-md{\n  border-radius:0.375rem;\n}\n\n.rounded-lg{\n  border-radius:0.5rem;\n}\n\n.rounded-xl{\n  border-radius:0.75rem;\n}\n\n.rounded-3xl{\n  border-radius:1.5rem;\n}\n\n.rounded-full{\n  border-radius:9999px;\n}\n\n.border-t{\n  border-top-width:1px;\n}\n\n.border-b{\n  border-bottom-width:1px;\n}\n\n.cursor-pointer{\n  cursor:pointer;\n}\n\n.block{\n  display:block;\n}\n\n.inline-block{\n  display:inline-block;\n}\n\n.inline{\n  display:inline;\n}\n\n.flex{\n  display:flex;\n}\n\n.table{\n  display:table;\n}\n\n.grid{\n  display:grid;\n}\n\n.flex-wrap{\n  flex-wrap:wrap;\n}\n\n.items-center{\n  align-items:center;\n}\n\n.items-baseline{\n  align-items:baseline;\n}\n\n.justify-start{\n  justify-content:flex-start;\n}\n\n.justify-between{\n  justify-content:space-between;\n}\n\n.justify-evenly{\n  justify-content:space-evenly;\n}\n\n.font-serif{\n  font-family:ui-serif, Georgia, Cambria, \"Times New Roman\", Times, serif;\n}\n\n.font-mono{\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n.font-medium{\n  font-weight:500;\n}\n\n.font-semibold{\n  font-weight:600;\n}\n\n.font-bold{\n  font-weight:700;\n}\n\n.h-4{\n  height:1rem;\n}\n\n.h-12{\n  height:3rem;\n}\n\n.h-20{\n  height:5rem;\n}\n\n.h-auto{\n  height:auto;\n}\n\n.text-xs{\n  font-size:0.75rem;\n  line-height:1rem;\n}\n\n.text-sm{\n  font-size:0.875rem;\n  line-height:1.25rem;\n}\n\n.text-lg{\n  font-size:1.125rem;\n  line-height:1.75rem;\n}\n\n.text-xl{\n  font-size:1.25rem;\n  line-height:1.75rem;\n}\n\n.text-2xl{\n  font-size:1.5rem;\n  line-height:2rem;\n}\n\n.leading-normal{\n  line-height:1.5;\n}\n\n.list-inside{\n  list-style-position:inside;\n}\n\n.list-disc{\n  list-style-type:disc;\n}\n\n.my-0{\n  margin-top:0px;\n  margin-bottom:0px;\n}\n\n.my-1{\n  margin-top:0.25rem;\n  margin-bottom:0.25rem;\n}\n\n.my-8{\n  margin-top:2rem;\n  margin-bottom:2rem;\n}\n\n.mx-auto{\n  margin-left:auto;\n  margin-right:auto;\n}\n\n.mt-0{\n  margin-top:0px;\n}\n\n.mb-0{\n  margin-bottom:0px;\n}\n\n.mr-1{\n  margin-right:0.25rem;\n}\n\n.mb-1{\n  margin-bottom:0.25rem;\n}\n\n.mt-2{\n  margin-top:0.5rem;\n}\n\n.mb-2{\n  margin-bottom:0.5rem;\n}\n\n.mb-3{\n  margin-bottom:0.75rem;\n}\n\n.mt-4{\n  margin-top:1rem;\n}\n\n.mr-4{\n  margin-right:1rem;\n}\n\n.mb-4{\n  margin-bottom:1rem;\n}\n\n.ml-4{\n  margin-left:1rem;\n}\n\n.mt-6{\n  margin-top:1.5rem;\n}\n\n.mb-6{\n  margin-bottom:1.5rem;\n}\n\n.mt-8{\n  margin-top:2rem;\n}\n\n.mb-8{\n  margin-bottom:2rem;\n}\n\n.mb-10{\n  margin-bottom:2.5rem;\n}\n\n.mt-12{\n  margin-top:3rem;\n}\n\n.mb-12{\n  margin-bottom:3rem;\n}\n\n.mt-16{\n  margin-top:4rem;\n}\n\n.max-w-1\\/4{\n  max-width:25%;\n}\n\n.object-cover{\n  -o-object-fit:cover;\n     object-fit:cover;\n}\n\n.overflow-hidden{\n  overflow:hidden;\n}\n\n.py-1{\n  padding-top:0.25rem;\n  padding-bottom:0.25rem;\n}\n\n.py-2{\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n}\n\n.px-2{\n  padding-left:0.5rem;\n  padding-right:0.5rem;\n}\n\n.py-4{\n  padding-top:1rem;\n  padding-bottom:1rem;\n}\n\n.px-4{\n  padding-left:1rem;\n  padding-right:1rem;\n}\n\n.pb-1{\n  padding-bottom:0.25rem;\n}\n\n.pl-1{\n  padding-left:0.25rem;\n}\n\n.pt-3{\n  padding-top:0.75rem;\n}\n\n.pt-4{\n  padding-top:1rem;\n}\n\n.pl-4{\n  padding-left:1rem;\n}\n\n.static{\n  position:static;\n}\n\n*{\n  --tw-shadow:0 0 #0000;\n}\n\n.shadow-md{\n  --tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-lg{\n  --tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n*{\n  --tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width:0px;\n  --tw-ring-offset-color:#fff;\n  --tw-ring-color:rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow:0 0 #0000;\n  --tw-ring-shadow:0 0 #0000;\n}\n\n.text-center{\n  text-align:center;\n}\n\n.text-right{\n  text-align:right;\n}\n\n.text-black{\n  --tw-text-opacity:1;\n  color:rgba(0, 0, 0, var(--tw-text-opacity));\n}\n\n.text-gray-500{\n  --tw-text-opacity:1;\n  color:rgba(107, 114, 128, var(--tw-text-opacity));\n}\n\n.text-gray-600{\n  --tw-text-opacity:1;\n  color:rgba(75, 85, 99, var(--tw-text-opacity));\n}\n\n.text-gray-700{\n  --tw-text-opacity:1;\n  color:rgba(55, 65, 81, var(--tw-text-opacity));\n}\n\n.text-gray-800{\n  --tw-text-opacity:1;\n  color:rgba(31, 41, 55, var(--tw-text-opacity));\n}\n\n.text-gray-900{\n  --tw-text-opacity:1;\n  color:rgba(17, 24, 39, var(--tw-text-opacity));\n}\n\n.text-blue-700{\n  --tw-text-opacity:1;\n  color:rgba(29, 78, 216, var(--tw-text-opacity));\n}\n\n.group:hover .group-hover\\:text-blue-600{\n  --tw-text-opacity:1;\n  color:rgba(37, 99, 235, var(--tw-text-opacity));\n}\n\n.hover\\:text-blue-600:hover{\n  --tw-text-opacity:1;\n  color:rgba(37, 99, 235, var(--tw-text-opacity));\n}\n\n.dark .dark\\:text-gray-100{\n  --tw-text-opacity:1;\n  color:rgba(243, 244, 246, var(--tw-text-opacity));\n}\n\n.dark .dark\\:text-gray-200{\n  --tw-text-opacity:1;\n  color:rgba(229, 231, 235, var(--tw-text-opacity));\n}\n\n.dark .dark\\:text-gray-300{\n  --tw-text-opacity:1;\n  color:rgba(209, 213, 219, var(--tw-text-opacity));\n}\n\n.dark .dark\\:text-gray-400{\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity));\n}\n\n.dark .dark\\:text-blue-300{\n  --tw-text-opacity:1;\n  color:rgba(147, 197, 253, var(--tw-text-opacity));\n}\n\n.dark .group:hover .dark\\:group-hover\\:text-blue-400{\n  --tw-text-opacity:1;\n  color:rgba(96, 165, 250, var(--tw-text-opacity));\n}\n\n.dark .dark\\:hover\\:text-blue-300:hover{\n  --tw-text-opacity:1;\n  color:rgba(147, 197, 253, var(--tw-text-opacity));\n}\n\n.uppercase{\n  text-transform:uppercase;\n}\n\n.hover\\:no-underline:hover{\n  text-decoration:none;\n}\n\n.tracking-wider{\n  letter-spacing:0.05em;\n}\n\n.w-6{\n  width:1.5rem;\n}\n\n.w-12{\n  width:3rem;\n}\n\n.w-1\\/3{\n  width:33.333333%;\n}\n\n.w-2\\/3{\n  width:66.666667%;\n}\n\n.w-full{\n  width:100%;\n}\n\n.gap-8{\n  gap:2rem;\n}\n\n.grid-cols-2{\n  grid-template-columns:repeat(2, minmax(0, 1fr));\n}\n\n.grid-cols-3{\n  grid-template-columns:repeat(3, minmax(0, 1fr));\n}\n\n.transform{\n  --tw-translate-x:0;\n  --tw-translate-y:0;\n  --tw-rotate:0;\n  --tw-skew-x:0;\n  --tw-skew-y:0;\n  --tw-scale-x:1;\n  --tw-scale-y:1;\n  transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.hover\\:-translate-y-1:hover{\n  --tw-translate-y:-0.25rem;\n}\n\n.transition{\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:250ms;\n}\n\n.transition-colors{\n  transition-property:background-color, border-color, color, fill, stroke;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:250ms;\n}\n\n@-webkit-keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@-webkit-keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@-webkit-keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@-webkit-keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n.filter{\n  --tw-blur:var(--tw-empty,/*!*/ /*!*/);\n  --tw-brightness:var(--tw-empty,/*!*/ /*!*/);\n  --tw-contrast:var(--tw-empty,/*!*/ /*!*/);\n  --tw-grayscale:var(--tw-empty,/*!*/ /*!*/);\n  --tw-hue-rotate:var(--tw-empty,/*!*/ /*!*/);\n  --tw-invert:var(--tw-empty,/*!*/ /*!*/);\n  --tw-saturate:var(--tw-empty,/*!*/ /*!*/);\n  --tw-sepia:var(--tw-empty,/*!*/ /*!*/);\n  --tw-drop-shadow:var(--tw-empty,/*!*/ /*!*/);\n  filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n@media (min-width: 640px){\n  .sm\\:max-w-lg{\n    max-width:32rem;\n  }\n}\n\n@media (min-width: 768px){\n  .md\\:max-w-xl{\n    max-width:36rem;\n  }\n}\n\n@media (min-width: 1024px){\n  .lg\\:max-w-prose{\n    max-width:65ch;\n  }\n}\n\n@media (min-width: 1280px){\n}\n\n@media (min-width: 1536px){\n}",""]),n.exports=r},236:function(n,t,e){"use strict";e.r(t);var r=e(181),o=e.n(r),l=e(182),c=e.n(l),d={components:{SunIcon:o.a,MoonIcon:c.a}},m=e(13),component=Object(m.a)(d,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("button",{staticClass:"w-6 hover:text-blue-600 dark:hover:text-blue-300 transition dark:text-gray-300 text-gray-700 cursor-pointer"},["light"===n.$colorMode.value?e("SunIcon",{on:{click:function(t){n.$colorMode.preference="dark"}}}):e("MoonIcon",{on:{click:function(t){n.$colorMode.preference="light"}}})],1)}),[],!1,null,null,null);t.default=component.exports},237:function(n,t,e){"use strict";e.r(t);var r=e(13),component=Object(r.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("header",{staticClass:"mb-12"},[e("div",{staticClass:"flex flex-wrap items-center justify-between py-4"},[e("NuxtLink",{staticClass:"font-bold text-lg text-gray-900 dark:text-gray-100 transition-colors",attrs:{to:"/"}},[n._v("\n      Pranshu Gaba\n    ")]),n._v(" "),e("ul",{staticClass:"flex flex-wrap space-x-6"},[e("li",[e("NuxtLink",{staticClass:"text-gray-900 dark:text-gray-100 transition-colors",attrs:{to:"/about"}},[n._v("About")])],1),n._v(" "),e("li",[e("NuxtLink",{staticClass:"text-gray-900 dark:text-gray-100 transition-colors",attrs:{to:"/contact"}},[n._v("Contact")])],1)])],1),n._v(" "),e("nav",[e("ul",{staticClass:"flex flex-wrap items-center justify-evenly border-t border-b border-blue-700 dark:border-blue-300 border-opacity-50 dark:border-opacity-50 transition-colors"},[e("li",[e("NuxtLink",{staticClass:"text-gray-900 dark:text-gray-100 transition-colors",attrs:{to:"/articles"}},[n._v("Articles")])],1),n._v(" "),e("li",[e("NuxtLink",{staticClass:"text-gray-900 dark:text-gray-100 transition-colors",attrs:{to:"/poems/page/1"}},[n._v("Poems")])],1),n._v(" "),e("li",[e("NuxtLink",{staticClass:"text-gray-900 dark:text-gray-100 transition-colors",attrs:{to:"/puzzles"}},[n._v("Puzzles")])],1)])])])}),[],!1,null,null,null);t.default=component.exports},238:function(n,t,e){"use strict";e.r(t);var r=e(13),component=Object(r.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("footer",{staticClass:"mt-6 pt-3 pb-1 mb-8 border-t border-blue-700 dark:border-blue-300 transition-colors flex justify-between"},[e("NuxtLink",{staticClass:"text-gray-900 dark:text-gray-100 transition-colors",attrs:{to:"/licence"}},[n._v("\n    © 2021 Pranshu Gaba\n  ")]),n._v(" "),e("UtilsColorModeToggle")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UtilsColorModeToggle:e(236).default})},47:function(n,t,e){"use strict";var r={props:["error"],head:{title:"404 - Page not found"},layout:"error"},o=e(13),component=Object(o.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[404===n.error.statusCode?e("h1",[n._v("404 - Page not found")]):e("h1",[n._v("An error occurred")]),n._v(" "),e("p",[e("NuxtLink",{attrs:{to:"/"}},[n._v("Return to Home page")])],1)])}),[],!1,null,null,null);t.a=component.exports}},[[192,38,1,39]]]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{101:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(7),o=(t(0),t(133)),c=t(145),i=t(146),l={title:"Installation",sidebar_label:"Installation"},u={unversionedId:"ionic/installation",id:"ionic/installation",isDocsHomePage:!1,title:"Installation",description:"<Tabs",source:"@site/docs/ionic/installation.mdx",slug:"/ionic/installation",permalink:"/docs/ionic/installation",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/docs/ionic/installation.mdx",version:"current",sidebar_label:"Installation",sidebar:"docs",previous:{title:"Frequently Asked Questions",permalink:"/docs/cordova/faq"},next:{title:"Banner Ad",permalink:"/docs/ionic/ads/banner"}},s=[],p={toc:s};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)(c.a,{defaultValue:"cordova",values:[{label:"Cordova",value:"cordova"},{label:"Capacitor",value:"capacitor"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"cordova",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"ionic cordova plugin add admob-plus-cordova\nnpm install @admob-plus/ionic\n"))),Object(o.b)(i.a,{value:"capacitor",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"npm install @admob-plus/ionic\nnpm install admob-plus-cordova\nionic cap sync\n")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json" {4-7}',title:'"package.json"',"{4-7}":!0},'{\n  "cordova": {\n    "plugins": {\n      "admob-plus-cordova": {\n        "APP_ID_ANDROID": "ca-app-pub-xxx~yyy",\n        "APP_ID_IOS": "ca-app-pub-xxx~yyy"\n      }\n    }\n  }\n}\n')))}b.isMDXComponent=!0},133:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=r.a.createContext({}),s=function(e){var n=r.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=a,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return t?r.a.createElement(f,i(i({ref:n},u),{},{components:t})):r.a.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},134:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},140:function(e,n,t){"use strict";var a=t(0),r=t(141);n.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},141:function(e,n,t){"use strict";var a=t(0),r=Object(a.createContext)(void 0);n.a=r},145:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(140),c=t(134),i=t(55),l=t.n(i),u=37,s=39;n.a=function(e){var n=e.lazy,t=e.block,i=e.defaultValue,p=e.values,b=e.groupId,d=e.className,f=Object(o.a)(),m=f.tabGroupChoices,v=f.setTabGroupChoices,y=Object(a.useState)(i),O=y[0],g=y[1],j=a.Children.toArray(e.children);if(null!=b){var h=m[b];null!=h&&h!==O&&p.some((function(e){return e.value===h}))&&g(h)}var x=function(e){g(e),null!=b&&v(b,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},d)},p.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===n,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case s:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case u:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(w,e.target,e)},onFocus:function(){return x(n)},onClick:function(){x(n)}},t)}))),n?Object(a.cloneElement)(j.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}},146:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){var n=e.children,t=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}}}]);
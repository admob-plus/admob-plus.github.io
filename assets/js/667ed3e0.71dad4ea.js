(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{107:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return i})),a.d(n,"metadata",(function(){return c})),a.d(n,"toc",(function(){return d})),a.d(n,"default",(function(){return l}));var r=a(3),t=a(7),o=(a(0),a(151)),i={title:"Banner Ad",sidebar_label:"Banner"},c={unversionedId:"cordova/ads/banner",id:"cordova/ads/banner",isDocsHomePage:!1,title:"Banner Ad",description:"Banner ads are rectangular image or text ads that occupy a spot within an app's layout. They stay on screen while users are interacting with the app, and can refresh automatically after a certain period of time.",source:"@site/docs/cordova/ads/banner.md",slug:"/cordova/ads/banner",permalink:"/docs/cordova/ads/banner",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/docs/cordova/ads/banner.md",version:"current",sidebar_label:"Banner",sidebar:"docs",previous:{title:"Installation",permalink:"/docs/cordova"},next:{title:"Interstitial Ad",permalink:"/docs/cordova/ads/interstitial"}},d=[{value:"Usage",id:"usage",children:[]},{value:"Events",id:"events",children:[{value:"<code>admob.banner.load</code>",id:"admobbannerload",children:[]},{value:"<code>admob.banner.loadFail</code>",id:"admobbannerloadfail",children:[]},{value:"<code>admob.banner.impression</code>",id:"admobbannerimpression",children:[]}]}],s={toc:d};function l(e){var n=e.components,a=Object(t.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,a,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Banner ads are rectangular image or text ads that occupy a spot within an app's layout. They stay on screen while users are interacting with the app, and can refresh automatically after a certain period of time."),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"document.addEventListener('deviceready', async () => {\n  await admob.start()\n\n  const banner = new admob.BannerAd({\n    adUnitId: 'ca-app-pub-xxx/yyy',\n  })\n\n  await banner.show()\n}, false)\n\ndocument.addEventListener('admob.banner.impression', async () => {\n  await banner.hide()\n})\n")),Object(o.b)("h2",{id:"events"},"Events"),Object(o.b)("h3",{id:"admobbannerload"},Object(o.b)("inlineCode",{parentName:"h3"},"admob.banner.load")),Object(o.b)("p",null,"An ad is received and is ready for display."),Object(o.b)("h3",{id:"admobbannerloadfail"},Object(o.b)("inlineCode",{parentName:"h3"},"admob.banner.loadFail")),Object(o.b)("p",null,"An ad request has been failed."),Object(o.b)("h3",{id:"admobbannerimpression"},Object(o.b)("inlineCode",{parentName:"h3"},"admob.banner.impression")),Object(o.b)("p",null,"An ad has been disaplayed."))}l.isMDXComponent=!0},151:function(e,n,a){"use strict";a.d(n,"a",(function(){return b})),a.d(n,"b",(function(){return m}));var r=a(0),t=a.n(r);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function d(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=t.a.createContext({}),l=function(e){var n=t.a.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):c(c({},n),e)),a},b=function(e){var n=l(e.components);return t.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},u=t.a.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),b=l(a),u=r,m=b["".concat(i,".").concat(u)]||b[u]||p[u]||o;return a?t.a.createElement(m,c(c({ref:n},s),{},{components:a})):t.a.createElement(m,c({ref:n},s))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return t.a.createElement.apply(null,i)}return t.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);
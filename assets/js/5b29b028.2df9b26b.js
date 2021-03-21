(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(171)),i={title:"Getting Started",slug:"/cordova"},l={unversionedId:"cordova/getting-started",id:"cordova/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Installation",source:"@site/docs/cordova/getting-started.md",slug:"/cordova",permalink:"/docs/cordova",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/docs/cordova/getting-started.md",version:"current",sidebar:"docs",previous:{title:"Interface: AdMobPlusPlugin",permalink:"/docs/capacitor/api/interfaces/admobplusplugin"},next:{title:"Installation",permalink:"/docs/cordova/installation"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Initialize AdMob SDK",id:"initialize-admob-sdk",children:[]},{value:"Create Ad Unit",id:"create-ad-unit",children:[]},{value:"Display Ads",id:"display-ads",children:[]}],d={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"Go to the ",Object(o.b)("a",{parentName:"p",href:"https://www.google.com/admob/"},"AdMob portal")," and add your app (if you haven't done so already)."),Object(o.b)("p",null,"So you have the Application ID to follow the ",Object(o.b)("a",{parentName:"p",href:"./cordova/installation"},"installation guide")," to add the plugin."),Object(o.b)("h2",{id:"initialize-admob-sdk"},"Initialize AdMob SDK"),Object(o.b)("p",null,"The plugin does not initialize AdMob SDK automatically.\nThis allows ",Object(o.b)("a",{parentName:"p",href:"./cordova/consent"},"requesting user consent")," before contacting any AdMob services."),Object(o.b)("p",null,"Therefore, ",Object(o.b)("inlineCode",{parentName:"p"},"admob.start()")," must be called before loading ads."),Object(o.b)("p",null,"Note that ",Object(o.b)("inlineCode",{parentName:"p"},"admob")," is ",Object(o.b)("inlineCode",{parentName:"p"},"undefined")," until ",Object(o.b)("a",{parentName:"p",href:"https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready"},Object(o.b)("inlineCode",{parentName:"a"},"deviceready"))," event is fired."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"document.addEventListener('deviceready', async () => {\n  await admob.start()\n\n  // Load ads here\n}, false)\n")),Object(o.b)("h2",{id:"create-ad-unit"},"Create Ad Unit"),Object(o.b)("p",null,"Go to the ",Object(o.b)("a",{parentName:"p",href:"https://www.google.com/admob/"},"AdMob portal")," and create a new ad unit for your app."),Object(o.b)("p",null,"So you have the Ad Unit ID for later showing the ad."),Object(o.b)("h2",{id:"display-ads"},"Display Ads"),Object(o.b)("p",null,"Following the guide of different supported ad types to display ads,"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./cordova/ads/banner"},"Banner Ad")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./cordova/ads/interstitial"},"Interstitial Ad")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./cordova/ads/rewarded"},"Rewarded Ad")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./cordova/ads/rewarded-interstitial"},"Rewarded Interstitial Ad"))),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ca-app-pub-xxx/yyy")," should be replaced with your Ad Unit ID."))}p.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),p=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,m=s["".concat(i,".").concat(u)]||s[u]||b[u]||o;return n?r.a.createElement(m,l(l({ref:t},d),{},{components:n})):r.a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[3244],{1080:function(e,t,i){"use strict";i.d(t,{Zo:function(){return c},kt:function(){return m}});var n=i(3289);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var d=n.createContext({}),l=function(e){var t=n.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(i),m=a,h=u["".concat(d,".").concat(m)]||u[m]||p[m]||r;return i?n.createElement(h,o(o({ref:t},c),{},{components:i})):n.createElement(h,o({ref:t},c))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=i[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},5043:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var n=i(9334),a=i(8647),r=(i(3289),i(1080)),o=["components"],s={title:"Interstitial Ad",sidebar_label:"Interstitial"},d=void 0,l={unversionedId:"cordova/ads/interstitial",id:"version-1.x/cordova/ads/interstitial",isDocsHomePage:!1,title:"Interstitial Ad",description:"Interstitial ads are full-screen ads that cover the interface of their host app. They're typically displayed at natural transition points in the flow of an app, such as between activities or during the pause between levels in a game. When an app shows an interstitial ad, the user has the choice to either tap on the ad and continue to its destination or close it and return to the app.",source:"@site/versioned_docs/version-1.x/cordova/ads/interstitial.md",sourceDirName:"cordova/ads",slug:"/cordova/ads/interstitial",permalink:"/docs/1.x/cordova/ads/interstitial",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/versioned_docs/version-1.x/cordova/ads/interstitial.md",version:"1.x",frontMatter:{title:"Interstitial Ad",sidebar_label:"Interstitial"},sidebar:"version-1.x/docs",previous:{title:"Banner",permalink:"/docs/1.x/cordova/ads/banner"},next:{title:"Rewarded",permalink:"/docs/1.x/cordova/ads/rewarded"}},c=[{value:"Usage",id:"usage",children:[]},{value:"Events",id:"events",children:[{value:"<code>admob.interstitial.load</code>",id:"admobinterstitialload",children:[]},{value:"<code>admob.interstitial.loadfail</code>",id:"admobinterstitialloadfail",children:[]},{value:"<code>admob.interstitial.show</code>",id:"admobinterstitialshow",children:[]},{value:"<code>admob.interstitial.showfail</code>",id:"admobinterstitialshowfail",children:[]},{value:"<code>admob.interstitial.dismiss</code>",id:"admobinterstitialdismiss",children:[]},{value:"<code>admob.interstitial.impression</code>",id:"admobinterstitialimpression",children:[]}]}],p={toc:c};function u(e){var t=e.components,i=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Interstitial ads are full-screen ads that cover the interface of their host app. They're typically displayed at natural transition points in the flow of an app, such as between activities or during the pause between levels in a game. When an app shows an interstitial ad, the user has the choice to either tap on the ad and continue to its destination or close it and return to the app."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let interstitial\n\ndocument.addEventListener('deviceready', async () => {\n  await admob.start()\n\n  interstitial = new admob.InterstitialAd({\n    adUnitId: 'ca-app-pub-xxx/yyy',\n  })\n\n  await interstitial.load()\n  await interstitial.show()\n}, false)\n\ndocument.addEventListener('admob.interstitial.dismiss', async () => {\n  // Once a interstitial ad is shown, it cannot be shown again.\n  // Starts loading the next interstitial ad as soon as it is dismissed.\n  await interstitial.load()\n})\n")),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("h3",{id:"admobinterstitialload"},(0,r.kt)("inlineCode",{parentName:"h3"},"admob.interstitial.load")),(0,r.kt)("h3",{id:"admobinterstitialloadfail"},(0,r.kt)("inlineCode",{parentName:"h3"},"admob.interstitial.loadfail")),(0,r.kt)("h3",{id:"admobinterstitialshow"},(0,r.kt)("inlineCode",{parentName:"h3"},"admob.interstitial.show")),(0,r.kt)("h3",{id:"admobinterstitialshowfail"},(0,r.kt)("inlineCode",{parentName:"h3"},"admob.interstitial.showfail")),(0,r.kt)("h3",{id:"admobinterstitialdismiss"},(0,r.kt)("inlineCode",{parentName:"h3"},"admob.interstitial.dismiss")),(0,r.kt)("h3",{id:"admobinterstitialimpression"},(0,r.kt)("inlineCode",{parentName:"h3"},"admob.interstitial.impression")))}u.isMDXComponent=!0}}]);
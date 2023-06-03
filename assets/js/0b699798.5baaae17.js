"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[7138],{8570:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return b}});var a=t(79);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),b=r,m=u["".concat(d,".").concat(b)]||u[b]||c[b]||o;return t?a.createElement(m,i(i({ref:n},p),{},{components:t})):a.createElement(m,i({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7976:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=t(2203),r=t(915),o=(t(79),t(8570)),i=["components"],l={title:"Banner Ad",sidebar_label:"Banner"},d=void 0,s={unversionedId:"cordova/ads/banner",id:"version-1.x/cordova/ads/banner",title:"Banner Ad",description:"Banner ads are rectangular image or text ads that occupy a spot within an app's layout. They stay on screen while users are interacting with the app, and can refresh automatically after a certain period of time.",source:"@site/versioned_docs/version-1.x/cordova/ads/banner.md",sourceDirName:"cordova/ads",slug:"/cordova/ads/banner",permalink:"/docs/1.x/cordova/ads/banner",draft:!1,editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/versioned_docs/version-1.x/cordova/ads/banner.md",tags:[],version:"1.x",frontMatter:{title:"Banner Ad",sidebar_label:"Banner"},sidebar:"version-1.x/docs",previous:{title:"App Open",permalink:"/docs/1.x/cordova/ads/app-open"},next:{title:"Interstitial",permalink:"/docs/1.x/cordova/ads/interstitial"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Display Position",id:"display-position",level:2},{value:"Offset",id:"offset",level:2},{value:"Global Settings",id:"global-settings",level:2},{value:"<code>backgroundColor</code>",id:"backgroundcolor",level:3},{value:"Margins",id:"margins",level:3},{value:"Events",id:"events",level:2},{value:"<code>admob.banner.load</code>",id:"admobbannerload",level:3},{value:"<code>admob.banner.loadfail</code>",id:"admobbannerloadfail",level:3},{value:"<code>admob.banner.impression</code>",id:"admobbannerimpression",level:3},{value:"<code>admob.banner.size</code>",id:"admobbannersize",level:3}],u={toc:c};function b(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Banner ads are rectangular image or text ads that occupy a spot within an app's layout. They stay on screen while users are interacting with the app, and can refresh automatically after a certain period of time."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let banner\n\ndocument.addEventListener('deviceready', async () => {\n  await admob.start()\n\n  banner = new admob.BannerAd({\n    adUnitId: 'ca-app-pub-xxx/yyy',\n  })\n\n  await banner.show()\n}, false)\n\ndocument.addEventListener('admob.banner.impression', async () => {\n  await banner.hide()\n})\n")),(0,o.kt)("h2",{id:"display-position"},"Display Position"),(0,o.kt)("p",null,"By default, banner ad is displayed at the ",(0,o.kt)("inlineCode",{parentName:"p"},"bottom")," of screen."),(0,o.kt)("p",null,"It can be changed with ",(0,o.kt)("inlineCode",{parentName:"p"},"position")," option when creating the ad instance,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{3}","{3}":!0},"new admob.BannerAd({\n  adUnitId: 'ca-app-pub-xxx/yyy',\n  position: 'top',  // display banner at the top of screen\n})\n")),(0,o.kt)("h2",{id:"offset"},"Offset"),(0,o.kt)("p",null,"By setting ",(0,o.kt)("inlineCode",{parentName:"p"},"offset")," to a positive integer, the banner will overlay on the webview with the offset number of pixels relative to its ",(0,o.kt)("inlineCode",{parentName:"p"},"position"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{4}","{4}":!0},"new admob.BannerAd({\n  adUnitId: 'ca-app-pub-xxx/yyy',\n  position: 'top',\n  offset: 100,\n})\n")),(0,o.kt)("p",null,"It is possible to set ",(0,o.kt)("inlineCode",{parentName:"p"},"offset")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," for just overlapping the banner on top of the content."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{3}","{3}":!0},"new admob.BannerAd({\n  adUnitId: 'ca-app-pub-xxx/yyy',\n  offset: 0,  // overlap with content\n})\n")),(0,o.kt)("h2",{id:"global-settings"},"Global Settings"),(0,o.kt)("h3",{id:"backgroundcolor"},(0,o.kt)("inlineCode",{parentName:"h3"},"backgroundColor")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"admob.BannerAd.config({ backgroundColor: 'black' })\n")),(0,o.kt)("h3",{id:"margins"},"Margins"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"admob.BannerAd.config({\n  marginTop: 88,\n  marginBottom: 34\n})\n")),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("h3",{id:"admobbannerload"},(0,o.kt)("inlineCode",{parentName:"h3"},"admob.banner.load")),(0,o.kt)("p",null,"An ad is received and is ready for display."),(0,o.kt)("h3",{id:"admobbannerloadfail"},(0,o.kt)("inlineCode",{parentName:"h3"},"admob.banner.loadfail")),(0,o.kt)("p",null,"An ad request has been failed."),(0,o.kt)("h3",{id:"admobbannerimpression"},(0,o.kt)("inlineCode",{parentName:"h3"},"admob.banner.impression")),(0,o.kt)("p",null,"An ad has been displayed."),(0,o.kt)("h3",{id:"admobbannersize"},(0,o.kt)("inlineCode",{parentName:"h3"},"admob.banner.size")),(0,o.kt)("p",null,"Event that return the ad size, this event is also fired when the ad is resized, for example by rotating the device."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"document.addEventListener('admob.banner.size', async (event) => {\n  /* event:\n  {\n    adId: int,\n    size: {\n      width: int,\n      height: int,\n      widthInPixels: int,\n      heightInPixels: int\n    }\n  }*/\n})\n")))}b.isMDXComponent=!0}}]);
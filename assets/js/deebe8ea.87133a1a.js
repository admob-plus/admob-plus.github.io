"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[108],{8570:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var a=n(79);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),h=i,v=c["".concat(s,".").concat(h)]||c[h]||u[h]||r;return n?a.createElement(v,l(l({ref:t},p),{},{components:n})):a.createElement(v,l({ref:t},p))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8752:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(5799),i=(n(79),n(8570));const r={id:"show-interstitial",title:"Showing Interstitial Ad",sidebar_label:"Interstitial Ad"},l=void 0,o={unversionedId:"show-interstitial",id:"version-0.x/show-interstitial",title:"Showing Interstitial Ad",description:"Interstitial ads are full-screen ads that cover the interface of their host app. They're typically displayed at natural transition points in the flow of an app, such as between activities or during the pause between levels in a game. When an app shows an interstitial ad, the user has the choice to either tap on the ad and continue to its destination or close it and return to the app.",source:"@site/versioned_docs/version-0.x/show-interstitial.md",sourceDirName:".",slug:"/show-interstitial",permalink:"/docs/0.x/show-interstitial",draft:!1,editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/versioned_docs/version-0.x/show-interstitial.md",tags:[],version:"0.x",frontMatter:{id:"show-interstitial",title:"Showing Interstitial Ad",sidebar_label:"Interstitial Ad"},sidebar:"version-0.x/docs",previous:{title:"Banner Ad",permalink:"/docs/0.x/show-banner"},next:{title:"Reward Video Ad",permalink:"/docs/0.x/show-reward-video"}},s={},d=[{value:"Usage",id:"usage",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>admob.interstitial.load(config)</code>",id:"admobinterstitialloadconfig",level:3},{value:"<code>admob.interstitial.show()</code>",id:"admobinterstitialshow",level:3},{value:"Events",id:"events",level:2},{value:"Load Event",id:"load-event",level:3},{value:"Load Fail Event",id:"load-fail-event",level:3},{value:"Open Event",id:"open-event",level:3},{value:"Close Event",id:"close-event",level:3},{value:"Exit Application Event",id:"exit-application-event",level:3}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Interstitial ads are full-screen ads that cover the interface of their host app. They're typically displayed at natural transition points in the flow of an app, such as between activities or during the pause between levels in a game. When an app shows an interstitial ad, the user has the choice to either tap on the ad and continue to its destination or close it and return to the app."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"document.addEventListener('deviceready', () => {\n  admob.interstitial.load({\n    id: {\n      // replace with your ad unit IDs\n      android: 'ca-app-pub-xxx/yyy',\n      ios: 'ca-app-pub-xxx/zzz',\n    },\n  }).then(() => admob.interstitial.show())\n}, false)\n")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"admobinterstitialloadconfig"},(0,i.kt)("inlineCode",{parentName:"h3"},"admob.interstitial.load(config)")),(0,i.kt)("p",null,"Load interstitial ad."),(0,i.kt)("p",null,"Returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise")," that resolves when ad request is loaded, rejects when ad request failed."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.x/ad-request-options#reference"},(0,i.kt)("inlineCode",{parentName:"a"},"config")),"."),(0,i.kt)("h3",{id:"admobinterstitialshow"},(0,i.kt)("inlineCode",{parentName:"h3"},"admob.interstitial.show()")),(0,i.kt)("p",null,"Displays loaded interstitial ad."),(0,i.kt)("p",null,"Returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise")," that resolves as soon as interstitial ad is shown, rejects when there is a problem calling native code."),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("h3",{id:"load-event"},"Load Event"),(0,i.kt)("p",null,"Called when interstitial ad is loaded."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"document.addEventListener('admob.interstitial.load', () => {\n  // handle event\n})\n")),(0,i.kt)("h3",{id:"load-fail-event"},"Load Fail Event"),(0,i.kt)("p",null,"Called when interstitial ad request failed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"document.addEventListener('admob.interstitial.load_fail', () => {\n  // handle event\n})\n")),(0,i.kt)("h3",{id:"open-event"},"Open Event"),(0,i.kt)("p",null,"Called when interstitial ad opens a overlay that covers the screen."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"document.addEventListener('admob.interstitial.open', () => {\n  // handle event\n})\n")),(0,i.kt)("h3",{id:"close-event"},"Close Event"),(0,i.kt)("p",null,"Called when interstitial ad is closed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"document.addEventListener('admob.interstitial.close', () => {\n  // handle event\n})\n")),(0,i.kt)("h3",{id:"exit-application-event"},"Exit Application Event"),(0,i.kt)("p",null,"Called when interstitial ad leaves the application (e.g., to go to the browser)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"document.addEventListener('admob.interstitial.exit_app', () => {\n  // handle event\n})\n")))}u.isMDXComponent=!0}}]);
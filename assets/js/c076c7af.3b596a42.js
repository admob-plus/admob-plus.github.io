"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[1778],{8570:(e,a,n)=>{n.d(a,{Zo:()=>l,kt:()=>b});var o=n(79);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,o)}return n}function d(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,o,t=function(e,a){if(null==e)return{};var n,o,t={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var i=o.createContext({}),p=function(e){var a=o.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):d(d({},a),e)),n},l=function(e){var a=p(e.components);return o.createElement(i.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},m=o.forwardRef((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=t,b=c["".concat(i,".").concat(m)]||c[m]||u[m]||r;return n?o.createElement(b,d(d({ref:a},l),{},{components:n})):o.createElement(b,d({ref:a},l))}));function b(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,d=new Array(r);d[0]=m;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[c]="string"==typeof e?e:t,d[1]=s;for(var p=2;p<r;p++)d[p]=n[p];return o.createElement.apply(null,d)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2615:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(5799),t=(n(79),n(8570));const r={title:"App Open Ad",sidebar_label:"App Open"},d=void 0,s={unversionedId:"cordova/ads/app-open",id:"version-1.x/cordova/ads/app-open",title:"App Open Ad",description:"App open ads are a special ad format intended for publishers wishing to monetize their app load screens. App open ads can be closed by your users at any time. App open ads can be shown when users bring your app to the foreground.",source:"@site/versioned_docs/version-1.x/cordova/ads/app-open.md",sourceDirName:"cordova/ads",slug:"/cordova/ads/app-open",permalink:"/docs/1.x/cordova/ads/app-open",draft:!1,editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/versioned_docs/version-1.x/cordova/ads/app-open.md",tags:[],version:"1.x",frontMatter:{title:"App Open Ad",sidebar_label:"App Open"},sidebar:"version-1.x/docs",previous:{title:"Installation",permalink:"/docs/1.x/cordova/installation"},next:{title:"Banner",permalink:"/docs/1.x/cordova/ads/banner"}},i={},p=[{value:"Usage",id:"usage",level:2},{value:"Events",id:"events",level:2},{value:"<code>admob.ad.load</code>",id:"admobadload",level:3},{value:"<code>admob.ad.loadfail</code>",id:"admobadloadfail",level:3},{value:"<code>admob.ad.show</code>",id:"admobadshow",level:3},{value:"<code>admob.ad.showfail</code>",id:"admobadshowfail",level:3},{value:"<code>admob.ad.dismiss</code>",id:"admobaddismiss",level:3},{value:"<code>admob.ad.impression</code>",id:"admobadimpression",level:3},{value:"Best practices",id:"best-practices",level:2},{value:"References",id:"references",level:2}],l={toc:p},c="wrapper";function u(e){let{components:a,...n}=e;return(0,t.kt)(c,(0,o.Z)({},l,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"App open ads are a special ad format intended for publishers wishing to monetize their app load screens. App open ads can be closed by your users at any time. App open ads can be shown when users bring your app to the foreground."),(0,t.kt)("h2",{id:"usage"},"Usage"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"document.addEventListener('deviceready', async () => {\n  await admob.start()\n\n  const ad = new admob.AppOpenAd({\n    adUnitId: 'ca-app-pub-xxx/yyy',\n  })\n\n  document.addEventListener(\n    'resume',\n    async () => {\n      if (!await ad.show()) {\n        await ad.load()\n      })\n    },\n    false,\n  )\n}, false)\n\ndocument.addEventListener('admob.ad.show', async (evt) => {\n  if (evt.ad instanceof admob.AppOpenAd) {\n    // handle event here\n  }\n})\n")),(0,t.kt)("h2",{id:"events"},"Events"),(0,t.kt)("h3",{id:"admobadload"},(0,t.kt)("inlineCode",{parentName:"h3"},"admob.ad.load")),(0,t.kt)("h3",{id:"admobadloadfail"},(0,t.kt)("inlineCode",{parentName:"h3"},"admob.ad.loadfail")),(0,t.kt)("h3",{id:"admobadshow"},(0,t.kt)("inlineCode",{parentName:"h3"},"admob.ad.show")),(0,t.kt)("h3",{id:"admobadshowfail"},(0,t.kt)("inlineCode",{parentName:"h3"},"admob.ad.showfail")),(0,t.kt)("h3",{id:"admobaddismiss"},(0,t.kt)("inlineCode",{parentName:"h3"},"admob.ad.dismiss")),(0,t.kt)("h3",{id:"admobadimpression"},(0,t.kt)("inlineCode",{parentName:"h3"},"admob.ad.impression")),(0,t.kt)("h2",{id:"best-practices"},"Best practices"),(0,t.kt)("p",null,"App open ads help you monetize your app's loading screen, but it's important to keep best practices in mind so that your users enjoy using your app. Make sure to:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Wait to show your first app open ad until after your users have used your app a few times."),(0,t.kt)("li",{parentName:"ul"},"Show app open ads during times when your users would otherwise be waiting for your app to load."),(0,t.kt)("li",{parentName:"ul"},"If you have a loading screen under the app open ad, and your loading screen completes loading before the ad is dismissed, you may want to dismiss your loading screen in the adDidDismissFullScreenContent method.")),(0,t.kt)("h2",{id:"references"},"References"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://developers.google.com/admob/android/app-open-ads"},"App Open Ads - Mobile Ads SDK (Android)")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://developers.google.com/admob/ios/app-open-ads"},"App Open Ads - Mobile Ads SDK (iOS)"))))}u.isMDXComponent=!0}}]);
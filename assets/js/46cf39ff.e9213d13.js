"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[5211],{1080:function(e,n,a){a.d(n,{Zo:function(){return l},kt:function(){return m}});var t=a(3289);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function d(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):d(d({},n),e)),a},l=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,b=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return a?t.createElement(b,d(d({ref:n},l),{},{components:a})):t.createElement(b,d({ref:n},l))}));function m(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=a.length,d=new Array(r);d[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,d[1]=i;for(var p=2;p<r;p++)d[p]=a[p];return t.createElement.apply(null,d)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8540:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return l},toc:function(){return c},default:function(){return m}});var t=a(4002),o=a(9922),r=(a(3289),a(1080)),d=["components"],i={title:"App Open Ad",sidebar_label:"App Open"},s=void 0,p={unversionedId:"cordova/ads/app-open",id:"cordova/ads/app-open",title:"App Open Ad",description:"App open ads are a special ad format intended for publishers wishing to monetize their app load screens. App open ads can be closed by your users at any time. App open ads can be shown when users bring your app to the foreground.",source:"@site/docs/cordova/ads/app-open.md",sourceDirName:"cordova/ads",slug:"/cordova/ads/app-open",permalink:"/docs/cordova/ads/app-open",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/docs/cordova/ads/app-open.md",tags:[],version:"current",frontMatter:{title:"App Open Ad",sidebar_label:"App Open"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/cordova/installation"},next:{title:"Banner",permalink:"/docs/cordova/ads/banner"}},l={},c=[{value:"Usage",id:"usage",children:[],level:2},{value:"Events",id:"events",children:[{value:"<code>admob.ad.load</code>",id:"admobadload",children:[],level:3},{value:"<code>admob.ad.loadfail</code>",id:"admobadloadfail",children:[],level:3},{value:"<code>admob.ad.show</code>",id:"admobadshow",children:[],level:3},{value:"<code>admob.ad.showfail</code>",id:"admobadshowfail",children:[],level:3},{value:"<code>admob.ad.dismiss</code>",id:"admobaddismiss",children:[],level:3},{value:"<code>admob.ad.impression</code>",id:"admobadimpression",children:[],level:3}],level:2},{value:"Best practices",id:"best-practices",children:[],level:2},{value:"References",id:"references",children:[],level:2}],u={toc:c};function m(e){var n=e.components,a=(0,o.Z)(e,d);return(0,r.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"App open ads are a special ad format intended for publishers wishing to monetize their app load screens. App open ads can be closed by your users at any time. App open ads can be shown when users bring your app to the foreground."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"document.addEventListener('deviceready', async () => {\n  const ad = new admob.AppOpenAd({\n    adUnitId: 'ca-app-pub-xxx/yyy',\n  })\n\n  ad.on('load', (evt) => {\n    // evt.ad\n  })\n\n  document.addEventListener(\n    'resume',\n    async () => {\n      // NOTE `resume` event is triggered when dismissing interstitial ads or by other reasons,\n      // make sure to add logic to control when to display the ad.\n      if (!await ad.show()) {\n        await ad.load()\n      })\n    },\n    false,\n  )\n}, false)\n\ndocument.addEventListener('admob.ad.show', async (evt) => {\n  if (evt.ad instanceof admob.AppOpenAd) {\n    // handle event here\n  }\n})\n")),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("h3",{id:"admobadload"},(0,r.kt)("inlineCode",{parentName:"h3"},"admob.ad.load")),(0,r.kt)("h3",{id:"admobadloadfail"},(0,r.kt)("inlineCode",{parentName:"h3"},"admob.ad.loadfail")),(0,r.kt)("h3",{id:"admobadshow"},(0,r.kt)("inlineCode",{parentName:"h3"},"admob.ad.show")),(0,r.kt)("h3",{id:"admobadshowfail"},(0,r.kt)("inlineCode",{parentName:"h3"},"admob.ad.showfail")),(0,r.kt)("h3",{id:"admobaddismiss"},(0,r.kt)("inlineCode",{parentName:"h3"},"admob.ad.dismiss")),(0,r.kt)("h3",{id:"admobadimpression"},(0,r.kt)("inlineCode",{parentName:"h3"},"admob.ad.impression")),(0,r.kt)("h2",{id:"best-practices"},"Best practices"),(0,r.kt)("p",null,"App open ads help you monetize your app's loading screen, but it's important to keep best practices in mind so that your users enjoy using your app. Make sure to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Wait to show your first app open ad until after your users have used your app a few times."),(0,r.kt)("li",{parentName:"ul"},"Show app open ads during times when your users would otherwise be waiting for your app to load."),(0,r.kt)("li",{parentName:"ul"},"If you have a loading screen under the app open ad, and your loading screen completes loading before the ad is dismissed, you may want to dismiss your loading screen in the adDidDismissFullScreenContent method.")),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/admob/android/app-open-ads"},"App Open Ads - Mobile Ads SDK (Android)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/admob/ios/app-open-ads"},"App Open Ads - Mobile Ads SDK (iOS)"))))}m.isMDXComponent=!0}}]);
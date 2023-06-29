"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[5076],{8570:function(e,r,a){a.d(r,{Zo:function(){return c},kt:function(){return p}});var d=a(79);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function n(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);r&&(d=d.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,d)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?n(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,d,t=function(e,r){if(null==e)return{};var a,d,t={},n=Object.keys(e);for(d=0;d<n.length;d++)a=n[d],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(d=0;d<n.length;d++)a=n[d],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=d.createContext({}),l=function(e){var r=d.useContext(s),a=r;return e&&(a="function"==typeof e?e(r):o(o({},r),e)),a},c=function(e){var r=l(e.components);return d.createElement(s.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return d.createElement(d.Fragment,{},r)}},w=d.forwardRef((function(e,r){var a=e.components,t=e.mdxType,n=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(a),w=t,p=u["".concat(s,".").concat(w)]||u[w]||m[w]||n;return a?d.createElement(p,o(o({ref:r},c),{},{components:a})):d.createElement(p,o({ref:r},c))}));function p(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var n=a.length,o=new Array(n);o[0]=w;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:t,o[1]=i;for(var l=2;l<n;l++)o[l]=a[l];return d.createElement.apply(null,o)}return d.createElement.apply(null,a)}w.displayName="MDXCreateElement"},679:function(e,r,a){a.r(r),a.d(r,{assets:function(){return c},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var d=a(2203),t=a(915),n=(a(79),a(8570)),o=["components"],i={title:"Rewarded Ad",sidebar_label:"Rewarded"},s=void 0,l={unversionedId:"cordova/ads/rewarded",id:"version-1.x/cordova/ads/rewarded",title:"Rewarded Ad",description:"Rewarded ads are ads that users have the option of interacting with in exchange for in-app rewards.",source:"@site/versioned_docs/version-1.x/cordova/ads/rewarded.md",sourceDirName:"cordova/ads",slug:"/cordova/ads/rewarded",permalink:"/docs/1.x/cordova/ads/rewarded",draft:!1,editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/versioned_docs/version-1.x/cordova/ads/rewarded.md",tags:[],version:"1.x",frontMatter:{title:"Rewarded Ad",sidebar_label:"Rewarded"},sidebar:"version-1.x/docs",previous:{title:"Interstitial",permalink:"/docs/1.x/cordova/ads/interstitial"},next:{title:"Rewarded Interstitial",permalink:"/docs/1.x/cordova/ads/rewarded-interstitial"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Events",id:"events",level:2},{value:"<code>admob.rewarded.load</code>",id:"admobrewardedload",level:3},{value:"<code>admob.rewarded.loadfail</code>",id:"admobrewardedloadfail",level:3},{value:"<code>admob.rewarded.show</code>",id:"admobrewardedshow",level:3},{value:"<code>admob.rewarded.showfail</code>",id:"admobrewardedshowfail",level:3},{value:"<code>admob.rewarded.reward</code>",id:"admobrewardedreward",level:3},{value:"<code>admob.rewarded.dismiss</code>",id:"admobrewardeddismiss",level:3},{value:"<code>admob.rewarded.impression</code>",id:"admobrewardedimpression",level:3},{value:"Server-side Verification",id:"server-side-verification",level:2}],m={toc:u},w="wrapper";function p(e){var r=e.components,a=(0,t.Z)(e,o);return(0,n.kt)(w,(0,d.Z)({},m,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Rewarded ads are ads that users have the option of interacting with in exchange for in-app rewards."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"let rewarded\n\ndocument.addEventListener('deviceready', async () => {\n  await admob.start()\n\n  rewarded = new admob.RewardedAd({\n    adUnitId: 'ca-app-pub-xxx/yyy',\n  })\n\n  await rewarded.load()\n  await rewarded.show()\n}, false)\n\ndocument.addEventListener('admob.rewarded.dismiss', async () => {\n  // Once a rewarded ad is shown, it cannot be shown again.\n  // Starts loading the next rewarded ad as soon as it is dismissed.\n  await rewarded.load()\n})\n")),(0,n.kt)("h2",{id:"events"},"Events"),(0,n.kt)("h3",{id:"admobrewardedload"},(0,n.kt)("inlineCode",{parentName:"h3"},"admob.rewarded.load")),(0,n.kt)("h3",{id:"admobrewardedloadfail"},(0,n.kt)("inlineCode",{parentName:"h3"},"admob.rewarded.loadfail")),(0,n.kt)("h3",{id:"admobrewardedshow"},(0,n.kt)("inlineCode",{parentName:"h3"},"admob.rewarded.show")),(0,n.kt)("h3",{id:"admobrewardedshowfail"},(0,n.kt)("inlineCode",{parentName:"h3"},"admob.rewarded.showfail")),(0,n.kt)("h3",{id:"admobrewardedreward"},(0,n.kt)("inlineCode",{parentName:"h3"},"admob.rewarded.reward")),(0,n.kt)("p",null,"User has earned reward."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'{\n  reward: {\n    amount: 10,\n    type: "coins"\n  }\n}\n')),(0,n.kt)("h3",{id:"admobrewardeddismiss"},(0,n.kt)("inlineCode",{parentName:"h3"},"admob.rewarded.dismiss")),(0,n.kt)("h3",{id:"admobrewardedimpression"},(0,n.kt)("inlineCode",{parentName:"h3"},"admob.rewarded.impression")),(0,n.kt)("h2",{id:"server-side-verification"},"Server-side Verification"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.x/cordova/rewarded-ads-ssv"},"Rewarded Ads Server-side Verification"))))}p.isMDXComponent=!0}}]);
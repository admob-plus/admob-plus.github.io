(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[7711],{1080:function(e,r,a){"use strict";a.d(r,{Zo:function(){return c},kt:function(){return p}});var d=a(3289);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function i(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);r&&(d=d.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,d)}return a}function n(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?i(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function o(e,r){if(null==e)return{};var a,d,t=function(e,r){if(null==e)return{};var a,d,t={},i=Object.keys(e);for(d=0;d<i.length;d++)a=i[d],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(d=0;d<i.length;d++)a=i[d],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=d.createContext({}),l=function(e){var r=d.useContext(s),a=r;return e&&(a="function"==typeof e?e(r):n(n({},r),e)),a},c=function(e){var r=l(e.components);return d.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return d.createElement(d.Fragment,{},r)}},m=d.forwardRef((function(e,r){var a=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(a),p=t,w=m["".concat(s,".").concat(p)]||m[p]||u[p]||i;return a?d.createElement(w,n(n({ref:r},c),{},{components:a})):d.createElement(w,n({ref:r},c))}));function p(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=a.length,n=new Array(i);n[0]=m;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:t,n[1]=o;for(var l=2;l<i;l++)n[l]=a[l];return d.createElement.apply(null,n)}return d.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8580:function(e,r,a){"use strict";a.r(r),a.d(r,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var d=a(730),t=a(1879),i=(a(3289),a(1080)),n=["components"],o={title:"Rewarded Interstitial Ad",sidebar_label:"Rewarded Interstitial"},s=void 0,l={unversionedId:"cordova/ads/rewarded-interstitial",id:"version-1.x/cordova/ads/rewarded-interstitial",isDocsHomePage:!1,title:"Rewarded Interstitial Ad",description:"Rewarded interstitial is a type of incentivized ad format that allows you offer rewards for ads that appear automatically during natural app transitions. Unlike rewarded ads, users aren't required to opt-in to view a rewarded interstitial.",source:"@site/versioned_docs/version-1.x/cordova/ads/rewarded-interstitial.md",sourceDirName:"cordova/ads",slug:"/cordova/ads/rewarded-interstitial",permalink:"/docs/1.x/cordova/ads/rewarded-interstitial",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/versioned_docs/version-1.x/cordova/ads/rewarded-interstitial.md",version:"1.x",frontMatter:{title:"Rewarded Interstitial Ad",sidebar_label:"Rewarded Interstitial"},sidebar:"version-1.x/docs",previous:{title:"Rewarded",permalink:"/docs/1.x/cordova/ads/rewarded"},next:{title:"Test Ads",permalink:"/docs/1.x/cordova/test-ads"}},c=[{value:"Usage",id:"usage",children:[]},{value:"Events",id:"events",children:[{value:"<code>admob.rewardedi.load</code>",id:"admobrewardediload",children:[]},{value:"<code>admob.rewardedi.loadfail</code>",id:"admobrewardediloadfail",children:[]},{value:"<code>admob.rewardedi.show</code>",id:"admobrewardedishow",children:[]},{value:"<code>admob.rewardedi.showfail</code>",id:"admobrewardedishowfail",children:[]},{value:"<code>admob.rewardedi.reward</code>",id:"admobrewardedireward",children:[]},{value:"<code>admob.rewardedi.dismiss</code>",id:"admobrewardedidismiss",children:[]},{value:"<code>admob.rewardedi.impression</code>",id:"admobrewardediimpression",children:[]}]},{value:"Server-side Verification",id:"server-side-verification",children:[]}],u={toc:c};function m(e){var r=e.components,a=(0,t.Z)(e,n);return(0,i.kt)("wrapper",(0,d.Z)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Rewarded interstitial is a type of incentivized ad format that allows you offer rewards for ads that appear automatically during natural app transitions. Unlike rewarded ads, users aren't required to opt-in to view a rewarded interstitial."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let rewarded\n\ndocument.addEventListener('deviceready', async () => {\n  await admob.start()\n\n  rewarded = new admob.RewardedInterstitialAd({\n    adUnitId: 'ca-app-pub-xxx/yyy',\n  })\n\n  await rewarded.load()\n  await rewarded.show()\n}, false)\n\ndocument.addEventListener('admob.rewardedi.dismiss', async () => {\n  await rewarded.load()\n})\n")),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("h3",{id:"admobrewardediload"},(0,i.kt)("inlineCode",{parentName:"h3"},"admob.rewardedi.load")),(0,i.kt)("h3",{id:"admobrewardediloadfail"},(0,i.kt)("inlineCode",{parentName:"h3"},"admob.rewardedi.loadfail")),(0,i.kt)("h3",{id:"admobrewardedishow"},(0,i.kt)("inlineCode",{parentName:"h3"},"admob.rewardedi.show")),(0,i.kt)("h3",{id:"admobrewardedishowfail"},(0,i.kt)("inlineCode",{parentName:"h3"},"admob.rewardedi.showfail")),(0,i.kt)("h3",{id:"admobrewardedireward"},(0,i.kt)("inlineCode",{parentName:"h3"},"admob.rewardedi.reward")),(0,i.kt)("p",null,"User has earned reward."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  reward: {\n    amount: 1,\n    type: "Reward"\n  }\n}\n')),(0,i.kt)("h3",{id:"admobrewardedidismiss"},(0,i.kt)("inlineCode",{parentName:"h3"},"admob.rewardedi.dismiss")),(0,i.kt)("h3",{id:"admobrewardediimpression"},(0,i.kt)("inlineCode",{parentName:"h3"},"admob.rewardedi.impression")),(0,i.kt)("h2",{id:"server-side-verification"},"Server-side Verification"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.x/cordova/rewarded-ads-ssv"},"Rewarded Ads Server-side Verification"))))}m.isMDXComponent=!0}}]);
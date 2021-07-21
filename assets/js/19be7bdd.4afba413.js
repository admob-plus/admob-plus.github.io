(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[9793],{1080:function(e,r,t){"use strict";t.d(r,{Zo:function(){return c},kt:function(){return w}});var a=t(3289);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),l=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},c=function(e){var r=l(e.components);return a.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=l(t),w=n,m=p["".concat(s,".").concat(w)]||p[w]||u[w]||i;return t?a.createElement(m,d(d({ref:r},c),{},{components:t})):a.createElement(m,d({ref:r},c))}));function w(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,d=new Array(i);d[0]=p;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,d[1]=o;for(var l=2;l<i;l++)d[l]=t[l];return a.createElement.apply(null,d)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6899:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var a=t(9334),n=t(8647),i=(t(3289),t(1080)),d=["components"],o={title:"Rewarded Interstitial Ad",sidebar_label:"Rewarded Interstitial"},s=void 0,l={unversionedId:"react-native/ads/rewarded-interstitial",id:"react-native/ads/rewarded-interstitial",isDocsHomePage:!1,title:"Rewarded Interstitial Ad",description:"Usage",source:"@site/docs/react-native/ads/rewarded-interstitial.md",sourceDirName:"react-native/ads",slug:"/react-native/ads/rewarded-interstitial",permalink:"/docs/react-native/ads/rewarded-interstitial",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/docs/react-native/ads/rewarded-interstitial.md",version:"current",frontMatter:{title:"Rewarded Interstitial Ad",sidebar_label:"Rewarded Interstitial"},sidebar:"docs",previous:{title:"Rewarded",permalink:"/docs/react-native/ads/rewarded"},next:{title:"Exports",permalink:"/docs/react-native/api"}},c=[{value:"Usage",id:"usage",children:[]},{value:"Events",id:"events",children:[{value:"<code>rewardedi.load</code>",id:"rewardediload",children:[]},{value:"<code>rewardedi.loadfail</code>",id:"rewardediloadfail",children:[]},{value:"<code>rewardedi.show</code>",id:"rewardedishow",children:[]},{value:"<code>rewardedi.showfail</code>",id:"rewardedishowfail",children:[]},{value:"<code>rewardedi.reward</code>",id:"rewardedireward",children:[]},{value:"<code>rewardedi.dismiss</code>",id:"rewardedidismiss",children:[]},{value:"<code>rewardedi.impression</code>",id:"rewardediimpression",children:[]}]}],u={toc:c};function p(e){var r=e.components,t=(0,n.Z)(e,d);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import React from 'react'\nimport AdMob, { RewardedInterstitialAd } from '@admob-plus/react-native'\n\nReact.useEffect((asyn () => {\n  await AdMobPlus.start()\n\n  const rewarded = new RewardedInterstitialAd({\n    adUnitId: 'ca-app-pub-3940256099942544/6978759866',\n  })\n  await rewarded.load()\n  await rewarded.show()\n}, [])\n")),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("h3",{id:"rewardediload"},(0,i.kt)("inlineCode",{parentName:"h3"},"rewardedi.load")),(0,i.kt)("h3",{id:"rewardediloadfail"},(0,i.kt)("inlineCode",{parentName:"h3"},"rewardedi.loadfail")),(0,i.kt)("h3",{id:"rewardedishow"},(0,i.kt)("inlineCode",{parentName:"h3"},"rewardedi.show")),(0,i.kt)("h3",{id:"rewardedishowfail"},(0,i.kt)("inlineCode",{parentName:"h3"},"rewardedi.showfail")),(0,i.kt)("h3",{id:"rewardedireward"},(0,i.kt)("inlineCode",{parentName:"h3"},"rewardedi.reward")),(0,i.kt)("p",null,"User has earned reward."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  reward: {\n    amount: 1,\n    type: "Reward"\n  }\n}\n')),(0,i.kt)("h3",{id:"rewardedidismiss"},(0,i.kt)("inlineCode",{parentName:"h3"},"rewardedi.dismiss")),(0,i.kt)("h3",{id:"rewardediimpression"},(0,i.kt)("inlineCode",{parentName:"h3"},"rewardedi.impression")))}p.isMDXComponent=!0}}]);
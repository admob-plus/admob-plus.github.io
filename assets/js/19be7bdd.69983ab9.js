"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[9793],{8570:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var a=t(79);function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function n(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){d(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,d=function(e,r){if(null==e)return{};var t,a,d={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(d[t]=e[t]);return d}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(d[t]=e[t])}return d}var l=a.createContext({}),s=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):n(n({},r),e)),t},c=function(e){var r=s(e.components);return a.createElement(l.Provider,{value:r},e.children)},p="mdxType",w={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,d=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(t),u=d,m=p["".concat(l,".").concat(u)]||p[u]||w[u]||i;return t?a.createElement(m,n(n({ref:r},c),{},{components:t})):a.createElement(m,n({ref:r},c))}));function m(e,r){var t=arguments,d=r&&r.mdxType;if("string"==typeof e||d){var i=t.length,n=new Array(i);n[0]=u;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o[p]="string"==typeof e?e:d,n[1]=o;for(var s=2;s<i;s++)n[s]=t[s];return a.createElement.apply(null,n)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2827:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>n,default:()=>w,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=t(5799),d=(t(79),t(8570));const i={title:"Rewarded Interstitial Ad",sidebar_label:"Rewarded Interstitial"},n=void 0,o={unversionedId:"react-native/ads/rewarded-interstitial",id:"react-native/ads/rewarded-interstitial",title:"Rewarded Interstitial Ad",description:"Usage",source:"@site/docs/react-native/ads/rewarded-interstitial.md",sourceDirName:"react-native/ads",slug:"/react-native/ads/rewarded-interstitial",permalink:"/docs/react-native/ads/rewarded-interstitial",draft:!1,editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/docs/react-native/ads/rewarded-interstitial.md",tags:[],version:"current",frontMatter:{title:"Rewarded Interstitial Ad",sidebar_label:"Rewarded Interstitial"},sidebar:"docs",previous:{title:"Rewarded",permalink:"/docs/react-native/ads/rewarded"},next:{title:"Exports",permalink:"/docs/react-native/api/"}},l={},s=[{value:"Usage",id:"usage",level:2},{value:"Events",id:"events",level:2},{value:"<code>rewardedi.load</code>",id:"rewardediload",level:3},{value:"<code>rewardedi.loadfail</code>",id:"rewardediloadfail",level:3},{value:"<code>rewardedi.show</code>",id:"rewardedishow",level:3},{value:"<code>rewardedi.showfail</code>",id:"rewardedishowfail",level:3},{value:"<code>rewardedi.reward</code>",id:"rewardedireward",level:3},{value:"<code>rewardedi.dismiss</code>",id:"rewardedidismiss",level:3},{value:"<code>rewardedi.impression</code>",id:"rewardediimpression",level:3}],c={toc:s},p="wrapper";function w(e){let{components:r,...t}=e;return(0,d.kt)(p,(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,d.kt)("h2",{id:"usage"},"Usage"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-ts"},"import React from 'react'\nimport AdMob, { RewardedInterstitialAd } from '@admob-plus/react-native'\n\nReact.useEffect((asyn () => {\n  await AdMobPlus.start()\n\n  const rewarded = new RewardedInterstitialAd({\n    adUnitId: 'ca-app-pub-3940256099942544/6978759866',\n  })\n  await rewarded.load()\n  await rewarded.show()\n}, [])\n")),(0,d.kt)("h2",{id:"events"},"Events"),(0,d.kt)("h3",{id:"rewardediload"},(0,d.kt)("inlineCode",{parentName:"h3"},"rewardedi.load")),(0,d.kt)("h3",{id:"rewardediloadfail"},(0,d.kt)("inlineCode",{parentName:"h3"},"rewardedi.loadfail")),(0,d.kt)("h3",{id:"rewardedishow"},(0,d.kt)("inlineCode",{parentName:"h3"},"rewardedi.show")),(0,d.kt)("h3",{id:"rewardedishowfail"},(0,d.kt)("inlineCode",{parentName:"h3"},"rewardedi.showfail")),(0,d.kt)("h3",{id:"rewardedireward"},(0,d.kt)("inlineCode",{parentName:"h3"},"rewardedi.reward")),(0,d.kt)("p",null,"User has earned reward."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-js"},'{\n  reward: {\n    amount: 1,\n    type: "Reward"\n  }\n}\n')),(0,d.kt)("h3",{id:"rewardedidismiss"},(0,d.kt)("inlineCode",{parentName:"h3"},"rewardedi.dismiss")),(0,d.kt)("h3",{id:"rewardediimpression"},(0,d.kt)("inlineCode",{parentName:"h3"},"rewardedi.impression")))}w.isMDXComponent=!0}}]);
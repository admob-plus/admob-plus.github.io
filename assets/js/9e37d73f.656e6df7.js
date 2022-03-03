"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[5919],{1080:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return w}});var a=t(3289);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},d=Object.keys(e);for(a=0;a<d.length;a++)t=d[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)t=d[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),c=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=c(e.components);return a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,d=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(t),w=n,m=p["".concat(l,".").concat(w)]||p[w]||u[w]||d;return t?a.createElement(m,i(i({ref:r},s),{},{components:t})):a.createElement(m,i({ref:r},s))}));function w(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var d=t.length,i=new Array(d);i[0]=p;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<d;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9892:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return s},toc:function(){return u},default:function(){return w}});var a=t(4002),n=t(9922),d=(t(3289),t(1080)),i=["components"],o={title:"Rewarded Ad",sidebar_label:"Rewarded"},l=void 0,c={unversionedId:"react-native/ads/rewarded",id:"react-native/ads/rewarded",title:"Rewarded Ad",description:"Usage",source:"@site/docs/react-native/ads/rewarded.md",sourceDirName:"react-native/ads",slug:"/react-native/ads/rewarded",permalink:"/docs/react-native/ads/rewarded",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/docs/react-native/ads/rewarded.md",tags:[],version:"current",frontMatter:{title:"Rewarded Ad",sidebar_label:"Rewarded"},sidebar:"docs",previous:{title:"Interstitial",permalink:"/docs/react-native/ads/interstitial"},next:{title:"Rewarded Interstitial",permalink:"/docs/react-native/ads/rewarded-interstitial"}},s={},u=[{value:"Usage",id:"usage",children:[],level:2},{value:"Events",id:"events",children:[{value:"<code>rewarded.load</code>",id:"rewardedload",children:[],level:3},{value:"<code>rewarded.loadfail</code>",id:"rewardedloadfail",children:[],level:3},{value:"<code>rewarded.show</code>",id:"rewardedshow",children:[],level:3},{value:"<code>rewarded.showfail</code>",id:"rewardedshowfail",children:[],level:3},{value:"<code>rewarded.reward</code>",id:"rewardedreward",children:[],level:3},{value:"<code>rewarded.dismiss</code>",id:"rewardeddismiss",children:[],level:3},{value:"<code>rewarded.impression</code>",id:"rewardedimpression",children:[],level:3}],level:2}],p={toc:u};function w(e){var r=e.components,t=(0,n.Z)(e,i);return(0,d.kt)("wrapper",(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,d.kt)("h2",{id:"usage"},"Usage"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-ts"},"import React from 'react'\nimport AdMob, { RewardedAd } from '@admob-plus/react-native'\n\nReact.useEffect(async () => {\n  await AdMobPlus.start()\n\n  const rewarded = new RewardedAd({\n    adUnitId: 'ca-app-pub-3940256099942544/5224354917',\n  })\n  await rewarded.load()\n  await rewarded.show()\n}, [])\n")),(0,d.kt)("h2",{id:"events"},"Events"),(0,d.kt)("h3",{id:"rewardedload"},(0,d.kt)("inlineCode",{parentName:"h3"},"rewarded.load")),(0,d.kt)("h3",{id:"rewardedloadfail"},(0,d.kt)("inlineCode",{parentName:"h3"},"rewarded.loadfail")),(0,d.kt)("h3",{id:"rewardedshow"},(0,d.kt)("inlineCode",{parentName:"h3"},"rewarded.show")),(0,d.kt)("h3",{id:"rewardedshowfail"},(0,d.kt)("inlineCode",{parentName:"h3"},"rewarded.showfail")),(0,d.kt)("h3",{id:"rewardedreward"},(0,d.kt)("inlineCode",{parentName:"h3"},"rewarded.reward")),(0,d.kt)("p",null,"User has earned reward."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-js"},'{\n  reward: {\n    amount: 10,\n    type: "coins"\n  }\n}\n')),(0,d.kt)("h3",{id:"rewardeddismiss"},(0,d.kt)("inlineCode",{parentName:"h3"},"rewarded.dismiss")),(0,d.kt)("h3",{id:"rewardedimpression"},(0,d.kt)("inlineCode",{parentName:"h3"},"rewarded.impression")))}w.isMDXComponent=!0}}]);
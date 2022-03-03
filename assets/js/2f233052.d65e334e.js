"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[8524],{1080:function(e,t,i){i.d(t,{Zo:function(){return d},kt:function(){return f}});var n=i(3289);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(i),f=r,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||a;return i?n.createElement(m,l(l({ref:t},d),{},{components:i})):n.createElement(m,l({ref:t},d))}));function f(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,l=new Array(a);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<a;c++)l[c]=i[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},8469:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return d},toc:function(){return u},default:function(){return f}});var n=i(4002),r=i(9922),a=(i(3289),i(1080)),l=["components"],o={title:"Interstitial Ad",sidebar_label:"Interstitial"},s=void 0,c={unversionedId:"react-native/ads/interstitial",id:"react-native/ads/interstitial",title:"Interstitial Ad",description:"Usage",source:"@site/docs/react-native/ads/interstitial.md",sourceDirName:"react-native/ads",slug:"/react-native/ads/interstitial",permalink:"/docs/react-native/ads/interstitial",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/docs/react-native/ads/interstitial.md",tags:[],version:"current",frontMatter:{title:"Interstitial Ad",sidebar_label:"Interstitial"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/react-native"},next:{title:"Rewarded",permalink:"/docs/react-native/ads/rewarded"}},d={},u=[{value:"Usage",id:"usage",children:[],level:2},{value:"Events",id:"events",children:[{value:"<code>interstitial.load</code>",id:"interstitialload",children:[],level:3},{value:"<code>interstitial.loadfail</code>",id:"interstitialloadfail",children:[],level:3},{value:"<code>interstitial.show</code>",id:"interstitialshow",children:[],level:3},{value:"<code>interstitial.showfail</code>",id:"interstitialshowfail",children:[],level:3},{value:"<code>interstitial.dismiss</code>",id:"interstitialdismiss",children:[],level:3},{value:"<code>interstitial.impression</code>",id:"interstitialimpression",children:[],level:3}],level:2}],p={toc:u};function f(e){var t=e.components,i=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import React from 'react'\nimport AdMob, { InterstitialAd } from '@admob-plus/react-native'\n\nReact.useEffect(async () => {\n  await AdMob.start()\n\n  const interstitial = new InterstitialAd({\n    adUnitId: 'ca-app-pub-3940256099942544/1033173712',\n  })\n  await interstitial.load()\n  await interstitial.show()\n}, [])\n")),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("h3",{id:"interstitialload"},(0,a.kt)("inlineCode",{parentName:"h3"},"interstitial.load")),(0,a.kt)("h3",{id:"interstitialloadfail"},(0,a.kt)("inlineCode",{parentName:"h3"},"interstitial.loadfail")),(0,a.kt)("h3",{id:"interstitialshow"},(0,a.kt)("inlineCode",{parentName:"h3"},"interstitial.show")),(0,a.kt)("h3",{id:"interstitialshowfail"},(0,a.kt)("inlineCode",{parentName:"h3"},"interstitial.showfail")),(0,a.kt)("h3",{id:"interstitialdismiss"},(0,a.kt)("inlineCode",{parentName:"h3"},"interstitial.dismiss")),(0,a.kt)("h3",{id:"interstitialimpression"},(0,a.kt)("inlineCode",{parentName:"h3"},"interstitial.impression")))}f.isMDXComponent=!0}}]);
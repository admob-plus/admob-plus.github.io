"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[3417],{8570:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>f});var r=i(79);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},d=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(i),m=a,f=p["".concat(o,".").concat(m)]||p[m]||u[m]||n;return i?r.createElement(f,l(l({ref:t},d),{},{components:i})):r.createElement(f,l({ref:t},d))}));function f(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,l=new Array(n);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<n;c++)l[c]=i[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},119:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=i(5799),a=(i(79),i(8570));const n={title:"Interstitial Ad",sidebar_label:"Interstitial"},l=void 0,s={unversionedId:"capacitor/ads/interstitial",id:"capacitor/ads/interstitial",title:"Interstitial Ad",description:"Usage",source:"@site/docs/capacitor/ads/interstitial.md",sourceDirName:"capacitor/ads",slug:"/capacitor/ads/interstitial",permalink:"/docs/capacitor/ads/interstitial",draft:!1,editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/docs/capacitor/ads/interstitial.md",tags:[],version:"current",frontMatter:{title:"Interstitial Ad",sidebar_label:"Interstitial"},sidebar:"docs",previous:{title:"Banner",permalink:"/docs/capacitor/ads/banner"},next:{title:"Rewarded",permalink:"/docs/capacitor/ads/rewarded"}},o={},c=[{value:"Usage",id:"usage",level:2},{value:"Events",id:"events",level:2},{value:"<code>interstitial.load</code>",id:"interstitialload",level:3},{value:"<code>interstitial.loadfail</code>",id:"interstitialloadfail",level:3},{value:"<code>interstitial.show</code>",id:"interstitialshow",level:3},{value:"<code>interstitial.showfail</code>",id:"interstitialshowfail",level:3},{value:"<code>interstitial.dismiss</code>",id:"interstitialdismiss",level:3},{value:"<code>interstitial.impression</code>",id:"interstitialimpression",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { AdMobPlus, InterstitialAd } from '@admob-plus/capacitor'\n\n(async () => {\n  const interstitial = new InterstitialAd({\n    adUnitId: 'ca-app-pub-3940256099942544/1033173712',\n  })\n  await interstitial.load()\n  await interstitial.show()\n})()\n")),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("h3",{id:"interstitialload"},(0,a.kt)("inlineCode",{parentName:"h3"},"interstitial.load")),(0,a.kt)("h3",{id:"interstitialloadfail"},(0,a.kt)("inlineCode",{parentName:"h3"},"interstitial.loadfail")),(0,a.kt)("h3",{id:"interstitialshow"},(0,a.kt)("inlineCode",{parentName:"h3"},"interstitial.show")),(0,a.kt)("h3",{id:"interstitialshowfail"},(0,a.kt)("inlineCode",{parentName:"h3"},"interstitial.showfail")),(0,a.kt)("h3",{id:"interstitialdismiss"},(0,a.kt)("inlineCode",{parentName:"h3"},"interstitial.dismiss")),(0,a.kt)("h3",{id:"interstitialimpression"},(0,a.kt)("inlineCode",{parentName:"h3"},"interstitial.impression")))}u.isMDXComponent=!0}}]);
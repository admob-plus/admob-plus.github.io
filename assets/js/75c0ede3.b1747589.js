"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[3593],{8570:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>f});var r=i(79);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var o=r.createContext({}),d=function(e){var t=r.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},c=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(i),m=n,f=p["".concat(o,".").concat(m)]||p[m]||u[m]||a;return i?r.createElement(f,s(s({ref:t},c),{},{components:i})):r.createElement(f,s({ref:t},c))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,s=new Array(a);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:n,s[1]=l;for(var d=2;d<a;d++)s[d]=i[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},1822:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=i(5799),n=(i(79),i(8570));const a={title:"Interstitial Ad",sidebar_label:"Interstitial"},s=void 0,l={unversionedId:"capacitor/ads/interstitial",id:"version-1.x/capacitor/ads/interstitial",title:"Interstitial Ad",description:"Usage",source:"@site/versioned_docs/version-1.x/capacitor/ads/interstitial.md",sourceDirName:"capacitor/ads",slug:"/capacitor/ads/interstitial",permalink:"/docs/1.x/capacitor/ads/interstitial",draft:!1,editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/versioned_docs/version-1.x/capacitor/ads/interstitial.md",tags:[],version:"1.x",frontMatter:{title:"Interstitial Ad",sidebar_label:"Interstitial"},sidebar:"version-1.x/docs",previous:{title:"Banner",permalink:"/docs/1.x/capacitor/ads/banner"},next:{title:"Rewarded",permalink:"/docs/1.x/capacitor/ads/rewarded"}},o={},d=[{value:"Usage",id:"usage",level:2},{value:"Events",id:"events",level:2},{value:"<code>interstitial.load</code>",id:"interstitialload",level:3},{value:"<code>interstitial.loadfail</code>",id:"interstitialloadfail",level:3},{value:"<code>interstitial.show</code>",id:"interstitialshow",level:3},{value:"<code>interstitial.showfail</code>",id:"interstitialshowfail",level:3},{value:"<code>interstitial.dismiss</code>",id:"interstitialdismiss",level:3},{value:"<code>interstitial.impression</code>",id:"interstitialimpression",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...i}=e;return(0,n.kt)(p,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { AdMobPlus, InterstitialAd } from '@admob-plus/capacitor'\n\n(async () => {\n  await AdMobPlus.start()\n\n  const interstitial = new InterstitialAd({\n    adUnitId: 'ca-app-pub-3940256099942544/1033173712',\n  })\n  await interstitial.load()\n  await interstitial.show()\n})()\n")),(0,n.kt)("h2",{id:"events"},"Events"),(0,n.kt)("h3",{id:"interstitialload"},(0,n.kt)("inlineCode",{parentName:"h3"},"interstitial.load")),(0,n.kt)("h3",{id:"interstitialloadfail"},(0,n.kt)("inlineCode",{parentName:"h3"},"interstitial.loadfail")),(0,n.kt)("h3",{id:"interstitialshow"},(0,n.kt)("inlineCode",{parentName:"h3"},"interstitial.show")),(0,n.kt)("h3",{id:"interstitialshowfail"},(0,n.kt)("inlineCode",{parentName:"h3"},"interstitial.showfail")),(0,n.kt)("h3",{id:"interstitialdismiss"},(0,n.kt)("inlineCode",{parentName:"h3"},"interstitial.dismiss")),(0,n.kt)("h3",{id:"interstitialimpression"},(0,n.kt)("inlineCode",{parentName:"h3"},"interstitial.impression")))}u.isMDXComponent=!0}}]);
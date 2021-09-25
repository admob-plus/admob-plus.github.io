"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[3593],{1080:function(t,e,i){i.d(e,{Zo:function(){return d},kt:function(){return f}});var n=i(3289);function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function s(t,e){if(null==t)return{};var i,n,r=function(t,e){if(null==t)return{};var i,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)i=a[n],e.indexOf(i)>=0||(r[i]=t[i]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)i=a[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}var l=n.createContext({}),c=function(t){var e=n.useContext(l),i=e;return t&&(i="function"==typeof t?t(e):o(o({},e),t)),i},d=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var i=t.components,r=t.mdxType,a=t.originalType,l=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),u=c(i),f=r,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||a;return i?n.createElement(m,o(o({ref:e},d),{},{components:i})):n.createElement(m,o({ref:e},d))}));function f(t,e){var i=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=i.length,o=new Array(a);o[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var c=2;c<a;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},4848:function(t,e,i){i.r(e),i.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var n=i(1629),r=i(7322),a=(i(3289),i(1080)),o=["components"],s={title:"Interstitial Ad",sidebar_label:"Interstitial"},l=void 0,c={unversionedId:"capacitor/ads/interstitial",id:"version-1.x/capacitor/ads/interstitial",isDocsHomePage:!1,title:"Interstitial Ad",description:"Usage",source:"@site/versioned_docs/version-1.x/capacitor/ads/interstitial.md",sourceDirName:"capacitor/ads",slug:"/capacitor/ads/interstitial",permalink:"/docs/1.x/capacitor/ads/interstitial",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/versioned_docs/version-1.x/capacitor/ads/interstitial.md",tags:[],version:"1.x",frontMatter:{title:"Interstitial Ad",sidebar_label:"Interstitial"},sidebar:"version-1.x/docs",previous:{title:"Banner",permalink:"/docs/1.x/capacitor/ads/banner"},next:{title:"Rewarded",permalink:"/docs/1.x/capacitor/ads/rewarded"}},d=[{value:"Usage",id:"usage",children:[]},{value:"Events",id:"events",children:[{value:"<code>interstitial.load</code>",id:"interstitialload",children:[]},{value:"<code>interstitial.loadfail</code>",id:"interstitialloadfail",children:[]},{value:"<code>interstitial.show</code>",id:"interstitialshow",children:[]},{value:"<code>interstitial.showfail</code>",id:"interstitialshowfail",children:[]},{value:"<code>interstitial.dismiss</code>",id:"interstitialdismiss",children:[]},{value:"<code>interstitial.impression</code>",id:"interstitialimpression",children:[]}]}],p={toc:d};function u(t){var e=t.components,i=(0,r.Z)(t,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { AdMobPlus, InterstitialAd } from '@admob-plus/capacitor'\n\n(async () => {\n  await AdMobPlus.start()\n\n  const interstitial = new InterstitialAd({\n    adUnitId: 'ca-app-pub-3940256099942544/1033173712',\n  })\n  await interstitial.load()\n  await interstitial.show()\n})()\n")),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("h3",{id:"interstitialload"},(0,a.kt)("inlineCode",{parentName:"h3"},"interstitial.load")),(0,a.kt)("h3",{id:"interstitialloadfail"},(0,a.kt)("inlineCode",{parentName:"h3"},"interstitial.loadfail")),(0,a.kt)("h3",{id:"interstitialshow"},(0,a.kt)("inlineCode",{parentName:"h3"},"interstitial.show")),(0,a.kt)("h3",{id:"interstitialshowfail"},(0,a.kt)("inlineCode",{parentName:"h3"},"interstitial.showfail")),(0,a.kt)("h3",{id:"interstitialdismiss"},(0,a.kt)("inlineCode",{parentName:"h3"},"interstitial.dismiss")),(0,a.kt)("h3",{id:"interstitialimpression"},(0,a.kt)("inlineCode",{parentName:"h3"},"interstitial.impression")))}u.isMDXComponent=!0}}]);
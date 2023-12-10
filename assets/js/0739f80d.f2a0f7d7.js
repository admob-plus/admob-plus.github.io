"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[9777],{8570:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var a=t(79);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),c=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return a.createElement(s.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},f=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=c(t),f=n,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||o;return t?a.createElement(m,i(i({ref:r},l),{},{components:t})):a.createElement(m,i({ref:r},l))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=f;var d={};for(var s in r)hasOwnProperty.call(r,s)&&(d[s]=r[s]);d.originalType=e,d[p]="string"==typeof e?e:n,i[1]=d;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1483:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var a=t(5799),n=(t(79),t(8570));const o={title:"Rewarded Ads Server-side Verification"},i=void 0,d={unversionedId:"cordova/rewarded-ads-ssv",id:"cordova/rewarded-ads-ssv",title:"Rewarded Ads Server-side Verification",description:"Rewarded video SSV (server-side verification) callbacks provide an extra layer of protection against spoofing of client-side callbacks to reward users.",source:"@site/docs/cordova/rewarded-ads-ssv.md",sourceDirName:"cordova",slug:"/cordova/rewarded-ads-ssv",permalink:"/docs/cordova/rewarded-ads-ssv",draft:!1,editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/docs/cordova/rewarded-ads-ssv.md",tags:[],version:"current",frontMatter:{title:"Rewarded Ads Server-side Verification"},sidebar:"docs",previous:{title:"Test Ads",permalink:"/docs/cordova/test-ads"},next:{title:"Targeting",permalink:"/docs/cordova/targeting"}},s={},c=[],l={toc:c},p="wrapper";function u(e){let{components:r,...t}=e;return(0,n.kt)(p,(0,a.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Rewarded video SSV (server-side verification) callbacks provide an extra layer of protection against spoofing of client-side callbacks to reward users."),(0,n.kt)("p",null,"For the server-side implementation, please refer to the official guide for ",(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/admob/android/rewarded-video-ssv"},"Android")," and ",(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/admob/ios/rewarded-video-ssv"},"iOS"),"."),(0,n.kt)("p",null,"To set server-side verification options for ",(0,n.kt)("a",{parentName:"p",href:"./ads/rewarded"},(0,n.kt)("inlineCode",{parentName:"a"},"RewardedAd")),","),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"{3-6}","{3-6}":!0},'new admob.RewardedAd({\n  adUnitId: \'ca-app-pub-xxx/yyy\',\n  serverSideVerification: {\n    customData: "SAMPLE_CUSTOM_DATA_STRING",\n    userId: "1234567",\n  }\n})\n')),(0,n.kt)("p",null,"To set server-side verification options for ",(0,n.kt)("a",{parentName:"p",href:"./ads/rewarded-interstitial"},(0,n.kt)("inlineCode",{parentName:"a"},"RewardedInterstitialAd")),","),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"{3-6}","{3-6}":!0},'new admob.RewardedInterstitialAd({\n  adUnitId: \'ca-app-pub-xxx/yyy\',\n  serverSideVerification: {\n    customData: "SAMPLE_CUSTOM_DATA_STRING",\n    userId: "1234567",\n  }\n})\n')))}u.isMDXComponent=!0}}]);
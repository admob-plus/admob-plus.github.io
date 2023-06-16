"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[4078],{8570:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(79);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=n.createContext({}),c=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(d.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),f=a,v=u["".concat(d,".").concat(f)]||u[f]||l[f]||o;return t?n.createElement(v,i(i({ref:r},p),{},{components:t})):n.createElement(v,i({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var d in r)hasOwnProperty.call(r,d)&&(s[d]=r[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6582:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var n=t(2203),a=t(915),o=(t(79),t(8570)),i=["components"],s={title:"Rewarded Ads Server-side Verification"},d=void 0,c={unversionedId:"cordova/rewarded-ads-ssv",id:"version-1.x/cordova/rewarded-ads-ssv",title:"Rewarded Ads Server-side Verification",description:"Rewarded video SSV (server-side verification) callbacks provide an extra layer of protection against spoofing of client-side callbacks to reward users.",source:"@site/versioned_docs/version-1.x/cordova/rewarded-ads-ssv.md",sourceDirName:"cordova",slug:"/cordova/rewarded-ads-ssv",permalink:"/docs/1.x/cordova/rewarded-ads-ssv",draft:!1,editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/versioned_docs/version-1.x/cordova/rewarded-ads-ssv.md",tags:[],version:"1.x",frontMatter:{title:"Rewarded Ads Server-side Verification"},sidebar:"version-1.x/docs",previous:{title:"Test Ads",permalink:"/docs/1.x/cordova/test-ads"},next:{title:"Targeting",permalink:"/docs/1.x/cordova/targeting"}},p={},l=[],u={toc:l};function f(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rewarded video SSV (server-side verification) callbacks provide an extra layer of protection against spoofing of client-side callbacks to reward users."),(0,o.kt)("p",null,"For the server-side implementation, please refer to the official guide for ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/admob/android/rewarded-video-ssv"},"Android")," and ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/admob/ios/rewarded-video-ssv"},"iOS"),"."),(0,o.kt)("p",null,"To set server-side verification options for ",(0,o.kt)("a",{parentName:"p",href:"./ads/rewarded"},(0,o.kt)("inlineCode",{parentName:"a"},"RewardedAd")),","),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{3-6}","{3-6}":!0},'new admob.RewardedAd({\n  adUnitId: \'ca-app-pub-xxx/yyy\',\n  serverSideVerification: {\n    customData: "SAMPLE_CUSTOM_DATA_STRING",\n    userId: "1234567",\n  }\n})\n')),(0,o.kt)("p",null,"To set server-side verification options for ",(0,o.kt)("a",{parentName:"p",href:"./ads/rewarded-interstitial"},(0,o.kt)("inlineCode",{parentName:"a"},"RewardedInterstitialAd")),","),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{3-6}","{3-6}":!0},'new admob.RewardedInterstitialAd({\n  adUnitId: \'ca-app-pub-xxx/yyy\',\n  serverSideVerification: {\n    customData: "SAMPLE_CUSTOM_DATA_STRING",\n    userId: "1234567",\n  }\n})\n')))}f.isMDXComponent=!0}}]);
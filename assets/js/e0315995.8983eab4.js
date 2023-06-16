"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[6723],{8570:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(79);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(a),d=o,h=m["".concat(p,".").concat(d)]||m[d]||c[d]||r;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1297:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var n=a(2203),o=a(915),r=(a(79),a(8570)),i=["components"],l={title:"Release 1.0",author:"Ratson",author_url:"https://github.com/ratson",author_image_url:"https://avatars.githubusercontent.com/u/2682937?v=4",tags:["admob-plus","release","cordova","ionic","capacitor"]},p=void 0,s={permalink:"/blog/2020/03/21/release-1.0",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/blog/blog/2020-03-21-release-1.0.md",source:"@site/blog/2020-03-21-release-1.0.md",title:"Release 1.0",description:"It is a long way to reach the 1.0 release.",date:"2020-03-21T00:00:00.000Z",formattedDate:"March 21, 2020",tags:[{label:"admob-plus",permalink:"/blog/tags/admob-plus"},{label:"release",permalink:"/blog/tags/release"},{label:"cordova",permalink:"/blog/tags/cordova"},{label:"ionic",permalink:"/blog/tags/ionic"},{label:"capacitor",permalink:"/blog/tags/capacitor"}],readingTime:2.17,hasTruncateMarker:!1,authors:[{name:"Ratson",url:"https://github.com/ratson",imageURL:"https://avatars.githubusercontent.com/u/2682937?v=4"}],frontMatter:{title:"Release 1.0",author:"Ratson",author_url:"https://github.com/ratson",author_image_url:"https://avatars.githubusercontent.com/u/2682937?v=4",tags:["admob-plus","release","cordova","ionic","capacitor"]},nextItem:{title:"How cordova-plugin-admobpro works",permalink:"/blog/2018/08/05/how-cordova-plugin-admobpro-works"}},u={authorsImageUrls:[void 0]},c=[{value:"Cordova Plugin",id:"cordova-plugin",level:2},{value:"TypeScript Support",id:"typescript-support",level:3},{value:"Multiple Ad Instances",id:"multiple-ad-instances",level:3},{value:"Rewarded Interstitial Ad",id:"rewarded-interstitial-ad",level:3},{value:"App Tracking Transparency",id:"app-tracking-transparency",level:3},{value:"API Docs",id:"api-docs",level:3},{value:"Ionic Plugin",id:"ionic-plugin",level:2},{value:"Capacitor Plugin",id:"capacitor-plugin",level:2},{value:"GitHub Sponsors",id:"github-sponsors",level:2},{value:"Thank You",id:"thank-you",level:2}],m={toc:c};function d(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"It is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/compare/cordova-admob-plus@0.42.0...admob-plus-cordova@1.0.0"},"a long way")," to reach the 1.0 release."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"480 commits, 730 files changed, 16341 insertions(+), 24085 deletions(-)\n")),(0,r.kt)("p",null,"1.0 is a serious rewrite of its internals and APIs to utilize the ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/admob/ios/migration"},"recently updated")," and ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/admob/android/migration"},"upcoming")," Google AdMob SDK."),(0,r.kt)("p",null,"Apart from the usual Cordova plugin, AdMob Plus is now officially providing plugins for ",(0,r.kt)("a",{parentName:"p",href:"https://ionicframework.com/"},"Ionic")," and ",(0,r.kt)("a",{parentName:"p",href:"https://capacitorjs.com/"},"Capacitor v3"),"."),(0,r.kt)("h2",{id:"cordova-plugin"},"Cordova Plugin"),(0,r.kt)("p",null,"Package of Cordova plugin has been renamed from ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cordova-admob-plus"},(0,r.kt)("inlineCode",{parentName:"a"},"cordova-admob-plus"))," to ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/admob-plus-cordova"},(0,r.kt)("inlineCode",{parentName:"a"},"admob-plus-cordova")),".\nThis keeps ",(0,r.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/native/admob-plus"},"@ionic-native/admob-plus")," working without breaking."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cordova-admob-plus")," is now deprecated in favor of the new plugin, Ionic users should transit to use ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@admob-plus/ionic"},(0,r.kt)("inlineCode",{parentName:"a"},"@admob-plus/ionic"))," for the latest improvements."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://admob-plus.github.io/docs/cordova"},"Documentation")),(0,r.kt)("h3",{id:"typescript-support"},"TypeScript Support"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"admob-plus-cordova")," exports types for TypeScript projects."),(0,r.kt)("p",null,"Use Triple-slash directives to have global ",(0,r.kt)("inlineCode",{parentName:"p"},"admob")," object typed,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'/// <reference types="admob-plus-cordova" />\n')),(0,r.kt)("p",null,"Regular import works too,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { BannerAd } from 'admob-plus-cordova'\n\nlet banner: BannerAd\n")),(0,r.kt)("h3",{id:"multiple-ad-instances"},"Multiple Ad Instances"),(0,r.kt)("p",null,"It is now to manage multiple instances of the same ad format, thanks to the new API design."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const banner1 = admob.BannerAd({...})\nconst banner2 = admob.BannerAd({...})\n")),(0,r.kt)("h3",{id:"rewarded-interstitial-ad"},"Rewarded Interstitial Ad"),(0,r.kt)("p",null,"As part fo utilizing the SDK, new ad format ",(0,r.kt)("a",{parentName:"p",href:"https://admob-plus.github.io/docs/cordova/ads/rewarded-interstitial"},(0,r.kt)("inlineCode",{parentName:"a"},"Rewarded Interstitial Ad"))," is added."),(0,r.kt)("h3",{id:"app-tracking-transparency"},"App Tracking Transparency"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"requestTrackingAuthorization()")," was part of ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cordova-plugin-consent"},(0,r.kt)("inlineCode",{parentName:"a"},"cordova-plugin-consent")),", is now moved to ",(0,r.kt)("inlineCode",{parentName:"p"},"admob-plus-cordova"),","),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"admob.requestTrackingAuthorization()\n")),(0,r.kt)("p",null,"While you could ",(0,r.kt)("a",{parentName:"p",href:"https://admob-plus.github.io/docs/cordova/faq#shoud-i-use-apples-att-prompt"},"consider using it or not"),", this makes ATT integration much easier."),(0,r.kt)("h3",{id:"api-docs"},"API Docs"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://admob-plus.github.io/docs/cordova/api"},"API docs")," are automatically generated from source code to provide up-to-date reference to classes, methods and interfaces."),(0,r.kt)("h2",{id:"ionic-plugin"},"Ionic Plugin"),(0,r.kt)("p",null,"The Ionic community has maintained ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@ionic-native/admob-plus"},(0,r.kt)("inlineCode",{parentName:"a"},"@ionic-native/admob-plus"))," for some time, it is hard to keep changes in sync with wrapping Cordova plugin due to the difference of release cycle."),(0,r.kt)("p",null,"By officially maintaining the Ionic plugin ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@admob-plus/ionic"},(0,r.kt)("inlineCode",{parentName:"a"},"@admob-plus/ionic")),", the API and documentation will always be up-to-date."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://admob-plus.github.io/docs/ionic"},"Documentation")),(0,r.kt)("h2",{id:"capacitor-plugin"},"Capacitor Plugin"),(0,r.kt)("p",null,"Capacitor 3 is around the corner, ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@admob-plus/capacitor"},(0,r.kt)("inlineCode",{parentName:"a"},"@admob-plus/capacitor"))," provides familiar AdMob Plus APIs for those want to try it out."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://admob-plus.github.io/docs/capacitor"},"Documentation")),(0,r.kt)("h2",{id:"github-sponsors"},"GitHub Sponsors"),(0,r.kt)("p",null,"I have setup the ",(0,r.kt)("a",{parentName:"p",href:"https://admob-plus.github.io/funding"},"Funding page")," since the project start to subsidize my open source work."),(0,r.kt)("p",null,"By adding ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sponsors/ratson"},"GitHub Sponsors")," option, I wish there will be more recurring support."),(0,r.kt)("h2",{id:"thank-you"},"Thank You"),(0,r.kt)("p",null,"I would like to take the chance to say thank you to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/graphs/contributors"},"all contributors"),", especially to all sponsors supporting my work financially."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/krunalsk007"},"@krunalsk007")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/shonek007"},"@shonek007")),(0,r.kt)("li",{parentName:"ul"},"Aleh Belko"),(0,r.kt)("li",{parentName:"ul"},"Amir"),(0,r.kt)("li",{parentName:"ul"},"chawalit sittichai"),(0,r.kt)("li",{parentName:"ul"},"Damien"),(0,r.kt)("li",{parentName:"ul"},"EMI SANIMAN"),(0,r.kt)("li",{parentName:"ul"},"gui\xf1otepro"),(0,r.kt)("li",{parentName:"ul"},"Ivan Lopez"),(0,r.kt)("li",{parentName:"ul"},"J. Rafael"),(0,r.kt)("li",{parentName:"ul"},"Jos\xe9 Manuel Alarc\xf3n Lombardo"),(0,r.kt)("li",{parentName:"ul"},"Leon Raymond Calcutt"),(0,r.kt)("li",{parentName:"ul"},"Oliver"),(0,r.kt)("li",{parentName:"ul"},"RyanDev Studio"),(0,r.kt)("li",{parentName:"ul"},"stefan sprenger"),(0,r.kt)("li",{parentName:"ul"},"titroo team Tasos, Kostis, Fotis"),(0,r.kt)("li",{parentName:"ul"},"Vanilla"),(0,r.kt)("li",{parentName:"ul"},"Varun Ramesh"),(0,r.kt)("li",{parentName:"ul"},"Vincent Lepski"),(0,r.kt)("li",{parentName:"ul"},"\uae40\ub3d9\uaddc")),(0,r.kt)("p",null,"(Names are sorted by alphabetical order)"))}d.isMDXComponent=!0}}]);
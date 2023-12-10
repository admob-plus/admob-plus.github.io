"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[5293],{8570:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(79);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,f=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9621:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(5799),r=(n(79),n(8570));const i={title:"Getting Started",slug:"/ionic"},o=void 0,l={unversionedId:"ionic/getting-started",id:"ionic/getting-started",title:"Getting Started",description:"This package is obsoleted.",source:"@site/docs/ionic/getting-started.md",sourceDirName:"ionic",slug:"/ionic",permalink:"/docs/ionic",draft:!1,editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/docs/ionic/getting-started.md",tags:[],version:"current",frontMatter:{title:"Getting Started",slug:"/ionic"},sidebar:"docs",previous:{title:"Upgrade",permalink:"/docs/cordova/upgrade"},next:{title:"Installation",permalink:"/docs/ionic/installation"}},p={},d=[{value:"Installation",id:"installation",level:2},{value:"Initialize AdMob SDK",id:"initialize-admob-sdk",level:2},{value:"Display Ads",id:"display-ads",level:2}],s={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"This package is obsoleted."),(0,r.kt)("p",{parentName:"admonition"},"For Cordova integration, ",(0,r.kt)("a",{parentName:"p",href:"./cordova"},(0,r.kt)("inlineCode",{parentName:"a"},"admob-plus-cordova"))," should be used directly."),(0,r.kt)("p",{parentName:"admonition"},"For Capacitor integration, use ",(0,r.kt)("a",{parentName:"p",href:"./capacitor"},(0,r.kt)("inlineCode",{parentName:"a"},"@admob-plus/capacitor")),".")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@admob-plus/ionic")," is a wrapper of ",(0,r.kt)("a",{parentName:"p",href:"./cordova"},(0,r.kt)("inlineCode",{parentName:"a"},"admob-plus-cordova"))," Cordova plugin providing similar APIs."),(0,r.kt)("p",null,"It is recommended to first understand how the Cordova plugin works before installing this package."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Read the ",(0,r.kt)("a",{parentName:"p",href:"./cordova"},"Getting Started")," guide of ",(0,r.kt)("inlineCode",{parentName:"p"},"admob-plus-cordova")," for how to obtain the Application ID."),(0,r.kt)("p",null,"Follow the ",(0,r.kt)("a",{parentName:"p",href:"./ionic/installation"},"installation guide")," to add the plugin."),(0,r.kt)("h2",{id:"initialize-admob-sdk"},"Initialize AdMob SDK"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/app/app.module.ts" {1,6}',title:'"src/app/app.module.ts"',"{1,6}":!0},"import { AdMob } from '@admob-plus/ionic/ngx';\nimport { NgModule } from '@angular/core';\n\n@NgModule({\n  providers: [\n    AdMob,\n  ],\n})\nexport class AppModule {}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/app/home/home.page.ts" {1,6-8}',title:'"src/app/home/home.page.ts"',"{1,6-8}":!0},"import { AdMob } from '@admob-plus/ionic/ngx';\nimport { Platform } from '@ionic/angular';\n\nexport class HomePage {\n  constructor(private platform: Platform, private admob: AdMob) {\n    this.platform.ready().then(async () => {\n      await this.admob.start();\n    });\n  }\n}\n")),(0,r.kt)("h2",{id:"display-ads"},"Display Ads"),(0,r.kt)("p",null,"Following the guide of different ad types to display ads,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./ionic/ads/banner"},"Banner Ad")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./ionic/ads/interstitial"},"Interstitial Ad")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./ionic/ads/rewarded"},"Rewarded Ad")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./ionic/ads/rewarded-interstitial"},"Rewarded Interstitial Ad"))))}m.isMDXComponent=!0}}]);
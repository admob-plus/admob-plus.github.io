"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[5293],{8570:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(79);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1514:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(2203),a=n(915),i=(n(79),n(8570)),o=["components"],l={title:"Getting Started",slug:"/ionic"},p=void 0,s={unversionedId:"ionic/getting-started",id:"ionic/getting-started",title:"Getting Started",description:"@admob-plus/ionic is a wrapper of admob-plus-cordova Cordova plugin providing similar APIs.",source:"@site/docs/ionic/getting-started.md",sourceDirName:"ionic",slug:"/ionic",permalink:"/docs/ionic",draft:!1,editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/docs/ionic/getting-started.md",tags:[],version:"current",frontMatter:{title:"Getting Started",slug:"/ionic"},sidebar:"docs",previous:{title:"Upgrade",permalink:"/docs/cordova/upgrade"},next:{title:"Installation",permalink:"/docs/ionic/installation"}},d={},c=[{value:"Installation",id:"installation",level:2},{value:"Initialize AdMob SDK",id:"initialize-admob-sdk",level:2},{value:"Display Ads",id:"display-ads",level:2}],u={toc:c},m="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@admob-plus/ionic")," is a wrapper of ",(0,i.kt)("a",{parentName:"p",href:"./cordova"},(0,i.kt)("inlineCode",{parentName:"a"},"admob-plus-cordova"))," Cordova plugin providing similar APIs."),(0,i.kt)("p",null,"It is recommended to first understand how the Cordova plugin works before installing this package."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This plugin is for Ionic Cordova integration,\nuse ",(0,i.kt)("a",{parentName:"p",href:"./capacitor"},(0,i.kt)("inlineCode",{parentName:"a"},"@admob-plus/capacitor"))," if your project is using Capacitor.")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Read the ",(0,i.kt)("a",{parentName:"p",href:"./cordova"},"Getting Started")," guide of ",(0,i.kt)("inlineCode",{parentName:"p"},"admob-plus-cordova")," for how to obtain the Application ID."),(0,i.kt)("p",null,"Follow the ",(0,i.kt)("a",{parentName:"p",href:"./ionic/installation"},"installation guide")," to add the plugin."),(0,i.kt)("h2",{id:"initialize-admob-sdk"},"Initialize AdMob SDK"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/app/app.module.ts" {1,6}',title:'"src/app/app.module.ts"',"{1,6}":!0},"import { AdMob } from '@admob-plus/ionic/ngx';\nimport { NgModule } from '@angular/core';\n\n@NgModule({\n  providers: [\n    AdMob,\n  ],\n})\nexport class AppModule {}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/app/home/home.page.ts" {1,6-8}',title:'"src/app/home/home.page.ts"',"{1,6-8}":!0},"import { AdMob } from '@admob-plus/ionic/ngx';\nimport { Platform } from '@ionic/angular';\n\nexport class HomePage {\n  constructor(private platform: Platform, private admob: AdMob) {\n    this.platform.ready().then(async () => {\n      await this.admob.start();\n    });\n  }\n}\n")),(0,i.kt)("h2",{id:"display-ads"},"Display Ads"),(0,i.kt)("p",null,"Following the guide of different ad types to display ads,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./ionic/ads/banner"},"Banner Ad")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./ionic/ads/interstitial"},"Interstitial Ad")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./ionic/ads/rewarded"},"Rewarded Ad")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./ionic/ads/rewarded-interstitial"},"Rewarded Interstitial Ad"))))}f.isMDXComponent=!0}}]);
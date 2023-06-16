"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[3216],{8570:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(79);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[p]="string"==typeof e?e:a,o[1]=d;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3097:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return p}});var n=r(2203),a=r(915),i=(r(79),r(8570)),o=["components"],d={title:"Rewarded Interstitial Ad",sidebar_label:"Rewarded Interstitial"},s=void 0,l={unversionedId:"ionic/ads/rewarded-interstitial",id:"version-1.x/ionic/ads/rewarded-interstitial",title:"Rewarded Interstitial Ad",description:"Usage",source:"@site/versioned_docs/version-1.x/ionic/ads/rewarded-interstitial.md",sourceDirName:"ionic/ads",slug:"/ionic/ads/rewarded-interstitial",permalink:"/docs/1.x/ionic/ads/rewarded-interstitial",draft:!1,editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/versioned_docs/version-1.x/ionic/ads/rewarded-interstitial.md",tags:[],version:"1.x",frontMatter:{title:"Rewarded Interstitial Ad",sidebar_label:"Rewarded Interstitial"},sidebar:"version-1.x/docs",previous:{title:"Rewarded",permalink:"/docs/1.x/ionic/ads/rewarded"},next:{title:"Exports",permalink:"/docs/1.x/ionic/api"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Related",id:"related",level:2}],u={toc:p},m="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { AdMob } from '@admob-plus/ionic/ngx';\nimport { Component } from '@angular/core';\nimport { Platform } from '@ionic/angular';\n\n@Component({\n  selector: 'app-home',\n  templateUrl: 'home.page.html',\n  styleUrls: ['home.page.scss'],\n})\nexport class HomePage {\n  constructor(private platform: Platform, private admob: AdMob) {\n    this.platform.ready().then(async () => {\n      await this.admob.start();\n\n      const rewarded = new this.admob.RewardedInterstitialAd({\n        adUnitId: 'ca-app-pub-xxx/yyy',\n      })\n\n      await rewarded.load()\n      await rewarded.show()\n    });\n  }\n}\n")),(0,i.kt)("h2",{id:"related"},"Related"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/cordova/ads/rewarded-interstitial"},"Rewarded Interstitial Ad - Cordova"))))}f.isMDXComponent=!0}}]);
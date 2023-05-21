"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[9026],{8570:function(e,n,r){r.d(n,{Zo:function(){return d},kt:function(){return b}});var t=r(79);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),s=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(r),b=a,f=u["".concat(l,".").concat(b)]||u[b]||p[b]||o;return r?t.createElement(f,i(i({ref:n},d),{},{components:r})):t.createElement(f,i({ref:n},d))}));function b(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2068:function(e,n,r){r.r(n),r.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var t=r(2203),a=r(915),o=(r(79),r(8570)),i=["components"],c={title:"Banner Ad",sidebar_label:"Banner"},l=void 0,s={unversionedId:"capacitor/ads/banner",id:"capacitor/ads/banner",title:"Banner Ad",description:"Usage",source:"@site/docs/capacitor/ads/banner.md",sourceDirName:"capacitor/ads",slug:"/capacitor/ads/banner",permalink:"/docs/capacitor/ads/banner",draft:!1,editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/docs/capacitor/ads/banner.md",tags:[],version:"current",frontMatter:{title:"Banner Ad",sidebar_label:"Banner"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/capacitor"},next:{title:"Interstitial",permalink:"/docs/capacitor/ads/interstitial"}},d={},p=[{value:"Usage",id:"usage",level:2},{value:"Events",id:"events",level:2},{value:"<code>banner.load</code>",id:"bannerload",level:3},{value:"<code>banner.loadfail</code>",id:"bannerloadfail",level:3},{value:"<code>banner.impression</code>",id:"bannerimpression",level:3}],u={toc:p};function b(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { AdMobPlus, BannerAd } from '@admob-plus/capacitor'\n\n(async () => {\n  const banner = new BannerAd({\n    adUnitId: 'ca-app-pub-3940256099942544/6300978111',\n  })\n  await banner.show()\n\n  AdMobPlus.addListener('banner.impression', async () => {\n    await banner.hide()\n  })\n})()\n")),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("h3",{id:"bannerload"},(0,o.kt)("inlineCode",{parentName:"h3"},"banner.load")),(0,o.kt)("p",null,"An ad is received and is ready for display."),(0,o.kt)("h3",{id:"bannerloadfail"},(0,o.kt)("inlineCode",{parentName:"h3"},"banner.loadfail")),(0,o.kt)("p",null,"An ad request has been failed."),(0,o.kt)("h3",{id:"bannerimpression"},(0,o.kt)("inlineCode",{parentName:"h3"},"banner.impression")),(0,o.kt)("p",null,"An ad has been displayed."))}b.isMDXComponent=!0}}]);
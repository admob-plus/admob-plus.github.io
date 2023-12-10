"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[4420],{8570:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>m});var t=r(79);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},b=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),b=a,m=p["".concat(s,".").concat(b)]||p[b]||u[b]||o;return r?t.createElement(m,i(i({ref:n},d),{},{components:r})):t.createElement(m,i({ref:n},d))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}b.displayName="MDXCreateElement"},2600:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=r(5799),a=(r(79),r(8570));const o={title:"Banner Ad",sidebar_label:"Banner"},i=void 0,l={unversionedId:"capacitor/ads/banner",id:"version-1.x/capacitor/ads/banner",title:"Banner Ad",description:"Usage",source:"@site/versioned_docs/version-1.x/capacitor/ads/banner.md",sourceDirName:"capacitor/ads",slug:"/capacitor/ads/banner",permalink:"/docs/1.x/capacitor/ads/banner",draft:!1,editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/versioned_docs/version-1.x/capacitor/ads/banner.md",tags:[],version:"1.x",frontMatter:{title:"Banner Ad",sidebar_label:"Banner"},sidebar:"version-1.x/docs",previous:{title:"Installation",permalink:"/docs/1.x/capacitor"},next:{title:"Interstitial",permalink:"/docs/1.x/capacitor/ads/interstitial"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Events",id:"events",level:2},{value:"<code>banner.load</code>",id:"bannerload",level:3},{value:"<code>banner.loadfail</code>",id:"bannerloadfail",level:3},{value:"<code>banner.impression</code>",id:"bannerimpression",level:3}],d={toc:c},p="wrapper";function u(e){let{components:n,...r}=e;return(0,a.kt)(p,(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { AdMobPlus, BannerAd } from '@admob-plus/capacitor'\n\n(async () => {\n  await AdMobPlus.start()\n\n  const banner = new BannerAd({\n    adUnitId: 'ca-app-pub-3940256099942544/6300978111',\n  })\n  await banner.show()\n\n  AdMobPlus.addListener('banner.impression', async () => {\n    await banner.hide()\n  })\n})()\n")),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("h3",{id:"bannerload"},(0,a.kt)("inlineCode",{parentName:"h3"},"banner.load")),(0,a.kt)("p",null,"An ad is received and is ready for display."),(0,a.kt)("h3",{id:"bannerloadfail"},(0,a.kt)("inlineCode",{parentName:"h3"},"banner.loadfail")),(0,a.kt)("p",null,"An ad request has been failed."),(0,a.kt)("h3",{id:"bannerimpression"},(0,a.kt)("inlineCode",{parentName:"h3"},"banner.impression")),(0,a.kt)("p",null,"An ad has been displayed."))}u.isMDXComponent=!0}}]);
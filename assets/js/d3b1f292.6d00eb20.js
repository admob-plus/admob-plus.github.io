"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[2054],{8570:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>g});var n=a(79);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),s=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,d=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=s(a),m=r,g=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(g,l(l({ref:e},p),{},{components:a})):n.createElement(g,l({ref:e},p))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[u]="string"==typeof t?t:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8394:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(5799),r=(a(79),a(8570));const o={title:"Enabling Test Ads",sidebar_label:"Test Ads"},l=void 0,i={unversionedId:"cordova/test-ads",id:"version-1.x/cordova/test-ads",title:"Enabling Test Ads",description:"It is important to use test ads during development so that you can click on them without charging Google advertisers. If you click on too many ads without being in test mode, you risk your account being flagged for invalid activity.",source:"@site/versioned_docs/version-1.x/cordova/test-ads.md",sourceDirName:"cordova",slug:"/cordova/test-ads",permalink:"/docs/1.x/cordova/test-ads",draft:!1,editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/versioned_docs/version-1.x/cordova/test-ads.md",tags:[],version:"1.x",frontMatter:{title:"Enabling Test Ads",sidebar_label:"Test Ads"},sidebar:"version-1.x/docs",previous:{title:"Rewarded Interstitial",permalink:"/docs/1.x/cordova/ads/rewarded-interstitial"},next:{title:"Rewarded Ads Server-side Verification",permalink:"/docs/1.x/cordova/rewarded-ads-ssv"}},d={},s=[{value:"Use the Google provided demo ad units",id:"use-the-google-provided-demo-ad-units",level:2},{value:"Add your test device programmatically",id:"add-your-test-device-programmatically",level:2},{value:"References",id:"references",level:2}],p={toc:s},u="wrapper";function c(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"It is important to use test ads during development so that you can click on them without charging Google advertisers. If you click on too many ads without being in test mode, you risk your account being flagged for invalid activity."),(0,r.kt)("h2",{id:"use-the-google-provided-demo-ad-units"},"Use the Google provided demo ad units"),(0,r.kt)("p",null,"The quickest way to enable testing is to use Google-provided test ad units."),(0,r.kt)("p",null,"These ad units are ",(0,r.kt)("strong",{parentName:"p"},"not")," associated with your AdMob account, so there's no risk of your account generating invalid traffic when using these ad units."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Ad Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Demo Ad Unit ID (Android)"),(0,r.kt)("th",{parentName:"tr",align:null},"Demo Ad Unit ID (iOS)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"App Open"),(0,r.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/3419835294"),(0,r.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/5662855259")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Banner"),(0,r.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/6300978111"),(0,r.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/2934735716")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Interstitial"),(0,r.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/1033173712"),(0,r.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/4411468910")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Interstitial Video"),(0,r.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/8691691433"),(0,r.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/5135589807")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rewarded"),(0,r.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/5224354917"),(0,r.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/1712485313")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rewarded Interstitial"),(0,r.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/5354046379"),(0,r.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/6978759866")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Native Advanced"),(0,r.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/2247696110"),(0,r.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/3986624511")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Native Advanced Video"),(0,r.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/1044960115"),(0,r.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/2521693316")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"*",") Please note that not all formats are (yet) supported by this plug-in and don't forget to use your own ID when in production.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"npx admob-plus test-ids")," will print the above table.")),(0,r.kt)("h2",{id:"add-your-test-device-programmatically"},"Add your test device programmatically"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Load your ads-integrated app and make an ad request."),(0,r.kt)("li",{parentName:"ol"},"Copy your test device ID from console / logcat output to your clipboard."),(0,r.kt)("li",{parentName:"ol"},"Modify your code to call ",(0,r.kt)("inlineCode",{parentName:"li"},"admob.configRequest({testDeviceIds})")," and pass in a list of your test device IDs.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"admob.configRequest({\n  testDeviceIds: ['33BE2250B43518CCDA7DE426D04EE231'],\n})\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Re-run your app. If the ad is a Google ad, you'll see a Test Ad label centered at the top of the ad.")),(0,r.kt)("p",null,"Ads with this Test Ad label are safe to click. Requests, impressions, and clicks on test ads will not show up in your account's reports."),(0,r.kt)("p",null,"Android emulators / iOS simulators are automatically configured as test devices."),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/admob/android/test-ads"},"Enabling test ads - Mobile Ads SDK (Android)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/admob/ios/test-ads"},"Enabling test ads - Mobile Ads SDK (iOS)"))))}c.isMDXComponent=!0}}]);
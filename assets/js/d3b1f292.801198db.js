"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[2054],{8570:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return g}});var n=a(79);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),s=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,d=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=s(a),m=r,g=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(g,i(i({ref:e},p),{},{components:a})):n.createElement(g,i({ref:e},p))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l[u]="string"==typeof t?t:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6683:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var n=a(2203),r=a(915),o=(a(79),a(8570)),i=["components"],l={title:"Enabling Test Ads",sidebar_label:"Test Ads"},d=void 0,s={unversionedId:"cordova/test-ads",id:"version-1.x/cordova/test-ads",title:"Enabling Test Ads",description:"It is important to use test ads during development so that you can click on them without charging Google advertisers. If you click on too many ads without being in test mode, you risk your account being flagged for invalid activity.",source:"@site/versioned_docs/version-1.x/cordova/test-ads.md",sourceDirName:"cordova",slug:"/cordova/test-ads",permalink:"/docs/1.x/cordova/test-ads",draft:!1,editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/versioned_docs/version-1.x/cordova/test-ads.md",tags:[],version:"1.x",frontMatter:{title:"Enabling Test Ads",sidebar_label:"Test Ads"},sidebar:"version-1.x/docs",previous:{title:"Rewarded Interstitial",permalink:"/docs/1.x/cordova/ads/rewarded-interstitial"},next:{title:"Rewarded Ads Server-side Verification",permalink:"/docs/1.x/cordova/rewarded-ads-ssv"}},p={},u=[{value:"Use the Google provided demo ad units",id:"use-the-google-provided-demo-ad-units",level:2},{value:"Add your test device programmatically",id:"add-your-test-device-programmatically",level:2},{value:"References",id:"references",level:2}],c={toc:u},m="wrapper";function g(t){var e=t.components,a=(0,r.Z)(t,i);return(0,o.kt)(m,(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It is important to use test ads during development so that you can click on them without charging Google advertisers. If you click on too many ads without being in test mode, you risk your account being flagged for invalid activity."),(0,o.kt)("h2",{id:"use-the-google-provided-demo-ad-units"},"Use the Google provided demo ad units"),(0,o.kt)("p",null,"The quickest way to enable testing is to use Google-provided test ad units."),(0,o.kt)("p",null,"These ad units are ",(0,o.kt)("strong",{parentName:"p"},"not")," associated with your AdMob account, so there's no risk of your account generating invalid traffic when using these ad units."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Ad Format"),(0,o.kt)("th",{parentName:"tr",align:null},"Demo Ad Unit ID (Android)"),(0,o.kt)("th",{parentName:"tr",align:null},"Demo Ad Unit ID (iOS)"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"App Open"),(0,o.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/3419835294"),(0,o.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/5662855259")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Banner"),(0,o.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/6300978111"),(0,o.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/2934735716")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Interstitial"),(0,o.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/1033173712"),(0,o.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/4411468910")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Interstitial Video"),(0,o.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/8691691433"),(0,o.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/5135589807")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Rewarded"),(0,o.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/5224354917"),(0,o.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/1712485313")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Rewarded Interstitial"),(0,o.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/5354046379"),(0,o.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/6978759866")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Native Advanced"),(0,o.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/2247696110"),(0,o.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/3986624511")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Native Advanced Video"),(0,o.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/1044960115"),(0,o.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/2521693316")))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"*",") Please note that not all formats are (yet) supported by this plug-in and don't forget to use your own ID when in production.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"npx admob-plus test-ids")," will print the above table.")),(0,o.kt)("h2",{id:"add-your-test-device-programmatically"},"Add your test device programmatically"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Load your ads-integrated app and make an ad request."),(0,o.kt)("li",{parentName:"ol"},"Copy your test device ID from console / logcat output to your clipboard."),(0,o.kt)("li",{parentName:"ol"},"Modify your code to call ",(0,o.kt)("inlineCode",{parentName:"li"},"admob.configRequest({testDeviceIds})")," and pass in a list of your test device IDs.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"admob.configRequest({\n  testDeviceIds: ['33BE2250B43518CCDA7DE426D04EE231'],\n})\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Re-run your app. If the ad is a Google ad, you'll see a Test Ad label centered at the top of the ad.")),(0,o.kt)("p",null,"Ads with this Test Ad label are safe to click. Requests, impressions, and clicks on test ads will not show up in your account's reports."),(0,o.kt)("p",null,"Android emulators / iOS simulators are automatically configured as test devices."),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/admob/android/test-ads"},"Enabling test ads - Mobile Ads SDK (Android)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/admob/ios/test-ads"},"Enabling test ads - Mobile Ads SDK (iOS)"))))}g.isMDXComponent=!0}}]);
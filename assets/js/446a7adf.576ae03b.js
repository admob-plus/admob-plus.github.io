(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[8057],{1080:function(t,e,a){"use strict";a.d(e,{Zo:function(){return p},kt:function(){return m}});var n=a(3289);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),s=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,d=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),c=s(a),m=r,g=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(g,i(i({ref:e},p),{},{components:a})):n.createElement(g,i({ref:e},p))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6345:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var n=a(9334),r=a(8647),o=(a(3289),a(1080)),i=["components"],l={title:"Enabling Test Ads",sidebar_label:"Test Ads"},d=void 0,s={unversionedId:"cordova/test-ads",id:"cordova/test-ads",isDocsHomePage:!1,title:"Enabling Test Ads",description:"It is important to use test ads during development so that you can click on them without charging Google advertisers. If you click on too many ads without being in test mode, you risk your account being flagged for invalid activity.",source:"@site/docs/cordova/test-ads.md",sourceDirName:"cordova",slug:"/cordova/test-ads",permalink:"/docs/cordova/test-ads",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/docs/cordova/test-ads.md",version:"current",frontMatter:{title:"Enabling Test Ads",sidebar_label:"Test Ads"},sidebar:"docs",previous:{title:"Rewarded Interstitial",permalink:"/docs/cordova/ads/rewarded-interstitial"},next:{title:"Rewarded Ads Server-side Verification",permalink:"/docs/cordova/rewarded-ads-ssv"}},p=[{value:"Use the Google provided demo ad units",id:"use-the-google-provided-demo-ad-units",children:[]},{value:"Add your test device programmatically",id:"add-your-test-device-programmatically",children:[]},{value:"References",id:"references",children:[]}],u={toc:p};function c(t){var e=t.components,a=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It is important to use test ads during development so that you can click on them without charging Google advertisers. If you click on too many ads without being in test mode, you risk your account being flagged for invalid activity."),(0,o.kt)("h2",{id:"use-the-google-provided-demo-ad-units"},"Use the Google provided demo ad units"),(0,o.kt)("p",null,"The quickest way to enable testing is to use Google-provided test ad units."),(0,o.kt)("p",null,"These ad units are ",(0,o.kt)("strong",{parentName:"p"},"not")," associated with your AdMob account, so there's no risk of your account generating invalid traffic when using these ad units."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Ad Format"),(0,o.kt)("th",{parentName:"tr",align:null},"Demo Ad Unit ID (Android)"),(0,o.kt)("th",{parentName:"tr",align:null},"Demo Ad Unit ID (iOS)"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"App Open"),(0,o.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/3419835294"),(0,o.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/5662855259")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Banner"),(0,o.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/6300978111"),(0,o.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/2934735716")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Interstitial"),(0,o.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/1033173712"),(0,o.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/4411468910")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Interstitial Video"),(0,o.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/8691691433"),(0,o.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/5135589807")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Rewarded"),(0,o.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/5224354917"),(0,o.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/1712485313")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Rewarded Interstitial"),(0,o.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/5354046379"),(0,o.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/6978759866")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Native Advanced"),(0,o.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/2247696110"),(0,o.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/3986624511")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Native Advanced Video"),(0,o.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/1044960115"),(0,o.kt)("td",{parentName:"tr",align:null},"ca-app-pub-3940256099942544/2521693316")))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"*",") Please note that not all formats are (yet) supported by this plug-in and don't forget to use your own ID when in production.")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"npx admob-plus test-ids")," will print the above table."))),(0,o.kt)("h2",{id:"add-your-test-device-programmatically"},"Add your test device programmatically"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Load your ads-integrated app and make an ad request."),(0,o.kt)("li",{parentName:"ol"},"Copy your test device ID from console / logcat output to your clipboard."),(0,o.kt)("li",{parentName:"ol"},"Modify your code to call ",(0,o.kt)("inlineCode",{parentName:"li"},"admob.configure({testDeviceIds})")," and pass in a list of your test device IDs.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"admob.configure({\n  testDeviceIds: ['33BE2250B43518CCDA7DE426D04EE231'],\n})\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Re-run your app. If the ad is a Google ad, you'll see a Test Ad label centered at the top of the ad.")),(0,o.kt)("p",null,"Ads with this Test Ad label are safe to click. Requests, impressions, and clicks on test ads will not show up in your account's reports."),(0,o.kt)("p",null,"Android emulators / iOS simulators are automatically configured as test devices."),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://support.google.com/admob/answer/9388275"},"How to test your ads")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/admob/android/test-ads"},"Enabling test ads - Mobile Ads SDK (Android)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/admob/ios/test-ads"},"Enabling test ads - Mobile Ads SDK (iOS)"))))}c.isMDXComponent=!0}}]);
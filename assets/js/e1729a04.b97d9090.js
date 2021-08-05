"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[4530],{1080:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(3289);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1403:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(2),a=n(189),o=(n(3289),n(1080)),i=["components"],s={title:"Request User Consent",sidebar_label:"Request Consent",slug:"/cordova/consent"},c=void 0,l={unversionedId:"cordova/consent/request",id:"cordova/consent/request",isDocsHomePage:!1,title:"Request User Consent",description:"Installation",source:"@site/docs/cordova/consent/request.md",sourceDirName:"cordova/consent",slug:"/cordova/consent",permalink:"/docs/cordova/consent",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/docs/cordova/consent/request.md",version:"current",frontMatter:{title:"Request User Consent",sidebar_label:"Request Consent",slug:"/cordova/consent"},sidebar:"docs",previous:{title:"Volume Control",permalink:"/docs/cordova/volume-control"},next:{title:"Exports",permalink:"/docs/cordova/consent/api"}},u=[{value:"Installation",id:"installation",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Forward consent",id:"forward-consent",children:[]},{value:"References",id:"references",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cordova plugin add cordova-plugin-consent\n")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"You must have a ",(0,o.kt)("a",{parentName:"p",href:"https://support.google.com/fundingchoices/answer/9180084"},"Funding Choices")," account linked to your AdMob account."),(0,o.kt)("p",null,"To create a Funding Choices account, go to ",(0,o.kt)("strong",{parentName:"p"},"Privacy & messaging")," in the AdMob UI and select ",(0,o.kt)("strong",{parentName:"p"},"Go to Funding Choices"),". The Funding Choices account is then created automatically in the background."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"document.addEventListener('deviceready', async () => {\n  if (cordova.platformId === 'ios') {\n    const status = await consent.trackingAuthorizationStatus()\n    /*\n      trackingAuthorizationStatus:\n      0 = notDetermined\n      1 = restricted\n      2 = denied\n      3 = authorized\n    */\n    const statusNew = await consent.requestTrackingAuthorization()\n  }\n\n  const consentStatus = await consent.getConsentStatus()\n  if (consentStatus === consent.ConsentStatus.Required) {\n    await consent.requestInfoUpdate()\n  }\n\n  const formStatus = await consent.getFormStatus()\n  if (formStatus === consent.FormStatus.Available) {\n      const form = await consent.loadForm()\n      form.show()\n  }\n}, false)\n")),(0,o.kt)("h2",{id:"forward-consent"},"Forward consent"),(0,o.kt)("p",null,"If a user has consented to receive only non-personalized ads, pass ",(0,o.kt)("inlineCode",{parentName:"p"},'npa="1"')," when creating the ad, e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{3}","{3}":!0},"new admob.BannerAd({\n  adUnitId: 'ca-app-pub-xxx/yyy',\n  npa: '1',\n})\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"npa")," parameter is applicable to all ad formats, e.g. ",(0,o.kt)("a",{parentName:"p",href:"./api/classes/bannerad"},(0,o.kt)("inlineCode",{parentName:"a"},"BannerAd")),", ",(0,o.kt)("a",{parentName:"p",href:"./api/classes/interstitialad"},(0,o.kt)("inlineCode",{parentName:"a"},"InterstitialAd")),", ",(0,o.kt)("a",{parentName:"p",href:"./api/classes/rewardedad"},(0,o.kt)("inlineCode",{parentName:"a"},"RewardedAd")),", ",(0,o.kt)("a",{parentName:"p",href:"./api/classes/rewardedinterstitialad"},(0,o.kt)("inlineCode",{parentName:"a"},"RewardedInterstitialAd")),"."),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/cordova/consent/api/enums/TrackingAuthorizationStatus"},"TrackingAuthorizationStatus")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/admob/ump/android/quick-start"},"UMP SDK for Android")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/admob/ump/ios/quick-start"},"UMP SDK for iOS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/apptrackingtransparency"},"AppTrackingTransparency Framework"))))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[457],{8570:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(79);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4662:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(2203),a=n(915),o=(n(79),n(8570)),s=["components"],i={title:"Request User Consent",sidebar_label:"Request Consent",slug:"/cordova/consent"},c=void 0,l={unversionedId:"cordova/consent/request",id:"version-1.x/cordova/consent/request",title:"Request User Consent",description:"Installation",source:"@site/versioned_docs/version-1.x/cordova/consent/request.md",sourceDirName:"cordova/consent",slug:"/cordova/consent",permalink:"/docs/1.x/cordova/consent",draft:!1,editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/versioned_docs/version-1.x/cordova/consent/request.md",tags:[],version:"1.x",frontMatter:{title:"Request User Consent",sidebar_label:"Request Consent",slug:"/cordova/consent"},sidebar:"version-1.x/docs",previous:{title:"Volume Control",permalink:"/docs/1.x/cordova/volume-control"},next:{title:"Exports",permalink:"/docs/1.x/cordova/consent/api"}},u={},p=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Forward consent",id:"forward-consent",level:2},{value:"References",id:"references",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cordova plugin add cordova-plugin-consent\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"document.addEventListener('deviceready', async () => {\n  if (cordova.platformId === 'ios') {\n    const trackingAuthorizationStatus = await admob.requestTrackingAuthorization()\n    /*\n      trackingAuthorizationStatus:\n      0 = notDetermined\n      1 = restricted\n      2 = denied\n      3 = authorized\n    */\n  }\n\n  const consentStatus = await consent.getConsentStatus()\n  if (consentStatus === consent.ConsentStatus.Required) {\n    await consent.requestInfoUpdate()\n  }\n\n  const formStatus = await consent.getFormStatus()\n  if (formStatus === consent.FormStatus.Available) {\n      const form = await consent.loadForm()\n      form.show()\n  }\n}, false)\n")),(0,o.kt)("h2",{id:"forward-consent"},"Forward consent"),(0,o.kt)("p",null,"If a user has consented to receive only non-personalized ads, pass ",(0,o.kt)("inlineCode",{parentName:"p"},'npa="1"')," when creating the ad, e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{3}","{3}":!0},"new admob.BannerAd({\n  adUnitId: 'ca-app-pub-xxx/yyy',\n  npa: '1',\n})\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"npa")," parameter is applicable to ",(0,o.kt)("a",{parentName:"p",href:"./api/classes/bannerad"},(0,o.kt)("inlineCode",{parentName:"a"},"BannerAd")),", ",(0,o.kt)("a",{parentName:"p",href:"./api/classes/interstitialad"},(0,o.kt)("inlineCode",{parentName:"a"},"InterstitialAd")),", ",(0,o.kt)("a",{parentName:"p",href:"./api/classes/rewardedad"},(0,o.kt)("inlineCode",{parentName:"a"},"RewardedAd")),", ",(0,o.kt)("a",{parentName:"p",href:"./api/classes/rewardedinterstitialad"},(0,o.kt)("inlineCode",{parentName:"a"},"RewardedInterstitialAd")),"."),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.x/cordova/api/enums/trackingauthorizationstatus"},"TrackingAuthorizationStatus")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/admob/ump/android/quick-start"},"UMP SDK for Android")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/admob/ump/ios/quick-start"},"UMP SDK for iOS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/apptrackingtransparency"},"AppTrackingTransparency Framework"))))}m.isMDXComponent=!0}}]);
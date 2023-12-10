"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[6503],{8570:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>h});var r=o(79);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(o),m=n,h=u["".concat(i,".").concat(m)]||u[m]||c[m]||s;return o?r.createElement(h,a(a({ref:t},d),{},{components:o})):r.createElement(h,a({ref:t},d))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,a=new Array(s);a[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:n,a[1]=l;for(var p=2;p<s;p++)a[p]=o[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},7769:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=o(5799),n=(o(79),o(8570));const s={title:"Troubleshooting",sidebar_label:"Troubleshooting"},a=void 0,l={unversionedId:"troubleshooting",id:"version-1.x/troubleshooting",title:"Troubleshooting",description:"First Step",source:"@site/versioned_docs/version-1.x/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/1.x/troubleshooting",draft:!1,editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/versioned_docs/version-1.x/troubleshooting.md",tags:[],version:"1.x",frontMatter:{title:"Troubleshooting",sidebar_label:"Troubleshooting"},sidebar:"version-1.x/docs",previous:{title:"AdMobPlusPlugin",permalink:"/docs/1.x/react-native/api/interfaces/admobplusplugin"}},i={},p=[{value:"First Step",id:"first-step",level:2},{value:"FAQ",id:"faq",level:2},{value:"Why are ads not showing?",id:"why-are-ads-not-showing",level:3},{value:"Why Google report shows less impressions than the number of Ad request calls?",id:"why-google-report-shows-less-impressions-than-the-number-of-ad-request-calls",level:3},{value:"How to handle &quot;Add or update app-ads.txt&quot; in AdMob console?",id:"how-to-handle-add-or-update-app-adstxt-in-admob-console",level:3},{value:"Why my app is removed from Google Play?",id:"why-my-app-is-removed-from-google-play",level:3}],d={toc:p},u="wrapper";function c(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"first-step"},"First Step"),(0,n.kt)("p",null,"Run the following command in your project root directory,"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh-session"},"npx admob-plus doctor\n")),(0,n.kt)("p",null,"This will scan for common errors and provide suggestions how to fix them."),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("h3",{id:"why-are-ads-not-showing"},"Why are ads not showing?"),(0,n.kt)("p",null,"Beside programming error, a common report is ",(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/android/reference/com/google/android/gms/ads/AdRequest#ERROR_CODE_NO_FILL"},"no fill error")," (",(0,n.kt)("a",{parentName:"p",href:"https://support.google.com/admob/thread/3494603"},"explanation post"),"),\nwhich many users think it is the problem of the library."),(0,n.kt)("p",null,"It is common that for the first time requesting newly created ad unit, there is a delay to have available ads start serving."),(0,n.kt)("p",null,"Also, some country or targeted deivce could have less ads to serve due to publisher / user settings."),(0,n.kt)("p",null,"Check ",(0,n.kt)("a",{parentName:"p",href:"https://support.google.com/admob/answer/9469204"},"common reasons for ads not showing"),"."),(0,n.kt)("h3",{id:"why-google-report-shows-less-impressions-than-the-number-of-ad-request-calls"},"Why Google report shows less impressions than the number of Ad request calls?"),(0,n.kt)("p",null,"First of all, make sure your Ad request and display code are correct."),(0,n.kt)("p",null,"The Ad server may not have ads to serve for every request, which returns ",(0,n.kt)("inlineCode",{parentName:"p"},"NO_FILL")," response."),(0,n.kt)("p",null,"It is receommended to track the impressions via event API instead of just the API calls, as it is not necessary result in showing Ads."),(0,n.kt)("h3",{id:"how-to-handle-add-or-update-app-adstxt-in-admob-console"},'How to handle "Add or update app-ads.txt" in AdMob console?'),(0,n.kt)("p",null,"It does not relate to the plugin, see ",(0,n.kt)("a",{parentName:"p",href:"https://support.google.com/admob/answer/9363762?hl=en"},'"Set up an app-ads.txt file for your app"'),"."),(0,n.kt)("h3",{id:"why-my-app-is-removed-from-google-play"},"Why my app is removed from Google Play?"),(0,n.kt)("p",null,"It is likely you have violated some of the policies, one is common that you are not using ",(0,n.kt)("a",{parentName:"p",href:"./cordova/test-ads"},"Test Ads")," during development, see ",(0,n.kt)("a",{parentName:"p",href:"https://support.google.com/admob/answer/3342054?hl=en"},"AdMob & AdSense program policies - Invalid traffic"),"."),(0,n.kt)("p",null,"Another reason could be displaying ads in a way that is not appropriated, see ",(0,n.kt)("a",{parentName:"p",href:"https://support.google.com/admob/answer/6201362?hl=en"},"Disallowed interstitial implementations"),"."))}c.isMDXComponent=!0}}]);
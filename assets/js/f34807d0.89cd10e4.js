"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[6503],{1080:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return h}});var r=o(3289);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(o),h=n,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||s;return o?r.createElement(m,a(a({ref:t},u),{},{components:o})):r.createElement(m,a({ref:t},u))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,a=new Array(s);a[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var p=2;p<s;p++)a[p]=o[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},668:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return u},toc:function(){return d},default:function(){return h}});var r=o(4002),n=o(9922),s=(o(3289),o(1080)),a=["components"],i={title:"Troubleshooting",sidebar_label:"Troubleshooting"},l=void 0,p={unversionedId:"troubleshooting",id:"version-1.x/troubleshooting",title:"Troubleshooting",description:"First Step",source:"@site/versioned_docs/version-1.x/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/1.x/troubleshooting",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/versioned_docs/version-1.x/troubleshooting.md",tags:[],version:"1.x",frontMatter:{title:"Troubleshooting",sidebar_label:"Troubleshooting"},sidebar:"version-1.x/docs",previous:{title:"AdMobPlusPlugin",permalink:"/docs/1.x/react-native/api/interfaces/admobplusplugin"}},u={},d=[{value:"First Step",id:"first-step",children:[],level:2},{value:"FAQ",id:"faq",children:[{value:"Why are ads not showing?",id:"why-are-ads-not-showing",children:[],level:3},{value:"Why Google report shows less impressions than the number of Ad request calls?",id:"why-google-report-shows-less-impressions-than-the-number-of-ad-request-calls",children:[],level:3},{value:"How to handle &quot;Add or update app-ads.txt&quot; in AdMob console?",id:"how-to-handle-add-or-update-app-adstxt-in-admob-console",children:[],level:3},{value:"Why my app is removed from Google Play?",id:"why-my-app-is-removed-from-google-play",children:[],level:3}],level:2}],c={toc:d};function h(e){var t=e.components,o=(0,n.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"first-step"},"First Step"),(0,s.kt)("p",null,"Run the following command in your project root directory,"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh-session"},"npx admob-plus doctor\n")),(0,s.kt)("p",null,"This will scan for common errors and provide suggestions how to fix them."),(0,s.kt)("h2",{id:"faq"},"FAQ"),(0,s.kt)("h3",{id:"why-are-ads-not-showing"},"Why are ads not showing?"),(0,s.kt)("p",null,"Beside programming error, a common report is ",(0,s.kt)("a",{parentName:"p",href:"https://developers.google.com/android/reference/com/google/android/gms/ads/AdRequest#ERROR_CODE_NO_FILL"},"no fill error")," (",(0,s.kt)("a",{parentName:"p",href:"https://support.google.com/admob/thread/3494603"},"explanation post"),"),\nwhich many users think it is the problem of the library."),(0,s.kt)("p",null,"It is common that for the first time requesting newly created ad unit, there is a delay to have available ads start serving."),(0,s.kt)("p",null,"Also, some country or targeted deivce could have less ads to serve due to publisher / user settings."),(0,s.kt)("p",null,"Check ",(0,s.kt)("a",{parentName:"p",href:"https://support.google.com/admob/answer/9469204"},"common reasons for ads not showing"),"."),(0,s.kt)("h3",{id:"why-google-report-shows-less-impressions-than-the-number-of-ad-request-calls"},"Why Google report shows less impressions than the number of Ad request calls?"),(0,s.kt)("p",null,"First of all, make sure your Ad request and display code are correct."),(0,s.kt)("p",null,"The Ad server may not have ads to serve for every request, which returns ",(0,s.kt)("inlineCode",{parentName:"p"},"NO_FILL")," response."),(0,s.kt)("p",null,"It is receommended to track the impressions via event API instead of just the API calls, as it is not necessary result in showing Ads."),(0,s.kt)("h3",{id:"how-to-handle-add-or-update-app-adstxt-in-admob-console"},'How to handle "Add or update app-ads.txt" in AdMob console?'),(0,s.kt)("p",null,"It does not relate to the plugin, see ",(0,s.kt)("a",{parentName:"p",href:"https://support.google.com/admob/answer/9363762?hl=en"},'"Set up an app-ads.txt file for your app"'),"."),(0,s.kt)("h3",{id:"why-my-app-is-removed-from-google-play"},"Why my app is removed from Google Play?"),(0,s.kt)("p",null,"It is likely you have violated some of the policies, one is common that you are not using ",(0,s.kt)("a",{parentName:"p",href:"./cordova/test-ads"},"Test Ads")," during development, see ",(0,s.kt)("a",{parentName:"p",href:"https://support.google.com/admob/answer/3342054?hl=en"},"AdMob & AdSense program policies - Invalid traffic"),"."),(0,s.kt)("p",null,"Another reason could be displaying ads in a way that is not appropriated, see ",(0,s.kt)("a",{parentName:"p",href:"https://support.google.com/admob/answer/6201362?hl=en"},"Disallowed interstitial implementations"),"."))}h.isMDXComponent=!0}}]);
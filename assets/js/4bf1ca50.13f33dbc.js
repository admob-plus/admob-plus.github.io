(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{106:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return l})),o.d(t,"default",(function(){return c}));var n=o(3),r=o(7),a=(o(0),o(171)),i={title:"Frequently Asked Questions",sidebar_label:"FAQ"},s={unversionedId:"cordova/faq",id:"cordova/faq",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"General",source:"@site/docs/cordova/faq.md",slug:"/cordova/faq",permalink:"/docs/cordova/faq",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/docs/cordova/faq.md",version:"current",sidebar_label:"FAQ",sidebar:"docs",previous:{title:"Interface: ServerSideVerificationOptions",permalink:"/docs/cordova/api/interfaces/serversideverificationoptions"},next:{title:"Getting Started",permalink:"/docs/ionic"}},l=[{value:"General",id:"general",children:[{value:"Why are ads not showing?",id:"why-are-ads-not-showing",children:[]},{value:"Why Google report shows less impressions than the number of Ad request calls?",id:"why-google-report-shows-less-impressions-than-the-number-of-ad-request-calls",children:[]},{value:"What does <code>{isTrusted: false}</code> event message means?",id:"what-does-istrusted-false-event-message-means",children:[]}]},{value:"Android",id:"android",children:[{value:"How to use with <code>cordova-android-play-services-gradle-release</code>?",id:"how-to-use-with-cordova-android-play-services-gradle-release",children:[]}]},{value:"iOS",id:"ios",children:[{value:"Why <code>.ipa</code> file is increased so much after including the plugin?",id:"why-ipa-file-is-increased-so-much-after-including-the-plugin",children:[]},{value:"How to fix <code>&#39;sendSubviewToBack&#39; has been renamed to &#39;sendSubview(toBack:)&#39;</code> error?",id:"how-to-fix-sendsubviewtoback-has-been-renamed-to-sendsubviewtoback-error",children:[]},{value:"Do I need to enable SKAdNetwork manually?",id:"do-i-need-to-enable-skadnetwork-manually",children:[]},{value:"How to fix <code>&#39;GoogleMobileAds/GoogleMobileAds.h&#39; file not found</code> error?",id:"how-to-fix-googlemobileadsgooglemobileadsh-file-not-found-error",children:[]}]}],d={toc:l};function c(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},d,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"general"},"General"),Object(a.b)("h3",{id:"why-are-ads-not-showing"},"Why are ads not showing?"),Object(a.b)("p",null,"Beside programming error, a common report is ",Object(a.b)("a",{parentName:"p",href:"https://developers.google.com/android/reference/com/google/android/gms/ads/AdRequest#ERROR_CODE_NO_FILL"},"no fill error")," (",Object(a.b)("a",{parentName:"p",href:"https://support.google.com/admob/thread/3494603"},"explanation post"),"),\nwhich many users think it is the problem of the library."),Object(a.b)("p",null,"It is common that for the first time requesting newly created ad unit, there is a delay to have available ads start serving."),Object(a.b)("p",null,"Also, some country or targeted deivce could have less ads to serve due to publisher / user settings."),Object(a.b)("h3",{id:"why-google-report-shows-less-impressions-than-the-number-of-ad-request-calls"},"Why Google report shows less impressions than the number of Ad request calls?"),Object(a.b)("p",null,"First of all, make sure your Ad request and display code are correct."),Object(a.b)("p",null,"The Ad server may not have ads to serve for every request, which returns ",Object(a.b)("inlineCode",{parentName:"p"},"NO_FILL")," response."),Object(a.b)("p",null,"It is receommended to track the impressions via event API instead of just the API calls, as it is not necessary result in showing Ads."),Object(a.b)("h3",{id:"what-does-istrusted-false-event-message-means"},"What does ",Object(a.b)("inlineCode",{parentName:"h3"},"{isTrusted: false}")," event message means?"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Event.isTrusted")," is ",Object(a.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Event/isTrusted"},"a part of the Web API"),", ",Object(a.b)("inlineCode",{parentName:"p"},"false")," indicates that the event was created or modified by a script or dispatched via ",Object(a.b)("inlineCode",{parentName:"p"},"dispatchEvent()"),"."),Object(a.b)("h2",{id:"android"},"Android"),Object(a.b)("h3",{id:"how-to-use-with-cordova-android-play-services-gradle-release"},"How to use with ",Object(a.b)("inlineCode",{parentName:"h3"},"cordova-android-play-services-gradle-release"),"?"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"cordova-android-play-services-gradle-release")," uses ",Object(a.b)("a",{parentName:"p",href:"https://github.com/dpa99c/cordova-android-play-services-gradle-release/blob/master/plugin.xml#L21"},"an old version of SDK")," by default."),Object(a.b)("p",null,"Edit ",Object(a.b)("inlineCode",{parentName:"p"},"pacakge.json")," to fix:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "cordova": {\n    "plugins": {\n      "cordova-android-play-services-gradle-release": {\n        "play-services-ads": "19.7.0"\n      }\n    }\n  }\n}\n')),Object(a.b)("h2",{id:"ios"},"iOS"),Object(a.b)("h3",{id:"why-ipa-file-is-increased-so-much-after-including-the-plugin"},"Why ",Object(a.b)("inlineCode",{parentName:"h3"},".ipa")," file is increased so much after including the plugin?"),Object(a.b)("p",null,"Google AdMob requires ",Object(a.b)("a",{parentName:"p",href:"https://developers.google.com/admob/ios/download"},"Google Mobile Ads SDK")," for iOS, which will contribute ~60MB to the app size."),Object(a.b)("h3",{id:"how-to-fix-sendsubviewtoback-has-been-renamed-to-sendsubviewtoback-error"},"How to fix ",Object(a.b)("inlineCode",{parentName:"h3"},"'sendSubviewToBack' has been renamed to 'sendSubview(toBack:)'")," error?"),Object(a.b)("p",null,"This is probally caused by using outdated version of Swift to build the project."),Object(a.b)("p",null,"Please ensusre ",Object(a.b)("inlineCode",{parentName:"p"},'<preference name="SwiftVersion" value="5.3" />')," is added to the section ",Object(a.b)("inlineCode",{parentName:"p"},'<platform name="ios">')," in ",Object(a.b)("inlineCode",{parentName:"p"},"config.xml"),", then clean build the project."),Object(a.b)("h3",{id:"do-i-need-to-enable-skadnetwork-manually"},"Do I need to enable ",Object(a.b)("a",{parentName:"h3",href:"https://developers.google.com/admob/ios/ios14#skadnetwork"},"SKAdNetwork")," manually?"),Object(a.b)("p",null,"No, ",Object(a.b)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/master/packages/cordova/plugin.xml#L87"},Object(a.b)("inlineCode",{parentName:"a"},"SKAdNetworkItems"))," will be set by the plugin, which located in ",Object(a.b)("inlineCode",{parentName:"p"},"platforms/ios/<PROJECT>/<PROJECT>-Info.plist"),"."),Object(a.b)("h3",{id:"how-to-fix-googlemobileadsgooglemobileadsh-file-not-found-error"},"How to fix ",Object(a.b)("inlineCode",{parentName:"h3"},"'GoogleMobileAds/GoogleMobileAds.h' file not found")," error?"),Object(a.b)("p",null,"This is likely caused by CocoaPods is not installing the dependencies correctly."),Object(a.b)("p",null,"Run ",Object(a.b)("inlineCode",{parentName:"p"},"pod repo update")," and ",Object(a.b)("inlineCode",{parentName:"p"},"cd platforms/ios && pod install --repo-update")," to ensure latest SDK is ready."),Object(a.b)("p",null,"A clean build / remove then re-add the plugin may be necessary."))}c.isMDXComponent=!0},171:function(e,t,o){"use strict";o.d(t,"a",(function(){return b})),o.d(t,"b",(function(){return h}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=r.a.createContext({}),c=function(e){var t=r.a.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},b=function(e){var t=c(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),b=c(o),u=n,h=b["".concat(i,".").concat(u)]||b[u]||p[u]||a;return o?r.a.createElement(h,s(s({ref:t},d),{},{components:o})):r.a.createElement(h,s({ref:t},d))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<a;d++)i[d]=o[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}u.displayName="MDXCreateElement"}}]);
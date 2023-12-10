"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[1065],{8570:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var r=o(79);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(o),h=n,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||a;return o?r.createElement(m,i(i({ref:t},p),{},{components:o})):r.createElement(m,i({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<a;d++)i[d]=o[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},2726:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=o(5799),n=(o(79),o(8570));const a={id:"faq",title:"Frequently Asked Questions"},i=void 0,s={unversionedId:"faq",id:"version-0.x/faq",title:"Frequently Asked Questions",description:"Why my ads is not showing?",source:"@site/versioned_docs/version-0.x/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/0.x/faq",draft:!1,editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/versioned_docs/version-0.x/faq.md",tags:[],version:"0.x",frontMatter:{id:"faq",title:"Frequently Asked Questions"},sidebar:"version-0.x/docs",previous:{title:"Ad Request Options",permalink:"/docs/0.x/ad-request-options"}},l={},d=[{value:"Why my ads is not showing?",id:"why-my-ads-is-not-showing",level:2},{value:"Why my iOS <code>.ipa</code> file is increased so much after including the plugin?",id:"why-my-ios-ipa-file-is-increased-so-much-after-including-the-plugin",level:2},{value:"How do I fix &quot;error: local variable callbackContext is accessed from within inner class; needs to be declared final&quot; error when building for Android?",id:"how-do-i-fix-error-local-variable-callbackcontext-is-accessed-from-within-inner-class-needs-to-be-declared-final-error-when-building-for-android",level:2},{value:"Why Google report shows less impressions than the number of Ad request calls?",id:"why-google-report-shows-less-impressions-than-the-number-of-ad-request-calls",level:2},{value:"How to use <code>WKWebView</code> instead of the default <code>UIWebView</code> for iOS?",id:"how-to-use-wkwebview-instead-of-the-default-uiwebview-for-ios",level:2},{value:"How to fix <code>&#39;sendSubviewToBack&#39; has been renamed to &#39;sendSubview(toBack:)&#39;</code> error for iOS?",id:"how-to-fix-sendsubviewtoback-has-been-renamed-to-sendsubviewtoback-error-for-ios",level:2},{value:"How this project relates to <code>cordova-plugin-admob-free</code>?",id:"how-this-project-relates-to-cordova-plugin-admob-free",level:2},{value:"How to fund this project?",id:"how-to-fund-this-project",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"why-my-ads-is-not-showing"},"Why my ads is not showing?"),(0,n.kt)("p",null,"Beside programming error, a common report is ",(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/android/reference/com/google/android/gms/ads/AdRequest#ERROR_CODE_NO_FILL"},"no fill error"),",\nwhich many users think it is the problem of the library.\nIt is common that for the first time requesting newly created ad unit, there is a delay to have available ads start serving.\nAlso, some country or targeted deivce could have less ads to serve due to publisher / user settings."),(0,n.kt)("h2",{id:"why-my-ios-ipa-file-is-increased-so-much-after-including-the-plugin"},"Why my iOS ",(0,n.kt)("inlineCode",{parentName:"h2"},".ipa")," file is increased so much after including the plugin?"),(0,n.kt)("p",null,"Google AdMob requires ",(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/admob/ios/download"},"Google Mobile Ads SDK")," for iOS, which will contribute ~60MB to the app size."),(0,n.kt)("h2",{id:"how-do-i-fix-error-local-variable-callbackcontext-is-accessed-from-within-inner-class-needs-to-be-declared-final-error-when-building-for-android"},'How do I fix "error: local variable callbackContext is accessed from within inner class; needs to be declared final" error when building for Android?'),(0,n.kt)("p",null,"The problem is probably due to using an outdated version of Cordova, updating to the latest version should solve it."),(0,n.kt)("p",null,"For more details, read ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/pull/37"},"PR #37"),"."),(0,n.kt)("h2",{id:"why-google-report-shows-less-impressions-than-the-number-of-ad-request-calls"},"Why Google report shows less impressions than the number of Ad request calls?"),(0,n.kt)("p",null,"First of all, make sure your Ad request and display code are correct."),(0,n.kt)("p",null,"The Ad server may not have ads to serve for every request, which returns ",(0,n.kt)("inlineCode",{parentName:"p"},"NO_FILL")," response."),(0,n.kt)("p",null,"It is receommended to track the impressions via event API instead of just the API calls, as it is not necessary result in showing Ads."),(0,n.kt)("h2",{id:"how-to-use-wkwebview-instead-of-the-default-uiwebview-for-ios"},"How to use ",(0,n.kt)("inlineCode",{parentName:"h2"},"WKWebView")," instead of the default ",(0,n.kt)("inlineCode",{parentName:"h2"},"UIWebView")," for iOS?"),(0,n.kt)("p",null,"There is ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/cordova-plugin-wkwebview-engine"},"Cordova plugin")," for this, which could be installed by"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"cordova plugin add cordova-plugin-wkwebview-engine\n")),(0,n.kt)("p",null,"Then add the following to ",(0,n.kt)("inlineCode",{parentName:"p"},"config.xml"),","),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<feature name="CDVWKWebViewEngine">\n  <param name="ios-package" value="CDVWKWebViewEngine" />\n</feature>\n\n<preference name="CordovaWebViewEngine" value="CDVWKWebViewEngine" />\n')),(0,n.kt)("h2",{id:"how-to-fix-sendsubviewtoback-has-been-renamed-to-sendsubviewtoback-error-for-ios"},"How to fix ",(0,n.kt)("inlineCode",{parentName:"h2"},"'sendSubviewToBack' has been renamed to 'sendSubview(toBack:)'")," error for iOS?"),(0,n.kt)("p",null,"This is probally caused by using outdated version of Swift to build the project."),(0,n.kt)("p",null,"Please ensusre ",(0,n.kt)("inlineCode",{parentName:"p"},'<preference name="SwiftVersion" value="5.3" />')," is added to the section ",(0,n.kt)("inlineCode",{parentName:"p"},'<platform name="ios">')," in ",(0,n.kt)("inlineCode",{parentName:"p"},"config.xml"),", then clean build the project."),(0,n.kt)("h2",{id:"how-this-project-relates-to-cordova-plugin-admob-free"},"How this project relates to ",(0,n.kt)("inlineCode",{parentName:"h2"},"cordova-plugin-admob-free"),"?"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"admob-plus")," is the successor of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ratson/cordova-plugin-admob-free"},"cordova-plugin-admob-free"),", which provides a cleaner API and build with modern tools."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"cordova-plugin-admob-free")," is orginally a fork by removing ad-sharing code from ",(0,n.kt)("inlineCode",{parentName:"p"},"cordova-plugin-admob-simple"),", which is also fork from ",(0,n.kt)("inlineCode",{parentName:"p"},"cordova-plugin-admob"),". Therefore, many hacks and APIs are inherited. As the project evolves, the code for Android was completely rewritten, and new APIs were added under constraints of existing code orginalization and architecture."),(0,n.kt)("p",null,"With the growing number of reported issues, it is clear that a better solution is needed, so ",(0,n.kt)("inlineCode",{parentName:"p"},"admob-plus")," is borned with the following features in mind:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Written in TypeScript"),(0,n.kt)("li",{parentName:"ul"},"First-class promise API"),(0,n.kt)("li",{parentName:"ul"},"Rewrite iOS part using Swift"),(0,n.kt)("li",{parentName:"ul"},"Official Ionic support"),(0,n.kt)("li",{parentName:"ul"},"Rich documentation")),(0,n.kt)("h2",{id:"how-to-fund-this-project"},"How to fund this project?"),(0,n.kt)("p",null,"Unfortunately, transfer money between two parties is not free, payment processors charges transaction fee plus a fixed fee based on currency received."),(0,n.kt)("p",null,"Therefore, small transactions means the percentage for payment processors will be higher, it is more like funding the payment processor rather than my work, I would prefer people to wait and accumulate until they are ready pay with a reasonable bigger amount."),(0,n.kt)("p",null,"IMO, small teams should focus on their product and move forward as quick as possible, while established teams should consider giving back to the community for what makes them succeed."),(0,n.kt)("p",null,"I prefer to have ",(0,n.kt)("a",{parentName:"p",href:"https://ratson.name/fund-admob-plus/"},"a few fixed amount subscription plans"),", which can be cancelled at any time, so people who want to fund more could simply subscribe the plan longer. This also help me easily determine how much time I would spend on the projects each month."),(0,n.kt)("p",null,"However, ",(0,n.kt)("a",{parentName:"p",href:"https://www.paypal.me/ratsonal"},"paypal.me")," is also available as ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/issues/10"},"suggested")," by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Blanketsniffer"},"@Blanketsniffer"),"."),(0,n.kt)("p",null,"Maintaining an open source project is a continuous effort, I wish the support goes the same if possible."),(0,n.kt)("p",null,"Other funding options are welcome, feel free to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/issues/new?title=%5BFunding%20Suggestion%5D"},"suggest your preference"),"."))}c.isMDXComponent=!0}}]);
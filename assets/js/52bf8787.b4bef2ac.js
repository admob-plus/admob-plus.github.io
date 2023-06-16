"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[6877],{8570:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(79);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9494:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var r=n(2203),a=n(915),o=(n(79),n(8570)),i=["components"],l={title:"Targeting"},s=void 0,d={unversionedId:"cordova/targeting",id:"version-1.x/cordova/targeting",title:"Targeting",description:"Child-directed setting",source:"@site/versioned_docs/version-1.x/cordova/targeting.md",sourceDirName:"cordova",slug:"/cordova/targeting",permalink:"/docs/1.x/cordova/targeting",draft:!1,editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/versioned_docs/version-1.x/cordova/targeting.md",tags:[],version:"1.x",frontMatter:{title:"Targeting"},sidebar:"version-1.x/docs",previous:{title:"Rewarded Ads Server-side Verification",permalink:"/docs/1.x/cordova/rewarded-ads-ssv"},next:{title:"Volume Control",permalink:"/docs/1.x/cordova/volume-control"}},c={},u=[{value:"Child-directed setting",id:"child-directed-setting",level:2},{value:"Users under the age of consent",id:"users-under-the-age-of-consent",level:2},{value:"Ad content filtering",id:"ad-content-filtering",level:2},{value:"Related",id:"related",level:2}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"child-directed-setting"},"Child-directed setting"),(0,o.kt)("p",null,"For purposes of the ",(0,o.kt)("a",{parentName:"p",href:"https://www.ftc.gov/tips-advice/business-center/privacy-and-security/children%27s-privacy"},"Children's Online Privacy Protection Act (COPPA)"),', there is a setting called "tag for child-directed treatment". By setting this tag, you certify that this notification is accurate and you are authorized to act on behalf of the owner of the app. You understand that abuse of this setting may result in termination of your Google account.'),(0,o.kt)("p",null,"The setting can be set via ",(0,o.kt)("inlineCode",{parentName:"p"},"admob.configRequest({tagForChildDirectedTreatment})"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set ",(0,o.kt)("inlineCode",{parentName:"li"},"tagForChildDirectedTreatment")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," to indicates that you want your content treated as child-directed for purposes of COPPA."),(0,o.kt)("li",{parentName:"ul"},"Set ",(0,o.kt)("inlineCode",{parentName:"li"},"tagForChildDirectedTreatment")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," to indicate that you don't want your content treated as child-directed for purposes of COPPA."),(0,o.kt)("li",{parentName:"ul"},"Do not set ",(0,o.kt)("inlineCode",{parentName:"li"},"tagForChildDirectedTreatment")," if you do not wish to indicate how you would like your content treated with respect to COPPA.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"admob.configRequest({\n  tagForChildDirectedTreatment: true\n})\n")),(0,o.kt)("h2",{id:"users-under-the-age-of-consent"},"Users under the age of consent"),(0,o.kt)("p",null,"You can mark your ad requests to receive treatment for users in the European Economic Area (EEA) under the age of consent. This feature is designed to help facilitate compliance with the ",(0,o.kt)("a",{parentName:"p",href:"https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679"},"General Data Protection Regulation (GDPR)"),". Note that you may have other legal obligations under GDPR. Please review the European Union\u2019s guidance and consult with your own legal counsel. Please remember that Google's tools are designed to facilitate compliance and do not relieve any particular publisher of its obligations under the law. ",(0,o.kt)("a",{parentName:"p",href:"https://support.google.com/admob/answer/7666366"},"Learn more about how the GDPR affects publishers"),"."),(0,o.kt)("p",null,"The setting can be set via ",(0,o.kt)("inlineCode",{parentName:"p"},"admob.configRequest({tagForUnderAgeOfConsent})"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set ",(0,o.kt)("inlineCode",{parentName:"li"},"tagForUnderAgeOfConsent")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," to indicate that you want the ad request to receive treatment for users in the European Economic Area (EEA) under the age of consent."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Set ",(0,o.kt)("inlineCode",{parentName:"li"},"tagForUnderAgeOfConsent")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," to indicate that you want the ad request to not receive treatment for users in the European Economic Area (EEA) under the age of consent."))),(0,o.kt)("li",{parentName:"ul"},"Not setting ",(0,o.kt)("inlineCode",{parentName:"li"},"tagForUnderAgeOfConsent")," indicates that you have not specified whether the ad request should receive treatment for users in the European Economic Area (EEA) under the age of consent.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"admob.configRequest({\n  tagForUnderAgeOfConsent: true\n})\n")),(0,o.kt)("h2",{id:"ad-content-filtering"},"Ad content filtering"),(0,o.kt)("p",null,"Apps can set a maximum ad content rating for their ad requests using the ",(0,o.kt)("inlineCode",{parentName:"p"},"admob.configRequest({maxAdContentRating})")," method. AdMob ads returned when this is configured have a content rating at or below that level. The possible values for this network extra are based on ",(0,o.kt)("a",{parentName:"p",href:"https://support.google.com/admob/answer/7562142"},"digital content label classifications"),", and must be one of the following string:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"G"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"MA"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"PG"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"T"'))),(0,o.kt)("p",null,"The following code specify that ad content returned should correspond to a digital content label designation no higher than ",(0,o.kt)("inlineCode",{parentName:"p"},"G"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'admob.configRequest({\n  maxAdContentRating: "G"\n})\n')),(0,o.kt)("h2",{id:"related"},"Related"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/admob/android/targeting"},"Targeting - Mobile Ads SDK (Android)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/admob/ios/targeting"},"Targeting - Mobile Ads SDK (iOS)"))))}m.isMDXComponent=!0}}]);
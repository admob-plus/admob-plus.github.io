"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[1065],{1459:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=s(5250),n=s(4550);const r={id:"faq",title:"Frequently Asked Questions"},t=void 0,a={id:"faq",title:"Frequently Asked Questions",description:"Why my ads is not showing?",source:"@site/versioned_docs/version-0.x/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/0.x/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/versioned_docs/version-0.x/faq.md",tags:[],version:"0.x",frontMatter:{id:"faq",title:"Frequently Asked Questions"},sidebar:"docs",previous:{title:"Ad Request Options",permalink:"/docs/0.x/ad-request-options"}},d={},l=[{value:"Why my ads is not showing?",id:"why-my-ads-is-not-showing",level:2},{value:"Why my iOS <code>.ipa</code> file is increased so much after including the plugin?",id:"why-my-ios-ipa-file-is-increased-so-much-after-including-the-plugin",level:2},{value:"How do I fix &quot;error: local variable callbackContext is accessed from within inner class; needs to be declared final&quot; error when building for Android?",id:"how-do-i-fix-error-local-variable-callbackcontext-is-accessed-from-within-inner-class-needs-to-be-declared-final-error-when-building-for-android",level:2},{value:"Why Google report shows less impressions than the number of Ad request calls?",id:"why-google-report-shows-less-impressions-than-the-number-of-ad-request-calls",level:2},{value:"How to use <code>WKWebView</code> instead of the default <code>UIWebView</code> for iOS?",id:"how-to-use-wkwebview-instead-of-the-default-uiwebview-for-ios",level:2},{value:"How to fix <code>&#39;sendSubviewToBack&#39; has been renamed to &#39;sendSubview(toBack:)&#39;</code> error for iOS?",id:"how-to-fix-sendsubviewtoback-has-been-renamed-to-sendsubviewtoback-error-for-ios",level:2},{value:"How this project relates to <code>cordova-plugin-admob-free</code>?",id:"how-this-project-relates-to-cordova-plugin-admob-free",level:2},{value:"How to fund this project?",id:"how-to-fund-this-project",level:2}];function c(e){const o={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h2,{id:"why-my-ads-is-not-showing",children:"Why my ads is not showing?"}),"\n",(0,i.jsxs)(o.p,{children:["Beside programming error, a common report is ",(0,i.jsx)(o.a,{href:"https://developers.google.com/android/reference/com/google/android/gms/ads/AdRequest#ERROR_CODE_NO_FILL",children:"no fill error"}),",\nwhich many users think it is the problem of the library.\nIt is common that for the first time requesting newly created ad unit, there is a delay to have available ads start serving.\nAlso, some country or targeted deivce could have less ads to serve due to publisher / user settings."]}),"\n",(0,i.jsxs)(o.h2,{id:"why-my-ios-ipa-file-is-increased-so-much-after-including-the-plugin",children:["Why my iOS ",(0,i.jsx)(o.code,{children:".ipa"})," file is increased so much after including the plugin?"]}),"\n",(0,i.jsxs)(o.p,{children:["Google AdMob requires ",(0,i.jsx)(o.a,{href:"https://developers.google.com/admob/ios/download",children:"Google Mobile Ads SDK"})," for iOS, which will contribute ~60MB to the app size."]}),"\n",(0,i.jsx)(o.h2,{id:"how-do-i-fix-error-local-variable-callbackcontext-is-accessed-from-within-inner-class-needs-to-be-declared-final-error-when-building-for-android",children:'How do I fix "error: local variable callbackContext is accessed from within inner class; needs to be declared final" error when building for Android?'}),"\n",(0,i.jsx)(o.p,{children:"The problem is probably due to using an outdated version of Cordova, updating to the latest version should solve it."}),"\n",(0,i.jsxs)(o.p,{children:["For more details, read ",(0,i.jsx)(o.a,{href:"https://github.com/admob-plus/admob-plus/pull/37",children:"PR #37"}),"."]}),"\n",(0,i.jsx)(o.h2,{id:"why-google-report-shows-less-impressions-than-the-number-of-ad-request-calls",children:"Why Google report shows less impressions than the number of Ad request calls?"}),"\n",(0,i.jsx)(o.p,{children:"First of all, make sure your Ad request and display code are correct."}),"\n",(0,i.jsxs)(o.p,{children:["The Ad server may not have ads to serve for every request, which returns ",(0,i.jsx)(o.code,{children:"NO_FILL"})," response."]}),"\n",(0,i.jsx)(o.p,{children:"It is receommended to track the impressions via event API instead of just the API calls, as it is not necessary result in showing Ads."}),"\n",(0,i.jsxs)(o.h2,{id:"how-to-use-wkwebview-instead-of-the-default-uiwebview-for-ios",children:["How to use ",(0,i.jsx)(o.code,{children:"WKWebView"})," instead of the default ",(0,i.jsx)(o.code,{children:"UIWebView"})," for iOS?"]}),"\n",(0,i.jsxs)(o.p,{children:["There is ",(0,i.jsx)(o.a,{href:"https://github.com/apache/cordova-plugin-wkwebview-engine",children:"Cordova plugin"})," for this, which could be installed by"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-sh",children:"cordova plugin add cordova-plugin-wkwebview-engine\n"})}),"\n",(0,i.jsxs)(o.p,{children:["Then add the following to ",(0,i.jsx)(o.code,{children:"config.xml"}),","]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-xml",children:'<feature name="CDVWKWebViewEngine">\n  <param name="ios-package" value="CDVWKWebViewEngine" />\n</feature>\n\n<preference name="CordovaWebViewEngine" value="CDVWKWebViewEngine" />\n'})}),"\n",(0,i.jsxs)(o.h2,{id:"how-to-fix-sendsubviewtoback-has-been-renamed-to-sendsubviewtoback-error-for-ios",children:["How to fix ",(0,i.jsx)(o.code,{children:"'sendSubviewToBack' has been renamed to 'sendSubview(toBack:)'"})," error for iOS?"]}),"\n",(0,i.jsx)(o.p,{children:"This is probally caused by using outdated version of Swift to build the project."}),"\n",(0,i.jsxs)(o.p,{children:["Please ensusre ",(0,i.jsx)(o.code,{children:'<preference name="SwiftVersion" value="5.3" />'})," is added to the section ",(0,i.jsx)(o.code,{children:'<platform name="ios">'})," in ",(0,i.jsx)(o.code,{children:"config.xml"}),", then clean build the project."]}),"\n",(0,i.jsxs)(o.h2,{id:"how-this-project-relates-to-cordova-plugin-admob-free",children:["How this project relates to ",(0,i.jsx)(o.code,{children:"cordova-plugin-admob-free"}),"?"]}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.code,{children:"admob-plus"})," is the successor of ",(0,i.jsx)(o.a,{href:"https://github.com/ratson/cordova-plugin-admob-free",children:"cordova-plugin-admob-free"}),", which provides a cleaner API and build with modern tools."]}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.code,{children:"cordova-plugin-admob-free"})," is orginally a fork by removing ad-sharing code from ",(0,i.jsx)(o.code,{children:"cordova-plugin-admob-simple"}),", which is also fork from ",(0,i.jsx)(o.code,{children:"cordova-plugin-admob"}),". Therefore, many hacks and APIs are inherited. As the project evolves, the code for Android was completely rewritten, and new APIs were added under constraints of existing code orginalization and architecture."]}),"\n",(0,i.jsxs)(o.p,{children:["With the growing number of reported issues, it is clear that a better solution is needed, so ",(0,i.jsx)(o.code,{children:"admob-plus"})," is borned with the following features in mind:"]}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"Written in TypeScript"}),"\n",(0,i.jsx)(o.li,{children:"First-class promise API"}),"\n",(0,i.jsx)(o.li,{children:"Rewrite iOS part using Swift"}),"\n",(0,i.jsx)(o.li,{children:"Official Ionic support"}),"\n",(0,i.jsx)(o.li,{children:"Rich documentation"}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"how-to-fund-this-project",children:"How to fund this project?"}),"\n",(0,i.jsx)(o.p,{children:"Unfortunately, transfer money between two parties is not free, payment processors charges transaction fee plus a fixed fee based on currency received."}),"\n",(0,i.jsx)(o.p,{children:"Therefore, small transactions means the percentage for payment processors will be higher, it is more like funding the payment processor rather than my work, I would prefer people to wait and accumulate until they are ready pay with a reasonable bigger amount."}),"\n",(0,i.jsx)(o.p,{children:"IMO, small teams should focus on their product and move forward as quick as possible, while established teams should consider giving back to the community for what makes them succeed."}),"\n",(0,i.jsxs)(o.p,{children:["I prefer to have ",(0,i.jsx)(o.a,{href:"https://ratson.name/fund-admob-plus/",children:"a few fixed amount subscription plans"}),", which can be cancelled at any time, so people who want to fund more could simply subscribe the plan longer. This also help me easily determine how much time I would spend on the projects each month."]}),"\n",(0,i.jsxs)(o.p,{children:["However, ",(0,i.jsx)(o.a,{href:"https://www.paypal.me/ratsonal",children:"paypal.me"})," is also available as ",(0,i.jsx)(o.a,{href:"https://github.com/admob-plus/admob-plus/issues/10",children:"suggested"})," by ",(0,i.jsx)(o.a,{href:"https://github.com/Blanketsniffer",children:"@Blanketsniffer"}),"."]}),"\n",(0,i.jsx)(o.p,{children:"Maintaining an open source project is a continuous effort, I wish the support goes the same if possible."}),"\n",(0,i.jsxs)(o.p,{children:["Other funding options are welcome, feel free to ",(0,i.jsx)(o.a,{href:"https://github.com/admob-plus/admob-plus/issues/new?title=%5BFunding%20Suggestion%5D",children:"suggest your preference"}),"."]})]})}function h(e={}){const{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},4550:(e,o,s)=>{s.d(o,{Z:()=>a,a:()=>t});var i=s(79);const n={},r=i.createContext(n);function t(e){const o=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),i.createElement(r.Provider,{value:o},e.children)}}}]);
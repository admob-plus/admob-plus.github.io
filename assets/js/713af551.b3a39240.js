"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[6277],{9910:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var s=n(5250),i=n(4550);const r={title:"Frequently Asked Questions",sidebar_label:"FAQ"},t=void 0,d={id:"cordova/faq",title:"Frequently Asked Questions",description:"Refer to Troubleshooting FAQ for other general questions.",source:"@site/versioned_docs/version-1.x/cordova/faq.md",sourceDirName:"cordova",slug:"/cordova/faq",permalink:"/docs/1.x/cordova/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/versioned_docs/version-1.x/cordova/faq.md",tags:[],version:"1.x",frontMatter:{title:"Frequently Asked Questions",sidebar_label:"FAQ"},sidebar:"docs",previous:{title:"ServerSideVerificationOptions",permalink:"/docs/1.x/cordova/api/interfaces/serversideverificationoptions"},next:{title:"Getting Started",permalink:"/docs/1.x/ionic"}},a={},l=[{value:"General",id:"general",level:2},{value:"What does <code>{isTrusted: false}</code> event message means?",id:"what-does-istrusted-false-event-message-means",level:3},{value:"Why does the &quot;close button&quot; on my interstitial not work?",id:"why-does-the-close-button-on-my-interstitial-not-work",level:3},{value:"Why do old browsers / devices throw an &quot;Uncaught SyntaxError&quot;?",id:"why-do-old-browsers--devices-throw-an-uncaught-syntaxerror",level:3},{value:"Android",id:"android",level:2},{value:"How to use with <code>cordova-android-play-services-gradle-release</code>?",id:"how-to-use-with-cordova-android-play-services-gradle-release",level:3},{value:"iOS",id:"ios",level:2},{value:"Why <code>.ipa</code> file is increased so much after including the plugin?",id:"why-ipa-file-is-increased-so-much-after-including-the-plugin",level:3},{value:"How to fix <code>&#39;sendSubviewToBack&#39; has been renamed to &#39;sendSubview(toBack:)&#39;</code> error?",id:"how-to-fix-sendsubviewtoback-has-been-renamed-to-sendsubviewtoback-error",level:3},{value:"Do I need to enable SKAdNetwork manually?",id:"do-i-need-to-enable-skadnetwork-manually",level:3},{value:"How to fix <code>&#39;GoogleMobileAds/GoogleMobileAds.h&#39; file not found</code> error?",id:"how-to-fix-googlemobileadsgooglemobileadsh-file-not-found-error",level:3},{value:"Shoud I use Apple\u2019s ATT prompt?",id:"shoud-i-use-apples-att-prompt",level:3}];function c(e){const o={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.admonition,{type:"info",children:(0,s.jsxs)(o.p,{children:["Refer to ",(0,s.jsx)(o.a,{href:"../troubleshooting",children:"Troubleshooting FAQ"})," for other general questions."]})}),"\n",(0,s.jsx)(o.h2,{id:"general",children:"General"}),"\n",(0,s.jsxs)(o.h3,{id:"what-does-istrusted-false-event-message-means",children:["What does ",(0,s.jsx)(o.code,{children:"{isTrusted: false}"})," event message means?"]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.code,{children:"Event.isTrusted"})," is ",(0,s.jsx)(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Event/isTrusted",children:"a part of the Web API"}),", ",(0,s.jsx)(o.code,{children:"false"})," indicates that the event was created or modified by a script or dispatched via ",(0,s.jsx)(o.code,{children:"dispatchEvent()"}),"."]}),"\n",(0,s.jsx)(o.h3,{id:"why-does-the-close-button-on-my-interstitial-not-work",children:'Why does the "close button" on my interstitial not work?'}),"\n",(0,s.jsx)(o.p,{children:'Sometimes you can\'t close an interstitial by using the "close button" and this can be caused by several both serverside and clientside issues.'}),"\n",(0,s.jsxs)(o.p,{children:["One of the most common reasons for this unwanted behaviour is a setting in your ",(0,s.jsx)(o.code,{children:"config.xml"})," ",(0,s.jsx)(o.a,{href:"https://cordova.apache.org/docs/en/10.x/config_ref/index.html",children:"preferences file"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["Be sure to have the ",(0,s.jsx)(o.code,{children:"KeepRunning"})," preference set to ",(0,s.jsx)(o.code,{children:"true"})," (default), becausing turning this off (",(0,s.jsx)(o.code,{children:"false"}),") can freeze an interstitial when viewed."]}),"\n",(0,s.jsx)(o.p,{children:'The reason for this is that those type of ads are layered "above" the main app and can\'t be "reached" (interacted with) when the app stops running after leaving it\'s view.'}),"\n",(0,s.jsxs)(o.p,{children:["Setting ",(0,s.jsx)(o.code,{children:"KeepRunning"})," to ",(0,s.jsx)(o.code,{children:"true"})," resolves the issue, but can have some negative inpact on battery usage and ofcourse all the existing (java-)scripts keep running in the background when the app is tombstoned."]}),"\n",(0,s.jsx)(o.h3,{id:"why-do-old-browsers--devices-throw-an-uncaught-syntaxerror",children:'Why do old browsers / devices throw an "Uncaught SyntaxError"?'}),"\n",(0,s.jsxs)(o.p,{children:["The examples for this plug-in are using a syntax introduced in ES6 (",(0,s.jsx)(o.a,{href:"https://en.wikipedia.org/wiki/ECMAScript",children:"ECMAScript version 6"}),")."]}),"\n",(0,s.jsxs)(o.p,{children:["Some of those ES6 features are ",(0,s.jsx)(o.code,{children:"async"}),", ",(0,s.jsx)(o.code,{children:"promise"})," and ",(0,s.jsx)(o.code,{children:"await"})," which makes development a lot easier and result in a more stable product. Almost every browser or device since 2015 ",(0,s.jsx)(o.a,{href:"https://caniuse.com/async-functions",children:"does support ES6"}),", but older versions don't."]}),"\n",(0,s.jsxs)(o.p,{children:["So if you are targetting devices like ",(0,s.jsx)(o.code,{children:"Android 4.x"})," or even ",(0,s.jsx)(o.code,{children:"Android 5.x"})," a syntax error in the script can occur and ",(0,s.jsx)(o.a,{href:"https://stackoverflow.com/questions/40492609",children:"throw messages"})," in the console like ",(0,s.jsx)(o.code,{children:"Uncaught SyntaxError: Unexpected token function (async)"}),"."]}),"\n",(0,s.jsx)(o.p,{children:"If you need to support those older devices, you can savely rewrite the example code to basic Javascript, without any of those asynchronous functions."}),"\n",(0,s.jsx)(o.h2,{id:"android",children:"Android"}),"\n",(0,s.jsxs)(o.h3,{id:"how-to-use-with-cordova-android-play-services-gradle-release",children:["How to use with ",(0,s.jsx)(o.code,{children:"cordova-android-play-services-gradle-release"}),"?"]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.code,{children:"cordova-android-play-services-gradle-release"})," uses ",(0,s.jsx)(o.a,{href:"https://github.com/dpa99c/cordova-android-play-services-gradle-release/blob/master/plugin.xml#L21",children:"an old version of SDK"})," by default."]}),"\n",(0,s.jsxs)(o.p,{children:["Edit ",(0,s.jsx)(o.code,{children:"pacakge.json"})," to fix:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-json",children:'{\n  "cordova": {\n    "plugins": {\n      "cordova-android-play-services-gradle-release": {\n        "PLAY-SERVICES-ADS": "19.8.0"\n      }\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(o.h2,{id:"ios",children:"iOS"}),"\n",(0,s.jsxs)(o.h3,{id:"why-ipa-file-is-increased-so-much-after-including-the-plugin",children:["Why ",(0,s.jsx)(o.code,{children:".ipa"})," file is increased so much after including the plugin?"]}),"\n",(0,s.jsxs)(o.p,{children:["Google AdMob requires ",(0,s.jsx)(o.a,{href:"https://developers.google.com/admob/ios/download",children:"Google Mobile Ads SDK"})," for iOS, which will contribute ~60MB to the app size."]}),"\n",(0,s.jsxs)(o.h3,{id:"how-to-fix-sendsubviewtoback-has-been-renamed-to-sendsubviewtoback-error",children:["How to fix ",(0,s.jsx)(o.code,{children:"'sendSubviewToBack' has been renamed to 'sendSubview(toBack:)'"})," error?"]}),"\n",(0,s.jsx)(o.p,{children:"This is probally caused by using outdated version of Swift to build the project."}),"\n",(0,s.jsxs)(o.p,{children:["Please ensusre ",(0,s.jsx)(o.code,{children:'<preference name="SwiftVersion" value="5.3" />'})," is added to the section ",(0,s.jsx)(o.code,{children:'<platform name="ios">'})," in ",(0,s.jsx)(o.code,{children:"config.xml"}),", then clean build the project."]}),"\n",(0,s.jsxs)(o.h3,{id:"do-i-need-to-enable-skadnetwork-manually",children:["Do I need to enable ",(0,s.jsx)(o.a,{href:"https://developers.google.com/admob/ios/ios14#skadnetwork",children:"SKAdNetwork"})," manually?"]}),"\n",(0,s.jsxs)(o.p,{children:["No, ",(0,s.jsx)(o.a,{href:"https://github.com/admob-plus/admob-plus/blob/master/packages/cordova/plugin.xml#L87",children:(0,s.jsx)(o.code,{children:"SKAdNetworkItems"})})," will be set by the plugin, which located in ",(0,s.jsx)(o.code,{children:"platforms/ios/<PROJECT>/<PROJECT>-Info.plist"}),"."]}),"\n",(0,s.jsxs)(o.h3,{id:"how-to-fix-googlemobileadsgooglemobileadsh-file-not-found-error",children:["How to fix ",(0,s.jsx)(o.code,{children:"'GoogleMobileAds/GoogleMobileAds.h' file not found"})," error?"]}),"\n",(0,s.jsx)(o.p,{children:"This is likely caused by CocoaPods is not installing the dependencies correctly."}),"\n",(0,s.jsxs)(o.p,{children:["Run ",(0,s.jsx)(o.code,{children:"pod repo update"})," and ",(0,s.jsx)(o.code,{children:"cd platforms/ios && pod install --repo-update"})," to ensure latest SDK is ready."]}),"\n",(0,s.jsx)(o.p,{children:"A clean build / remove then re-add the plugin may be necessary."}),"\n",(0,s.jsx)(o.h3,{id:"shoud-i-use-apples-att-prompt",children:"Shoud I use Apple\u2019s ATT prompt?"}),"\n",(0,s.jsxs)(o.p,{children:["As part of iOS 14, you may choose to employ the new ",(0,s.jsx)(o.a,{href:"https://developer.apple.com/documentation/apptrackingtransparency",children:"AppTrackingTransparency (ATT) framework"})," by calling ",(0,s.jsx)(o.code,{children:"admob.requestTrackingAuthorization()"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["If your app is not using ATT, you need to state that during submission or your app ",(0,s.jsx)(o.a,{href:"https://github.com/admob-plus/admob-plus/issues/241",children:"may be rejected"}),"."]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"If your app integrates AppTrackingTransparency, please indicate where in your app we can find the AppTrackingTransparency permission request."}),"\n",(0,s.jsx)(o.p,{children:"If your app does not integrate AppTrackingTransparency, please indicate this information in the Review Notes section for each version of your app in App Store Connect when submitting for review."}),"\n"]})]})}function h(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},4550:(e,o,n)=>{n.d(o,{Z:()=>d,a:()=>t});var s=n(79);const i={},r=s.createContext(i);function t(e){const o=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(r.Provider,{value:o},e.children)}}}]);
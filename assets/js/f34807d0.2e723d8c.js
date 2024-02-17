"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[6503],{6486:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var t=s(5250),r=s(4550);const n={title:"Troubleshooting",sidebar_label:"Troubleshooting"},i=void 0,a={id:"troubleshooting",title:"Troubleshooting",description:"First Step",source:"@site/versioned_docs/version-1.x/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/1.x/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/versioned_docs/version-1.x/troubleshooting.md",tags:[],version:"1.x",frontMatter:{title:"Troubleshooting",sidebar_label:"Troubleshooting"},sidebar:"docs",previous:{title:"AdMobPlusPlugin",permalink:"/docs/1.x/react-native/api/interfaces/admobplusplugin"}},l={},d=[{value:"First Step",id:"first-step",level:2},{value:"FAQ",id:"faq",level:2},{value:"Why are ads not showing?",id:"why-are-ads-not-showing",level:3},{value:"Why Google report shows less impressions than the number of Ad request calls?",id:"why-google-report-shows-less-impressions-than-the-number-of-ad-request-calls",level:3},{value:"How to handle &quot;Add or update app-ads.txt&quot; in AdMob console?",id:"how-to-handle-add-or-update-app-adstxt-in-admob-console",level:3},{value:"Why my app is removed from Google Play?",id:"why-my-app-is-removed-from-google-play",level:3}];function h(e){const o={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"first-step",children:"First Step"}),"\n",(0,t.jsx)(o.p,{children:"Run the following command in your project root directory,"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-sh-session",children:"npx admob-plus doctor\n"})}),"\n",(0,t.jsx)(o.p,{children:"This will scan for common errors and provide suggestions how to fix them."}),"\n",(0,t.jsx)(o.h2,{id:"faq",children:"FAQ"}),"\n",(0,t.jsx)(o.h3,{id:"why-are-ads-not-showing",children:"Why are ads not showing?"}),"\n",(0,t.jsxs)(o.p,{children:["Beside programming error, a common report is ",(0,t.jsx)(o.a,{href:"https://developers.google.com/android/reference/com/google/android/gms/ads/AdRequest#ERROR_CODE_NO_FILL",children:"no fill error"})," (",(0,t.jsx)(o.a,{href:"https://support.google.com/admob/thread/3494603",children:"explanation post"}),"),\nwhich many users think it is the problem of the library."]}),"\n",(0,t.jsx)(o.p,{children:"It is common that for the first time requesting newly created ad unit, there is a delay to have available ads start serving."}),"\n",(0,t.jsx)(o.p,{children:"Also, some country or targeted deivce could have less ads to serve due to publisher / user settings."}),"\n",(0,t.jsxs)(o.p,{children:["Check ",(0,t.jsx)(o.a,{href:"https://support.google.com/admob/answer/9469204",children:"common reasons for ads not showing"}),"."]}),"\n",(0,t.jsx)(o.h3,{id:"why-google-report-shows-less-impressions-than-the-number-of-ad-request-calls",children:"Why Google report shows less impressions than the number of Ad request calls?"}),"\n",(0,t.jsx)(o.p,{children:"First of all, make sure your Ad request and display code are correct."}),"\n",(0,t.jsxs)(o.p,{children:["The Ad server may not have ads to serve for every request, which returns ",(0,t.jsx)(o.code,{children:"NO_FILL"})," response."]}),"\n",(0,t.jsx)(o.p,{children:"It is receommended to track the impressions via event API instead of just the API calls, as it is not necessary result in showing Ads."}),"\n",(0,t.jsx)(o.h3,{id:"how-to-handle-add-or-update-app-adstxt-in-admob-console",children:'How to handle "Add or update app-ads.txt" in AdMob console?'}),"\n",(0,t.jsxs)(o.p,{children:["It does not relate to the plugin, see ",(0,t.jsx)(o.a,{href:"https://support.google.com/admob/answer/9363762?hl=en",children:'"Set up an app-ads.txt file for your app"'}),"."]}),"\n",(0,t.jsx)(o.h3,{id:"why-my-app-is-removed-from-google-play",children:"Why my app is removed from Google Play?"}),"\n",(0,t.jsxs)(o.p,{children:["It is likely you have violated some of the policies, one is common that you are not using ",(0,t.jsx)(o.a,{href:"./cordova/test-ads",children:"Test Ads"})," during development, see ",(0,t.jsx)(o.a,{href:"https://support.google.com/admob/answer/3342054?hl=en",children:"AdMob & AdSense program policies - Invalid traffic"}),"."]}),"\n",(0,t.jsxs)(o.p,{children:["Another reason could be displaying ads in a way that is not appropriated, see ",(0,t.jsx)(o.a,{href:"https://support.google.com/admob/answer/6201362?hl=en",children:"Disallowed interstitial implementations"}),"."]})]})}function p(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},4550:(e,o,s)=>{s.d(o,{Z:()=>a,a:()=>i});var t=s(79);const r={},n=t.createContext(r);function i(e){const o=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(n.Provider,{value:o},e.children)}}}]);
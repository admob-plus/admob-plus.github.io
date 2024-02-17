"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[2938],{7387:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var i=n(5250),r=n(4550);const t={title:"Upgrade Guide",sidebar_label:"Upgrade"},o=void 0,a={id:"cordova/upgrade",title:"Upgrade Guide",description:"From V1 to V2",source:"@site/docs/cordova/upgrade.md",sourceDirName:"cordova",slug:"/cordova/upgrade",permalink:"/docs/cordova/upgrade",draft:!1,unlisted:!1,editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/docs/cordova/upgrade.md",tags:[],version:"current",frontMatter:{title:"Upgrade Guide",sidebar_label:"Upgrade"},sidebar:"docs",previous:{title:"FAQ",permalink:"/docs/cordova/faq"},next:{title:"Getting Started",permalink:"/docs/ionic"}},s={},l=[{value:"From V1 to V2",id:"from-v1-to-v2",level:2},{value:"Kotlin Required",id:"kotlin-required",level:3},{value:"Ad <code>id</code> defaults to <code>adUnitId</code>",id:"ad-id-defaults-to-adunitid",level:3},{value:"Remove ad-type specific events",id:"remove-ad-type-specific-events",level:3}];function c(e){const d={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.h2,{id:"from-v1-to-v2",children:"From V1 to V2"}),"\n",(0,i.jsx)(d.h3,{id:"kotlin-required",children:"Kotlin Required"}),"\n",(0,i.jsx)(d.p,{children:"Kotlin support is required for V2, make sure your project is enabled it."}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-xml",metastring:'title="config.xml" {2}',children:'<platform name="android">\n    <preference name="GradlePluginKotlinEnabled" value="true" />\n</platform>\n'})}),"\n",(0,i.jsxs)(d.h3,{id:"ad-id-defaults-to-adunitid",children:["Ad ",(0,i.jsx)(d.code,{children:"id"})," defaults to ",(0,i.jsx)(d.code,{children:"adUnitId"})]}),"\n",(0,i.jsxs)(d.p,{children:["Instead of auto-generated ",(0,i.jsx)(d.code,{children:"id"})," for the ad instance, it is now default to ",(0,i.jsx)(d.code,{children:"adUnitId"}),"."]}),"\n",(0,i.jsx)(d.p,{children:"The change is introduced to avoid new instances are being created after the webview is reloaded."}),"\n",(0,i.jsxs)(d.p,{children:["The ",(0,i.jsx)(d.code,{children:"id"})," property is used to reference the same instance in the native code, so it should be the same between page reload."]}),"\n",(0,i.jsxs)(d.p,{children:["You should set the ",(0,i.jsx)(d.code,{children:"id"})," to a different value if you are displaying multiple ads with the same ",(0,i.jsx)(d.code,{children:"adUnitId"}),"."]}),"\n",(0,i.jsx)(d.h3,{id:"remove-ad-type-specific-events",children:"Remove ad-type specific events"}),"\n",(0,i.jsx)(d.p,{children:"The following events are removed."}),"\n",(0,i.jsxs)(d.ul,{children:["\n",(0,i.jsx)(d.li,{children:(0,i.jsx)(d.code,{children:"admob.banner.load"})}),"\n",(0,i.jsx)(d.li,{children:(0,i.jsx)(d.code,{children:"admob.banner.loadfail"})}),"\n",(0,i.jsx)(d.li,{children:(0,i.jsx)(d.code,{children:"admob.banner.impression"})}),"\n",(0,i.jsx)(d.li,{children:(0,i.jsx)(d.code,{children:"admob.interstitial.load"})}),"\n",(0,i.jsx)(d.li,{children:(0,i.jsx)(d.code,{children:"admob.interstitial.loadfail"})}),"\n",(0,i.jsx)(d.li,{children:(0,i.jsx)(d.code,{children:"admob.interstitial.show"})}),"\n",(0,i.jsx)(d.li,{children:(0,i.jsx)(d.code,{children:"admob.interstitial.dismiss"})}),"\n",(0,i.jsx)(d.li,{children:(0,i.jsx)(d.code,{children:"admob.rewarded.load"})}),"\n",(0,i.jsx)(d.li,{children:(0,i.jsx)(d.code,{children:"admob.rewarded.loadfail"})}),"\n",(0,i.jsx)(d.li,{children:(0,i.jsx)(d.code,{children:"admob.rewarded.reward"})}),"\n",(0,i.jsx)(d.li,{children:(0,i.jsx)(d.code,{children:"admob.rewarded.show"})}),"\n",(0,i.jsx)(d.li,{children:(0,i.jsx)(d.code,{children:"admob.rewarded.dismiss"})}),"\n"]}),"\n",(0,i.jsxs)(d.p,{children:["They are replaced with ",(0,i.jsx)(d.code,{children:"admob.ad.*"})," events."]}),"\n",(0,i.jsxs)(d.p,{children:["It is recommend to use ",(0,i.jsx)(d.code,{children:"on"})," method provided by the ad class,"]}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-js",children:"banner = new admob.BannerAd({\n  adUnitId: 'ca-app-pub-xxx/yyy',\n})\n\nbanner.on('impression', async (evt) => {\n  await banner.hide()\n})\n"})}),"\n",(0,i.jsxs)(d.p,{children:["To listen the event via ",(0,i.jsx)(d.code,{children:"document.addEventListener"}),","]}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-js",children:"document.addEventListener('admob.ad.load', async (evt) => {\n  if (evt.ad instanceof admob.NativeAd) {\n    // handle event here\n  }\n})\n"})})]})}function h(e={}){const{wrapper:d}={...(0,r.a)(),...e.components};return d?(0,i.jsx)(d,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},4550:(e,d,n)=>{n.d(d,{Z:()=>a,a:()=>o});var i=n(79);const r={},t=i.createContext(r);function o(e){const d=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function a(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:d},e.children)}}}]);
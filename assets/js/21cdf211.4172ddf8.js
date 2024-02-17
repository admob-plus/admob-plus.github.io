"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[4440],{4179:(e,d,a)=>{a.r(d),a.d(d,{assets:()=>o,contentTitle:()=>n,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>l});var r=a(5250),i=a(4550);const s={title:"Rewarded Interstitial Ad",sidebar_label:"Rewarded Interstitial"},n=void 0,t={id:"cordova/ads/rewarded-interstitial",title:"Rewarded Interstitial Ad",description:"Rewarded interstitial is a type of incentivized ad format that allows you offer rewards for ads that appear automatically during natural app transitions. Unlike rewarded ads, users aren't required to opt-in to view a rewarded interstitial.",source:"@site/docs/cordova/ads/rewarded-interstitial.md",sourceDirName:"cordova/ads",slug:"/cordova/ads/rewarded-interstitial",permalink:"/docs/cordova/ads/rewarded-interstitial",draft:!1,unlisted:!1,editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/docs/cordova/ads/rewarded-interstitial.md",tags:[],version:"current",frontMatter:{title:"Rewarded Interstitial Ad",sidebar_label:"Rewarded Interstitial"},sidebar:"docs",previous:{title:"Rewarded",permalink:"/docs/cordova/ads/rewarded"},next:{title:"WebView",permalink:"/docs/cordova/ads/webview"}},o={},l=[{value:"Usage",id:"usage",level:2},{value:"Events",id:"events",level:2},{value:"<code>load</code>",id:"load",level:3},{value:"<code>loadfail</code>",id:"loadfail",level:3},{value:"<code>show</code>",id:"show",level:3},{value:"<code>showfail</code>",id:"showfail",level:3},{value:"<code>reward</code>",id:"reward",level:3},{value:"<code>dismiss</code>",id:"dismiss",level:3},{value:"<code>impression</code>",id:"impression",level:3},{value:"Server-side Verification",id:"server-side-verification",level:2}];function c(e){const d={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.p,{children:"Rewarded interstitial is a type of incentivized ad format that allows you offer rewards for ads that appear automatically during natural app transitions. Unlike rewarded ads, users aren't required to opt-in to view a rewarded interstitial."}),"\n",(0,r.jsx)(d.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{className:"language-js",children:"let rewarded\n\ndocument.addEventListener('deviceready', async () => {\n  rewarded = new admob.RewardedInterstitialAd({\n    adUnitId: 'ca-app-pub-xxx/yyy',\n  })\n\n  rewarded.on('load', (evt) => {\n    // evt.ad\n  })\n\n  await rewarded.load()\n  await rewarded.show()\n}, false)\n"})}),"\n",(0,r.jsx)(d.h2,{id:"events",children:"Events"}),"\n",(0,r.jsx)(d.h3,{id:"load",children:(0,r.jsx)(d.code,{children:"load"})}),"\n",(0,r.jsx)(d.h3,{id:"loadfail",children:(0,r.jsx)(d.code,{children:"loadfail"})}),"\n",(0,r.jsx)(d.h3,{id:"show",children:(0,r.jsx)(d.code,{children:"show"})}),"\n",(0,r.jsx)(d.h3,{id:"showfail",children:(0,r.jsx)(d.code,{children:"showfail"})}),"\n",(0,r.jsx)(d.h3,{id:"reward",children:(0,r.jsx)(d.code,{children:"reward"})}),"\n",(0,r.jsx)(d.p,{children:"User has earned reward."}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{className:"language-js",children:'{\n  reward: {\n    amount: 1,\n    type: "Reward"\n  }\n}\n'})}),"\n",(0,r.jsx)(d.h3,{id:"dismiss",children:(0,r.jsx)(d.code,{children:"dismiss"})}),"\n",(0,r.jsx)(d.h3,{id:"impression",children:(0,r.jsx)(d.code,{children:"impression"})}),"\n",(0,r.jsx)(d.h2,{id:"server-side-verification",children:"Server-side Verification"}),"\n",(0,r.jsxs)(d.ul,{children:["\n",(0,r.jsx)(d.li,{children:(0,r.jsx)(d.a,{href:"../rewarded-ads-ssv",children:"Rewarded Ads Server-side Verification"})}),"\n"]})]})}function h(e={}){const{wrapper:d}={...(0,i.a)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},4550:(e,d,a)=>{a.d(d,{Z:()=>t,a:()=>n});var r=a(79);const i={},s=r.createContext(i);function n(e){const d=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function t(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),r.createElement(s.Provider,{value:d},e.children)}}}]);
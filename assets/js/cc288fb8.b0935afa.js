"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[1160],{1372:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=t(7512),o=t(5640);const r={title:"Banner Ad",sidebar_label:"Banner"},s=void 0,i={id:"ionic/ads/banner",title:"Banner Ad",description:"Usage",source:"@site/docs/ionic/ads/banner.md",sourceDirName:"ionic/ads",slug:"/ionic/ads/banner",permalink:"/docs/ionic/ads/banner",draft:!1,unlisted:!1,editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/docs/ionic/ads/banner.md",tags:[],version:"current",frontMatter:{title:"Banner Ad",sidebar_label:"Banner"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/ionic/installation"},next:{title:"Interstitial",permalink:"/docs/ionic/ads/interstitial"}},d={},l=[{value:"Usage",id:"usage",level:2},{value:"Related",id:"related",level:2}];function c(n){const e={a:"a",code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,o.M)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:"import { AdMob } from '@admob-plus/ionic/ngx';\nimport { Component } from '@angular/core';\nimport { Platform } from '@ionic/angular';\n\n@Component({\n  selector: 'app-home',\n  templateUrl: 'home.page.html',\n  styleUrls: ['home.page.scss'],\n})\nexport class HomePage {\n  constructor(private platform: Platform, private admob: AdMob) {\n    this.platform.ready().then(async () => {\n      const banner = new this.admob.BannerAd({\n        adUnitId: 'ca-app-pub-xxx/yyy',\n      });\n      await banner.show();\n\n      this.admob.on('admob.banner.impression').subscribe(async () => {\n        await banner.hide();\n      });\n    });\n  }\n}\n"})}),"\n",(0,a.jsx)(e.h2,{id:"related",children:"Related"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"/docs/cordova/ads/banner",children:"Banner Ad - Cordova"})}),"\n"]})]})}function m(n={}){const{wrapper:e}={...(0,o.M)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(c,{...n})}):c(n)}},5640:(n,e,t)=>{t.d(e,{I:()=>i,M:()=>s});var a=t(5496);const o={},r=a.createContext(o);function s(n){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),a.createElement(r.Provider,{value:e},n.children)}}}]);
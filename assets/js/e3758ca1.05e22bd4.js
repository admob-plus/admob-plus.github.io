"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[8411],{200:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(5250),r=n(4550);n(6658),n(3241);const l={title:"Native Ad",sidebar_label:"Native"},o=void 0,s={id:"ionic/ads/native",title:"Native Ad",description:"Installation",source:"@site/docs/ionic/ads/native.mdx",sourceDirName:"ionic/ads",slug:"/ionic/ads/native",permalink:"/docs/ionic/ads/native",draft:!1,unlisted:!1,editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/docs/ionic/ads/native.mdx",tags:[],version:"current",frontMatter:{title:"Native Ad",sidebar_label:"Native"},sidebar:"docs",previous:{title:"Interstitial",permalink:"/docs/ionic/ads/interstitial"},next:{title:"Rewarded",permalink:"/docs/ionic/ads/rewarded"}},i={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Related",id:"related",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh-session",children:"ionic cordova plugin add admob-plus-cordova-native --save\n"})}),"\n",(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"import { AdMob } from '@admob-plus/ionic/ngx'\nimport { Component } from '@angular/core'\nimport { Platform } from '@ionic/angular'\n\n@Component({\n  selector: 'app-home',\n  templateUrl: 'home.page.html',\n  styleUrls: ['home.page.scss'],\n})\nexport class HomePage {\n  constructor(private platform: Platform, private admob: AdMob) {\n    this.platform.ready().then(async () => {\n      const banner = new this.admob.NativeAd({\n        adUnitId: 'ca-app-pub-xxx/yyy',\n      })\n\n      await ad.load()\n\n      await ad.show({\n        x: 0,\n        y: 30,\n        width: window.screen.width,\n        height: 300,\n      })\n    })\n  }\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"related",children:"Related"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/docs/cordova/ads/native",children:"Native Ad - Cordova"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},3241:(e,t,n)=>{n.d(t,{Z:()=>o});n(79);var a=n(9577);const r={tabItem:"tabItem_xOQW"};var l=n(5250);function o(e){let{children:t,hidden:n,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:n,children:t})}},6658:(e,t,n)=>{n.d(t,{Z:()=>j});var a=n(79),r=n(9577),l=n(1069),o=n(7911),s=n(3588),i=n(2833),u=n(3557),c=n(4848);function d(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=p(e),[o,i]=(0,a.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const r=null!=(t=a.find((e=>e.default)))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,d]=h({queryString:n,groupId:r}),[b,v]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[r,l]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),f=(()=>{const e=null!=u?u:b;return m({value:e,tabValues:l})?e:null})();(0,s.Z)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error("Can't select invalid tab value="+e);i(e),d(e),v(e)}),[d,v,l]),tabValues:l}}var v=n(8083);const f={tabList:"tabList_xsvB",tabItem:"tabItem_mE7k"};var g=n(5250);function x(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),r=s[n].value;r!==a&&(u(t),o(r))},d=e=>{var t;let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{var a;const t=i.indexOf(e.currentTarget)+1;n=null!=(a=i[t])?a:i[0];break}case"ArrowLeft":{var r;const t=i.indexOf(e.currentTarget)-1;n=null!=(r=i[t])?r:i[i.length-1];break}}null==(t=n)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...l,className:(0,r.Z)("tabs__item",f.tabItem,null==l?void 0:l.className,{"tabs__item--active":a===t}),children:null!=n?n:t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(w,{...e,...t})]})}function j(e){const t=(0,v.Z)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},4550:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var a=n(79);const r={},l=a.createContext(r);function o(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[7724],{3692:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=r(7512),t=r(5640),l=r(5392),o=r(4272);const s={title:"Installation",sidebar_label:"Installation"},i=void 0,c={id:"cordova/installation",title:"Installation",description:"Or via Cordova CLI:",source:"@site/docs/cordova/installation.mdx",sourceDirName:"cordova",slug:"/cordova/installation",permalink:"/docs/cordova/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/docs/cordova/installation.mdx",tags:[],version:"current",frontMatter:{title:"Installation",sidebar_label:"Installation"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/cordova"},next:{title:"App Open",permalink:"/docs/cordova/ads/app-open"}},u={},d=[{value:"Proguard",id:"proguard",level:3}];function p(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,t.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"npx admob-plus install -p cordova\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Or via ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/cordova",children:"Cordova CLI"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"cordova plugin add admob-plus-cordova --save --variable APP_ID_ANDROID=ca-app-pub-xxx~xxx --variable APP_ID_IOS=ca-app-pub-xxx~xxx\n"})}),"\n",(0,a.jsxs)(l.c,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],children:[(0,a.jsxs)(o.c,{value:"android",children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"com.google.android.gms:play-services-ads:$PLAY_SERVICES_VERSION"})," is available for configuration,\nthe default is ",(0,a.jsx)(n.code,{children:"--PLAY_SERVICES_VERSION=23.0.0"}),"."]}),(0,a.jsxs)(n.p,{children:["When using with other plugins and encountering errors, set ",(0,a.jsx)(n.code,{children:"AndroidXEnabled"})," to ",(0,a.jsx)(n.code,{children:"true"}),"."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",metastring:'title="config.xml" {3}',children:'<widget>\n    <platform name="android">\n        <preference name="AndroidXEnabled" value="true" />\n    </platform>\n</widget>\n'})}),(0,a.jsxs)(n.p,{children:["Or add the following plugins for ",(0,a.jsx)(n.code,{children:"Cordova<9"}),","]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"cordova plugin add cordova-plugin-androidx\ncordova plugin add cordova-plugin-androidx-adapter\n"})}),(0,a.jsx)(n.h3,{id:"proguard",children:"Proguard"}),(0,a.jsx)(n.p,{children:"Add these rules to your proguard configuration:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"-keep public class admob.plugin.ads.** {\n  public *;\n}\n"})})]}),(0,a.jsxs)(o.c,{value:"ios",children:[(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:"deployment-target"})," and ",(0,a.jsx)(n.code,{children:"SwiftVersion"}),","]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",metastring:'title="config.xml" {3-4}',children:'<widget>\n    <platform name="ios">\n        <preference name="deployment-target" value="12.0" />\n        <preference name="SwiftVersion" value="5.3" />\n    </platform>\n</widget>\n'})}),(0,a.jsxs)(n.p,{children:["Run ",(0,a.jsx)(n.code,{children:"cordova platform remove ios"})," then ",(0,a.jsx)(n.code,{children:"cordova platform add ios"})," to take effect."]}),(0,a.jsxs)(n.p,{children:["Run ",(0,a.jsx)(n.code,{children:"pod repo update"})," or ",(0,a.jsx)(n.code,{children:"cd platforms/ios && pod install --repo-update"})," to ensure latest SDK is ready."]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},4272:(e,n,r)=>{r.d(n,{c:()=>o});r(5496);var a=r(8536);const t={tabItem:"tabItem_dfTh"};var l=r(7512);function o(e){let{children:n,hidden:r,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.c)(t.tabItem,o),hidden:r,children:n})}},5392:(e,n,r)=>{r.d(n,{c:()=>I});var a=r(5496),t=r(8536),l=r(2488),o=r(6252),s=r(6600),i=r(5677),c=r(216),u=r(1544);function d(e){var n,r;return null!=(n=null==(r=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function p(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:t}}=e;return{value:n,label:r,attributes:a,default:t}}))}(r);return function(e){const n=(0,c.w)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const t=(0,o.Uz)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,i._M)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})}),[l,t])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,l=p(e),[o,i]=(0,a.useState)((()=>function(e){var n;let{defaultValue:r,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}const t=null!=(n=a.find((e=>e.default)))?n:a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[c,d]=m({queryString:r,groupId:t}),[f,v]=function(e){let{groupId:n}=e;const r=function(e){return e?"docusaurus.tab."+e:null}(n),[t,l]=(0,u.IN)(r);return[t,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:t}),b=(()=>{const e=null!=c?c:f;return h({value:e,tabValues:l})?e:null})();(0,s.c)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error("Can't select invalid tab value="+e);i(e),d(e),v(e)}),[d,v,l]),tabValues:l}}var v=r(7504);const b={tabList:"tabList_I1L4",tabItem:"tabItem_HpaV"};var x=r(7512);function g(e){let{className:n,block:r,selectedValue:a,selectValue:o,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.MV)(),u=e=>{const n=e.currentTarget,r=i.indexOf(n),t=s[r].value;t!==a&&(c(n),o(t))},d=e=>{var n;let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var a;const n=i.indexOf(e.currentTarget)+1;r=null!=(a=i[n])?a:i[0];break}case"ArrowLeft":{var t;const n=i.indexOf(e.currentTarget)-1;r=null!=(t=i[n])?t:i[i.length-1];break}}null==(n=r)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.c)("tabs",{"tabs--block":r},n),children:s.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...l,className:(0,t.c)("tabs__item",b.tabItem,null==l?void 0:l.className,{"tabs__item--active":a===n}),children:null!=r?r:n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:t}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function w(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,t.c)("tabs-container",b.tabList),children:[(0,x.jsx)(g,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function I(e){const n=(0,v.c)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(n))}},5640:(e,n,r)=>{r.d(n,{I:()=>s,M:()=>o});var a=r(5496);const t={},l=a.createContext(t);function o(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);
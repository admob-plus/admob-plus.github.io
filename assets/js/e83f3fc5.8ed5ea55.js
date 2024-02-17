"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[9744],{2641:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var i=a(5250),t=a(4550),d=a(6658),r=a(3241);const s={title:"Native Ad",sidebar_label:"Native"},o=void 0,l={id:"cordova/ads/native",title:"Native Ad",description:"This feature is implemented differently from the original AdMob Native Ad designed for, as there is no official way to using it with webview.",source:"@site/docs/cordova/ads/native.mdx",sourceDirName:"cordova/ads",slug:"/cordova/ads/native",permalink:"/docs/cordova/ads/native",draft:!1,unlisted:!1,editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/docs/cordova/ads/native.mdx",tags:[],version:"current",frontMatter:{title:"Native Ad",sidebar_label:"Native"},sidebar:"docs",previous:{title:"Interstitial",permalink:"/docs/cordova/ads/interstitial"},next:{title:"Rewarded",permalink:"/docs/cordova/ads/rewarded"}},c={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Attach to HTML element",id:"attach-to-html-element",level:2},{value:"Customize Views",id:"customize-views",level:2},{value:"Multiple Views",id:"multiple-views",level:3},{value:"Events",id:"events",level:2},{value:"<code>admob.ad.load</code>",id:"admobadload",level:3},{value:"<code>admob.ad.loadfail</code>",id:"admobadloadfail",level:3},{value:"<code>admob.ad.show</code>",id:"admobadshow",level:3},{value:"<code>admob.ad.showfail</code>",id:"admobadshowfail",level:3},{value:"<code>admob.ad.dismiss</code>",id:"admobaddismiss",level:3},{value:"<code>admob.ad.impression</code>",id:"admobadimpression",level:3},{value:"References",id:"references",level:2}];function v(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsx)(n.p,{children:"This feature is implemented differently from the original AdMob Native Ad designed for, as there is no official way to using it with webview."}),(0,i.jsx)(n.p,{children:"You are warned to the potential policy violations for using this feature."})]}),"\n",(0,i.jsx)(n.p,{children:"Native ads are ad assets that are presented to users via UI components that are native to the platform."}),"\n",(0,i.jsxs)(n.p,{children:["In addtion to installing ",(0,i.jsx)(n.code,{children:"admob-plus-cordova"}),", you will need to install ",(0,i.jsx)(n.code,{children:"admob-plus-cordova-native"})," for displaying native ads."]}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh-session",children:"cordova plugin add admob-plus-cordova-native --save\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Or use a local version with ",(0,i.jsx)(n.a,{href:"#customize-views",children:"customized views"}),","]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"document.addEventListener('deviceready', async () => {\n  const ad = new admob.NativeAd({\n    adUnitId: 'ca-app-pub-xxx/yyy',\n  })\n\n  ad.on('load', (evt) => {\n    // evt.ad\n  })\n\n  await ad.load()\n  await ad.show({\n    x: 0,\n    y: 50,\n    width: window.screen.width,\n    height: 300,\n  })\n\n  setTimeout(() => {\n    // change ad size and poistion\n    ad.show({\n      x: 0,\n      y: 150,\n      width: window.screen.width,\n      height: 350,\n    })\n  }, 5000)\n\n  setTimeout(() => {\n    ad.hide()\n  }, 10000)\n})\n\ndocument.addEventListener('admob.ad.load', async (evt) => {\n  if (evt.ad instanceof admob.NativeAd) {\n    // handle event here\n  }\n})\n"})}),"\n",(0,i.jsx)(n.h2,{id:"attach-to-html-element",children:"Attach to HTML element"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"ad.showWith(document.getElementById('native-ad'))\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"native-ad"})," is the HTML element for the ad view should attach to, which will update the size and position of ad view as the DOM element."]}),"\n",(0,i.jsx)(n.p,{children:"Note that this is an native ad view overlay on top of the webview, so scrolling will see some delay.\nIt is the limitation for mixing native view and webview for hybrid app."}),"\n",(0,i.jsx)(n.h2,{id:"customize-views",children:"Customize Views"}),"\n",(0,i.jsx)(n.p,{children:"You will need to create a plugin to provide the native ad view implementation."}),"\n",(0,i.jsxs)(n.p,{children:["It is recommended to fork ",(0,i.jsx)(n.code,{children:"admob-plus-cordova-native"})," and starting there."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh-session",children:"git clone https://github.com/admob-plus/admob-plus.git\ncordova plugin rm admob-plus-cordova-native\ncordova plugin add ./admob-plus/packages/cordova-native --link --save\ncd admob-plus/packages/cordova-native\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Review the ",(0,i.jsx)(n.a,{href:"https://support.google.com/admob/answer/6329638",children:"Native ads policies and guidelines"})," for guidance on how to render your native ads."]})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"default"})," view is registered in"]}),"\n",(0,i.jsxs)(d.Z,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],children:[(0,i.jsxs)(r.Z,{value:"android",children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:"{6} title=src/android/Plugin.java",children:"package admob.plus.cordova.nativead;\n\npublic class Plugin extends CordovaPlugin {\n    protected void pluginInitialize() {\n        AdMob.registerNativeAdViewProviders(new HashMap<String, Native.ViewProvider>() {{\n            put(AdMob.NATIVE_VIEW_DEFAULT, new AdViewProvider(cordova));\n        }});\n    }\n}\n"})}),(0,i.jsxs)(n.p,{children:["By changing ",(0,i.jsx)(n.code,{children:"src/android/AdViewProvider.java"})," and ",(0,i.jsx)(n.code,{children:"src/android/res/layout/ad_unified.xml"}),",\nyou could customize the look and feel of the native ad view."]})]}),(0,i.jsxs)(r.Z,{value:"ios",children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",metastring:"{3} title=src/ios/AdMobNativePlugin.swift",children:'class AdMobNativePlugin: CDVPlugin {\n    override func pluginInitialize() {\n        AMBPlugin.registerNativeAdViewProviders(["default": AMNAdViewProvider()])\n    }\n}\n'})}),(0,i.jsxs)(n.p,{children:["By changing ",(0,i.jsx)(n.code,{children:"src/ios/AMNAdViewProvider.swift"})," and ",(0,i.jsx)(n.code,{children:"src/ios/AMNAdView.xib"}),",\nyou could customize the look and feel of the native ad view."]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"multiple-views",children:"Multiple Views"}),"\n",(0,i.jsxs)(n.p,{children:["If your native ads need more than one views, you could register them using ",(0,i.jsx)(n.code,{children:"registerNativeAdViewProviders()"}),"."]}),"\n",(0,i.jsxs)(d.Z,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],children:[(0,i.jsx)(r.Z,{value:"android",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:"{7-8} title=src/android/Plugin.java",children:'package admob.plus.cordova.nativead;\n\npublic class Plugin extends CordovaPlugin {\n    protected void pluginInitialize() {\n        AdMob.registerNativeAdViewProviders(new HashMap<String, Native.ViewProvider>() {{\n            put(AdMob.NATIVE_VIEW_DEFAULT, new AdViewProvider(cordova));\n            // register extra views\n            put("myview", new MyAdViewProvider(cordova));\n        }});\n    }\n}\n'})})}),(0,i.jsx)(r.Z,{value:"ios",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",metastring:"{5-6} title=src/ios/AdMobNativePlugin.swift",children:'class AdMobNativePlugin: CDVPlugin {\n    override func pluginInitialize() {\n        AMBPlugin.registerNativeAdViewProviders([\n          "default": AMNAdViewProvider(),\n          // register extra views\n          "myview": MyAdViewProvider(),\n        ])\n    }\n}\n'})})})]}),"\n",(0,i.jsx)(n.p,{children:"Then specify it when createing the ad,"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:"{3}",children:"const ad = new admob.NativeAd({\n  adUnitId: 'ca-app-pub-xxx/yyy',\n  view: 'myview',\n})\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Remeber to update ",(0,i.jsx)(n.code,{children:"plugin.xml"})," for the newly added files,"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",metastring:"{3,7} title=plugin.xml",children:'<plugin id="admob-plus-cordova-native">\n  <platform name="android">\n    <source-file src="src/android/MyAdViewProvider.java" target-dir="src/admob/plus/cordova/nativead" />\n  </platform>\n\n  <platform name="ios">\n    <source-file src="src/ios/MyAdViewProvider.swift" />\n  </platform>\n</plugin>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,i.jsx)(n.h3,{id:"admobadload",children:(0,i.jsx)(n.code,{children:"admob.ad.load"})}),"\n",(0,i.jsx)(n.h3,{id:"admobadloadfail",children:(0,i.jsx)(n.code,{children:"admob.ad.loadfail"})}),"\n",(0,i.jsx)(n.h3,{id:"admobadshow",children:(0,i.jsx)(n.code,{children:"admob.ad.show"})}),"\n",(0,i.jsx)(n.h3,{id:"admobadshowfail",children:(0,i.jsx)(n.code,{children:"admob.ad.showfail"})}),"\n",(0,i.jsx)(n.h3,{id:"admobaddismiss",children:(0,i.jsx)(n.code,{children:"admob.ad.dismiss"})}),"\n",(0,i.jsx)(n.h3,{id:"admobadimpression",children:(0,i.jsx)(n.code,{children:"admob.ad.impression"})}),"\n",(0,i.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://developers.google.com/admob/android/native/start",children:"Native Ads - Mobile Ads SDK (Android)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://developers.google.com/admob/ios/native/start",children:"Native Ads - Mobile Ads SDK (iOS)"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(v,{...e})}):v(e)}},3241:(e,n,a)=>{a.d(n,{Z:()=>r});a(79);var i=a(9577);const t={tabItem:"tabItem_xOQW"};var d=a(5250);function r(e){let{children:n,hidden:a,className:r}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,i.Z)(t.tabItem,r),hidden:a,children:n})}},6658:(e,n,a)=>{a.d(n,{Z:()=>y});var i=a(79),t=a(9577),d=a(1069),r=a(7911),s=a(3588),o=a(2833),l=a(3557),c=a(4848);function u(e){var n,a;return null!=(n=null==(a=i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?n:[]}function v(e){const{values:n,children:a}=e;return(0,i.useMemo)((()=>{const e=null!=n?n:function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:i,default:t}}=e;return{value:n,label:a,attributes:i,default:t}}))}(a);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,a])}function h(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const t=(0,r.k6)(),d=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,o._X)(d),(0,i.useCallback)((e=>{if(!d)return;const n=new URLSearchParams(t.location.search);n.set(d,e),t.replace({...t.location,search:n.toString()})}),[d,t])]}function p(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,d=v(e),[r,o]=(0,i.useState)((()=>function(e){var n;let{defaultValue:a,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:i}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+i.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}const t=null!=(n=i.find((e=>e.default)))?n:i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:d}))),[l,u]=m({queryString:a,groupId:t}),[p,b]=function(e){let{groupId:n}=e;const a=function(e){return e?"docusaurus.tab."+e:null}(n),[t,d]=(0,c.Nk)(a);return[t,(0,i.useCallback)((e=>{a&&d.set(e)}),[a,d])]}({groupId:t}),f=(()=>{const e=null!=l?l:p;return h({value:e,tabValues:d})?e:null})();(0,s.Z)((()=>{f&&o(f)}),[f]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);o(e),u(e),b(e)}),[u,b,d]),tabValues:d}}var b=a(8083);const f={tabList:"tabList_xsvB",tabItem:"tabItem_mE7k"};var g=a(5250);function w(e){let{className:n,block:a,selectedValue:i,selectValue:r,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:l}=(0,d.o5)(),c=e=>{const n=e.currentTarget,a=o.indexOf(n),t=s[a].value;t!==i&&(l(n),r(t))},u=e=>{var n;let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{var i;const n=o.indexOf(e.currentTarget)+1;a=null!=(i=o[n])?i:o[0];break}case"ArrowLeft":{var t;const n=o.indexOf(e.currentTarget)-1;a=null!=(t=o[n])?t:o[o.length-1];break}}null==(n=a)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":a},n),children:s.map((e=>{let{value:n,label:a,attributes:d}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>o.push(e),onKeyDown:u,onClick:c,...d,className:(0,t.Z)("tabs__item",f.tabItem,null==d?void 0:d.className,{"tabs__item--active":i===n}),children:null!=a?a:n},n)}))})}function x(e){let{lazy:n,children:a,selectedValue:t}=e;const d=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=d.find((e=>e.props.value===t));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:d.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function j(e){const n=p(e);return(0,g.jsxs)("div",{className:(0,t.Z)("tabs-container",f.tabList),children:[(0,g.jsx)(w,{...e,...n}),(0,g.jsx)(x,{...e,...n})]})}function y(e){const n=(0,b.Z)();return(0,g.jsx)(j,{...e,children:u(e.children)},String(n))}},4550:(e,n,a)=>{a.d(n,{Z:()=>s,a:()=>r});var i=a(79);const t={},d=i.createContext(t);function r(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);
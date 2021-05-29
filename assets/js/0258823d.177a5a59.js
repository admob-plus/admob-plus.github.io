(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[4152],{1080:function(t,e,a){"use strict";a.d(e,{Zo:function(){return o},kt:function(){return N}});var n=a(3289);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),m=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},o=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,o=l(t,["components","mdxType","originalType","parentName"]),s=m(a),N=r,u=s["".concat(d,".").concat(N)]||s[N]||k[N]||i;return a?n.createElement(u,p(p({ref:e},o),{},{components:a})):n.createElement(u,p({ref:e},o))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,p=new Array(i);p[0]=s;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:r,p[1]=l;for(var m=2;m<i;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},2057:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m},default:function(){return k}});var n=a(379),r=a(8988),i=(a(3289),a(1080)),p=["components"],l={id:"admobplusplugin",title:"Interface: AdMobPlusPlugin",sidebar_label:"AdMobPlusPlugin",sidebar_position:0,custom_edit_url:null},d={unversionedId:"capacitor/api/interfaces/admobplusplugin",id:"capacitor/api/interfaces/admobplusplugin",isDocsHomePage:!1,title:"Interface: AdMobPlusPlugin",description:"Methods",source:"@site/docs/capacitor/api/interfaces/admobplusplugin.md",sourceDirName:"capacitor/api/interfaces",slug:"/capacitor/api/interfaces/admobplusplugin",permalink:"/docs/capacitor/api/interfaces/admobplusplugin",editUrl:null,version:"current",sidebar_label:"AdMobPlusPlugin",sidebarPosition:0,frontMatter:{id:"admobplusplugin",title:"Interface: AdMobPlusPlugin",sidebar_label:"AdMobPlusPlugin",sidebar_position:0,custom_edit_url:null},sidebar:"docs",previous:{title:"Class: RewardedInterstitialAd",permalink:"/docs/capacitor/api/classes/rewardedinterstitialad"},next:{title:"Interface: BannerAdOptions",permalink:"/docs/capacitor/api/interfaces/banneradoptions"}},m=[{value:"Methods",id:"methods",children:[{value:"addListener",id:"addlistener",children:[]},{value:"bannerHide",id:"bannerhide",children:[]},{value:"bannerShow",id:"bannershow",children:[]},{value:"configRequest",id:"configrequest",children:[]},{value:"configure",id:"configure",children:[]},{value:"interstitialLoad",id:"interstitialload",children:[]},{value:"interstitialShow",id:"interstitialshow",children:[]},{value:"requestTrackingAuthorization",id:"requesttrackingauthorization",children:[]},{value:"rewardedInterstitialLoad",id:"rewardedinterstitialload",children:[]},{value:"rewardedInterstitialShow",id:"rewardedinterstitialshow",children:[]},{value:"rewardedLoad",id:"rewardedload",children:[]},{value:"rewardedShow",id:"rewardedshow",children:[]},{value:"start",id:"start",children:[]}]}],o={toc:m};function k(t){var e=t.components,a=(0,r.Z)(t,p);return(0,i.kt)("wrapper",(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"addlistener"},"addListener"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"addListener"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"eventName"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"listenerFunc"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"event"),": ",(0,i.kt)("em",{parentName:"p"},"any"),") => ",(0,i.kt)("em",{parentName:"p"},"void"),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<PluginListenerHandle",">"," & PluginListenerHandle"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"eventName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"listenerFunc")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"event"),": ",(0,i.kt)("em",{parentName:"td"},"any"),") => ",(0,i.kt)("em",{parentName:"td"},"void"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<PluginListenerHandle",">"," & PluginListenerHandle"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/ba12995/packages/capacitor/src/definitions.ts#L58"},"definitions.ts:58")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"bannerhide"},"bannerHide"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"bannerHide"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"opts"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),": ",(0,i.kt)("em",{parentName:"p"},"number"),"  }): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts.id")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/ba12995/packages/capacitor/src/definitions.ts#L40"},"definitions.ts:40")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"bannershow"},"bannerShow"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"bannerShow"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"opts"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"adUnitId"),": ",(0,i.kt)("em",{parentName:"p"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),": ",(0,i.kt)("em",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"position?"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"top"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"bottom"'),"  }): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts.adUnitId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts.id")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts.position?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"top"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"bottom"'))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/ba12995/packages/capacitor/src/definitions.ts#L35"},"definitions.ts:35")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"configrequest"},"configRequest"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"configRequest"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"requestConfig"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/capacitor/api#requestconfig"},(0,i.kt)("em",{parentName:"a"},"RequestConfig")),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"requestConfig")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/capacitor/api#requestconfig"},(0,i.kt)("em",{parentName:"a"},"RequestConfig")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/ba12995/packages/capacitor/src/definitions.ts#L33"},"definitions.ts:33")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"configure"},"configure"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"configure"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"config"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/capacitor/api#admobconfig"},(0,i.kt)("em",{parentName:"a"},"AdMobConfig")),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"config")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/capacitor/api#admobconfig"},(0,i.kt)("em",{parentName:"a"},"AdMobConfig")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/ba12995/packages/capacitor/src/definitions.ts#L32"},"definitions.ts:32")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"interstitialload"},"interstitialLoad"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"interstitialLoad"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"opts"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"adUnitId"),": ",(0,i.kt)("em",{parentName:"p"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),": ",(0,i.kt)("em",{parentName:"p"},"number"),"  }): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts.adUnitId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts.id")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/ba12995/packages/capacitor/src/definitions.ts#L42"},"definitions.ts:42")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"interstitialshow"},"interstitialShow"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"interstitialShow"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"opts"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),": ",(0,i.kt)("em",{parentName:"p"},"number"),"  }): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h4",{id:"parameters-6"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts.id")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/ba12995/packages/capacitor/src/definitions.ts#L43"},"definitions.ts:43")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"requesttrackingauthorization"},"requestTrackingAuthorization"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"requestTrackingAuthorization"),"(): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"status"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/capacitor/api/enums/trackingauthorizationstatus"},(0,i.kt)("em",{parentName:"a"},"TrackingAuthorizationStatus")),"  }",">"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"status"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/capacitor/api/enums/trackingauthorizationstatus"},(0,i.kt)("em",{parentName:"a"},"TrackingAuthorizationStatus")),"  }",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/ba12995/packages/capacitor/src/definitions.ts#L54"},"definitions.ts:54")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"rewardedinterstitialload"},"rewardedInterstitialLoad"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"rewardedInterstitialLoad"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"opts"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"adUnitId"),": ",(0,i.kt)("em",{parentName:"p"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),": ",(0,i.kt)("em",{parentName:"p"},"number"),"  }): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h4",{id:"parameters-7"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts.adUnitId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts.id")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/ba12995/packages/capacitor/src/definitions.ts#L48"},"definitions.ts:48")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"rewardedinterstitialshow"},"rewardedInterstitialShow"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"rewardedInterstitialShow"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"opts"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),": ",(0,i.kt)("em",{parentName:"p"},"number"),"  }): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h4",{id:"parameters-8"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts.id")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/ba12995/packages/capacitor/src/definitions.ts#L52"},"definitions.ts:52")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"rewardedload"},"rewardedLoad"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"rewardedLoad"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"opts"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"adUnitId"),": ",(0,i.kt)("em",{parentName:"p"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),": ",(0,i.kt)("em",{parentName:"p"},"number"),"  }): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h4",{id:"parameters-9"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts.adUnitId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts.id")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/ba12995/packages/capacitor/src/definitions.ts#L45"},"definitions.ts:45")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"rewardedshow"},"rewardedShow"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"rewardedShow"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"opts"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),": ",(0,i.kt)("em",{parentName:"p"},"number"),"  }): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h4",{id:"parameters-10"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts.id")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/ba12995/packages/capacitor/src/definitions.ts#L46"},"definitions.ts:46")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"start"},"start"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"start"),"(): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/ba12995/packages/capacitor/src/definitions.ts#L31"},"definitions.ts:31")))}k.isMDXComponent=!0}}]);
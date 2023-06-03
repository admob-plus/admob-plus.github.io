"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[2057],{8570:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(79);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,k=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5878:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var a=n(2203),r=n(915),o=(n(79),n(8570)),i=["components"],s={id:"Consent",title:"Class: Consent",sidebar_label:"Consent",sidebar_position:0,custom_edit_url:null},l=void 0,d={unversionedId:"cordova/consent/api/classes/Consent",id:"cordova/consent/api/classes/Consent",title:"Class: Consent",description:"Constructors",source:"@site/docs/cordova/consent/api/classes/Consent.md",sourceDirName:"cordova/consent/api/classes",slug:"/cordova/consent/api/classes/Consent",permalink:"/docs/cordova/consent/api/classes/Consent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Consent",title:"Class: Consent",sidebar_label:"Consent",sidebar_position:0,custom_edit_url:null},sidebar:"docs",previous:{title:"TrackingAuthorizationStatus",permalink:"/docs/cordova/consent/api/enums/TrackingAuthorizationStatus"},next:{title:"ConsentForm",permalink:"/docs/cordova/consent/api/classes/ConsentForm"}},p={},u=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"ConsentStatus",id:"consentstatus",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"DebugGeography",id:"debuggeography",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"FormStatus",id:"formstatus",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"Methods",id:"methods",level:2},{value:"getConsentStatus",id:"getconsentstatus",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"getFormStatus",id:"getformstatus",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"loadForm",id:"loadform",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"requestInfoUpdate",id:"requestinfoupdate",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"requestTrackingAuthorization",id:"requesttrackingauthorization",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"reset",id:"reset",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"trackingAuthorizationStatus",id:"trackingauthorizationstatus",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-10",level:4}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"new Consent"),"()"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/466990d/packages/cordova-consent/src/www/index.ts#L45"},"index.ts:45")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"consentstatus"},"ConsentStatus"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"ConsentStatus"),": typeof ",(0,o.kt)("inlineCode",{parentName:"p"},"ConsentStatus")," = ",(0,o.kt)("inlineCode",{parentName:"p"},"ConsentStatus")),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/466990d/packages/cordova-consent/src/www/index.ts#L41"},"index.ts:41")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"debuggeography"},"DebugGeography"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"DebugGeography"),": typeof ",(0,o.kt)("a",{parentName:"p",href:"/docs/cordova/consent/api/enums/DebugGeography"},(0,o.kt)("inlineCode",{parentName:"a"},"DebugGeography"))," = ",(0,o.kt)("inlineCode",{parentName:"p"},"DebugGeography")),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/466990d/packages/cordova-consent/src/www/index.ts#L42"},"index.ts:42")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"formstatus"},"FormStatus"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"FormStatus"),": typeof ",(0,o.kt)("a",{parentName:"p",href:"/docs/cordova/consent/api/enums/FormStatus"},(0,o.kt)("inlineCode",{parentName:"a"},"FormStatus"))," = ",(0,o.kt)("inlineCode",{parentName:"p"},"FormStatus")),(0,o.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/466990d/packages/cordova-consent/src/www/index.ts#L43"},"index.ts:43")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"getconsentstatus"},"getConsentStatus"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"getConsentStatus"),"(): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"ConsentStatus"),">"),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"ConsentStatus"),">"),(0,o.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/466990d/packages/cordova-consent/src/www/index.ts#L77"},"index.ts:77")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"getformstatus"},"getFormStatus"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"getFormStatus"),"(): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/cordova/consent/api/enums/FormStatus"},(0,o.kt)("inlineCode",{parentName:"a"},"FormStatus")),">"),(0,o.kt)("h4",{id:"returns-1"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/cordova/consent/api/enums/FormStatus"},(0,o.kt)("inlineCode",{parentName:"a"},"FormStatus")),">"),(0,o.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/466990d/packages/cordova-consent/src/www/index.ts#L82"},"index.ts:82")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"loadform"},"loadForm"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"loadForm"),"(): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/cordova/consent/api/classes/ConsentForm"},(0,o.kt)("inlineCode",{parentName:"a"},"ConsentForm")),">"),(0,o.kt)("h4",{id:"returns-2"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/cordova/consent/api/classes/ConsentForm"},(0,o.kt)("inlineCode",{parentName:"a"},"ConsentForm")),">"),(0,o.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/466990d/packages/cordova-consent/src/www/index.ts#L91"},"index.ts:91")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"requestinfoupdate"},"requestInfoUpdate"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"requestInfoUpdate"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"opts")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"RequestInfoUpdateOptions"))))),(0,o.kt)("h4",{id:"returns-3"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,o.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/466990d/packages/cordova-consent/src/www/index.ts#L87"},"index.ts:87")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"requesttrackingauthorization"},"requestTrackingAuthorization"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"requestTrackingAuthorization"),"(): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"false")," ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/cordova/consent/api/enums/TrackingAuthorizationStatus"},(0,o.kt)("inlineCode",{parentName:"a"},"TrackingAuthorizationStatus")),">"),(0,o.kt)("h4",{id:"returns-4"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"false")," ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/cordova/consent/api/enums/TrackingAuthorizationStatus"},(0,o.kt)("inlineCode",{parentName:"a"},"TrackingAuthorizationStatus")),">"),(0,o.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/466990d/packages/cordova-consent/src/www/index.ts#L63"},"index.ts:63")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"reset"},"reset"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"reset"),"(): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,o.kt)("h4",{id:"returns-5"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,o.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/466990d/packages/cordova-consent/src/www/index.ts#L96"},"index.ts:96")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"trackingauthorizationstatus"},"trackingAuthorizationStatus"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"trackingAuthorizationStatus"),"(): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"false")," ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/cordova/consent/api/enums/TrackingAuthorizationStatus"},(0,o.kt)("inlineCode",{parentName:"a"},"TrackingAuthorizationStatus")),">"),(0,o.kt)("h4",{id:"returns-6"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"false")," ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/cordova/consent/api/enums/TrackingAuthorizationStatus"},(0,o.kt)("inlineCode",{parentName:"a"},"TrackingAuthorizationStatus")),">"),(0,o.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/466990d/packages/cordova-consent/src/www/index.ts#L49"},"index.ts:49")))}m.isMDXComponent=!0}}]);
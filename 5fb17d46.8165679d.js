(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{123:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),d=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=d(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=d(t),b=o,m=u["".concat(i,".").concat(b)]||u[b]||s[b]||a;return t?r.a.createElement(m,c(c({ref:n},l),{},{components:t})):r.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},91:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return d}));var o=t(3),r=t(7),a=(t(0),t(123)),i={id:"ionic",title:"Ionic",sidebar_label:"Installation"},c={unversionedId:"ionic",id:"version-0.x/ionic",isDocsHomePage:!1,title:"Ionic",description:"Installation",source:"@site/versioned_docs/version-0.x/ionic.md",slug:"/ionic",permalink:"/docs/0.x/ionic",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/versioned_docs/version-0.x/ionic.md",version:"0.x",sidebar_label:"Installation",sidebar:"version-0.x/docs",previous:{title:"Designed for Families",permalink:"/docs/0.x/designed-for-families"},next:{title:"Common Ad Request Options",permalink:"/docs/0.x/ad-request-options"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Add Plugin to Your App&#39;s Module",id:"add-plugin-to-your-apps-module",children:[]}],l={toc:p};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"ionic cordova plugin add cordova-admob-plus --variable APP_ID_ANDROID=ca-app-pub-xxx~xxx --variable APP_ID_IOS=ca-app-pub-xxx~xxx\nnpm install --save ionic-admob\n")),Object(a.b)("p",null,"If your project depends on ",Object(a.b)("inlineCode",{parentName:"p"},"@ionic-native/core@beta"),", ",Object(a.b)("inlineCode",{parentName:"p"},"@admob-plus/ionic")," should be used instead of ",Object(a.b)("inlineCode",{parentName:"p"},"ionic-admob"),"."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Ionic team and community maintain ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://ionicframework.com/docs/native/admob-plus/"}),"a native plugin")," too.\nDue to different release cycle, it may get outdated and break sometime.")),Object(a.b)("h2",{id:"add-plugin-to-your-apps-module"},"Add Plugin to Your App's Module"),Object(a.b)("p",null,"After installing a plugin\u2019s package, add it to your app\u2019s ",Object(a.b)("inlineCode",{parentName:"p"},"NgModule"),"."),Object(a.b)("p",null,"Default is path ",Object(a.b)("inlineCode",{parentName:"p"},"src/app/app.module.ts"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),'...\n\nimport { AdMob } from "ionic-admob";\n\n@NgModule({\n  ...\n\n  providers: [\n    ...\n    AdMob,\n    ...\n  ]\n  ...\n})\nexport class AppModule { }\n')),Object(a.b)("p",null,"Then you would be able to inject ",Object(a.b)("inlineCode",{parentName:"p"},"AdMob")," instance to component."),Object(a.b)("p",null,"For example, edit path ",Object(a.b)("inlineCode",{parentName:"p"},"src/app/app.component.ts"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),'import { AdMob } from "ionic-admob";\n\nconstructor(private admob: AdMob) {\n    ...\n\n    platform.ready().then(() => {\n        admob.banner.show({ id: "test" });\n    });\n}\n\n')))}d.isMDXComponent=!0}}]);
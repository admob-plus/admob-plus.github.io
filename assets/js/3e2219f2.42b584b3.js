"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[1642],{1080:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(3289);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2749:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var r=t(2),o=t(189),a=(t(3289),t(1080)),i=["components"],l={id:"installation",title:"Installation",sidebar_label:"Installation",slug:"/"},p=void 0,s={unversionedId:"installation",id:"version-0.x/installation",isDocsHomePage:!1,title:"Installation",description:"Via Cordova CLI:",source:"@site/versioned_docs/version-0.x/installation.md",sourceDirName:".",slug:"/",permalink:"/docs/0.x/",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/versioned_docs/version-0.x/installation.md",version:"0.x",frontMatter:{id:"installation",title:"Installation",sidebar_label:"Installation",slug:"/"},sidebar:"version-0.x/docs",next:{title:"Banner Ad",permalink:"/docs/0.x/show-banner"}},d=[{value:"With Consent SDK",id:"with-consent-sdk",children:[]},{value:"Using Ionic",id:"using-ionic",children:[]}],c={toc:d};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Via ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cordova"},"Cordova CLI"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cordova plugin add cordova-admob-plus --variable APP_ID_ANDROID=ca-app-pub-xxx~xxx --variable APP_ID_IOS=ca-app-pub-xxx~xxx\n")),(0,a.kt)("p",null,"For Android developer, ",(0,a.kt)("inlineCode",{parentName:"p"},"com.google.android.gms:play-services-ads:$PLAY_SERVICES_VERSION")," is available for configuration, the default is ",(0,a.kt)("inlineCode",{parentName:"p"},"--PLAY_SERVICES_VERSION=19.6.0"),"."),(0,a.kt)("p",null,"When using with other plugins and encountering errors, try the following to fix."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cordova plugin add cordova-plugin-androidx\ncordova plugin add cordova-plugin-androidx-adapter\n")),(0,a.kt)("p",null,"or add ",(0,a.kt)("inlineCode",{parentName:"p"},'<preference name="AndroidXEnabled" value="true" />')," to ",(0,a.kt)("inlineCode",{parentName:"p"},"config.xml")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"Cordova>=9"),"."),(0,a.kt)("p",null,"For iOS developer,"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},'<preference name="SwiftVersion" value="5.3" />')," to the section ",(0,a.kt)("inlineCode",{parentName:"li"},'<platform name="ios">')," in ",(0,a.kt)("inlineCode",{parentName:"li"},"config.xml")),(0,a.kt)("li",{parentName:"ul"},"After adding this preference, you need to run ",(0,a.kt)("inlineCode",{parentName:"li"},"cordova platform remove ios")," then ",(0,a.kt)("inlineCode",{parentName:"li"},"cordova platform add ios")," to take effect"),(0,a.kt)("li",{parentName:"ul"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"pod repo update")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"cd platforms/ios && pod install --repo-update")," to ensure latest SDK is ready")),(0,a.kt)("h2",{id:"with-consent-sdk"},"With Consent SDK"),(0,a.kt)("p",null,"In order to fulfill GDPR, it is important to ask user's consent before displaying personalized ads."),(0,a.kt)("p",null,"Install ",(0,a.kt)("inlineCode",{parentName:"p"},"cordova-plugin-consent")," and following ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/master/examples/consent/www/js/index.js#L15"},"the example code"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cordova plugin add cordova-plugin-consent\n")),(0,a.kt)("h2",{id:"using-ionic"},"Using Ionic"),(0,a.kt)("p",null,"Refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.x/ionic"},"ionic guide")," to get started."))}u.isMDXComponent=!0}}]);
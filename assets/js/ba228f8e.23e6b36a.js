"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[7319],{1080:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(3289);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9335:function(e,n,t){var r=t(3289);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},2154:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(3289),a=t(9546);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(2238),i="tabItem_101-",u="tabItemActive_228O";var c=function(e){var n,t=e.lazy,a=e.block,c=e.defaultValue,p=e.values,s=e.groupId,d=e.className,m=r.Children.toArray(e.children),f=null!=p?p:m.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=c?c:null==(n=m.find((function(e){return e.props.default})))?void 0:n.props.value,g=o(),b=g.tabGroupChoices,k=g.setTabGroupChoices,y=(0,r.useState)(v),x=y[0],h=y[1],O=[];if(null!=s){var w=b[s];null!=w&&w!==x&&f.some((function(e){return e.value===w}))&&h(w)}var N=function(e){var n=e.currentTarget,t=O.indexOf(n),r=f[t].value;h(r),null!=s&&(k(s,r),setTimeout((function(){var e,t,r,a,o,l,i,c;(e=n.getBoundingClientRect(),t=e.top,r=e.left,a=e.bottom,o=e.right,l=window,i=l.innerHeight,c=l.innerWidth,t>=0&&o<=c&&a<=i&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(u),setTimeout((function(){return n.classList.remove(u)}),2e3))}),150))},C=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.target)+1;t=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.target)-1;t=O[a]||O[O.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},d)},f.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":x===n}),key:n,ref:function(e){return O.push(e)},onKeyDown:C,onFocus:N,onClick:N},null!=t?t:n)}))),t?(0,r.cloneElement)(m.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}},9546:function(e,n,t){var r=(0,t(3289).createContext)(void 0);n.Z=r},9551:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return f}});var r=t(1629),a=t(7322),o=(t(3289),t(1080)),l=t(2154),i=t(9335),u=["components"],c={title:"Installation",sidebar_label:"Installation"},p=void 0,s={unversionedId:"cordova/installation",id:"version-1.x/cordova/installation",isDocsHomePage:!1,title:"Installation",description:"Or via Cordova CLI:",source:"@site/versioned_docs/version-1.x/cordova/installation.mdx",sourceDirName:"cordova",slug:"/cordova/installation",permalink:"/docs/1.x/cordova/installation",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/versioned_docs/version-1.x/cordova/installation.mdx",tags:[],version:"1.x",frontMatter:{title:"Installation",sidebar_label:"Installation"},sidebar:"version-1.x/docs",previous:{title:"Getting Started",permalink:"/docs/1.x/cordova"},next:{title:"App Open",permalink:"/docs/1.x/cordova/ads/app-open"}},d=[{value:"Proguard",id:"proguard",children:[]}],m={toc:d};function f(e){var n=e.components,t=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx admob-plus install -p cordova\n")),(0,o.kt)("p",null,"Or via ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cordova"},"Cordova CLI"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cordova plugin add admob-plus-cordova --save --variable APP_ID_ANDROID=ca-app-pub-xxx~xxx --variable APP_ID_IOS=ca-app-pub-xxx~xxx\n")),(0,o.kt)(l.Z,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"android",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"com.google.android.gms:play-services-ads:$PLAY_SERVICES_VERSION")," is available for configuration,\nthe default is ",(0,o.kt)("inlineCode",{parentName:"p"},"--PLAY_SERVICES_VERSION=20.1.0"),"."),(0,o.kt)("p",null,"When using with other plugins and encountering errors, set ",(0,o.kt)("inlineCode",{parentName:"p"},"AndroidXEnabled")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="config.xml" {3}',title:'"config.xml"',"{3}":!0},'<widget>\n    <platform name="android">\n        <preference name="AndroidXEnabled" value="true" />\n    </platform>\n</widget>\n')),(0,o.kt)("p",null,"Or add the following plugins for ",(0,o.kt)("inlineCode",{parentName:"p"},"Cordova<9"),","),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cordova plugin add cordova-plugin-androidx\ncordova plugin add cordova-plugin-androidx-adapter\n")),(0,o.kt)("h3",{id:"proguard"},"Proguard"),(0,o.kt)("p",null,"Add these rules to your proguard configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-keep public class admob.plugin.ads.** {\n  public *;\n}\n"))),(0,o.kt)(i.Z,{value:"ios",mdxType:"TabItem"},(0,o.kt)("p",null,"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"deployment-target")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"SwiftVersion"),","),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="config.xml" {3-4}',title:'"config.xml"',"{3-4}":!0},'<widget>\n    <platform name="ios">\n        <preference name="deployment-target" value="12.0" />\n        <preference name="SwiftVersion" value="5.3" />\n    </platform>\n</widget>\n')),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"cordova platform remove ios")," then ",(0,o.kt)("inlineCode",{parentName:"p"},"cordova platform add ios")," to take effect."),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"pod repo update")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"cd platforms/ios && pod install --repo-update")," to ensure latest SDK is ready."))))}f.isMDXComponent=!0},2238:function(e,n,t){function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}t.d(n,{Z:function(){return a}})}}]);
"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[7319],{1080:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(3289);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7051:function(e,t,n){var r=n(3289);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},3578:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(3289),a=n(1443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(2238),i="tabItem_WE8E",u="tabItemActive_2b84";var c=37,s=39;var p=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,p=e.values,d=e.groupId,m=e.className,f=o(),v=f.tabGroupChoices,g=f.setTabGroupChoices,b=(0,r.useState)(a),k=b[0],y=b[1],x=r.Children.toArray(e.children),h=[];if(null!=d){var N=v[d];null!=N&&N!==k&&p.some((function(e){return e.value===N}))&&y(N)}var O=function(e){var t=e.currentTarget,n=h.indexOf(t),r=p[n].value;y(r),null!=d&&(g(d,r),setTimeout((function(){var e,n,r,a,o,l,i,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,l=window,i=l.innerHeight,c=l.innerWidth,n>=0&&o<=c&&a<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},w=function(e){var t,n;switch(e.keyCode){case s:var r=h.indexOf(e.target)+1;n=h[r]||h[0];break;case c:var a=h.indexOf(e.target)-1;n=h[a]||h[h.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":k===t}),key:t,ref:function(e){return h.push(e)},onKeyDown:w,onFocus:O,onClick:O},n)}))),t?(0,r.cloneElement)(x.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},x.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},1443:function(e,t,n){var r=(0,n(3289).createContext)(void 0);t.Z=r},1924:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var r=n(2),a=n(189),o=(n(3289),n(1080)),l=n(3578),i=n(7051),u=["components"],c={title:"Installation",sidebar_label:"Installation"},s=void 0,p={unversionedId:"cordova/installation",id:"version-1.x/cordova/installation",isDocsHomePage:!1,title:"Installation",description:"`shell",source:"@site/versioned_docs/version-1.x/cordova/installation.mdx",sourceDirName:"cordova",slug:"/cordova/installation",permalink:"/docs/1.x/cordova/installation",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/versioned_docs/version-1.x/cordova/installation.mdx",version:"1.x",frontMatter:{title:"Installation",sidebar_label:"Installation"},sidebar:"version-1.x/docs",previous:{title:"Getting Started",permalink:"/docs/1.x/cordova"},next:{title:"App Open",permalink:"/docs/1.x/cordova/ads/app-open"}},d=[{value:"Proguard",id:"proguard",children:[]}],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx admob-plus install -p cordova\n")),(0,o.kt)("p",null,"Or via ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cordova"},"Cordova CLI"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cordova plugin add admob-plus-cordova --save --variable APP_ID_ANDROID=ca-app-pub-xxx~xxx --variable APP_ID_IOS=ca-app-pub-xxx~xxx\n")),(0,o.kt)(l.Z,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"android",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"com.google.android.gms:play-services-ads:$PLAY_SERVICES_VERSION")," is available for configuration,\nthe default is ",(0,o.kt)("inlineCode",{parentName:"p"},"--PLAY_SERVICES_VERSION=20.1.0"),"."),(0,o.kt)("p",null,"When using with other plugins and encountering errors, set ",(0,o.kt)("inlineCode",{parentName:"p"},"AndroidXEnabled")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="config.xml" {3}',title:'"config.xml"',"{3}":!0},'<widget>\n    <platform name="android">\n        <preference name="AndroidXEnabled" value="true" />\n    </platform>\n</widget>\n')),(0,o.kt)("p",null,"Or add the following plugins for ",(0,o.kt)("inlineCode",{parentName:"p"},"Cordova<9"),","),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cordova plugin add cordova-plugin-androidx\ncordova plugin add cordova-plugin-androidx-adapter\n")),(0,o.kt)("h3",{id:"proguard"},"Proguard"),(0,o.kt)("p",null,"Add these rules to your proguard configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-keep public class admob.plugin.ads.** {\n  public *;\n}\n"))),(0,o.kt)(i.Z,{value:"ios",mdxType:"TabItem"},(0,o.kt)("p",null,"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"deployment-target")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"SwiftVersion"),","),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="config.xml" {3-4}',title:'"config.xml"',"{3-4}":!0},'<widget>\n    <platform name="ios">\n        <preference name="deployment-target" value="12.0" />\n        <preference name="SwiftVersion" value="5.3" />\n    </platform>\n</widget>\n')),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"cordova platform remove ios")," then ",(0,o.kt)("inlineCode",{parentName:"p"},"cordova platform add ios")," to take effect."),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"pod repo update")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"cd platforms/ios && pod install --repo-update")," to ensure latest SDK is ready."))))}f.isMDXComponent=!0},2238:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);
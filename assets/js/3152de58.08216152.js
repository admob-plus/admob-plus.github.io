"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[1744],{8570:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(79);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[d]="string"==typeof e?e:a,l[1]=u;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8866:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(79),a=n(9841),o={tabItem:"tabItem_vkkt"};function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},6741:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(2203),a=n(79),o=n(9841),l=n(1291),u=n(7911),i=n(9408),c=n(6842),s=n(9442);function d(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,u.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,i._X)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function v(e){var t,n,r,o,l=e.defaultValue,u=e.queryString,i=void 0!==u&&u,c=e.groupId,d=p(e),v=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:d})})),b=v[0],g=v[1],h=m({queryString:i,groupId:c}),y=h[0],k=h[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,s.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),x=w[0],N=w[1],E=function(){var e=null!=y?y:x;return f({value:e,tabValues:d})?e:null}();return(0,a.useLayoutEffect)((function(){E&&g(E)}),[E]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);g(e),k(e),N(e)}),[k,N,d]),tabValues:d}}var b=n(1022),g={tabList:"tabList_rJtd",tabItem:"tabItem_bRu2"};function h(e){var t=e.className,n=e.block,u=e.selectedValue,i=e.selectValue,c=e.tabValues,s=[],d=(0,l.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=s.indexOf(t),r=c[n].value;r!==u&&(d(t),i(r))},f=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var r,a=s.indexOf(e.currentTarget)+1;n=null!=(r=s[a])?r:s[0];break;case"ArrowLeft":var o,l=s.indexOf(e.currentTarget)-1;n=null!=(o=s[l])?o:s[s.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return s.push(e)},onKeyDown:f,onClick:p},l,{className:(0,o.Z)("tabs__item",g.tabItem,null==l?void 0:l.className,{"tabs__item--active":u===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,r=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=o.find((function(e){return e.props.value===r}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function k(e){var t=v(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},a.createElement(h,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function w(e){var t=(0,b.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},9057:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return f}});var r=n(2203),a=n(915),o=(n(79),n(8570)),l=n(6741),u=n(8866),i=["components"],c={title:"Installation",sidebar_label:"Installation"},s=void 0,d={unversionedId:"cordova/installation",id:"cordova/installation",title:"Installation",description:"Or via Cordova CLI:",source:"@site/docs/cordova/installation.mdx",sourceDirName:"cordova",slug:"/cordova/installation",permalink:"/docs/cordova/installation",draft:!1,editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/docs/cordova/installation.mdx",tags:[],version:"current",frontMatter:{title:"Installation",sidebar_label:"Installation"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/cordova"},next:{title:"App Open",permalink:"/docs/cordova/ads/app-open"}},p={},f=[{value:"Proguard",id:"proguard",level:3}],m={toc:f},v="wrapper";function b(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(v,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx admob-plus install -p cordova\n")),(0,o.kt)("p",null,"Or via ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cordova"},"Cordova CLI"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cordova plugin add admob-plus-cordova --save --variable APP_ID_ANDROID=ca-app-pub-xxx~xxx --variable APP_ID_IOS=ca-app-pub-xxx~xxx\n")),(0,o.kt)(l.Z,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"android",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"com.google.android.gms:play-services-ads:$PLAY_SERVICES_VERSION")," is available for configuration,\nthe default is ",(0,o.kt)("inlineCode",{parentName:"p"},"--PLAY_SERVICES_VERSION=22.1.0"),"."),(0,o.kt)("p",null,"When using with other plugins and encountering errors, set ",(0,o.kt)("inlineCode",{parentName:"p"},"AndroidXEnabled")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="config.xml" {3}',title:'"config.xml"',"{3}":!0},'<widget>\n    <platform name="android">\n        <preference name="AndroidXEnabled" value="true" />\n    </platform>\n</widget>\n')),(0,o.kt)("p",null,"Or add the following plugins for ",(0,o.kt)("inlineCode",{parentName:"p"},"Cordova<9"),","),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cordova plugin add cordova-plugin-androidx\ncordova plugin add cordova-plugin-androidx-adapter\n")),(0,o.kt)("h3",{id:"proguard"},"Proguard"),(0,o.kt)("p",null,"Add these rules to your proguard configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-keep public class admob.plugin.ads.** {\n  public *;\n}\n"))),(0,o.kt)(u.Z,{value:"ios",mdxType:"TabItem"},(0,o.kt)("p",null,"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"deployment-target")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"SwiftVersion"),","),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="config.xml" {3-4}',title:'"config.xml"',"{3-4}":!0},'<widget>\n    <platform name="ios">\n        <preference name="deployment-target" value="12.0" />\n        <preference name="SwiftVersion" value="5.3" />\n    </platform>\n</widget>\n')),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"cordova platform remove ios")," then ",(0,o.kt)("inlineCode",{parentName:"p"},"cordova platform add ios")," to take effect."),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"pod repo update")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"cd platforms/ios && pod install --repo-update")," to ensure latest SDK is ready."))))}b.isMDXComponent=!0}}]);
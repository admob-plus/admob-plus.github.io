"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[5273],{8570:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(79);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8866:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(79),a=n(9841),i={tabItem:"tabItem_vkkt"};function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,l),hidden:n},t)}},6741:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(2203),a=n(79),i=n(9841),l=n(1291),o=n(7911),u=n(9408),s=n(6842),c=n(9442);function d(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,i=(0,o.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,u._X)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(i.location.search);t.set(l,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[l,i])]}function v(e){var t,n,r,i,l=e.defaultValue,o=e.queryString,u=void 0!==o&&o,s=e.groupId,d=p(e),v=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:d})})),b=v[0],y=v[1],g=m({queryString:u,groupId:s}),h=g[0],k=g[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Nk)(t),r=n[0],i=n[1],[r,(0,a.useCallback)((function(e){t&&i.set(e)}),[t,i])]),x=w[0],T=w[1],E=function(){var e=null!=h?h:x;return f({value:e,tabValues:d})?e:null}();return(0,a.useLayoutEffect)((function(){E&&y(E)}),[E]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);y(e),k(e),T(e)}),[k,T,d]),tabValues:d}}var b=n(1022),y={tabList:"tabList_rJtd",tabItem:"tabItem_bRu2"};function g(e){var t=e.className,n=e.block,o=e.selectedValue,u=e.selectValue,s=e.tabValues,c=[],d=(0,l.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==o&&(d(t),u(r))},f=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var i,l=c.indexOf(e.currentTarget)-1;n=null!=(i=c[l])?i:c[c.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return c.push(e)},onKeyDown:f,onClick:p},l,{className:(0,i.Z)("tabs__item",y.tabItem,null==l?void 0:l.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function h(e){var t=e.lazy,n=e.children,r=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=i.find((function(e){return e.props.value===r}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function k(e){var t=v(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",y.tabList)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(h,(0,r.Z)({},e,t)))}function w(e){var t=(0,b.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},5219:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return f}});var r=n(2203),a=n(915),i=(n(79),n(8570)),l=n(6741),o=n(8866),u=["components"],s={title:"Installation",sidebar_label:"Installation",slug:"/react-native"},c=void 0,d={unversionedId:"react-native/installation",id:"version-1.x/react-native/installation",title:"Installation",description:"<Tabs",source:"@site/versioned_docs/version-1.x/react-native/installation.mdx",sourceDirName:"react-native",slug:"/react-native",permalink:"/docs/1.x/react-native",draft:!1,editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/versioned_docs/version-1.x/react-native/installation.mdx",tags:[],version:"1.x",frontMatter:{title:"Installation",sidebar_label:"Installation",slug:"/react-native"},sidebar:"version-1.x/docs",previous:{title:"RewardedInterstitialAd",permalink:"/docs/1.x/ionic/api/classes/rewardedinterstitialad"},next:{title:"Interstitial",permalink:"/docs/1.x/react-native/ads/interstitial"}},p={},f=[],m={toc:f},v="wrapper";function b(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)(v,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @admob-plus/react-native\n")),(0,i.kt)(l.Z,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"android",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="android/app/src/main/AndroidManifest.xml" {3-9}',title:'"android/app/src/main/AndroidManifest.xml"',"{3-9}":!0},'<manifest>\n    <application>\n        <meta-data\n            android:name="com.google.android.gms.ads.APPLICATION_ID"\n            android:value="ca-app-pub-xxx~yyy" />\n\n        <meta-data\n            android:name="com.google.android.gms.ads.DELAY_APP_MEASUREMENT_INIT"\n            android:value="true" />\n  </application>\n</manifest>\n'))),(0,i.kt)(o.Z,{value:"ios",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="ios/<PROJECT_NAME>/Info.plist" {5-13}',title:'"ios/<PROJECT_NAME>/Info.plist"',"{5-13}":!0},'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n<dict>\n    <key>GADApplicationIdentifier</key>\n    <string>ca-app-pub-xxx~yyy</string>\n    <key>SKAdNetworkItems</key>\n    <array>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>cstr6suwn9.skadnetwork</string>\n        </dict>\n    </array>\n    \x3c!-- Add this if your are using requestTrackingAuthorization() --\x3e\n    <key>NSUserTrackingUsageDescription</key>\n    <string>This identifier will be used to deliver personalized ads to you.</string>\n</dict>\n</plist>\n')))))}b.isMDXComponent=!0}}]);
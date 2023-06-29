"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[6242],{8570:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(79);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},l="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),l=c(t),p=i,f=l["".concat(s,".").concat(p)]||l[p]||k[p]||a;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d[l]="string"==typeof e?e:i,o[1]=d;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9868:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(79),i=t(9841),a={tabItem:"tabItem_kAMp"};function o(e){var n=e.children,t=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(a.tabItem,o),hidden:t},n)}},4701:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(2203),i=t(79),a=t(9841),o=t(8253),d=t(7911),s=t(2894),c=t(752),u=t(5480);function l(e){return function(e){var n,t;return null!=(n=null==(t=i.Children.map(e,(function(e){if(!e||(0,i.isValidElement)(e)&&(n=e.props)&&"object"==typeof n&&"value"in n)return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function k(e){var n=e.values,t=e.children;return(0,i.useMemo)((function(){var e=null!=n?n:l(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,a=(0,d.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,i.useCallback)((function(e){if(o){var n=new URLSearchParams(a.location.search);n.set(o,e),a.replace(Object.assign({},a.location,{search:n.toString()}))}}),[o,a])]}function y(e){var n,t,r,a,o=e.defaultValue,d=e.queryString,s=void 0!==d&&d,c=e.groupId,l=k(e),y=(0,i.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var i=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:o,tabValues:l})})),g=y[0],m=y[1],w=f({queryString:s,groupId:c}),b=w[0],v=w[1],h=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),t=(0,u.Nk)(n),r=t[0],a=t[1],[r,(0,i.useCallback)((function(e){n&&a.set(e)}),[n,a])]),I=h[0],N=h[1],A=function(){var e=null!=b?b:I;return p({value:e,tabValues:l})?e:null}();return(0,i.useLayoutEffect)((function(){A&&m(A)}),[A]),{selectedValue:g,selectValue:(0,i.useCallback)((function(e){if(!p({value:e,tabValues:l}))throw new Error("Can't select invalid tab value="+e);m(e),v(e),N(e)}),[v,N,l]),tabValues:l}}var g=t(6943),m={tabList:"tabList_jOjO",tabItem:"tabItem_O8Kg"};function w(e){var n=e.className,t=e.block,d=e.selectedValue,s=e.selectValue,c=e.tabValues,u=[],l=(0,o.o5)().blockElementScrollPositionUntilNextRender,k=function(e){var n=e.currentTarget,t=u.indexOf(n),r=c[t].value;r!==d&&(l(n),s(r))},p=function(e){var n,t=null;switch(e.key){case"Enter":k(e);break;case"ArrowRight":var r,i=u.indexOf(e.currentTarget)+1;t=null!=(r=u[i])?r:u[0];break;case"ArrowLeft":var a,o=u.indexOf(e.currentTarget)-1;t=null!=(a=u[o])?a:u[u.length-1]}null==(n=t)||n.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n)},c.map((function(e){var n=e.value,t=e.label,o=e.attributes;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:d===n?0:-1,"aria-selected":d===n,key:n,ref:function(e){return u.push(e)},onKeyDown:p,onClick:k},o,{className:(0,a.Z)("tabs__item",m.tabItem,null==o?void 0:o.className,{"tabs__item--active":d===n})}),null!=t?t:n)})))}function b(e){var n=e.lazy,t=e.children,r=e.selectedValue,a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var o=a.find((function(e){return e.props.value===r}));return o?(0,i.cloneElement)(o,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},a.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})})))}function v(e){var n=y(e);return i.createElement("div",{className:(0,a.Z)("tabs-container",m.tabList)},i.createElement(w,(0,r.Z)({},e,n)),i.createElement(b,(0,r.Z)({},e,n)))}function h(e){var n=(0,g.Z)();return i.createElement(v,(0,r.Z)({key:String(n)},e))}},9518:function(e,n,t){t.r(n),t.d(n,{assets:function(){return k},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=t(2203),i=t(915),a=(t(79),t(8570)),o=t(4701),d=t(9868),s=["components"],c={title:"Installation",sidebar_label:"Installation",slug:"/capacitor"},u=void 0,l={unversionedId:"capacitor/installation",id:"capacitor/installation",title:"Installation",description:"Capacitor 3 is required, here is the upgrade guide.",source:"@site/docs/capacitor/installation.mdx",sourceDirName:"capacitor",slug:"/capacitor",permalink:"/docs/capacitor",draft:!1,editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/docs/capacitor/installation.mdx",tags:[],version:"current",frontMatter:{title:"Installation",sidebar_label:"Installation",slug:"/capacitor"},sidebar:"docs",previous:{title:"Index",permalink:"/docs/"},next:{title:"Banner",permalink:"/docs/capacitor/ads/banner"}},k={},p=[],f={toc:p},y="wrapper";function g(e){var n=e.components,t=(0,i.Z)(e,s);return(0,a.kt)(y,(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @admob-plus/capacitor\nnpx cap sync\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Capacitor 3 is required, ",(0,a.kt)("a",{parentName:"p",href:"https://capacitorjs.com/docs/v3/updating/3-0"},"here is the upgrade guide"),".")),(0,a.kt)(o.Z,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],mdxType:"Tabs"},(0,a.kt)(d.Z,{value:"android",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="android/app/src/main/AndroidManifest.xml" {3-9}',title:'"android/app/src/main/AndroidManifest.xml"',"{3-9}":!0},'<manifest>\n    <application>\n        <meta-data\n            android:name="com.google.android.gms.ads.APPLICATION_ID"\n            android:value="ca-app-pub-xxx~yyy" />\n\n        <meta-data\n            android:name="com.google.android.gms.ads.DELAY_APP_MEASUREMENT_INIT"\n            android:value="true" />\n  </application>\n</manifest>\n'))),(0,a.kt)(d.Z,{value:"ios",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="ios/App/App/Info.plist" {5-13}',title:'"ios/App/App/Info.plist"',"{5-13}":!0},'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n<dict>\n    <key>GADApplicationIdentifier</key>\n    <string>ca-app-pub-xxx~yyy</string>\n    <key>SKAdNetworkItems</key>\n    <array>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>cstr6suwn9.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>4fzdc2evr5.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>2fnua5tdw4.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>ydx93a7ass.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>5a6flpkh64.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>p78axxw29g.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>v72qych5uu.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>c6k4g5qg8m.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>s39g8k73mm.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>3qy4746246.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>3sh42y64q3.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>f38h382jlk.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>hs6bdukanm.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>prcb7njmu6.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>v4nxqhlyqp.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>wzmmz9fp6w.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>yclnxrl5pm.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>t38b2kh725.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>7ug5zh24hu.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>9rd848q2bz.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>n6fk4nfna4.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>kbd757ywx3.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>9t245vhmpl.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>4468km3ulz.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>2u9pt9hc89.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>8s468mfl3y.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>av6w8kgt66.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>klf5c3l5u5.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>ppxm28t8ap.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>424m5254lk.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>uw77j35x4d.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>578prtvx9j.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>4dzt52r2t5.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>e5fvkxwrpn.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>8c4e2ghe7u.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>zq492l623r.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>3qcr597p9d.skadnetwork</string>\n        </dict>\n    </array>\n    \x3c!-- Add this if your are using requestTrackingAuthorization() --\x3e\n    <key>NSUserTrackingUsageDescription</key>\n    <string>This identifier will be used to deliver personalized ads to you.</string>\n</dict>\n</plist>\n')))))}g.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[2404],{1080:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(3289);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=c(t),f=i,y=u["".concat(s,".").concat(f)]||u[f]||k[f]||a;return t?r.createElement(y,d(d({ref:n},l),{},{components:t})):r.createElement(y,d({ref:n},l))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,d=new Array(a);d[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,d[1]=o;for(var c=2;c<a;c++)d[c]=t[c];return r.createElement.apply(null,d)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9335:function(e,n,t){var r=t(3289);n.Z=function(e){var n=e.children,t=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},2154:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(3289),i=t(9546);var a=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},d=t(2238),o="tabItem_101-",s="tabItemActive_228O";var c=function(e){var n,t=e.lazy,i=e.block,c=e.defaultValue,l=e.values,k=e.groupId,u=e.className,f=r.Children.toArray(e.children),y=null!=l?l:f.map((function(e){return{value:e.props.value,label:e.props.label}})),p=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value,g=a(),m=g.tabGroupChoices,w=g.setTabGroupChoices,v=(0,r.useState)(p),b=v[0],I=v[1],N=[];if(null!=k){var A=m[k];null!=A&&A!==b&&y.some((function(e){return e.value===A}))&&I(A)}var h=function(e){var n=e.currentTarget,t=N.indexOf(n),r=y[t].value;I(r),null!=k&&(w(k,r),setTimeout((function(){var e,t,r,i,a,d,o,c;(e=n.getBoundingClientRect(),t=e.top,r=e.left,i=e.bottom,a=e.right,d=window,o=d.innerHeight,c=d.innerWidth,t>=0&&a<=c&&i<=o&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(s),setTimeout((function(){return n.classList.remove(s)}),2e3))}),150))},S=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.target)+1;t=N[r]||N[0];break;case"ArrowLeft":var i=N.indexOf(e.target)-1;t=N[i]||N[N.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":i},u)},y.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:b===n?0:-1,"aria-selected":b===n,className:(0,d.Z)("tabs__item",o,{"tabs__item--active":b===n}),key:n,ref:function(e){return N.push(e)},onKeyDown:S,onFocus:h,onClick:h},null!=t?t:n)}))),t?(0,r.cloneElement)(f.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==b})}))))}},9546:function(e,n,t){var r=(0,t(3289).createContext)(void 0);n.Z=r},3807:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return k},toc:function(){return u},default:function(){return y}});var r=t(1629),i=t(7322),a=(t(3289),t(1080)),d=t(2154),o=t(9335),s=["components"],c={title:"Installation",sidebar_label:"Installation",slug:"/react-native"},l=void 0,k={unversionedId:"react-native/installation",id:"react-native/installation",isDocsHomePage:!1,title:"Installation",description:"<Tabs",source:"@site/docs/react-native/installation.mdx",sourceDirName:"react-native",slug:"/react-native",permalink:"/docs/react-native",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/docs/react-native/installation.mdx",tags:[],version:"current",frontMatter:{title:"Installation",sidebar_label:"Installation",slug:"/react-native"},sidebar:"docs",previous:{title:"RewardedInterstitialAd",permalink:"/docs/ionic/api/classes/RewardedInterstitialAd"},next:{title:"Interstitial",permalink:"/docs/react-native/ads/interstitial"}},u=[],f={toc:u};function y(e){var n=e.components,t=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @admob-plus/react-native\n")),(0,a.kt)(d.Z,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"android",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="android/app/src/main/AndroidManifest.xml" {3-9}',title:'"android/app/src/main/AndroidManifest.xml"',"{3-9}":!0},'<manifest>\n    <application>\n        <meta-data\n            android:name="com.google.android.gms.ads.APPLICATION_ID"\n            android:value="ca-app-pub-xxx~yyy" />\n\n        <meta-data\n            android:name="com.google.android.gms.ads.DELAY_APP_MEASUREMENT_INIT"\n            android:value="true" />\n  </application>\n</manifest>\n'))),(0,a.kt)(o.Z,{value:"ios",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="ios/<PROJECT_NAME>/Info.plist" {5-13}',title:'"ios/<PROJECT_NAME>/Info.plist"',"{5-13}":!0},'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n<dict>\n    <key>GADApplicationIdentifier</key>\n    <string>ca-app-pub-xxx~yyy</string>\n    <key>SKAdNetworkItems</key>\n    <array>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>cstr6suwn9.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>4fzdc2evr5.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>2fnua5tdw4.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>ydx93a7ass.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>5a6flpkh64.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>p78axxw29g.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>v72qych5uu.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>c6k4g5qg8m.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>s39g8k73mm.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>3qy4746246.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>3sh42y64q3.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>f38h382jlk.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>hs6bdukanm.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>prcb7njmu6.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>v4nxqhlyqp.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>wzmmz9fp6w.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>yclnxrl5pm.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>t38b2kh725.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>7ug5zh24hu.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>9rd848q2bz.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>n6fk4nfna4.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>kbd757ywx3.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>9t245vhmpl.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>4468km3ulz.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>2u9pt9hc89.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>8s468mfl3y.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>av6w8kgt66.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>klf5c3l5u5.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>ppxm28t8ap.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>424m5254lk.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>uw77j35x4d.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>578prtvx9j.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>4dzt52r2t5.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>e5fvkxwrpn.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>8c4e2ghe7u.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>zq492l623r.skadnetwork</string>\n        </dict>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>3qcr597p9d.skadnetwork</string>\n        </dict>\n    </array>\n    \x3c!-- Add this if your are using requestTrackingAuthorization() --\x3e\n    <key>NSUserTrackingUsageDescription</key>\n    <string>This identifier will be used to deliver personalized ads to you.</string>\n</dict>\n</plist>\n')))))}y.isMDXComponent=!0},2238:function(e,n,t){function r(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}function i(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(i&&(i+=" "),i+=n);return i}t.d(n,{Z:function(){return i}})}}]);
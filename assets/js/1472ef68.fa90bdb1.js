"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[6242],{1080:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(3289);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7051:function(e,t,n){var r=n(3289);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},3578:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(3289),a=n(1443);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(2238),l="tabItem_WE8E",c="tabItemActive_2b84";var s=37,u=39;var p=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,p=e.values,d=e.groupId,m=e.className,f=i(),v=f.tabGroupChoices,b=f.setTabGroupChoices,g=(0,r.useState)(a),y=g[0],h=g[1],k=r.Children.toArray(e.children),w=[];if(null!=d){var x=v[d];null!=x&&x!==y&&p.some((function(e){return e.value===x}))&&h(x)}var N=function(e){var t=e.currentTarget,n=w.indexOf(t),r=p[n].value;h(r),null!=d&&(b(d,r),setTimeout((function(){var e,n,r,a,i,o,l,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,l=o.innerHeight,s=o.innerWidth,n>=0&&i<=s&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case u:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case s:var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:O,onFocus:N,onClick:N},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},1443:function(e,t,n){var r=(0,n(3289).createContext)(void 0);t.Z=r},1673:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var r=n(2),a=n(189),i=(n(3289),n(1080)),o=n(3578),l=n(7051),c=["components"],s={title:"Installation",sidebar_label:"Installation",slug:"/capacitor"},u=void 0,p={unversionedId:"capacitor/installation",id:"capacitor/installation",isDocsHomePage:!1,title:"Installation",description:"`shell",source:"@site/docs/capacitor/installation.mdx",sourceDirName:"capacitor",slug:"/capacitor",permalink:"/docs/capacitor",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/docs/capacitor/installation.mdx",version:"current",frontMatter:{title:"Installation",sidebar_label:"Installation",slug:"/capacitor"},sidebar:"docs",previous:{title:"Index",permalink:"/docs/"},next:{title:"Banner",permalink:"/docs/capacitor/ads/banner"}},d=[],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @admob-plus/capacitor\nnpx cap sync\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Capacitor 3 is required, ",(0,i.kt)("a",{parentName:"p",href:"https://capacitorjs.com/docs/v3/updating/3-0"},"here is the upgrade guide"),"."))),(0,i.kt)(o.Z,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"android",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="android/app/src/main/AndroidManifest.xml" {3-9}',title:'"android/app/src/main/AndroidManifest.xml"',"{3-9}":!0},'<manifest>\n    <application>\n        <meta-data\n            android:name="com.google.android.gms.ads.APPLICATION_ID"\n            android:value="ca-app-pub-xxx~yyy" />\n\n        <meta-data\n            android:name="com.google.android.gms.ads.DELAY_APP_MEASUREMENT_INIT"\n            android:value="true" />\n  </application>\n</manifest>\n'))),(0,i.kt)(l.Z,{value:"ios",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="ios/App/App/Info.plist" {5-13}',title:'"ios/App/App/Info.plist"',"{5-13}":!0},'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n<dict>\n    <key>GADApplicationIdentifier</key>\n    <string>ca-app-pub-xxx~yyy</string>\n    <key>SKAdNetworkItems</key>\n    <array>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>cstr6suwn9.skadnetwork</string>\n        </dict>\n    </array>\n    \x3c!-- Add this if your are using requestTrackingAuthorization() --\x3e\n    <key>NSUserTrackingUsageDescription</key>\n    <string>This identifier will be used to deliver personalized ads to you.</string>\n</dict>\n</plist>\n')))))}f.isMDXComponent=!0},2238:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);
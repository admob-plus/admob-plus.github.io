"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[6608],{8570:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return m}});var r=o(79);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function u(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var a=r.createContext({}),c=function(e){var t=r.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):u(u({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(o),m=n,v=d["".concat(a,".").concat(m)]||d[m]||s[m]||l;return o?r.createElement(v,u(u({ref:t},p),{},{components:o})):r.createElement(v,u({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,u=new Array(l);u[0]=d;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:n,u[1]=i;for(var c=2;c<l;c++)u[c]=o[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},2851:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var r=o(2203),n=o(915),l=(o(79),o(8570)),u=["components"],i={id:"volume-control",title:"Video ad volume control",sidebar_label:"Video ad volume control"},a=void 0,c={unversionedId:"volume-control",id:"version-0.x/volume-control",title:"Video ad volume control",description:"The device volume, controlled through volume buttons or OS-level volume slider, determines the volume for device audio output. However, apps can independently adjust volume levels relative to the device volume to tailor the audio experience.",source:"@site/versioned_docs/version-0.x/volume-control.md",sourceDirName:".",slug:"/volume-control",permalink:"/docs/0.x/volume-control",draft:!1,editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/versioned_docs/version-0.x/volume-control.md",tags:[],version:"0.x",frontMatter:{id:"volume-control",title:"Video ad volume control",sidebar_label:"Video ad volume control"},sidebar:"version-0.x/docs",previous:{title:"Test Ads",permalink:"/docs/0.x/test-ads"},next:{title:"Designed for Families",permalink:"/docs/0.x/designed-for-families"}},p={},s=[{value:"Set App Volume",id:"set-app-volume",level:2},{value:"Mute App Volume",id:"mute-app-volume",level:2}],d={toc:s};function m(e){var t=e.components,o=(0,n.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The device volume, controlled through volume buttons or OS-level volume slider, determines the volume for device audio output. However, apps can independently adjust volume levels relative to the device volume to tailor the audio experience. "),(0,l.kt)("h2",{id:"set-app-volume"},"Set App Volume"),(0,l.kt)("p",null,"Valid ad volume values range from 0.0 (silent) to 1.0 (current device volume)."),(0,l.kt)("p",null,"By default, the app volume is set to 1 (the current device volume)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"admob.setAppVolume(0.5)\n")),(0,l.kt)("h2",{id:"mute-app-volume"},"Mute App Volume"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"admob.setAppMuted(true)\n")))}m.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{123:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return v}));var r=o(0),n=o.n(r);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function u(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=n.a.createContext({}),p=function(e){var t=n.a.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):u(u({},t),e)),o},d=function(e){var t=p(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=p(o),s=r,v=d["".concat(a,".").concat(s)]||d[s]||m[s]||l;return o?n.a.createElement(v,u(u({ref:t},i),{},{components:o})):n.a.createElement(v,u({ref:t},i))}));function v(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=o.length,a=new Array(l);a[0]=s;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var i=2;i<l;i++)a[i]=o[i];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,o)}s.displayName="MDXCreateElement"},87:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return a})),o.d(t,"metadata",(function(){return u})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return p}));var r=o(3),n=o(7),l=(o(0),o(123)),a={title:"Video Ad Volume Control",sidebar_label:"Volume Control"},u={unversionedId:"cordova/volume-control",id:"cordova/volume-control",isDocsHomePage:!1,title:"Video Ad Volume Control",description:"The device volume, controlled through volume buttons or OS-level volume slider, determines the volume for device audio output. However, apps can independently adjust volume levels relative to the device volume to tailor the audio experience.",source:"@site/docs/cordova/volume-control.md",slug:"/cordova/volume-control",permalink:"/docs/cordova/volume-control",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/docs/cordova/volume-control.md",version:"current",sidebar_label:"Volume Control",sidebar:"docs",previous:{title:"Rewarded Ad",permalink:"/docs/cordova/ads/rewarded"},next:{title:"admob-plus-cordova",permalink:"/docs/cordova/api"}},c=[{value:"Set App Volume",id:"set-app-volume",children:[]},{value:"Mute App Volume",id:"mute-app-volume",children:[]}],i={toc:c};function p(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,o,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The device volume, controlled through volume buttons or OS-level volume slider, determines the volume for device audio output. However, apps can independently adjust volume levels relative to the device volume to tailor the audio experience."),Object(l.b)("h2",{id:"set-app-volume"},"Set App Volume"),Object(l.b)("p",null,"Valid ad volume values range from 0.0 (silent) to 1.0 (current device volume)."),Object(l.b)("p",null,"By default, the app volume is set to 1 (the current device volume)."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"admob.setAppVolume(0.5)\n")),Object(l.b)("h2",{id:"mute-app-volume"},"Mute App Volume"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"admob.setAppMuted(true)\n")))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[6448],{1080:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(3289);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,v=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return t?a.createElement(v,i(i({ref:n},u),{},{components:t})):a.createElement(v,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7211:function(e,n,t){var a=t(3289);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},2624:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(3289),r=t(886);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(2238),l="tabItem_3oT_",c="tabItemActive_39zM";var s=function(e){var n,t=e.lazy,r=e.block,s=e.defaultValue,u=e.values,p=e.groupId,d=e.className,m=a.Children.toArray(e.children),v=null!=u?u:m.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=s?s:null==(n=m.find((function(e){return e.props.default})))?void 0:n.props.value,b=o(),g=b.tabGroupChoices,h=b.setTabGroupChoices,y=(0,a.useState)(f),k=y[0],N=y[1],w=[];if(null!=p){var x=g[p];null!=x&&x!==k&&v.some((function(e){return e.value===x}))&&N(x)}var C=function(e){var n=e.currentTarget,t=w.indexOf(n),a=v[t].value;N(a),null!=p&&(h(p,a),setTimeout((function(){var e,t,a,r,o,i,l,s;(e=n.getBoundingClientRect(),t=e.top,a=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,s=i.innerWidth,t>=0&&o<=s&&r<=l&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(c),setTimeout((function(){return n.classList.remove(c)}),2e3))}),150))},O=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.target)+1;t=w[a]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.target)-1;t=w[r]||w[w.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},d)},v.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:k===n?0:-1,"aria-selected":k===n,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":k===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:O,onFocus:C,onClick:C},null!=t?t:n)}))),t?(0,a.cloneElement)(m.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==k})}))))}},886:function(e,n,t){var a=(0,t(3289).createContext)(void 0);n.Z=a},1659:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return v}});var a=t(1629),r=t(7322),o=(t(3289),t(1080)),i=t(2624),l=t(7211),c=["components"],s={title:"Installation",sidebar_label:"Installation"},u=void 0,p={unversionedId:"ionic/installation",id:"version-1.x/ionic/installation",isDocsHomePage:!1,title:"Installation",description:"This package is a wrapper of admob-plus-cordova, hence the Cordova plugin configuration is used.",source:"@site/versioned_docs/version-1.x/ionic/installation.mdx",sourceDirName:"ionic",slug:"/ionic/installation",permalink:"/docs/1.x/ionic/installation",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/versioned_docs/version-1.x/ionic/installation.mdx",tags:[],version:"1.x",frontMatter:{title:"Installation",sidebar_label:"Installation"},sidebar:"version-1.x/docs",previous:{title:"Getting Started",permalink:"/docs/1.x/ionic"},next:{title:"Banner",permalink:"/docs/1.x/ionic/ads/banner"}},d=[],m={toc:d};function v(e){var n=e.components,t=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This package is a wrapper of ",(0,o.kt)("a",{parentName:"p",href:"/docs/cordova"},(0,o.kt)("inlineCode",{parentName:"a"},"admob-plus-cordova")),", hence the Cordova plugin configuration is used."),(0,o.kt)("p",null,"First, set your AdMob application information in ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json" {4-7}',title:'"package.json"',"{4-7}":!0},'{\n  "cordova": {\n    "plugins": {\n      "admob-plus-cordova": {\n        "APP_ID_ANDROID": "ca-app-pub-xxx~yyy",\n        "APP_ID_IOS": "ca-app-pub-xxx~yyy"\n      }\n    }\n  }\n}\n')),(0,o.kt)(i.Z,{defaultValue:"cordova",values:[{label:"Cordova",value:"cordova"},{label:"Capacitor",value:"capacitor"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cordova",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"ionic cordova plugin add admob-plus-cordova\nnpm install @admob-plus/ionic\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Consider using ",(0,o.kt)("a",{parentName:"p",href:"/docs/capacitor"},(0,o.kt)("inlineCode",{parentName:"a"},"@admob-plus/capacitor"))," if your project does not require Cordova.")))),(0,o.kt)(l.Z,{value:"capacitor",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @admob-plus/ionic\nnpm install admob-plus-cordova\nionic cap sync\n")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"ionic-angular")," user needs to update ",(0,o.kt)("inlineCode",{parentName:"p"},"typescript")," to a recent version, or config ",(0,o.kt)("inlineCode",{parentName:"p"},'"skipLibCheck": true')," in ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," to avoid type errors."))))}v.isMDXComponent=!0},2238:function(e,n,t){function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function r(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}t.d(n,{Z:function(){return r}})}}]);
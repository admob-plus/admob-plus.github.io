"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[9744],{1080:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(3289);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=s(a),m=i,v=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(v,r(r({ref:t},c),{},{components:a})):n.createElement(v,r({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=p;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:i,r[1]=d;for(var s=2;s<o;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8924:function(e,t,a){var n=a(3289);t.Z=function(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:i},t)}},1666:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(3289),i=a(9832);var o=function(){var e=(0,n.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=a(2238),d="tabItem_3zuV",l="tabItemActive_3ubc";var s=function(e){var t,a=e.lazy,i=e.block,s=e.defaultValue,c=e.values,u=e.groupId,p=e.className,m=n.Children.toArray(e.children),v=null!=c?c:m.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=s?s:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,h=o(),g=h.tabGroupChoices,b=h.setTabGroupChoices,w=(0,n.useState)(f),k=w[0],N=w[1],y=[];if(null!=u){var A=g[u];null!=A&&A!==k&&v.some((function(e){return e.value===A}))&&N(A)}var P=function(e){var t=e.currentTarget,a=y.indexOf(t),n=v[a].value;N(n),null!=u&&(b(u,n),setTimeout((function(){var e,a,n,i,o,r,d,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,i=e.bottom,o=e.right,r=window,d=r.innerHeight,s=r.innerWidth,a>=0&&o<=s&&i<=d&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=y.indexOf(e.target)+1;a=y[n]||y[0];break;case"ArrowLeft":var i=y.indexOf(e.target)-1;a=y[i]||y[y.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},p)},v.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,r.Z)("tabs__item",d,{"tabs__item--active":k===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:x,onFocus:P,onClick:P},null!=a?a:t)}))),a?(0,n.cloneElement)(m.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9832:function(e,t,a){var n=(0,a(3289).createContext)(void 0);t.Z=n},9603:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return v}});var n=a(1629),i=a(7322),o=(a(3289),a(1080)),r=a(1666),d=a(8924),l=["components"],s={title:"Native Ad",sidebar_label:"Native"},c=void 0,u={unversionedId:"cordova/ads/native",id:"cordova/ads/native",isDocsHomePage:!1,title:"Native Ad",description:"Native ads are ad assets that are presented to users via UI components that are native to the platform.",source:"@site/docs/cordova/ads/native.mdx",sourceDirName:"cordova/ads",slug:"/cordova/ads/native",permalink:"/docs/cordova/ads/native",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/docs/cordova/ads/native.mdx",tags:[],version:"current",frontMatter:{title:"Native Ad",sidebar_label:"Native"},sidebar:"docs",previous:{title:"Interstitial",permalink:"/docs/cordova/ads/interstitial"},next:{title:"Rewarded",permalink:"/docs/cordova/ads/rewarded"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Attach to HTML element",id:"attach-to-html-element",children:[]},{value:"Customize Views",id:"customize-views",children:[{value:"Multiple Views",id:"multiple-views",children:[]}]},{value:"Events",id:"events",children:[{value:"<code>admob.ad.load</code>",id:"admobadload",children:[]},{value:"<code>admob.ad.loadfail</code>",id:"admobadloadfail",children:[]},{value:"<code>admob.ad.show</code>",id:"admobadshow",children:[]},{value:"<code>admob.ad.showfail</code>",id:"admobadshowfail",children:[]},{value:"<code>admob.ad.dismiss</code>",id:"admobaddismiss",children:[]},{value:"<code>admob.ad.impression</code>",id:"admobadimpression",children:[]}]},{value:"References",id:"references",children:[]}],m={toc:p};function v(e){var t=e.components,a=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Native ads are ad assets that are presented to users via UI components that are native to the platform."),(0,o.kt)("p",null,"In addtion to installing ",(0,o.kt)("inlineCode",{parentName:"p"},"admob-plus-cordova"),", you will need to install ",(0,o.kt)("inlineCode",{parentName:"p"},"admob-plus-cordova-native")," for displaying native ads."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh-session"},"cordova plugin add admob-plus-cordova-native --save\n")),(0,o.kt)("p",null,"Or use a local version with ",(0,o.kt)("a",{parentName:"p",href:"#customize-views"},"customized views"),","),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"document.addEventListener('deviceready', async () => {\n  const ad = new admob.NativeAd({\n    adUnitId: 'ca-app-pub-xxx/yyy',\n  })\n\n  ad.on('load', (evt) => {\n    // evt.ad\n  })\n\n  await ad.load()\n  await ad.show({\n    x: 0,\n    y: 50,\n    width: window.screen.width,\n    height: 300,\n  })\n\n  setTimeout(() => {\n    // change ad size and poistion\n    ad.show({\n      x: 0,\n      y: 150,\n      width: window.screen.width,\n      height: 350,\n    })\n  }, 5000)\n\n  setTimeout(() => {\n    ad.hide()\n  }, 10000)\n})\n\ndocument.addEventListener('admob.ad.load', async (evt) => {\n  if (evt.ad instanceof admob.NativeAd) {\n    // handle event here\n  }\n})\n")),(0,o.kt)("h2",{id:"attach-to-html-element"},"Attach to HTML element"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"ad.showWith(document.getElementById('native-ad'))\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"native-ad")," is the HTML element for the ad view should attach to, which will update the size and position of ad view as the DOM element."),(0,o.kt)("p",null,"Note that this is an native ad view overlay on top of the webview, so scrolling will see some delay.\nIt is the limitation for mixing native view and webview for hybrid app."),(0,o.kt)("h2",{id:"customize-views"},"Customize Views"),(0,o.kt)("p",null,"You will need to create a plugin to provide the native ad view implementation."),(0,o.kt)("p",null,"It is recommended to fork ",(0,o.kt)("inlineCode",{parentName:"p"},"admob-plus-cordova-native")," and starting there."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh-session"},"git clone https://github.com/admob-plus/admob-plus.git\ncordova plugin rm admob-plus-cordova-native\ncordova plugin add ./admob-plus/packages/cordova-native --link --save\ncd admob-plus/packages/cordova-native\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Review the ",(0,o.kt)("a",{parentName:"p",href:"https://support.google.com/admob/answer/6329638"},"Native ads policies and guidelines")," for guidance on how to render your native ads."))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," view is registered in"),(0,o.kt)(r.Z,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"android",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"{6} title=src/android/Plugin.java","{6}":!0,title:"src/android/Plugin.java"},"package admob.plus.cordova.nativead;\n\npublic class Plugin extends CordovaPlugin {\n    protected void pluginInitialize() {\n        AdMob.registerNativeAdViewProviders(new HashMap<String, Native.ViewProvider>() {{\n            put(AdMob.NATIVE_VIEW_DEFAULT, new AdViewProvider(cordova));\n        }});\n    }\n}\n")),(0,o.kt)("p",null,"By changing ",(0,o.kt)("inlineCode",{parentName:"p"},"src/android/AdViewProvider.java")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"src/android/res/layout/ad_unified.xml"),",\nyou could customize the look and feel of the native ad view.")),(0,o.kt)(d.Z,{value:"ios",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift",metastring:"{3} title=src/ios/AdMobNativePlugin.swift","{3}":!0,title:"src/ios/AdMobNativePlugin.swift"},'class AdMobNativePlugin: CDVPlugin {\n    override func pluginInitialize() {\n        AMBPlugin.registerNativeAdViewProviders(["default": AMNAdViewProvider()])\n    }\n}\n')),(0,o.kt)("p",null,"By changing ",(0,o.kt)("inlineCode",{parentName:"p"},"src/ios/AMNAdViewProvider.swift")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"src/ios/AMNAdView.xib"),",\nyou could customize the look and feel of the native ad view."))),(0,o.kt)("h3",{id:"multiple-views"},"Multiple Views"),(0,o.kt)("p",null,"If your native ads need more than one views, you could register them using ",(0,o.kt)("inlineCode",{parentName:"p"},"registerNativeAdViewProviders()"),"."),(0,o.kt)(r.Z,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"android",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"{7-8} title=src/android/Plugin.java","{7-8}":!0,title:"src/android/Plugin.java"},'package admob.plus.cordova.nativead;\n\npublic class Plugin extends CordovaPlugin {\n    protected void pluginInitialize() {\n        AdMob.registerNativeAdViewProviders(new HashMap<String, Native.ViewProvider>() {{\n            put(AdMob.NATIVE_VIEW_DEFAULT, new AdViewProvider(cordova));\n            // register extra views\n            put("myview", new MyAdViewProvider(cordova));\n        }});\n    }\n}\n'))),(0,o.kt)(d.Z,{value:"ios",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift",metastring:"{5-6} title=src/ios/AdMobNativePlugin.swift","{5-6}":!0,title:"src/ios/AdMobNativePlugin.swift"},'class AdMobNativePlugin: CDVPlugin {\n    override func pluginInitialize() {\n        AMBPlugin.registerNativeAdViewProviders([\n          "default": AMNAdViewProvider(),\n          // register extra views\n          "myview": MyAdViewProvider(),\n        ])\n    }\n}\n')))),(0,o.kt)("p",null,"Then specify it when createing the ad,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{3}","{3}":!0},"const ad = new admob.NativeAd({\n  adUnitId: 'ca-app-pub-xxx/yyy',\n  view: 'myview',\n})\n")),(0,o.kt)("p",null,"Remeber to update ",(0,o.kt)("inlineCode",{parentName:"p"},"plugin.xml")," for the newly added files,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:"{3,7} title=plugin.xml","{3,7}":!0,title:"plugin.xml"},'<plugin id="admob-plus-cordova-native">\n  <platform name="android">\n    <source-file src="src/android/MyAdViewProvider.java" target-dir="src/admob/plus/cordova/nativead" />\n  </platform>\n\n  <platform name="ios">\n    <source-file src="src/ios/MyAdViewProvider.swift" />\n  </platform>\n</plugin>\n')),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("h3",{id:"admobadload"},(0,o.kt)("inlineCode",{parentName:"h3"},"admob.ad.load")),(0,o.kt)("h3",{id:"admobadloadfail"},(0,o.kt)("inlineCode",{parentName:"h3"},"admob.ad.loadfail")),(0,o.kt)("h3",{id:"admobadshow"},(0,o.kt)("inlineCode",{parentName:"h3"},"admob.ad.show")),(0,o.kt)("h3",{id:"admobadshowfail"},(0,o.kt)("inlineCode",{parentName:"h3"},"admob.ad.showfail")),(0,o.kt)("h3",{id:"admobaddismiss"},(0,o.kt)("inlineCode",{parentName:"h3"},"admob.ad.dismiss")),(0,o.kt)("h3",{id:"admobadimpression"},(0,o.kt)("inlineCode",{parentName:"h3"},"admob.ad.impression")),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/admob/android/native/start"},"Native Ads - Mobile Ads SDK (Android)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/admob/ios/native/start"},"Native Ads - Mobile Ads SDK (iOS)"))))}v.isMDXComponent=!0},2238:function(e,t,a){function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}a.d(t,{Z:function(){return i}})}}]);
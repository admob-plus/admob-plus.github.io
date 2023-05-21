"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[9744],{8570:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return p}});var n=t(79);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),s=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=s(e.components);return n.createElement(d.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},v=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),v=s(t),p=r,m=v["".concat(d,".").concat(p)]||v[p]||c[p]||i;return t?n.createElement(m,o(o({ref:a},u),{},{components:t})):n.createElement(m,o({ref:a},u))}));function p(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=v;var l={};for(var d in a)hasOwnProperty.call(a,d)&&(l[d]=a[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},8683:function(e,a,t){t.d(a,{Z:function(){return o}});var n=t(79),r=t(9841),i="tabItem_NEjk";function o(e){var a=e.children,t=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:t},a)}},7267:function(e,a,t){t.d(a,{Z:function(){return N}});var n=t(2203),r=t(79),i=t(9841),o=t(687),l=t(8737),d=t(5110),s=t(4407),u=t(7956);function c(e){return function(e){var a,t;return null!=(a=null==(t=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(a=e.props)&&"object"==typeof a&&"value"in a)return e;var a;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?a:[]}(e).map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes,default:a.default}}))}function v(e){var a=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=a?a:c(t);return function(e){var a=(0,s.l)(e,(function(e,a){return e.value===a.value}));if(a.length>0)throw new Error('Docusaurus error: Duplicate values "'+a.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[a,t])}function p(e){var a=e.value;return e.tabValues.some((function(e){return e.value===a}))}function m(e){var a=e.queryString,t=void 0!==a&&a,n=e.groupId,i=(0,l.k6)(),o=function(e){var a=e.queryString,t=void 0!==a&&a,n=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,d._X)(o),(0,r.useCallback)((function(e){if(o){var a=new URLSearchParams(i.location.search);a.set(o,e),i.replace(Object.assign({},i.location,{search:a.toString()}))}}),[o,i])]}function f(e){var a,t,n,i,o=e.defaultValue,l=e.queryString,d=void 0!==l&&l,s=e.groupId,c=v(e),f=(0,r.useState)((function(){return function(e){var a,t=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(a=n.find((function(e){return e.default})))?a:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:c})})),b=f[0],h=f[1],g=m({queryString:d,groupId:s}),w=g[0],k=g[1],y=(a=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),t=(0,u.Nk)(a),n=t[0],i=t[1],[n,(0,r.useCallback)((function(e){a&&i.set(e)}),[a,i])]),N=y[0],A=y[1],P=function(){var e=null!=w?w:N;return p({value:e,tabValues:c})?e:null}();return(0,r.useLayoutEffect)((function(){P&&h(P)}),[P]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);h(e),k(e),A(e)}),[k,A,c]),tabValues:c}}var b=t(5671),h="tabList_uA6z",g="tabItem_YkO4";function w(e){var a=e.className,t=e.block,l=e.selectedValue,d=e.selectValue,s=e.tabValues,u=[],c=(0,o.o5)().blockElementScrollPositionUntilNextRender,v=function(e){var a=e.currentTarget,t=u.indexOf(a),n=s[t].value;n!==l&&(c(a),d(n))},p=function(e){var a,t=null;switch(e.key){case"Enter":v(e);break;case"ArrowRight":var n,r=u.indexOf(e.currentTarget)+1;t=null!=(n=u[r])?n:u[0];break;case"ArrowLeft":var i,o=u.indexOf(e.currentTarget)-1;t=null!=(i=u[o])?i:u[u.length-1]}null==(a=t)||a.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},a)},s.map((function(e){var a=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===a?0:-1,"aria-selected":l===a,key:a,ref:function(e){return u.push(e)},onKeyDown:p,onClick:v},o,{className:(0,i.Z)("tabs__item",g,null==o?void 0:o.className,{"tabs__item--active":l===a})}),null!=t?t:a)})))}function k(e){var a=e.lazy,t=e.children,n=e.selectedValue,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){var o=i.find((function(e){return e.props.value===n}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n})})))}function y(e){var a=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",h)},r.createElement(w,(0,n.Z)({},e,a)),r.createElement(k,(0,n.Z)({},e,a)))}function N(e){var a=(0,b.Z)();return r.createElement(y,(0,n.Z)({key:String(a)},e))}},5359:function(e,a,t){t.r(a),t.d(a,{assets:function(){return v},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=t(2203),r=t(915),i=(t(79),t(8570)),o=t(7267),l=t(8683),d=["components"],s={title:"Native Ad",sidebar_label:"Native"},u=void 0,c={unversionedId:"cordova/ads/native",id:"cordova/ads/native",title:"Native Ad",description:"Native ads are ad assets that are presented to users via UI components that are native to the platform.",source:"@site/docs/cordova/ads/native.mdx",sourceDirName:"cordova/ads",slug:"/cordova/ads/native",permalink:"/docs/cordova/ads/native",draft:!1,editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/docs/cordova/ads/native.mdx",tags:[],version:"current",frontMatter:{title:"Native Ad",sidebar_label:"Native"},sidebar:"docs",previous:{title:"Interstitial",permalink:"/docs/cordova/ads/interstitial"},next:{title:"Rewarded",permalink:"/docs/cordova/ads/rewarded"}},v={},p=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Attach to HTML element",id:"attach-to-html-element",level:2},{value:"Customize Views",id:"customize-views",level:2},{value:"Multiple Views",id:"multiple-views",level:3},{value:"Events",id:"events",level:2},{value:"<code>admob.ad.load</code>",id:"admobadload",level:3},{value:"<code>admob.ad.loadfail</code>",id:"admobadloadfail",level:3},{value:"<code>admob.ad.show</code>",id:"admobadshow",level:3},{value:"<code>admob.ad.showfail</code>",id:"admobadshowfail",level:3},{value:"<code>admob.ad.dismiss</code>",id:"admobaddismiss",level:3},{value:"<code>admob.ad.impression</code>",id:"admobadimpression",level:3},{value:"References",id:"references",level:2}],m={toc:p};function f(e){var a=e.components,t=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Native ads are ad assets that are presented to users via UI components that are native to the platform."),(0,i.kt)("p",null,"In addtion to installing ",(0,i.kt)("inlineCode",{parentName:"p"},"admob-plus-cordova"),", you will need to install ",(0,i.kt)("inlineCode",{parentName:"p"},"admob-plus-cordova-native")," for displaying native ads."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh-session"},"cordova plugin add admob-plus-cordova-native --save\n")),(0,i.kt)("p",null,"Or use a local version with ",(0,i.kt)("a",{parentName:"p",href:"#customize-views"},"customized views"),","),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"document.addEventListener('deviceready', async () => {\n  const ad = new admob.NativeAd({\n    adUnitId: 'ca-app-pub-xxx/yyy',\n  })\n\n  ad.on('load', (evt) => {\n    // evt.ad\n  })\n\n  await ad.load()\n  await ad.show({\n    x: 0,\n    y: 50,\n    width: window.screen.width,\n    height: 300,\n  })\n\n  setTimeout(() => {\n    // change ad size and poistion\n    ad.show({\n      x: 0,\n      y: 150,\n      width: window.screen.width,\n      height: 350,\n    })\n  }, 5000)\n\n  setTimeout(() => {\n    ad.hide()\n  }, 10000)\n})\n\ndocument.addEventListener('admob.ad.load', async (evt) => {\n  if (evt.ad instanceof admob.NativeAd) {\n    // handle event here\n  }\n})\n")),(0,i.kt)("h2",{id:"attach-to-html-element"},"Attach to HTML element"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"ad.showWith(document.getElementById('native-ad'))\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"native-ad")," is the HTML element for the ad view should attach to, which will update the size and position of ad view as the DOM element."),(0,i.kt)("p",null,"Note that this is an native ad view overlay on top of the webview, so scrolling will see some delay.\nIt is the limitation for mixing native view and webview for hybrid app."),(0,i.kt)("h2",{id:"customize-views"},"Customize Views"),(0,i.kt)("p",null,"You will need to create a plugin to provide the native ad view implementation."),(0,i.kt)("p",null,"It is recommended to fork ",(0,i.kt)("inlineCode",{parentName:"p"},"admob-plus-cordova-native")," and starting there."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh-session"},"git clone https://github.com/admob-plus/admob-plus.git\ncordova plugin rm admob-plus-cordova-native\ncordova plugin add ./admob-plus/packages/cordova-native --link --save\ncd admob-plus/packages/cordova-native\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Review the ",(0,i.kt)("a",{parentName:"p",href:"https://support.google.com/admob/answer/6329638"},"Native ads policies and guidelines")," for guidance on how to render your native ads.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," view is registered in"),(0,i.kt)(o.Z,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"android",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"{6} title=src/android/Plugin.java","{6}":!0,title:"src/android/Plugin.java"},"package admob.plus.cordova.nativead;\n\npublic class Plugin extends CordovaPlugin {\n    protected void pluginInitialize() {\n        AdMob.registerNativeAdViewProviders(new HashMap<String, Native.ViewProvider>() {{\n            put(AdMob.NATIVE_VIEW_DEFAULT, new AdViewProvider(cordova));\n        }});\n    }\n}\n")),(0,i.kt)("p",null,"By changing ",(0,i.kt)("inlineCode",{parentName:"p"},"src/android/AdViewProvider.java")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"src/android/res/layout/ad_unified.xml"),",\nyou could customize the look and feel of the native ad view.")),(0,i.kt)(l.Z,{value:"ios",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift",metastring:"{3} title=src/ios/AdMobNativePlugin.swift","{3}":!0,title:"src/ios/AdMobNativePlugin.swift"},'class AdMobNativePlugin: CDVPlugin {\n    override func pluginInitialize() {\n        AMBPlugin.registerNativeAdViewProviders(["default": AMNAdViewProvider()])\n    }\n}\n')),(0,i.kt)("p",null,"By changing ",(0,i.kt)("inlineCode",{parentName:"p"},"src/ios/AMNAdViewProvider.swift")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"src/ios/AMNAdView.xib"),",\nyou could customize the look and feel of the native ad view."))),(0,i.kt)("h3",{id:"multiple-views"},"Multiple Views"),(0,i.kt)("p",null,"If your native ads need more than one views, you could register them using ",(0,i.kt)("inlineCode",{parentName:"p"},"registerNativeAdViewProviders()"),"."),(0,i.kt)(o.Z,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"android",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"{7-8} title=src/android/Plugin.java","{7-8}":!0,title:"src/android/Plugin.java"},'package admob.plus.cordova.nativead;\n\npublic class Plugin extends CordovaPlugin {\n    protected void pluginInitialize() {\n        AdMob.registerNativeAdViewProviders(new HashMap<String, Native.ViewProvider>() {{\n            put(AdMob.NATIVE_VIEW_DEFAULT, new AdViewProvider(cordova));\n            // register extra views\n            put("myview", new MyAdViewProvider(cordova));\n        }});\n    }\n}\n'))),(0,i.kt)(l.Z,{value:"ios",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift",metastring:"{5-6} title=src/ios/AdMobNativePlugin.swift","{5-6}":!0,title:"src/ios/AdMobNativePlugin.swift"},'class AdMobNativePlugin: CDVPlugin {\n    override func pluginInitialize() {\n        AMBPlugin.registerNativeAdViewProviders([\n          "default": AMNAdViewProvider(),\n          // register extra views\n          "myview": MyAdViewProvider(),\n        ])\n    }\n}\n')))),(0,i.kt)("p",null,"Then specify it when createing the ad,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{3}","{3}":!0},"const ad = new admob.NativeAd({\n  adUnitId: 'ca-app-pub-xxx/yyy',\n  view: 'myview',\n})\n")),(0,i.kt)("p",null,"Remeber to update ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin.xml")," for the newly added files,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:"{3,7} title=plugin.xml","{3,7}":!0,title:"plugin.xml"},'<plugin id="admob-plus-cordova-native">\n  <platform name="android">\n    <source-file src="src/android/MyAdViewProvider.java" target-dir="src/admob/plus/cordova/nativead" />\n  </platform>\n\n  <platform name="ios">\n    <source-file src="src/ios/MyAdViewProvider.swift" />\n  </platform>\n</plugin>\n')),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("h3",{id:"admobadload"},(0,i.kt)("inlineCode",{parentName:"h3"},"admob.ad.load")),(0,i.kt)("h3",{id:"admobadloadfail"},(0,i.kt)("inlineCode",{parentName:"h3"},"admob.ad.loadfail")),(0,i.kt)("h3",{id:"admobadshow"},(0,i.kt)("inlineCode",{parentName:"h3"},"admob.ad.show")),(0,i.kt)("h3",{id:"admobadshowfail"},(0,i.kt)("inlineCode",{parentName:"h3"},"admob.ad.showfail")),(0,i.kt)("h3",{id:"admobaddismiss"},(0,i.kt)("inlineCode",{parentName:"h3"},"admob.ad.dismiss")),(0,i.kt)("h3",{id:"admobadimpression"},(0,i.kt)("inlineCode",{parentName:"h3"},"admob.ad.impression")),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.google.com/admob/android/native/start"},"Native Ads - Mobile Ads SDK (Android)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.google.com/admob/ios/native/start"},"Native Ads - Mobile Ads SDK (iOS)"))))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[908],{8570:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(79);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(t),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return t?a.createElement(h,i(i({ref:n},p),{},{components:t})):a.createElement(h,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8092:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var a=t(2203),r=t(915),o=(t(79),t(8570)),i=["components"],l={id:"show-banner",title:"Showing Banner Ad",sidebar_label:"Banner Ad"},s=void 0,d={unversionedId:"show-banner",id:"version-0.x/show-banner",title:"Showing Banner Ad",description:"Banner ads are rectangular image or text ads that occupy a spot within an app's layout. They stay on screen while users are interacting with the app, and can refresh automatically after a certain period of time.",source:"@site/versioned_docs/version-0.x/show-banner.md",sourceDirName:".",slug:"/show-banner",permalink:"/docs/0.x/show-banner",draft:!1,editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/versioned_docs/version-0.x/show-banner.md",tags:[],version:"0.x",frontMatter:{id:"show-banner",title:"Showing Banner Ad",sidebar_label:"Banner Ad"},sidebar:"version-0.x/docs",previous:{title:"Installation",permalink:"/docs/0.x/"},next:{title:"Interstitial Ad",permalink:"/docs/0.x/show-interstitial"}},p={},u=[{value:"Usage",id:"usage",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>admob.banner.show(config: IBannerRequest)</code>",id:"admobbannershowconfig-ibannerrequest",level:3},{value:"<code>admob.banner.hide(id: AdUnitIDOption)</code>",id:"admobbannerhideid-adunitidoption",level:3},{value:"Events",id:"events",level:2},{value:"Load Event",id:"load-event",level:3},{value:"Load Fail Event",id:"load-fail-event",level:3},{value:"Open Event",id:"open-event",level:3},{value:"Exit Application Event",id:"exit-application-event",level:3},{value:"Close Event",id:"close-event",level:3}],c={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Banner ads are rectangular image or text ads that occupy a spot within an app's layout. They stay on screen while users are interacting with the app, and can refresh automatically after a certain period of time."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"document.addEventListener('deviceready', () => {\n  admob.banner.show({\n    id: {\n      // replace with your ad unit IDs\n      android: 'ca-app-pub-xxx/yyy',\n      ios: 'ca-app-pub-xxx/zzz',\n    },\n  }).then(() => {\n    setTimeout(() => {\n      admob.banner.hide({\n        // replace with your ad unit IDs\n        android: 'ca-app-pub-xxx/yyy',\n        ios: 'ca-app-pub-xxx/zzz',\n      })\n    }, 10000)\n  })\n}, false)\n")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"admobbannershowconfig-ibannerrequest"},(0,o.kt)("inlineCode",{parentName:"h3"},"admob.banner.show(config: IBannerRequest)")),(0,o.kt)("p",null,"Displays banner ad."),(0,o.kt)("p",null,"Returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," that resolves as soon as banner is start loading, rejects when there is a problem calling native code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface IBannerRequest extends IAdRequest {\n  position?: BannerPosition\n  size?: AdSize\n}\n\ntype BannerPosition = 'bottom' | 'top'\n\ntype AdSize =\n  | AdSizeType\n  | {\n      width: number;\n      height: number;\n    }\n\nenum AdSizeType {\n  BANNER,\n  LARGE_BANNER,\n  MEDIUM_RECTANGLE,\n  FULL_BANNER,\n  LEADERBOARD,\n  SMART_BANNER,\n}\n")),(0,o.kt)("p",null,"See also ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.x/ad-request-options#iadrequest"},(0,o.kt)("inlineCode",{parentName:"a"},"IAdRequest")),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: The current implementation is minimum, the return value of this API will likely be changed.")),(0,o.kt)("h3",{id:"admobbannerhideid-adunitidoption"},(0,o.kt)("inlineCode",{parentName:"h3"},"admob.banner.hide(id: AdUnitIDOption)")),(0,o.kt)("p",null,"Hides banner ad of ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.x/ad-request-options#adunitidoption"},(0,o.kt)("inlineCode",{parentName:"a"},"id")),"."),(0,o.kt)("p",null,"Returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," that resolves as soon as banner is hidden, rejects when there is a problem calling native code."),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("h3",{id:"load-event"},"Load Event"),(0,o.kt)("p",null,"Called when banner ad is loaded."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"document.addEventListener('admob.banner.load', () => {\n  // handle event\n})\n")),(0,o.kt)("h3",{id:"load-fail-event"},"Load Fail Event"),(0,o.kt)("p",null,"Called when banner ad request failed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"document.addEventListener('admob.banner.load_fail', () => {\n  // handle event\n})\n")),(0,o.kt)("h3",{id:"open-event"},"Open Event"),(0,o.kt)("p",null,"Called when user tap on the banner ad."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"document.addEventListener('admob.banner.open', () => {\n  // handle event\n})\n")),(0,o.kt)("h3",{id:"exit-application-event"},"Exit Application Event"),(0,o.kt)("p",null,"Called after Open Event, when a user click opens another app (such as the Google Play), backgrounding the current app."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"document.addEventListener('admob.banner.exit_app', () => {\n  // handle event\n})\n")),(0,o.kt)("h3",{id:"close-event"},"Close Event"),(0,o.kt)("p",null,"When a user returns to the app after viewing an ad's destination URL, this method is invoked. Your app can use it to resume suspended activities or perform any other work necessary to make itself ready for interaction."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"document.addEventListener('admob.banner.close', () => {\n  // handle event\n})\n")))}m.isMDXComponent=!0}}]);
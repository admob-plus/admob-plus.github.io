(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),d=(n(0),n(91)),o={id:"show-reward-video",title:"Showing Reward Video Ad",sidebar_label:"Reward Video Ad"},i={unversionedId:"show-reward-video",id:"show-reward-video",isDocsHomePage:!1,title:"Showing Reward Video Ad",description:"Reward video ads are full-screen video ads that users have the option of watching in full in exchange for in-app rewards.",source:"@site/docs/show-reward-video.md",slug:"/show-reward-video",permalink:"/docs/show-reward-video",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/docs/show-reward-video.md",version:"current",sidebar_label:"Reward Video Ad",sidebar:"docs",previous:{title:"Showing Interstitial Ad",permalink:"/docs/show-interstitial"},next:{title:"Test Ads",permalink:"/docs/test-ads"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>admob.rewardVideo.load(config)</code>",id:"admobrewardvideoloadconfig",children:[]},{value:"<code>admob.rewardVideo.show()</code>",id:"admobrewardvideoshow",children:[]}]},{value:"Events",id:"events",children:[{value:"Load Event",id:"load-event",children:[]},{value:"Load Fail Event",id:"load-fail-event",children:[]},{value:"Open Event",id:"open-event",children:[]},{value:"Close Event",id:"close-event",children:[]},{value:"Start Event",id:"start-event",children:[]},{value:"Complete Event",id:"complete-event",children:[]},{value:"Reward Event",id:"reward-event",children:[]},{value:"Exit Application Event",id:"exit-application-event",children:[]}]}],c={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(d.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(d.b)("p",null,"Reward video ads are full-screen video ads that users have the option of watching in full in exchange for in-app rewards."),Object(d.b)("h2",{id:"usage"},"Usage"),Object(d.b)("pre",null,Object(d.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"document.addEventListener('deviceready', () => {\n  admob.rewardVideo.load({\n    id: {\n      // replace with your ad unit IDs\n      android: 'ca-app-pub-xxx/yyy',\n      ios: 'ca-app-pub-xxx/zzz',\n    },\n  }).then(() => admob.rewardVideo.show())\n}, false)\n")),Object(d.b)("h2",{id:"methods"},"Methods"),Object(d.b)("h3",{id:"admobrewardvideoloadconfig"},Object(d.b)("inlineCode",{parentName:"h3"},"admob.rewardVideo.load(config)")),Object(d.b)("p",null,"Load reward video ad."),Object(d.b)("p",null,"Returns a ",Object(d.b)("inlineCode",{parentName:"p"},"Promise")," that resolves when ad request is loaded, rejects when ad request failed."),Object(d.b)("p",null,"See ",Object(d.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/ad-request-options#reference"}),Object(d.b)("inlineCode",{parentName:"a"},"config")),"."),Object(d.b)("h3",{id:"admobrewardvideoshow"},Object(d.b)("inlineCode",{parentName:"h3"},"admob.rewardVideo.show()")),Object(d.b)("p",null,"Displays loaded reward video ad."),Object(d.b)("p",null,"Returns a ",Object(d.b)("inlineCode",{parentName:"p"},"Promise")," that resolves as soon as reward video ad starts to play, rejects when there is a problem calling native code."),Object(d.b)("h2",{id:"events"},"Events"),Object(d.b)("h3",{id:"load-event"},"Load Event"),Object(d.b)("p",null,"Called when reward video ad is loaded."),Object(d.b)("pre",null,Object(d.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"document.addEventListener('admob.reward_video.load', () => {\n  // handle event\n})\n")),Object(d.b)("h3",{id:"load-fail-event"},"Load Fail Event"),Object(d.b)("p",null,"Called when reward video ad request failed."),Object(d.b)("pre",null,Object(d.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"document.addEventListener('admob.reward_video.load_fail', () => {\n  // handle event\n})\n")),Object(d.b)("h3",{id:"open-event"},"Open Event"),Object(d.b)("p",null,"Called when reward video ad opens a overlay that covers the screen."),Object(d.b)("pre",null,Object(d.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"document.addEventListener('admob.reward_video.open', () => {\n  // handle event\n})\n")),Object(d.b)("h3",{id:"close-event"},"Close Event"),Object(d.b)("p",null,"Called when reward video ad is closed."),Object(d.b)("pre",null,Object(d.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"document.addEventListener('admob.reward_video.close', () => {\n  // handle event\n})\n")),Object(d.b)("h3",{id:"start-event"},"Start Event"),Object(d.b)("p",null,"Called when reward video ad starts to play."),Object(d.b)("pre",null,Object(d.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"document.addEventListener('admob.reward_video.start', () => {\n  // handle event\n})\n")),Object(d.b)("h3",{id:"complete-event"},"Complete Event"),Object(d.b)("p",null,"Called when reward video ad completes playing."),Object(d.b)("pre",null,Object(d.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"document.addEventListener('admob.reward_video.complete', () => {\n  // handle event\n})\n")),Object(d.b)("h3",{id:"reward-event"},"Reward Event"),Object(d.b)("p",null,"Called when reward video ad has triggered a reward."),Object(d.b)("pre",null,Object(d.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"document.addEventListener('admob.reward_video.reward', () => {\n  // handle event\n})\n")),Object(d.b)("h3",{id:"exit-application-event"},"Exit Application Event"),Object(d.b)("p",null,"Called when reward video ad leaves the application (e.g., to go to the browser)."),Object(d.b)("pre",null,Object(d.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"document.addEventListener('admob.reward_video.exit_app', () => {\n  // handle event\n})\n")))}s.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return v}));var a=n(0),r=n.n(a);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},d=Object.keys(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,d=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=s(n),u=a,v=b["".concat(o,".").concat(u)]||b[u]||p[u]||d;return n?r.a.createElement(v,i(i({ref:t},c),{},{components:n})):r.a.createElement(v,i({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var d=n.length,o=new Array(d);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<d;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{101:function(e,t,o){"use strict";o.d(t,"a",(function(){return l})),o.d(t,"b",(function(){return m}));var r=o(0),a=o.n(r);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var d=a.a.createContext({}),s=function(e){var t=a.a.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},l=function(e){var t=s(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),l=s(o),b=r,m=l["".concat(i,".").concat(b)]||l[b]||u[b]||n;return o?a.a.createElement(m,c(c({ref:t},d),{},{components:o})):a.a.createElement(m,c({ref:t},d))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<n;d++)i[d]=o[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"},88:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return c})),o.d(t,"rightToc",(function(){return p})),o.d(t,"default",(function(){return s}));var r=o(3),a=o(7),n=(o(0),o(101)),i={title:"History of cordova-plugin-admob-free",author:"Ratson",author_url:"https://github.com/ratson",author_image_url:"https://avatars.githubusercontent.com/u/2682937?v=4",tags:["admob","cordova","cordova-plugin-admobpro"]},c={permalink:"/blog/2018/07/15/history-of-cordova-plugin-admob-free",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/blog/blog/2018-07-15-history-of-cordova-plugin-admob-free.md",source:"@site/blog/2018-07-15-history-of-cordova-plugin-admob-free.md",description:"2 years ago, I have a cordova project needed to add Google AdMob for showing ads. I was searching an open source solution, soon landed to the popular cordova-plugin-admobpro.",date:"2018-07-15T00:00:00.000Z",tags:[{label:"admob",permalink:"/blog/tags/admob"},{label:"cordova",permalink:"/blog/tags/cordova"},{label:"cordova-plugin-admobpro",permalink:"/blog/tags/cordova-plugin-admobpro"}],title:"History of cordova-plugin-admob-free",readingTime:1.665,truncated:!1,prevItem:{title:"How cordova-plugin-admobpro works",permalink:"/blog/2018/08/05/how-cordova-plugin-admobpro-works"}},p=[{value:"Research",id:"research",children:[]},{value:"Fork",id:"fork",children:[]},{value:"Next",id:"next",children:[]}],d={rightToc:p};function s(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},d,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"2 years ago, I have a cordova project needed to add Google AdMob for showing ads. I was searching an open source solution, soon landed to the popular ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/cordova-plugin-admobpro"}),"cordova-plugin-admobpro"),"."),Object(n.b)("h2",{id:"research"},"Research"),Object(n.b)("p",null,"As my typical practice of choosing a open source project, apart from looking at Github stars and package download count, I would read the source code to evaluate the code quality and check past issues and pull requests for how well a project is maintained."),Object(n.b)("p",null,"Like most Cordova Plugins, the code is written to be just work, not for read or extend. However, I was alerted when I was inspecting the source of its dependency, ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/cordova-plugin-extension"}),"cordova-plugin-extension"),". I found 2 binary files were used, ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://unpkg.com/cordova-plugin-extension@1.5.4/src/android/cordova-generic-ad.jar"}),"cordova-generic-ad.jar")," for Android and ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://unpkg.com/cordova-plugin-extension@1.5.4/src/ios/libCordovaGenericAd.a"}),"libCordovaGenericAd.a")," for iOS."),Object(n.b)("p",null,"Then I searched through the documentation for explaination about the binary files, the author said nothing about them, but I found the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/floatinghotpot/cordova-admob-pro#license"}),"pruchase license option"),", so it is very like some license verification code. After I run it under network monitoring, I discovered that the plugin is sending application information to ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"http://adlic.rjfun.com/adlic"}),"http://adlic.rjfun.com/adlic")," to retrive Ad Unit ID. Searching the URL in the issue track reveals that a user reported lose revenue and the author explained it was some server bugs."),Object(n.b)("p",null,"At this point, I have lost trust to the author, I started searching other solutions. Interestingly, there is no completely free and open source solution, many are doing ad-sharing without telling their users."),Object(n.b)("h2",{id:"fork"},"Fork"),Object(n.b)("p",null,"I then decided to fork a relative high quality plugin with the ad-sharing code removed, I picked ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/cordova-plugin-admob-simple"}),"cordova-plugin-admob-simple")," as it has the most recent commit at that time. Just 2 weeks after I had working on my fork version, ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/floatinghotpot/cordova-plugin-admob"}),"cordova-plugin-admob")," author (the same author of ",Object(n.b)("inlineCode",{parentName:"p"},"cordova-plugin-admobpro"),") was ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/sunnycupertino/cordova-plugin-admob-simple/issues/1"}),"claiming his credit"),"."),Object(n.b)("p",null,"As a result, ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ratson/cordova-plugin-admob-free"}),"cordova-plugin-admob-free")," becomes a fork of ",Object(n.b)("inlineCode",{parentName:"p"},"cordova-plugin-admob-simple")," and ",Object(n.b)("inlineCode",{parentName:"p"},"cordova-plugin-admob"),"."),Object(n.b)("h2",{id:"next"},"Next"),Object(n.b)("p",null,"AdMob Plus, being the successor of ",Object(n.b)("inlineCode",{parentName:"p"},"cordova-plugin-admob-free"),", is continue to be free and open source. Instead of stealing your revenve, ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://ratson.name/fund-admob-plus"}),"I ask funding explictily"),", but you don't have to pay to enjoy all features."))}s.isMDXComponent=!0}}]);
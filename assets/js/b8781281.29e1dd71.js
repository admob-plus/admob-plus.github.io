"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[9520],{8570:function(e,o,t){t.d(o,{Zo:function(){return c},kt:function(){return m}});var r=t(79);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function n(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){a(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function s(e,o){if(null==e)return{};var t,r,a=function(e,o){if(null==e)return{};var t,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],o.indexOf(t)>=0||(a[t]=e[t]);return a}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var o=r.useContext(p),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},c=function(e){var o=u(e.components);return r.createElement(p.Provider,{value:o},e.children)},l={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},d=r.forwardRef((function(e,o){var t=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,h=d["".concat(p,".").concat(m)]||d[m]||l[m]||n;return t?r.createElement(h,i(i({ref:o},c),{},{components:t})):r.createElement(h,i({ref:o},c))}));function m(e,o){var t=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var n=t.length,i=new Array(n);i[0]=d;var s={};for(var p in o)hasOwnProperty.call(o,p)&&(s[p]=o[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<n;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8575:function(e,o,t){t.r(o),t.d(o,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var r=t(2203),a=t(915),n=(t(79),t(8570)),i=["components"],s={title:"History of cordova-plugin-admob-free",author:"Ratson",author_url:"https://github.com/ratson",author_image_url:"https://avatars.githubusercontent.com/u/2682937?v=4",tags:["admob","cordova","cordova-plugin-admobpro"]},p=void 0,u={permalink:"/blog/2018/07/15/history-of-cordova-plugin-admob-free",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/blog/blog/2018-07-15-history-of-cordova-plugin-admob-free.md",source:"@site/blog/2018-07-15-history-of-cordova-plugin-admob-free.md",title:"History of cordova-plugin-admob-free",description:"2 years ago, I have a cordova project needed to add Google AdMob for showing ads. I was searching an open source solution, soon landed to the popular cordova-plugin-admobpro.",date:"2018-07-15T00:00:00.000Z",formattedDate:"July 15, 2018",tags:[{label:"admob",permalink:"/blog/tags/admob"},{label:"cordova",permalink:"/blog/tags/cordova"},{label:"cordova-plugin-admobpro",permalink:"/blog/tags/cordova-plugin-admobpro"}],readingTime:1.665,hasTruncateMarker:!1,authors:[{name:"Ratson",url:"https://github.com/ratson",imageURL:"https://avatars.githubusercontent.com/u/2682937?v=4"}],frontMatter:{title:"History of cordova-plugin-admob-free",author:"Ratson",author_url:"https://github.com/ratson",author_image_url:"https://avatars.githubusercontent.com/u/2682937?v=4",tags:["admob","cordova","cordova-plugin-admobpro"]},prevItem:{title:"How cordova-plugin-admobpro works",permalink:"/blog/2018/08/05/how-cordova-plugin-admobpro-works"}},c={authorsImageUrls:[void 0]},l=[{value:"Research",id:"research",level:2},{value:"Fork",id:"fork",level:2},{value:"Next",id:"next",level:2}],d={toc:l};function m(e){var o=e.components,t=(0,a.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},d,t,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"2 years ago, I have a cordova project needed to add Google AdMob for showing ads. I was searching an open source solution, soon landed to the popular ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cordova-plugin-admobpro"},"cordova-plugin-admobpro"),"."),(0,n.kt)("h2",{id:"research"},"Research"),(0,n.kt)("p",null,"As my typical practice of choosing a open source project, apart from looking at Github stars and package download count, I would read the source code to evaluate the code quality and check past issues and pull requests for how well a project is maintained."),(0,n.kt)("p",null,"Like most Cordova Plugins, the code is written to be just work, not for read or extend. However, I was alerted when I was inspecting the source of its dependency, ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cordova-plugin-extension"},"cordova-plugin-extension"),". I found 2 binary files were used, ",(0,n.kt)("a",{parentName:"p",href:"https://unpkg.com/cordova-plugin-extension@1.5.4/src/android/cordova-generic-ad.jar"},"cordova-generic-ad.jar")," for Android and ",(0,n.kt)("a",{parentName:"p",href:"https://unpkg.com/cordova-plugin-extension@1.5.4/src/ios/libCordovaGenericAd.a"},"libCordovaGenericAd.a")," for iOS."),(0,n.kt)("p",null,"Then I searched through the documentation for explaination about the binary files, the author said nothing about them, but I found the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/floatinghotpot/cordova-admob-pro#license"},"pruchase license option"),", so it is very like some license verification code. After I run it under network monitoring, I discovered that the plugin is sending application information to ",(0,n.kt)("a",{parentName:"p",href:"http://adlic.rjfun.com/adlic"},"http://adlic.rjfun.com/adlic")," to retrive Ad Unit ID. Searching the URL in the issue track reveals that a user reported lose revenue and the author explained it was some server bugs."),(0,n.kt)("p",null,"At this point, I have lost trust to the author, I started searching other solutions. Interestingly, there is no completely free and open source solution, many are doing ad-sharing without telling their users."),(0,n.kt)("h2",{id:"fork"},"Fork"),(0,n.kt)("p",null,"I then decided to fork a relative high quality plugin with the ad-sharing code removed, I picked ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cordova-plugin-admob-simple"},"cordova-plugin-admob-simple")," as it has the most recent commit at that time. Just 2 weeks after I had working on my fork version, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/floatinghotpot/cordova-plugin-admob"},"cordova-plugin-admob")," author (the same author of ",(0,n.kt)("inlineCode",{parentName:"p"},"cordova-plugin-admobpro"),") was ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/sunnycupertino/cordova-plugin-admob-simple/issues/1"},"claiming his credit"),"."),(0,n.kt)("p",null,"As a result, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ratson/cordova-plugin-admob-free"},"cordova-plugin-admob-free")," becomes a fork of ",(0,n.kt)("inlineCode",{parentName:"p"},"cordova-plugin-admob-simple")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"cordova-plugin-admob"),"."),(0,n.kt)("h2",{id:"next"},"Next"),(0,n.kt)("p",null,"AdMob Plus, being the successor of ",(0,n.kt)("inlineCode",{parentName:"p"},"cordova-plugin-admob-free"),", is continue to be free and open source. Instead of stealing your revenve, ",(0,n.kt)("a",{parentName:"p",href:"https://ratson.name/fund-admob-plus"},"I ask funding explictily"),", but you don't have to pay to enjoy all features."))}m.isMDXComponent=!0}}]);
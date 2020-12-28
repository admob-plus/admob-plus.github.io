(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{105:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return h}));var n=o(0),a=o.n(n);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(o),b=n,h=u["".concat(i,".").concat(b)]||u[b]||d[b]||r;return o?a.a.createElement(h,c(c({ref:t},s),{},{components:o})):a.a.createElement(h,c({ref:t},s))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<r;s++)i[s]=o[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"},94:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return l})),o.d(t,"default",(function(){return p}));var n=o(3),a=o(7),r=(o(0),o(105)),i={title:"How cordova-plugin-admobpro works",author:"Ratson",author_url:"https://github.com/ratson",author_image_url:"https://avatars.githubusercontent.com/u/2682937?v=4",tags:["admob","cordova"]},c={permalink:"/blog/2018/08/05/how-cordova-plugin-admobpro-works",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/blog/blog/2018-08-05-how-cordova-plugin-admobpro-works.md",source:"@site/blog/2018-08-05-how-cordova-plugin-admobpro-works.md",description:"I believe most cordova-plugin-admobpro users do not know how the plugin works, as the author does not explain it or intentionally hide it. This blog post is going to uncover the details, so users could have better understanding about what is added to their projects.",date:"2018-08-05T00:00:00.000Z",tags:[{label:"admob",permalink:"/blog/tags/admob"},{label:"cordova",permalink:"/blog/tags/cordova"}],title:"How cordova-plugin-admobpro works",readingTime:3.28,truncated:!1,nextItem:{title:"History of cordova-plugin-admob-free",permalink:"/blog/2018/07/15/history-of-cordova-plugin-admob-free"}},l=[{value:"cordova-plugin-extension",id:"cordova-plugin-extension",children:[]},{value:"Phoning home",id:"phoning-home",children:[]},{value:"Remote controlling ads",id:"remote-controlling-ads",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],s={toc:l};function p(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"I believe most ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/cordova-plugin-admobpro"}),Object(r.b)("inlineCode",{parentName:"a"},"cordova-plugin-admobpro"))," users do not know how the plugin works, as the author does not explain it or intentionally hide it. This blog post is going to uncover the details, so users could have better understanding about what is added to their projects."),Object(r.b)("h2",{id:"cordova-plugin-extension"},"cordova-plugin-extension"),Object(r.b)("p",null,"When looking at ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/floatinghotpot/cordova-admob-pro"}),"the repository"),", it looks like a normal cordova plugin repository, where source code are ",Object(r.b)("inlineCode",{parentName:"p"},"src")," and ",Object(r.b)("inlineCode",{parentName:"p"},"www"),"."),Object(r.b)("p",null,"Until you read the source code line by line, you will find the native plugin classes are inherited from ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/floatinghotpot/cordova-admob-pro/blob/master/src/android/AdMobPlugin.java#L39"}),Object(r.b)("inlineCode",{parentName:"a"},"com.rjfun.cordova.ad.GenericAdPlugin"))," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/floatinghotpot/cordova-admob-pro/blob/master/src/ios/CDVAdMobPlugin.h#L11"}),Object(r.b)("inlineCode",{parentName:"a"},"GenericAdPlugin")),", which are come from ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/floatinghotpot/cordova-admob-pro/blob/master/plugin.xml#L25"}),Object(r.b)("inlineCode",{parentName:"a"},"cordova-plugin-extension")),"."),Object(r.b)("p",null,"The author has removed the source repository which results ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/cordova-plugin-extension"}),"the npm page")," pointing to a broken link in GitHub. This should prevent a normal user finding out the content, but an advanced user could still check ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://unpkg.com/cordova-plugin-extension@1.5.4/"}),"the npm tarball content"),"."),Object(r.b)("p",null,"The plugin has included 2 suspicious binary files, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://unpkg.com/cordova-plugin-extension@1.5.4/src/android/cordova-generic-ad.jar"}),"cordova-generic-ad.jar")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://unpkg.com/cordova-plugin-extension@1.5.4/src/ios/libCordovaGenericAd.a"}),"libCordovaGenericAd.a"),". Clearly, they are providing the base native plugin classes."),Object(r.b)("h2",{id:"phoning-home"},"Phoning home"),Object(r.b)("p",null,"Since the base classes are coming from binray files, it is hard to know what they are doing. However, when trying to inspect the network requests with the plugin installed, it tells more. A HTTP request is sent after the app starts,"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-http"}),"POST http://adlic.rjfun.com/adlic HTTP/1.1\nHost: adlic.rjfun.com\nContent-Type: application/x-www-form-urlencoded\nUser-Agent: Demo/1.0.0 CFNetwork/901.1 Darwin/17.7.0\nAccept-Language: en-us\n\napp=com.rjfun.demo&os=ios&net=admob&lic=\n")),Object(r.b)("p",null,"It returns a JSON data,"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{"r":0,"b":"","i":"","n":"","v":"","js":""}\n')),Object(r.b)("p",null,"At this point, it is clear the plugin collecting your app info to the author owned server and response data for the plugin to consume. A guess usage would be ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/floatinghotpot/cordova-admob-pro#license"}),"checking the license"),", but the author never mentions it in the documentation."),Object(r.b)("h2",{id:"remote-controlling-ads"},"Remote controlling ads"),Object(r.b)("p",null,"Thanks to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://drive.google.com/file/d/0B5vtpya8P4b-NUZTdUhBVkFlU0E/view"}),"a document shared by a user"),", it revealed more about the black magic."),Object(r.b)("p",null,"From the user,"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"i am using your plugin in my app. I have never use any license key. I wanted to share 2% of my ad. BUT! Your plugin took 30% of my ad.")),Object(r.b)("p",null,"From the plugin author,"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"After check, we find your app in the black list, and a random higher rate will be applied. Usually when a guy is using a fake license key, or send unusual attacking request (for example, request not from iOS/android cordova platform), the ant\xadcrack logic will be triggered and move the app into the black list."),Object(r.b)("p",{parentName:"blockquote"},"As mentioned in the license agreement, if you have earned more than $1000, a valid license is required, or else some ad sharing will be applied. When you use my code in your app, you are assumed to accept the license agreement. If you did not accept my term, then you are not allowed to use my code without permission."),Object(r.b)("p",{parentName:"blockquote"},"Second, the ad sharing rate is not as what you guess. You may not know that, for any new app, the ad sharing is 0% from beginning, not 2%. When the system calculate your earning exceed $1000, if no license key is still provided, it will start to applied 2% ad sharing. But, when unusual request detected, it will increase the rate bit by bit, but no more than 30%.")),Object(r.b)("p",null,"The plugin has ability to control how much ad-sharing from the server, and will increase ad-sharing according to some undocumented conditions. The author claims it will not share more than 30% ad revenue."),Object(r.b)("h2",{id:"conclusion"},"Conclusion"),Object(r.b)("p",null,"The author of ",Object(r.b)("inlineCode",{parentName:"p"},"cordova-plugin-admobpro")," has using a very sophisticated approach to do ad-sharing without telling much details it, or writing ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/floatinghotpot/coding-to-monetization"}),"a very detailed document")," to promote his plugin, but not mentioning the ad-sharing part. It is hard judge if it is an issue of honesty, but I don't think it aligns the spirit of open source."),Object(r.b)("p",null,"With the increasing adoption of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ratson/cordova-plugin-admob-free"}),"cordova-plugin-admob-free"),", I wish there is an enough momentum to finance ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://admob-plus.github.io/"}),"a sustainable and trustable AdMob plugin"),"."),Object(r.b)("p",null,"If you do have to stick with ",Object(r.b)("inlineCode",{parentName:"p"},"cordova-plugin-admobpro"),", consider adding analytics whenever displaying ads to compare it with you ad display count, so as least you know how much is lost."))}p.isMDXComponent=!0}}]);
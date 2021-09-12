"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[7312],{1080:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return h}});var n=o(3289);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(o),h=a,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||r;return o?n.createElement(m,i(i({ref:t},p),{},{components:o})):n.createElement(m,i({ref:t},p))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},9704:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return p},toc:function(){return c},default:function(){return h}});var n=o(1629),a=o(7322),r=(o(3289),o(1080)),i=["components"],l={title:"How cordova-plugin-admobpro works",author:"Ratson",author_url:"https://github.com/ratson",author_image_url:"https://avatars.githubusercontent.com/u/2682937?v=4",tags:["admob","cordova"]},s=void 0,u={permalink:"/blog/2018/08/05/how-cordova-plugin-admobpro-works",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/blog/blog/2018-08-05-how-cordova-plugin-admobpro-works.md",source:"@site/blog/2018-08-05-how-cordova-plugin-admobpro-works.md",title:"How cordova-plugin-admobpro works",description:"I believe most cordova-plugin-admobpro users do not know how the plugin works, as the author does not explain it or intentionally hide it. This blog post is going to uncover the details, so users could have better understanding about what is added to their projects.",date:"2018-08-05T00:00:00.000Z",formattedDate:"August 5, 2018",tags:[{label:"admob",permalink:"/blog/tags/admob"},{label:"cordova",permalink:"/blog/tags/cordova"}],readingTime:3.28,truncated:!1,authors:[{name:"Ratson",url:"https://github.com/ratson",imageURL:"https://avatars.githubusercontent.com/u/2682937?v=4"}],prevItem:{title:"Release 1.0",permalink:"/blog/2020/03/21/release-1.0"},nextItem:{title:"History of cordova-plugin-admob-free",permalink:"/blog/2018/07/15/history-of-cordova-plugin-admob-free"}},p={authorsImageUrls:[void 0]},c=[{value:"cordova-plugin-extension",id:"cordova-plugin-extension",children:[]},{value:"Phoning home",id:"phoning-home",children:[]},{value:"Remote controlling ads",id:"remote-controlling-ads",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],d={toc:c};function h(e){var t=e.components,o=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I believe most ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cordova-plugin-admobpro"},(0,r.kt)("inlineCode",{parentName:"a"},"cordova-plugin-admobpro"))," users do not know how the plugin works, as the author does not explain it or intentionally hide it. This blog post is going to uncover the details, so users could have better understanding about what is added to their projects."),(0,r.kt)("h2",{id:"cordova-plugin-extension"},"cordova-plugin-extension"),(0,r.kt)("p",null,"When looking at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/floatinghotpot/cordova-admob-pro"},"the repository"),", it looks like a normal cordova plugin repository, where source code are ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"www"),"."),(0,r.kt)("p",null,"Until you read the source code line by line, you will find the native plugin classes are inherited from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/floatinghotpot/cordova-admob-pro/blob/master/src/android/AdMobPlugin.java#L39"},(0,r.kt)("inlineCode",{parentName:"a"},"com.rjfun.cordova.ad.GenericAdPlugin"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/floatinghotpot/cordova-admob-pro/blob/master/src/ios/CDVAdMobPlugin.h#L11"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericAdPlugin")),", which are come from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/floatinghotpot/cordova-admob-pro/blob/master/plugin.xml#L25"},(0,r.kt)("inlineCode",{parentName:"a"},"cordova-plugin-extension")),"."),(0,r.kt)("p",null,"The author has removed the source repository which results ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cordova-plugin-extension"},"the npm page")," pointing to a broken link in GitHub. This should prevent a normal user finding out the content, but an advanced user could still check ",(0,r.kt)("a",{parentName:"p",href:"https://unpkg.com/cordova-plugin-extension@1.5.4/"},"the npm tarball content"),"."),(0,r.kt)("p",null,"The plugin has included 2 suspicious binary files, ",(0,r.kt)("a",{parentName:"p",href:"https://unpkg.com/cordova-plugin-extension@1.5.4/src/android/cordova-generic-ad.jar"},"cordova-generic-ad.jar")," and ",(0,r.kt)("a",{parentName:"p",href:"https://unpkg.com/cordova-plugin-extension@1.5.4/src/ios/libCordovaGenericAd.a"},"libCordovaGenericAd.a"),". Clearly, they are providing the base native plugin classes."),(0,r.kt)("h2",{id:"phoning-home"},"Phoning home"),(0,r.kt)("p",null,"Since the base classes are coming from binray files, it is hard to know what they are doing. However, when trying to inspect the network requests with the plugin installed, it tells more. A HTTP request is sent after the app starts,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"POST http://adlic.rjfun.com/adlic HTTP/1.1\nHost: adlic.rjfun.com\nContent-Type: application/x-www-form-urlencoded\nUser-Agent: Demo/1.0.0 CFNetwork/901.1 Darwin/17.7.0\nAccept-Language: en-us\n\napp=com.rjfun.demo&os=ios&net=admob&lic=\n")),(0,r.kt)("p",null,"It returns a JSON data,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"r":0,"b":"","i":"","n":"","v":"","js":""}\n')),(0,r.kt)("p",null,"At this point, it is clear the plugin collecting your app info to the author owned server and response data for the plugin to consume. A guess usage would be ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/floatinghotpot/cordova-admob-pro#license"},"checking the license"),", but the author never mentions it in the documentation."),(0,r.kt)("h2",{id:"remote-controlling-ads"},"Remote controlling ads"),(0,r.kt)("p",null,"Thanks to ",(0,r.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/0B5vtpya8P4b-NUZTdUhBVkFlU0E/view"},"a document shared by a user"),", it revealed more about the black magic."),(0,r.kt)("p",null,"From the user,"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"i am using your plugin in my app. I have never use any license key. I wanted to share 2% of my ad. BUT! Your plugin took 30% of my ad.")),(0,r.kt)("p",null,"From the plugin author,"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"After check, we find your app in the black list, and a random higher rate will be applied. Usually when a guy is using a fake license key, or send unusual attacking request (for example, request not from iOS/android cordova platform), the ant\xadcrack logic will be triggered and move the app into the black list."),(0,r.kt)("p",{parentName:"blockquote"},"As mentioned in the license agreement, if you have earned more than $1000, a valid license is required, or else some ad sharing will be applied. When you use my code in your app, you are assumed to accept the license agreement. If you did not accept my term, then you are not allowed to use my code without permission."),(0,r.kt)("p",{parentName:"blockquote"},"Second, the ad sharing rate is not as what you guess. You may not know that, for any new app, the ad sharing is 0% from beginning, not 2%. When the system calculate your earning exceed $1000, if no license key is still provided, it will start to applied 2% ad sharing. But, when unusual request detected, it will increase the rate bit by bit, but no more than 30%.")),(0,r.kt)("p",null,"The plugin has ability to control how much ad-sharing from the server, and will increase ad-sharing according to some undocumented conditions. The author claims it will not share more than 30% ad revenue."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"The author of ",(0,r.kt)("inlineCode",{parentName:"p"},"cordova-plugin-admobpro")," has using a very sophisticated approach to do ad-sharing without telling much details it, or writing ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/floatinghotpot/coding-to-monetization"},"a very detailed document")," to promote his plugin, but not mentioning the ad-sharing part. It is hard judge if it is an issue of honesty, but I don't think it aligns the spirit of open source."),(0,r.kt)("p",null,"With the increasing adoption of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ratson/cordova-plugin-admob-free"},"cordova-plugin-admob-free"),", I wish there is an enough momentum to finance ",(0,r.kt)("a",{parentName:"p",href:"https://admob-plus.github.io/"},"a sustainable and trustable AdMob plugin"),"."),(0,r.kt)("p",null,"If you do have to stick with ",(0,r.kt)("inlineCode",{parentName:"p"},"cordova-plugin-admobpro"),", consider adding analytics whenever displaying ads to compare it with you ad display count, so as least you know how much is lost."))}h.isMDXComponent=!0}}]);
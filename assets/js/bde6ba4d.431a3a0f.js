"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[7312],{5895:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var t=n(5250),i=n(4550);const a={title:"How cordova-plugin-admobpro works",author:"Ratson",author_url:"https://github.com/ratson",author_image_url:"https://avatars.githubusercontent.com/u/2682937?v=4",tags:["admob","cordova"]},r=void 0,s={permalink:"/blog/2018/08/05/how-cordova-plugin-admobpro-works",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/blog/blog/2018-08-05-how-cordova-plugin-admobpro-works.md",source:"@site/blog/2018-08-05-how-cordova-plugin-admobpro-works.md",title:"How cordova-plugin-admobpro works",description:"I believe most cordova-plugin-admobpro users do not know how the plugin works, as the author does not explain it or intentionally hide it. This blog post is going to uncover the details, so users could have better understanding about what is added to their projects.",date:"2018-08-05T00:00:00.000Z",formattedDate:"August 5, 2018",tags:[{label:"admob",permalink:"/blog/tags/admob"},{label:"cordova",permalink:"/blog/tags/cordova"}],readingTime:3.365,hasTruncateMarker:!1,authors:[{name:"Ratson",url:"https://github.com/ratson",imageURL:"https://avatars.githubusercontent.com/u/2682937?v=4"}],frontMatter:{title:"How cordova-plugin-admobpro works",author:"Ratson",author_url:"https://github.com/ratson",author_image_url:"https://avatars.githubusercontent.com/u/2682937?v=4",tags:["admob","cordova"]},unlisted:!1,prevItem:{title:"Release 1.0",permalink:"/blog/2020/03/21/release-1.0"},nextItem:{title:"History of cordova-plugin-admob-free",permalink:"/blog/2018/07/15/history-of-cordova-plugin-admob-free"}},l={authorsImageUrls:[void 0]},d=[{value:"cordova-plugin-extension",id:"cordova-plugin-extension",level:2},{value:"Phoning home",id:"phoning-home",level:2},{value:"Remote controlling ads",id:"remote-controlling-ads",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:["I believe most ",(0,t.jsx)(o.a,{href:"https://www.npmjs.com/package/cordova-plugin-admobpro",children:(0,t.jsx)(o.code,{children:"cordova-plugin-admobpro"})})," users do not know how the plugin works, as the author does not explain it or intentionally hide it. This blog post is going to uncover the details, so users could have better understanding about what is added to their projects."]}),"\n",(0,t.jsx)(o.h2,{id:"cordova-plugin-extension",children:"cordova-plugin-extension"}),"\n",(0,t.jsxs)(o.p,{children:["When looking at ",(0,t.jsx)(o.a,{href:"https://github.com/floatinghotpot/cordova-admob-pro",children:"the repository"}),", it looks like a normal cordova plugin repository, where source code are ",(0,t.jsx)(o.code,{children:"src"})," and ",(0,t.jsx)(o.code,{children:"www"}),"."]}),"\n",(0,t.jsxs)(o.p,{children:["Until you read the source code line by line, you will find the native plugin classes are inherited from ",(0,t.jsx)(o.a,{href:"https://github.com/floatinghotpot/cordova-admob-pro/blob/master/src/android/AdMobPlugin.java#L39",children:(0,t.jsx)(o.code,{children:"com.rjfun.cordova.ad.GenericAdPlugin"})})," and ",(0,t.jsx)(o.a,{href:"https://github.com/floatinghotpot/cordova-admob-pro/blob/master/src/ios/CDVAdMobPlugin.h#L11",children:(0,t.jsx)(o.code,{children:"GenericAdPlugin"})}),", which are come from ",(0,t.jsx)(o.a,{href:"https://github.com/floatinghotpot/cordova-admob-pro/blob/master/plugin.xml#L25",children:(0,t.jsx)(o.code,{children:"cordova-plugin-extension"})}),"."]}),"\n",(0,t.jsxs)(o.p,{children:["The author has removed the source repository which results ",(0,t.jsx)(o.a,{href:"https://www.npmjs.com/package/cordova-plugin-extension",children:"the npm page"})," pointing to a broken link in GitHub. This should prevent a normal user finding out the content, but an advanced user could still check ",(0,t.jsx)(o.a,{href:"https://unpkg.com/cordova-plugin-extension@1.5.4/",children:"the npm tarball content"}),"."]}),"\n",(0,t.jsxs)(o.p,{children:["The plugin has included 2 suspicious binary files, ",(0,t.jsx)(o.a,{href:"https://unpkg.com/cordova-plugin-extension@1.5.4/src/android/cordova-generic-ad.jar",children:"cordova-generic-ad.jar"})," and ",(0,t.jsx)(o.a,{href:"https://unpkg.com/cordova-plugin-extension@1.5.4/src/ios/libCordovaGenericAd.a",children:"libCordovaGenericAd.a"}),". Clearly, they are providing the base native plugin classes."]}),"\n",(0,t.jsx)(o.h2,{id:"phoning-home",children:"Phoning home"}),"\n",(0,t.jsx)(o.p,{children:"Since the base classes are coming from binray files, it is hard to know what they are doing. However, when trying to inspect the network requests with the plugin installed, it tells more. A HTTP request is sent after the app starts,"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-http",children:"POST http://adlic.rjfun.com/adlic HTTP/1.1\nHost: adlic.rjfun.com\nContent-Type: application/x-www-form-urlencoded\nUser-Agent: Demo/1.0.0 CFNetwork/901.1 Darwin/17.7.0\nAccept-Language: en-us\n\napp=com.rjfun.demo&os=ios&net=admob&lic=\n"})}),"\n",(0,t.jsx)(o.p,{children:"It returns a JSON data,"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-json",children:'{"r": 0, "b": "", "i": "", "n": "", "v": "", "js": ""}\n'})}),"\n",(0,t.jsxs)(o.p,{children:["At this point, it is clear the plugin collecting your app info to the author owned server and response data for the plugin to consume. A guess usage would be ",(0,t.jsx)(o.a,{href:"https://github.com/floatinghotpot/cordova-admob-pro#license",children:"checking the license"}),", but the author never mentions it in the documentation."]}),"\n",(0,t.jsx)(o.h2,{id:"remote-controlling-ads",children:"Remote controlling ads"}),"\n",(0,t.jsxs)(o.p,{children:["Thanks to a document shared by a user (the original link is broken: ",(0,t.jsx)(o.a,{href:"https://drive.google.com/file/d/0B5vtpya8P4b-NUZTdUhBVkFlU0E/view",children:"https://drive.google.com/file/d/0B5vtpya8P4b-NUZTdUhBVkFlU0E/view"}),"), it revealed more about the black magic."]}),"\n",(0,t.jsx)(o.p,{children:"From the user,"}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsx)(o.p,{children:"i am using your plugin in my app. I have never use any license key. I wanted to share 2% of my ad. BUT! Your plugin took 30% of my ad."}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:"From the plugin author,"}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsx)(o.p,{children:"After check, we find your app in the black list, and a random higher rate will be applied. Usually when a guy is using a fake license key, or send unusual attacking request (for example, request not from iOS/android cordova platform), the ant\xadcrack logic will be triggered and move the app into the black list."}),"\n",(0,t.jsx)(o.p,{children:"As mentioned in the license agreement, if you have earned more than $1000, a valid license is required, or else some ad sharing will be applied. When you use my code in your app, you are assumed to accept the license agreement. If you did not accept my term, then you are not allowed to use my code without permission."}),"\n",(0,t.jsx)(o.p,{children:"Second, the ad sharing rate is not as what you guess. You may not know that, for any new app, the ad sharing is 0% from beginning, not 2%. When the system calculate your earning exceed $1000, if no license key is still provided, it will start to applied 2% ad sharing. But, when unusual request detected, it will increase the rate bit by bit, but no more than 30%."}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:"The plugin has ability to control how much ad-sharing from the server, and will increase ad-sharing according to some undocumented conditions. The author claims it will not share more than 30% ad revenue."}),"\n",(0,t.jsx)(o.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsxs)(o.p,{children:["The author of ",(0,t.jsx)(o.code,{children:"cordova-plugin-admobpro"})," has using a very sophisticated approach to do ad-sharing without telling much details it, or writing ",(0,t.jsx)(o.a,{href:"https://github.com/floatinghotpot/coding-to-monetization",children:"a very detailed document"})," to promote his plugin, but not mentioning the ad-sharing part. It is hard judge if it is an issue of honesty, but I don't think it aligns the spirit of open source."]}),"\n",(0,t.jsxs)(o.p,{children:["With the increasing adoption of ",(0,t.jsx)(o.a,{href:"https://github.com/ratson/cordova-plugin-admob-free",children:"cordova-plugin-admob-free"}),", I wish there is an enough momentum to finance ",(0,t.jsx)(o.a,{href:"https://admob-plus.github.io/",children:"a sustainable and trustable AdMob plugin"}),"."]}),"\n",(0,t.jsxs)(o.p,{children:["If you do have to stick with ",(0,t.jsx)(o.code,{children:"cordova-plugin-admobpro"}),", consider adding analytics whenever displaying ads to compare it with you ad display count, so as least you know how much is lost."]})]})}function h(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},4550:(e,o,n)=>{n.d(o,{Z:()=>s,a:()=>r});var t=n(79);const i={},a=t.createContext(i);function r(e){const o=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:o},e.children)}}}]);
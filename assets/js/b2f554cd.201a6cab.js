"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[1477],{10:o=>{o.exports=JSON.parse('{"blogPosts":[{"id":"/2020/03/21/release-1.0","metadata":{"permalink":"/blog/2020/03/21/release-1.0","editUrl":"https://github.com/admob-plus/admob-plus/edit/master/website/blog/blog/2020-03-21-release-1.0.md","source":"@site/blog/2020-03-21-release-1.0.md","title":"Release 1.0","description":"It is a long way to reach the 1.0 release.","date":"2020-03-21T00:00:00.000Z","formattedDate":"March 21, 2020","tags":[{"label":"admob-plus","permalink":"/blog/tags/admob-plus"},{"label":"release","permalink":"/blog/tags/release"},{"label":"cordova","permalink":"/blog/tags/cordova"},{"label":"ionic","permalink":"/blog/tags/ionic"},{"label":"capacitor","permalink":"/blog/tags/capacitor"}],"readingTime":2.17,"hasTruncateMarker":false,"authors":[{"name":"Ratson","url":"https://github.com/ratson","imageURL":"https://avatars.githubusercontent.com/u/2682937?v=4"}],"frontMatter":{"title":"Release 1.0","author":"Ratson","author_url":"https://github.com/ratson","author_image_url":"https://avatars.githubusercontent.com/u/2682937?v=4","tags":["admob-plus","release","cordova","ionic","capacitor"]},"nextItem":{"title":"How cordova-plugin-admobpro works","permalink":"/blog/2018/08/05/how-cordova-plugin-admobpro-works"}},"content":"It is [a long way](https://github.com/admob-plus/admob-plus/compare/cordova-admob-plus@0.42.0...admob-plus-cordova@1.0.0) to reach the 1.0 release.\\n\\n```js\\n480 commits, 730 files changed, 16341 insertions(+), 24085 deletions(-)\\n```\\n\\n1.0 is a serious rewrite of its internals and APIs to utilize the [recently updated](https://developers.google.com/admob/ios/migration) and [upcoming](https://developers.google.com/admob/android/migration) Google AdMob SDK.\\n\\nApart from the usual Cordova plugin, AdMob Plus is now officially providing plugins for [Ionic](https://ionicframework.com/) and [Capacitor v3](https://capacitorjs.com/).\\n\\n## Cordova Plugin\\n\\nPackage of Cordova plugin has been renamed from [`cordova-admob-plus`](https://www.npmjs.com/package/cordova-admob-plus) to [`admob-plus-cordova`](https://www.npmjs.com/package/admob-plus-cordova).\\nThis keeps [@ionic-native/admob-plus](https://ionicframework.com/docs/native/admob-plus) working without breaking.\\n\\n`cordova-admob-plus` is now deprecated in favor of the new plugin, Ionic users should transit to use [`@admob-plus/ionic`](https://www.npmjs.com/package/@admob-plus/ionic) for the latest improvements.\\n\\n[Documentation](https://admob-plus.github.io/docs/cordova)\\n\\n### TypeScript Support\\n\\n`admob-plus-cordova` exports types for TypeScript projects.\\n\\nUse Triple-slash directives to have global `admob` object typed,\\n\\n```ts\\n/// <reference types=\\"admob-plus-cordova\\" />\\n```\\n\\nRegular import works too,\\n\\n```ts\\nimport { BannerAd } from \'admob-plus-cordova\'\\n\\nlet banner: BannerAd\\n```\\n\\n### Multiple Ad Instances\\n\\nIt is now to manage multiple instances of the same ad format, thanks to the new API design.\\n\\n```ts\\nconst banner1 = admob.BannerAd({...})\\nconst banner2 = admob.BannerAd({...})\\n```\\n\\n### Rewarded Interstitial Ad\\n\\nAs part fo utilizing the SDK, new ad format [`Rewarded Interstitial Ad`](https://admob-plus.github.io/docs/cordova/ads/rewarded-interstitial) is added.\\n\\n### App Tracking Transparency\\n\\n`requestTrackingAuthorization()` was part of [`cordova-plugin-consent`](https://www.npmjs.com/package/cordova-plugin-consent), is now moved to `admob-plus-cordova`,\\n\\n```ts\\nadmob.requestTrackingAuthorization()\\n```\\n\\nWhile you could [consider using it or not](https://admob-plus.github.io/docs/cordova/faq#shoud-i-use-apples-att-prompt), this makes ATT integration much easier.\\n\\n### API Docs\\n\\n[API docs](https://admob-plus.github.io/docs/cordova/api) are automatically generated from source code to provide up-to-date reference to classes, methods and interfaces.\\n\\n## Ionic Plugin\\n\\nThe Ionic community has maintained [`@ionic-native/admob-plus`](https://www.npmjs.com/package/@ionic-native/admob-plus) for some time, it is hard to keep changes in sync with wrapping Cordova plugin due to the difference of release cycle.\\n\\nBy officially maintaining the Ionic plugin [`@admob-plus/ionic`](https://www.npmjs.com/package/@admob-plus/ionic), the API and documentation will always be up-to-date.\\n\\n[Documentation](https://admob-plus.github.io/docs/ionic)\\n\\n## Capacitor Plugin\\n\\nCapacitor 3 is around the corner, [`@admob-plus/capacitor`](https://www.npmjs.com/package/@admob-plus/capacitor) provides familiar AdMob Plus APIs for those want to try it out.\\n\\n[Documentation](https://admob-plus.github.io/docs/capacitor)\\n\\n## GitHub Sponsors\\n\\nI have setup the [Funding page](https://admob-plus.github.io/funding) since the project start to subsidize my open source work.\\n\\nBy adding [GitHub Sponsors](https://github.com/sponsors/ratson) option, I wish there will be more recurring support.\\n\\n## Thank You\\n\\nI would like to take the chance to say thank you to [all contributors](https://github.com/admob-plus/admob-plus/graphs/contributors), especially to all sponsors supporting my work financially.\\n\\n* [@krunalsk007](https://github.com/krunalsk007)\\n* [@shonek007](https://github.com/shonek007)\\n* Aleh Belko\\n* Amir\\n* chawalit sittichai\\n* Damien\\n* EMI SANIMAN\\n* gui\xf1otepro\\n* Ivan Lopez\\n* J. Rafael\\n* Jos\xe9 Manuel Alarc\xf3n Lombardo\\n* Leon Raymond Calcutt\\n* Oliver\\n* RyanDev Studio\\n* stefan sprenger\\n* titroo team Tasos, Kostis, Fotis\\n* Vanilla\\n* Varun Ramesh\\n* Vincent Lepski\\n* \uae40\ub3d9\uaddc\\n\\n(Names are sorted by alphabetical order)"},{"id":"/2018/08/05/how-cordova-plugin-admobpro-works","metadata":{"permalink":"/blog/2018/08/05/how-cordova-plugin-admobpro-works","editUrl":"https://github.com/admob-plus/admob-plus/edit/master/website/blog/blog/2018-08-05-how-cordova-plugin-admobpro-works.md","source":"@site/blog/2018-08-05-how-cordova-plugin-admobpro-works.md","title":"How cordova-plugin-admobpro works","description":"I believe most cordova-plugin-admobpro users do not know how the plugin works, as the author does not explain it or intentionally hide it. This blog post is going to uncover the details, so users could have better understanding about what is added to their projects.","date":"2018-08-05T00:00:00.000Z","formattedDate":"August 5, 2018","tags":[{"label":"admob","permalink":"/blog/tags/admob"},{"label":"cordova","permalink":"/blog/tags/cordova"}],"readingTime":3.28,"hasTruncateMarker":false,"authors":[{"name":"Ratson","url":"https://github.com/ratson","imageURL":"https://avatars.githubusercontent.com/u/2682937?v=4"}],"frontMatter":{"title":"How cordova-plugin-admobpro works","author":"Ratson","author_url":"https://github.com/ratson","author_image_url":"https://avatars.githubusercontent.com/u/2682937?v=4","tags":["admob","cordova"]},"prevItem":{"title":"Release 1.0","permalink":"/blog/2020/03/21/release-1.0"},"nextItem":{"title":"History of cordova-plugin-admob-free","permalink":"/blog/2018/07/15/history-of-cordova-plugin-admob-free"}},"content":"I believe most [`cordova-plugin-admobpro`](https://www.npmjs.com/package/cordova-plugin-admobpro) users do not know how the plugin works, as the author does not explain it or intentionally hide it. This blog post is going to uncover the details, so users could have better understanding about what is added to their projects.\\n\\n## cordova-plugin-extension\\n\\nWhen looking at [the repository](https://github.com/floatinghotpot/cordova-admob-pro), it looks like a normal cordova plugin repository, where source code are `src` and `www`.\\n\\nUntil you read the source code line by line, you will find the native plugin classes are inherited from [`com.rjfun.cordova.ad.GenericAdPlugin`](https://github.com/floatinghotpot/cordova-admob-pro/blob/master/src/android/AdMobPlugin.java#L39) and [`GenericAdPlugin`](https://github.com/floatinghotpot/cordova-admob-pro/blob/master/src/ios/CDVAdMobPlugin.h#L11), which are come from [`cordova-plugin-extension`](https://github.com/floatinghotpot/cordova-admob-pro/blob/master/plugin.xml#L25).\\n\\nThe author has removed the source repository which results [the npm page](https://www.npmjs.com/package/cordova-plugin-extension) pointing to a broken link in GitHub. This should prevent a normal user finding out the content, but an advanced user could still check [the npm tarball content](https://unpkg.com/cordova-plugin-extension@1.5.4/).\\n\\nThe plugin has included 2 suspicious binary files, [cordova-generic-ad.jar](https://unpkg.com/cordova-plugin-extension@1.5.4/src/android/cordova-generic-ad.jar) and [libCordovaGenericAd.a](https://unpkg.com/cordova-plugin-extension@1.5.4/src/ios/libCordovaGenericAd.a). Clearly, they are providing the base native plugin classes.\\n\\n## Phoning home\\n\\nSince the base classes are coming from binray files, it is hard to know what they are doing. However, when trying to inspect the network requests with the plugin installed, it tells more. A HTTP request is sent after the app starts,\\n\\n```http\\nPOST http://adlic.rjfun.com/adlic HTTP/1.1\\nHost: adlic.rjfun.com\\nContent-Type: application/x-www-form-urlencoded\\nUser-Agent: Demo/1.0.0 CFNetwork/901.1 Darwin/17.7.0\\nAccept-Language: en-us\\n\\napp=com.rjfun.demo&os=ios&net=admob&lic=\\n```\\n\\nIt returns a JSON data,\\n\\n```json\\n{\\"r\\":0,\\"b\\":\\"\\",\\"i\\":\\"\\",\\"n\\":\\"\\",\\"v\\":\\"\\",\\"js\\":\\"\\"}\\n```\\n\\nAt this point, it is clear the plugin collecting your app info to the author owned server and response data for the plugin to consume. A guess usage would be [checking the license](https://github.com/floatinghotpot/cordova-admob-pro#license), but the author never mentions it in the documentation.\\n\\n## Remote controlling ads\\n\\nThanks to [a document shared by a user](https://drive.google.com/file/d/0B5vtpya8P4b-NUZTdUhBVkFlU0E/view), it revealed more about the black magic.\\n\\nFrom the user,\\n> i am using your plugin in my app. I have never use any license key. I wanted to share 2% of my ad. BUT! Your plugin took 30% of my ad.\\n\\nFrom the plugin author,\\n> After check, we find your app in the black list, and a random higher rate will be applied. Usually when a guy is using a fake license key, or send unusual attacking request (for example, request not from iOS/android cordova platform), the ant\xadcrack logic will be triggered and move the app into the black list.\\n>\\n> As mentioned in the license agreement, if you have earned more than $1000, a valid license is required, or else some ad sharing will be applied. When you use my code in your app, you are assumed to accept the license agreement. If you did not accept my term, then you are not allowed to use my code without permission.\\n>\\n> Second, the ad sharing rate is not as what you guess. You may not know that, for any new app, the ad sharing is 0% from beginning, not 2%. When the system calculate your earning exceed $1000, if no license key is still provided, it will start to applied 2% ad sharing. But, when unusual request detected, it will increase the rate bit by bit, but no more than 30%.\\n\\nThe plugin has ability to control how much ad-sharing from the server, and will increase ad-sharing according to some undocumented conditions. The author claims it will not share more than 30% ad revenue.\\n\\n## Conclusion\\n\\nThe author of `cordova-plugin-admobpro` has using a very sophisticated approach to do ad-sharing without telling much details it, or writing [a very detailed document](https://github.com/floatinghotpot/coding-to-monetization) to promote his plugin, but not mentioning the ad-sharing part. It is hard judge if it is an issue of honesty, but I don\'t think it aligns the spirit of open source.\\n\\nWith the increasing adoption of [cordova-plugin-admob-free](https://github.com/ratson/cordova-plugin-admob-free), I wish there is an enough momentum to finance [a sustainable and trustable AdMob plugin](https://admob-plus.github.io/).\\n\\nIf you do have to stick with `cordova-plugin-admobpro`, consider adding analytics whenever displaying ads to compare it with you ad display count, so as least you know how much is lost."},{"id":"/2018/07/15/history-of-cordova-plugin-admob-free","metadata":{"permalink":"/blog/2018/07/15/history-of-cordova-plugin-admob-free","editUrl":"https://github.com/admob-plus/admob-plus/edit/master/website/blog/blog/2018-07-15-history-of-cordova-plugin-admob-free.md","source":"@site/blog/2018-07-15-history-of-cordova-plugin-admob-free.md","title":"History of cordova-plugin-admob-free","description":"2 years ago, I have a cordova project needed to add Google AdMob for showing ads. I was searching an open source solution, soon landed to the popular cordova-plugin-admobpro.","date":"2018-07-15T00:00:00.000Z","formattedDate":"July 15, 2018","tags":[{"label":"admob","permalink":"/blog/tags/admob"},{"label":"cordova","permalink":"/blog/tags/cordova"},{"label":"cordova-plugin-admobpro","permalink":"/blog/tags/cordova-plugin-admobpro"}],"readingTime":1.665,"hasTruncateMarker":false,"authors":[{"name":"Ratson","url":"https://github.com/ratson","imageURL":"https://avatars.githubusercontent.com/u/2682937?v=4"}],"frontMatter":{"title":"History of cordova-plugin-admob-free","author":"Ratson","author_url":"https://github.com/ratson","author_image_url":"https://avatars.githubusercontent.com/u/2682937?v=4","tags":["admob","cordova","cordova-plugin-admobpro"]},"prevItem":{"title":"How cordova-plugin-admobpro works","permalink":"/blog/2018/08/05/how-cordova-plugin-admobpro-works"}},"content":"2 years ago, I have a cordova project needed to add Google AdMob for showing ads. I was searching an open source solution, soon landed to the popular [cordova-plugin-admobpro](https://www.npmjs.com/package/cordova-plugin-admobpro).\\n\\n## Research\\n\\nAs my typical practice of choosing a open source project, apart from looking at Github stars and package download count, I would read the source code to evaluate the code quality and check past issues and pull requests for how well a project is maintained.\\n\\nLike most Cordova Plugins, the code is written to be just work, not for read or extend. However, I was alerted when I was inspecting the source of its dependency, [cordova-plugin-extension](https://www.npmjs.com/package/cordova-plugin-extension). I found 2 binary files were used, [cordova-generic-ad.jar](https://unpkg.com/cordova-plugin-extension@1.5.4/src/android/cordova-generic-ad.jar) for Android and [libCordovaGenericAd.a](https://unpkg.com/cordova-plugin-extension@1.5.4/src/ios/libCordovaGenericAd.a) for iOS.\\n\\nThen I searched through the documentation for explaination about the binary files, the author said nothing about them, but I found the [pruchase license option](https://github.com/floatinghotpot/cordova-admob-pro#license), so it is very like some license verification code. After I run it under network monitoring, I discovered that the plugin is sending application information to http://adlic.rjfun.com/adlic to retrive Ad Unit ID. Searching the URL in the issue track reveals that a user reported lose revenue and the author explained it was some server bugs.\\n\\nAt this point, I have lost trust to the author, I started searching other solutions. Interestingly, there is no completely free and open source solution, many are doing ad-sharing without telling their users.\\n\\n## Fork\\n\\nI then decided to fork a relative high quality plugin with the ad-sharing code removed, I picked [cordova-plugin-admob-simple](https://www.npmjs.com/package/cordova-plugin-admob-simple) as it has the most recent commit at that time. Just 2 weeks after I had working on my fork version, [cordova-plugin-admob](https://github.com/floatinghotpot/cordova-plugin-admob) author (the same author of `cordova-plugin-admobpro`) was [claiming his credit](https://github.com/sunnycupertino/cordova-plugin-admob-simple/issues/1).\\n\\nAs a result, [cordova-plugin-admob-free](https://github.com/ratson/cordova-plugin-admob-free) becomes a fork of `cordova-plugin-admob-simple` and `cordova-plugin-admob`.\\n\\n## Next\\n\\nAdMob Plus, being the successor of `cordova-plugin-admob-free`, is continue to be free and open source. Instead of stealing your revenve, [I ask funding explictily](https://ratson.name/fund-admob-plus), but you don\'t have to pay to enjoy all features."}]}')}}]);
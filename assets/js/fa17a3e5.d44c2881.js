(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{171:function(e,t,n){"use strict";n.r(t);var a=n(181),l=n(183),r=n(182),o=n(0),c=n.n(o);t.default=function(){var e=Object(l.useVersions)(),t=Object(l.useLatestVersion)(),n=e.filter((function(e){return e!==t&&"current"!==e.name})),o=n.shift();return c.a.createElement(r.a,{title:"Versions",description:"Versions page listing all documented site versions"},c.a.createElement("main",{className:"container margin-vert--lg"},c.a.createElement("h1",null,"Documentation versions"),o&&c.a.createElement("div",{className:"margin-bottom--lg"},c.a.createElement("h3",{id:"next"},"Current version (Stable)"),c.a.createElement("p",null,"Here you can find the documentation for current released version."),c.a.createElement("table",null,c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("th",null,o.name),c.a.createElement("td",null,c.a.createElement(a.a,{to:o.path},"Documentation")))))),c.a.createElement("div",{className:"margin-bottom--lg"},c.a.createElement("h3",{id:"latest"},"Next version (Unreleased)"),c.a.createElement("p",null,"Here you can find the documentation for work-in-process unreleased version."),c.a.createElement("table",null,c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("th",null,t.label),c.a.createElement("td",null,c.a.createElement(a.a,{to:t.path},"Documentation")))))),n.length>0&&c.a.createElement("div",{className:"margin-bottom--lg"},c.a.createElement("h3",{id:"archive"},"Past versions (Not maintained anymore)"),c.a.createElement("p",null,"Here you can find documentation for previous versions of Docusaurus."),c.a.createElement("table",null,c.a.createElement("tbody",null,n.map((function(e){return c.a.createElement("tr",{key:e.name},c.a.createElement("th",null,e.label),c.a.createElement("td",null,c.a.createElement(a.a,{to:e.path},"Documentation")))})))))))}}}]);
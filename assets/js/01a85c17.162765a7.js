"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[4013],{8535:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(915),r=a(79),l=a(9841),i=a(4132),c=a(4805),s=a(6609),m=a(943),o="sidebar_OsBs",u="sidebarItemTitle_f7M3",b="sidebarItemList_wANE",d="sidebarItem_ncKd",g="sidebarItemLink_chSo",E="sidebarItemLinkActive_X4VT";function p(e){var t=e.sidebar;return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,l.Z)(o,"thin-scrollbar"),"aria-label":(0,m.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(u,"margin-bottom--md")},t.title),r.createElement("ul",{className:(0,l.Z)(b,"clean-list")},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:d},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:E},e.title))})))))}var f=a(8947);function v(e){var t=e.sidebar;return r.createElement("ul",{className:"menu__list"},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function h(e){return r.createElement(f.Zo,{component:v,props:e})}function N(e){var t=e.sidebar,a=(0,c.i)();return null!=t&&t.items.length?"mobile"===a?r.createElement(h,{sidebar:t}):r.createElement(p,{sidebar:t}):null}var _=["sidebar","toc","children"];function k(e){var t=e.sidebar,a=e.toc,c=e.children,s=(0,n.Z)(e,_),m=t&&t.items.length>0;return r.createElement(i.Z,s,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(N,{sidebar:t}),r.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},c),a&&r.createElement("div",{className:"col col--2"},a))))}},6948:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(79),r=a(9841),l=a(943);var i=a(3631),c=a(6607),s=a(8535),m=a(9502),o="tag_vjOd";function u(e){var t=e.letterEntry;return n.createElement("article",null,n.createElement("h2",null,t.letter),n.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return n.createElement("li",{key:e.permalink,className:o},n.createElement(m.Z,e))}))),n.createElement("hr",null))}function b(e){var t=function(e){var t={};return Object.values(e).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort((function(e,t){var a=e[0],n=t[0];return a.localeCompare(n)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,t){return e.label.localeCompare(t.label)}))}}))}(e.tags);return n.createElement("section",{className:"margin-vert--lg"},t.map((function(e){return n.createElement(u,{key:e.letter,letterEntry:e})})))}var d=a(2640);function g(e){var t=e.tags,a=e.sidebar,m=(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});return n.createElement(i.FG,{className:(0,r.Z)(c.k.wrapper.blogPages,c.k.page.blogTagsListPage)},n.createElement(i.d,{title:m}),n.createElement(d.Z,{tag:"blog_tags_list"}),n.createElement(s.Z,{sidebar:a},n.createElement("h1",null,m),n.createElement(b,{tags:t})))}},9502:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(79),r=a(9841),l=a(6609),i="tag_raJN",c="tagRegular_Wr0q",s="tagWithCount_IVbm";function m(e){var t=e.permalink,a=e.label,m=e.count;return n.createElement(l.Z,{href:t,className:(0,r.Z)(i,m?s:c)},a,m&&n.createElement("span",null,m))}}}]);
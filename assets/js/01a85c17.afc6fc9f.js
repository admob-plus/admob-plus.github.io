(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[4013],{2145:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var n=a(3289),r=a(2238),l=a(3292),s="sidebar_2jHx",i="sidebarItemTitle_39nF",c="sidebarItemList_3cA1",m="sidebarItem_K2Oa",u="sidebarItemLink_1sEF",o="sidebarItemLinkActive_3G2C";function g(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("div",{className:(0,r.Z)(s,"thin-scrollbar")},n.createElement("h3",{className:i},t.title),n.createElement("ul",{className:c},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:m},n.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:o},e.title))}))))}},4274:function(e,t,a){"use strict";a.r(t);var n=a(3289),r=a(9473),l=a(3292),s=a(2145),i=a(8391),c=a(5552);t.default=function(e){var t=e.tags,a=e.sidebar,m={};Object.keys(t).forEach((function(e){var t=function(e){return e[0].toUpperCase()}(e);m[t]=m[t]||[],m[t].push(e)}));var u=Object.entries(m).sort((function(e,t){var a=e[0],n=t[0];return a===n?0:a>n?1:-1})).map((function(e){var a=e[0],r=e[1];return n.createElement("div",{key:a},n.createElement("h3",null,a),r.map((function(e){return n.createElement(l.Z,{className:"padding-right--md",href:t[e].permalink,key:e},t[e].name," (",t[e].count,")")})),n.createElement("hr",null))})).filter((function(e){return null!=e}));return n.createElement(r.Z,{title:"Tags",description:"Blog Tags",wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"}},n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--3"},n.createElement(s.Z,{sidebar:a})),n.createElement("main",{className:"col col--7"},n.createElement("h1",null,n.createElement(i.Z,{id:"theme.tags.tagsPageTitle",description:"The title of the tag list page"},"Tags")),n.createElement("div",{className:"margin-vert--lg"},u)))))}},7775:function(e,t,a){"use strict";var n=a(8406),r=a(8876),l=a(3289),s=function(){var e=(0,n.TH)();return e.pathname.endsWith("/")?l.createElement(n.l_,{to:e.pathname.slice(0,-1)}):null};t.Z=function(e){return l.createElement(l.Fragment,null,l.createElement(s,null),l.createElement(r.Z,e))}}}]);
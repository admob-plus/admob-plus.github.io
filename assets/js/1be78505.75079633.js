(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[9514,9394],{548:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return te}});var a=n(3289),i=n(1080),l=n(7006),r=n(9981),o=n(943),c=n(379),s=n(8988),u=n(2238),d=n(5552),m=n(3781),b=n(3368),p=n(3903),f=n(380),h=n(3292),v=n(6756),E=n(5887),_=function(e){return a.createElement("svg",(0,c.Z)({width:"20",height:"20",role:"img"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},g=n(4562),k=n(8391),C="sidebar_3PRj",Z="sidebarWithHideableNavbar_1vwm",N="sidebarHidden_2EHn",I="sidebarLogo_2prq",S="menu_2MWT",w="menuLinkText_9iAL",T="menuWithAnnouncementBar_2vb7",y="collapseSidebarButton_2euV",A="collapseSidebarButtonIcon_ki5d",L="sidebarMenuIcon_3UWo",R="sidebarMenuCloseIcon_2rzN",x="menuLinkExternal_14aC";var M=function e(t,n){return"link"===t.type?(0,d.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},P=(0,a.memo)((function(e){var t=e.items,n=(0,s.Z)(e,["items"]);return t.map((function(e,t){return a.createElement(B,(0,c.Z)({key:t,item:e},n))}))}));function B(e){switch(e.item.type){case"category":return a.createElement(H,e);case"link":default:return a.createElement(W,e)}}function H(e){var t,n,i,l=e.item,r=e.onItemClick,o=e.collapsible,d=e.activePath,m=(0,s.Z)(e,["item","onItemClick","collapsible","activePath"]),b=l.items,p=l.label,f=M(l,d),h=(n=f,i=(0,a.useRef)(n),(0,a.useEffect)((function(){i.current=n}),[n]),i.current),v=(0,a.useState)((function(){return!!o&&(!f&&l.collapsed)})),E=v[0],_=v[1],g=(0,a.useRef)(null),k=(0,a.useState)(void 0),C=k[0],Z=k[1],N=function(e){var t;void 0===e&&(e=!0),Z(e?(null==(t=g.current)?void 0:t.scrollHeight)+"px":void 0)};(0,a.useEffect)((function(){f&&!h&&E&&_(!1)}),[f,h,E]);var I=(0,a.useCallback)((function(e){e.preventDefault(),C||N(),setTimeout((function(){return _((function(e){return!e}))}),100)}),[C]);return 0===b.length?null:a.createElement("li",{className:(0,u.Z)("menu__list-item",{"menu__list-item--collapsed":E})},a.createElement("a",(0,c.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--sublist":o,"menu__link--active":o&&f},t[w]=!o,t)),onClick:o?I:void 0,href:o?"#!":void 0},m),p),a.createElement("ul",{className:"menu__list",ref:g,style:{height:C},onTransitionEnd:function(){E||N(!1)}},a.createElement(P,{items:b,tabIndex:E?"-1":"0",onItemClick:r,collapsible:o,activePath:d})))}function W(e){var t,n=e.item,i=e.onItemClick,l=e.activePath,r=(e.collapsible,(0,s.Z)(e,["item","onItemClick","activePath","collapsible"])),o=n.href,d=n.label,m=M(n,l);return a.createElement("li",{className:"menu__list-item",key:d},a.createElement(h.Z,(0,c.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--active":m},t[x]=!(0,v.Z)(o),t)),to:o},(0,v.Z)(o)&&{isNavLink:!0,exact:!0,onClick:i},r),d))}function D(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,k.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,k.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,u.Z)("button button--secondary button--outline",y),onClick:t},a.createElement(_,{className:A}))}function F(e){var t=e.responsiveSidebarOpened,n=e.onClick;return a.createElement("button",{"aria-label":t?(0,k.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,k.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:n},t?a.createElement("span",{className:(0,u.Z)(L,R)},"\xd7"):a.createElement(g.Z,{className:L,height:24,width:24}))}var z=function(e){var t,n,i=e.path,l=e.sidebar,r=e.sidebarCollapsible,o=void 0===r||r,c=e.onCollapse,s=e.isHidden,h=function(){var e=(0,m.Z)().isAnnouncementBarClosed,t=(0,a.useState)(!e),n=t[0],i=t[1];return(0,f.Z)((function(t){var n=t.scrollY;e||i(0===n)})),n}(),v=(0,d.LU)(),_=v.navbar.hideOnScroll,g=v.hideableSidebar,k=(0,m.Z)().isAnnouncementBarClosed,w=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];(0,b.Z)(t);var i=(0,p.Z)();return(0,a.useEffect)((function(){i===p.D.desktop&&n(!1)}),[i]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,a.useCallback)((function(e){e.target.blur(),n(!1)}),[n]),toggleResponsiveSidebar:(0,a.useCallback)((function(){n((function(e){return!e}))}),[n])}}(),y=w.showResponsiveSidebar,A=w.closeResponsiveSidebar,L=w.toggleResponsiveSidebar;return a.createElement("div",{className:(0,u.Z)(C,(t={},t[Z]=_,t[N]=s,t))},_&&a.createElement(E.Z,{tabIndex:-1,className:I}),a.createElement("div",{className:(0,u.Z)("menu","menu--responsive","thin-scrollbar",S,(n={"menu--show":y},n[T]=!k&&h,n))},a.createElement(F,{responsiveSidebarOpened:y,onClick:L}),a.createElement("ul",{className:"menu__list"},a.createElement(P,{items:l,onItemClick:A,collapsible:o,activePath:i}))),g&&a.createElement(D,{onClick:c}))},O=n(5124),j=n(5909),U=n(8406),X="docPage_1bJ2",q="docMainContainer_jSSM",K="docMainContainerEnhanced_2ziA",J="docSidebarContainer_Ln-2",Q="docSidebarContainerHidden_6XE5",V="collapsedDocSidebar_Q6dq",Y="expandSidebarButtonIcon_cg9z",G="docItemWrapperEnhanced_1m0j",$="docItemWrapper_1XcK";function ee(e){var t,n,r,c,s,m=e.currentDocRoute,b=e.versionMetadata,p=e.children,f=(0,l.default)(),h=f.siteConfig,v=f.isClient,E=b.pluginId,g=b.permalinkToSidebar,C=b.docsSidebars,Z=b.version,N=g[m.path],I=C[N],S=(0,a.useState)(!1),w=S[0],T=S[1],y=(0,a.useState)(!1),A=y[0],L=y[1],R=(0,a.useCallback)((function(){A&&L(!1),T(!w)}),[A]);return a.createElement(o.Z,{key:v,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:Z,tag:(0,d.os)(E,Z)}},a.createElement("div",{className:X},I&&a.createElement("div",{className:(0,u.Z)(J,(t={},t[Q]=w,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(J)&&w&&L(!0)},role:"complementary"},a.createElement(z,{key:N,sidebar:I,path:m.path,sidebarCollapsible:null==(n=null==(r=h.themeConfig)?void 0:r.sidebarCollapsible)||n,onCollapse:R,isHidden:A}),A&&a.createElement("div",{className:V,title:(0,k.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,k.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:R,onClick:R},a.createElement(_,{className:Y}))),a.createElement("main",{className:(0,u.Z)(q,(c={},c[K]=w||!I,c))},a.createElement("div",{className:(0,u.Z)("container padding-vert--lg",$,(s={},s[G]=w,s))},a.createElement(i.Zo,{components:O.Z},p)))))}var te=function(e){var t=e.route.routes,n=e.versionMetadata,i=e.location,l=t.find((function(e){return(0,U.LX)(i.pathname,e)}));return l?a.createElement(ee,{currentDocRoute:l,versionMetadata:n},(0,r.Z)(t)):a.createElement(j.default,e)}},5909:function(e,t,n){"use strict";n.r(t);var a=n(3289),i=n(943),l=n(8391);t.default=function(){return a.createElement(i.Z,{title:"Page Not Found"},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},7775:function(e,t,n){"use strict";var a=n(8406),i=n(8876),l=n(3289),r=function(){var e=(0,a.TH)();return e.pathname.endsWith("/")?l.createElement(a.l_,{to:e.pathname.slice(0,-1)}):null};t.Z=function(e){return l.createElement(l.Fragment,null,l.createElement(r,null),l.createElement(i.Z,e))}}}]);
"use strict";(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[4976],{6664:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});a(5496);var n=a(8536),i=a(1608),r=a(3052),o=a(3700),s=a(2932),l=a(404),c=a(4680),d=a(5476),g=a(7816),u=a(1176),p=a(7512);function m(e){const t=(0,u.Q)(e);return(0,p.jsx)(g.c,{children:(0,p.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function h(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,i.c)(),{blogDescription:n,blogTitle:o,permalink:s}=t,l="/"===s?a:o;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.U7,{title:l,description:n}),(0,p.jsx)(c.c,{tag:"blog_posts_list"})]})}function b(e){const{metadata:t,items:a,sidebar:n}=e;return(0,p.jsxs)(s.c,{sidebar:n,children:[(0,p.jsx)(d.c,{items:a}),(0,p.jsx)(l.c,{metadata:t})]})}function f(e){return(0,p.jsxs)(r.cr,{className:(0,n.c)(o.W.wrapper.blogPages,o.W.page.blogListPage),children:[(0,p.jsx)(h,{...e}),(0,p.jsx)(m,{...e}),(0,p.jsx)(b,{...e})]})}},404:(e,t,a)=>{a.d(t,{c:()=>o});a(5496);var n=a(2184),i=a(439),r=a(7512);function o(e){const{metadata:t}=e,{previousPage:a,nextPage:o}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,n.G)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,r.jsx)(i.c,{permalink:a,title:(0,r.jsx)(n.c,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),o&&(0,r.jsx)(i.c,{permalink:o,title:(0,r.jsx)(n.c,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},5476:(e,t,a)=>{a.d(t,{c:()=>o});a(5496);var n=a(3012),i=a(5744),r=a(7512);function o(e){let{items:t,component:a=i.c}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(n.E,{content:t,children:(0,r.jsx)(a,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},1176:(e,t,a)=>{a.d(t,{Q:()=>d,C:()=>g});var n=a(316),i=a(1608),r=a(5360);var o=a(3012);const s=e=>new Date(e).toISOString();function l(e){const t=e.map(u);return{author:1===t.length?t[0]:t}}function c(e,t,a){return e?{image:p({imageUrl:t(e,{absolute:!0}),caption:"title image for the blog post: "+a})}:{}}function d(e){const{siteConfig:t}=(0,i.c)(),{withBaseUrl:a}=(0,n.E)(),{metadata:{blogDescription:r,blogTitle:o,permalink:d}}=e,g=""+t.url+d;return{"@context":"https://schema.org","@type":"Blog","@id":g,mainEntityOfPage:g,headline:o,description:r,blogPost:e.items.map((e=>function(e,t,a){var n,i;const{assets:r,frontMatter:o,metadata:d}=e,{date:g,title:u,description:p,lastUpdatedAt:m}=d,h=null!=(n=r.image)?n:o.image,b=null!=(i=o.keywords)?i:[],f=""+t.url+d.permalink,x=m?s(m):void 0;return{"@type":"BlogPosting","@id":f,mainEntityOfPage:f,url:f,headline:u,name:u,description:p,datePublished:g,...x?{dateModified:x}:{},...l(d.authors),...c(h,a,u),...b?{keywords:b}:{}}}(e.content,t,a)))}}function g(){var e,t;const a=function(){var e;const t=(0,r.c)(),a=null==t||null==(e=t.data)?void 0:e.blogMetadata;if(!a)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return a}(),{assets:d,metadata:g}=(0,o.g)(),{siteConfig:u}=(0,i.c)(),{withBaseUrl:p}=(0,n.E)(),{date:m,title:h,description:b,frontMatter:f,lastUpdatedAt:x}=g,j=null!=(e=d.image)?e:f.image,v=null!=(t=f.keywords)?t:[],w=x?s(x):void 0,k=""+u.url+g.permalink;return{"@context":"https://schema.org","@type":"BlogPosting","@id":k,mainEntityOfPage:k,url:k,headline:h,name:h,description:b,datePublished:m,...w?{dateModified:w}:{},...l(g.authors),...c(j,p,h),...v?{keywords:v}:{},isPartOf:{"@type":"Blog","@id":""+u.url+a.blogBasePath,name:a.blogTitle}}}function u(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function p(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}}}]);
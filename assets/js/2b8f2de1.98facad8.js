"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9925],{4003:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var r=s(4246),n=s(1670);const d={},i="Read with any OPDS reader",l={id:"guides/opds",title:"Read with any OPDS reader",description:"Komga should work with any OPDS reader, unfortunately most readers badly implement the OPDS protocol.",source:"@site/docs/guides/opds.md",sourceDirName:"guides",slug:"/guides/opds",permalink:"/docs/guides/opds",draft:!1,unlisted:!1,editUrl:"https://github.com/gotson/komga-website/tree/master/docs/guides/opds.md",tags:[],version:"current",lastUpdatedAt:1702624270,formattedLastUpdatedAt:"Dec 15, 2023",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Read with CDisplayEx",permalink:"/docs/guides/cdisplayex"},next:{title:"Read with Panels on iOS",permalink:"/docs/guides/panels"}},o={},c=[];function a(e){const t={a:"a",code:"code",h1:"h1",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"read-with-any-opds-reader",children:"Read with any OPDS reader"}),"\n",(0,r.jsx)(t.p,{children:"Komga should work with any OPDS reader, unfortunately most readers badly implement the OPDS protocol."}),"\n",(0,r.jsx)(t.p,{children:"Komga supports OPDS v1 and v2, the URL should be configured accordingly:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["OPDS v1: ",(0,r.jsx)(t.code,{children:"http(s)://your-server(:25600)(/baseUrl)/opds/v1.2/catalog"})]}),"\n",(0,r.jsxs)(t.li,{children:["OPDS v2: ",(0,r.jsx)(t.code,{children:"http(s)://your-server(:25600)(/baseUrl)/opds/v2/catalog"})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Here is a list of reader applications that have been tested:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"OS"}),(0,r.jsx)(t.th,{children:"App name"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Status"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"OpenSearch support"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Page streaming support"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Android"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://play.google.com/store/apps/details?id=org.geometerplus.zlibrary.ui.android",children:"FBReader: Favorite Book Reader"})}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["\u274c"," Can't download CBR/CBZ, only PDF. PDF only supported in Premium version. Does not remember password."]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"No"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Android"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://play.google.com/store/apps/details?id=com.flyersoft.moonreader",children:"Moon+ Reader"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"No"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Android"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://play.google.com/store/apps/details?id=com.foobnix.pdf.reader",children:"Librera"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"No"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Android"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://play.google.com/store/apps/details?id=com.obreey.reader",children:"PocketBook"})}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["\u274c"," Doesn't show CBR/CBZ"]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"No"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"iOS"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"http://kybook-reader.com/",children:"KyBook 3"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"Yes"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"No"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"iOS"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://panels.app/",children:"Panels"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,r.jsx)(t.strong,{children:"OPDS PSE 1.0"})," (v2.8.0+)",(0,r.jsx)("br",{}),(0,r.jsx)(t.strong,{children:"OPDS PSE 1.1"})," (v2.9.7+)"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"iPadOS"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://apps.apple.com/us/app/chunky-comic-reader/id663567628",children:"Chunky Comic Reader"})}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["\u274c"," Does not work anymore with Komga 1.4.0+"]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"OPDS PSE 1.0"})})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"The OPDS v1 feed also supports:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["OpenSearch functionality, to search by ",(0,r.jsx)(t.code,{children:"Series"})]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://anansi-project.github.io/docs/opds-pse/intro",children:"OPDS Page Streaming Extension 1.2"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1670:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>i});var r=s(7378);const n={},d=r.createContext(n);function i(e){const t=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);
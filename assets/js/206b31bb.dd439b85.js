"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6897],{6638:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var i=s(2540),t=s(3023);const o={},r="One-Shots",l={id:"guides/oneshots",title:"One-Shots",description:"What are One-Shots?",source:"@site/docs/guides/oneshots.md",sourceDirName:"guides",slug:"/guides/oneshots",permalink:"/docs/guides/oneshots",draft:!1,unlisted:!1,editUrl:"https://github.com/gotson/komga-website/tree/master/docs/guides/oneshots.md",tags:[],version:"current",lastUpdatedAt:1710303235,formattedLastUpdatedAt:"Mar 13, 2024",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Image Types",permalink:"/docs/guides/image-formats"},next:{title:"Edit Metadata",permalink:"/docs/guides/edit-metadata"}},d={},h=[{value:"What are One-Shots?",id:"what-are-one-shots",level:2},{value:"One-Shots handling",id:"one-shots-handling",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Processing",id:"processing",level:3},{value:"Metadata",id:"metadata",level:3},{value:"Dashboard",id:"dashboard",level:3},{value:"REST API",id:"rest-api",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"one-shots",children:"One-Shots"}),"\n",(0,i.jsx)(n.h2,{id:"what-are-one-shots",children:"What are One-Shots?"}),"\n",(0,i.jsx)(n.p,{children:"One-Shots are series containing a single book."}),"\n",(0,i.jsx)(n.p,{children:"However not all series containing a single book are One-Shots. Here are some example of single book series that are not One-Shots:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"a series that has multiple books published, but only a single book is collected in Komga"}),"\n",(0,i.jsx)(n.li,{children:"a series that currently has only 1 book published, but will have more in the future"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Historically Komga required each series to be in its own directory on disk. This was cumbersome for One-Shots, as each book needed to be placed in a dedicated directory."}),"\n",(0,i.jsx)(n.p,{children:"With One-Shots handling, this is not necessary anymore."}),"\n",(0,i.jsx)(n.p,{children:"One-Shots are still composed of a series with a single book, but are handled slightly differently."}),"\n",(0,i.jsx)(n.h2,{id:"one-shots-handling",children:"One-Shots handling"}),"\n",(0,i.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["You can enable One-Shots handling through ",(0,i.jsx)(n.a,{href:"/docs/guides/libraries#one-shots-directory",children:"Library options"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"processing",children:"Processing"}),"\n",(0,i.jsxs)(n.p,{children:["One-Shots are detected during the scan. Any directory for which the full path contains the configured ",(0,i.jsx)(n.em,{children:"One-Shots directory"})," will generate One-Shot series instead of standard Series."]}),"\n",(0,i.jsxs)(n.p,{children:["Given the following directory structure, with ",(0,i.jsx)(n.em,{children:"One-Shots directory"})," configured to ",(0,i.jsx)(n.code,{children:"_oneshots"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"/data/books/Comics\n\u251c\u2500\u2500 Space Adventures\n\u2502\xa0\xa0 \u251c\u2500\u2500 Space_Adventures_001.cbz\n\u2502\xa0\xa0 \u251c\u2500\u2500 Space_Adventures_002.cbz\n\u2502\xa0\xa0 \u251c\u2500\u2500 Space_Adventures_003.cbz\n\u2502\xa0\xa0 \u2514\u2500\u2500 _oneshots\n\u2502\xa0\xa0     \u2514\u2500\u2500 Pluto Adventures.cbz\n\u251c\u2500\u2500 Super Duck\n\u2502\xa0\xa0 \u251c\u2500\u2500 Super_Duck_001.cbz\n\u2502\xa0\xa0 \u251c\u2500\u2500 Super_Duck_002.cbz\n\u2502\xa0\xa0 \u2514\u2500\u2500 Super_Duck_003.cbz\n\u2514\u2500\u2500 _oneshots\n    \u251c\u2500\u2500 A oneshot.cbz\n    \u251c\u2500\u2500 Another oneshot.cbz\n    \u2514\u2500\u2500 Yet another oneshot.cbz\n"})}),"\n",(0,i.jsx)(n.p,{children:"This will result in:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["2 regular series:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"Space Adventures"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"Super Duck"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["4 One-Shots:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"Pluto Adventures"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"A oneshot"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"Another oneshot"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"Yet another oneshot"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"One-Shots directory"})," is checked against ",(0,i.jsx)(n.strong,{children:"any part of the directory path"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"_oneshots"})," will match on:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"/data/books/Comics/_oneshots"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"/data/books/Comics/My weirdly named _oneshots"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["To match only directories starting with the provided string, prefix ",(0,i.jsx)(n.em,{children:"One-Shots directory"})," with ",(0,i.jsx)(n.code,{children:"/"}),", like ",(0,i.jsx)(n.code,{children:"/_oneshots"})]})}),"\n",(0,i.jsx)(n.h3,{id:"metadata",children:"Metadata"}),"\n",(0,i.jsx)(n.p,{children:"While the book metadata will be processed as usual, the series metadata for One-Shots will be handled slightly differently:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["the Mylar ",(0,i.jsx)(n.code,{children:"series.json"})," is ignored"]}),"\n",(0,i.jsx)(n.li,{children:"the local artwork is ignored. The one for the book is still processed as usual."}),"\n",(0,i.jsxs)(n.li,{children:["in addition, some metadata is set:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"the series title and summary are set from the one of the book"}),"\n",(0,i.jsxs)(n.li,{children:["the series status is set to ",(0,i.jsx)(n.em,{children:"Ended"})]}),"\n",(0,i.jsx)(n.li,{children:"the series total book count is set to 1"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"dashboard",children:"Dashboard"}),"\n",(0,i.jsx)(n.p,{children:"The Dashboard has specific handling for One-Shots:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"One-Shots are displayed in a new view that shows both series and book metadata fields"}),"\n",(0,i.jsxs)(n.li,{children:["when editing One-Shots metadata, a new dialog will allow to edit both book and series level metadata fields.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If you edit multiple items and all are One-Shots, this dialog is also used."}),"\n",(0,i.jsx)(n.li,{children:"If there is a mix of One-Shots and normal items (series or books), the regular dialog will be used instead.s"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"One-Shots can be added to both collections and readlists"}),"\n",(0,i.jsxs)(n.li,{children:["One-Shots will not show in the ",(0,i.jsx)(n.em,{children:"Recently Added Series"})," or ",(0,i.jsx)(n.em,{children:"Recently Updated Series"})," sections, but they will show in ",(0,i.jsx)(n.em,{children:"Recently Added Books"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Item card in Series views (when browsing libraries or collections):","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"will show an unread indicator in the top-right corner, instead of the number of unread books"}),"\n",(0,i.jsxs)(n.li,{children:["will display ",(0,i.jsx)(n.em,{children:"One-shot"})," at the bottom of the card instead of the number of books"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Item card in Book views (when browsing readlists or recommended) will not display the Series name nor the book number"}),"\n",(0,i.jsxs)(n.li,{children:["the Series filter panel has a ",(0,i.jsx)(n.em,{children:"One-shot"})," filter"]}),"\n",(0,i.jsx)(n.li,{children:"One-Shots will not show in the Series picker dialog when importing books"}),"\n",(0,i.jsx)(n.li,{children:"One-Shots will show only as books in the search bar and detailed search view"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"rest-api",children:"REST API"}),"\n",(0,i.jsxs)(n.p,{children:["One-Shots are still composed of a Series with a single Book, however both have a new ",(0,i.jsx)(n.code,{children:"boolean"})," attribute ",(0,i.jsx)(n.code,{children:"oneshot"})," which can be used in client applications to handle One-Shots differently."]})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},3023:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var i=s(3696);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);
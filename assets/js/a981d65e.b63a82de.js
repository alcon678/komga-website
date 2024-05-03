"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8792],{5332:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>h});var i=a(2540),r=a(3023);const n={},s="Emptying Library Trash",o={id:"guides/trash",title:"Emptying Library Trash",description:"Like modern operating systems, Komga uses a concept of placing items in the \u201ctrash\u201d before they\u2019re permanently removed. If you move or delete the file for a library item or if the file somehow becomes unavailable, then the library item will be placed into the \u201ctrash\u201d. This helps prevent against items being accidentally or unintentionally removed from your Library. It can be particularly helpful in situations where a drive or network share where content is stored isn\u2019t available when a Library Scan occurs. By default, the item will remain in the trash until you perform an \u201cEmpty Trash\u201d on your Server.",source:"@site/docs/guides/trash.md",sourceDirName:"guides",slug:"/guides/trash",permalink:"/docs/guides/trash",draft:!1,unlisted:!1,editUrl:"https://github.com/gotson/komga-website/tree/master/docs/guides/trash.md",tags:[],version:"current",lastUpdatedAt:1714705941e3,frontMatter:{},sidebar:"docsSidebar",previous:{title:"Libraries",permalink:"/docs/guides/libraries"},next:{title:"Scanning, Analyzing and Refreshing Metadata",permalink:"/docs/guides/scan-analysis-refresh"}},l={},h=[{value:"File Hashes",id:"file-hashes",level:2},{value:"Automatically Empty Trash",id:"automatically-empty-trash",level:2},{value:"Manually Empty Trash",id:"manually-empty-trash",level:2}];function c(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"emptying-library-trash",children:"Emptying Library Trash"}),"\n",(0,i.jsx)(t.p,{children:"Like modern operating systems, Komga uses a concept of placing items in the \u201ctrash\u201d before they\u2019re permanently removed. If you move or delete the file for a library item or if the file somehow becomes unavailable, then the library item will be placed into the \u201ctrash\u201d. This helps prevent against items being accidentally or unintentionally removed from your Library. It can be particularly helpful in situations where a drive or network share where content is stored isn\u2019t available when a Library Scan occurs. By default, the item will remain in the trash until you perform an \u201cEmpty Trash\u201d on your Server."}),"\n",(0,i.jsx)(t.p,{children:"If an item is currently in the trash, it can be restored back to the Library by making the file for the library item available again at the expected location. Conversely, if you perform an \u201cEmpty Trash\u201d on your Server, then the item is discarded from the trash and can no longer be automatically restored."}),"\n",(0,i.jsx)(t.p,{children:'Items currently in the trash will be displayed with an "Unavailable" indicator.'}),"\n",(0,i.jsx)("img",{src:"/assets/media/guides/trash/unavailable-card.png",style:{maxHeight:"300px"},alt:"Unavailable indicator on card"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("img",{src:"/assets/media/guides/trash/unavailable-details.png",style:{maxHeight:"300px"},alt:"Unavailable indicator on details view"}),"\n",(0,i.jsx)(t.h2,{id:"file-hashes",children:"File Hashes"}),"\n",(0,i.jsx)(t.p,{children:"With the trash bin, you can move or rename files and folders without losing your metadata, read progress, or read lists and collections."}),"\n",(0,i.jsxs)(t.p,{children:["To track your files when they are renamed or restored, Komga generates a file hash for each file. If Komga doesn't have a file hash for a file, it won't be able to restore data after a file move or rename. Hashing files requires some computing power, so you may want to disable this entirely on low-end devices (see ",(0,i.jsx)(t.a,{href:"/docs/installation/configuration",children:"Configuration"}),")."]}),"\n",(0,i.jsx)(t.h2,{id:"automatically-empty-trash",children:"Automatically Empty Trash"}),"\n",(0,i.jsx)(t.p,{children:"By default, items found removed from a Library are placed in the trash until the trash is emptied. You can choose to have your Server automatically empty the trash after every scan occurs if you wish. To do so:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Open Komga web interface"}),"\n",(0,i.jsx)(t.li,{children:"Edit the library for which you want to change the setting"}),"\n",(0,i.jsxs)(t.li,{children:["Enable the ",(0,i.jsx)(t.em,{children:"Empty trash automatically after every scan"})," option"]}),"\n",(0,i.jsx)(t.li,{children:"Save Changes"}),"\n"]}),"\n",(0,i.jsx)("img",{src:"/assets/media/guides/trash/empty-trash-after-scan.png",style:{maxHeight:"300px"},alt:"Empty trash automatically after every scan option"}),"\n",(0,i.jsxs)(t.admonition,{type:"danger",children:[(0,i.jsx)(t.p,{children:"Enabling this option means that content will be removed from your Library immediately with no chance to simply restore it if there was a mistake."}),(0,i.jsx)(t.p,{children:"It will also prevent folder and file moves between libraries."})]}),"\n",(0,i.jsx)(t.h2,{id:"manually-empty-trash",children:"Manually Empty Trash"}),"\n",(0,i.jsx)(t.p,{children:"If you have items in the trash that you\u2019re ready to remove, you can empty the trash.  When you choose to empty the trash, you\u2019ll need to confirm your choice."}),"\n",(0,i.jsxs)(t.p,{children:["Look for the action menu icon ",(0,i.jsx)("img",{src:"/assets/media/guides/action-menu-icon.png",style:{verticalAlign:"middle",maxHeight:"32px"}})," and click on ",(0,i.jsx)(t.em,{children:"Empty Trash"}),"."]}),"\n",(0,i.jsx)("img",{src:"/assets/media/guides/trash/empty-trash-confirmation-dialog.png",style:{maxHeight:"250px"},alt:"Empty trash confirmation dialog"})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},3023:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>o});var i=a(3696);const r={},n=i.createContext(r);function s(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);
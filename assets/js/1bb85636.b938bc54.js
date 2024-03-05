"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3054],{4312:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=t(2540),i=t(3023);const s={},a="Read with Chunky Reader (iPad)",r={id:"guides/chunky",title:"Read with Chunky Reader (iPad)",description:"Chunky Reader does not work anymore with Komga 1.4.0+",source:"@site/docs/guides/chunky.md",sourceDirName:"guides",slug:"/guides/chunky",permalink:"/docs/guides/chunky",draft:!1,unlisted:!1,editUrl:"https://github.com/gotson/komga-website/tree/master/docs/guides/chunky.md",tags:[],version:"current",lastUpdatedAt:1709605307,formattedLastUpdatedAt:"Mar 5, 2024",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Read with Panels on iOS",permalink:"/docs/guides/panels"},next:{title:"Theme",permalink:"/docs/guides/theme"}},d={},c=[{value:"Background",id:"background",level:2},{value:"Adding your Komga server to Chunky",id:"adding-your-komga-server-to-chunky",level:2},{value:"Limitations",id:"limitations",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"read-with-chunky-reader-ipad",children:"Read with Chunky Reader (iPad)"}),"\n",(0,o.jsx)(n.admonition,{title:"Note",type:"danger",children:(0,o.jsx)(n.p,{children:"Chunky Reader does not work anymore with Komga 1.4.0+"})}),"\n",(0,o.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,o.jsxs)(n.p,{children:["Thanks to Komga's OPDS support, you can use the ",(0,o.jsx)(n.a,{href:"https://apps.apple.com/app/id663567628",children:"Chunky Reader"})," application for iPad to remotely download or stream your comics. Chunky Reader is at time of writing the only comic reader on iPad that supports the OPDS page streaming extension. This lets you stream individual pages without having to download the whole comic file onto your iPad."]}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"Please note that Chunky Reader's OPDS support requires the in app purchase which costs $3.99 or the equivalent of your local currency."})}),"\n",(0,o.jsx)(n.h2,{id:"adding-your-komga-server-to-chunky",children:"Adding your Komga server to Chunky"}),"\n",(0,o.jsxs)(n.p,{children:["First you need to make sure that you can browse to your komga server's web UI from Safari on your iPad. Open up Safari, navigate to your server's address and log in as normal. Next, open the address bar, delete ",(0,o.jsx)(n.code,{children:"/dashboard"})," part which is added automatically when you log in, and then append ",(0,o.jsx)(n.code,{children:"/opds/v1.2/catalog"})," to the end of the URL and press return."]}),"\n",(0,o.jsx)("img",{src:"/assets/media/guides/chunky-setup/safari-check1.png"}),"\n",(0,o.jsx)(n.p,{children:"You should then see a screen like the below image, if you do, you're ready to proceed with configuring Chunky Reader. You may wish to copy the URL to your iPad clipboard for pasting later."}),"\n",(0,o.jsx)("img",{src:"/assets/media/guides/chunky-setup/safari-check2.png"}),"\n",(0,o.jsx)(n.p,{children:"Open Chunky Reader and click the cloud icon, circled in red in the screenshot below."}),"\n",(0,o.jsx)("img",{src:"/assets/media/guides/chunky-setup/cloud-symbol.png"}),"\n",(0,o.jsx)(n.p,{children:"In the pop up window, click the plus button, circled in red in the screenshot below."}),"\n",(0,o.jsx)("div",{class:"text--center",children:(0,o.jsx)("img",{src:"/assets/media/guides/chunky-setup/plus-button.png",width:"300"})}),"\n",(0,o.jsx)(n.p,{children:'Now choose the green plus button next to "Calibre/Ubooquity/OPDS".'}),"\n",(0,o.jsx)("div",{class:"text--center",children:(0,o.jsx)("img",{src:"/assets/media/guides/chunky-setup/opds-option.png",width:"300"})}),"\n",(0,o.jsxs)(n.p,{children:["In this dialogue box, enter your ",(0,o.jsx)(n.em,{children:"server address"})," (paste from the earlier step if you copied it to clipboard), ",(0,o.jsx)(n.em,{children:"username"}),", and ",(0,o.jsx)(n.em,{children:"password"}),". Then click ",(0,o.jsx)(n.em,{children:"Connect"}),". Your Komga server should now appear in the cloud icon menu. You can stream comics by navigating to them and tapping the name, or download them via clicking the blue download button next to a comic. You can download all the comics in a given view by tapping the ",(0,o.jsx)(n.em,{children:"All"})," button in the bottom right of the menu."]}),"\n",(0,o.jsx)("div",{class:"text--center",children:(0,o.jsx)("img",{src:"/assets/media/guides/chunky-setup/list-view.png",width:"300"})}),"\n",(0,o.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,o.jsxs)(n.p,{children:["Reading comics via Chunky Reader ",(0,o.jsx)(n.strong,{children:"does not"})," update the read progress. This means you will need to manually mark your comics as read via the web UI."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},3023:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var o=t(3696);const i={},s=o.createContext(i);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);
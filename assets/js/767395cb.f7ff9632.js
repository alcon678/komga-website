"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4103],{858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=n(2540),r=n(3023);const s={},i="Expose your server",a={id:"installation/https",title:"Expose your server",description:"HTTPS",source:"@site/docs/installation/https.md",sourceDirName:"installation",slug:"/installation/https",permalink:"/docs/installation/https",draft:!1,unlisted:!1,editUrl:"https://github.com/gotson/komga-website/tree/master/docs/installation/https.md",tags:[],version:"current",lastUpdatedAt:1709605307,formattedLastUpdatedAt:"Mar 5, 2024",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Configuration options",permalink:"/docs/installation/configuration"},next:{title:"Social login",permalink:"/docs/installation/oauth2"}},d={},c=[{value:"HTTPS",id:"https",level:2},{value:"Reverse proxy",id:"reverse-proxy",level:2},{value:"Caddy (v1)",id:"caddy-v1",level:3},{value:"Caddy (v2)",id:"caddy-v2",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"expose-your-server",children:"Expose your server"}),"\n",(0,o.jsx)(t.h2,{id:"https",children:"HTTPS"}),"\n",(0,o.jsxs)(t.p,{children:["If you want to open your Komga server outside your local network, it is strongly advised to secure it with ",(0,o.jsx)(t.code,{children:"https"})," (especially due to the use of http basic authentication)."]}),"\n",(0,o.jsxs)(t.p,{children:["Spring Boot supports ",(0,o.jsx)(t.code,{children:"https"})," out of the box, but you will have to configure it, and ",(0,o.jsx)(t.code,{children:"https"})," is most useful only with valid certificates (not self-signed), which most people don't readily have available."]}),"\n",(0,o.jsxs)(t.p,{children:["I recommend using ",(0,o.jsx)(t.a,{href:"https://caddyserver.com/",children:"Caddy"})," as a reverse proxy, as it supports the automatic generation of ",(0,o.jsx)(t.a,{href:"https://letsencrypt.org/",children:"Let's Encrypt"})," certificates."]}),"\n",(0,o.jsx)(t.h2,{id:"reverse-proxy",children:"Reverse proxy"}),"\n",(0,o.jsx)(t.p,{children:"Here are some sample configuration on how to configure reverse proxy for Komga."}),"\n",(0,o.jsx)(t.h3,{id:"caddy-v1",children:"Caddy (v1)"}),"\n",(0,o.jsx)(t.p,{children:"Without a base URL configured in Komga, using a subdomain:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"komga.yourdomain.com {\n  proxy / http://your-komga-server:25600 {\n    transparent\n  }\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"With a base URL configured in Komga:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"yourdomain.com {\n  proxy /komga http://your-komga-server:25600 {\n    transparent\n  }\n}\n"})}),"\n",(0,o.jsx)(t.h3,{id:"caddy-v2",children:"Caddy (v2)"}),"\n",(0,o.jsx)(t.p,{children:"Without a base URL configured in Komga, using a subdomain:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"komga.yourdomain.com {\n  reverse_proxy http://your-komga-server:25600\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"With a base URL configured in Komga:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"yourdomain.com {\n  reverse_proxy /komga/* http://your-komga-server:25600\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},3023:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(3696);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);
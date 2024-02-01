"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5035],{6676:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var t=n(4246),i=n(1670);const o={},a="REST API",r={id:"api/rest",title:"REST API",description:"Komga offers a REST API, which you can browse using Swagger. It's available at /swagger-ui.html.",source:"@site/docs/api/rest.md",sourceDirName:"api",slug:"/api/rest",permalink:"/docs/api/rest",draft:!1,unlisted:!1,editUrl:"https://github.com/gotson/komga-website/tree/master/docs/api/rest.md",tags:[],version:"current",lastUpdatedAt:1706748490,formattedLastUpdatedAt:"Feb 1, 2024",frontMatter:{},sidebar:"api",next:{title:"Deprecation",permalink:"/docs/api/deprecation"}},c={},l=[{value:"Authenticating",id:"authenticating",level:2},{value:"Sessions",id:"sessions",level:2},{value:"Remember Me",id:"remember-me",level:2},{value:"Logout",id:"logout",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"rest-api",children:"REST API"}),"\n",(0,t.jsxs)(s.p,{children:["Komga offers a REST API, which you can browse using Swagger. It's available at ",(0,t.jsx)(s.code,{children:"/swagger-ui.html"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["The OpenAPI specification is also available ",(0,t.jsx)(s.a,{href:"https://github.com/gotson/komga/blob/master/komga/docs/openapi.json",children:"here"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"authenticating",children:"Authenticating"}),"\n",(0,t.jsxs)(s.p,{children:["Most endpoints require authentication. Authentication is done using ",(0,t.jsx)(s.strong,{children:"Basic Authentication"})," and can be set on any endpoint."]}),"\n",(0,t.jsx)(s.h2,{id:"sessions",children:"Sessions"}),"\n",(0,t.jsx)(s.p,{children:"Upon successful authentication, a session is created, and can be reused."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["By default, a ",(0,t.jsx)(s.code,{children:"SESSION"})," cookie is set via ",(0,t.jsx)(s.code,{children:"Set-Cookie"})," response header. This works well for browsers and clients that can handle cookies."]}),"\n",(0,t.jsxs)(s.li,{children:["If you specify a header ",(0,t.jsx)(s.code,{children:"X-Auth-Token"})," during authentication, the session ID will be returned via this same header. You can then pass that header again for subsequent requests to reuse the session."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["If you need to set the session cookie later on, you can call ",(0,t.jsx)(s.code,{children:"/api/v1/login/set-cookie"})," with ",(0,t.jsx)(s.code,{children:"X-Auth-Token"}),". The response will contain the ",(0,t.jsx)(s.code,{children:"Set-Cookie"})," header."]}),"\n",(0,t.jsx)(s.h2,{id:"remember-me",children:"Remember Me"}),"\n",(0,t.jsxs)(s.p,{children:["During authentication, if a request parameter ",(0,t.jsx)(s.code,{children:"remember-me"})," is passed and set to ",(0,t.jsx)(s.code,{children:"true"}),", the server will also return a ",(0,t.jsx)(s.code,{children:"remember-me"})," cookie. This cookie will be used to login automatically even if the session has expired."]}),"\n",(0,t.jsx)(s.h2,{id:"logout",children:"Logout"}),"\n",(0,t.jsxs)(s.p,{children:["You can explicitely logout an existing session by calling ",(0,t.jsx)(s.code,{children:"/api/logout"}),". This would return a ",(0,t.jsx)(s.code,{children:"204"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1670:(e,s,n)=>{n.d(s,{Z:()=>r,a:()=>a});var t=n(7378);const i={},o=t.createContext(i);function a(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);
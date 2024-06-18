"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3390],{7255:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=s(2540),t=s(3023);const a={},l="Install via third-party integrations",o={id:"installation/thirdparty",title:"Install via third-party integrations",description:"Those methods are not officially supported, if you encounter installation issues please contact the respective authors.",source:"@site/docs/installation/thirdparty.md",sourceDirName:"installation",slug:"/installation/thirdparty",permalink:"/docs/installation/thirdparty",draft:!1,unlisted:!1,editUrl:"https://github.com/gotson/komga-website/tree/master/docs/installation/thirdparty.md",tags:[],version:"current",lastUpdatedAt:171869454e4,frontMatter:{},sidebar:"docsSidebar",previous:{title:"Run with the Jar file",permalink:"/docs/installation/jar"},next:{title:"Configuration options",permalink:"/docs/installation/configuration"}},r={},d=[{value:"PikaPods",id:"pikapods",level:2},{value:"Windows Installer and Updater",id:"windows-installer-and-updater",level:2},{value:"Scoop (Windows)",id:"scoop-windows",level:2},{value:"Installation",id:"installation",level:3},{value:"1. (Skip if JDK is installed) Install JDK",id:"1-skip-if-jdk-is-installed-install-jdk",level:4},{value:"2. Install Komga",id:"2-install-komga",level:4},{value:"Manage",id:"manage",level:3},{value:"Run",id:"run",level:4},{value:"Update",id:"update",level:4},{value:"Uninstall",id:"uninstall",level:4},{value:"AUR - Arch User Repository",id:"aur---arch-user-repository",level:2},{value:"Installation",id:"installation-1",level:3},{value:"Run",id:"run-1",level:3},{value:"QNAP",id:"qnap",level:2},{value:"FreeNAS",id:"freenas",level:2},{value:"YunoHost",id:"yunohost",level:2},{value:"TrueNAS SCALE",id:"truenas-scale",level:2},{value:"Built-in Community Repository",id:"built-in-community-repository",level:3},{value:"TrueCharts",id:"truecharts",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"install-via-third-party-integrations",children:"Install via third-party integrations"}),"\n",(0,i.jsx)(n.admonition,{title:"Warning",type:"warning",children:(0,i.jsx)(n.p,{children:"Those methods are not officially supported, if you encounter installation issues please contact the respective authors."})}),"\n",(0,i.jsx)(n.h2,{id:"pikapods",children:"PikaPods"}),"\n",(0,i.jsx)(n.p,{children:"Offers managed hosting for Komga and shares part of the revenue back to the project. From $2.9/month with $5 free welcome credit."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://www.pikapods.com/pods?run=komga",children:(0,i.jsx)(n.img,{src:"https://www.pikapods.com/static/run-button.svg",alt:"Run on PikaPods"})})}),"\n",(0,i.jsx)(n.h2,{id:"windows-installer-and-updater",children:"Windows Installer and Updater"}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.a,{href:"https://github.com/losslesspng/SetUpKomgaJava",children:"Powershell script"})," to get up and running with Komga."]}),"\n",(0,i.jsx)(n.h2,{id:"scoop-windows",children:"Scoop (Windows)"}),"\n",(0,i.jsxs)(n.p,{children:["Komga is available in ",(0,i.jsx)(n.a,{href:"https://github.com/ScoopInstaller/Scoop",children:"Scoop"}),"'s ",(0,i.jsx)(n.a,{href:"https://github.com/ScoopInstaller/Extras",children:"extras"})," bucket."]}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["You need Scoop to use this installation method. Instruction to install Scoop can be found ",(0,i.jsx)(n.a,{href:"https://github.com/ScoopInstaller/Scoop#installation",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"1-skip-if-jdk-is-installed-install-jdk",children:"1. (Skip if JDK is installed) Install JDK"}),"\n",(0,i.jsxs)(n.p,{children:["Run ",(0,i.jsx)(n.code,{children:"scoop bucket add java"})," and then run ",(0,i.jsx)(n.code,{children:"scoop install java/temurin-lts-jdk"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"2-install-komga",children:"2. Install Komga"}),"\n",(0,i.jsxs)(n.p,{children:["Run ",(0,i.jsx)(n.code,{children:"scoop bucket add extras"})," and then run ",(0,i.jsx)(n.code,{children:"scoop install komga"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"manage",children:"Manage"}),"\n",(0,i.jsx)(n.h4,{id:"run",children:"Run"}),"\n",(0,i.jsxs)(n.p,{children:["Run ",(0,i.jsx)(n.code,{children:"komga"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Note: Default config dir is ",(0,i.jsx)(n.code,{children:"%USERPROFILE%\\scoop\\apps\\komga\\current\\config"})]}),"\n",(0,i.jsx)(n.h4,{id:"update",children:"Update"}),"\n",(0,i.jsxs)(n.p,{children:["Run ",(0,i.jsx)(n.code,{children:"scoop update komga"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"uninstall",children:"Uninstall"}),"\n",(0,i.jsxs)(n.p,{children:["Run ",(0,i.jsx)(n.code,{children:"scoop uninstall komga"})]}),"\n",(0,i.jsx)(n.h2,{id:"aur---arch-user-repository",children:"AUR - Arch User Repository"}),"\n",(0,i.jsxs)(n.p,{children:["Komga is available as an ",(0,i.jsx)(n.a,{href:"https://aur.archlinux.org/packages/komga/",children:"AUR"})," package."]}),"\n",(0,i.jsx)(n.h3,{id:"installation-1",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["It can be installed using ",(0,i.jsx)(n.code,{children:"yay -S komga"})," (or any other AUR package manager)."]}),"\n",(0,i.jsx)(n.h3,{id:"run-1",children:"Run"}),"\n",(0,i.jsxs)(n.p,{children:["Just run ",(0,i.jsx)(n.code,{children:"komga"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"qnap",children:"QNAP"}),"\n",(0,i.jsxs)(n.p,{children:["Komga is available as a ",(0,i.jsx)(n.a,{href:"https://www.qnapclub.eu/en/qpkg/853",children:"QPKG"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"freenas",children:"FreeNAS"}),"\n",(0,i.jsxs)(n.p,{children:["There is a ",(0,i.jsx)(n.a,{href:"https://blog.tommyku.com/blog/deploying-komga-on-freenas-jail/",children:"tutorial"})," to install Komga on FreeNAS jail."]}),"\n",(0,i.jsx)(n.h2,{id:"yunohost",children:"YunoHost"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://install-app.yunohost.org/?app=komga",children:(0,i.jsx)(n.img,{src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Install Komga with YunoHost"})})}),"\n",(0,i.jsx)(n.h2,{id:"truenas-scale",children:"TrueNAS SCALE"}),"\n",(0,i.jsx)(n.p,{children:"There are two primary methods to get Komga on TrueNAS SCALE. These are:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The built-in Community repository."}),"\n",(0,i.jsx)(n.li,{children:"The TrueCharts community repository."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"TrueCharts offers more features, such as easier management of domain names and https certificates."}),"\n",(0,i.jsx)(n.h3,{id:"built-in-community-repository",children:"Built-in Community Repository"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Open ",(0,i.jsx)(n.code,{children:"Apps"})," then go to ",(0,i.jsx)(n.code,{children:"Discover Apps"})," and then search for ",(0,i.jsx)(n.code,{children:"Komga"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)(n.code,{children:"Komga"})," and then click on ",(0,i.jsx)(n.code,{children:"Install"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Leave everything as default, except:","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Optional: Under ",(0,i.jsx)(n.code,{children:"Network Configuration"})," you can change the ",(0,i.jsx)(n.code,{children:"Web Port"}),". This is the port at which you can later access Komga."]}),"\n",(0,i.jsxs)(n.li,{children:["Optional: Under ",(0,i.jsx)(n.code,{children:"Storage Configuration"})," you can add the location to wherever your media files are currently stored by clicking ",(0,i.jsx)(n.code,{children:"Add"})," next to ",(0,i.jsx)(n.code,{children:"Additional Storage"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.code,{children:"Install"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"truecharts",children:"TrueCharts"}),"\n",(0,i.jsxs)(n.p,{children:["There is a ",(0,i.jsx)(n.a,{href:"https://truecharts.org/manual/SCALE/guides/getting-started#adding-truecharts",children:"tutorial"})," to install Truecharts on TrueNAS SCALE. Follow the steps to add TrueCharts to SCALE."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Open ",(0,i.jsx)(n.code,{children:"Apps"})," then go to ",(0,i.jsx)(n.code,{children:"Discover Apps"})," and then search for ",(0,i.jsx)(n.code,{children:"Komga"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)(n.code,{children:"Komga"})," and then click on ",(0,i.jsx)(n.code,{children:"Install"}),". Make sure that the ",(0,i.jsx)(n.code,{children:"Komga"})," that you select says ",(0,i.jsx)(n.code,{children:"Truecharts"})," in the UI, and not ",(0,i.jsx)(n.code,{children:"TrueNAS"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Leave everything as default, except:","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Optional: Under ",(0,i.jsx)(n.code,{children:"Networking and Services"})," you can change the ",(0,i.jsx)(n.code,{children:"Port"}),". This is the port at which you can later access Komga."]}),"\n",(0,i.jsxs)(n.li,{children:["Optional: If you will only access Komga through a domain name, see the TrueCharts guides for (a) ",(0,i.jsx)(n.a,{href:"https://truecharts.org/manual/SCALE/options/networking",children:"Networking and Services"})," and (b) ",(0,i.jsx)(n.a,{href:"https://truecharts.org/manual/SCALE/options/ingress",children:"Ingress"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Optional: In ",(0,i.jsx)(n.code,{children:"Storage and Persistence"}),", under ",(0,i.jsx)(n.code,{children:"App Data Storage"})," you can change the location to wherever your media files are currently stored. For detailed instructions, see the ",(0,i.jsx)(n.a,{href:"https://truecharts.org/manual/SCALE/guides/add-storage",children:"TrueCharts guide for adding storage"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.code,{children:"Install"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},3023:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var i=s(3696);const t={},a=i.createContext(t);function l(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);
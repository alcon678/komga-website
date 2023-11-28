"use strict";(self.webpackChunkkomga_website=self.webpackChunkkomga_website||[]).push([[5862],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),g=o,d=m["".concat(l,".").concat(g)]||m[g]||c[g]||n;return r?a.createElement(d,s(s({ref:t},u),{},{components:r})):a.createElement(d,s({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<n;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7837:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var a=r(7462),o=(r(7294),r(3905));const n={slug:"ebook-support",title:"eBook support",authors:"gotson",tags:["upgrade","komga"]},s=void 0,i={permalink:"/blog/ebook-support",source:"@site/blog/2023-11-29-ebooks.md",title:"eBook support",description:"Version 1.8.0 is bringing a long awaited feature: proper eBook support!",date:"2023-11-29T00:00:00.000Z",formattedDate:"November 29, 2023",tags:[{label:"upgrade",permalink:"/blog/tags/upgrade"},{label:"komga",permalink:"/blog/tags/komga"}],readingTime:1.37,hasTruncateMarker:!1,authors:[{name:"gotson",title:"Developer of Komga",url:"https://github.com/gotson",imageURL:"https://github.com/gotson.png",key:"gotson"}],frontMatter:{slug:"ebook-support",title:"eBook support",authors:"gotson",tags:["upgrade","komga"]},nextItem:{title:"Prepare for v1.0.0",permalink:"/blog/prepare-v1"}},l={authorsImageUrls:[void 0]},p=[{value:"What you need to know",id:"what-you-need-to-know",level:2},{value:"Other recent changes you may have missed",id:"other-recent-changes-you-may-have-missed",level:2}],u={toc:p},m="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Version ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gotson/komga/releases/tag/1.8.0"},"1.8.0")," is bringing a long awaited feature: ",(0,o.kt)("strong",{parentName:"p"},"proper eBook support!")),(0,o.kt)("p",null,"Github issue ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gotson/komga/issues/221"},"#221")," has been opened for more than 3 years, and has finally been tackled."),(0,o.kt)("h2",{id:"what-you-need-to-know"},"What you need to know"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"eBooks behave like any other book in Komga, in regards to series or metadata. You can even mix comic books and ebooks in the same series."),(0,o.kt)("li",{parentName:"ul"},"only EPUB format is supported. Other formats will not be supported in the future."),(0,o.kt)("li",{parentName:"ul"},"existing EPUB files will be re-analyzed. If you had image-only EPUB, those may not be compatible anymore with third-party clients."),(0,o.kt)("li",{parentName:"ul"},"the web EPUB reader is a very first version, and ",(0,o.kt)("strong",{parentName:"li"},"does not support saving progress"),". Read progress saving and restore will come in a future release."),(0,o.kt)("li",{parentName:"ul"},"any book in Komga can be read with ",(0,o.kt)("a",{parentName:"li",href:"https://readium.org/webpub-manifest/"},"WebPub")," compatible clients."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"There will be issues"),". EPUB is a complex format, and many EPUB files are not properly built. Raise issues ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/gotson/komga/issues/new/choose"},"on Github")," for support.")),(0,o.kt)("h2",{id:"other-recent-changes-you-may-have-missed"},"Other recent changes you may have missed"),(0,o.kt)("p",null,"In case you haven't kept up with the release notes since version 1.0.0, here are the most significant changes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Komga is now available as a ",(0,o.kt)("a",{parentName:"li",href:"./docs/installation/desktop"},"desktop app"),", and is available in the ",(0,o.kt)("a",{parentName:"li",href:"./docs/installation/ms-store"},"Microsoft Store")),(0,o.kt)("li",{parentName:"ul"},"Multiple settings are now configurable from the ",(0,o.kt)("a",{parentName:"li",href:"./docs/guides/server-settings"},"Server Settings")," screen. You may need to cleanup your configuration file and remove deprecated entries."),(0,o.kt)("li",{parentName:"ul"},"Thumbnails size can now be configured in Server Settings."),(0,o.kt)("li",{parentName:"ul"},"Background task management has been revamped, and now supports proper parallel executions (configurable in Server Settings)."),(0,o.kt)("li",{parentName:"ul"},"Komga now has support for ",(0,o.kt)("a",{parentName:"li",href:"./docs/guides/oneshots"},"One-Shots"),"."),(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("a",{parentName:"li",href:"./docs/guides/cli"},"Command Line Interface")," was added to update forgotten password for the admin account.")))}c.isMDXComponent=!0}}]);
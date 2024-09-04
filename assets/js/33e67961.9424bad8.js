"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2579],{5214:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=n(2540),r=n(3023);const s={},t="Read with Kobo",a={id:"guides/kobo",title:"Read with Kobo",description:"The Kobo integration is based on the native Kobo Sync capability, where your Kobo eReader will sync to a Komga server instead of the official Kobo servers.",source:"@site/docs/guides/kobo.md",sourceDirName:"guides",slug:"/guides/kobo",permalink:"/docs/guides/kobo",draft:!1,unlisted:!1,editUrl:"https://github.com/gotson/komga-website/tree/master/docs/guides/kobo.md",tags:[],version:"current",lastUpdatedAt:172543799e4,frontMatter:{},sidebar:"docsSidebar",previous:{title:"Read with Mihon",permalink:"/docs/guides/mihon"},next:{title:"Read with Paperback",permalink:"/docs/guides/paperback"}},l={},d=[{value:"Features supported and limitations",id:"features-supported-and-limitations",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Generate API key",id:"generate-api-key",level:3},{value:"Setup Kobo",id:"setup-kobo",level:3},{value:"Force external port",id:"force-external-port",level:3},{value:"Migrating from Calibre-Web",id:"migrating-from-calibre-web",level:2},{value:"Privacy and Security",id:"privacy-and-security",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Force Kobo Sync",id:"force-kobo-sync",level:3},{value:"Access Kobo eReader logs",id:"access-kobo-ereader-logs",level:3},{value:"Komga logs",id:"komga-logs",level:3}];function c(e){const o={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.header,{children:(0,i.jsx)(o.h1,{id:"read-with-kobo",children:"Read with Kobo"})}),"\n",(0,i.jsx)(o.p,{children:"The Kobo integration is based on the native Kobo Sync capability, where your Kobo eReader will sync to a Komga server instead of the official Kobo servers."}),"\n",(0,i.jsx)(o.h2,{id:"features-supported-and-limitations",children:"Features supported and limitations"}),"\n",(0,i.jsx)(o.p,{children:"This is what is currently supported:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["Only ",(0,i.jsx)(o.strong,{children:"EPUB"})," books from all libraries, along with their metadata and cover image, will be synced."]}),"\n",(0,i.jsx)(o.li,{children:"When books metadata is edited in Komga, they will be updated on the Kobo eReader."}),"\n",(0,i.jsx)(o.li,{children:"When books are deleted in Komga, they will be deleted on the Kobo eReader."}),"\n",(0,i.jsx)(o.li,{children:"Read progress is synced both ways (see also limitations below)"}),"\n",(0,i.jsxs)(o.li,{children:["If Kobo proxying is enabled in ",(0,i.jsx)(o.em,{children:"Server Settings"}),", Komga will relay requests to the official Kobo servers, and return both the Komga content and Kobo content to the Kobo eReader. This can be useful if you have official Kobo purchases."]}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"Limitations:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["Read progress","\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"For regular EPUB books, Kobo can only keep track of read progress at the beginning of a chapter, not within a chapter. Mid-chapter read progress will be lost when switching from Kobo to Komga or Komga to Kobo."}),"\n",(0,i.jsx)(o.li,{children:"For Kobo EPUB (KEPUB) books, Kobo uses its own mechanism to track progress. Komga does its best to map the Kobo specific read progress to Komga, but it may be off by a few pages.\nWhen syncing from Komga to Kobo, the Kobo will start at the beginning of the chapter."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(o.p,{children:["In order to use Kobo Sync with Komga, a Komga user must have the roles ",(0,i.jsx)(o.code,{children:"KOBO_SYNC"})," and ",(0,i.jsx)(o.code,{children:"FILE_DOWNLOAD"}),"."]}),"\n",(0,i.jsxs)(o.p,{children:["Proxying of unknown requests to the official Kobo servers can be enabled in ",(0,i.jsx)(o.em,{children:"Server Settings"}),". This is enabled globally for all users on the server."]}),"\n",(0,i.jsx)(o.h3,{id:"generate-api-key",children:"Generate API key"}),"\n",(0,i.jsxs)(o.p,{children:["The Kobo Sync Komga API uses a dedicated set of endpoints which require an API key to be accessed. Users can generate API keys from the ",(0,i.jsx)(o.em,{children:"Account Settings"})," page. Make sure to write down the generated key, as it won't be shown afterwards."]}),"\n",(0,i.jsx)(o.p,{children:"If you have multiple Kobo devices, it is recommended to use a different API key for each."}),"\n",(0,i.jsx)(o.h3,{id:"setup-kobo",children:"Setup Kobo"}),"\n",(0,i.jsxs)(o.p,{children:["Connect your Kobo eReader to your computer and open the ",(0,i.jsx)(o.code,{children:".kobo/Kobo/Kobo eReader.conf"})," file (you may need to display hidden files on Mac/Linux)."]}),"\n",(0,i.jsx)(o.p,{children:"The file should contain the following line (among others):"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"api_endpoint=https://storeapi.kobo.com\n"})}),"\n",(0,i.jsxs)(o.p,{children:["If the line does not exist, it must be created under the ",(0,i.jsx)(o.code,{children:"[OneStoreServices]"})," group."]}),"\n",(0,i.jsx)(o.p,{children:"You will need to replace this line with your external server address, in the following form:"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"api_endpoint=https://<your_komga_address.com>/kobo/<api_key>\n"})}),"\n",(0,i.jsx)(o.h3,{id:"force-external-port",children:"Force external port"}),"\n",(0,i.jsxs)(o.p,{children:["The Kobo eReader does not send valid HTTP ",(0,i.jsx)(o.code,{children:"Host"})," header, which could break the covers and file download in certain circumstances.  Komga will try its best to automatically fix the incorrect Kobo headers, but in some specific cases it's not possible."]}),"\n",(0,i.jsxs)(o.p,{children:["If you experience some issues downloading covers or files from the Kobo, you will need to configure the ",(0,i.jsx)(o.em,{children:"Kobo Sync external port"})," (in ",(0,i.jsx)(o.em,{children:"Server Settings"}),") to the port that your Kobo is accessing. Normally it should be what you have configured in ",(0,i.jsx)(o.code,{children:"api_endpoint"}),"."]}),"\n",(0,i.jsx)(o.p,{children:"A case where this would be required is if you access your Komga server directly (without a reverse proxy), with Komga running in Docker, and with a Docker mapped port that is different from the internal Komga port."}),"\n",(0,i.jsx)(o.h2,{id:"migrating-from-calibre-web",children:"Migrating from Calibre-Web"}),"\n",(0,i.jsxs)(o.p,{children:["If you have used Calibre-Web with Kobo Sync before, you can migrate to Komga by changing the ",(0,i.jsx)(o.code,{children:"Kobo eReader.conf"})," and point to your Komga server instead."]}),"\n",(0,i.jsx)(o.p,{children:"Books added by Calibre-Web should remain on your Kobo device."}),"\n",(0,i.jsx)(o.p,{children:"If you have Kobo proxying enabled, Komga is able to extract your Kobo authentication tokens from the Calibre-Web token (stored on the Kobo) transparently."}),"\n",(0,i.jsx)(o.h2,{id:"privacy-and-security",children:"Privacy and Security"}),"\n",(0,i.jsx)(o.p,{children:"The Kobo eReader sends out sensitive information during the Sync protocol. It is highly recommended to only use Kobo Sync over HTTPS."}),"\n",(0,i.jsx)(o.p,{children:"The API key is as sensitive as your username and password. Since the API key is part of the URL for Kobo Sync, you should not share this URL with anyone."}),"\n",(0,i.jsx)(o.p,{children:"Be careful when sharing Komga logs or Kobo logs, and redact any sensitive information."}),"\n",(0,i.jsx)(o.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsx)(o.h3,{id:"force-kobo-sync",children:"Force Kobo Sync"}),"\n",(0,i.jsxs)(o.p,{children:["If the Kobo eReader becomes out of sync with Komga somehow, you can force a full sync from the ",(0,i.jsx)(o.em,{children:"Account Settings"})," page. Locate the API key, and click the ",(0,i.jsx)(o.em,{children:"Force Kobo sync"})," icon."]}),"\n",(0,i.jsx)(o.h3,{id:"access-kobo-ereader-logs",children:"Access Kobo eReader logs"}),"\n",(0,i.jsx)(o.p,{children:"Logs on the Kobo device are encrypted and cannot be read when connecting the device to a computer."}),"\n",(0,i.jsx)(o.p,{children:"In order to get readable logs, you will need to enable Developer options:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["in the search bar, type ",(0,i.jsx)(o.code,{children:"devmodeon"})," and search"]}),"\n",(0,i.jsxs)(o.li,{children:["it will not show any search results, but you will be able to access Developer options under ",(0,i.jsx)(o.em,{children:"Settings > Device Information > Developer options"})]}),"\n",(0,i.jsxs)(o.li,{children:["In the ",(0,i.jsx)(o.em,{children:"Logging Category"})," section, enable the following: ",(0,i.jsx)(o.code,{children:"sync"}),", ",(0,i.jsx)(o.code,{children:"packetdump"})]}),"\n",(0,i.jsx)(o.li,{children:"Restart the Kobo eReader"}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"Once that's set, you will be able to stream the Kobo's logs using netcat. Use the following command on a computer that is on the same network as the Kobo:"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-shell",children:"nc -v ${kobo IP address} 5001\n"})}),"\n",(0,i.jsx)(o.h3,{id:"komga-logs",children:"Komga logs"}),"\n",(0,i.jsxs)(o.p,{children:["Komga can log all incoming HTTP requests, including headers and body, by setting ",(0,i.jsx)(o.code,{children:"logging.level.org.springframework.web.filter.CommonsRequestLoggingFilter"})," to ",(0,i.jsx)(o.code,{children:"DEBUG"}),"."]}),"\n",(0,i.jsxs)(o.p,{children:["To log outgoing HTTP requests to the official Kobo Store, set ",(0,i.jsx)(o.code,{children:"logging.level.org.gotson.komga.infrastructure.kobo"})," to ",(0,i.jsx)(o.code,{children:"DEBUG"}),"."]}),"\n",(0,i.jsxs)(o.p,{children:["You can also access the recent HTTP exchanges under the ",(0,i.jsx)(o.code,{children:"/actuator/httpexchanges"})," endpoint on your Komga server."]})]})}function h(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},3023:(e,o,n)=>{n.d(o,{R:()=>t,x:()=>a});var i=n(3696);const r={},s=i.createContext(r);function t(e){const o=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(s.Provider,{value:o},e.children)}}}]);
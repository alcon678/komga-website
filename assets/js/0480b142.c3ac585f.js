"use strict";(self.webpackChunkkomga_website=self.webpackChunkkomga_website||[]).push([[836],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,h=d["".concat(s,".").concat(u)]||d[u]||c[u]||r;return a?o.createElement(h,i(i({ref:t},m),{},{components:a})):o.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3584:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=a(7462),n=(a(7294),a(3905));const r={},i="Frequently Asked Questions",l={unversionedId:"faq",id:"faq",title:"Frequently Asked Questions",description:"I forgot my password",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",draft:!1,editUrl:"https://github.com/gotson/komga-website/tree/master/docs/faq.md",tags:[],version:"current",lastUpdatedAt:1696475351,formattedLastUpdatedAt:"Oct 5, 2023",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Community",permalink:"/docs/community"}},s={},p=[{value:"I forgot my password",id:"i-forgot-my-password",level:2},{value:"Where can I find the log files?",id:"where-can-i-find-the-log-files",level:2},{value:"How to enable DEBUG or TRACE logs?",id:"how-to-enable-debug-or-trace-logs",level:2},{value:"Via an <code>application.yml</code>",id:"via-an-applicationyml",level:3},{value:"Using the <code>jar</code> via the command line",id:"using-the-jar-via-the-command-line",level:3},{value:"Using Docker",id:"using-docker",level:3},{value:"Komga seems slow, how can I check what&#39;s going on?",id:"komga-seems-slow-how-can-i-check-whats-going-on",level:2},{value:"The memory consumption is huge",id:"the-memory-consumption-is-huge",level:2},{value:"How can I sync reading progress with tracker websites?",id:"how-can-i-sync-reading-progress-with-tracker-websites",level:2},{value:"Webreader double pages are not showing as single page",id:"webreader-double-pages-are-not-showing-as-single-page",level:2},{value:"Media type application/x-7z-compressed is not supported",id:"media-type-applicationx-7z-compressed-is-not-supported",level:2},{value:"My books/series show a different name than the files/folders",id:"my-booksseries-show-a-different-name-than-the-filesfolders",level:2},{value:"This server has already been claimed",id:"this-server-has-already-been-claimed",level:2},{value:"How can I move a library to a different folder?",id:"how-can-i-move-a-library-to-a-different-folder",level:2},{value:"Scan doesn&#39;t pick up new files under mergerfs",id:"scan-doesnt-pick-up-new-files-under-mergerfs",level:2},{value:"How to enable support for Jpeg XL?",id:"how-to-enable-support-for-jpeg-xl",level:2},{value:"Docker on Raspberry PI arm32: No monotonic clock was available",id:"docker-on-raspberry-pi-arm32-no-monotonic-clock-was-available",level:2}],m={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,n.kt)("h2",{id:"i-forgot-my-password"},"I forgot my password"),(0,n.kt)("p",null,"Either ask an admin to reset your password, or use the ",(0,n.kt)("a",{parentName:"p",href:"/docs/guides/cli#reset-password-for-a-user"},"Command Line Interface")," to reset it by yourself."),(0,n.kt)("h2",{id:"where-can-i-find-the-log-files"},"Where can I find the log files?"),(0,n.kt)("p",null,"By default (if you haven't changed the configuration), log files are located:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"on the Windows app: ",(0,n.kt)("inlineCode",{parentName:"li"},"%LOCALAPPDATA%/Komga/logs/komga.log")),(0,n.kt)("li",{parentName:"ul"},"on the macOS app: ",(0,n.kt)("inlineCode",{parentName:"li"},"~/Library/Logs/Komga/komga.log")),(0,n.kt)("li",{parentName:"ul"},"on Windows: ",(0,n.kt)("inlineCode",{parentName:"li"},"%USERPROFILE%/.komga/komga.log")),(0,n.kt)("li",{parentName:"ul"},"on macOS or Unix: ",(0,n.kt)("inlineCode",{parentName:"li"},"~/.komga/komga.log")),(0,n.kt)("li",{parentName:"ul"},"on Docker: in the directory you mounted as ",(0,n.kt)("inlineCode",{parentName:"li"},"/config"),", in a subdirectory called ",(0,n.kt)("inlineCode",{parentName:"li"},"logs"))),(0,n.kt)("h2",{id:"how-to-enable-debug-or-trace-logs"},"How to enable DEBUG or TRACE logs?"),(0,n.kt)("h3",{id:"via-an-applicationyml"},"Via an ",(0,n.kt)("inlineCode",{parentName:"h3"},"application.yml")),(0,n.kt)("p",null,"Add the following key in your ",(0,n.kt)("inlineCode",{parentName:"p"},"application.yml"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"logging.level.org.gotson.komga: DEBUG\n")),(0,n.kt)("p",null,"or"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"logging.level.org.gotson.komga: TRACE\n")),(0,n.kt)("h3",{id:"using-the-jar-via-the-command-line"},"Using the ",(0,n.kt)("inlineCode",{parentName:"h3"},"jar")," via the command line"),(0,n.kt)("p",null,"Start the ",(0,n.kt)("inlineCode",{parentName:"p"},"jar")," with the following option:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"java -jar komga-x.y.z.jar --logging.level.org.gotson.komga=DEBUG\n")),(0,n.kt)("p",null,"or"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"java -jar komga-x.y.z.jar --logging.level.org.gotson.komga=TRACE\n")),(0,n.kt)("h3",{id:"using-docker"},"Using Docker"),(0,n.kt)("p",null,"Add the following environment variable:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"LOGGING_LEVEL_ORG_GOTSON_KOMGA=DEBUG\n")),(0,n.kt)("p",null,"or"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"LOGGING_LEVEL_ORG_GOTSON_KOMGA=TRACE\n")),(0,n.kt)("h2",{id:"komga-seems-slow-how-can-i-check-whats-going-on"},"Komga seems slow, how can I check what's going on?"),(0,n.kt)("p",null,"If any activity is going on, an animated yellow bar will appear below the top-left logo. Hover your cursor over the bar to see the details of all pending tasks."),(0,n.kt)("video",{controls:!0,width:"250"},(0,n.kt)("source",{src:"/assets/media/faq/server-activity.webm",type:"video/webm"}),"Sorry, your browser doesn't support embedded videos."),(0,n.kt)("h2",{id:"the-memory-consumption-is-huge"},"The memory consumption is huge"),(0,n.kt)("p",null,"TL;DR: The operating system ",(0,n.kt)("em",{parentName:"p"},"does not")," report the real memory usage of the application, so don't look at those figures."),(0,n.kt)("p",null,"Komga runs on the Java Virtual Machine (JVM). The JVM works differently than other native programs in regard to memory consumption.\nOn startup, the JVM will ",(0,n.kt)("em",{parentName:"p"},"reserve")," some memory from the OS, but that doesn't mean this memory is used by the application. If the OS needs to reclaim that memory, the JVM will try to release it."),(0,n.kt)("p",null,"By default, the JVM would reserve 1/4th of the physical memory (depends on the total memory and JVM version), for instance if you have 32 Gb of memory, the JVM would reserve 8 Gb."),(0,n.kt)("p",null,"To increase or limit the maximum memory, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/installation/jar#increase-memory-limit"},"here")," (jar) and ",(0,n.kt)("a",{parentName:"p",href:"/docs/installation/docker#increase-memory-limit"},"here")," (Docker)."),(0,n.kt)("h2",{id:"how-can-i-sync-reading-progress-with-tracker-websites"},"How can I sync reading progress with tracker websites?"),(0,n.kt)("p",null,"Komga does not support this outside the box."),(0,n.kt)("p",null,"You can try ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/MALSync/MALSync"},"MAL-Sync")," which integrates with Komga and works with MyAnimeList, Kitsu, Anilist and others."),(0,n.kt)("h2",{id:"webreader-double-pages-are-not-showing-as-single-page"},"Webreader double pages are not showing as single page"),(0,n.kt)("p",null,"The double pages feature of the webreader requires image sizes to be available. This feature was added in v",(0,n.kt)("inlineCode",{parentName:"p"},"0.51.0"),". If your books have been analyzed before that version, you will need to re-analyze them in order for the double pages feature to work properly."),(0,n.kt)("h2",{id:"media-type-applicationx-7z-compressed-is-not-supported"},"Media type application/x-7z-compressed is not supported"),(0,n.kt)("p",null,"Your files are compressed using 7zip, which is not supported. Extract your archives and compress them again using the ",(0,n.kt)("inlineCode",{parentName:"p"},"zip")," format."),(0,n.kt)("h2",{id:"my-booksseries-show-a-different-name-than-the-filesfolders"},"My books/series show a different name than the files/folders"),(0,n.kt)("p",null,"Komga automatically import metadata from ",(0,n.kt)("inlineCode",{parentName:"p"},"EPUB")," files and from ",(0,n.kt)("inlineCode",{parentName:"p"},"ComicInfo.xml")," for ",(0,n.kt)("inlineCode",{parentName:"p"},"cbz"),"/",(0,n.kt)("inlineCode",{parentName:"p"},"cbr"),". The imported metadata will override the file/folder name."),(0,n.kt)("h2",{id:"this-server-has-already-been-claimed"},"This server has already been claimed"),(0,n.kt)("p",null,"The server cannot be claimed if a user already exists in the database. It can happen when you start Komga for the first time without the ",(0,n.kt)("inlineCode",{parentName:"p"},"claim")," profile as Komga will generate a default user."),(0,n.kt)("p",null,"You can solve the issue by deleting the database. By default it is located in ",(0,n.kt)("inlineCode",{parentName:"p"},"~/.komga/database.sqlite"),". ",(0,n.kt)("inlineCode",{parentName:"p"},"~")," is your home directory on Unix, and your User profile on Windows."),(0,n.kt)("h2",{id:"how-can-i-move-a-library-to-a-different-folder"},"How can I move a library to a different folder?"),(0,n.kt)("p",null,"You can follow those steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Make sure ",(0,n.kt)("a",{parentName:"li",href:"/docs/guides/libraries#compute-hash-for-files"},"File Hashing")," is enabled on the library."),(0,n.kt)("li",{parentName:"ol"},"Disable ",(0,n.kt)("a",{parentName:"li",href:"/docs/guides/trash#automatically-empty-trash"},"automatically emptying the trash")," for the library."),(0,n.kt)("li",{parentName:"ol"},"Perform a scan on the library and let all tasks finish. This will ensure all files are hashed."),(0,n.kt)("li",{parentName:"ol"},"Stop Komga."),(0,n.kt)("li",{parentName:"ol"},"Move/copy the files to the new folder."),(0,n.kt)("li",{parentName:"ol"},"Start Komga."),(0,n.kt)("li",{parentName:"ol"},"Edit the library and choose the new folder as the library root directory."),(0,n.kt)("li",{parentName:"ol"},"A scan will be triggered automatically after saving the library. The scan could take some time depending on the size of the library."),(0,n.kt)("li",{parentName:"ol"},"Once the scan is finished, the series and books should have been matched with the files in the new folder.")),(0,n.kt)("h2",{id:"scan-doesnt-pick-up-new-files-under-mergerfs"},"Scan doesn't pick up new files under mergerfs"),(0,n.kt)("p",null,"Add ",(0,n.kt)("inlineCode",{parentName:"p"},"func.getattr=newest")," to the options in your ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/fstab")," entry for the mergerfs volume. By default, mergerfs doesn't update the modified times for everything for performance reasons. This forces it to. In most cases the performance impact is negligible. "),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"/media/user/disk* /media/user/storage fuse.mergerfs defaults,nonempty,allow_other,use_ino,cache.files=off,moveonenospc=true,dropcacheonclose=true,minfreespace=50G,category.create=mfs,func.getattr=newest,fsname=mergerfs 0 0\n")),(0,n.kt)("h2",{id:"how-to-enable-support-for-jpeg-xl"},"How to enable support for Jpeg XL?"),(0,n.kt)("p",null,"Jpeg XL is supported by default in the official Docker image for ",(0,n.kt)("inlineCode",{parentName:"p"},"linux/amd64")," only."),(0,n.kt)("p",null,"In order for Komga to handle Jpeg XL files (",(0,n.kt)("inlineCode",{parentName:"p"},".jxl"),"), you will need to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"install ",(0,n.kt)("inlineCode",{parentName:"li"},"libjxl")," (see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gotson/NightMonkeys/tree/main/imageio-jxl"},"here")," for some known installation methods)"),(0,n.kt)("li",{parentName:"ul"},"follow the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gotson/NightMonkeys#requirements"},"requirements")," to launch ",(0,n.kt)("inlineCode",{parentName:"li"},"java")," with the correct arguments and environment variable")),(0,n.kt)("h2",{id:"docker-on-raspberry-pi-arm32-no-monotonic-clock-was-available"},"Docker on Raspberry PI arm32: No monotonic clock was available"),(0,n.kt)("p",null,"If you encounter the following message when starting the container:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-log"},"OpenJDK Server VM warning: No monotonic clock was available - timed services may be adversely affected if the time-of-day clock changes\n")),(0,n.kt)("p",null,"Your host system needs to have installed:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Docker version ",(0,n.kt)("inlineCode",{parentName:"li"},"19.03.9")," or newer"),(0,n.kt)("li",{parentName:"ul"},"libseccomp version ",(0,n.kt)("inlineCode",{parentName:"li"},"2.4.2")," or newer")))}c.isMDXComponent=!0}}]);
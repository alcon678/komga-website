"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3962],{8555:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var t=r(2540),i=r(3023);const s={},o="Run with Docker",c={id:"installation/docker",title:"Run with Docker",description:"Registries",source:"@site/docs/installation/docker.md",sourceDirName:"installation",slug:"/installation/docker",permalink:"/docs/installation/docker",draft:!1,unlisted:!1,editUrl:"https://github.com/gotson/komga-website/tree/master/docs/installation/docker.md",tags:[],version:"current",lastUpdatedAt:1713172682e3,frontMatter:{},sidebar:"docsSidebar",previous:{title:"Install the Desktop application",permalink:"/docs/installation/desktop"},next:{title:"Run with the Jar file",permalink:"/docs/installation/jar"}},d={},a=[{value:"Registries",id:"registries",level:2},{value:"Version tags",id:"version-tags",level:2},{value:"Usage",id:"usage",level:2},{value:"docker",id:"docker",level:3},{value:"docker-compose",id:"docker-compose",level:3},{value:"Parameters",id:"parameters",level:2},{value:"User / Group Identifiers",id:"user--group-identifiers",level:2},{value:"Increase memory limit",id:"increase-memory-limit",level:2},{value:"Support info",id:"support-info",level:2},{value:"Updating",id:"updating",level:2},{value:"Via Docker Run/Create",id:"via-docker-runcreate",level:3},{value:"Via Docker Compose",id:"via-docker-compose",level:3},{value:"Automatic updates",id:"automatic-updates",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"run-with-docker",children:"Run with Docker"}),"\n",(0,t.jsx)(n.h2,{id:"registries",children:"Registries"}),"\n",(0,t.jsx)(n.p,{children:"The Docker images are published on:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://hub.docker.com/r/gotson/komga",children:"DockerHub"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/gotson/komga/pkgs/container/komga",children:"ghcr.io"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"version-tags",children:"Version tags"}),"\n",(0,t.jsx)(n.p,{children:"This image provides various versions that are available via tags."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"center"},children:(0,t.jsx)(n.strong,{children:"Tag"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"latest"})}),(0,t.jsx)(n.td,{children:"latest commit"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"MAJOR.x"})}),(0,t.jsxs)(n.td,{children:["latest ",(0,t.jsx)(n.code,{children:"MAJOR"})," version, for example ",(0,t.jsx)(n.code,{children:"0.x"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"x.y.z"})}),(0,t.jsxs)(n.td,{children:["version ",(0,t.jsx)(n.code,{children:"x.y.z"})]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.p,{children:"Here are some example snippets to help you get started creating a container."}),"\n",(0,t.jsx)(n.h3,{id:"docker",children:"docker"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"docker create \\\n  --name=komga \\\n  --user 1000:1000 \\\n  -p 25600:25600 \\\n  --mount type=bind,source=/path/to/config,target=/config \\\n  --mount type=bind,source=/path/to/data,target=/data \\\n  --restart unless-stopped \\\n  gotson/komga\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then start the container:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"docker start komga\n"})}),"\n",(0,t.jsx)(n.h3,{id:"docker-compose",children:"docker-compose"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"---\nversion: '3.3'\nservices:\n  komga:\n    image: gotson/komga\n    container_name: komga\n    volumes:\n      - type: bind\n        source: /path/to/config\n        target: /config\n      - type: bind\n        source: /path/to/data\n        target: /data\n      - type: bind\n        source: /etc/timezone #alternatively you can use a TZ environment variable, like TZ=Europe/London\n        target: /etc/timezone\n        read_only: true\n    ports:\n      - 25600:25600\n    user: \"1000:1000\"\n    # remove the whole environment section if you don't need it\n    environment:\n      - <ENV_VAR>=<extra configuration>\n    restart: unless-stopped\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["Container images are configured using parameters passed at runtime (such as those above).\nThese parameters are separated by a colon and indicate ",(0,t.jsx)(n.code,{children:"external:internal"})," respectively.\nFor example, ",(0,t.jsx)(n.code,{children:"-p 8080:80"})," would expose port ",(0,t.jsx)(n.code,{children:"80"})," from inside the container to be accessible from the host's IP on port ",(0,t.jsx)(n.code,{children:"8080"})," outside the container."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Parameter"}),(0,t.jsx)(n.th,{children:"Function"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"-p 25600"})}),(0,t.jsx)(n.td,{children:"The port for the Komga APIs and web interface"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"--user: 1000:1000"})}),(0,t.jsxs)(n.td,{children:["User",":Group"," identifier - see below for explanation"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"--mount type=bind,source=/path/to/config,target=/config"})}),(0,t.jsx)(n.td,{children:"Database and Komga configurations"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"--mount type=bind,source=/path/to/data,target=/data"})}),(0,t.jsx)(n.td,{children:"Location of your data directory on disk. Choose a folder that contains both your books and your preferred import location for hardlinks to work."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"-e ENV_VAR=value"})}),(0,t.jsxs)(n.td,{children:["Any ",(0,t.jsx)(n.a,{href:"/docs/installation/configuration",children:"configuration"})," environment variable"]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"user--group-identifiers",children:"User / Group Identifiers"}),"\n",(0,t.jsxs)(n.p,{children:["When using volumes (",(0,t.jsx)(n.code,{children:"-v"})," flags) permissions issues can arise between the host OS and the container, we avoid this issue by allowing you to specify the user ID and group ID."]}),"\n",(0,t.jsx)(n.p,{children:"Ensure any volume directories on the host are owned by the same user you specify and any permissions issues will vanish like magic."}),"\n",(0,t.jsxs)(n.p,{children:["In this instance ",(0,t.jsx)(n.code,{children:"UID=1000"})," and ",(0,t.jsx)(n.code,{children:"GID=1000"}),", to find yours use ",(0,t.jsx)(n.code,{children:"id <your_user>"})," as below:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ id <your_user>\n  uid=1000(jdoe) gid=1000(jdgroup) groups=1000(jdgroup)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"increase-memory-limit",children:"Increase memory limit"}),"\n",(0,t.jsxs)(n.p,{children:["By default the ",(0,t.jsx)(n.code,{children:"java"})," process will be limited in the maximum amount of memory (RAM) it can use, usually 1gb. If you encounter some ",(0,t.jsx)(n.code,{children:"OutOfMemoryException"})," in the logs you probably need to increase the maximum memory Komga can use."]}),"\n",(0,t.jsxs)(n.p,{children:["To do so, you can use the ",(0,t.jsx)(n.code,{children:"JAVA_TOOL_OPTIONS=-Xmx<limit>"})," environment variable, where ",(0,t.jsx)(n.code,{children:"<limit>"})," can be any amount like ",(0,t.jsx)(n.code,{children:"2048m"}),", ",(0,t.jsx)(n.code,{children:"4g"})," etc. For example to run Komga with a maximum of 4gb of memory:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",metastring:"script",children:"JAVA_TOOL_OPTIONS=-Xmx4g\n"})}),"\n",(0,t.jsx)(n.h2,{id:"support-info",children:"Support info"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Shell access whilst the container is running: ",(0,t.jsx)(n.code,{children:"docker exec -it komga /bin/bash"})]}),"\n",(0,t.jsxs)(n.li,{children:["To monitor the logs of the container in realtime: ",(0,t.jsx)(n.code,{children:"docker logs -f komga"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"updating",children:"Updating"}),"\n",(0,t.jsx)(n.p,{children:"Below are the instructions for updating containers:"}),"\n",(0,t.jsx)(n.h3,{id:"via-docker-runcreate",children:"Via Docker Run/Create"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Update the image: ",(0,t.jsx)(n.code,{children:"docker pull gotson/komga"})]}),"\n",(0,t.jsxs)(n.li,{children:["Stop the running container: ",(0,t.jsx)(n.code,{children:"docker stop komga"})]}),"\n",(0,t.jsxs)(n.li,{children:["Delete the container: ",(0,t.jsx)(n.code,{children:"docker rm komga"})]}),"\n",(0,t.jsxs)(n.li,{children:["Recreate a new container with the same docker create parameters as instructed above (if mapped correctly to a host folder, your ",(0,t.jsx)(n.code,{children:"/config"})," folder and settings will be preserved)"]}),"\n",(0,t.jsxs)(n.li,{children:["Start the new container: ",(0,t.jsx)(n.code,{children:"docker start komga"})]}),"\n",(0,t.jsxs)(n.li,{children:["You can also remove the old dangling images: ",(0,t.jsx)(n.code,{children:"docker image prune"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"via-docker-compose",children:"Via Docker Compose"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Update all images: ",(0,t.jsx)(n.code,{children:"docker-compose pull"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["or update a single image: ",(0,t.jsx)(n.code,{children:"docker-compose pull komga"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Let compose update all containers as necessary: ",(0,t.jsx)(n.code,{children:"docker-compose up -d"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["or update a single container: ",(0,t.jsx)(n.code,{children:"docker-compose up -d komga"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["You can also remove the old dangling images: ",(0,t.jsx)(n.code,{children:"docker image prune"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"automatic-updates",children:"Automatic updates"}),"\n",(0,t.jsxs)(n.p,{children:["You can use ",(0,t.jsx)(n.a,{href:"https://github.com/containrrr/watchtower",children:"Watchtower"})," to automatically update your containers."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},3023:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var t=r(3696);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[305],{7119:(e,i,o)=>{o.r(i),o.d(i,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var n=o(4246),s=o(1670);const r={},t="Configuration options",a={id:"installation/configuration",title:"Configuration options",description:"Komga has sensible default values for all configuration keys. You only need to configure it if you want to change the default behaviour.",source:"@site/docs/installation/configuration.md",sourceDirName:"installation",slug:"/installation/configuration",permalink:"/docs/installation/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/gotson/komga-website/tree/master/docs/installation/configuration.md",tags:[],version:"current",lastUpdatedAt:1706748490,formattedLastUpdatedAt:"Feb 1, 2024",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Install via third-party integrations",permalink:"/docs/installation/thirdparty"},next:{title:"Expose your server",permalink:"/docs/installation/https"}},l={},d=[{value:"Optional configuration",id:"optional-configuration",level:2},{value:"KOMGA_CONFIGDIR / komga.config-dir: <code>&lt;directory&gt;</code>",id:"komga_configdir--komgaconfig-dir-directory",level:4},{value:"SERVER_PORT / server.port: <code>&lt;port&gt;</code>",id:"server_port--serverport-port",level:4},{value:"SERVER_SERVLET_CONTEXT_PATH / server.servlet.context-path: <code>&lt;baseUrl&gt;</code>",id:"server_servlet_context_path--serverservletcontext-path-baseurl",level:4},{value:"SERVER_SERVLET_SESSION_TIMEOUT / server.servlet.session.timeout: <code>&lt;duration&gt;</code>",id:"server_servlet_session_timeout--serverservletsessiontimeout-duration",level:4},{value:"<del>KOMGA_LIBRARIES_SCAN_CRON / komga.libraries-scan-cron: <code>&lt;cron&gt;</code></del>",id:"komga_libraries_scan_cron--komgalibraries-scan-cron-cron",level:4},{value:"<del>KOMGA_LIBRARIES_SCAN_STARTUP / komga.libraries-scan-startup: <code>&lt;true/false&gt;</code></del>",id:"komga_libraries_scan_startup--komgalibraries-scan-startup-truefalse",level:4},{value:"<del>KOMGA_LIBRARIES_SCAN_DIRECTORY_EXCLUSIONS / komga.libraries-scan-directory-exclusions: <code>&lt;exclusions&gt;</code></del>",id:"komga_libraries_scan_directory_exclusions--komgalibraries-scan-directory-exclusions-exclusions",level:4},{value:"<del>KOMGA_REMEMBERME_KEY / komga.remember-me.key: <code>&lt;key&gt;</code></del>",id:"komga_rememberme_key--komgaremember-mekey-key",level:4},{value:"<del>KOMGA_REMEMBERME_VALIDITY / komga.remember-me.validity: <code>&lt;duration&gt;</code></del>",id:"komga_rememberme_validity--komgaremember-mevalidity-duration",level:4},{value:"<del>KOMGA_SESSIONTIMEOUT / komga.session-timeout: <code>&lt;duration&gt;</code></del>",id:"komga_sessiontimeout--komgasession-timeout-duration",level:4},{value:"KOMGA_DATABASE_FILE / komga.database.file: <code>&lt;file path&gt;</code>",id:"komga_database_file--komgadatabasefile-file-path",level:4},{value:"KOMGA_CORS_ALLOWED_ORIGINS / komga.cors.allowed-origins: <code>&lt;origins&gt;</code>",id:"komga_cors_allowed_origins--komgacorsallowed-origins-origins",level:4},{value:"<del>KOMGA_DELETE_EMPTY_COLLECTIONS / komga.delete-empty-collections: <code>&lt;true/false&gt;</code></del>",id:"komga_delete_empty_collections--komgadelete-empty-collections-truefalse",level:4},{value:"<del>KOMGA_DELETE_EMPTY_READ_LISTS / komga.delete-empty-read-lists: <code>&lt;true/false&gt;</code></del>",id:"komga_delete_empty_read_lists--komgadelete-empty-read-lists-truefalse",level:4},{value:"KOMGA_OAUTH2_ACCOUNT_CREATION / komga.oauth2-account-creation: <code>&lt;true/false&gt;</code>",id:"komga_oauth2_account_creation--komgaoauth2-account-creation-truefalse",level:4},{value:"KOMGA_OIDC_EMAIL_VERIFICATION / komga.oidc-email-verification: <code>&lt;true/false&gt;</code>",id:"komga_oidc_email_verification--komgaoidc-email-verification-truefalse",level:4},{value:"LOGGING_FILE_NAME / logging.file.name: <code>&lt;logfile name&gt;</code>",id:"logging_file_name--loggingfilename-logfile-name",level:4},{value:"<del>KOMGA_TASKCONSUMERS / komga.task-consumers: <code>&lt;int&gt;</code></del>",id:"komga_taskconsumers--komgatask-consumers-int",level:4},{value:"<del>KOMGA_TASKCONSUMERSMAX / komga.task-consumers-max: <code>&lt;int&gt;</code></del>",id:"komga_taskconsumersmax--komgatask-consumers-max-int",level:4},{value:"Sample Configuration File",id:"sample-configuration-file",level:2},{value:"Database performance",id:"database-performance",level:2}];function c(e){const i={a:"a",admonition:"admonition",code:"code",del:"del",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"configuration-options",children:"Configuration options"}),"\n",(0,n.jsxs)(i.admonition,{type:"tip",children:[(0,n.jsx)(i.p,{children:"Komga has sensible default values for all configuration keys. You only need to configure it if you want to change the default behaviour."}),(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"application.yml"})," file does not exist by default, you need to create one if you want to customize the configuration."]})]}),"\n",(0,n.jsxs)(i.p,{children:["Komga relies heavily on ",(0,n.jsx)(i.a,{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-external-config.html",children:"Spring Boot's configuration"}),", leveraging ",(0,n.jsx)(i.code,{children:"profiles"})," and configuration ",(0,n.jsx)(i.code,{children:"properties"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["The easiest way to configure is either via environment variables (a good fit for ",(0,n.jsx)(i.code,{children:"docker"})," and ",(0,n.jsx)(i.code,{children:"docker-compose"}),") or by using an ",(0,n.jsx)(i.code,{children:"application.yml"})," file located in the configuration directory:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["The Docker image will load any ",(0,n.jsx)(i.code,{children:"application.yml"})," file located in the ",(0,n.jsx)(i.code,{children:"/config"})," mounted folder."]}),"\n",(0,n.jsxs)(i.li,{children:["The Jar will load any ",(0,n.jsx)(i.code,{children:"application.yml"})," file located in the ",(0,n.jsx)(i.code,{children:"komga.config-dir"})," directory (defaults to ",(0,n.jsx)(i.code,{children:"~/.komga"}),", ",(0,n.jsx)(i.a,{href:"#komga-configdir-komga-config-dir-directory",children:"more details"}),")."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["Each configuration key can have a different format depending if it's from the environment variable, or from the ",(0,n.jsx)(i.code,{children:"application.yml"})," file. In the following section I will provide both format in the form ",(0,n.jsx)(i.code,{children:"ENVIRONMENT_VARIABLE"})," / ",(0,n.jsx)(i.code,{children:"application-property"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["You can also specify configuration via the command line, when launching the ",(0,n.jsx)(i.code,{children:"jar"}),". Use the ",(0,n.jsx)(i.code,{children:"application-property"})," form, and prefix with ",(0,n.jsx)(i.code,{children:"--"}),". For example:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:'java -jar komga.jar --server.servlet.context-path="/komga" --server.port=8443\n'})}),"\n",(0,n.jsx)(i.h2,{id:"optional-configuration",children:"Optional configuration"}),"\n",(0,n.jsx)(i.p,{children:"You can use some optional configuration keys:"}),"\n",(0,n.jsxs)(i.h4,{id:"komga_configdir--komgaconfig-dir-directory",children:["KOMGA_CONFIGDIR / komga.config-dir: ",(0,n.jsx)(i.code,{children:"<directory>"})]}),"\n",(0,n.jsx)(i.p,{children:"The Komga configuration directory. Will be used to store the logs, database, and any other file Komga needs."}),"\n",(0,n.jsx)(i.p,{children:"Defaults to:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"%LOCALAPPDATA%/Komga"})," on the ",(0,n.jsx)(i.em,{children:"Windows app"}),". That folder is virtualized by Windows."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"~/Library/Application Support/Komga"})," on the macOS app."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"~/.komga"})," otherwise."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"~"})," is your home directory on Unix, and your User profile on Windows."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsxs)(i.em,{children:["When overriding this configuration, you need to use ",(0,n.jsx)(i.code,{children:"${user.home}"})," instead of ",(0,n.jsx)(i.code,{children:"~"})," (this is a specific Spring Boot variable)."]})}),"\n",(0,n.jsxs)(i.h4,{id:"server_port--serverport-port",children:["SERVER_PORT / server.port: ",(0,n.jsx)(i.code,{children:"<port>"})]}),"\n",(0,n.jsx)(i.p,{children:"Port to listen to for the API and web interface."}),"\n",(0,n.jsxs)(i.p,{children:["Can also be configured from the ",(0,n.jsx)(i.a,{href:"/docs/guides/server-settings#server-port",children:"Server Settings"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["Defaults to ",(0,n.jsx)(i.code,{children:"25600"}),"."]}),"\n",(0,n.jsxs)(i.h4,{id:"server_servlet_context_path--serverservletcontext-path-baseurl",children:["SERVER_SERVLET_CONTEXT_PATH / server.servlet.context-path: ",(0,n.jsx)(i.code,{children:"<baseUrl>"})]}),"\n",(0,n.jsx)(i.p,{children:"Base URL, useful if you need to reverse proxy with a subfolder."}),"\n",(0,n.jsxs)(i.p,{children:["Can also be configured from the ",(0,n.jsx)(i.a,{href:"/docs/guides/server-settings#base-url",children:"Server Settings"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["Defaults to ",(0,n.jsx)(i.code,{children:"/"}),"."]}),"\n",(0,n.jsxs)(i.h4,{id:"server_servlet_session_timeout--serverservletsessiontimeout-duration",children:["SERVER_SERVLET_SESSION_TIMEOUT / server.servlet.session.timeout: ",(0,n.jsx)(i.code,{children:"<duration>"})]}),"\n",(0,n.jsxs)(i.p,{children:["The duration after which an inactive session will expire. You can specify the timeunit, for example ",(0,n.jsx)(i.code,{children:"14d"})," for 14 days, or ",(0,n.jsx)(i.code,{children:"24h"})," for 24 hours. If no unit is set, seconds will be used."]}),"\n",(0,n.jsx)(i.p,{children:"Defaults to 30 minutes."}),"\n",(0,n.jsx)(i.h4,{id:"komga_libraries_scan_cron--komgalibraries-scan-cron-cron",children:(0,n.jsxs)(i.del,{children:["KOMGA_LIBRARIES_SCAN_CRON / komga.libraries-scan-cron: ",(0,n.jsx)(i.code,{children:"<cron>"})]})}),"\n",(0,n.jsxs)(i.p,{children:["This has been moved to ",(0,n.jsx)(i.a,{href:"/docs/guides/libraries#scan-interval",children:"Library options: scan interval"}),"."]}),"\n",(0,n.jsx)(i.h4,{id:"komga_libraries_scan_startup--komgalibraries-scan-startup-truefalse",children:(0,n.jsxs)(i.del,{children:["KOMGA_LIBRARIES_SCAN_STARTUP / komga.libraries-scan-startup: ",(0,n.jsx)(i.code,{children:"<true/false>"})]})}),"\n",(0,n.jsxs)(i.p,{children:["This has been moved to ",(0,n.jsx)(i.a,{href:"/docs/guides/libraries#scan-on-startup",children:"Library options: scan on startup"}),"."]}),"\n",(0,n.jsx)(i.h4,{id:"komga_libraries_scan_directory_exclusions--komgalibraries-scan-directory-exclusions-exclusions",children:(0,n.jsxs)(i.del,{children:["KOMGA_LIBRARIES_SCAN_DIRECTORY_EXCLUSIONS / komga.libraries-scan-directory-exclusions: ",(0,n.jsx)(i.code,{children:"<exclusions>"})]})}),"\n",(0,n.jsxs)(i.p,{children:["This has been moved to ",(0,n.jsx)(i.a,{href:"/docs/guides/libraries#directory-exclusions",children:"Library options: directory exclusions"}),"."]}),"\n",(0,n.jsx)(i.h4,{id:"komga_rememberme_key--komgaremember-mekey-key",children:(0,n.jsxs)(i.del,{children:["KOMGA_REMEMBERME_KEY / komga.remember-me.key: ",(0,n.jsx)(i.code,{children:"<key>"})]})}),"\n",(0,n.jsx)(i.p,{children:"This has been moved to Server Settings."}),"\n",(0,n.jsx)(i.h4,{id:"komga_rememberme_validity--komgaremember-mevalidity-duration",children:(0,n.jsxs)(i.del,{children:["KOMGA_REMEMBERME_VALIDITY / komga.remember-me.validity: ",(0,n.jsx)(i.code,{children:"<duration>"})]})}),"\n",(0,n.jsx)(i.p,{children:"This has been moved to Server Settings."}),"\n",(0,n.jsx)(i.h4,{id:"komga_sessiontimeout--komgasession-timeout-duration",children:(0,n.jsxs)(i.del,{children:["KOMGA_SESSIONTIMEOUT / komga.session-timeout: ",(0,n.jsx)(i.code,{children:"<duration>"})]})}),"\n",(0,n.jsxs)(i.p,{children:["This has been replaced by ",(0,n.jsx)(i.code,{children:"server.servlet.session.timeout"}),"."]}),"\n",(0,n.jsxs)(i.h4,{id:"komga_database_file--komgadatabasefile-file-path",children:["KOMGA_DATABASE_FILE / komga.database.file: ",(0,n.jsx)(i.code,{children:"<file path>"})]}),"\n",(0,n.jsx)(i.p,{children:"File path for the SQLite database."}),"\n",(0,n.jsxs)(i.p,{children:["If you want to change the directory, it is advised to change ",(0,n.jsx)(i.code,{children:"komga.config-dir"})," instead."]}),"\n",(0,n.jsx)(i.p,{children:"Defaults to:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"/config/database.sqlite"})," for ",(0,n.jsx)(i.em,{children:"Docker"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"\\${komga.config-dir}/database.sqlite"})," otherwise."]}),"\n"]}),"\n",(0,n.jsxs)(i.h4,{id:"komga_cors_allowed_origins--komgacorsallowed-origins-origins",children:["KOMGA_CORS_ALLOWED_ORIGINS / komga.cors.allowed-origins: ",(0,n.jsx)(i.code,{children:"<origins>"})]}),"\n",(0,n.jsx)(i.p,{children:"A list of origins to allow for CORS."}),"\n",(0,n.jsx)(i.p,{children:"Defaults to empty list."}),"\n",(0,n.jsx)(i.h4,{id:"komga_delete_empty_collections--komgadelete-empty-collections-truefalse",children:(0,n.jsxs)(i.del,{children:["KOMGA_DELETE_EMPTY_COLLECTIONS / komga.delete-empty-collections: ",(0,n.jsx)(i.code,{children:"<true/false>"})]})}),"\n",(0,n.jsx)(i.p,{children:"This has been moved to Server Settings."}),"\n",(0,n.jsx)(i.h4,{id:"komga_delete_empty_read_lists--komgadelete-empty-read-lists-truefalse",children:(0,n.jsxs)(i.del,{children:["KOMGA_DELETE_EMPTY_READ_LISTS / komga.delete-empty-read-lists: ",(0,n.jsx)(i.code,{children:"<true/false>"})]})}),"\n",(0,n.jsx)(i.p,{children:"This has been moved to Server Settings."}),"\n",(0,n.jsxs)(i.h4,{id:"komga_oauth2_account_creation--komgaoauth2-account-creation-truefalse",children:["KOMGA_OAUTH2_ACCOUNT_CREATION / komga.oauth2-account-creation: ",(0,n.jsx)(i.code,{children:"<true/false>"})]}),"\n",(0,n.jsx)(i.p,{children:"A boolean indicating whether Komga should create new users when a login via OAuth2/OIDC succeeds, but there is no existing user with that email."}),"\n",(0,n.jsxs)(i.p,{children:["Such users will be created with a random password, which the user can subsequently change from the ",(0,n.jsx)(i.em,{children:"Account Settings"})," page later on, for example to be able to connect using OPDS or Tachiyomi."]}),"\n",(0,n.jsx)(i.admonition,{type:"warning",children:(0,n.jsx)(i.p,{children:"It is recommended to enable this only with OAuth2 providers you control"})}),"\n",(0,n.jsxs)(i.p,{children:["Defaults to ",(0,n.jsx)(i.code,{children:"false"}),"."]}),"\n",(0,n.jsxs)(i.h4,{id:"komga_oidc_email_verification--komgaoidc-email-verification-truefalse",children:["KOMGA_OIDC_EMAIL_VERIFICATION / komga.oidc-email-verification: ",(0,n.jsx)(i.code,{children:"<true/false>"})]}),"\n",(0,n.jsxs)(i.p,{children:["A boolean indicating whether Komga should check whether the ",(0,n.jsx)(i.code,{children:"email_verified"})," claim is present and true in the OpenID Connect request."]}),"\n",(0,n.jsx)(i.admonition,{type:"warning",children:(0,n.jsx)(i.p,{children:"It is recommended to disable this only with OIDC providers that do not verify emails (like Azure AD)"})}),"\n",(0,n.jsxs)(i.p,{children:["Defaults to ",(0,n.jsx)(i.code,{children:"true"}),"."]}),"\n",(0,n.jsxs)(i.h4,{id:"logging_file_name--loggingfilename-logfile-name",children:["LOGGING_FILE_NAME / logging.file.name: ",(0,n.jsx)(i.code,{children:"<logfile name>"})]}),"\n",(0,n.jsx)(i.p,{children:"Name of the log file."}),"\n",(0,n.jsxs)(i.p,{children:["If you want to change the directory, it is advised to change ",(0,n.jsx)(i.code,{children:"komga.config-dir"})," instead."]}),"\n",(0,n.jsx)(i.p,{children:"Defaults to:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"~/Library/Logs/Komga/komga.log"})," for the ",(0,n.jsx)(i.em,{children:"macOS app"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"/config/logs/komga.log"})," for ",(0,n.jsx)(i.em,{children:"Docker"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"\\${komga.config-dir}/komga.log"})," otherwise."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"~"})," is your home directory on Unix, and your User profile on Windows."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsxs)(i.em,{children:["When overriding this configuration, you need to use ",(0,n.jsx)(i.code,{children:"${user.home}"})," instead of ",(0,n.jsx)(i.code,{children:"~"})," (this is a specific Spring Boot variable)."]})}),"\n",(0,n.jsx)(i.h4,{id:"komga_taskconsumers--komgatask-consumers-int",children:(0,n.jsxs)(i.del,{children:["KOMGA_TASKCONSUMERS / komga.task-consumers: ",(0,n.jsx)(i.code,{children:"<int>"})]})}),"\n",(0,n.jsx)(i.p,{children:"This has been removed."}),"\n",(0,n.jsx)(i.h4,{id:"komga_taskconsumersmax--komgatask-consumers-max-int",children:(0,n.jsxs)(i.del,{children:["KOMGA_TASKCONSUMERSMAX / komga.task-consumers-max: ",(0,n.jsx)(i.code,{children:"<int>"})]})}),"\n",(0,n.jsx)(i.p,{children:"This has been removed."}),"\n",(0,n.jsx)(i.h2,{id:"sample-configuration-file",children:"Sample Configuration File"}),"\n",(0,n.jsxs)(i.p,{children:["Here is a sample ",(0,n.jsx)(i.code,{children:"application.yml"})," file in case you need to customize it. Keep only the lines you need."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-yaml",children:"# Only keep lines that are relevant to you!\n# Lines starting with # are comments\n# Make sure indentation is correct (2 spaces at every indentation level), yaml is very sensitive!\nkomga:\n  database:\n    file: ${user.home}/.komga/database.sqlite\n  cors.allowed-origins:\n    - http://localhost:8081\n    - http://localhost:8082\n  delete-empty-collections: true\n  delete-empty-read-lists: true\nserver:\n  port: 25600\n  servlet:\n    session.timeout: 7d # session timeout, here 7 days\n    context-path: /komga\n"})}),"\n",(0,n.jsx)(i.h2,{id:"database-performance",children:"Database performance"}),"\n",(0,n.jsx)(i.admonition,{type:"warning",children:(0,n.jsx)(i.p,{children:"Use at your own risk!"})}),"\n",(0,n.jsx)(i.p,{children:"Some specific configuration keys are available to tweak the database performance."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-yaml",children:"komga:\n  database:\n    # sets the retry timeout when SQLITE_BUSY error happens\n    busy-timeout: 30s\n    \n    # changes the journal mode\n    # accepted values are: DELETE, TRUNCATE, PERSIST, MEMORY, WAL, OFF\n    # most likely to be set to wal if needed, check https://sqlite.org/wal.html for more details\n    journal-mode: wal\n    \n    # pool size will determine the number of connections in the pool\n    # this takes precedence over max-pool-size if set\n    # defaults to undefined\n    pool-size: 1\n    \n    # max-pool-size will determine the maximum number of connections in the pool\n    # when set, the number of connections is set to the number of available processors capped at max-pool-size\n    # defaults to 1\n    max-pool-size: 8\n    \n    # pragmas accepts a list of key/value pairs where:\n    # - key is the pragma name (see https://www.sqlite.org/pragma.html)\n    # - value is the pragma value\n    pragmas:\n      # here are some example pragmas\n      page_size: 1024\n      synchronous: OFF\n"})})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1670:(e,i,o)=>{o.d(i,{Z:()=>a,a:()=>t});var n=o(7378);const s={},r=n.createContext(s);function t(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);
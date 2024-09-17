"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1130],{4511:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=o(2540),t=o(3023);const r={},s="Social login",a={id:"installation/oauth2",title:"Social login",description:"Komga supports social login via OAuth2 and OpenID Connect. In order for this to work, Komga needs to retrieve the user's email address via your provider, and will match it with the email of the Komga users.",source:"@site/docs/installation/oauth2.md",sourceDirName:"installation",slug:"/installation/oauth2",permalink:"/docs/installation/oauth2",draft:!1,unlisted:!1,editUrl:"https://github.com/gotson/komga-website/tree/master/docs/installation/oauth2.md",tags:[],version:"current",lastUpdatedAt:1726552986e3,frontMatter:{},sidebar:"docsSidebar",previous:{title:"Expose your server",permalink:"/docs/installation/https"},next:{title:"Google Drive and rclone",permalink:"/docs/installation/gdrive"}},c={},l=[{value:"Guide for common providers",id:"guide-for-common-providers",level:2},{value:"Google",id:"google",level:3},{value:"Facebook",id:"facebook",level:3},{value:"Github",id:"github",level:3},{value:"Advanced configuration",id:"advanced-configuration",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"social-login",children:"Social login"})}),"\n",(0,i.jsxs)(n.p,{children:["Komga supports social login via ",(0,i.jsx)(n.strong,{children:"OAuth2"})," and ",(0,i.jsx)(n.strong,{children:"OpenID Connect"}),". In order for this to work, Komga needs to retrieve the user's email address via your provider, and will match it with the email of the Komga users."]}),"\n",(0,i.jsxs)(n.p,{children:["In order to setup social login, you will need to create an application in the developer portal of the social login provider of your choice (Google, Facebook, Github\u2026), and retrieve a ",(0,i.jsx)(n.em,{children:"Client ID"})," and ",(0,i.jsx)(n.em,{children:"Client Secret"}),". You will also need to configure a ",(0,i.jsx)(n.em,{children:"Redirect URI"})," in the application you created."]}),"\n",(0,i.jsxs)(n.p,{children:["You can enable automatic account creation upon successful social login, see ",(0,i.jsx)(n.a,{href:"/docs/installation/configuration#komga-oauth2-account-creation-komga-oauth2-account-creation-true-false",children:"here"})," for more details."]}),"\n",(0,i.jsx)(n.h2,{id:"guide-for-common-providers",children:"Guide for common providers"}),"\n",(0,i.jsx)(n.p,{children:"You can easily configure Google, Github, and Facebook without any complex configuration."}),"\n",(0,i.jsx)(n.h3,{id:"google",children:"Google"}),"\n",(0,i.jsxs)(n.p,{children:["Follow the instructions on the ",(0,i.jsx)(n.a,{href:"https://developers.google.com/identity/protocols/OpenIDConnect",children:"OpenID Connect page"}),', starting in the section, "Setting up OAuth 2.0".']}),"\n",(0,i.jsxs)(n.p,{children:['When asked for a "Redirect URI", use ',(0,i.jsx)(n.code,{children:"{baseUrl}/login/oauth2/code/google"}),", where ",(0,i.jsx)(n.code,{children:"baseUrl"})," is your server's address."]}),"\n",(0,i.jsx)(n.p,{children:'After completing the "Obtain OAuth 2.0 credentials" instructions, you should have a new OAuth Client with credentials consisting of a Client ID and a Client Secret.'}),"\n",(0,i.jsxs)(n.p,{children:["Modify your ",(0,i.jsx)(n.code,{children:"application.yml"})," as below and replace the values in the ",(0,i.jsx)(n.code,{children:"client-id"})," and ",(0,i.jsx)(n.code,{children:"client-secret"})," property with the OAuth 2.0 credentials you created earlier."]}),"\n",(0,i.jsx)(n.p,{children:"Sample configuration:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"spring:\n  security:\n    oauth2:\n      client:\n        registration:\n          google:\n            client-id: 1044613984fsf335-mnsdvkjy3yf98294unfmnvd8.apps.googleusercontent.com\n            client-secret: jwhfkjhwefkn44t8vcxml3m\n"})}),"\n",(0,i.jsx)(n.h3,{id:"facebook",children:"Facebook"}),"\n",(0,i.jsxs)(n.p,{children:["Follow the ",(0,i.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/register",children:"instructions"})," to create an App, and add the Facebook Login product."]}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"Valid OAuth Redirect URIs"}),", use ",(0,i.jsx)(n.code,{children:"{baseUrl}/login/oauth2/code/facebook"}),", where ",(0,i.jsx)(n.code,{children:"baseUrl"})," is your server's address."]}),"\n",(0,i.jsxs)(n.p,{children:["Modify your ",(0,i.jsx)(n.code,{children:"application.yml"})," as below and replace the values in the ",(0,i.jsx)(n.code,{children:"client-id"})," and ",(0,i.jsx)(n.code,{children:"client-secret"})," property with the App ID and App Secret."]}),"\n",(0,i.jsx)(n.p,{children:"Sample configuration:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"spring:\n  security:\n    oauth2:\n      client:\n        registration:\n          facebook:\n            client-id: 227581266063919\n            client-secret: 47f03915334f49cdueru810069321964929\n"})}),"\n",(0,i.jsx)(n.h3,{id:"github",children:"Github"}),"\n",(0,i.jsxs)(n.p,{children:["Register a ",(0,i.jsx)(n.a,{href:"https://github.com/settings/applications/new",children:"new application"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:['For the "Authorization callback URL", use ',(0,i.jsx)(n.code,{children:"{baseUrl}/login/oauth2/code/github"}),", where ",(0,i.jsx)(n.code,{children:"baseUrl"})," is your server's address."]}),"\n",(0,i.jsx)(n.p,{children:"Generate a new Client Secret, you should now have a Client ID and Client Secret."}),"\n",(0,i.jsxs)(n.p,{children:["Modify your ",(0,i.jsx)(n.code,{children:"application.yml"})," as below and replace the values in the ",(0,i.jsx)(n.code,{children:"client-id"})," and ",(0,i.jsx)(n.code,{children:"client-secret"})," property with the OAuth 2.0 credentials you created earlier."]}),"\n",(0,i.jsx)(n.p,{children:"Sample configuration:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"spring:\n  security:\n    oauth2:\n      client:\n        registration:\n          github:\n            client-id: 62736jnfksui37384hnmsdnf\n            client-secret: jhjgfy67363uhif762328938844940e3e8c8629c18f9\n            scope: user:email\n"})}),"\n",(0,i.jsx)(n.h2,{id:"advanced-configuration",children:"Advanced configuration"}),"\n",(0,i.jsx)(n.p,{children:"You can configure any OAuth2 provider, but you will need to provide a more extensive configuration. The below example shows how to configure a Keycloak instance, but any provider could be configured in a similar fashion."}),"\n",(0,i.jsxs)(n.p,{children:["Modify your ",(0,i.jsx)(n.code,{children:"application.yml"})," as below and replace the values in the ",(0,i.jsx)(n.code,{children:"client-id"})," and ",(0,i.jsx)(n.code,{children:"client-secret"})," property with your credentials You will also need to update the various URIs in the ",(0,i.jsx)(n.code,{children:"provider"})," section."]}),"\n",(0,i.jsx)(n.p,{children:"You need to make sure that the users have an email setup, and that it has been marked as verified."}),"\n",(0,i.jsxs)(n.p,{children:["When configuring the client in your provider, you may need to input a redirect URI. Use the following: ",(0,i.jsx)(n.code,{children:"{baseUrl}/login/oauth2/code/{registrationId}"}),", where ",(0,i.jsx)(n.code,{children:"baseUrl"})," is your server's address, and ",(0,i.jsx)(n.code,{children:"registrationId"})," is the name of the configuration key (",(0,i.jsx)(n.code,{children:"keycloak"})," in the below example)."]}),"\n",(0,i.jsxs)(n.p,{children:["There are 2 options to configure a provider, either set ",(0,i.jsx)(n.code,{children:"issuer-uri"})," or all of the following: ",(0,i.jsx)(n.code,{children:"authorization-uri"}),", ",(0,i.jsx)(n.code,{children:"token-uri"}),",\n",(0,i.jsx)(n.code,{children:"jwk-set-uri"}),", ",(0,i.jsx)(n.code,{children:"user-info-uri"}),". If your authentication server provides ",(0,i.jsx)(n.code,{children:"issuer-uri"}),", this option is preferred."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"registration"})," section contains a ",(0,i.jsx)(n.code,{children:"provider"})," option, this must be the same name as specified in the\n",(0,i.jsx)(n.code,{children:"provider"})," configuration. (In the example below, we've configured ",(0,i.jsx)(n.code,{children:"provider"})," with name ",(0,i.jsx)(n.code,{children:"keycloak"}),", so in the\n",(0,i.jsx)(n.code,{children:"registration"})," section we set ",(0,i.jsx)(n.code,{children:"provider: keycloak"}),"). The name of the provider can be whatever you want, no need\nto use the service's name if you don't want to."]}),"\n",(0,i.jsx)(n.p,{children:"Sample configuration:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'spring:\n  security:\n    oauth2:\n      client:\n        registration:\n          keycloak:\n            provider: keycloak # this must match the provider below\n            client-id: your-client-id\n            client-secret: c830e452-a2a9-40a0-93c1-eb84ea688245\n            client-name: Keycloak\n            scope: openid,email\n            authorization-grant-type: authorization_code\n            # the placeholders in {} will be replaced automatically, you don\'t need to change this line\n            redirect-uri: "{baseUrl}/{action}/oauth2/code/{registrationId}"\n        provider:\n          keycloak: # this must match the provider above\n            user-name-attribute: sub\n            # either set the issuer-uri, in which case the app will lookup the configuration for you automatically\n            issuer-uri: http://localhost:8085/auth/realms/komgatest\n            # or set all of the following\n            authorization-uri: http://localhost:8085/auth/realms/komgatest/protocol/openid-connect/auth\n            token-uri: http://localhost:8085/auth/realms/komgatest/protocol/openid-connect/token\n            jwk-set-uri: http://localhost:8085/auth/realms/komgatest/protocol/openid-connect/certs\n            user-info-uri: http://localhost:8085/auth/realms/komgatest/protocol/openid-connect/userinfo\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},3023:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>a});var i=o(3696);const t={},r=i.createContext(t);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
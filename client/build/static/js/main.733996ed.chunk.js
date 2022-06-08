(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var a,r,c=n(0),i=n.n(c),o=n(28),s=n.n(o),l=(n(91),n(4)),d=n(21),j=n(7),b=n(84),u=n(114),h=n(116),O=n(113),m=n(82),p=n(11),x=n(31),v=n(39),f=n(10),g=n(117),w=n(70),k=n(115),y=Object(k.a)(a||(a=Object(w.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),S=Object(k.a)(r||(r=Object(w.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),N=n(41),T=n(42),$=n(71),C=n.n($),L=new(function(){function e(){Object(N.a)(this,e)}return Object(T.a)(e,[{key:"getProfile",value:function(){return C()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return C()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),W=n(2);var B=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(f.a)(t,2),a=n[0],r=n[1],i=Object(g.a)(y),o=Object(f.a)(i,2),s=o[0],j=o[1].error,b=function(){var e=Object(v.a)(Object(x.a)().mark((function e(t){var n,r;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,s({variables:{email:a.email,password:a.password}});case 4:n=e.sent,r=n.data.login.token,L.login(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),u=function(e){var t=e.target,n=t.name,c=t.value;r(Object(l.a)(Object(l.a)({},a),{},Object(p.a)({},n,c)))};return Object(W.jsxs)("div",{className:"container my-1",children:[Object(W.jsx)(d.b,{to:"/signup",children:"\u2190 Go to Signup"}),Object(W.jsx)("h2",{children:"Login"}),Object(W.jsxs)("form",{onSubmit:b,children:[Object(W.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(W.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(W.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:u})]}),Object(W.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(W.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(W.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:u})]}),j?Object(W.jsx)("div",{children:Object(W.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(W.jsx)("div",{className:"flex-row flex-end",children:Object(W.jsx)("button",{type:"submit",children:"Submit"})})]})]})},E=function(){return Object(W.jsx)("div",{className:"container",children:Object(W.jsx)(B,{})})};var I=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(f.a)(t,2),a=n[0],r=n[1],i=Object(g.a)(y),o=Object(f.a)(i,2),s=o[0],j=o[1].error,b=function(){var e=Object(v.a)(Object(x.a)().mark((function e(t){var n,r;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,s({variables:{email:a.email,password:a.password}});case 4:n=e.sent,r=n.data.login.token,L.login(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),u=function(e){var t=e.target,n=t.name,c=t.value;r(Object(l.a)(Object(l.a)({},a),{},Object(p.a)({},n,c)))};return Object(W.jsxs)("div",{className:"container my-1",children:[Object(W.jsx)(d.b,{to:"/signup",children:"\u2190 Go to Signup"}),Object(W.jsx)("h2",{children:"Login"}),Object(W.jsxs)("form",{onSubmit:b,children:[Object(W.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(W.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(W.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:u})]}),Object(W.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(W.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(W.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:u})]}),j?Object(W.jsx)("div",{children:Object(W.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(W.jsx)("div",{className:"flex-row flex-end",children:Object(W.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var A=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(f.a)(t,2),a=(n[0],n[1],Object(g.a)(S));return Object(f.a)(a,1)[0],Object(W.jsxs)("div",{className:"container my-1",children:[Object(W.jsx)(d.b,{to:"/login",children:"\u2190 Go to Login"}),Object(W.jsx)("h2",{children:"Signup"})]})},F=n(51),U=n(74),_=n(37);var P=function(){return Object(W.jsx)("div",{children:Object(W.jsx)("nav",{children:L.loggedIn()?Object(W.jsx)("div",{children:Object(W.jsx)(F.a,{bg:"dark",variant:"dark",children:Object(W.jsxs)(U.a,{children:[Object(W.jsx)(F.a.Brand,{href:"#home",children:"The-19th-Hole"}),Object(W.jsxs)(_.a,{className:"me-auto",children:[Object(W.jsx)(_.a.Link,{children:Object(W.jsx)(d.b,{to:"/Favorites",children:"Favorites "})}),Object(W.jsx)(_.a.Link,{children:Object(W.jsx)("a",{href:"/",onClick:function(){return L.logout()},children:" Logout "})})]})]})})}):Object(W.jsx)("div",{children:Object(W.jsx)(F.a,{bg:"dark",variant:"dark",children:Object(W.jsxs)(U.a,{children:[Object(W.jsx)(F.a.Brand,{href:"#home",children:"The-19th-Hole"}),Object(W.jsxs)(_.a,{className:"me-auto",children:[Object(W.jsx)(_.a.Link,{children:Object(W.jsx)(d.b,{to:"/signup",children:" Signup "})}),Object(W.jsx)(_.a.Link,{children:Object(W.jsx)(d.b,{to:"/login",children:" Login"})})]})]})})})})})},D=n(52),G=n(69),H=function(e){var t=Object(c.useState)(!1),n=Object(f.a)(t,2);n[0],n[1];return Object(W.jsx)(D.a,{style:{width:"18rem"},children:Object(W.jsxs)(D.a.Body,{style:{backgroundColor:"#f3ece4"},children:[Object(W.jsx)(D.a.Title,{style:{color:"#515b5f"},children:"User's Name"}),Object(W.jsx)(D.a.Text,{style:{color:"#1C3D12"},children:"Here will be the information about the player that you choose"}),Object(W.jsx)(G.a,{style:{backgroundColor:"#515b5f"},children:"Button to favorite this player"})]})})},R=Object(b.a)({uri:"/graphql"}),J=Object(m.a)((function(e,t){var n=t.headers,a=localStorage.getItem("id_token");return{headers:Object(l.a)(Object(l.a)({},n),{},{authorization:a?"Bearer ".concat(a):""})}})),q=new u.a({link:J.concat(R),cache:new h.a});var z=function(){return Object(W.jsx)(O.a,{client:q,children:Object(W.jsx)(d.a,{children:Object(W.jsxs)("div",{className:"App",children:[Object(W.jsx)(P,{}),Object(W.jsxs)(j.c,{children:[Object(W.jsx)(j.a,{path:"/",element:Object(W.jsx)(E,{})}),Object(W.jsx)(j.a,{path:"/login",element:Object(W.jsx)(I,{})}),Object(W.jsx)(j.a,{path:"/signup",element:Object(W.jsx)(A,{})})]}),Object(W.jsx)("div",{children:Object(W.jsx)(H,{})})]})})})},M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(100);s.a.render(Object(W.jsx)(i.a.StrictMode,{children:Object(W.jsx)(z,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");M?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):K(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):K(t,e)}))}}()},91:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.733996ed.chunk.js.map
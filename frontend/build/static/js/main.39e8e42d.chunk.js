(this["webpackJsonpfastapi-react"]=this["webpackJsonpfastapi-react"]||[]).push([[0],{382:function(e,t,a){e.exports=a(549)},387:function(e,t,a){},510:function(e,t){},549:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),s=a(22),l=(a(387),a(13)),i=a(135),m=a(37),u=a.n(m),p=a(64),d=a(60),E=a(129),f=function(){var e=localStorage.getItem("permissions");return!!e&&("user"===e||"admin"===e)},g=function(){var e=Object(p.a)(u.a.mark((function e(t,a){var n,r,c,o,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.length>0&&a.length>0){e.next=2;break}throw new Error("Email or password was not provided");case 2:return(n=new FormData).append("username",t),n.append("password",a),r=new Request("/api/token",{method:"POST",body:n}),e.next=8,fetch(r);case 8:if(500!==(c=e.sent).status){e.next=11;break}throw new Error("Internal server error");case 11:return e.next=13,c.json();case 13:if(o=e.sent,!(c.status>400&&c.status<500)){e.next=18;break}if(!o.detail){e.next=17;break}throw o.detail;case 17:throw o;case 18:return"access_token"in o&&(s=Object(E.a)(o.access_token),localStorage.setItem("token",o.access_token),localStorage.setItem("permissions",s.permissions)),e.abrupt("return",o);case 20:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),b=function(){var e=Object(p.a)(u.a.mark((function e(t,a,n){var r,c,o,s,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.length>0){e.next=2;break}throw new Error("Email was not provided");case 2:if(a.length>0){e.next=4;break}throw new Error("Password was not provided");case 4:if(n.length>0){e.next=6;break}throw new Error("Password confirmation was not provided");case 6:return(r=new FormData).append("username",t),r.append("password",a),c=new Request("/api/signup",{method:"POST",body:r}),e.next=12,fetch(c);case 12:if(500!==(o=e.sent).status){e.next=15;break}throw new Error("Internal server error");case 15:return e.next=17,o.json();case 17:if(s=e.sent,!(o.status>400&&o.status<500)){e.next=22;break}if(!s.detail){e.next=21;break}throw s.detail;case 21:throw s;case 22:return"access_token"in s&&(l=Object(E.a)(s.access_token),localStorage.setItem("token",s.access_token),localStorage.setItem("permissions",l.permissions)),e.abrupt("return",s);case 24:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),h=Object(i.a)((function(e){return{link:{color:"#61dafb"}}})),v=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=(t[0],t[1],Object(n.useState)("")),c=Object(d.a)(a,2),o=(c[0],c[1],h());return r.a.createElement(r.a.Fragment,null,f()?r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{className:o.link,href:"/logout"},"Logout"),r.a.createElement("a",{className:o.link,href:"/admin"},"Dashboard")):r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{className:o.link,href:"/login"},"Login"),r.a.createElement("a",{className:o.link,href:"/signup"},"Sign Up")))},w=a(550),x=a(605),k=a(552),j=a(610),O=a(642),S=a(556),I=a(606),y=a(609),T=a(636),P=Object(i.a)((function(e){return{margin:{margin:e.spacing(2)},padding:{padding:e.spacing(1)},button:{textTransform:"none"},marginTop:{marginTop:10}}})),N=function(){var e=P(),t=Object(l.g)(),a=Object(n.useState)(""),c=Object(d.a)(a,2),o=c[0],s=c[1],i=Object(n.useState)(""),m=Object(d.a)(i,2),E=m[0],b=m[1],h=Object(n.useState)(""),v=Object(d.a)(h,2),N=v[0],_=v[1],C=function(){var e=Object(p.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(""),e.prev=1,e.next=4,g(o,E);case 4:e.sent&&t.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),e.t0 instanceof Error?_(e.t0.message):_(String(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return f()?r.a.createElement(l.a,{to:"/"}):r.a.createElement(w.a,{className:e.padding},r.a.createElement("div",{className:e.margin},r.a.createElement(x.a,{container:!0,spacing:8,alignItems:"flex-end"},r.a.createElement(x.a,{item:!0},r.a.createElement(I.a,null)),r.a.createElement(x.a,{item:!0,md:!0,sm:!0,xs:!0},r.a.createElement(k.a,{id:"email",label:"Email",type:"email",value:o,onChange:function(e){return s(e.currentTarget.value)},fullWidth:!0,autoFocus:!0,required:!0}))),r.a.createElement(x.a,{container:!0,spacing:8,alignItems:"flex-end"},r.a.createElement(x.a,{item:!0},r.a.createElement(y.a,null)),r.a.createElement(x.a,{item:!0,md:!0,sm:!0,xs:!0},r.a.createElement(k.a,{id:"password",label:"Password",type:"password",value:E,onChange:function(e){return b(e.currentTarget.value)},fullWidth:!0,required:!0}))),r.a.createElement("br",null),r.a.createElement(x.a,{container:!0,alignItems:"center"},N&&r.a.createElement(x.a,{item:!0},r.a.createElement(T.a,{severity:"error"},N))),r.a.createElement(x.a,{container:!0,alignItems:"center",justify:"space-between"},r.a.createElement(x.a,{item:!0},r.a.createElement(j.a,{control:r.a.createElement(O.a,{color:"primary"}),label:"Remember me"})),r.a.createElement(x.a,{item:!0},r.a.createElement(S.a,{disableFocusRipple:!0,disableRipple:!0,className:e.button,variant:"text",color:"primary"},"Forgot password ?"))),r.a.createElement(x.a,{container:!0,justify:"center",className:e.marginTop}," ",r.a.createElement(S.a,{variant:"outlined",color:"primary",className:e.button,onClick:function(){return t.push("/signup")}},"Sign Up")," ","\xa0",r.a.createElement(S.a,{variant:"outlined",color:"primary",className:e.button,onClick:C},"Login"))))},_=Object(i.a)((function(e){return{margin:{margin:e.spacing(2)},padding:{padding:e.spacing(1)},button:{textTransform:"none"},marginTop:{marginTop:10}}})),C=function(){var e=_(),t=Object(l.g)(),a=Object(n.useState)(""),c=Object(d.a)(a,2),o=c[0],s=c[1],i=Object(n.useState)(""),m=Object(d.a)(i,2),E=m[0],g=m[1],h=Object(n.useState)(""),v=Object(d.a)(h,2),j=v[0],O=v[1],P=Object(n.useState)(""),N=Object(d.a)(P,2),C=N[0],F=N[1],q=function(){var e=Object(p.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E===j){e.next=4;break}F("Passwords do not match"),e.next=15;break;case 4:return F(""),e.prev=5,e.next=8,b(o,E,j);case 8:e.sent&&t.push("/"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),e.t0 instanceof Error?F(e.t0.message):F(String(e.t0));case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t){return e.apply(this,arguments)}}();return f()?r.a.createElement(l.a,{to:"/"}):r.a.createElement(w.a,{className:e.padding},r.a.createElement("div",{className:e.margin},r.a.createElement(x.a,{container:!0,spacing:8,alignItems:"flex-end"},r.a.createElement(x.a,{item:!0},r.a.createElement(I.a,null)),r.a.createElement(x.a,{item:!0,md:!0,sm:!0,xs:!0},r.a.createElement(k.a,{id:"email",label:"Email",type:"email",value:o,onChange:function(e){return s(e.currentTarget.value)},fullWidth:!0,autoFocus:!0,required:!0}))),r.a.createElement(x.a,{container:!0,spacing:8,alignItems:"flex-end"},r.a.createElement(x.a,{item:!0},r.a.createElement(y.a,null)),r.a.createElement(x.a,{item:!0,md:!0,sm:!0,xs:!0},r.a.createElement(k.a,{id:"password",label:"Password",type:"password",value:E,onChange:function(e){return g(e.currentTarget.value)},fullWidth:!0,required:!0}))),r.a.createElement(x.a,{container:!0,spacing:8,alignItems:"flex-end"},r.a.createElement(x.a,{item:!0},r.a.createElement(y.a,null)),r.a.createElement(x.a,{item:!0,md:!0,sm:!0,xs:!0},r.a.createElement(k.a,{id:"passwordConfirmation",label:"Confirm password",type:"password",value:j,onChange:function(e){return O(e.currentTarget.value)},fullWidth:!0,required:!0}))),r.a.createElement("br",null),r.a.createElement(x.a,{container:!0,alignItems:"center"},C&&r.a.createElement(x.a,{item:!0},r.a.createElement(T.a,{severity:"error"},C))),r.a.createElement(x.a,{container:!0,justify:"center",className:e.marginTop},r.a.createElement(S.a,{variant:"outlined",color:"primary",className:e.button,onClick:q},"Sign Up"))))},F=function(){return r.a.createElement("h1",null,"This component is protected")},q=a(345),R=["component"],A=function(e){var t=e.component,a=Object(q.a)(e,R);return r.a.createElement(l.b,Object.assign({},a,{render:function(e){return!0===f()?r.a.createElement(t,e):r.a.createElement(l.a,{to:"/login"})}}))},D=a(105),W=a(631),J=a(630),L=a(331),U={login:function(e){var t=e.username,a=e.password,n=new FormData;n.append("username",t),n.append("password",a);var r=new Request("/api/token",{method:"POST",body:n});return fetch(r).then((function(e){if(e.status<200||e.status>=300)throw new Error(e.statusText);return e.json()})).then((function(e){var t=e.access_token,a=Object(E.a)(t);if("restricted"===a.permissions)throw new Error("Forbidden");localStorage.setItem("token",t),localStorage.setItem("permissions",a.permissions)}))},logout:function(){return localStorage.removeItem("token"),localStorage.removeItem("permissions"),Promise.resolve()},checkError:function(e){var t=e.status;return 401===t||403===t?(localStorage.removeItem("token"),Promise.reject()):Promise.resolve()},checkAuth:function(){return localStorage.getItem("token")?Promise.resolve():Promise.reject()},getPermissions:function(){var e=localStorage.getItem("permissions");return e?Promise.resolve(e):Promise.reject()}},z=a(635),B=a(634),H=a(316),V=a(623),G=a(641),K=a(643),M=[{id:"admin",text:"Admin"},{id:"normal",text:"Normal"},{id:"restricted",text:"Restricted"}],Q=function(e){return r.a.createElement(z.a,e,r.a.createElement(B.a,null,r.a.createElement(H.a,{disabled:!0,source:"id"}),r.a.createElement(H.a,{source:"username"}),r.a.createElement(H.a,{source:"email"}),r.a.createElement(H.a,{source:"first_name"}),r.a.createElement(H.a,{source:"last_name"}),r.a.createElement(V.a,{source:"password"}),r.a.createElement(G.a,{source:"role",choices:M,translateChoice:!1,optionValue:"id",optionText:"text"}),r.a.createElement(K.a,{source:"is_active"})))},X=a(624),Y=a(632),Z=a(633),$=a(627),ee=a(645),te=a(628),ae=a(629),ne=a(637),re=function(e){var t=Object(X.a)().permissions;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y.a,e,r.a.createElement(Z.a,{rowClick:"edit"},r.a.createElement($.a,{source:"id"}),r.a.createElement($.a,{source:"username"}),r.a.createElement(ee.a,{source:"email"}),r.a.createElement($.a,{source:"first_name"}),r.a.createElement($.a,{source:"last_name"}),r.a.createElement(te.a,{source:"is_active"}),r.a.createElement($.a,{source:"role"}),"admin"===t&&r.a.createElement(ae.a,null),"admin"===t&&r.a.createElement(ne.a,{basePath:"/users"}))))},ce=a(639),oe=function(e){return r.a.createElement(ce.a,e,r.a.createElement(B.a,null,r.a.createElement(H.a,{source:"username"}),r.a.createElement(H.a,{source:"email"}),r.a.createElement(H.a,{source:"first_name"}),r.a.createElement(H.a,{source:"last_name"}),r.a.createElement(V.a,{source:"password"}),r.a.createElement(G.a,{source:"role",choices:M,translateChoice:!1,optionValue:"id",optionText:"text"}),r.a.createElement(K.a,{source:"is_active"})))},se=Object(L.a)("api/v1",(function(e,t){t||(t={}),t.headers||(t.headers=new Headers({Accept:"application/json"}));var a=localStorage.getItem("token");return t.headers.set("Authorization","Bearer ".concat(a)),D.a.fetchJson(e,t)})),le=function(){return r.a.createElement(W.a,{dataProvider:se,authProvider:U},(function(e){return["admin"===e?r.a.createElement(J.a,{name:"users",list:re,edit:Q,create:oe}):r.a.createElement(J.a,{name:"users",list:re})]}))},ie=Object(i.a)((function(e){return{app:{textAlign:"center"},header:{backgroundColor:"#282c34",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"calc(10px + 2vmin)",color:"white"}}})),me=function(){var e=ie(),t=Object(l.g)();return r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/admin"},r.a.createElement(le,null)),r.a.createElement("div",{className:e.app},r.a.createElement("header",{className:e.header},r.a.createElement(l.b,{path:"/login",component:N}),r.a.createElement(l.b,{path:"/signup",component:C}),r.a.createElement(l.b,{path:"/logout",render:function(){return localStorage.removeItem("token"),localStorage.removeItem("permissions"),t.push("/"),null}}),r.a.createElement(A,{path:"/protected",component:F}),r.a.createElement(l.b,{exact:!0,path:"/",component:v}))))},ue=function(){return r.a.createElement(me,null)};o.a.render(r.a.createElement(s.a,null,r.a.createElement(ue,null)),document.getElementById("root"))}},[[382,1,2]]]);
//# sourceMappingURL=main.39e8e42d.chunk.js.map
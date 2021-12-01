(this["webpackJsonpreact-hooks"]=this["webpackJsonpreact-hooks"]||[]).push([[0],{39:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var n,r,a=c(1),s=c.n(a),i=c(32),l=c.n(i),o=(c(39),c(10)),j=c(2),b=Object(a.createContext)(),d=c(0),u=function(){var e=Object(a.useContext)(b),t=e.alert,c=e.hide;return t?Object(d.jsxs)("div",{className:"alert alert-".concat(t.type||"secondary"," alert-dismissible"),role:"alert",children:[t.text,Object(d.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close",onClick:c})]}):null},O=function(){return Object(d.jsx)("nav",{className:"navbar navbar-dark bg-primary navbar-expand-lg",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("div",{className:"navbar-brand",children:"Github \u041f\u043e\u0438\u0441\u043a"}),Object(d.jsxs)("ul",{className:"navbar-nav",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.c,{exact:!0,to:"/",className:"nav-link",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.c,{to:"/about",className:"nav-link",children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"})})]})]})})},h=c(13),p="SHOW_ALERT",x="HIDE_ALERT",m="CLEAR_USERS",v="GET_REPOS",f="GET_USER",g="SEARCH_USERS",N="SET_LOADING",_=c(7),y=(n={},Object(_.a)(n,p,(function(e,t){return t.payload})),Object(_.a)(n,x,(function(){return null})),Object(_.a)(n,"DEFAULT",(function(e){return e})),n),E=function(e,t){return(y[t.type]||y.DEFAULT)(e,t)},S=function(e){var t=e.children,c=Object(a.useReducer)(E,null),n=Object(h.a)(c,2),r=n[0],s=n[1];return Object(d.jsx)(b.Provider,{value:{hide:function(){return s({type:x})},show:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"secondary";s({type:p,payload:{type:t,text:e}})},alert:r},children:t})},T=c(12),C=c.n(T),R=c(18),k=Object(a.createContext)(),A=c(19),L=c.n(A),w=c(9),D=(r={},Object(_.a)(r,g,(function(e,t){var c=t.payload;return Object(w.a)(Object(w.a)({},e),{},{users:c,loading:!1})})),Object(_.a)(r,v,(function(e,t){var c=t.payload;return Object(w.a)(Object(w.a)({},e),{},{repos:c,loading:!1})})),Object(_.a)(r,f,(function(e,t){var c=t.payload;return Object(w.a)(Object(w.a)({},e),{},{user:c,loading:!1})})),Object(_.a)(r,N,(function(e){return Object(w.a)(Object(w.a)({},e),{},{loading:!0})})),Object(_.a)(r,m,(function(e){return Object(w.a)(Object(w.a)({},e),{},{users:[]})})),Object(_.a)(r,"DEFAULT",(function(e){return e})),r),F=function(e,t){return(D[t.type]||D.DEFAULT)(e,t)},P=Object({NODE_ENV:"production",PUBLIC_URL:"/react-hooks",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CLIENT_ID,U=Object({NODE_ENV:"production",PUBLIC_URL:"/react-hooks",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CLIENT_SECRET,I=function(e){return"".concat(e,"client_id=").concat(P,"&client_secret=").concat(U)},H=function(e){var t=e.children,c=Object(a.useReducer)(F,{user:{},users:[],loading:!1,repos:[]}),n=Object(h.a)(c,2),r=n[0],s=n[1],i=function(){var e=Object(R.a)(C.a.mark((function e(t){var c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(),e.next=3,L.a.get(I("https://api.github.com/search/users?q=".concat(t,"&")));case 3:c=e.sent,s({type:g,payload:c.data.items});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(R.a)(C.a.mark((function e(t){var c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(),e.next=3,L.a.get(I("https://api.github.com/users/".concat(t,"?")));case 3:c=e.sent,s({type:f,payload:c.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(R.a)(C.a.mark((function e(t){var c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(),e.next=3,L.a.get(I("https://api.github.com/users/".concat(t,"/repos?per_page=5&")));case 3:c=e.sent,s({type:v,payload:c.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){return s({type:N})},b=r.user,u=r.users,O=r.repos,p=r.loading;return Object(d.jsx)(k.Provider,{value:{search:i,setLoading:j,getUser:l,getRepos:o,clearUsers:function(){return s({type:m})},user:b,users:u,repos:O,loading:p},children:t})},W=function(){return Object(d.jsx)("div",{className:"p-5 mb-4 bg-light rounded-3",children:Object(d.jsxs)("div",{className:"container-fluid py-5",children:[Object(d.jsx)("h1",{className:"display-5 fw-bold",children:"\u0419\u043e\u0443! \u0422\u0443\u0442 \u0438\u0437\u0443\u0447\u0430\u044e\u0442 \u0445\u0443\u043a\u0438"}),Object(d.jsx)("p",{className:"col-md-8 fs-4",children:"\u0425\u0443\u043a\u0438 \u2014 \u043d\u043e\u0432\u043e\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 React 16.8, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 React \u0431\u0435\u0437 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043a\u043b\u0430\u0441\u0441\u043e\u0432."}),Object(d.jsx)("button",{className:"btn btn-primary btn-lg",type:"button",children:"\u0420\u0435\u0441\u043f\u0435\u043a\u0442"})]})})},K=c(15),B=function(e){var t=e.user;return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{src:t.avatar_url,alt:t.login,className:"card-img-top"}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:t.login}),Object(d.jsx)(o.b,{to:"/profile/"+t.login,className:"btn btn-primary",children:" \u041e\u0442\u043a\u0440\u044b\u0442\u044c"})]})]})},G=function(){var e=Object(a.useState)(""),t=Object(h.a)(e,2),c=t[0],n=t[1],r=Object(K.useContext)(b),s=Object(K.useContext)(k);return Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f...",value:c,onChange:function(e){return n(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(s.clearUsers(),c.trim()?(r.hide(),s.search(c.trim())):r.show("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f!"))}})})},J=function(){var e=Object(K.useContext)(k),t=e.loading,c=e.users;return Object(d.jsxs)(a.Fragment,{children:[Object(d.jsx)(G,{}),Object(d.jsx)("div",{className:"row",children:t?Object(d.jsx)("p",{className:"text-center",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}):c.map((function(e){return Object(d.jsx)("div",{className:"col-sm-3 mb-4",children:Object(d.jsx)(B,{user:e})},e.id)}))})]})},V=function(e){var t=e.repos;return Object(d.jsx)(s.a.Fragment,{children:t.map((function(e){return Object(d.jsx)("div",{className:"card mb-3",children:Object(d.jsx)("div",{className:"card-body",children:Object(d.jsx)("h5",{children:Object(d.jsx)("a",{href:e.html_url,rel:"noopener noreferrer",target:"_blank",children:e.name})})})},e.id)}))})},q=function(e){var t=e.match,c=Object(a.useContext)(k),n=c.getUser,r=c.getRepos,s=c.loading,i=c.user,l=c.repos,j=t.params.name;if(Object(a.useEffect)((function(){n(j),r(j)}),[]),s)return Object(d.jsx)("p",{className:"text-center",children:" \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."});var b=i.name,u=i.company,O=i.avatar_url,h=i.location,p=i.bio,x=i.blog,m=i.login,v=i.html_url,f=i.followers,g=i.following,N=i.public_repos,_=i.public_gists;return Object(d.jsxs)(a.Fragment,{children:[Object(d.jsx)(o.b,{to:"/",className:"btn btn-link",children:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"}),Object(d.jsx)("div",{className:"card mb-4",children:Object(d.jsx)("div",{className:"card-body",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col-sm-3 text-center",children:[Object(d.jsx)("img",{src:O,alt:b,style:{width:"250px"}}),Object(d.jsx)("h1",{children:b}),h&&Object(d.jsxs)("p",{children:["\u041c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435: ",h]})]}),Object(d.jsxs)("div",{className:"col",children:[p&&Object(d.jsxs)(a.Fragment,{children:[Object(d.jsx)("h3",{children:"BIO"}),Object(d.jsx)("p",{children:p})]}),Object(d.jsx)("a",{href:v,target:"_blank",rel:"noopener noreferrer",className:"btn btn-dark",children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c"}),Object(d.jsxs)("ul",{children:[m&&Object(d.jsxs)("li",{children:[Object(d.jsx)("strong",{children:"User"}),m]}),u&&Object(d.jsxs)("li",{children:[Object(d.jsx)("strong",{children:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f: "}),u]}),x&&Object(d.jsxs)("li",{children:[Object(d.jsx)("strong",{children:"Web: "}),x]})]}),Object(d.jsxs)("div",{className:"badge bg-primary",children:["\u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0438: ",f]}),Object(d.jsxs)("div",{className:"badge bg-success",children:["\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d: ",g]}),Object(d.jsxs)("div",{className:"badge bg-info",children:["\u0420\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438: ",N]}),Object(d.jsxs)("div",{className:"badge bg-dark",children:["Gists: ",_]})]})]})})}),Object(d.jsx)(V,{repos:l})]})};var M=function(){return Object(d.jsx)(H,{children:Object(d.jsx)(S,{children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(O,{}),Object(d.jsxs)("div",{className:"container pt-5",children:[Object(d.jsx)(u,{alert:{text:"test alert"}}),Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{path:"/",exact:!0,component:J}),Object(d.jsx)(j.a,{path:"/about",component:W}),Object(d.jsx)(j.a,{path:"/profile/:name",component:q})]})]})]})})})},z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,66)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};l.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(M,{})}),document.getElementById("root")),z()}},[[65,1,2]]]);
//# sourceMappingURL=main.a45ae1a4.chunk.js.map
(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{21:function(t,n,e){},41:function(t,n,e){"use strict";e.r(n);var o=e(2),c=e.n(o),r=e(14),i=e.n(r),s=e(16),u=(e(21),e(1)),a=function(t){var n=t.blog;n.title,n.author},b=e(15),l=e.n(b),d=function(){return console.log("Axios requesting blogs . . ."),l.a.get("/api/blogs").then((function(t){return t.data}))};var f=function(){var t=Object(o.useState)([]),n=Object(s.a)(t,2),e=n[0],c=n[1];return Object(o.useEffect)((function(){d().then((function(t){console.log(t),c(t)}))}),[]),Object(u.jsxs)("div",{id:"wrapper",children:[Object(u.jsx)("h1",{children:"Blogs"}),e.map((function(t){return Object(u.jsx)(a,{blog:t},t.id)}))]})};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.482d5a2d.chunk.js.map
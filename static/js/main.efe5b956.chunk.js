(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(2),s=a(7),c=a(6),l=a(1),o=(a(14),a(9)),u=a.n(o),d=a(0),m=function(e){var t=e.user;return t&&Object(d.jsx)("a",{className:"userInfo",href:"mailto:".concat(t.email),children:t.name})},j=function(e){var t=e.todo;return Object(d.jsxs)("article",{"data-id":t.id,className:u()("TodoInfo",{"TodoInfo--completed":t.completed}),children:[Object(d.jsx)("h2",{className:"TodoInfo__title",children:t.title}),Object(d.jsx)(m,{user:t.user})]})},b=function(e){var t=e.todos;return Object(d.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(d.jsx)(j,{todo:e},e.id)}))})},h=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],O=function(e){return h.find((function(t){return t.id===e}))||null},f=function(e){return Math.max.apply(Math,Object(c.a)(e.map((function(e){return e.id}))))+1},p=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"delectus aut autem",completed:!0,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:O(e.userId)})})),x=function(){var e=Object(l.useState)(p),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(l.useState)(""),s=Object(r.a)(i,2),o=s[0],u=s[1],m=Object(l.useState)(null),j=Object(r.a)(m,2),x=j[0],v=j[1],y=Object(l.useState)(!1),S=Object(r.a)(y,2),N=S[0],I=S[1],g=Object(l.useState)(!1),C=Object(r.a)(g,2),T=C[0],_=C[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Add todo form"}),Object(d.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),"number"===typeof x&&o){var t={id:f(a),userId:x,title:o,completed:!1,user:O(x)};n([].concat(Object(c.a)(a),[t])),u(""),v(null)}else I(!0)},action:"/api/users",method:"POST",children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{htmlFor:"titleTodo",children:"Title: "}),Object(d.jsx)("input",{type:"text","data-cy":"titleInput",id:"titleTodo",placeholder:"Enter a title",value:o,onChange:function(e){u(e.target.value),I(!1)}}),N&&Object(d.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{htmlFor:"user",children:"User: "}),Object(d.jsxs)("select",{"data-cy":"userSelect",id:"user",value:x||0,onChange:function(e){v(+e.target.value),_(!1)},children:[Object(d.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),h.map((function(e){var t=e.id,a=e.name;return Object(d.jsx)("option",{value:t,children:a},t)}))]}),T&&Object(d.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(d.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(d.jsx)(b,{todos:a})]})};i.a.render(Object(d.jsx)(x,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.efe5b956.chunk.js.map
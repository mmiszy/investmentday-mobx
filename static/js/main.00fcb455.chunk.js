(this["webpackJsonp2019-11-11"]=this["webpackJsonp2019-11-11"]||[]).push([[0],{12:function(e,n,t){e.exports=t(23)},17:function(e,n,t){},18:function(e,n,t){},23:function(e,n,t){"use strict";t.r(n);var o=t(2),r=t.n(o),a=t(4),i=t.n(a),c=(t(17),t(18),t(3)),u=t(10),l=t.n(u),d=Object(c.a)((function(e){var n=e.todo,t=e.store;return r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){return t.removeTodo(n.id)}},"X"),r.a.createElement("input",{type:"checkbox",checked:n.done,onChange:function(){return n.toggle()}}),r.a.createElement("input",{value:n.name,onChange:function(e){return n.setName(e.currentTarget.value)}}),r.a.createElement(m,{user:n.assignedTo,store:t,onchange:function(e){return n.assignTo(e)}}))})),s=Object(c.a)((function(e){var n=e.store;return r.a.createElement("div",null,"Done ",n.completedCount," out of ",n.count,".")})),m=Object(c.a)((function(e){var n,t=e.user,o=e.store,a=e.onchange,i=r.a.useCallback((function(e){var n=e.currentTarget.value,t=o.users.find((function(e){return e.id===n}));a(t)}),[o,a]);return r.a.createElement("select",{value:null!==(n=null===t||void 0===t?void 0:t.id)&&void 0!==n?n:"",onChange:i},r.a.createElement("option",null,"-none-"),o.users.map((function(e){return r.a.createElement("option",{value:e.id,key:e.id},e.name)})))})),v=Object(c.a)((function(e){var n=e.timeTraveller;return r.a.createElement("div",null,r.a.createElement("button",{disabled:!n.canUndo,onClick:function(){return n.undo()}},"Undo"),r.a.createElement("button",{disabled:!n.canRedo,onClick:function(){return n.redo()}},"Redo"))})),f=Object(c.a)((function(e){var n=e.store,t=e.timeTraveller;return r.a.createElement("div",null,r.a.createElement(v,{timeTraveller:t}),r.a.createElement("button",{onClick:function(){return n.addTodo(l.a.v4(),"New todo")}},"Add Todo"),r.a.createElement("ul",null,n.todos.map((function(e){return r.a.createElement(d,{key:e.id,todo:e,store:n})}))),r.a.createElement(s,{store:n}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=t(1),h=t(0),E=t(11),b="@@maxwellhealth/todos";Object(h.k)({enforceActions:"always"});var p=g.v.model("Todo",{id:g.v.identifier,name:g.v.string,done:g.v.boolean,assignedTo:g.v.maybe(g.v.reference(g.v.late((function(){return T}))))}).actions((function(e){return{setName:function(n){e.name=n},toggle:function(){e.done=!e.done},assignTo:function(n){e.assignedTo=n}}})),T=g.v.model("User",{id:g.v.identifier,name:g.v.string});var k=g.v.model("RootStore",{users:g.v.array(T),todos:g.v.array(p)}).actions((function(e){return{addTodo:function(n,t){e.todos.push(p.create({id:n,name:t,done:!1}))},removeTodo:function(n){e.todos.replace(e.todos.filter((function(e){return e.id!==n})))}}})).views((function(e){return{get count(){return e.todos.length},get completedCount(){return e.todos.filter((function(e){return e.done})).length}}})).create(function(){try{var e,n=null!==(e=localStorage.getItem(b))&&void 0!==e?e:"";return JSON.parse(n)}catch(t){}return{todos:[],users:[{id:"1",name:"Micha\u0142"},{id:"2",name:"Krzysztof"},{id:"3",name:"Andrew"},{id:"4",name:"Mike"},{id:"5",name:"Erik"}]}}()),w=E.a.create({},{targetStore:k});Object(h.i)((function(){var e=JSON.stringify(Object(g.m)(k));localStorage.setItem(b,e)})),i.a.render(r.a.createElement(f,{store:k,timeTraveller:w}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[12,1,2]]]);
//# sourceMappingURL=main.00fcb455.chunk.js.map
(function(t){function e(e){for(var i,s,r=e[0],c=e[1],u=e[2],d=0,h=[];d<r.length;d++)s=r[d],o[s]&&h.push(o[s][0]),o[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(h.length)h.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(i=!1)}i&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},o={app:0},a=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/v2do/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"6a72":function(t,e,n){"use strict";var i=n("c9e1"),o=n.n(i);o.a},"8c1f":function(t,e,n){"use strict";var i=n("ecc3"),o=n.n(i);o.a},c9e1:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("5c07"),n("53da"),n("2556"),n("d0f8");var i=n("6e6d"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("TodoList")],1)},a=[],s=n("962b"),r=n("7d94"),c=n("cc8c"),u=n("a459"),l=n("3a61"),d=n("8907"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui container"},[n("h1",{staticClass:"ui header"},[t._v("The To-do List")]),n("TodoHeader",{attrs:{showfinished:t.showfinished,length:t.todos.length,finlength:t.todos.filter(function(t){return t.finished}).length},on:{"toggle-show-finished":t.toggleFinished,"archive-finished":t.archiveFinished}}),n("div",{attrs:{id:"todoList"}},t._l(t.showList(),function(e,i){return n("div",{key:i},[n("TodoItem",{attrs:{index:t.todos.indexOf(e),item:e},on:{"toggle-item":t.toggleItem}})],1)}),0),n("TodoAdd",{attrs:{id:"todoAdd"},on:{"add-todo":t.addTodo}})],1)},f=[],v=n("78e7"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui grid"},[n("div",{staticClass:"thirteen wide column"},[n("div",{staticClass:"ui input",attrs:{id:"divInput"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text",id:"inpText",placeholder:"New todo..."},domProps:{value:t.text},on:{keyup:t.checkSubmission,input:function(e){e.target.composing||(t.text=e.target.value)}}})])]),n("div",{staticClass:"three wide column"},[n("input",{staticClass:"ui button primary",attrs:{type:"button",id:"inpAdd",value:"Add"},on:{click:t.addItem}})])])},b=[],g=(n("b06f"),n("debc")),m=n.n(g),O=(n("0bb1"),n("40f8"),n("612f"),n("34c6")),j=(n("ea65"),function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number(new Date),i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];Object(s["a"])(this,t),this.text="",this.tags=[],this.finished=!1,this.text=e,this.createts=n,this.tags=i});function y(t){var e=t.split(" ").filter(function(t){return"#"===t[0]}).map(function(t){return t.slice(1)}),n=t.split(" ").filter(function(t){return"#"!==t[0]}).join(" ");return{tags:e,text:n}}function w(t){window.localStorage.setItem("todos",JSON.stringify(t))}function x(){var t=window.localStorage.getItem("todos");try{var e=JSON.parse(t);return _(e)?e:[]}catch(n){return[]}return[]}function _(t){if(Object(O["a"])(t)!==Object(O["a"])([]))return!1;var e=!0,n=!1,i=void 0;try{for(var o,a=t[Symbol.iterator]();!(e=(o=a.next()).done);e=!0){var s=o.value;if(void 0===s.tags||void 0==s.createts||void 0===s.text||void 0===s.finished)return!1}}catch(r){n=!0,i=r}finally{try{e||null==a.return||a.return()}finally{if(n)throw i}}return!0}var k=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(r["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.text="",t}return Object(u["a"])(e,t),Object(v["a"])(e,[{key:"addItem",value:function(){var t=y(this.text);this.$emit("add-todo",new j(t.text,Number(new Date),t.tags)),this.text=""}},{key:"checkSubmission",value:function(t){"Enter"===t.key&&""!==this.text.trim()&&(this.addItem(),m()("#inpAdd").removeClass("primary").addClass("green"),setTimeout(function(){m()("#inpAdd").removeClass("green").addClass("primary")},200),t.preventDefault())}}]),e}(d["d"]);k=l["a"]([d["a"]],k);var T=k,C=T,I=(n("6a72"),n("17cc")),S=Object(I["a"])(C,p,b,!1,null,"7448eaca",null),F=S.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"ui header"},[t._v("\n  To-do list\n  "),n("div",{staticClass:"ui horizontal label"},[t._v(t._s(t.finlength)+" / "+t._s(t.length))]),n("div",{directives:[{name:"show",rawName:"v-show",value:!1===t.showfinished,expression:"showfinished === false"}],staticClass:"ui button small",on:{click:t.toggleFinished}},[t._v("Show finished")]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showfinished,expression:"showfinished"}],staticClass:"ui button small",on:{click:t.toggleFinished}},[t._v("Hide finished")]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.finlength>10,expression:"finlength > 10"}],staticClass:"ui button small",on:{click:t.cleanFinshed}},[t._v("Archive finished")])])},N=[],$=function(t){function e(){return Object(s["a"])(this,e),Object(r["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(v["a"])(e,[{key:"toggleFinished",value:function(){}},{key:"cleanFinshed",value:function(){}}]),e}(d["d"]);l["a"]([Object(d["c"])()],$.prototype,"showfinished",void 0),l["a"]([Object(d["c"])()],$.prototype,"finlength",void 0),l["a"]([Object(d["c"])()],$.prototype,"length",void 0),l["a"]([Object(d["b"])("toggle-show-finished")],$.prototype,"toggleFinished",null),l["a"]([Object(d["b"])("archive-finished")],$.prototype,"cleanFinshed",null),$=l["a"]([d["a"]],$);var A=$,E=A,P=Object(I["a"])(E,L,N,!1,null,"9638af3c",null),D=P.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{todoDone:t.item.finished}},[n("span",{staticClass:"todoTitle"},[t._v(t._s(t.item.text))]),n("br"),t._v("\n  #"+t._s(t.index)+" -\n  "+t._s(new Date(t.item.createts).toLocaleString())+" -\n  "),t.item.tags.length?n("span",[n("TagList",{attrs:{tags:t.item.tags}}),t._v(" -\n  ")],1):t._e(),n("TaskBtn",{attrs:{finished:t.item.finished,index:t.index},on:{"toggle-item":t.toggleItem}})],1)},M=[],H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",t._l(t.tags,function(e){return n("span",{key:e},[t._v("#"+t._s(e)+" ")])}),0)},B=[],z=function(t){function e(){return Object(s["a"])(this,e),Object(r["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(d["d"]);l["a"]([Object(d["c"])()],z.prototype,"tags",void 0),z=l["a"]([d["a"]],z);var R=z,q=R,G=Object(I["a"])(q,H,B,!1,null,"0f1f8d7d",null),K=G.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.finished?t.finished?n("button",{staticClass:"ui button mini onfinish green",on:{click:t.toggleItem}},[t._v("Reopen")]):t._e():n("button",{staticClass:"ui button mini onfinish red",on:{click:t.toggleItem}},[t._v("Close")])},U=[],V=function(t){function e(){return Object(s["a"])(this,e),Object(r["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(v["a"])(e,[{key:"toggleItem",value:function(){return this.index}}]),e}(d["d"]);l["a"]([Object(d["c"])()],V.prototype,"index",void 0),l["a"]([Object(d["c"])()],V.prototype,"finished",void 0),l["a"]([Object(d["b"])("toggle-item")],V.prototype,"toggleItem",null),V=l["a"]([d["a"]],V);var W=V,X=W,Y=Object(I["a"])(X,Q,U,!1,null,"5d1e8885",null),Z=Y.exports,tt=function(t){function e(){return Object(s["a"])(this,e),Object(r["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(v["a"])(e,[{key:"toggleItem",value:function(t){return t}}]),e}(d["d"]);l["a"]([Object(d["c"])()],tt.prototype,"index",void 0),l["a"]([Object(d["c"])()],tt.prototype,"item",void 0),l["a"]([Object(d["b"])("toggle-item")],tt.prototype,"toggleItem",null),tt=l["a"]([Object(d["a"])({components:{TaskBtn:Z,TagList:K}})],tt);var et=tt,nt=et,it=Object(I["a"])(nt,J,M,!1,null,"10cba261",null),ot=it.exports,at=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(r["a"])(this,Object(c["a"])(e).call(this)),t.todos=[],t.showfinished=!1,t.todos=x(),t}return Object(u["a"])(e,t),Object(v["a"])(e,[{key:"toggleItem",value:function(t){this.todos[t].finished=!this.todos[t].finished}},{key:"toggleFinished",value:function(){this.showfinished=!this.showfinished}},{key:"archiveFinished",value:function(){this.todos=this.todos.filter(function(t){return!t.finished})}},{key:"addTodo",value:function(t){this.todos.push(t)}},{key:"showList",value:function(){var t=this;return this.todos.filter(function(e){return t.showfinished||!e.finished})}},{key:"onTodoChange",value:function(t,e){w(t)}}]),e}(d["d"]);l["a"]([Object(d["e"])("todos",{deep:!0})],at.prototype,"onTodoChange",null),at=l["a"]([Object(d["a"])({components:{TodoItem:ot,TodoAdd:F,TodoHeader:D}})],at);var st=at,rt=st,ct=(n("8c1f"),Object(I["a"])(rt,h,f,!1,null,"3f970f77",null)),ut=ct.exports,lt=function(t){function e(){return Object(s["a"])(this,e),Object(r["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(d["d"]);lt=l["a"]([Object(d["a"])({components:{TodoList:ut}})],lt);var dt=lt,ht=dt,ft=Object(I["a"])(ht,o,a,!1,null,null,null),vt=ft.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(vt)}}).$mount("#app")},ecc3:function(t,e,n){}});
//# sourceMappingURL=app.de06878d.js.map
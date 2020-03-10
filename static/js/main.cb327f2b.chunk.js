(this["webpackJsonptrello-clone"]=this["webpackJsonptrello-clone"]||[]).push([[0],{29:function(n,e,t){n.exports=t(40)},40:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(13),o=t.n(i),c=t(12),l=t(8),u=t(2),d=t(16),f=t(10),s=t(3);function b(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    align-items: center;\n    border-radius: 20px;\n    background-color: ",";\n"]);return b=function(){return n},n}function p(){var n=Object(u.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n"]);return p=function(){return n},n}function m(){var n=Object(u.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    margin: 10px;\n    padding: 20px;\n    border-radius: 20px;\n    width: 150px;\n    height: 150px;\n    background-color: white;\n"]);return m=function(){return n},n}function g(){var n=Object(u.a)(["\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    flex-direction: column;\n    align-items: center;\n    padding: 40px;\n"]);return g=function(){return n},n}function x(){var n=Object(u.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    margin: 10px;\n    padding: 20px;\n    border-radius: 20px;\n    width: 150px;\n    height: 150px;\n    background-color: white;\n"]);return x=function(){return n},n}function v(){var n=Object(u.a)(["\n    color: ",";\n    text-decoration: none;\n    &:hover{\n        color: ",";\n    }\n    margin: auto;\n    font-weight: bold;\n    word-wrap: break-word;\n    word-break: break-word;\n    text-align: center;\n"]);return v=function(){return n},n}function h(){var n=Object(u.a)(["\n    text-align: center;\n    font-weight: bold;\n    font-size: 16px;\n    width: 100%;\n    margin: auto 0;\n"]);return h=function(){return n},n}function y(){var n=Object(u.a)(["\n    color: ",";\n"]);return y=function(){return n},n}function E(){var n=Object(u.a)(["\n    border: none;\n    padding: 5px;\n    background: none;\n    font-family: 'Lora', 'Noto Serif KR';\n    &::placeholder{\n        color: ",";\n    }\n"]);return E=function(){return n},n}function j(){var n=Object(u.a)(["\n    border: none;\n    background: none;\n    &:hover{\n        color: ",";\n    }\n    cursor: pointer;\n    color: ",";    \n"]);return j=function(){return n},n}var O="fas fa-plus",w="fas fa-trash",K=["#E9ECE5","#C0DFD9","#B3C2BF","#3B3A36"];function k(n){var e=n.boardList,t=n.functionSet,i=Object(r.useState)(""),o=Object(l.a)(i,2),c=o[0],u=o[1];return a.a.createElement(B,null,a.a.createElement(P,null,a.a.createElement(S,null,"Boards"),a.a.createElement(F,null,e.map((function(n){return a.a.createElement(z,{key:n.boardKey},a.a.createElement(D,{to:{pathname:"/board/".concat(n.boardName,"-board"),state:{key:n.boardKey,name:n.boardName}}},n.boardName),a.a.createElement(L,{onClick:function(){return e=n.boardKey,void t.remove(e,"---","---");var e}},a.a.createElement("i",{className:w})))})),a.a.createElement(I,null,a.a.createElement(C,{type:"text",value:c,onChange:function(n){u(n.target.value)},placeholder:"Add a board.."}),a.a.createElement(L,{onClick:function(n){n.preventDefault(),function(n){t.create("---","---",n)}(c),u("")}},a.a.createElement("i",{className:O}))))))}var L=s.b.button(j(),K[2],K[3]),N=s.b.input(E(),K[2]),S=s.b.h2(y(),K[3]),C=Object(s.b)(N)(h()),D=Object(s.b)(d.b)(v(),K[3],K[2]),I=s.b.div(x()),B=s.b.div(g()),z=s.b.div(m()),F=s.b.div(p()),P=s.b.div(b(),K[1]);function R(){var n=Object(u.a)(["\n    &:hover{\n        color: ",";\n    }\n"]);return R=function(){return n},n}function A(){var n=Object(u.a)(["\n    width: 100%;\n    padding: 5px;\n    text-align: left;\n    font-size: 14px;\n    text-decoration: ",";\n"]);return A=function(){return n},n}function J(n){var e=n.boardKey,t=n.listKey,r=n.cardKey,i=n.content,o=n.done,c=n.functionSet,l=o?"fas fa-times":"fas fa-check";return a.a.createElement(a.a.Fragment,null,a.a.createElement(H,{done:o},i),a.a.createElement(q,{done:o,onClick:function(){return c.toggleDone(e,t,r)}},a.a.createElement("i",{className:l})))}var H=s.b.div(A(),(function(n){return n.done?"line-through":"none"})),q=Object(s.b)(L)(R(),K[0]),G=t(11);function M(){var n=Object(u.a)(["\n    &:hover{\n        color: ",";\n    }\n"]);return M=function(){return n},n}function Q(){var n=Object(u.a)(["\n    width: 100%;\n"]);return Q=function(){return n},n}function T(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    border-radius: 5px;\n    width: 100%;\n    margin: 5px 0 10px 0;\n    background-color: ",";\n    padding: 10px;\n    color: white;\n"]);return T=function(){return n},n}function U(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    justify-content: flex-start;\n    align-items: center;\n    max-height: 48vh;\n    overflow-y: auto;\n    min-height: 1px;\n"]);return U=function(){return n},n}function V(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    margin: 5px 0;\n    border-radius: 5px;\n    background-color: ",";\n    padding: 10px;\n    color: ",";\n    flex-grow: 1;\n"]);return V=function(){return n},n}function W(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    word-wrap: break-word;\n    word-break: break-word;\n"]);return W=function(){return n},n}function X(n){var e=n.boardKey,t=n.listKey,i=n.listName,o=n.cardList,c=n.functionSet,u=n.provided,d=Object(r.useState)(""),f=Object(l.a)(d,2),s=f[0],b=f[1];return a.a.createElement(Y,null,a.a.createElement("h4",u.dragHandleProps,i),a.a.createElement(G.c,{droppableId:t,type:"card"},(function(n){return a.a.createElement($,Object.assign({ref:n.innerRef},n.droppableProps),o.map((function(n,r){return a.a.createElement(G.b,{key:n.cardKey,draggableId:n.cardKey,index:r},(function(r,i){return a.a.createElement(Z,Object.assign({key:n.cardKey},r.draggableProps,r.dragHandleProps,{ref:r.innerRef,isDragging:i.isDragging}),a.a.createElement(J,{boardKey:e,listKey:t,cardKey:n.cardKey,content:n.content,done:n.done,functionSet:c}),a.a.createElement(en,{onClick:function(){return r=n.cardKey,void c.remove(e,t,r);var r}},a.a.createElement("i",{className:w})))}))})),n.placeholder)})),a.a.createElement(_,null,a.a.createElement(nn,{type:"text",value:s,onChange:function(n){b(n.target.value)},placeholder:"Add a card.."}),a.a.createElement(L,{onClick:function(n){n.preventDefault(),function(n){c.create(e,t,n)}(s),b("")}},a.a.createElement("i",{className:O}))))}var Y=s.b.div(W()),Z=s.b.div(V(),K[2],K[3]),$=s.b.div(U()),_=s.b.div(T(),K[0]),nn=Object(s.b)(N)(Q()),en=Object(s.b)(L)(M(),K[0]);function tn(){var n=Object(u.a)(["\n    display: flex;\n    align-items: flex-start;\n"]);return tn=function(){return n},n}function rn(){var n=Object(u.a)(["\n    margin-bottom: 5px;\n    text-align: center;\n    font-weight: bold;\n"]);return rn=function(){return n},n}function an(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    margin: 0 10px;\n    border-radius: 10px;\n    padding: 10px;\n    background-color: white;\n    min-width: 230px;\n    max-width: 230px;\n"]);return an=function(){return n},n}function on(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 0 20px 0 10px;\n    border-radius: 10px;\n    background-color: white;\n    padding: 10px 10px 5px 10px;\n    width: 230px;\n"]);return on=function(){return n},n}function cn(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: flex-start;\n    padding: 0 10px;\n    overflow-x: auto;\n    flex-grow: 1;\n"]);return cn=function(){return n},n}function ln(n){var e=n.boardKey,t=(n.boardName,n.listList),i=n.functionSet,o=Object(r.useState)(""),c=Object(l.a)(o,2),u=c[0],d=c[1];return a.a.createElement(un,null,a.a.createElement(G.a,{onDragEnd:function(n){var t=n.destination,r=n.source,a=n.type;t&&(t.droppableId===r.droppableId&&t.index===r.index||("card"!==a?"list"!==a||i.switchIndex(e,"---","---",r.index,t.index):i.switchIndex(e,r.droppableId,t.droppableId,r.index,t.index)))}},a.a.createElement(G.c,{droppableId:"lists",direction:"horizontal",type:"list"},(function(n){return a.a.createElement(bn,Object.assign({},n.droppableProps,{ref:n.innerRef}),t.map((function(n,t){return a.a.createElement(G.b,{key:n.listKey,draggableId:n.listKey,index:t},(function(t){return a.a.createElement(fn,Object.assign({},t.draggableProps,{ref:t.innerRef}),a.a.createElement(X,{boardKey:e,listKey:n.listKey,listName:n.listName,cardList:n.cardList,functionSet:i,provided:t}),a.a.createElement(L,{onClick:function(){return t=n.listKey,void i.remove(e,t,"---");var t}},a.a.createElement("i",{className:w})))}))})),n.placeholder)}))),a.a.createElement("div",null,a.a.createElement(dn,null,a.a.createElement(sn,{type:"text",value:u,onChange:function(n){d(n.target.value)},placeholder:"Add a list.."}),a.a.createElement(L,{onClick:function(n){n.preventDefault(),function(n){i.create(e,"---",n)}(u),d("")}},a.a.createElement("i",{className:O})))))}var un=s.b.div(cn()),dn=s.b.div(on()),fn=s.b.div(an()),sn=Object(s.b)(N)(rn()),bn=s.b.div(tn());function pn(){var n=Object(u.a)(["\n    display: flex;\n    margin-bottom: 20px;\n    justify-content: center;\n    align-items: center;\n    padding: 10px 20px;\n    background-color: ",";\n"]);return pn=function(){return n},n}function mn(){var n=Object(u.a)(["\n    font-size: 30px;\n    color: ",";\n    &:hover{\n        color: ",";\n    }\n"]);return mn=function(){return n},n}function gn(){var n=Object(u.a)(["\n    font-size: 30px;\n    margin: auto;\n    padding: 10px 20px;\n    color: ",";\n"]);return gn=function(){return n},n}function xn(){var n=Object(u.a)(["\n    display: flex;\n    flex-flow: column;\n    text-align: center;\n    min-height: 100vh;\n"]);return xn=function(){return n},n}var vn=["#E9ECE5","#C0DFD9","#B3C2BF","#3B3A36"];function hn(n){var e=n.location,t=n.history,r=n.boardList,i=n.functionSet;if(void 0===e.state)return t.push("/"),null;var o=r.find((function(n){return n.boardKey===e.state.key}));return a.a.createElement(yn,null,a.a.createElement(On,null,a.a.createElement(En,null,e.state.name),a.a.createElement(jn,{to:{pathname:"/"}},a.a.createElement("i",{className:"fas fa-home"}))),a.a.createElement(ln,{boardKey:e.state.key,boardName:e.state.name,listList:o.listList,functionSet:i}))}var yn=s.b.div(xn()),En=s.b.h1(gn(),vn[3]),jn=Object(s.b)(d.b)(mn(),vn[3],vn[2]),On=s.b.header(pn(),vn[1]);function wn(){var n=Object(u.a)(["\n    *{\n      box-sizing: border-box;\n    }\n    body{\n        padding: 0;\n        margin: 0;\n        font-family: 'Lora', 'Noto Serif KR';\n        background-color: ",";\n    }\n    ::-webkit-scrollbar{\n      background: none;\n      height: 14px;\n    }\n    ::-webkit-scrollbar-track{\n      box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);\n      border-radius: 10px;\n    }\n    ::-webkit-scrollbar-thumb{\n      background: rgba(0, 0, 0, 0.15);\n      border-radius: 10px;\n    }\n"]);return wn=function(){return n},n}var Kn=Object(s.a)(wn(),"#E9ECE5");var kn=function(){var n=a.a.useState(JSON.parse(localStorage.getItem("localBoardList"))||[]),e=Object(l.a)(n,2),t=e[0],r=e[1];a.a.useEffect((function(){localStorage.setItem("localBoardList",JSON.stringify(t))}),[t]);var i={create:function(n,e,a){if("---"===n){if(!t.filter((function(n){return n.boardName===a})).length&&a.length){var i=t.concat([{boardKey:a.concat(Date.now()),boardName:a,listList:[]}]);r(i)}}else if("---"===e){var o=Object(c.a)(t);o.forEach((function(e){e.boardKey===n&&(!e.listList.filter((function(n){return n.listName===a})).length&&a.length&&e.listList.push({listKey:a.concat(Date.now()),listName:a,cardList:[]}))})),r(o)}else{var l=Object(c.a)(t);l.forEach((function(t){t.boardKey===n&&t.listList.forEach((function(n){n.listKey===e&&a.length&&n.cardList.push({cardKey:a.concat(Date.now()),content:a,done:!1})}))})),r(l)}},remove:function(n,e,a){if("---"!==n)if("---"===e){var i=t.filter((function(e){return e.boardKey!==n}));r(i)}else if("---"===a){var o=Object(c.a)(t);o.forEach((function(t){t.boardKey===n&&(t.listList=t.listList.filter((function(n){return n.listKey!==e})))})),r(o),r(o)}else{var l=Object(c.a)(t);l.forEach((function(t){t.boardKey===n&&t.listList.forEach((function(n){n.listKey===e&&(n.cardList=n.cardList.filter((function(n){return n.cardKey!==a})))}))})),r(l)}},toggleDone:function(n,e,a){var i=Object(c.a)(t);i.forEach((function(t){t.boardKey===n&&t.listList.forEach((function(n){n.listKey===e&&n.cardList.forEach((function(n){n.cardKey===a&&(n.done=!n.done)}))}))})),r(i)},switchIndex:function(n,e,a,i,o){var l=Object(c.a)(t),u=null,d=null;"---"!==e?(l.forEach((function(t){t.boardKey===n&&t.listList.forEach((function(n){n.listKey===e&&(u=n.cardList[i],n.cardList.splice(i,1),e===a?n.cardList.splice(o,0,u):t.listList.forEach((function(n){n.listKey===a&&n.cardList.splice(o,0,u)})))}))})),r(l)):(l.forEach((function(e){e.boardKey===n&&(d=e.listList[i],e.listList.splice(i,1),e.listList.splice(o,0,d))})),r(l))}};return a.a.createElement(a.a.Fragment,null,a.a.createElement(Kn,null),a.a.createElement(d.a,null,a.a.createElement(f.a,{path:"/",exact:!0,render:function(n){return a.a.createElement(k,Object.assign({},n,{boardList:t,functionSet:i}))}}),a.a.createElement(f.a,{path:"/board/:boardName",render:function(n){return a.a.createElement(hn,Object.assign({},n,{boardList:t,functionSet:i}))}})))};o.a.render(a.a.createElement(kn,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.cb327f2b.chunk.js.map
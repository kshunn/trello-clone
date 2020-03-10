(this["webpackJsonptrello-clone"]=this["webpackJsonptrello-clone"]||[]).push([[0],{30:function(n,e,t){n.exports=t(42)},42:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(14),o=t.n(i),c=t(8),l=t(9),u=t(2),d=t(16),f=t(11),s=t(3);function b(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    align-items: center;\n    border-radius: 20px;\n    background-color: ",";\n    margin: 10px 0;\n"]);return b=function(){return n},n}function m(){var n=Object(u.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n"]);return m=function(){return n},n}function p(){var n=Object(u.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 10px;\n    padding: 20px;\n    border-radius: 20px;\n    width: 200px;\n    height: 80px;\n    background-color: white;\n"]);return p=function(){return n},n}function g(){var n=Object(u.a)(["\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    flex-direction: column;\n    align-items: center;\n    padding: 40px;\n"]);return g=function(){return n},n}function x(){var n=Object(u.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    margin: 10px;\n    padding: 20px;\n    border-radius: 20px;\n    width: 200px;\n    height: 80px;\n    background-color: white;\n"]);return x=function(){return n},n}function v(){var n=Object(u.a)(["\n    color: ",";\n    text-decoration: none;\n    &:hover{\n        color: ",";\n    }\n    margin: auto;\n    font-weight: bold;\n    word-wrap: break-word;\n    word-break: break-word;\n    text-align: center;\n"]);return v=function(){return n},n}function y(){var n=Object(u.a)(["\n    text-align: center;\n    font-weight: bold;\n    font-size: 16px;\n    width: 100%;\n    margin: auto 0;\n"]);return y=function(){return n},n}function h(){var n=Object(u.a)(["\n    color: ",";\n"]);return h=function(){return n},n}function E(){var n=Object(u.a)(["\n    border: none;\n    padding: 5px;\n    background: none;\n    font-family: 'Lora', 'Noto Serif KR';\n    &::placeholder{\n        color: ",";\n    }\n"]);return E=function(){return n},n}function j(){var n=Object(u.a)(["\n    border: none;\n    background: none;\n    &:hover{\n        color: ",";\n    }\n    cursor: pointer;\n    color: ",";    \n"]);return j=function(){return n},n}var O="fas fa-plus",K="fas fa-trash",w="fas fa-thumbtack",k=["#E9ECE5","#C0DFD9","#B3C2BF","#3B3A36"];function L(n){var e=n.boardList,t=n.functionSet,i=Object(r.useState)(""),o=Object(l.a)(i,2),c=o[0],u=o[1],d=function(n){t.remove(n,"---","---")};return a.a.createElement(B,null,a.a.createElement(A,null,a.a.createElement(C,null,"Pinned Boards"),a.a.createElement(z,null,e.map((function(n){return n.pin?a.a.createElement(R,{key:n.boardKey},a.a.createElement(D,{to:{pathname:"/board/".concat(n.boardName,"-board"),state:{key:n.boardKey,name:n.boardName}}},n.boardName),a.a.createElement(N,{onClick:function(){return t.togglePin(n.boardKey)}},a.a.createElement("i",{className:w})),a.a.createElement(N,{onClick:function(){return d(n.boardKey)}},a.a.createElement("i",{className:K}))):null})))),a.a.createElement(A,null,a.a.createElement(C,null,"Boards"),a.a.createElement(z,null,e.map((function(n){return a.a.createElement(R,{key:n.boardKey},a.a.createElement(D,{to:{pathname:"/board/".concat(n.boardName,"-board"),state:{key:n.boardKey,name:n.boardName}}},n.boardName),a.a.createElement(N,{onClick:function(){return t.togglePin(n.boardKey)}},a.a.createElement("i",{className:w})),a.a.createElement(N,{onClick:function(){return d(n.boardKey)}},a.a.createElement("i",{className:K})))})),a.a.createElement(P,null,a.a.createElement(I,{type:"text",value:c,onChange:function(n){u(n.target.value)},placeholder:"Add a board.."}),a.a.createElement(N,{onClick:function(n){n.preventDefault(),function(n){t.create("---","---",n)}(c),u("")}},a.a.createElement("i",{className:O}))))))}var N=s.b.button(j(),k[2],k[3]),S=s.b.input(E(),k[2]),C=s.b.h2(h(),k[3]),I=Object(s.b)(S)(y()),D=Object(s.b)(d.b)(v(),k[3],k[2]),P=s.b.div(x()),B=s.b.div(g()),R=s.b.div(p()),z=s.b.div(m()),A=s.b.div(b(),k[1]);function F(){var n=Object(u.a)(["\n    &:hover{\n        color: ",";\n    }\n"]);return F=function(){return n},n}function J(){var n=Object(u.a)(["\n    width: 100%;\n    padding: 5px;\n    text-align: left;\n    font-size: 14px;\n    text-decoration: ",";\n"]);return J=function(){return n},n}function H(n){var e=n.boardKey,t=n.listKey,r=n.cardKey,i=n.content,o=n.done,c=n.functionSet,l=o?"fas fa-times":"fas fa-check";return a.a.createElement(a.a.Fragment,null,a.a.createElement(M,{done:o},i),a.a.createElement(T,{done:o,onClick:function(){return c.toggleDone(e,t,r)}},a.a.createElement("i",{className:l})))}var M=s.b.div(J(),(function(n){return n.done?"line-through":"none"})),T=Object(s.b)(N)(F(),k[0]),q=t(13);function G(){var n=Object(u.a)(["\n    &:hover{\n        color: ",";\n    }\n"]);return G=function(){return n},n}function Q(){var n=Object(u.a)(["\n    width: 100%;\n"]);return Q=function(){return n},n}function U(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    border-radius: 5px;\n    width: 100%;\n    margin: 5px 0 10px 0;\n    background-color: ",";\n    padding: 10px;\n    color: white;\n"]);return U=function(){return n},n}function V(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    justify-content: flex-start;\n    align-items: center;\n    max-height: 48vh;\n    overflow-y: auto;\n    min-height: 1px;\n"]);return V=function(){return n},n}function W(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    margin: 5px 0;\n    border-radius: 5px;\n    background-color: ",";\n    padding: 10px;\n    color: ",";\n    flex-grow: 1;\n"]);return W=function(){return n},n}function X(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    word-wrap: break-word;\n    word-break: break-word;\n"]);return X=function(){return n},n}function Y(n){var e=n.boardKey,t=n.listKey,i=n.listName,o=n.cardList,c=n.functionSet,u=n.provided,d=Object(r.useState)(""),f=Object(l.a)(d,2),s=f[0],b=f[1];return a.a.createElement(Z,null,a.a.createElement("h4",u.dragHandleProps,i),a.a.createElement(q.c,{droppableId:t,type:"card"},(function(n){return a.a.createElement(_,Object.assign({ref:n.innerRef},n.droppableProps),o.map((function(n,r){return a.a.createElement(q.b,{key:n.cardKey,draggableId:n.cardKey,index:r},(function(r,i){return a.a.createElement($,Object.assign({key:n.cardKey},r.draggableProps,r.dragHandleProps,{ref:r.innerRef,isDragging:i.isDragging}),a.a.createElement(H,{boardKey:e,listKey:t,cardKey:n.cardKey,content:n.content,done:n.done,functionSet:c}),a.a.createElement(tn,{onClick:function(){return r=n.cardKey,void c.remove(e,t,r);var r}},a.a.createElement("i",{className:K})))}))})),n.placeholder)})),a.a.createElement(nn,null,a.a.createElement(en,{type:"text",value:s,onChange:function(n){b(n.target.value)},placeholder:"Add a card.."}),a.a.createElement(N,{onClick:function(n){n.preventDefault(),function(n){c.create(e,t,n)}(s),b("")}},a.a.createElement("i",{className:O}))))}var Z=s.b.div(X()),$=s.b.div(W(),k[2],k[3]),_=s.b.div(V()),nn=s.b.div(U(),k[0]),en=Object(s.b)(S)(Q()),tn=Object(s.b)(N)(G(),k[0]);function rn(){var n=Object(u.a)(["\n    display: flex;\n    align-items: flex-start;\n"]);return rn=function(){return n},n}function an(){var n=Object(u.a)(["\n    margin-bottom: 5px;\n    text-align: center;\n    font-weight: bold;\n"]);return an=function(){return n},n}function on(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    margin: 0 10px;\n    border-radius: 10px;\n    padding: 10px;\n    background-color: white;\n    min-width: 230px;\n    max-width: 230px;\n"]);return on=function(){return n},n}function cn(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 0 20px 0 10px;\n    border-radius: 10px;\n    background-color: white;\n    padding: 10px 10px 5px 10px;\n    width: 230px;\n"]);return cn=function(){return n},n}function ln(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: flex-start;\n    padding: 0 10px;\n    overflow-x: auto;\n    flex-grow: 1;\n"]);return ln=function(){return n},n}function un(n){var e=n.boardKey,t=(n.boardName,n.listList),i=n.functionSet,o=Object(r.useState)(""),c=Object(l.a)(o,2),u=c[0],d=c[1];return a.a.createElement(dn,null,a.a.createElement(q.a,{onDragEnd:function(n){var t=n.destination,r=n.source,a=n.type;t&&(t.droppableId===r.droppableId&&t.index===r.index||("card"!==a?"list"!==a||i.switchIndex(e,"---","---",r.index,t.index):i.switchIndex(e,r.droppableId,t.droppableId,r.index,t.index)))}},a.a.createElement(q.c,{droppableId:"lists",direction:"horizontal",type:"list"},(function(n){return a.a.createElement(mn,Object.assign({},n.droppableProps,{ref:n.innerRef}),t.map((function(n,t){return a.a.createElement(q.b,{key:n.listKey,draggableId:n.listKey,index:t},(function(t){return a.a.createElement(sn,Object.assign({},t.draggableProps,{ref:t.innerRef}),a.a.createElement(Y,{boardKey:e,listKey:n.listKey,listName:n.listName,cardList:n.cardList,functionSet:i,provided:t}),a.a.createElement(N,{onClick:function(){return t=n.listKey,void i.remove(e,t,"---");var t}},a.a.createElement("i",{className:K})))}))})),n.placeholder)}))),a.a.createElement("div",null,a.a.createElement(fn,null,a.a.createElement(bn,{type:"text",value:u,onChange:function(n){d(n.target.value)},placeholder:"Add a list.."}),a.a.createElement(N,{onClick:function(n){n.preventDefault(),function(n){i.create(e,"---",n)}(u),d("")}},a.a.createElement("i",{className:O})))))}var dn=s.b.div(ln()),fn=s.b.div(cn()),sn=s.b.div(on()),bn=Object(s.b)(S)(an()),mn=s.b.div(rn()),pn=t(28),gn=t.n(pn);function xn(){var n=Object(u.a)(["\n    display: flex;\n    margin-bottom: 20px;\n    justify-content: center;\n    align-items: center;\n    padding: 10px 20px;\n    background-color: ",";\n"]);return xn=function(){return n},n}function vn(){var n=Object(u.a)(["\n    font-size: 30px;\n    color: ",";\n    &:hover{\n        color: ",";\n    }\n"]);return vn=function(){return n},n}function yn(){var n=Object(u.a)(["\n    padding: 10px;\n    outline-color: ",";    \n"]);return yn=function(){return n},n}function hn(){var n=Object(u.a)(["\n    font-size: 30px;\n    margin: auto;\n    padding: 10px 20px;\n    color: ",";\n    cursor: pointer;\n"]);return hn=function(){return n},n}function En(){var n=Object(u.a)(["\n    display: flex;\n    flex-flow: column;\n    text-align: center;\n    min-height: 100vh;\n"]);return En=function(){return n},n}function jn(n){var e=n.location,t=n.history,i=n.boardList,o=n.functionSet,c=e.state?i.find((function(n){return n.boardKey===e.state.key})):null,u=Object(r.useState)(c?c.boardName:null),d=Object(l.a)(u,2),f=d[0],s=d[1],b=Object(r.useRef)();if(void 0===e.state)return t.push("/"),null;return a.a.createElement(On,null,a.a.createElement(Ln,null,a.a.createElement(Kn,null,a.a.createElement(wn,{innerRef:b,html:f,disabled:!1,onChange:function(n){s(n.target.value)},onBlur:function(){var n=b.current.innerHTML;n?o.edit(e.state.key,"---","---",n):s(c.boardName)},spellCheck:"false"})),a.a.createElement(kn,{to:{pathname:"/"}},a.a.createElement("i",{className:"fas fa-home"}))),a.a.createElement(un,{boardKey:e.state.key,boardName:e.state.name,listList:c.listList,functionSet:o}))}var On=s.b.div(En()),Kn=s.b.h1(hn(),k[3]),wn=Object(s.b)(gn.a)(yn(),k[3]),kn=Object(s.b)(d.b)(vn(),k[3],k[2]),Ln=s.b.header(xn(),k[1]);function Nn(){var n=Object(u.a)(["\n    *{\n      box-sizing: border-box;\n    }\n    body{\n        padding: 0;\n        margin: 0;\n        font-family: 'Lora', 'Noto Serif KR';\n        background-color: ",";\n    }\n    ::-webkit-scrollbar{\n      background: none;\n      height: 14px;\n    }\n    ::-webkit-scrollbar-track{\n      box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);\n      border-radius: 10px;\n    }\n    ::-webkit-scrollbar-thumb{\n      background: rgba(0, 0, 0, 0.15);\n      border-radius: 10px;\n    }\n"]);return Nn=function(){return n},n}var Sn=Object(s.a)(Nn(),"#E9ECE5");var Cn=function(){var n=a.a.useState(JSON.parse(localStorage.getItem("localBoardList"))||[]),e=Object(l.a)(n,2),t=e[0],r=e[1];a.a.useEffect((function(){localStorage.setItem("localBoardList",JSON.stringify(t))}),[t]);var i={create:function(n,e,a){if("---"===n){if(!t.filter((function(n){return n.boardName===a})).length&&a.length){var i=t.concat([{boardKey:a.concat(Date.now()),boardName:a,listList:[],pin:!1}]);r(i)}}else if("---"===e){var o=Object(c.a)(t);o.forEach((function(e){e.boardKey===n&&(!e.listList.filter((function(n){return n.listName===a})).length&&a.length&&e.listList.push({listKey:a.concat(Date.now()),listName:a,cardList:[]}))})),r(o)}else{var l=Object(c.a)(t);l.forEach((function(t){t.boardKey===n&&t.listList.forEach((function(n){n.listKey===e&&a.length&&n.cardList.push({cardKey:a.concat(Date.now()),content:a,done:!1})}))})),r(l)}},remove:function(n,e,a){if("---"!==n)if("---"===e){var i=t.filter((function(e){return e.boardKey!==n}));r(i)}else if("---"===a){var o=Object(c.a)(t);o.forEach((function(t){t.boardKey===n&&(t.listList=t.listList.filter((function(n){return n.listKey!==e})))})),r(o),r(o)}else{var l=Object(c.a)(t);l.forEach((function(t){t.boardKey===n&&t.listList.forEach((function(n){n.listKey===e&&(n.cardList=n.cardList.filter((function(n){return n.cardKey!==a})))}))})),r(l)}},edit:function(n,e,a,i){if("---"!==n)if("---"===e){var o=Object(c.a)(t);o.forEach((function(e){e.boardKey===n&&(e.boardName=i)})),r(o)}else if("---"===a){var l=Object(c.a)(t);l.forEach((function(t){t.boardKey===n&&t.listList.forEach((function(n){n.listKey===e&&(n.listName=i)}))})),r(l)}else{var u=Object(c.a)(t);u.forEach((function(t){t.boardKey===n&&t.listList.forEach((function(n){n.listKey===e&&n.cardList.forEach((function(n){n.cardKey===a&&(n.context=i)}))}))})),r(u)}},togglePin:function(n){var e=Object(c.a)(t);e.forEach((function(e){e.boardKey===n&&(e.pin=!e.pin)})),r(e)},toggleDone:function(n,e,a){var i=Object(c.a)(t);i.forEach((function(t){t.boardKey===n&&t.listList.forEach((function(n){n.listKey===e&&n.cardList.forEach((function(n){n.cardKey===a&&(n.done=!n.done)}))}))})),r(i)},switchIndex:function(n,e,a,i,o){var l=Object(c.a)(t),u=null,d=null;"---"!==e?(l.forEach((function(t){t.boardKey===n&&t.listList.forEach((function(n){n.listKey===e&&(u=n.cardList[i],n.cardList.splice(i,1),e===a?n.cardList.splice(o,0,u):t.listList.forEach((function(n){n.listKey===a&&n.cardList.splice(o,0,u)})))}))})),r(l)):(l.forEach((function(e){e.boardKey===n&&(d=e.listList[i],e.listList.splice(i,1),e.listList.splice(o,0,d))})),r(l))}};return a.a.createElement(a.a.Fragment,null,a.a.createElement(Sn,null),a.a.createElement(d.a,null,a.a.createElement(f.a,{path:"/",exact:!0,render:function(n){return a.a.createElement(L,Object.assign({},n,{boardList:t,functionSet:i}))}}),a.a.createElement(f.a,{path:"/board/:boardName",render:function(n){return a.a.createElement(jn,Object.assign({},n,{boardList:t,functionSet:i}))}})))};o.a.render(a.a.createElement(Cn,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.8af18820.chunk.js.map
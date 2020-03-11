(this["webpackJsonptrello-clone"]=this["webpackJsonptrello-clone"]||[]).push([[0],{30:function(n,e,t){n.exports=t(42)},42:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(14),i=t.n(o),c=t(9),l=t(7),u=t(2),d=t(16),f=t(11),s=t(3);function b(){var n=Object(u.a)(["\n    font-weight: bold;\n    text-decoration: underline;\n"]);return b=function(){return n},n}function m(){var n=Object(u.a)(["\n    position: fixed;\n    padding: 30px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -90%);\n    background: ",";\n    display: block;\n    border-radius: 10px;\n    font-size: 16px;\n    opacity: 0.8;\n"]);return m=function(){return n},n}function p(n){return n.show?a.a.createElement(g,{showHelp:!0},a.a.createElement(x,null,"Home Page"),"Click on a board name to enter the board page",a.a.createElement("br",null),"Pin important boards for quick access",a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(x,null,"Board Page"),"Click on the board or list name to modify it",a.a.createElement("br",null),"Drag and drop lists and cards to change their positions",a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(x,null,"Card Page"),"Coming soon",a.a.createElement("br",null)):null}var g=s.b.div(m(),"#B3C2BF"),x=s.b.div(b());function h(){var n=Object(u.a)(["\n    padding-top: 20px;\n    font-size: 14px;\n    color: ",";\n    cursor: pointer;\n    font-weight: bold;\n    text-decoration: underline;\n"]);return h=function(){return n},n}function v(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    align-items: center;\n    border-radius: 20px;\n    background-color: ",";\n    margin: 10px 0;\n"]);return v=function(){return n},n}function y(){var n=Object(u.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n"]);return y=function(){return n},n}function E(){var n=Object(u.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 10px;\n    padding: 20px;\n    border-radius: 20px;\n    width: 200px;\n    height: 80px;\n    background-color: white;\n"]);return E=function(){return n},n}function j(){var n=Object(u.a)(["\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    flex-direction: column;\n    align-items: center;\n    padding: 40px;\n"]);return j=function(){return n},n}function O(){var n=Object(u.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    margin: 10px;\n    padding: 20px;\n    border-radius: 20px;\n    width: 200px;\n    height: 80px;\n    background-color: white;\n"]);return O=function(){return n},n}function w(){var n=Object(u.a)(["\n    color: ",";\n    text-decoration: none;\n    &:hover{\n        color: ",";\n    }\n    margin: auto;\n    font-weight: bold;\n    word-wrap: break-word;\n    word-break: break-word;\n    text-align: center;\n"]);return w=function(){return n},n}function K(){var n=Object(u.a)(["\n    text-align: center;\n    font-weight: bold;\n    font-size: 16px;\n    width: 100%;\n    margin: auto 0;\n"]);return K=function(){return n},n}function k(){var n=Object(u.a)(["\n    color: ",";\n"]);return k=function(){return n},n}function L(){var n=Object(u.a)(["\n    border: none;\n    padding: 5px;\n    background: none;\n    font-family: 'Lora', 'Noto Serif KR';\n    &::placeholder{\n        color: ",";\n    }\n    outline-color: ",";\n"]);return L=function(){return n},n}function N(){var n=Object(u.a)(["\n    border: none;\n    background: none;\n    &:hover{\n        color: ",";\n    }\n    cursor: pointer;\n    color: ",";  \n    outline: none;  \n"]);return N=function(){return n},n}var C="fas fa-plus",S="fas fa-trash",D="far fa-star",P=["#E9ECE5","#C0DFD9","#B3C2BF","#3B3A36"];function I(n){var e=n.boardList,t=n.functionSet,o=Object(r.useState)(""),i=Object(l.a)(o,2),c=i[0],u=i[1],d=Object(r.useState)(!1),f=Object(l.a)(d,2),s=f[0],b=f[1],m=function(n){window.confirm("Do you really want to remove the board?")&&t.remove(n,"---","---")};return a.a.createElement(J,null,a.a.createElement(V,null,a.a.createElement(z,null,"Pinned Boards"),a.a.createElement(M,null,e.map((function(n){return n.pin?a.a.createElement(T,{key:n.boardKey},a.a.createElement(F,{to:{pathname:"/board/".concat(n.boardName,"-board"),state:{key:n.boardKey,name:n.boardName}}},n.boardName),a.a.createElement(B,{onClick:function(){return t.togglePin(n.boardKey)}},a.a.createElement("i",{className:n.pin?"fas fa-star":D})),a.a.createElement(B,{onClick:function(){return m(n.boardKey)}},a.a.createElement("i",{className:S}))):null})))),a.a.createElement(V,null,a.a.createElement(z,null,"Boards"),a.a.createElement(M,null,e.map((function(n){return a.a.createElement(T,{key:n.boardKey},a.a.createElement(F,{to:{pathname:"/board/".concat(n.boardName,"-board"),state:{key:n.boardKey,name:n.boardName}}},n.boardName),a.a.createElement(B,{onClick:function(){return t.togglePin(n.boardKey)}},a.a.createElement("i",{className:n.pin?"fas fa-star":D})),a.a.createElement(B,{onClick:function(){return m(n.boardKey)}},a.a.createElement("i",{className:S})))})),a.a.createElement(A,null,a.a.createElement(H,{type:"text",value:c,onChange:function(n){u(n.target.value)},placeholder:"Add a board.."}),a.a.createElement(B,{onClick:function(n){n.preventDefault(),function(n){t.create("---","---",n)}(c),u("")}},a.a.createElement("i",{className:C}))))),a.a.createElement(q,{onClick:function(){return b(!s)}},s?"Hide":"Tips"),a.a.createElement(p,{show:s}))}var B=s.b.button(N(),P[2],P[3]),R=s.b.input(L(),P[2],P[3]),z=s.b.h2(k(),P[3]),H=Object(s.b)(R)(K()),F=Object(s.b)(d.b)(w(),P[3],P[2]),A=s.b.div(O()),J=s.b.div(j()),T=s.b.div(E()),M=s.b.div(y()),V=s.b.div(v(),P[1]),q=s.b.a(h(),P[3]);function G(){var n=Object(u.a)(["\n    &:hover{\n        color: ",";\n    }\n"]);return G=function(){return n},n}function Q(){var n=Object(u.a)(["\n    width: 100%;\n    padding: 5px;\n    text-align: left;\n    font-size: 14px;\n    text-decoration: ",";\n"]);return Q=function(){return n},n}function U(n){var e=n.boardKey,t=n.listKey,r=n.cardKey,o=n.cardName,i=n.done,c=n.functionSet,l=i?"fas fa-times":"fas fa-check";return a.a.createElement(a.a.Fragment,null,a.a.createElement(W,{done:i},o),a.a.createElement(X,{done:i,onClick:function(){return c.toggleDone(e,t,r)}},a.a.createElement("i",{className:l})))}var W=s.b.div(Q(),(function(n){return n.done?"line-through":"none"})),X=Object(s.b)(B)(G(),P[0]),Y=t(13),Z=t(17),$=t.n(Z);function _(){var n=Object(u.a)(["\n    cursor: pointer;\n"]);return _=function(){return n},n}function nn(){var n=Object(u.a)(["\n    padding: 10px;  \n    outline-color: ",";  \n"]);return nn=function(){return n},n}function en(){var n=Object(u.a)(["\n    &:hover{\n        color: ",";\n    }\n"]);return en=function(){return n},n}function tn(){var n=Object(u.a)(["\n    width: 100%;\n"]);return tn=function(){return n},n}function rn(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    border-radius: 5px;\n    width: 100%;\n    margin: 5px 0 10px 0;\n    background-color: ",";\n    padding: 10px;\n    color: white;\n"]);return rn=function(){return n},n}function an(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    justify-content: flex-start;\n    align-items: center;\n    max-height: 48vh;\n    overflow-y: auto;\n    min-height: 1px;\n"]);return an=function(){return n},n}function on(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    margin: 5px 0;\n    border-radius: 5px;\n    background-color: ",";\n    padding: 10px;\n    color: ",";\n    flex-grow: 1;\n"]);return on=function(){return n},n}function cn(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    word-wrap: break-word;\n    word-break: break-word;\n"]);return cn=function(){return n},n}function ln(n){var e=n.boardKey,t=n.listKey,o=n.listName,i=n.cardList,c=n.functionSet,u=Object(r.useState)(""),d=Object(l.a)(u,2),f=d[0],s=d[1],b=Object(r.useState)(o),m=Object(l.a)(b,2),p=m[0],g=m[1],x=Object(r.useRef)();return a.a.createElement(un,null,a.a.createElement(gn,null,a.a.createElement(pn,{innerRef:x,html:p,disabled:!1,onChange:function(n){g(n.target.value)},onBlur:function(){var n=x.current.innerHTML;n?c.edit(e,t,"---",n):g(o)},spellCheck:"false",onKeyPress:function(n){13===(n.keyCode||n.which)&&(n.returnValue=!1,n.preventDefault&&n.preventDefault())}})),a.a.createElement(Y.c,{droppableId:t,type:"card"},(function(n){return a.a.createElement(fn,Object.assign({ref:n.innerRef},n.droppableProps),i.map((function(n,r){return a.a.createElement(Y.b,{key:n.cardKey,draggableId:n.cardKey,index:r},(function(r,o){return a.a.createElement(dn,Object.assign({key:n.cardKey},r.draggableProps,r.dragHandleProps,{ref:r.innerRef,isDragging:o.isDragging}),a.a.createElement(U,{boardKey:e,listKey:t,cardKey:n.cardKey,cardName:n.content,done:n.done,functionSet:c}),a.a.createElement(mn,{onClick:function(){return r=n.cardKey,void(window.confirm("Do you really want to remove the card?")&&c.remove(e,t,r));var r}},a.a.createElement("i",{className:S})))}))})),n.placeholder)})),a.a.createElement(sn,null,a.a.createElement(bn,{type:"text",value:f,onChange:function(n){s(n.target.value)},placeholder:"Add a card.."}),a.a.createElement(B,{onClick:function(n){n.preventDefault(),function(n){c.create(e,t,n)}(f),s("")}},a.a.createElement("i",{className:C}))))}var un=s.b.div(cn()),dn=s.b.div(on(),P[2],P[3]),fn=s.b.div(an()),sn=s.b.div(rn(),P[0]),bn=Object(s.b)(R)(tn()),mn=Object(s.b)(B)(en(),P[0]),pn=Object(s.b)($.a)(nn(),P[3]),gn=s.b.h4(_());function xn(){var n=Object(u.a)(["\n    display: flex;\n    align-items: flex-start;\n"]);return xn=function(){return n},n}function hn(){var n=Object(u.a)(["\n    margin-bottom: 5px;\n    text-align: center;\n    font-weight: bold;\n"]);return hn=function(){return n},n}function vn(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    margin: 0 10px;\n    border-radius: 10px;\n    padding: 10px;\n    background-color: white;\n    min-width: 230px;\n    max-width: 230px;\n"]);return vn=function(){return n},n}function yn(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 0 20px 0 10px;\n    border-radius: 10px;\n    background-color: white;\n    padding: 10px 10px 5px 10px;\n    width: 230px;\n"]);return yn=function(){return n},n}function En(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: flex-start;\n    padding: 0 10px;\n    overflow-x: auto;\n    flex-grow: 1;\n"]);return En=function(){return n},n}function jn(n){var e=n.boardKey,t=(n.boardName,n.listList),o=n.functionSet,i=Object(r.useState)(""),c=Object(l.a)(i,2),u=c[0],d=c[1];return a.a.createElement(On,null,a.a.createElement(Y.a,{onDragEnd:function(n){var t=n.destination,r=n.source,a=n.type;t&&(t.droppableId===r.droppableId&&t.index===r.index||("card"!==a?"list"!==a||o.switchIndex(e,"---","---",r.index,t.index):o.switchIndex(e,r.droppableId,t.droppableId,r.index,t.index)))}},a.a.createElement(Y.c,{droppableId:"lists",direction:"horizontal",type:"list"},(function(n){return a.a.createElement(Ln,Object.assign({},n.droppableProps,{ref:n.innerRef}),t.map((function(n,t){return a.a.createElement(Y.b,{key:n.listKey,draggableId:n.listKey,index:t},(function(t){return a.a.createElement(Kn,Object.assign({},t.draggableProps,{ref:t.innerRef},t.dragHandleProps),a.a.createElement(ln,{boardKey:e,listKey:n.listKey,listName:n.listName,cardList:n.cardList,functionSet:o}),a.a.createElement(B,{onClick:function(){return t=n.listKey,void(window.confirm("Do you really want to remove the list?")&&o.remove(e,t,"---"));var t}},a.a.createElement("i",{className:S})))}))})),n.placeholder)}))),a.a.createElement("div",null,a.a.createElement(wn,null,a.a.createElement(kn,{type:"text",value:u,onChange:function(n){d(n.target.value)},placeholder:"Add a list.."}),a.a.createElement(B,{onClick:function(n){n.preventDefault(),function(n){o.create(e,"---",n)}(u),d("")}},a.a.createElement("i",{className:C})))))}var On=s.b.div(En()),wn=s.b.div(yn()),Kn=s.b.div(vn()),kn=Object(s.b)(R)(hn()),Ln=s.b.div(xn());function Nn(){var n=Object(u.a)(["\n    display: flex;\n    margin-bottom: 20px;\n    justify-content: center;\n    align-items: center;\n    padding: 10px 20px;\n    background-color: ",";\n"]);return Nn=function(){return n},n}function Cn(){var n=Object(u.a)(["\n    font-size: 30px;\n    color: ",";\n    &:hover{\n        color: ",";\n    }\n"]);return Cn=function(){return n},n}function Sn(){var n=Object(u.a)(["\n    padding: 10px;\n    outline-color: ",";  \n"]);return Sn=function(){return n},n}function Dn(){var n=Object(u.a)(["\n    font-size: 30px;\n    margin: auto;\n    padding: 10px 20px;\n    color: ",";\n    cursor: pointer;\n"]);return Dn=function(){return n},n}function Pn(){var n=Object(u.a)(["\n    display: flex;\n    flex-flow: column;\n    text-align: center;\n    min-height: 100vh;\n"]);return Pn=function(){return n},n}function In(n){var e=n.location,t=n.history,o=n.boardList,i=n.functionSet,c=e.state?o.find((function(n){return n.boardKey===e.state.key})):null,u=Object(r.useState)(c?c.boardName:null),d=Object(l.a)(u,2),f=d[0],s=d[1],b=Object(r.useRef)();if(void 0===e.state)return t.push("/"),null;return a.a.createElement(Bn,null,a.a.createElement(Fn,null,a.a.createElement(Rn,null,a.a.createElement(zn,{innerRef:b,html:f,disabled:!1,onChange:function(n){s(n.target.value)},onBlur:function(){var n=b.current.innerHTML;n?i.edit(e.state.key,"---","---",n):s(c.boardName)},onKeyPress:function(n){13===(n.keyCode||n.which)&&(n.returnValue=!1,n.preventDefault&&n.preventDefault())},spellCheck:"false"})),a.a.createElement(Hn,{to:{pathname:"/"}},a.a.createElement("i",{className:"fas fa-home"}))),a.a.createElement(jn,{boardKey:e.state.key,boardName:e.state.name,listList:c.listList,functionSet:i}))}var Bn=s.b.div(Pn()),Rn=s.b.h1(Dn(),P[3]),zn=Object(s.b)($.a)(Sn(),P[3]),Hn=Object(s.b)(d.b)(Cn(),P[3],P[2]),Fn=s.b.header(Nn(),P[1]);function An(){var n=Object(u.a)(["\n    *{\n      box-sizing: border-box;\n    }\n    body{\n        padding: 0;\n        margin: 0;\n        font-family: 'Lora', 'Noto Serif KR';\n        background-color: ",";\n    }\n    ::-webkit-scrollbar{\n      background: none;\n      height: 14px;\n    }\n    ::-webkit-scrollbar-track{\n      box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);\n      border-radius: 10px;\n    }\n    ::-webkit-scrollbar-thumb{\n      background: rgba(0, 0, 0, 0.15);\n      border-radius: 10px;\n    }\n"]);return An=function(){return n},n}var Jn=Object(s.a)(An(),"#E9ECE5");var Tn=function(){var n=a.a.useState(JSON.parse(localStorage.getItem("localBoardList"))||[]),e=Object(l.a)(n,2),t=e[0],r=e[1];a.a.useEffect((function(){localStorage.setItem("localBoardList",JSON.stringify(t))}),[t]);var o={create:function(n,e,a){if("---"===n){if(!t.filter((function(n){return n.boardName===a})).length&&a.length){var o=t.concat([{boardKey:a.concat(Date.now()),boardName:a,listList:[],pin:!1}]);r(o)}}else if("---"===e){var i=Object(c.a)(t);i.forEach((function(e){e.boardKey===n&&(!e.listList.filter((function(n){return n.listName===a})).length&&a.length&&e.listList.push({listKey:a.concat(Date.now()),listName:a,cardList:[]}))})),r(i)}else{var l=Object(c.a)(t);l.forEach((function(t){t.boardKey===n&&t.listList.forEach((function(n){n.listKey===e&&a.length&&n.cardList.push({cardKey:a.concat(Date.now()),cardName:a,done:!1})}))})),r(l)}},remove:function(n,e,a){if("---"!==n)if("---"===e){var o=t.filter((function(e){return e.boardKey!==n}));r(o)}else if("---"===a){var i=Object(c.a)(t);i.forEach((function(t){t.boardKey===n&&(t.listList=t.listList.filter((function(n){return n.listKey!==e})))})),r(i),r(i)}else{var l=Object(c.a)(t);l.forEach((function(t){t.boardKey===n&&t.listList.forEach((function(n){n.listKey===e&&(n.cardList=n.cardList.filter((function(n){return n.cardKey!==a})))}))})),r(l)}},edit:function(n,e,a,o){if("---"!==n)if("---"===e){var i=Object(c.a)(t);i.forEach((function(e){e.boardKey===n&&(e.boardName=o)})),r(i)}else if("---"===a){var l=Object(c.a)(t);l.forEach((function(t){t.boardKey===n&&t.listList.forEach((function(n){n.listKey===e&&(n.listName=o)}))})),r(l)}else{var u=Object(c.a)(t);u.forEach((function(t){t.boardKey===n&&t.listList.forEach((function(n){n.listKey===e&&n.cardList.forEach((function(n){n.cardKey===a&&(n.cardName=o)}))}))})),r(u)}},togglePin:function(n){var e=Object(c.a)(t);e.forEach((function(e){e.boardKey===n&&(e.pin=!e.pin)})),r(e)},toggleDone:function(n,e,a){var o=Object(c.a)(t);o.forEach((function(t){t.boardKey===n&&t.listList.forEach((function(n){n.listKey===e&&n.cardList.forEach((function(n){n.cardKey===a&&(n.done=!n.done)}))}))})),r(o)},switchIndex:function(n,e,a,o,i){var l=Object(c.a)(t),u=null,d=null;"---"!==e?(l.forEach((function(t){t.boardKey===n&&t.listList.forEach((function(n){n.listKey===e&&(u=n.cardList[o],n.cardList.splice(o,1),e===a?n.cardList.splice(i,0,u):t.listList.forEach((function(n){n.listKey===a&&n.cardList.splice(i,0,u)})))}))})),r(l)):(l.forEach((function(e){e.boardKey===n&&(d=e.listList[o],e.listList.splice(o,1),e.listList.splice(i,0,d))})),r(l))}};return a.a.createElement(a.a.Fragment,null,a.a.createElement(Jn,null),a.a.createElement(d.a,null,a.a.createElement(f.a,{path:"/",exact:!0,render:function(n){return a.a.createElement(I,Object.assign({},n,{boardList:t,functionSet:o}))}}),a.a.createElement(f.a,{path:"/board/:boardName",render:function(n){return a.a.createElement(In,Object.assign({},n,{boardList:t,functionSet:o}))}})))};i.a.render(a.a.createElement(Tn,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.a2cf01eb.chunk.js.map
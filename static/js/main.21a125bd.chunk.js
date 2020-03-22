(this["webpackJsonptrello-clone"]=this["webpackJsonptrello-clone"]||[]).push([[0],{31:function(e,n,t){e.exports=t(43)},43:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(14),i=t.n(o),c=t(7),l=t(16),d=t(11),u=t(2),s=t(3);function b(){var e=Object(u.a)(["\n    font-weight: bold;\n    text-decoration: underline;\n"]);return b=function(){return e},e}function f(){var e=Object(u.a)(["\n    position: fixed;\n    padding: 30px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -90%);\n    background: ",";\n    display: block;\n    border-radius: 10px;\n    font-size: 16px;\n    opacity: 0.8;\n"]);return f=function(){return e},e}function p(e){return e.show?r.a.createElement(m,{showHelp:!0},r.a.createElement(y,null,"Home Page"),"Click on a board name to enter the board page",r.a.createElement("br",null),"Pin important boards for quick access",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(y,null,"Board Page"),"Click on the board or list name to modify it",r.a.createElement("br",null),"Drag and drop lists and cards to change their positions",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(y,null,"Card Page"),"Coming soon",r.a.createElement("br",null)):null}var m=s.b.div(f(),"#B3C2BF"),y=s.b.div(b());function E(){var e=Object(u.a)(["\n    padding-top: 20px;\n    font-size: 14px;\n    color: ",";\n    cursor: pointer;\n    font-weight: bold;\n    text-decoration: underline;\n"]);return E=function(){return e},e}function x(){var e=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    align-items: center;\n    border-radius: 20px;\n    background-color: ",";\n    margin: 10px 0;\n"]);return x=function(){return e},e}function g(){var e=Object(u.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n"]);return g=function(){return e},e}function h(){var e=Object(u.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 10px;\n    padding: 20px;\n    border-radius: 20px;\n    width: 200px;\n    height: 80px;\n    background-color: white;\n"]);return h=function(){return e},e}function v(){var e=Object(u.a)(["\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    flex-direction: column;\n    align-items: center;\n    padding: 40px;\n"]);return v=function(){return e},e}function K(){var e=Object(u.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    margin: 10px;\n    padding: 20px;\n    border-radius: 20px;\n    width: 200px;\n    height: 80px;\n    background-color: white;\n"]);return K=function(){return e},e}function O(){var e=Object(u.a)(["\n    color: ",";\n    text-decoration: none;\n    &:hover{\n        color: ",";\n    }\n    margin: auto;\n    font-weight: bold;\n    word-wrap: break-word;\n    word-break: break-word;\n    text-align: center;\n"]);return O=function(){return e},e}function j(){var e=Object(u.a)(["\n    text-align: center;\n    font-weight: bold;\n    font-size: 16px;\n    width: 100%;\n    margin: auto 0;\n"]);return j=function(){return e},e}function L(){var e=Object(u.a)(["\n    color: ",";\n"]);return L=function(){return e},e}function w(){var e=Object(u.a)(["\n    border: none;\n    padding: 5px;\n    background: none;\n    font-family: 'Lora', 'Noto Serif KR';\n    &::placeholder{\n        color: ",";\n    }\n    outline-color: ",";\n"]);return w=function(){return e},e}function D(){var e=Object(u.a)(["\n    border: none;\n    background: none;\n    &:hover{\n        color: ",";\n    }\n    cursor: pointer;\n    color: ",";  \n    outline: none;  \n"]);return D=function(){return e},e}var k="fas fa-plus",C="fas fa-trash",N="far fa-star",I=["#E9ECE5","#C0DFD9","#B3C2BF","#3B3A36"];function T(e){var n=e.boardList,t=r.a.useContext(Fe).dispatch,o=Object(a.useState)(""),i=Object(c.a)(o,2),l=i[0],d=i[1],u=Object(a.useState)(!1),s=Object(c.a)(u,2),b=s[0],f=s[1],m=function(e){window.confirm("Do you really want to remove the board?")&&t({type:"DELETE_BOARD",payload:{boardKey:e}})};return r.a.createElement(H,null,r.a.createElement(F,null,r.a.createElement(S,null,"Pinned Boards"),r.a.createElement(z,null,n.map((function(e){return e.pin?r.a.createElement(G,{key:e.boardKey},r.a.createElement(B,{to:{pathname:"/board/".concat(e.boardKey)}},e.boardName),r.a.createElement(_,{onClick:function(){return t({type:"TOGGLE_PIN",payload:{boardKey:e.boardKey}})}},r.a.createElement("i",{className:e.pin?"fas fa-star":N})),r.a.createElement(_,{onClick:function(){return m(e.boardKey)}},r.a.createElement("i",{className:C}))):null})))),r.a.createElement(F,null,r.a.createElement(S,null,"Boards"),r.a.createElement(z,null,n.map((function(e){return r.a.createElement(G,{key:e.boardKey},r.a.createElement(B,{to:{pathname:"/board/".concat(e.boardKey)}},e.boardName),r.a.createElement(_,{onClick:function(){return t({type:"TOGGLE_PIN",payload:{boardKey:e.boardKey}})}},r.a.createElement("i",{className:e.pin?"fas fa-star":N})),r.a.createElement(_,{onClick:function(){return m(e.boardKey)}},r.a.createElement("i",{className:C})))})),r.a.createElement(P,null,r.a.createElement(A,{type:"text",value:l,onChange:function(e){d(e.target.value)},placeholder:"Add a board.."}),r.a.createElement(_,{onClick:function(e){e.preventDefault(),function(e){t({type:"ADD_BOARD",payload:{newBoardName:e}})}(l),d("")}},r.a.createElement("i",{className:k}))))),r.a.createElement(J,{onClick:function(){return f(!b)}},b?"Hide":"Tips"),r.a.createElement(p,{show:b}))}var _=s.b.button(D(),I[2],I[3]),R=s.b.input(w(),I[2],I[3]),S=s.b.h2(L(),I[3]),A=Object(s.b)(R)(j()),B=Object(s.b)(l.b)(O(),I[3],I[2]),P=s.b.div(K()),H=s.b.div(v()),G=s.b.div(h()),z=s.b.div(g()),F=s.b.div(x(),I[1]),J=s.b.a(E(),I[3]);function W(){var e=Object(u.a)(["\n    &:hover{\n        color: ",";\n    }\n"]);return W=function(){return e},e}function M(){var e=Object(u.a)(["\n    width: 100%;\n    padding: 5px;\n    text-align: left;\n    font-size: 14px;\n    text-decoration: ",";\n"]);return M=function(){return e},e}function V(e){var n=e.boardKey,t=e.listKey,a=e.cardKey,o=e.cardName,i=e.done,c=r.a.useContext(Fe).dispatch,l=i?"fas fa-times":"fas fa-check";return r.a.createElement(r.a.Fragment,null,r.a.createElement(q,{done:i},o),r.a.createElement(Q,{done:i,onClick:function(){return c({type:"TOGGLE_DONE",payload:{boardKey:n,listKey:t,cardKey:a}})}},r.a.createElement("i",{className:l})))}var q=s.b.div(M(),(function(e){return e.done?"line-through":"none"})),Q=Object(s.b)(_)(W(),I[0]),U=t(13),X=t(17),Y=t.n(X);function Z(){var e=Object(u.a)(["\n    cursor: pointer;\n"]);return Z=function(){return e},e}function $(){var e=Object(u.a)(["\n    padding: 10px;  \n    outline-color: ",";  \n"]);return $=function(){return e},e}function ee(){var e=Object(u.a)(["\n    &:hover{\n        color: ",";\n    }\n"]);return ee=function(){return e},e}function ne(){var e=Object(u.a)(["\n    width: 100%;\n"]);return ne=function(){return e},e}function te(){var e=Object(u.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    border-radius: 5px;\n    width: 100%;\n    margin: 5px 0 10px 0;\n    background-color: ",";\n    padding: 10px;\n    color: white;\n"]);return te=function(){return e},e}function ae(){var e=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    justify-content: flex-start;\n    align-items: center;\n    max-height: 48vh;\n    overflow-y: auto;\n    min-height: 1px;\n"]);return ae=function(){return e},e}function re(){var e=Object(u.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    margin: 5px 0;\n    border-radius: 5px;\n    background-color: ",";\n    padding: 10px;\n    color: ",";\n    flex-grow: 1;\n"]);return re=function(){return e},e}function oe(){var e=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    word-wrap: break-word;\n    word-break: break-word;\n"]);return oe=function(){return e},e}function ie(e){var n=e.boardKey,t=e.listKey,o=e.listName,i=e.cardList,l=r.a.useContext(Fe).dispatch,d=Object(a.useState)(""),u=Object(c.a)(d,2),s=u[0],b=u[1],f=Object(a.useState)(o),p=Object(c.a)(f,2),m=p[0],y=p[1],E=Object(a.useRef)();return r.a.createElement(ce,null,r.a.createElement(pe,null,r.a.createElement(fe,{innerRef:E,html:m,disabled:!1,onChange:function(e){y(e.target.value)},onBlur:function(){var e=E.current.innerHTML;e?l({type:"EDIT_LIST",payload:{newListName:e,boardKey:n,listKey:t}}):y(o)},spellCheck:"false",onKeyPress:function(e){13===(e.keyCode||e.which)&&(e.returnValue=!1,e.preventDefault&&e.preventDefault())}})),r.a.createElement(U.c,{droppableId:t,type:"card"},(function(e){return r.a.createElement(de,Object.assign({ref:e.innerRef},e.droppableProps),i.map((function(e,a){return r.a.createElement(U.b,{key:e.cardKey,draggableId:e.cardKey,index:a},(function(a,o){return r.a.createElement(le,Object.assign({key:e.cardKey},a.draggableProps,a.dragHandleProps,{ref:a.innerRef,isDragging:o.isDragging}),r.a.createElement(V,Object.assign({boardKey:n,listKey:t},e)),r.a.createElement(be,{onClick:function(){return a=e.cardKey,void(window.confirm("Do you really want to remove the card?")&&l({type:"DELETE_CARD",payload:{boardKey:n,listKey:t,cardKey:a}}));var a}},r.a.createElement("i",{className:C})))}))})),e.placeholder)})),r.a.createElement(ue,null,r.a.createElement(se,{type:"text",value:s,onChange:function(e){b(e.target.value)},placeholder:"Add a card.."}),r.a.createElement(_,{onClick:function(e){e.preventDefault(),function(e){l({type:"ADD_CARD",payload:{newCardName:e,boardKey:n,listKey:t}})}(s),b("")}},r.a.createElement("i",{className:k}))))}var ce=s.b.div(oe()),le=s.b.div(re(),I[2],I[3]),de=s.b.div(ae()),ue=s.b.div(te(),I[0]),se=Object(s.b)(R)(ne()),be=Object(s.b)(_)(ee(),I[0]),fe=Object(s.b)(Y.a)($(),I[3]),pe=s.b.h4(Z());function me(){var e=Object(u.a)(["\n    display: flex;\n    align-items: flex-start;\n"]);return me=function(){return e},e}function ye(){var e=Object(u.a)(["\n    margin-bottom: 5px;\n    text-align: center;\n    font-weight: bold;\n"]);return ye=function(){return e},e}function Ee(){var e=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    margin: 0 10px;\n    border-radius: 10px;\n    padding: 10px;\n    background-color: white;\n    min-width: 230px;\n    max-width: 230px;\n"]);return Ee=function(){return e},e}function xe(){var e=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 0 20px 0 10px;\n    border-radius: 10px;\n    background-color: white;\n    padding: 10px 10px 5px 10px;\n    width: 230px;\n"]);return xe=function(){return e},e}function ge(){var e=Object(u.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: flex-start;\n    padding: 0 10px;\n    overflow-x: auto;\n    flex-grow: 1;\n"]);return ge=function(){return e},e}function he(e){var n=e.boardKey,t=e.listList,o=r.a.useContext(Fe).dispatch,i=Object(a.useState)(""),l=Object(c.a)(i,2),d=l[0],u=l[1];return r.a.createElement(ve,null,r.a.createElement(U.a,{onDragEnd:function(e){var t=e.destination,a=e.source,r=e.type;t&&(t.droppableId===a.droppableId&&t.index===a.index||("card"!==r?"list"!==r||o({type:"SWITCH_LIST",payload:{boardKey:n,startIndex:a.index,endIndex:t.index}}):o({type:"SWITCH_CARD",payload:{boardKey:n,startListKey:a.droppableId,endListKey:t.droppableId,startIndex:a.index,endIndex:t.index}})))}},r.a.createElement(U.c,{droppableId:"lists",direction:"horizontal",type:"list"},(function(e){return r.a.createElement(Le,Object.assign({},e.droppableProps,{ref:e.innerRef}),t.map((function(e,t){return r.a.createElement(U.b,{key:e.listKey,draggableId:e.listKey,index:t},(function(t){return r.a.createElement(Oe,Object.assign({},t.draggableProps,{ref:t.innerRef},t.dragHandleProps),r.a.createElement(ie,{boardKey:n,listKey:e.listKey,listName:e.listName,cardList:e.cardList}),r.a.createElement(_,{onClick:function(){return t=e.listKey,void(window.confirm("Do you really want to remove the list?")&&o({type:"DELETE_LIST",payload:{boardKey:n,listKey:t}}));var t}},r.a.createElement("i",{className:C})))}))})),e.placeholder)}))),r.a.createElement("div",null,r.a.createElement(Ke,null,r.a.createElement(je,{type:"text",value:d,onChange:function(e){u(e.target.value)},placeholder:"Add a list.."}),r.a.createElement(_,{onClick:function(e){e.preventDefault(),function(e){o({type:"ADD_LIST",payload:{newListName:e,boardKey:n}}),console.log(t)}(d),u("")}},r.a.createElement("i",{className:k})))))}var ve=s.b.div(ge()),Ke=s.b.div(xe()),Oe=s.b.div(Ee()),je=Object(s.b)(R)(ye()),Le=s.b.div(me());function we(){var e=Object(u.a)(["\n    display: flex;\n    margin-bottom: 20px;\n    justify-content: center;\n    align-items: center;\n    padding: 10px 20px;\n    background-color: ",";\n"]);return we=function(){return e},e}function De(){var e=Object(u.a)(["\n    font-size: 30px;\n    color: ",";\n    &:hover{\n        color: ",";\n    }\n"]);return De=function(){return e},e}function ke(){var e=Object(u.a)(["\n    padding: 10px;\n    outline-color: ",";  \n"]);return ke=function(){return e},e}function Ce(){var e=Object(u.a)(["\n    font-size: 30px;\n    margin: auto;\n    padding: 10px 20px;\n    color: ",";\n    cursor: pointer;\n"]);return Ce=function(){return e},e}function Ne(){var e=Object(u.a)(["\n    display: flex;\n    flex-flow: column;\n    text-align: center;\n    min-height: 100vh;\n"]);return Ne=function(){return e},e}function Ie(e){var n=e.history,t=e.match,o=e.boardList,i=r.a.useContext(Fe).dispatch,l=o.find((function(e){return e.boardKey===Number(t.params.boardKey)})),d=Object(a.useState)(l?l.boardName:null),u=Object(c.a)(d,2),s=u[0],b=u[1],f=Object(a.useRef)();if(!l)return n.push("/"),null;return r.a.createElement(Te,null,r.a.createElement(Ae,null,r.a.createElement(_e,null,r.a.createElement(Re,{innerRef:f,html:s,disabled:!1,onChange:function(e){b(e.target.value)},onBlur:function(){var e=f.current.innerHTML;e?i({type:"EDIT_BOARD",payload:{boardKey:l.boardKey,newBoardName:e}}):b(l.boardName)},onKeyPress:function(e){13===(e.keyCode||e.which)&&(e.returnValue=!1,e.preventDefault&&e.preventDefault())},spellCheck:"false"})),r.a.createElement(Se,{to:{pathname:"/"}},r.a.createElement("i",{className:"fas fa-home"}))),r.a.createElement(he,{boardKey:l.boardKey,listList:l.listList}))}var Te=s.b.div(Ne()),_e=s.b.h1(Ce(),I[3]),Re=Object(s.b)(Y.a)(ke(),I[3]),Se=Object(s.b)(l.b)(De(),I[3],I[2]),Ae=s.b.header(we(),I[1]),Be=t(9),Pe=t(29);var He=function(e,n){switch(n.type){case"ADD_BOARD":var t=n.payload.newBoardName;if(!e.boardList.filter((function(e){return e.boardName===t})).length&&t.length){var a={boardKey:Date.now(),boardName:t,listList:[],pin:!1};return{boardList:[].concat(Object(Pe.a)(e.boardList),[a])}}break;case"ADD_LIST":var r=n.payload,o=r.newListName,i=r.boardKey;return e.boardList.forEach((function(e){if(e.boardKey===i&&(!e.listList.filter((function(e){return e.listName===o})).length&&o.length)){var n={listKey:o.concat(Date.now()),listName:o,cardList:[]};e.listList.push(n)}})),Object(Be.a)({},e);case"ADD_CARD":var c=n.payload,l=c.newCardName,d=c.boardKey,u=c.listKey;return e.boardList.forEach((function(e){e.boardKey===d&&e.listList.forEach((function(e){if(e.listKey===u&&l.length){var n={cardKey:l.concat(Date.now()),cardName:l,done:!1};e.cardList.push(n)}}))})),Object(Be.a)({},e);case"DELETE_BOARD":var s=n.payload.boardKey;return{boardList:e.boardList.filter((function(e){return e.boardKey!==s}))};case"DELETE_LIST":var b=n.payload,f=b.boardKey,p=b.listKey;return e.boardList.forEach((function(e){e.boardKey===f&&(e.listList=e.listList.filter((function(e){return e.listKey!==p})))})),Object(Be.a)({},e);case"DELETE_CARD":var m=n.payload,y=m.boardKey,E=m.listKey,x=m.cardKey;return e.boardList.forEach((function(e){e.boardKey===y&&e.listList.forEach((function(e){e.listKey===E&&(e.cardList=e.cardList.filter((function(e){return e.cardKey!==x})))}))})),Object(Be.a)({},e);case"EDIT_BOARD":var g=n.payload,h=g.boardKey,v=g.newBoardName;return e.boardList.forEach((function(e){e.boardKey===h&&(e.boardName=v)})),Object(Be.a)({},e);case"EDIT_LIST":var K=n.payload,O=K.boardKey,j=K.listKey,L=K.newListName;return e.boardList.forEach((function(e){e.boardKey===O&&e.listList.forEach((function(e){e.listKey===j&&(e.listName=L)}))})),Object(Be.a)({},e);case"EDIT_CARD":var w=n.payload,D=w.boardKey,k=w.listKey,C=w.cardKey,N=w.newCardName;return e.boardList.forEach((function(e){e.boardKey===D&&e.listList.forEach((function(e){e.listKey===k&&e.cardList.forEach((function(e){e.cardKey===C&&(e.cardName=N)}))}))})),Object(Be.a)({},e);case"TOGGLE_PIN":var I=n.payload.boardKey;return e.boardList.forEach((function(e){e.boardKey===I&&(e.pin=!e.pin)})),Object(Be.a)({},e);case"TOGGLE_DONE":var T=n.payload,_=T.boardKey,R=T.listKey,S=T.cardKey;return e.boardList.forEach((function(e){e.boardKey===_&&e.listList.forEach((function(e){e.listKey===R&&e.cardList.forEach((function(e){e.cardKey===S&&(e.done=!e.done)}))}))})),Object(Be.a)({},e);case"SWITCH_CARD":var A=n.payload,B=A.boardKey,P=A.startListKey,H=A.endListKey,G=A.startIndex,z=A.endIndex,F=null;return e.boardList.forEach((function(e){e.boardKey===B&&e.listList.forEach((function(n){n.listKey===P&&(F=n.cardList[G],n.cardList.splice(G,1),P===H?n.cardList.splice(z,0,F):e.listList.forEach((function(e){e.listKey===H&&e.cardList.splice(z,0,F)})))}))})),Object(Be.a)({},e);case"SWITCH_LIST":var J=n.payload,W=J.boardKey,M=J.startIndex,V=J.endIndex,q=null;return e.boardList.forEach((function(e){e.boardKey===W&&(q=e.listList[M],e.listList.splice(M,1),e.listList.splice(V,0,q))})),Object(Be.a)({},e);default:return e}};function Ge(){var e=Object(u.a)(["\n    *{\n      box-sizing: border-box;\n    }\n    body{\n        padding: 0;\n        margin: 0;\n        font-family: 'Lora', 'Noto Serif KR';\n        background-color: ",";\n    }\n    ::-webkit-scrollbar{\n      background: none;\n      height: 14px;\n    }\n    ::-webkit-scrollbar-track{\n      box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);\n      border-radius: 10px;\n    }\n    ::-webkit-scrollbar-thumb{\n      background: rgba(0, 0, 0, 0.15);\n      border-radius: 10px;\n    }\n"]);return Ge=function(){return e},e}var ze=Object(s.a)(Ge(),I[0]),Fe=r.a.createContext({boardList:JSON.parse(localStorage.getItem("localBoardList"))||[]});var Je=function(){var e=r.a.useContext(Fe),n=r.a.useReducer(He,e),t=Object(c.a)(n,2),a=t[0],o=t[1],i=r.a.useMemo((function(){return{state:a,dispatch:o}}),[a,o]);return r.a.useEffect((function(){localStorage.setItem("localBoardList",JSON.stringify(a.boardList))}),[a]),r.a.createElement(Fe.Provider,{value:i},r.a.createElement(ze,null),r.a.createElement(l.a,null,r.a.createElement(d.a,{path:"/",exact:!0,render:function(e){return r.a.createElement(T,Object.assign({},e,{boardList:a.boardList}))}}),r.a.createElement(d.a,{path:"/board/:boardKey",render:function(e){return r.a.createElement(Ie,Object.assign({},e,{boardList:a.boardList}))}})))};i.a.render(r.a.createElement(Je,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.21a125bd.chunk.js.map
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(e,t,n){e.exports={formContainer:"CreateGame_formContainer__3Pu_N",form:"CreateGame_form__1PTS7",formTitle:"CreateGame_formTitle__2sme1","form-group":"CreateGame_form-group__3yuiY",error:"CreateGame_error__15o9H",successMessage:"CreateGame_successMessage__1nbJS"}},17:function(e,t,n){e.exports={container:"TarjetaDetail_container__2dfH3",detail:"TarjetaDetail_detail__2hYwz",title:"TarjetaDetail_title__d_1x4",subtitle:"TarjetaDetail_subtitle__ikZBw",content:"TarjetaDetail_content__1cVuN",searchButton:"TarjetaDetail_searchButton__2MAx1"}},19:function(e,t,n){e.exports={container:"Filters_container__3e7N6",searchInput:"Filters_searchInput__1aQR7",searchButton:"Filters_searchButton__ZemsA",filterItem:"Filters_filterItem__1bAHH",filtersContainer:"Filters_filtersContainer__2HXI7",gradient:"Filters_gradient__10B2k"}},24:function(e,t,n){e.exports={landingContainer:"Landing_landingContainer__2Lt2v",text:"Landing_text__KAeM5",titulo:"Landing_titulo__2a0da",subtitulo:"Landing_subtitulo__1Ysi-",boton:"Landing_boton__17Ppp"}},38:function(e,t,n){e.exports={card:"Tarjeta_card__2_DUF",cardTitle:"Tarjeta_cardTitle__3wKda","card-description":"Tarjeta_card-description__1J6RI"}},41:function(e,t,n){e.exports={cardContainer:"Tarjetas_cardContainer__2bFgU",spinnerContainer:"Tarjetas_spinnerContainer__Gu-cb"}},46:function(e,t,n){e.exports={spinner:"Spinner_spinner__1Neu5"}},47:function(e,t,n){e.exports={menu:"Menu_menu__1wQ3F",logo:"Menu_logo__2yFIt"}},53:function(e,t,n){},54:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(30),s=n.n(r),i=(n(53),n(54),n(4)),o=n(6),l=n(38),u=n.n(l),j=n(18),d=n(1);function b(e){var t=e.nombre,n=e.imagen,a=e.genres,c=e.id;return Object(d.jsx)("div",{className:u.a.card,children:Object(d.jsxs)(j.b,{to:"/videogame/".concat(c),children:[Object(d.jsx)("h1",{className:u.a.cardTitle,children:t}),Object(d.jsx)("img",{src:n,alt:t}),Object(d.jsx)("h3",{className:u.a.cardDescription,children:a})]})})}var O=n(41),p=n.n(O),m=n(15),h=function(e){var t=e.page,n=e.handlePageChange,a=e.cantidad,c=Math.ceil(a/15);return Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:function(){return n(t-1)},disabled:1===t,children:"Anterior"}),Object(d.jsxs)("span",{children:[" P\xe1gina ",t," "]}),t<c?Object(d.jsx)("button",{onClick:function(){return n(t+1)},children:"Siguiente"}):null]})},f=n(46),v=n.n(f),x=function(){return Object(d.jsx)("div",{"data-testid":"spinner",className:v.a.spinner})};function g(){var e=Object(m.c)((function(e){return e.videogames})),t=Object(m.c)((function(e){return e.selectedSource})),n=Object(m.c)((function(e){return e.videogamesFiltered})),c=Object(m.c)((function(e){return e.searchResults})),r=Object(m.c)((function(e){return e.selectedGenre})),s=Object(a.useState)([]),i=Object(o.a)(s,2),l=i[0],u=i[1],j=Object(a.useState)(1),O=Object(o.a)(j,2),f=O[0],v=O[1],g=Object(a.useState)(!0),_=Object(o.a)(g,2),y=_[0],N=_[1],C=Object(a.useState)(0),S=Object(o.a)(C,2),T=S[0],R=S[1],E=function(e,t){return"TODOS"===t?e:e.filter((function(e){var n;return null===(n=e.genres)||void 0===n?void 0:n.some((function(e){return e.name===t}))}))};return Object(a.useEffect)((function(){var a,s;N(!0);var i,o,l=e;c.length>0?(i=c,l="AMBOS"===(o=t)?i:"API"===o?i.filter((function(e){return!isNaN(e.id)})):"DB"===o?i.filter((function(e){return isNaN(e.id)})):void 0,l=E(l,r)):l=E("API"===t||"DB"===t?n:e,r);var j=15*(f-1),d=j+15,b=null===(a=l)||void 0===a?void 0:a.slice(j,d);u(b),R(null===(s=l)||void 0===s?void 0:s.length),setTimeout((function(){N(!1)}),5e3)}),[f,e,n,t,c,r]),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:p.a.cardContainer,children:y&&0===(null===l||void 0===l?void 0:l.length)?Object(d.jsx)("div",{className:p.a.spinnerContainer,children:Object(d.jsx)(x,{})}):l&&l.map((function(e){var t;return Object(d.jsx)(b,{id:e.id,nombre:e.nombre,imagen:e.imagen,genres:null===(t=e.genres)||void 0===t?void 0:t.map((function(e){return e.name})).join(", ")},e.id)}))}),Object(d.jsx)(h,{page:f,handlePageChange:v,cantidad:T})]})}var _=n(5),y=n(9),N=n(19),C=n.n(N),S="ORDER_BY_NAME",T="ORDER_BY_RATING",R="SELECT_API_OR_DB",E="SELECT_GENRE",F="GET_VIDEOGAMES",A="SET_SEARCH_RESULTS",D="RESET_SEARCH_RESULTS",B=function(e){return{type:R,payload:e}},w=function(e){return{type:E,payload:e}},I=function(e){return{type:T,payload:e}},k=function(e){return{type:S,payload:e}};var G=n(65);function M(){var e=Object(m.b)(),t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],r=n[1],s=function(){var t=Object(y.a)(Object(_.a)().mark((function t(){var n;return Object(_.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,G.a.get("videogames?name=".concat(c));case 3:n=t.sent,e((a=n.data,{type:A,payload:a})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error buscando videojuegos",t.t0);case 10:case 11:case"end":return t.stop()}var a}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),i=Object(a.useState)([]),l=Object(o.a)(i,2),u=l[0],j=l[1];Object(a.useEffect)((function(){function t(){return(t=Object(y.a)(Object(_.a)().mark((function e(){var t,n,a;return Object(_.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pi-back-deploy-production1.up.railway.app/genres");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a=n.map((function(e){return e.name})),j(a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e(B("AMBOS")),e(w("TODOS")),function(){t.apply(this,arguments)}()}),[]);return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Buscar juegos"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:C.a.container,children:[Object(d.jsx)("input",{className:C.a.searchInput,type:"text",placeholder:"Buscar videojuego",value:c,onChange:function(e){r(e.target.value)}}),Object(d.jsx)("button",{onClick:s,className:C.a.searchButton,children:"Buscar"}),Object(d.jsx)("button",{onClick:function(){e({type:D}),r("")},className:C.a.searchButton,children:"Reset"})]}),Object(d.jsxs)("div",{className:C.a.container,children:[Object(d.jsxs)("div",{className:C.a.filterItem,children:[Object(d.jsx)("label",{htmlFor:"dropdown",children:"Api or Db:"}),Object(d.jsxs)("select",{id:"dropdown1",onChange:function(t){e(B(t.target.value))},children:[Object(d.jsx)("option",{value:"AMBOS",children:"Ambos"}),Object(d.jsx)("option",{value:"API",children:"Api"}),Object(d.jsx)("option",{value:"DB",children:"Db"})]})]}),Object(d.jsxs)("div",{className:C.a.filterItem,children:[Object(d.jsx)("label",{htmlFor:"dropdown",children:"G\xe9nero"}),Object(d.jsxs)("select",{name:"generos",onChange:function(t){e(w(t.target.value))},children:[Object(d.jsx)("option",{value:"TODOS",children:"Todos"}),null===u||void 0===u?void 0:u.map((function(e,t){return Object(d.jsx)("option",{value:e,children:e},t)}))]})]}),Object(d.jsxs)("div",{className:C.a.filterItem,children:[Object(d.jsx)("label",{htmlFor:"dropdown",children:"Orden alfab\xe9tico:"}),Object(d.jsxs)("select",{id:"dropdown2",onChange:function(t){e(k(t.target.value))},children:[Object(d.jsx)("option",{value:"Elegir opci\xf3n",children:"Elegir opci\xf3n"}),Object(d.jsx)("option",{value:"A-Z",children:"A-Z"}),Object(d.jsx)("option",{value:"Z-A",children:"Z-A"})]})]}),Object(d.jsxs)("div",{className:C.a.filterItem,children:[Object(d.jsx)("label",{htmlFor:"dropdown",children:"Orden por rating:"}),Object(d.jsxs)("select",{id:"dropdown3",onChange:function(t){e(I(t.target.value))},children:[Object(d.jsx)("option",{value:"Elegir opci\xf3n",children:"Elegir opci\xf3n"}),Object(d.jsx)("option",{value:"Menor a mayor",children:"Menor a mayor"}),Object(d.jsx)("option",{value:"Mayor a menor",children:"Mayor a menor"})]})]})]})]})}var P=n(47),L=n.n(P);var z=function(e){var t=e.onOptionClick,n=Object(i.n)();return Object(d.jsxs)("div",{className:L.a.menu,children:[Object(d.jsx)("button",{onClick:function(){return t("all")},children:"Buscar Juegos"}),Object(d.jsx)("button",{onClick:function(){t("create"),n("/create-videogame")},children:"Crear juego"})]})},H=n(10),Z=n(8),J=n(14),U=n.n(J);function V(){var e=Object(a.useState)({}),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(o.a)(r,2),l=s[0],u=s[1],j=Object(i.n)(),b=Object(a.useState)({nombre:"",imagen:"",descripcion:"",fecha_lanzamiento:"",rating:"",plataformas:[],generos:[]}),O=Object(o.a)(b,2),p=O[0],m=O[1],h=function(){return""!==p.nombre&&""!==p.imagen&&""!==p.descripcion&&""!==p.fecha_lanzamiento&&""!==p.rating&&0!==p.plataformas.length&&0!==p.generos.length},f=Object(a.useState)([]),v=Object(o.a)(f,2),x=v[0],g=v[1];Object(a.useEffect)((function(){function e(){return(e=Object(y.a)(Object(_.a)().mark((function e(){var t,n,a;return Object(_.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pi-back-deploy-production1.up.railway.app/genres");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,a=n.map((function(e){return e.name})),g(a),e.t0=console,e.next=11,a;case 11:e.t1=e.sent,e.t0.log.call(e.t0,e.t1);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var N=function(e){var t,n,a=e.target,r=a.name,s=a.value;switch(r){case"nombre":t=function(e){return""!==e.trim()}(s)?null:"Es obligatorio incluir el nombre";break;case"descripcion":t=(n=5,function(e){return e.length>=n})(s)?null:"La descripci\xf3n debe tener al menos 5 caracteres";break;case"rating":t=function(e){return!isNaN(parseFloat(e))&&isFinite(e)&&parseFloat(e)>=0&&parseFloat(e)<=5}(s)?null:"El rating debe ser un n\xfamero entre 0 y 5";break;default:t=null}c((function(e){return Object(Z.a)(Object(Z.a)({},e),{},Object(H.a)({},r,t))})),m((function(t){return Object(Z.a)(Object(Z.a)({},t),{},Object(H.a)({},e.target.name,e.target.value))}))};return Object(d.jsxs)("div",{children:[Object(d.jsx)(z,{onOptionClick:function(e){return j("/".concat("all"===e?"home":e))}}),Object(d.jsx)("h1",{children:"Crear un videojuego"}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:U.a.formContainer,children:Object(d.jsxs)("form",{className:U.a.form,onSubmit:function(e){e.preventDefault(),fetch("https://pi-back-deploy-production1.up.railway.app/videogames",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)}).then((function(e){return e.json()})).then((function(e){m({nombre:"",imagen:"",descripcion:"",fecha_lanzamiento:"",rating:"",plataformas:[],generos:[]}),u("Videojuego creado con \xe9xito!"),setTimeout((function(){u("")}),3e3)})).catch((function(e){return console.log(e)}))},children:[Object(d.jsxs)("div",{className:U.a.formGroup,children:[Object(d.jsx)("label",{children:"Nombre"}),Object(d.jsx)("input",{type:"text",name:"nombre",value:p.nombre,onChange:N}),n.nombre&&Object(d.jsx)("p",{className:U.a.error,children:n.nombre})]}),Object(d.jsxs)("div",{className:U.a.formGroup,children:[Object(d.jsx)("label",{children:"Imagen"}),Object(d.jsx)("input",{type:"text",name:"imagen",value:p.imagen,onChange:N})]}),Object(d.jsxs)("div",{className:U.a.formGroup,children:[Object(d.jsx)("label",{children:"Descripcion"}),Object(d.jsx)("input",{type:"text",name:"descripcion",value:p.descripcion,onChange:N}),n.descripcion&&Object(d.jsx)("p",{className:U.a.error,children:n.descripcion})]}),Object(d.jsxs)("div",{className:U.a.formGroup,children:[Object(d.jsx)("label",{children:"Fecha de lanzamiento"}),Object(d.jsx)("input",{type:"text",name:"fecha_lanzamiento",value:p.fecha_lanzamiento,onChange:N})]}),Object(d.jsxs)("div",{className:U.a.formGroup,children:[Object(d.jsx)("label",{children:"Rating"}),Object(d.jsx)("input",{type:"text",name:"rating",value:p.rating,onChange:N}),n.rating&&Object(d.jsx)("p",{className:U.a.error,children:n.rating})]}),Object(d.jsxs)("div",{className:U.a.formGroup,children:[Object(d.jsx)("label",{children:"Plataformas"}),Object(d.jsx)("input",{type:"text",name:"plataformas",value:p.plataformas,onChange:function(e){var t=e.target.value.split(",");m((function(e){return Object(Z.a)(Object(Z.a)({},e),{},{plataformas:t})}))}})]}),Object(d.jsxs)("div",{className:U.a.formGroup,children:[Object(d.jsx)("label",{children:"Generos"}),Object(d.jsx)("select",{multiple:!0,name:"generos",onChange:function(e){for(var t=e.target.options,n=[],a=0;a<t.length;a++)t[a].selected&&n.push(t[a].value);m((function(e){return Object(Z.a)(Object(Z.a)({},e),{},{generos:[].concat(n)})}))},children:null===x||void 0===x?void 0:x.map((function(e,t){return Object(d.jsx)("option",{value:e,children:e},t)}))})]}),Object(d.jsx)("button",{type:"submit",disabled:!h(),children:"Crear"}),!1===h()?Object(d.jsx)("p",{className:U.a.error,children:"Por favor, complete todos los campos"}):null,l&&Object(d.jsx)("p",{className:U.a.successMessage,children:l})]})})]})}function Y(){var e=Object(a.useState)("all"),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)(z,{onOptionClick:function(e){c(e)}}),"all"===n&&Object(d.jsxs)("div",{children:[Object(d.jsx)(M,{}),Object(d.jsx)(g,{})]}),"create"===n&&Object(d.jsx)(V,{})]})}var K=n(24),Q=n.n(K);function X(){return Object(d.jsxs)("div",{className:Q.a.landingContainer,children:[Object(d.jsxs)("div",{className:Q.a.text,children:[Object(d.jsx)("h1",{className:Q.a.titulo,children:"Henry Videogames PI"}),Object(d.jsx)("h2",{className:Q.a.subtitulo,children:"Ramiro Roballos"})]}),Object(d.jsx)(j.b,{to:"/home",children:Object(d.jsx)("button",{className:Q.a.boton,children:" Ingresar"})})]})}var q=n(17),W=n.n(q);function $(){var e,t,n,c,r,s,l=Object(i.p)().id,u=Object(a.useState)(null),b=Object(o.a)(u,2),O=b[0],p=b[1];(Object(a.useEffect)((function(){var e=function(){var e=Object(y.a)(Object(_.a)().mark((function e(){var t;return Object(_.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.a.get("http://localhost:3001/videogames/".concat(l));case 3:t=e.sent,p(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching videogame details:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[l]),(null===l||void 0===l?void 0:l.length)<8)?(e=null===O||void 0===O||null===(n=O.plataformas)||void 0===n?void 0:n.map((function(e){return e.platform.name})).join(", "),t=null===O||void 0===O||null===(c=O.genres)||void 0===c?void 0:c.map((function(e){return e.name})).join(", ")):(e=null===O||void 0===O||null===(r=O.plataformas)||void 0===r?void 0:r.join(", "),t=null===O||void 0===O||null===(s=O.genres)||void 0===s?void 0:s.map((function(e){return e.name})).join(", "));return Object(d.jsxs)("div",{className:W.a.container,children:[Object(d.jsxs)(j.b,{to:"/home",children:[" ",Object(d.jsx)("button",{className:W.a.searchButton,children:"Volver"})," "]}),Object(d.jsxs)("h1",{className:W.a.title,children:["Detalles de ",null===O||void 0===O?void 0:O.nombre," "]}),O?Object(d.jsxs)("div",{className:W.a.detail,children:[Object(d.jsx)("h2",{className:W.a.subtitle,children:O.nombre}),Object(d.jsx)("img",{src:O.imagen,alt:O.nombre}),Object(d.jsxs)("p",{className:W.a.content,children:[Object(d.jsx)("strong",{children:"G\xe9neros:"})," ",t]}),Object(d.jsxs)("p",{className:W.a.content,children:[Object(d.jsx)("strong",{children:"Plataformas:"})," ",e]}),Object(d.jsxs)("p",{className:W.a.content,children:[Object(d.jsx)("strong",{children:"Rating:"})," ",O.rating]}),Object(d.jsxs)("p",{className:W.a.content,children:[Object(d.jsx)("strong",{children:"Fecha de lanzamiento:"})," ",O.fecha_lanzamiento]}),Object(d.jsxs)("p",{className:W.a.content,children:[Object(d.jsx)("strong",{children:"ID:"})," ",O.id]}),Object(d.jsxs)("p",{className:W.a.content,children:[Object(d.jsx)("strong",{children:"Descripcion:"})," ",function(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText||""}(O.descripcion)]})]}):Object(d.jsx)(x,{})]})}var ee=function(){var e=Object(m.b)();Object(a.useEffect)((function(){t()}),[]);var t=function(){G.a.get("videogames").then((function(e){return e.data})).then((function(t){e({type:F,payload:t})}))};return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{path:"/",element:Object(d.jsx)(X,{})}),Object(d.jsx)(i.a,{path:"/home",element:Object(d.jsx)(Y,{})}),Object(d.jsx)(i.a,{path:"/videogame/:id",element:Object(d.jsx)($,{})}),Object(d.jsx)(i.a,{path:"/create-videogame",element:Object(d.jsx)(V,{})})]})})},te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},ne=n(11),ae={videogames:[],videogamesFiltered:[],selectedSource:"",selectedGenre:"",searchResults:[]},ce=function(e,t){return Object(ne.a)(e).sort((function(e,n){return"A-Z"===t?e.nombre.localeCompare(n.nombre):n.nombre.localeCompare(e.nombre)}))},re=function(e,t){return Object(ne.a)(e).sort((function(e,n){return"Menor a mayor"===t?e.rating-n.rating:n.rating-e.rating}))},se=n(43),ie=n(48),oe=Object(se.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(Z.a)(Object(Z.a)({},e),{},{videogames:t.payload});case S:var n,a;return"API"===e.selectedSource||"DB"===e.selectedSource?(n=ce(e.videogamesFiltered,t.payload),a=e.searchResults.length>0?ce(e.searchResults,t.payload):[],Object(Z.a)(Object(Z.a)({},e),{},{videogamesFiltered:n,searchResults:a})):(n=ce(e.videogames,t.payload),a=e.searchResults.length>0?ce(e.searchResults,t.payload):[],Object(Z.a)(Object(Z.a)({},e),{},{videogames:n,searchResults:a}));case T:var c,r;return"API"===e.selectedSource||"DB"===e.selectedSource?(c=re(e.videogamesFiltered,t.payload),r=e.searchResults.length>0?re(e.searchResults,t.payload):[],Object(Z.a)(Object(Z.a)({},e),{},{videogamesFiltered:c,searchResults:r})):(c=re(e.videogames,t.payload),r=e.searchResults.length>0?re(e.searchResults,t.payload):[],Object(Z.a)(Object(Z.a)({},e),{},{videogames:c,searchResults:r}));case R:return"AMBOS"===t.payload?Object(Z.a)(Object(Z.a)({},e),{},{selectedSource:t.payload}):"API"===t.payload?Object(Z.a)(Object(Z.a)({},e),{},{selectedSource:t.payload,videogamesFiltered:Object(ne.a)(e.videogames).filter((function(e){return!isNaN(e.id)}))}):"DB"===t.payload?Object(Z.a)(Object(Z.a)({},e),{},{selectedSource:t.payload,videogamesFiltered:Object(ne.a)(e.videogames).filter((function(e){return isNaN(e.id)}))}):e;case E:return Object(Z.a)(Object(Z.a)({},e),{},{selectedGenre:t.payload});case A:return Object(Z.a)(Object(Z.a)({},e),{},{searchResults:t.payload});case D:return Object(Z.a)(Object(Z.a)({},e),{},{searchResults:[]});default:return e}}),Object(se.a)(ie.a)),le=oe;G.a.defaults.baseURL="https://pi-back-deploy-production1.up.railway.app/",s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(m.a,{store:le,children:Object(d.jsx)(j.a,{children:Object(d.jsx)(ee,{})})})}),document.getElementById("root")),te()}},[[63,1,2]]]);
//# sourceMappingURL=main.490059e0.chunk.js.map
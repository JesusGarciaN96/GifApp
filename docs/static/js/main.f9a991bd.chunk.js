(this["webpackJsonpgif-app-herrera"]=this["webpackJsonpgif-app-herrera"]||[]).push([[0],{14:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(8),c=a.n(n),i=a(2),s=a(9),o=(a(14),a(0));var u=function(e){var t=e.addCategory,a=Object(r.useState)(""),n=Object(i.a)(a,2),c=n[0],u=n[1];return Object(o.jsxs)("form",{className:"add-category",onSubmit:function(e){e.preventDefault(),c&&(t((function(e){return[c].concat(Object(s.a)(e))})),u(""))},children:[Object(o.jsx)("input",{className:"add-category__search-box",type:"text",value:c,onChange:function(e){var t=e.target;return u(t.value)},placeholder:"Agregar Categoria"}),Object(o.jsx)("button",{className:"add-category__button",type:"submit",children:"Agregar Categoria"})]})},d=a(3),l=a.n(d),g=a(6),j=function(){var e=Object(g.a)(l.a.mark((function e(t){var a,r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=15;break}return e.prev=1,e.next=4,fetch("https://api.giphy.com/v1/gifs/search?api_key=".concat("BQhSthjbP9NOXgxUL6W5PsjbtuKfXEa8","&q=").concat(encodeURI(t),"&limit=10"));case 4:return e.next=6,e.sent.json();case 6:return a=e.sent,r=a.data,n=r.map((function(e){return{id:e.id,title:e.title,urlGif:e.images.downsized.url}})),e.abrupt("return",n);case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();a(17);function f(e){var t=e.category,a=function(e){var t=Object(r.useState)({data:[],loading:!0}),a=Object(i.a)(t,2),n=a[0],c=a[1];return Object(r.useEffect)((function(){Object(g.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j(e);case 3:a=t.sent,c({data:a,loading:!1}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}),[]),n}(t),n=a.data,c=a.loading;return Object(o.jsxs)(o.Fragment,{children:[c&&Object(o.jsx)("h2",{children:"Cargando Im\xe1genes..."}),Object(o.jsxs)("div",{className:"gif-grid animate__animated animate__slideInUp",children:[Object(o.jsx)("h2",{className:"gif-grid__title",children:t}),Object(o.jsx)("div",{className:"gif-grid__grid",children:n.map((function(e){return Object(o.jsxs)("div",{className:"gif-grid__container",children:[Object(o.jsx)("h5",{className:"gif-grid__gif-title",children:e.title.toUpperCase()}),Object(o.jsx)("img",{className:"gif-grid__gif",src:e.urlGif,alt:e.title})]},e.id)}))})]})]})}f.defaultProps={category:""};var p=f;var b=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{style:{textAlign:"center"},children:"Giphy Application"}),Object(o.jsx)(u,{addCategory:n}),Object(o.jsx)("hr",{}),a.map((function(e){return Object(o.jsx)(p,{category:e},e)}))]})};a(18);c.a.render(Object(o.jsx)(b,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.f9a991bd.chunk.js.map
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{116:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c),i=(a(88),a(65));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(i.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},21:function(e,t,a){"use strict";(function(e){a.d(t,"c",(function(){return u})),a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return p})),a.d(t,"e",(function(){return f})),a.d(t,"d",(function(){return h}));var n=a(31),r=a.n(n),c=a(45),o=a(46),i=a.n(o),s=a(34),l=a.n(s),u="SEARCH_SET",m="SEARCH_RESULTS",p="AUTHENTICATE",d=null;function f(t){var a=t.query;return function(t){t({type:u,payload:a}),clearTimeout(d),setTimeout(Object(c.a)(r.a.mark((function n(){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.axios.get("/questions/search",{params:{query:a}});case 2:c=n.sent,t({type:m,payload:c.data.questions});case 4:case"end":return n.stop()}}),n)}))),400)}}function h(e){var t=e.userName,a=e.password;return function(){var e=Object(c.a)(r.a.mark((function e(n){var c,o,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o={},a){e.next=6;break}return e.next=4,i.a.get("token");case 4:c=e.sent,o["x-auth-token"]=c;case 6:return e.next=8,l.a.post("https://api.askru.tech/api/users/authenticate",{userName:t,password:a},{headers:o});case 8:s=e.sent,c||i.a.set("token",s.data.token),n({type:p,payload:s.data});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}).call(this,a(28))},44:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s}));var n=a(35),r=a(21);function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(a,!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){switch(t.type){case r.c:return o({},e,{search:t.payload});case r.b:return o({},e,{searchResults:t.payload});case r.a:return o({},e,{userId:t.payload.userId});default:return e}}var s={search:"",searchResults:[],userId:null}},65:function(e,t,a){"use strict";(function(e){var n=a(0),r=a.n(n),c=(a(89),a(41)),o=a(50),i=a(123),s=a(34),l=a.n(s),u=a(29),m=a(66),p=a(44),d=a(14),f=a(22),h=a(12),b=a(68),E=a(72),v=a(73),g=a(74),y=Object(o.a)({palette:{primary:{main:"#a71136"}}}),O=Object(u.c)(p.a,p.b,Object(u.a)(m.a));e.axios=l.a.create({baseURL:"https://api.askru.tech/api/"});var j=Object(d.b)((function(e){return{userId:e.userId}}))((function(e){return e.userId?r.a.createElement("div",{className:"Content"},r.a.createElement(f.a,null,r.a.createElement(b.a,null),r.a.createElement(c.a,{container:"container",direction:"row",justify:"center",alignItems:"center"},r.a.createElement(c.a,{item:"item",xs:12,md:8},r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/question/:id",component:g.a}),r.a.createElement(h.a,{path:"/",component:v.a})))))):r.a.createElement(E.a,null)}));t.a=function(){return r.a.createElement(d.a,{store:O},r.a.createElement(i.a,{theme:y},r.a.createElement("div",{className:"App"},r.a.createElement(j,null))))}}).call(this,a(28))},68:function(e,t,a){"use strict";var n=a(35),r=a(0),c=a.n(r),o=a(75),i=a(8),s=a(22),l=a(118),u=a(41),m=a(119),p=a(25),d=a(79),f=a(71),h=a.n(f),b=a(14),E=a(21),v=a(12),g=Object(o.a)((function(e){return{toolbar:{},grow:{flexGrow:1},title:{fontWeight:400},menuButton:{marginRight:e.spacing(2)},search:Object(n.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(i.b)(e.palette.common.black,.05),"&:hover":{backgroundColor:Object(i.b)(e.palette.common.black,.08)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:{padding:e.spacing(1,1,1,7)}}}));t.a=Object(b.b)((function(e){return{search:e.search}}))(Object(v.f)((function(e){var t=g();return c.a.createElement("div",{className:t.grow},c.a.createElement(l.a,{position:"fixed",elevation:0,className:t.toolbar},c.a.createElement(u.a,{container:"container",direction:"row",justify:"center",alignItems:"center"},c.a.createElement(u.a,{item:"item",xs:12,md:8},c.a.createElement(m.a,{disableGutters:!0},c.a.createElement(s.b,{to:"/",className:"fake-link"},c.a.createElement(p.a,{variant:"h6",className:t.title,noWrap:"noWrap"},"Ask",c.a.createElement("b",null,"RU"))),c.a.createElement("div",{className:t.grow}),c.a.createElement("div",{className:t.search},c.a.createElement("div",{className:t.searchIcon},c.a.createElement(h.a,null)),c.a.createElement(d.a,{placeholder:"Search\u2026",value:e.search,onChange:function(t){"/"!==e.history.location.pathname&&e.history.push("/"),e.dispatch(Object(E.e)({query:t.target.value}))},classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}})))))))})))},72:function(e,t,a){"use strict";var n=a(30),r=a(0),c=a.n(r),o=a(75),i=a(42),s=a(43),l=a(25),u=a(76),m=a(120),p=a(14),d=a(21),f=Object(o.a)((function(e){return{container:{display:"flex",height:"100vh",alignItems:"center",justifyContent:"center"},title:{fontWeight:400,textAlign:"center"},fullWidth:{width:"100%"},card:{height:300,width:400,display:"flex",alignItems:"center"},cardContent:{display:"flex",flexDirection:"column",height:200,width:"100%",justifyContent:"space-between"}}}));t.a=Object(p.b)((function(e){return{searchResults:e.searchResults}}))((function(e){var t=f(),a=Object(r.useState)(""),o=Object(n.a)(a,2),p=o[0],h=o[1],b=Object(r.useState)(""),E=Object(n.a)(b,2),v=E[0],g=E[1];function y(){e.dispatch(Object(d.d)({userName:p,password:v}))}return Object(r.useEffect)((function(){y()}),[]),c.a.createElement("div",{className:t.container},c.a.createElement(i.a,{elevation:0,className:t.card},c.a.createElement(s.a,{className:t.cardContent},c.a.createElement(l.a,{variant:"h4",className:t.title,noWrap:"noWrap"},"Ask",c.a.createElement("b",null,"RU")),c.a.createElement(u.a,{className:t.fullWidth,placeholder:"username",value:p,onChange:function(e){return h(e.target.value)}}),c.a.createElement(u.a,{className:t.fullWidth,placeholder:"password",type:"password",value:v,onChange:function(e){return g(e.target.value)}}),c.a.createElement(m.a,{variant:"contained",color:"primary",onClick:y,className:t.button},"Default"))))}))},73:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(42),o=a(43),i=a(25),s=a(14),l=a(22);t.a=Object(s.b)((function(e){return{searchResults:e.searchResults}}))((function(e){return r.a.createElement(n.Fragment,null,e.searchResults.map((function(e){return r.a.createElement(l.b,{className:"fake-link",to:"/question/".concat(e._id)},r.a.createElement(c.a,{elevation:0},r.a.createElement(o.a,null,r.a.createElement(i.a,{variant:"h5",component:"h2",gutterBottom:"gutterBottom"},e.title),r.a.createElement(i.a,{color:"textSecondary"},e.body))),r.a.createElement("br",null))})))}))},74:function(e,t,a){"use strict";(function(e){var n=a(30),r=a(0),c=a.n(r),o=a(42),i=a(43),s=a(25),l=a(77),u=a(121),m=a(122),p=a(14);t.a=Object(p.b)((function(e){return{searchResults:e.searchResults}}))((function(t){var a=Object(r.useState)(),p=Object(n.a)(a,2),d=p[0],f=p[1];return Object(r.useEffect)((function(){e.axios.get("/questions/oneById",{params:{_id:t.match.params.id}}).then((function(e){f(e.data.question)}))}),[t.match.params.id]),d?c.a.createElement(r.Fragment,null,c.a.createElement(o.a,{elevation:0},c.a.createElement(i.a,null,c.a.createElement(s.a,{variant:"h5",component:"h2",gutterBottom:"gutterBottom"},d.title),c.a.createElement(s.a,{color:"textSecondary"},d.body))),d.advice.map((function(e){return c.a.createElement(r.Fragment,null,c.a.createElement("br",null),c.a.createElement(o.a,{elevation:0},c.a.createElement(i.a,null,c.a.createElement(s.a,{color:"textSecondary",gutterBottom:"gutterBottom"},d.body),c.a.createElement(l.a,{size:"small"},c.a.createElement(u.a,{fontSize:"inherit"})),c.a.createElement(l.a,{size:"small"},c.a.createElement(m.a,{fontSize:"inherit"})))))}))):c.a.createElement("div",null)}))}).call(this,a(28))},83:function(e,t,a){e.exports=a(116)},88:function(e,t,a){},89:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.7b54017f.chunk.js.map
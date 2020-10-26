(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{106:function(e,t,a){e.exports=a(217)},111:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},118:function(e,t,a){},214:function(e,t,a){},216:function(e,t,a){},217:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),l=(a(111),a(26)),s=a.n(l),i=a(39),u=a(14),m=a(251),d=a(252),f=a(259),h=a(245),v=a(249),p=a(58),b=a(219);a(113);var g=function(e){var t=e.className;return r.a.createElement("div",{className:"circle ".concat(t)},r.a.createElement("div",{className:"glow"}))};a(114);var E=function(e){var t=e.title,a=e.cases,n=e.total,c=e.colorClass,o=e.active,l=Object(p.a)(e,["title","cases","total","colorClass","active"]);return r.a.createElement(h.a,{className:"infoBox ".concat(c),onClick:l.onClick},r.a.createElement(v.a,null,r.a.createElement(b.a,{className:"infoBox-title",color:"textSecondary"},t),r.a.createElement("h2",{className:"infoBox-cases"},a),r.a.createElement(b.a,{className:"infoBox-total",color:"textSecondary"},"Total: ",n),r.a.createElement(g,{className:o?"".concat(c,"-selected"):""})))},y=(a(118),a(257)),O=a(258),j=a(98),C=a(18),k=a.n(C),N=a(254),w=a(256),x=a(92),S={cases:{hex:"#ff6a3c",multiplier:800},recovered:{hex:"#41db4b",multiplier:1200},deaths:{hex:"#b40224",multiplier:2e3}},I={cases:{backgroundColor:"rgba(255, 106, 60, .5)",borderColor:"rgba(255, 106, 60, 1)"},recovered:{backgroundColor:"rgba(65, 219, 75, .5)",borderColor:"rgba(65, 219, 75, 1)"},deaths:{backgroundColor:"rgba(180, 2, 36, .5)",borderColor:"rgba(180, 2, 36, 1)"}},B=function(e){var t=Object(j.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},D=function(e){return e?"+".concat(k()(e).format("0.0a")):"+0"},A=function(e){var t=e.countries,a=e.casesType,n=e.center,c=e.zoom;return r.a.createElement("div",{className:"map"},r.a.createElement(y.a,{center:n,zoom:c,minZoom:1,maxZoom:5},r.a.createElement(O.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e,a){return r.a.createElement(N.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,color:S[t].hex,fillColor:S[t].hex,radius:Math.sqrt(e[t])*S[t].multiplier,key:a},r.a.createElement(w.a,null,r.a.createElement("div",{className:"info-container"},r.a.createElement("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),r.a.createElement("div",{className:"info-name"},e.country),r.a.createElement("div",{className:"info-confirmed"},"Cases: ",k()(e.cases).format("0,0")),r.a.createElement("div",{className:"info-recovered"},"Recovered: ",k()(e.recovered).format("0,0")),r.a.createElement("div",{className:"info-deaths"},"Deaths: ",k()(e.deaths).format("0,0")))))}))}(t,a)))};a(214);var F=function(e){var t=e.countries;return r.a.createElement("div",{className:"table"},t.map((function(e,t){var a=e.country,n=e.cases;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,a),r.a.createElement("td",null,r.a.createElement("strong",null,k()(n).format("0,0"))))})))},T={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return k()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return k()(e).format("0a")}}}]}},M=function(e,t){var a,n=[];for(var r in e.cases){if(a){var c={x:r,y:e[t][r]-a};n.push(c)}a=e[t][r]}return n};var W=function(e){var t=e.casesType,a=Object(p.a)(e,["casesType"]),c=Object(n.useState)({}),o=Object(u.a)(c,2),l=o[0],m=o[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var a=M(e,t);m(a)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),r.a.createElement("div",{className:a.className},(null===l||void 0===l?void 0:l.length)>0&&function(e,t,a){return r.a.createElement(x.Line,{data:{datasets:[{backgroundColor:I[a].backgroundColor,borderColor:I[a].borderColor,data:e}]},options:t})}(l,T,t))},z=a(250),L=a(255);var R=function(e){var t=e.isChecked,a=e.onChange;return r.a.createElement("div",{className:"switch"},r.a.createElement(z.a,{control:r.a.createElement(L.a,{checked:t,onChange:a}),label:t?"Dark Mode":"Light Mode"}))},_=a(56),P=a(94);function U(){var e=Object(P.a)(["\n  body {\n    margin: 0;\n    background: ",";\n    color: ",";\n    font-family: -apple-system, BlinkMacSystemFont, 'Ubuntu', 'Roboto', 'Segoe UI', sans-serif;\n    transition: all 0.50s linear;\n  }\n  "]);return U=function(){return e},e}var J=Object(_.b)(U(),(function(e){return e.theme.body}),(function(e){return e.theme.text})),Y={body:"#eaeaea",text:"#363537",toggleBorder:"#eaeaea",background:"#363537"},Z={body:"#363537",text:"#FAFAFA",toggleBorder:"#6B8096",background:"#999"};a(215),a(216);var q=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)("Worldwide"),l=Object(u.a)(o,2),p=l[0],b=l[1],g=Object(n.useState)({}),y=Object(u.a)(g,2),O=y[0],j=y[1],C=Object(n.useState)([]),k=Object(u.a)(C,2),N=k[0],w=k[1],x=Object(n.useState)({lat:34.80746,lng:30.4796}),S=Object(u.a)(x,2),I=S[0],T=S[1],M=Object(n.useState)(2),z=Object(u.a)(M,2),L=z[0],P=z[1],U=Object(n.useState)([]),q=Object(u.a)(U,2),V=q[0],G=q[1],H=Object(n.useState)("cases"),K=Object(u.a)(H,2),Q=K[0],X=K[1],$=Object(n.useState)(!1),ee=Object(u.a)($,2),te=ee[0],ae=ee[1],ne=Object(n.useState)("light"),re=Object(u.a)(ne,2),ce=re[0],oe=re[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){j(e),console.log("%cAPI_WORLD_INFO","background-color:#008B8B; font-size: 2rem; color:white;",e)}))}),[]),Object(n.useEffect)((function(){le()}),[]),Object(n.useEffect)((function(){var e=window.localStorage.getItem("theme");e?(oe(e),ae("light"!==e)):(oe("light"),ae(!1),window.localStorage.setItem("theme","light"))}),[]);var le=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),a=B(e);w(a),G(e),c(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,b(a),n="Worldwide"===a?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(a),e.next=5,fetch(n).then((function(e){return e.json()})).then((function(e){b(a),j(e),"Worldwide"!==a?(T([e.countryInfo.lat,e.countryInfo.long]),P(4)):(T({lat:34.80746,lng:-40.4796}),P(2)),console.log("%cAPI_".concat(e.country,"_INFO"),"background-color:#DC143C; font-size: 2rem; color:white;",e)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(_.a,{theme:"light"===ce?Y:Z},r.a.createElement(r.a.Fragment,null,r.a.createElement(J,null),r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app-left"},r.a.createElement("div",{className:"app-header"},r.a.createElement("h1",null,"COVID-19 UPDATE"),r.a.createElement(R,{isChecked:te,onChange:function(){oe("light"===ce?"dark":"light"),ae(!te),te?(console.log("Light"),window.localStorage.setItem("theme","light")):(console.log("Dark"),window.localStorage.setItem("theme","dark"))}}),r.a.createElement(m.a,{className:"app-dropdown"},r.a.createElement(d.a,{variant:"outlined",value:p,onChange:se},r.a.createElement(f.a,{value:"Worldwide"},"Worldwide"),a.map((function(e,t){return r.a.createElement(f.a,{value:e.value,key:t},e.name)}))))),r.a.createElement("div",{className:"app-stats"},r.a.createElement(E,{title:"Cases",cases:D(O.todayCases),total:D(O.cases),onClick:function(e){return X("cases")},active:"cases"===Q,colorClass:"orange"}),r.a.createElement(E,{title:"Recovered",cases:D(O.todayRecovered),total:D(O.recovered),onClick:function(e){return X("recovered")},active:"recovered"===Q,colorClass:"green"}),r.a.createElement(E,{title:"Deaths",cases:D(O.todayDeaths),total:D(O.deaths),onClick:function(e){return X("deaths")},active:"deaths"===Q,colorClass:"red"})),r.a.createElement(A,{casesType:Q,countries:V,center:I,zoom:L})),r.a.createElement(h.a,{className:"app-right"},r.a.createElement(v.a,null,r.a.createElement("h3",null,"Live Cases by Country"),r.a.createElement(F,{countries:N}),r.a.createElement("h3",{className:"app-graphTitle"},"Worldwide new ",Q," "),r.a.createElement(W,{className:"app-graph",casesType:Q,colorClass:["orange","green","red"]}))))))};o.a.render(r.a.createElement(q,null),document.getElementById("root"))}},[[106,1,2]]]);
//# sourceMappingURL=main.c9c039f3.chunk.js.map
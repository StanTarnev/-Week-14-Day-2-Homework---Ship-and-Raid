(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(24)},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),l=n.n(c),i=n(5),o=n(6),u=n(8),s=n(7),m=n(9),p=n(26),E=n(27),f=n(28),h=n(25),d=function(e){return r.a.createElement("header",null,r.a.createElement("img",{src:"/images/pirtate-flag.jpg",alt:"Logo"}),r.a.createElement("ul",null,r.a.createElement("li",{className:"navLink"},r.a.createElement(h.a,{to:"/pirates"},"Pirates")),r.a.createElement("li",{className:"navLink"},r.a.createElement(h.a,{to:"/ships"},"Ships")),r.a.createElement("li",{className:"navLink"},r.a.createElement(h.a,{to:"/raids"},"Raids"))))},v=function(e){return r.a.createElement("div",null,"I'm a Pirate!")},b=function(e){if(0===e.pirates.length)return r.a.createElement("p",null,"Loading...");e.pirates.map(function(e,t){return r.a.createElement("li",{key:t,className:"component-item"},r.a.createElement("div",{className:"component"},r.a.createElement(v,{pirate:e})))});return r.a.createElement("div",null,"Im a list of pirates!")},j=function(){function e(){Object(i.a)(this,e)}return Object(o.a)(e,[{key:"get",value:function(e){return fetch(e).then(function(e){return e.json()})}}]),e}(),O=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={pirates:[]},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){(new j).get("/api/pirates").then(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement(p.a,null,r.a.createElement(a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement(f.a,{render:function(t){return r.a.createElement(b,{pirates:e.state.pirates})}}))))}}]),t}(a.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(E.a,null,r.a.createElement(f.a,{exact:!0,path:"/pirates",component:O})))))}}]),t}(a.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.8097934e.chunk.js.map
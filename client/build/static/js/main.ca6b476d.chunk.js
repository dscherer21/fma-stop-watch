(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(4),r=n.n(c),i=(n(11),n(2)),l=(n(12),n(19));var s=function(){var e=Object(o.useState)(0),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(o.useState)(0),s=Object(i.a)(r,2),u=s[0],d=s[1],f=Object(o.useState)(0),m=Object(i.a)(f,2),v=m[0],b=m[1],h=Object(o.useState)(),g=Object(i.a)(h,2),p=g[0],w=g[1],k=Object(o.useState)(!1),E=Object(i.a)(k,2),j=E[0],S=E[1],N=("0"+n).slice(-2),O=("0"+u).slice(-2),y=("0"+v).slice(-2);return n>59&&(d((function(e){return e+1})),c(0)),u>59&&(b((function(e){return e+1})),d(0)),a.a.createElement("header",{className:"container"},a.a.createElement("div",{className:"row justify-content-md-center"},a.a.createElement("div",{className:"col-md-6 col-xs-12"},a.a.createElement(l.a,null,a.a.createElement("div",{className:"fontgradient"},"Fullmetal Alchemist Stopwatch")),a.a.createElement("div",{className:"jumbotron"},a.a.createElement("p",{className:"fontgradient"},y,":",O,":",N)),a.a.createElement("button",{className:"btn btn-primary",onClick:function(){console.log("Start Timer Button clicked!"),!1===j&&(w(setInterval((function(){return c((function(e){return e+1}))}),1e3)),S(!0))}},"Start"),a.a.createElement("button",{className:"btn btn-danger",onClick:function(){console.log("Stop Button clicked!"),clearInterval(p),S(!1)}},"Stop"),a.a.createElement("button",{className:"btn btn-warning",onClick:function(){console.log("Reset Button clicked!"),clearInterval(p),S(!1),c(0),d(0),b(0)}},"Reset"))))};n(15);var u=function(){return a.a.createElement("div",{className:"App bg"},a.a.createElement(s,{path:"/"}))},d=(n(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function f(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(a.a.createElement(u,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");d?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):f(t,e)}))}}()}],[[6,1,2]]]);
//# sourceMappingURL=main.ca6b476d.chunk.js.map
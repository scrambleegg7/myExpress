(this.webpackJsonpapp2=this.webpackJsonpapp2||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),s=n.n(r),c=(n(12),n(3)),l=n(4),i=n(6),u=n(5),m=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={passwords:[]},e.getPasswords=function(){fetch("/api/passwords").then((function(e){return e.json()})).then((function(t){return e.setState({passwords:t})}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getPasswords()}},{key:"render",value:function(){var e=this.state.passwords;return o.a.createElement("div",{className:"App"},e.length?o.a.createElement("div",null,o.a.createElement("h1",null,"5 Passwords."),o.a.createElement("ul",{className:"passwords"},e.map((function(e,t){return o.a.createElement("li",{key:t},e)}))),o.a.createElement("button",{className:"more",onClick:this.getPasswords},"Get More")):o.a.createElement("div",null,o.a.createElement("h1",null,"No passwords :("),o.a.createElement("button",{className:"more",onClick:this.getPasswords},"Try Again?")))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.3eeb95ba.chunk.js.map
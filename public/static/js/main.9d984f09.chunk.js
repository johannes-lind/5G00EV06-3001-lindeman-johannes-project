(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{170:function(e,t,n){},171:function(e,t,n){},496:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),a=n(32),i=n.n(a),r=(n(170),n(45)),o=(n(171),n(11)),l=n.n(o),j=n(27),h=n(28),d=n(29),b=n(31),u=n(30),O=n(22),p=n.n(O);function x(e,t,n){for(var c=JSON.parse(localStorage.getItem("ids"))||[],s=JSON.parse(localStorage.getItem("titles"))||[],a=JSON.parse(localStorage.getItem("images"))||[],i=!1,r=0;r<c.length;r++)c[r]===e&&(i=!0,console.log(i));i||(c.push(e),s.push(t),a.push(n)),localStorage.setItem("ids",JSON.stringify(c)),localStorage.setItem("titles",JSON.stringify(s)),localStorage.setItem("images",JSON.stringify(a))}n(50);var f=n(0),g=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(h.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s)))._isMounted=!1,e.state={info:[],name:" ",ratings:[],onList:[],id:" "},e.added=function(){e.setState({onList:[Object(f.jsx)(f.Fragment,{children:"\u2705"})]})},e.search=Object(j.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get(e.props.URL).then((function(t){var n=t.data,c=n.Poster;if(e._isMounted){e.setState({info:[Object(f.jsxs)("div",{children:[Object(f.jsxs)("h2",{children:[Object(f.jsxs)("p",{className:"header",children:[n.Title," (",n.Year,")",Object(f.jsxs)("p",{children:[Object(f.jsx)("button",{className:"b",onClick:function(){return x(e.state.id,e.state.name,c),e.added()},children:"Add to Watchlist"}),Object(f.jsx)("small",{children:e.state.onList})]})]}),Object(f.jsx)("img",{align:"left",src:c,alt:"poster",width:"300",height:"420"},"0")]}),Object(f.jsxs)("section",{className:"infoarticle",children:[Object(f.jsxs)("p",{children:["Rated: ",n.Rated]}),Object(f.jsxs)("p",{children:["Runtime: ",n.Runtime]}),Object(f.jsxs)("p",{children:["Starring: ",n.Actors]}),Object(f.jsxs)("p",{children:["Directed by: ",n.Director]}),Object(f.jsxs)("p",{children:["Writer: ",n.Writer]}),Object(f.jsxs)("p",{children:["Box Office: ",n.BoxOffice]}),Object(f.jsx)("p",{children:Object(f.jsx)("em",{children:n.Plot})}),Object(f.jsxs)("p",{children:["Awards: ",n.Awards]})]})]})],name:n.Title,id:n.imdbID});try{var s=[n.Ratings[0].Source,n.Ratings[0].Value],a=[n.Ratings[1].Source,n.Ratings[1].Value],i=[n.Ratings[2].Source,n.Ratings[2].Value];e.setState({ratings:[Object(f.jsxs)("ul",{children:[Object(f.jsxs)("li",{children:[s[0],": ",s[1]]}),Object(f.jsxs)("li",{children:[a[0],": ",a[1]]}),Object(f.jsxs)("li",{children:[i[0],": ",i[1]]})]})]})}catch(r){e.setState({ratings:[Object(f.jsx)("p",{children:Object(f.jsx)("em",{children:"Ratings not available"})})]})}}}));case 2:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.setState({onList:[]}),this._isMounted=!0;try{this.search(),this.props.set(this.state.name)}catch(e){this.setState({info:Object(f.jsx)("p",{children:Object(f.jsx)("em",{children:"No results found "})})}),console.log(e)}}},{key:"componentDidUpdate",value:function(e,t){try{t.info!==this.state.info&&this.search()}catch(n){this.setState({info:Object(f.jsx)("p",{children:" No results found "})}),console.log(n)}}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsxs)("table",{children:[this.state.info," "]}),Object(f.jsxs)("p",{className:"ratings",children:[" RATINGS ",this.state.ratings]})]})}}]),n}(s.a.Component),m=n(10),v=n(5),S=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(h.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={posters:[]},e.ClearList=function(){localStorage.clear(),e.setState({posters:Object(f.jsx)("p",{children:" "})})},e.change=function(t){var n="/api1?i=".concat(t);e.props.set(n)},e.remove=function(t,n){for(var c=JSON.parse(localStorage.getItem("ids")),s=JSON.parse(localStorage.getItem("titles")),a=JSON.parse(localStorage.getItem("images")),i=[],r=[],o=[],l=0;l<c.length;l++)c[l]!==t&&(i.push(c[l]),r.push(s[l]),o.push(a[l]));localStorage.setItem("ids",JSON.stringify(i)),localStorage.setItem("titles",JSON.stringify(r)),localStorage.setItem("images",JSON.stringify(o)),console.log(i),e.setter(i,r,o)},e.setter=function(t,n,c){for(var s=[],a=function(a){s[a]=Object(f.jsxs)("td",{children:[Object(f.jsxs)(m.b,{to:"/Search",onClick:function(){return e.change(t[a])},children:[Object(f.jsx)("img",{src:c[a],alt:"poster",width:"200",height:"280",onClick:function(){"/api1?i=".concat(t[a])}},a),Object(f.jsx)(v.b,{path:"/Search",children:Object(f.jsx)(g,{URL:"/api1?i=".concat(t[a])})})]}),Object(f.jsxs)("p",{"text-align":"center",children:[n[a],Object(f.jsx)("p",{children:Object(f.jsx)("button",{className:"b",onClick:function(){return e.remove(t[a],c[a])},children:"Delete"})})]})]})},i=0;i<c.length;i++)a(i);if(c.length<6)e.setState({posters:[Object(f.jsx)("table",{className:"list",children:s})]});else{for(var r=[],o=0;o<c.length;o++)o%5===0&&r.push(Object(f.jsx)("tr",{})),r.push(s[o]);e.setState({posters:[Object(f.jsx)("table",{className:"list",children:r})]})}},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){try{var e=JSON.parse(localStorage.getItem("ids")),t=JSON.parse(localStorage.getItem("titles")),n=JSON.parse(localStorage.getItem("images"));console.log(e),console.log(n),this.setState({names:e}),this.setter(e,t,n)}catch(c){console.log(c),this.setState({posters:Object(f.jsx)("p",{children:" List empty "})})}}},{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"posters",children:[Object(f.jsx)("p",{align:"center",children:Object(f.jsx)("button",{align:"center",className:"b",onClick:function(){return e.ClearList()},children:"Clear List"})}),this.state.posters]})}}]),n}(s.a.Component),y=(n(118),function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(h.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={info:[]},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(e){this.search(e)}},{key:"search",value:function(){var e=Object(j.a)(l.a.mark((function e(t){var n,c,s,a=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n="/api2",c=function(e){s(e),console.log(e)},s=function(e){n="/api1?i=".concat(e),a.props.set(n)},p.a.get(n).then((function(e){for(var t=e.data,n=[],s=[],i=[],r=[],o=function(e){n[e]=t.items[e].image,i[e]=t.items[e].title,i[e].length>17&&(i[e]=i[e].slice(0,14),i[e]="".concat(i[e],"...")),r[e]=t.items[e].id,s[e]=Object(f.jsxs)("td",{children:[Object(f.jsxs)(m.b,{to:"/Search",children:[Object(f.jsx)("img",{onClick:function(){return c(r[e])},src:n[e],alt:"poster",width:"170",height:"230"},t.items[e].id),Object(f.jsx)(v.b,{path:"/Search",children:Object(f.jsx)(g,{URL:"/api1?i=".concat(r[e])})})]}),Object(f.jsx)("p",{"text-align":"center",children:i[e]}),Object(f.jsx)("p",{children:Object(f.jsx)("button",{className:"b",onClick:function(){return x(r[e],i[e],n[e])},children:"Add to Watchlist"})})]})},l=0;l<t.items.length;l++)o(l);for(var j=[],h=0;h<s.length;h++)h%4===0&&j.push(Object(f.jsx)("tr",{})),j.push(s[h]);a.setState({info:[Object(f.jsx)("table",{className:"list",children:j})]})}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[" ",Object(f.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),Object(f.jsx)("header",{className:"header","text-align":"center",children:"Coming Soon"}),Object(f.jsx)("div",{className:"posters",children:this.state.info})]})}}]),n}(s.a.Component)),N=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(h.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={info:[]},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(e){try{this.search(e)}catch(t){this.setState({info:Object(f.jsx)("p",{children:" "})}),console.log(t)}}},{key:"search",value:function(){var e=Object(j.a)(l.a.mark((function e(t){var n,c,s=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n="/api3",c=function(e){n="/api1?i=".concat(e),s.props.set(n)};try{p.a.get(n).then((function(e){for(var t=e.data,n=[],a=[],i=[],r=[],o=function(e){n[e]=t.items[e].image,r[e]=t.items[e].title,r[e].length>17&&(r[e]=r[e].slice(0,14),r[e]="".concat(r[e],"...")),console.log(t),i[e]=t.items[e].id,a[e]=Object(f.jsxs)("td",{children:[Object(f.jsxs)(m.b,{to:"/Search",onClick:function(){return c(i[e])},children:[Object(f.jsx)("img",{src:n[e],alt:"poster",width:"160",height:"225"},t.items[e].id),Object(f.jsx)(v.b,{path:"/Search",children:Object(f.jsx)(g,{URL:"/api1?i=".concat(i[e])})})]}),Object(f.jsx)("p",{"text-align":"center",children:r[e]})]})},l=0;l<15;l++)o(l);s.setState({info:[a[0],a[1],a[2],a[3],a[4],Object(f.jsx)("tr",{}),a[5],a[6],a[7],a[8],a[9],Object(f.jsx)("tr",{}),a[10],a[11],a[12],a[13],a[14]]})}))}catch(t){this.setState({info:Object(f.jsx)("p",{children:" Request limit exceeded! "})})}case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("header",{className:"header",children:"Most popular films "}),Object(f.jsxs)("table",{className:"list",children:[" ",this.state.info]})]})}}]),n}(s.a.Component);var k=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(h.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={info:[]},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.search()}},{key:"search",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t,n,c,s=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t="/api3",n=function(e){c(e),console.log(e)},c=function(e){t="/api1?i=".concat(e),s.props.set(t)},p.a.get(t).then((function(e){for(var t=e.data,c=[],a=[],i=[],r=[],o=function(e){c[e]=t.items[e].image,i[e]=t.items[e].title,i[e].length>17&&(i[e]=i[e].slice(0,12),i[e]="".concat(i[e],"...")),r[e]=t.items[e].id,a[e]=Object(f.jsx)("td",{children:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(m.b,{to:"/Search",children:[Object(f.jsx)("img",{onClick:function(){return n(r[e])},src:c[e],alt:"poster",width:"150",height:"200"},e),Object(f.jsx)(v.b,{path:"/Search",children:Object(f.jsx)(g,{URL:"/api1?i=".concat(r[e])})})]}),Object(f.jsxs)("p",{"text-align":"center",children:[[e+1],". ",i[e]]})]})})},l=0;l<100;l++)o(l);for(var j=[],h=0;h<a.length;h++)h%5===0&&j.push(Object(f.jsx)("tr",{})),j.push(a[h]);s.setState({info:[Object(f.jsx)("table",{className:"toplist",children:j})]})}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("header",{className:"header","text-align":"center",children:"TODAY'S TOP 100 FILMS"}),Object(f.jsxs)("div",{className:"posters",children:[" ",this.state.info]})]})}}]),n}(s.a.Component);n(22);var w=function(){var e=s.a.useState("Twin Peaks"),t=Object(r.a)(e,2),n=t[0],c=t[1],a=s.a.useState("/api1?t=".concat(n)),i=Object(r.a)(a,2),o=i[0],l=i[1],j=function(){l("/api1?t=".concat(n))};return Object(f.jsx)(m.a,{children:Object(f.jsx)("body",{children:Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)("header",{className:"App-header",children:[Object(f.jsxs)("nav",{className:"nav-link",children:[Object(f.jsxs)(m.b,{to:"/HomePage",className:"nav-link",children:["   ","Home"]}),Object(f.jsx)(f.Fragment,{children:" "}),Object(f.jsxs)(m.b,{to:"/Search",className:"nav-link",children:["    "," Search"]}),Object(f.jsx)(f.Fragment,{children:" "}),Object(f.jsxs)(m.b,{to:"/ComingSoon",className:"nav-link",children:["    "," Coming Soon"]}),Object(f.jsx)(f.Fragment,{children:" "}),Object(f.jsxs)(m.b,{to:"/Top100",className:"nav-link",children:["    ","TOP100"]}),Object(f.jsxs)(m.b,{to:"/Watchlist",className:"nav-link",children:["    "," Watchlist"]})]}),Object(f.jsxs)("p",{children:[Object(f.jsx)(m.b,{to:"/Search",children:Object(f.jsx)("button",{className:"b",onClick:j,children:"search"})}),Object(f.jsx)("input",{size:"40",className:"customInput",type:"text",placeholder:"film",onChange:function(e){c(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&j()}})]}),Object(f.jsxs)(v.d,{children:[Object(f.jsx)(v.b,{exact:!0,path:"/HomePage",children:Object(f.jsx)(N,{set:l})}),Object(f.jsx)(v.b,{path:"/Search",children:Object(f.jsx)(g,{URL:o,set:c})}),Object(f.jsx)(v.b,{path:"/ComingSoon",children:Object(f.jsx)(y,{set:l})}),Object(f.jsx)(v.b,{path:"/Top100",children:Object(f.jsx)(k,{set:l})}),Object(f.jsx)(v.b,{path:"/Watchlist",children:Object(f.jsx)(S,{set:l})}),Object(f.jsx)(v.a,{to:"/HomePage",children:Object(f.jsx)(N,{set:l})})]})]})})})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,497)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(w,{})}),document.getElementById("root")),C()},50:function(e,t,n){}},[[496,1,2]]]);
//# sourceMappingURL=main.9d984f09.chunk.js.map
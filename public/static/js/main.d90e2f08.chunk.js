(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{170:function(e,t,n){},171:function(e,t,n){},496:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),a=n(32),i=n.n(a),r=(n(170),n(45)),o=(n(171),n(10)),l=n.n(o),j=n(27),h=n(28),d=n(29),b=n(31),u=n(30),O=n(22),p=n.n(O);function m(e,t,n){for(var c=JSON.parse(localStorage.getItem("ids"))||[],s=JSON.parse(localStorage.getItem("titles"))||[],a=JSON.parse(localStorage.getItem("images"))||[],i=!1,r=0;r<c.length;r++)c[r]===e&&(i=!0,console.log(i));i||(c.push(e),s.push(t),a.push(n)),localStorage.setItem("ids",JSON.stringify(c)),localStorage.setItem("titles",JSON.stringify(s)),localStorage.setItem("images",JSON.stringify(a))}n(50);var x=n(0),g=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(h.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s)))._isMounted=!1,e.state={info:[],name:" ",ratings:[],onList:[],id:" "},e.added=function(){e.setState({onList:[Object(x.jsx)(x.Fragment,{children:"\u2705"})]})},e.search=Object(j.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get(e.props.URL).then((function(t){var n=t.data,c=n.Poster;if(e._isMounted){e.setState({info:[Object(x.jsxs)("div",{children:[Object(x.jsxs)("h2",{children:[Object(x.jsxs)("p",{className:"header",children:[n.Title," (",n.Year,")",Object(x.jsxs)("p",{children:[Object(x.jsx)("button",{className:"b",onClick:function(){return m(e.state.id,e.state.name,c),e.added()},children:"Add to Watchlist"}),Object(x.jsx)("small",{children:e.state.onList})]})]}),Object(x.jsx)("img",{align:"left",src:c,alt:"poster",width:"300",height:"420"},"0")]}),Object(x.jsxs)("section",{className:"infoarticle",children:[Object(x.jsxs)("p",{children:["Rated: ",n.Rated]}),Object(x.jsxs)("p",{children:["Runtime: ",n.Runtime]}),Object(x.jsxs)("p",{children:["Starring: ",n.Actors]}),Object(x.jsxs)("p",{children:["Directed by: ",n.Director]}),Object(x.jsxs)("p",{children:["Writer: ",n.Writer]}),Object(x.jsxs)("p",{children:["Box Office: ",n.BoxOffice]}),Object(x.jsx)("p",{children:Object(x.jsx)("em",{children:n.Plot})}),Object(x.jsxs)("p",{children:["Awards: ",n.Awards]})]})]})],name:n.Title,id:n.imdbID});try{var s=[n.Ratings[0].Source,n.Ratings[0].Value],a=[n.Ratings[1].Source,n.Ratings[1].Value],i=[n.Ratings[2].Source,n.Ratings[2].Value];e.setState({ratings:[Object(x.jsxs)("ul",{children:[Object(x.jsxs)("li",{children:[s[0],": ",s[1]]}),Object(x.jsxs)("li",{children:[a[0],": ",a[1]]}),Object(x.jsxs)("li",{children:[i[0],": ",i[1]]})]})]})}catch(r){e.setState({ratings:[Object(x.jsx)("p",{children:Object(x.jsx)("em",{children:"Ratings not available"})})]})}}}));case 2:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.setState({onList:[]}),this._isMounted=!0;try{this.search(),this.props.set(this.state.name)}catch(e){this.setState({info:Object(x.jsx)("p",{children:Object(x.jsx)("em",{children:"No results found "})})}),console.log(e)}}},{key:"componentDidUpdate",value:function(e,t){try{t.info!==this.state.info&&this.search()}catch(n){this.setState({info:Object(x.jsx)("p",{children:" No results found "})}),console.log(n)}}},{key:"componentWillUnmount",value:function(){this.props.set(this.state.name),this._isMounted=!1}},{key:"render",value:function(){return Object(x.jsxs)(x.Fragment,{children:[" ",Object(x.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),Object(x.jsxs)("table",{children:[this.state.info," "]}),Object(x.jsxs)("p",{className:"ratings",children:[" RATINGS ",this.state.ratings]})]})}}]),n}(s.a.Component),f=n(13),v=n(5),S=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(h.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={posters:[]},e.ClearList=function(){localStorage.clear(),e.setState({posters:Object(x.jsx)("p",{children:" "})})},e.change=function(t){var n="/api1?i=".concat(t);e.props.set(n)},e.remove=function(t,n){for(var c=JSON.parse(localStorage.getItem("ids")),s=JSON.parse(localStorage.getItem("titles")),a=JSON.parse(localStorage.getItem("images")),i=[],r=[],o=[],l=0;l<c.length;l++)c[l]!==t&&(i.push(c[l]),r.push(s[l]),o.push(a[l]));localStorage.setItem("ids",JSON.stringify(i)),localStorage.setItem("titles",JSON.stringify(r)),localStorage.setItem("images",JSON.stringify(o)),console.log(i),e.setter(i,r,o)},e.setter=function(t,n,c){for(var s=[],a=function(a){s[a]=Object(x.jsxs)("td",{children:[Object(x.jsxs)(f.b,{to:"/Search",className:"nav-link",onClick:function(){return e.change(t[a])},children:[Object(x.jsx)("img",{src:c[a],alt:"poster",width:"200",height:"280",onClick:function(){"/api1?i=".concat(t[a])}},a),Object(x.jsx)(v.b,{path:"/Search",children:Object(x.jsx)(g,{URL:"/api1?i=".concat(t[a])})})]}),Object(x.jsxs)("p",{"text-align":"center",children:[n[a],Object(x.jsx)("p",{children:Object(x.jsx)("button",{className:"b",onClick:function(){return e.remove(t[a],c[a])},children:"Delete"})})]})]})},i=0;i<c.length;i++)a(i);if(c.length<6)e.setState({posters:[Object(x.jsx)("table",{className:"list",children:s})]});else{for(var r=[],o=0;o<c.length;o++)o%5===0&&r.push(Object(x.jsx)("tr",{})),r.push(s[o]);e.setState({posters:[Object(x.jsx)("table",{className:"list",children:r})]})}},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){try{var e=JSON.parse(localStorage.getItem("ids")),t=JSON.parse(localStorage.getItem("titles")),n=JSON.parse(localStorage.getItem("images"));console.log(e),console.log(n),this.setState({names:e}),this.setter(e,t,n)}catch(c){console.log(c),this.setState({posters:Object(x.jsx)("p",{children:" List empty "})})}}},{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"posters",children:[" ",Object(x.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),Object(x.jsx)("p",{align:"center",children:Object(x.jsx)("button",{align:"center",className:"b",onClick:function(){return e.ClearList()},children:"Clear List"})}),this.state.posters]})}}]),n}(s.a.Component),y=(n(118),function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(h.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={info:[]},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(e){this.search(e)}},{key:"search",value:function(){var e=Object(j.a)(l.a.mark((function e(t){var n,c,s,a=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n="/api2",c=function(e){s(e),console.log(e)},s=function(e){n="/api1?i=".concat(e),a.props.set(n)},p.a.get(n).then((function(e){var t=e.data,n=[],s=[],i=[],r=[];console.log(t.items.length),console.log(t);for(var o=function(e){n[e]=t.items[e].image,i[e]=t.items[e].title,i[e].length>17&&(i[e]=i[e].slice(0,14),i[e]="".concat(i[e],"...")),r[e]=t.items[e].id,s[e]=Object(x.jsxs)("td",{children:[Object(x.jsxs)(f.b,{to:"/Search",children:[Object(x.jsx)("img",{onClick:function(){return c(r[e])},src:n[e],alt:"poster",width:"170",height:"230"},t.items[e].id),Object(x.jsx)(v.b,{path:"/Search",children:Object(x.jsx)(g,{URL:"/api1?i=".concat(r[e])})})]}),Object(x.jsx)("p",{"text-align":"center",children:i[e]}),Object(x.jsx)("p",{children:Object(x.jsx)("button",{className:"b",onClick:function(){return m(r[e],i[e],n[e])},children:"Add to Watchlist"})})]})},l=0;l<t.items.length;l++)o(l);for(var j=[],h=0;h<s.length;h++)h%4===0&&j.push(Object(x.jsx)("tr",{})),j.push(s[h]);a.setState({info:[Object(x.jsx)("table",{className:"list",children:j})]})}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(x.jsxs)(x.Fragment,{children:[" ",Object(x.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),Object(x.jsx)("header",{className:"header","text-align":"center",children:"Coming Soon"}),Object(x.jsx)("div",{className:"posters",children:this.state.info})]})}}]),n}(s.a.Component)),N=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(h.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={info:[]},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(e){try{this.search(e)}catch(t){this.setState({info:Object(x.jsx)("p",{children:" "})}),console.log(t)}}},{key:"search",value:function(){var e=Object(j.a)(l.a.mark((function e(t){var n,c,s=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n="/api3",c=function(e){n="/api1?i=".concat(e),s.props.set(n)};try{p.a.get(n).then((function(e){for(var t=e.data,n=[],a=[],i=[],r=[],o=function(e){n[e]=t.items[e].image,r[e]=t.items[e].title,r[e].length>17&&(r[e]=r[e].slice(0,14),r[e]="".concat(r[e],"...")),console.log(t),i[e]=t.items[e].id,a[e]=Object(x.jsxs)("td",{children:[Object(x.jsxs)(f.b,{to:"/Search",onClick:function(){return c(i[e])},children:[Object(x.jsx)("img",{src:n[e],alt:"poster",width:"160",height:"225"},t.items[e].id),Object(x.jsx)(v.b,{path:"/Search",children:Object(x.jsx)(g,{URL:"/api1?i=".concat(i[e])})})]}),Object(x.jsx)("p",{"text-align":"center",children:r[e]})]})},l=0;l<15;l++)o(l);s.setState({info:[a[0],a[1],a[2],a[3],a[4],Object(x.jsx)("tr",{}),a[5],a[6],a[7],a[8],a[9],Object(x.jsx)("tr",{}),a[10],a[11],a[12],a[13],a[14]]})}))}catch(t){this.setState({info:Object(x.jsx)("p",{children:" Request limit exceeded! "})})}case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("header",{className:"header",children:"Most popular films "}),Object(x.jsxs)("table",{className:"list",children:[" ",this.state.info]})]})}}]),n}(s.a.Component);var k=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(h.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={info:[]},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.search()}},{key:"search",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"/api3",p.a.get("/api3").then((function(e){var n=e.data,c=[],s=[];console.log(n),console.log(n.items[0].fullTitle),console.log(n.items[0]);for(var a=0;a<25;a++)c[a]=n.items[a].image,s[a]=Object(x.jsx)("td",{children:Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("img",{src:c[a],alt:"poster",width:"150",height:"200"},a),Object(x.jsxs)("p",{className:"list",children:[Object(x.jsxs)("small",{children:[" ",n.items[a].title]})," "]})]})});t.setState({info:[s[0],s[1],s[2],s[3],s[4],Object(x.jsx)("p",{children:" "}),s[5],s[6],s[7],s[8],s[9],Object(x.jsx)("p",{children:" "}),s[10],s[11],s[12],s[13],s[14],Object(x.jsx)("p",{children:" "}),s[15],s[16],s[17],s[18],s[19],Object(x.jsx)("p",{children:" "}),s[20],s[21],s[22],s[23],s[24]]})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("header",{children:"TODAY'S TOP 25 FILMS "}),Object(x.jsxs)("p",{children:[" ",this.state.info]})]})}}]),n}(s.a.Component);n(22);var w=function(){var e=s.a.useState("Twin Peaks"),t=Object(r.a)(e,2),n=t[0],c=t[1],a=s.a.useState("/api1?t=".concat(n)),i=Object(r.a)(a,2),o=i[0],l=i[1],j=function(){l("/api1?t=".concat(n))};return Object(x.jsx)(f.a,{children:Object(x.jsxs)("body",{children:[Object(x.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)("header",{className:"App-header",children:[Object(x.jsxs)("nav",{className:"nav-link",children:[Object(x.jsxs)(f.b,{to:"/HomePage",className:"nav-link",children:["   ","Home"]}),Object(x.jsx)(x.Fragment,{children:" "}),Object(x.jsxs)(f.b,{to:"/Search",className:"nav-link",children:["    "," Search"]}),Object(x.jsx)(x.Fragment,{children:" "}),Object(x.jsxs)(f.b,{to:"/ComingSoon",className:"nav-link",children:["    "," Coming Soon"]}),Object(x.jsx)(x.Fragment,{children:" "}),Object(x.jsxs)(f.b,{to:"/GetTop25",className:"nav-link",children:["    ","TOP25"]}),Object(x.jsxs)(f.b,{to:"/Watchlist",className:"nav-link",children:["    "," Watchlist"]})]}),Object(x.jsxs)("p",{children:[Object(x.jsx)(f.b,{to:"/Search",children:Object(x.jsx)("button",{className:"b",onClick:j,children:"search"})}),Object(x.jsx)("input",{size:"40",className:"customInput",type:"text",placeholder:"film",onChange:function(e){c(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&j()}})]}),Object(x.jsxs)(v.d,{children:[Object(x.jsx)(v.b,{exact:!0,path:"/HomePage",children:Object(x.jsx)(N,{set:l})}),Object(x.jsx)(v.b,{path:"/Search",children:Object(x.jsx)(g,{URL:o,set:c})}),Object(x.jsxs)(v.b,{path:"/ComingSoon",children:[Object(x.jsx)(y,{set:l})," "]}),Object(x.jsx)(v.b,{path:"/GetTop25",component:k}),Object(x.jsx)(v.b,{path:"/Watchlist",children:Object(x.jsx)(S,{set:l})}),Object(x.jsx)(v.a,{to:"/HomePage",children:Object(x.jsx)(N,{set:l})})]})]})})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,497)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(w,{})}),document.getElementById("root")),C()},50:function(e,t,n){}},[[496,1,2]]]);
//# sourceMappingURL=main.d90e2f08.chunk.js.map
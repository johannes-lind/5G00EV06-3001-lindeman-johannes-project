(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{170:function(t,e,n){},171:function(t,e,n){},496:function(t,e,n){"use strict";n.r(e);var c=n(2),s=n.n(c),a=n(32),i=n.n(a),r=(n(170),n(45)),o=(n(171),n(10)),l=n.n(o),j=n(27),h=n(28),b=n(29),d=n(31),p=n(30),u=n(22),O=n.n(u);function m(t,e){for(var n=JSON.parse(localStorage.getItem("titles"))||[],c=JSON.parse(localStorage.getItem("images"))||[],s=!1,a=0;a<n.length;a++)n[a]===t&&(s=!0,console.log(s));s||(n.push(t),c.push(e)),localStorage.setItem("titles",JSON.stringify(n)),localStorage.setItem("images",JSON.stringify(c))}n(64);var f=n(0),x=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(h.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s)))._isMounted=!1,t.state={info:[],name:" ",ratings:[],onList:[]},t.added=function(){t.setState({onList:[Object(f.jsx)(f.Fragment,{children:"\u2705"})]})},t}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this._isMounted=!0;try{this.search()}catch(t){this.setState({info:Object(f.jsxs)("p",{children:[" ",Object(f.jsx)("em",{children:"No results found "})]})}),console.log(t)}}},{key:"componentDidUpdate",value:function(t,e){try{e.info!==this.state.info&&this.search()}catch(n){this.setState({info:Object(f.jsx)("p",{children:" No results found "})}),console.log(n)}}},{key:"search",value:function(){var t=Object(j.a)(l.a.mark((function t(){var e=this;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:O.a.get(this.props.URL).then((function(t){var n=t.data,c=n.Poster;if(e._isMounted){e.setState({info:[Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("h2",{children:[Object(f.jsxs)("p",{className:"header",children:[n.Title," (",n.Year,")",Object(f.jsxs)("p",{children:[Object(f.jsx)("button",{className:"b",onClick:function(){return m(e.state.name,c),e.added()},children:"Add to Watchlist"}),Object(f.jsx)("small",{children:e.state.onList})]})]}),Object(f.jsx)("img",{align:"left",src:c,alt:"poster",width:"300",height:"420"},"0"),Object(f.jsx)("p",{children:Object(f.jsx)("br",{})})]})," ",Object(f.jsx)("p",{className:"infoarticle",children:Object(f.jsxs)("aside",{children:[Object(f.jsxs)("p",{children:["Rated: ",n.Rated]}),Object(f.jsxs)("p",{children:["Starring: ",n.Actors]}),Object(f.jsxs)("p",{children:["Directed by: ",n.Director]}),Object(f.jsxs)("p",{children:["Writer: ",n.Writer]}),Object(f.jsx)("p",{children:Object(f.jsx)("em",{children:n.Plot})})," "]})})]})})],name:n.Title});try{var s=[n.Ratings[0].Source,n.Ratings[0].Value],a=[n.Ratings[1].Source,n.Ratings[1].Value],i=[n.Ratings[2].Source,n.Ratings[2].Value];e.setState({ratings:[Object(f.jsxs)("ul",{children:[Object(f.jsxs)("li",{children:[s[0],": ",s[1]]}),Object(f.jsxs)("li",{children:[a[0],": ",a[1]]}),Object(f.jsxs)("li",{children:[i[0],": ",i[1]]})]})]})}catch(r){e.setState({ratings:[Object(f.jsxs)("p",{children:[Object(f.jsx)("em",{children:"Ratings not available"})," "]})]})}}}));case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("p",{children:[this.state.info," "]}),Object(f.jsxs)("p",{className:"ratings",children:[" RATINGS ",this.state.ratings]})]})}}]),n}(s.a.Component),g=n(13),v=n(5),y=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(h.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={posters:[]},t.ClearList=function(){localStorage.clear(),t.setState({posters:Object(f.jsx)("p",{children:" "})})},t.change=function(e){var n="https://www.omdbapi.com/?t=".concat(e,"&apikey=").concat("3e5977f9");t.props.set(n)},t.remove=function(e,n){for(var c=JSON.parse(localStorage.getItem("titles")),s=JSON.parse(localStorage.getItem("images")),a=[],i=[],r=0;r<c.length;r++)c[r]!==e&&(a.push(c[r]),i.push(s[r]));localStorage.setItem("titles",JSON.stringify(a)),localStorage.setItem("images",JSON.stringify(i)),console.log(a),t.setter(a,i)},t.setter=function(e,n){for(var c="3e5977f9",s=[],a=function(a){s[a]=Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("td",{children:[" ",Object(f.jsxs)(g.b,{to:"/GetFilmInfo",className:"nav-link",onClick:function(){return t.change(e[a])},children:[Object(f.jsx)("img",{src:n[a],alt:"poster",width:"200",height:"280",onClick:function(){"https://www.omdbapi.com/?t=".concat(e[a],"&apikey=").concat(c)}},a),Object(f.jsx)(v.b,{path:"/GetFilmInfo",children:Object(f.jsx)(x,{URL:"https://www.omdbapi.com/?t=".concat(e[a],"&apikey=").concat(c)})})]}),Object(f.jsxs)("p",{className:"list",children:[e[a],Object(f.jsx)("p",{children:Object(f.jsx)("button",{className:"b",onClick:function(){return t.remove(e[a],n[a])},children:"Delete"})})]})]})})},i=0;i<n.length;i++)a(i);t.setState({posters:[Object(f.jsx)("p",{children:s})]})},t}return Object(b.a)(n,[{key:"componentDidMount",value:function(){try{var t=JSON.parse(localStorage.getItem("titles")),e=JSON.parse(localStorage.getItem("images"));console.log(t),console.log(e),this.setState({names:t}),this.setter(t,e)}catch(n){console.log(n),this.setState({posters:Object(f.jsx)("p",{children:" List empty "})})}}},{key:"render",value:function(){var t=this;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("p",{children:[Object(f.jsx)("button",{className:"b",onClick:function(){return t.ClearList()},children:"Clear List"})," "]}),Object(f.jsxs)("table",{children:[" ",this.state.posters]})]})}}]),n}(s.a.Component),k=(n(118),function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(h.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={info:[]},t}return Object(b.a)(n,[{key:"componentDidMount",value:function(t){this.search(t)}},{key:"search",value:function(){var t=Object(j.a)(l.a.mark((function t(e){var n,c,s,a,i=this;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"k_nb1tky3v",n="https://imdb-api.com/en/API/ComingSoon/".concat("k_nb1tky3v"),c="3e5977f9",s=function(t){a(t),console.log(t)},a=function(t){n="https://www.omdbapi.com/?t=".concat(t,"&apikey=").concat(c),i.props.set(n)},O.a.get(n).then((function(t){var e=t.data,n=[],a=[],r=[];console.log(e);for(var o=function(t){n[t]=e.items[t].image,r[t]=e.items[t].title,a[t]=Object(f.jsxs)("td",{children:[Object(f.jsxs)(g.b,{to:"/GetFilmInfo",children:[Object(f.jsx)("img",{onClick:function(){return s(r[t])},src:n[t],alt:"poster",width:"150",height:"200"},e.items[t].id),Object(f.jsx)(v.b,{path:"/GetFilmInfo",children:Object(f.jsx)(x,{URL:"https://www.omdbapi.com/?t=".concat(r[t],"&apikey=").concat(c)})})]}),Object(f.jsxs)("p",{className:"list",children:[Object(f.jsxs)("small",{children:[" ",r[t]]})," "]})," ",Object(f.jsx)("p",{}),Object(f.jsx)("button",{className:"b",onClick:function(){return m(r[t],n[t])},children:"Add to Watchlist"})]})},l=0;l<15;l++)o(l);i.setState({info:[a[0],a[1],a[2],a[3],a[4],Object(f.jsx)("p",{children:" "}),a[5],a[6],a[7],a[8],a[9],Object(f.jsx)("p",{children:" "}),a[10],a[11],a[12],a[13],a[14]]})}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("header",{children:"Coming Soon "}),Object(f.jsxs)("p",{children:[" ",this.state.info]})]})}}]),n}(s.a.Component)),S=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(h.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={info:[]},t}return Object(b.a)(n,[{key:"componentDidMount",value:function(t){try{this.search(t)}catch(e){this.setState({info:Object(f.jsx)("p",{children:" "})}),console.log(e)}}},{key:"search",value:function(){var t=Object(j.a)(l.a.mark((function t(e){var n,c,s,a=this;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"k_nb1tky3v",n="https://imdb-api.com/en/API/MostPopularMovies/".concat("k_nb1tky3v"),c="3e5977f9",s=function(t){n="https://www.omdbapi.com/?t=".concat(t,"&apikey=").concat(c),a.props.set(n)};try{O.a.get(n).then((function(t){for(var e=t.data,n=[],i=[],r=[],o=function(t){n[t]=e.items[t].image,r[t]=e.items[t].title,i[t]=Object(f.jsx)("td",{children:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(g.b,{to:"/GetFilmInfo",onClick:function(){return s(r[t])},children:[Object(f.jsx)("img",{src:n[t],alt:"poster",width:"150",height:"210"},e.items[t].id),Object(f.jsx)(v.b,{path:"/GetFilmInfo",children:Object(f.jsx)(x,{URL:"https://www.omdbapi.com/?t=".concat(r[t],"&apikey=").concat(c)})})]}),Object(f.jsxs)("p",{className:"list",children:[Object(f.jsxs)("small",{children:[" ",r[t]]})," "]})]})})},l=0;l<15;l++)o(l);a.setState({info:[i[0],i[1],i[2],i[3],i[4],Object(f.jsx)("p",{children:" "}),i[5],i[6],i[7],i[8],i[9],Object(f.jsx)("p",{children:" "}),i[10],i[11],i[12],i[13],i[14]]})}))}catch(e){this.setState({info:Object(f.jsx)("p",{children:" Request limit exceeded! "})})}case 5:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("header",{className:"header",children:"Most popular films "}),Object(f.jsxs)("p",{children:[" ",this.state.info]})]})}}]),n}(s.a.Component);var w=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(h.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={info:[]},t}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.search()}},{key:"search",value:function(){var t=Object(j.a)(l.a.mark((function t(){var e,n=this;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"k_nb1tky3v",e="https://imdb-api.com/en/API/MostPopularMovies/".concat("k_nb1tky3v"),O.a.get(e).then((function(t){var e=t.data,c=[],s=[];console.log(e),console.log(e.items[0].fullTitle),console.log(e.items[0]);for(var a=0;a<25;a++)c[a]=e.items[a].image,s[a]=Object(f.jsx)("td",{children:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("img",{src:c[a],alt:"poster",width:"150",height:"200"},a),Object(f.jsxs)("p",{className:"list",children:[Object(f.jsxs)("small",{children:[" ",e.items[a].title]})," "]})]})});n.setState({info:[s[0],s[1],s[2],s[3],s[4],Object(f.jsx)("p",{children:" "}),s[5],s[6],s[7],s[8],s[9],Object(f.jsx)("p",{children:" "}),s[10],s[11],s[12],s[13],s[14],Object(f.jsx)("p",{children:" "}),s[15],s[16],s[17],s[18],s[19],Object(f.jsx)("p",{children:" "}),s[20],s[21],s[22],s[23],s[24]]})}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("header",{children:"TODAY'S TOP 25 FILMS "}),Object(f.jsxs)("p",{children:[" ",this.state.info]})]})}}]),n}(s.a.Component);n(22);var N=function(){var t=s.a.useState("Pulp Fiction"),e=Object(r.a)(t,2),n=e[0],c=e[1],a="3e5977f9",i=s.a.useState("https://www.omdbapi.com/?t=".concat(n,"&apikey=").concat(a)),o=Object(r.a)(i,2),l=o[0],j=o[1],h=function(){j("https://www.omdbapi.com/?t=".concat(n,"&apikey=").concat(a))};return Object(f.jsx)(g.a,{children:Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)("header",{className:"App-header",children:[Object(f.jsxs)("nav",{className:"nav-link",children:[Object(f.jsxs)(g.b,{to:"/GetHomePage",className:"nav-link",children:["   ","Home"]}),Object(f.jsx)(f.Fragment,{children:" "}),Object(f.jsxs)(g.b,{to:"/GetFilmInfo",className:"nav-link",children:["    "," Search"]}),Object(f.jsx)(f.Fragment,{children:" "}),Object(f.jsxs)(g.b,{to:"/ComingSoon",className:"nav-link",children:["    "," Coming Soon"]}),Object(f.jsx)(f.Fragment,{children:" "}),Object(f.jsxs)(g.b,{to:"/GetTop25",className:"nav-link",children:["    ","TOP25"]}),Object(f.jsxs)(g.b,{to:"/Watchlist",className:"nav-link",children:["    "," Watchlist"]})]}),Object(f.jsxs)("p",{children:[Object(f.jsx)(g.b,{to:"/GetFilmInfo",children:Object(f.jsx)("button",{className:"b",onClick:h,children:"search"})}),Object(f.jsx)("input",{size:"40",className:"customInput",type:"text",placeholder:"film",onChange:function(t){c(t.target.value)},onKeyPress:function(t){"Enter"===t.key&&h()}})]}),Object(f.jsxs)(v.d,{children:[Object(f.jsx)(v.b,{exact:!0,path:"/GetHomePage",children:Object(f.jsx)(S,{set:j})}),Object(f.jsx)(v.b,{path:"/GetFilmInfo",children:Object(f.jsx)(x,{URL:l})}),Object(f.jsxs)(v.b,{path:"/ComingSoon",children:[Object(f.jsx)(k,{set:j})," "]}),Object(f.jsx)(v.b,{path:"/GetTop25",component:w}),Object(f.jsx)(v.b,{path:"/Watchlist",children:Object(f.jsx)(y,{set:j})}),Object(f.jsx)(v.a,{to:"/GetHomePage",children:Object(f.jsx)(S,{set:j})})]})]})})})},F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,497)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),s(t),a(t),i(t)}))};i.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(N,{})}),document.getElementById("root")),F()},64:function(t,e,n){}},[[496,1,2]]]);
//# sourceMappingURL=main.d8838623.chunk.js.map
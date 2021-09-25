(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{16:function(e,t,n){e.exports={Searchbar:"SearchBar_Searchbar__1jjit",SearchForm:"SearchBar_SearchForm__1kBjh",SearchForm_button:"SearchBar_SearchForm_button__3c0BR",SearchForm_button_label:"SearchBar_SearchForm_button_label__14_Wj",SearchForm_input:"SearchBar_SearchForm_input__2DLMJ"}},18:function(e,t,n){e.exports={link:"Navigation_link__2tBVP",activeLink:"Navigation_activeLink__3oWAN Navigation_link__2tBVP"}},19:function(e,t,n){e.exports={MovieListItem:"ListItem_MovieListItem__3nJlN",Link:"ListItem_Link__3xxbd",MovieListItem_image:"ListItem_MovieListItem_image__1oJGw",MovieListTitle:"ListItem_MovieListTitle__2MXr9"}},25:function(e,t,n){e.exports={List:"List_List__2Si8G",Container:"List_Container__3FgsA"}},36:function(e,t,n){e.exports={container:"Container_container__JJzct"}},39:function(e,t,n){e.exports={header:"Appbar_header__1wZDZ"}},40:function(e,t,n){e.exports={Button:"Button_Button__3eJ27"}},42:function(e,t,n){e.exports={Loader:"Loader_Loader__3eK1E"}},47:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(35),s=n.n(a),i=n(7),o=(n(47),n(4)),u=n(36),j=n.n(u),l=n(0);function b(e){var t=e.children;return Object(l.jsx)("div",{className:j.a.container,children:t})}var h=n(18),O=n.n(h),p=function(){return Object(l.jsxs)("nav",{children:[Object(l.jsx)(i.c,{exact:!0,to:"/",className:O.a.link,activeClassName:O.a.activeLink,children:"Home"}),Object(l.jsx)(i.c,{to:"/movies",className:O.a.link,activeClassName:O.a.activeLink,children:"Movies"})]})},d=n(39),m=n.n(d);function v(){return Object(l.jsx)("header",{className:m.a.header,children:Object(l.jsx)(p,{})})}var f=n(6),x=n.n(f),g=n(15),_=n(12),w=n(2),S=n(13),L=n.n(S);L.a.defaults.baseURL="https://api.themoviedb.org/3",L.a.defaults.params={api_key:"9d93a8874ece78649883bfc9efe0c649",language:"en-US"};var k=function(){var e=Object(_.a)(x.a.mark((function e(t){var n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.get("/trending/movie/day",{params:{page:t}});case 3:return n=e.sent,c=n.data,console.log(c),e.abrupt("return",c.results);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(_.a)(x.a.mark((function e(t,n){var c,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.get("/search/movie",{params:{query:t,page:n}});case 3:return c=e.sent,r=c.data,console.log(r),e.abrupt("return",r.results);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),y=function(){var e=Object(_.a)(x.a.mark((function e(t){var n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.get("/movie/".concat(t));case 3:return n=e.sent,c=n.data,console.log("fetchMovieDetails",c),e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(_.a)(x.a.mark((function e(t){var n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.get("/movie/".concat(t,"/credits"));case 3:return n=e.sent,c=n.data,console.log("fetchMovieActors",c.cast),e.abrupt("return",c.cast);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(_.a)(x.a.mark((function e(t){var n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.get("/movie/".concat(t,"/reviews"));case 3:return n=e.sent,c=n.data,console.log("fetchMovieReviews",c.results),e.abrupt("return",c.results);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),I=n(19),M=n.n(I),E=n.p+"static/media/BasicImage.4dda33b2.jpg",C=function(e){var t=e.collection;return t.map((function(e){return Object(l.jsx)("li",{className:M.a.MovieListItem,children:Object(l.jsxs)(i.b,{className:M.a.Link,to:"/movies/".concat(e.id),children:[Object(l.jsx)("img",{src:e.backdrop_path?"https://image.tmdb.org/t/p/w500"+e.backdrop_path:E,alt:e.title,className:M.a.MovieListItem_image}),Object(l.jsx)("p",{className:M.a.MovieListTitle,children:e.title})]})},e.id)}))},J=n(40),A=n.n(J),T=function(e){var t=e.action;return Object(l.jsx)("button",{className:A.a.Button,onClick:t,children:"Load more"})},W=n(25),q=n.n(W),R=function(e){var t=e.collection,n=e.actionButton;return Object(l.jsxs)("div",{className:q.a.Container,children:[Object(l.jsx)("ul",{className:q.a.List,children:Object(l.jsx)(C,{collection:t})}),t.length>11&&Object(l.jsx)(T,{action:n})]})},D=n(41),G=n.n(D),H=n(42),P=n.n(H),U=function(){return Object(l.jsx)(G.a,{className:P.a.Loader,type:"Rings",color:"#00FA9A",height:800,width:900,timeout:3e3})};function V(){var e=Object(c.useState)([]),t=Object(w.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(null),s=Object(w.a)(a,2),i=s[0],o=s[1],u=Object(c.useState)(1),j=Object(w.a)(u,2),b=j[0],h=j[1],O=Object(c.useState)(!1),p=Object(w.a)(O,2),d=p[0],m=p[1];Object(c.useEffect)((function(){(function(){var e=Object(_.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,k(b);case 4:t=e.sent,r((function(e){return[].concat(Object(g.a)(e),Object(g.a)(t))})),0===t.length&&o("There are no trend movies"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),o("Whoops, something went wrong. Enter your request again");case 12:return e.prev=12,b>1&&v(),m(!1),e.finish(12);case 16:case"end":return e.stop()}}),e,null,[[0,9,12,16]])})));return function(){return e.apply(this,arguments)}})()()}),[b]);var v=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})};return Object(l.jsxs)(l.Fragment,{children:[d&&Object(l.jsx)(U,{}),i&&Object(l.jsx)("p",{children:i}),n.length>0&&!i&&Object(l.jsx)(R,{collection:n,actionButton:function(){return h(b+1)}})]})}var Z=n(16),z=n.n(Z);function K(e){var t=e.onSubmit,n=Object(c.useState)(""),r=Object(w.a)(n,2),a=r[0],s=r[1];return Object(l.jsx)("header",{className:z.a.Searchbar,children:Object(l.jsxs)("form",{className:z.a.SearchForm,onSubmit:function(e){e.preventDefault(),t(a)},children:[Object(l.jsx)("button",{type:"submit",className:z.a.SearchForm_button,children:Object(l.jsx)("span",{className:z.a.SearchForm_button_label,children:"Search"})}),Object(l.jsx)("input",{className:z.a.SearchForm_input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){s(e.target.value)}})]})})}function X(){var e=Object(c.useState)(""),t=Object(w.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),s=Object(w.a)(a,2),i=s[0],o=s[1],u=Object(c.useState)(1),j=Object(w.a)(u,2),b=j[0],h=j[1],O=Object(c.useState)([]),p=Object(w.a)(O,2),d=p[0],m=p[1],v=Object(c.useState)(null),f=Object(w.a)(v,2),S=f[0],L=f[1];Object(c.useEffect)((function(){n&&function(){var e=Object(_.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o(!0),e.next=4,F(n,b);case 4:t=e.sent,m((function(e){return[].concat(Object(g.a)(e),Object(g.a)(t))})),0===t.length&&L("Try to look for something \ud83d\udd0d"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),L("Whoops, something went wrong. Enter your request again");case 12:return e.prev=12,b>1&&k(),o(!1),e.finish(12);case 16:case"end":return e.stop()}}),e,null,[[0,9,12,16]])})));return function(){return e.apply(this,arguments)}}()()}),[n,b]);var k=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(K,{onSubmit:function(e){e!==n&&(m([]),r(e),h(1),L(null))}}),i&&Object(l.jsx)(U,{}),S&&Object(l.jsx)("p",{children:S}),d.length>0&&!S&&Object(l.jsx)(R,{collection:d,actionButton:function(){return h(b+1)}})]})}function Q(){return Object(l.jsx)("h1",{children:"Opppps \u3064 \u25d5_\u25d5\u0f3d\u3064 try something other"})}var Y=function(e){var t=e.movie,n=t.title,c=t.poster_path,r=t.release_date,a=t.overview,s=t.genres;return console.log("movie2",t),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:c?"https://image.tmdb.org/t/p/w500"+c:E,alt:n})}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("h2",{children:[n," (",r.slice(0,4),")"]}),Object(l.jsx)("h3",{children:"Overview"}),Object(l.jsx)("p",{children:a}),Object(l.jsx)("h4",{children:"Genres"}),Object(l.jsx)("ul",{children:s.map((function(e){return Object(l.jsx)("li",{children:e.name},e.id)}))})]})]})},$=n.p+"static/media/Actor.a86b76dc.jpg",ee=function(e){var t=e.actors;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("ul",{children:t.map((function(e){return Object(l.jsxs)("li",{children:[Object(l.jsx)("img",{src:e.profile_path?"https://image.tmdb.org/t/p/w500"+e.profile_path:$,alt:e.name}),Object(l.jsx)("p",{children:e.name}),Object(l.jsx)("p",{children:e.character})]},e.id)}))})})};function te(){var e=Object(o.f)().movieId,t=Object(c.useState)([]),n=Object(w.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(null),i=Object(w.a)(s,2),u=i[0],j=i[1],b=Object(c.useState)(!1),h=Object(w.a)(b,2),O=h[0],p=h[1];return Object(c.useEffect)((function(){p(!0),N(e).then((function(e){a(e)})).catch((function(e){j("Whoops, something went wrong. Enter your request again")})).finally((function(){p(!1)}))}),[e]),Object(l.jsxs)(l.Fragment,{children:[O&&Object(l.jsx)(U,{}),u&&Object(l.jsx)("p",{children:u}),r&&Object(l.jsx)(ee,{actors:r})]})}var ne=function(e){var t=e.reviews;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("ul",{children:t.map((function(e){return Object(l.jsxs)("li",{children:[Object(l.jsx)("p",{children:e.author}),Object(l.jsx)("p",{children:e.content})]},e.id)}))})})};function ce(){var e=Object(o.f)().movieId,t=Object(c.useState)([]),n=Object(w.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(null),i=Object(w.a)(s,2),u=i[0],j=i[1],b=Object(c.useState)(!1),h=Object(w.a)(b,2),O=h[0],p=h[1];return Object(c.useEffect)((function(){p(!0),B(e).then((function(e){a(e)})).catch((function(e){j("Whoops, something went wrong. Enter your request again")})).finally((function(){p(!1)}))}),[e]),Object(l.jsxs)(l.Fragment,{children:[O&&Object(l.jsx)(U,{}),u&&Object(l.jsx)("p",{children:u}),r&&Object(l.jsx)(ne,{reviews:r})]})}var re=function(){var e=Object(o.g)(),t=e.url,n=e.path;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(i.c,{to:"".concat(t,"/cast"),children:"Cast"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.c,{to:"".concat(t,"/reviews"),children:"Reviews"})})]}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"".concat(n,"/cast"),children:Object(l.jsx)(te,{})}),Object(l.jsx)(o.a,{path:"".concat(n,"/reviews"),children:Object(l.jsx)(ce,{})})]})]})};function ae(){var e=Object(o.f)().movieId,t=Object(c.useState)(null),n=Object(w.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(null),i=Object(w.a)(s,2),u=i[0],j=i[1],b=Object(c.useState)(!1),h=Object(w.a)(b,2),O=h[0],p=h[1];return Object(c.useEffect)((function(){p(!0),y(e).then((function(e){a(e)})).catch((function(e){console.log(e),j("Whoops, something went wrong. Enter your request again")})).finally((function(){p(!1)}))}),[e]),console.log("movie1",r),Object(l.jsxs)(l.Fragment,{children:[O&&Object(l.jsx)(U,{}),u&&Object(l.jsx)("p",{children:u}),r&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(Y,{movie:r}),Object(l.jsx)(re,{})]})]})}var se=function(){return Object(l.jsxs)(b,{children:[Object(l.jsx)(v,{}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/",exact:!0,children:Object(l.jsx)(V,{})}),Object(l.jsx)(o.a,{path:"/movies",exact:!0,children:Object(l.jsx)(X,{})}),Object(l.jsx)(o.a,{path:"/movies/:movieId",children:Object(l.jsx)(ae,{})}),Object(l.jsx)(o.a,{children:Object(l.jsx)(Q,{})})]})]})};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(i.a,{children:Object(l.jsx)(se,{})})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.fe7121ba.chunk.js.map
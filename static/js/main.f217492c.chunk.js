(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{18:function(e,t,s){},20:function(e,t,s){},22:function(e,t,s){"use strict";s.r(t);var n,c=s(9),a=s.n(c),i=s(2),o=s(1),r=s.n(o),l=(s(16),s(17),s(18),s(3)),d=s.n(l);!function(e){e.Load="Something went wrong",e.None="",e.NoName="Name is required",e.NoEmail="Email is required",e.NoComment="Enter some text"}(n||(n={}));var m=s(0),j=r.a.memo((function(e){var t=e.posts,s=e.selectedPost,n=e.setSelectedPost,c=e.setIsCommentFormActive;return Object(o.useEffect)((function(){c(!1)}),[s]),Object(m.jsxs)("div",{"data-cy":"PostsList",children:[Object(m.jsx)("p",{className:"title",children:"Posts:"}),Object(m.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{className:"has-background-link-light",children:[Object(m.jsx)("th",{children:"#"}),Object(m.jsx)("th",{children:"Title"}),Object(m.jsx)("th",{children:" "})]})}),Object(m.jsx)("tbody",{children:t.map((function(e){return Object(m.jsxs)("tr",{"data-cy":"Post",children:[Object(m.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(m.jsx)("td",{"data-cy":"PostTitle",children:e.title}),s&&(null===s||void 0===s?void 0:s.id)===e.id?Object(m.jsx)("td",{className:"has-text-right is-vcentered",children:Object(m.jsx)("button",{type:"button","data-cy":"PostButton",className:"button is-link",onClick:function(){return n(null)},children:"Close"})}):Object(m.jsx)("td",{className:"has-text-right is-vcentered",children:Object(m.jsx)("button",{type:"button","data-cy":"PostButton",className:"button is-link is-light",onClick:function(){return n(e)},children:"Open"})})]},e.id)}))})]})]})})),u="https://mate.academy/students-api";function b(e){return new Promise((function(t){setTimeout(t,e)}))}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n={method:t};return s&&(n.body=JSON.stringify(s),n.headers={"Content-Type":"application/json; charset=UTF-8"}),b(300).then((function(){return fetch(u+e,n)})).then((function(e){return e.json()}))}var O=function(e){return h(e)},x=function(e,t){return h(e,"POST",t)},f=function(e){return h(e,"DELETE")},v=function(e){var t=void 0!==e?"/comments?postId=".concat(e):"/comments";return O(t)},N=function(e){var t=e.postId,s=e.name,n=e.email,c=e.body;return x("/comments",{postId:t,name:s,email:n,body:c})},p=(s(20),function(){return Object(m.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(m.jsx)("div",{className:"Loader__content"})})}),y=s(8),g=s(11),C=s(10),E=s(7),S=s.n(E),k=r.a.memo((function(e){var t=e.selectedPost,s=e.setComments,c=e.isLoading,a=e.setError,r=Object(o.useState)(""),l=Object(i.a)(r,2),j=l[0],u=l[1],b=Object(o.useState)(!1),h=Object(i.a)(b,2),O=h[0],x=h[1],f=Object(o.useState)(""),v=Object(i.a)(f,2),p=v[0],E=v[1],k=Object(o.useState)(!1),w=Object(i.a)(k,2),P=w[0],L=w[1],F=Object(o.useState)(""),I=Object(i.a)(F,2),T=I[0],A=I[1],B=Object(o.useState)(!1),U=Object(i.a)(B,2),D=U[0],M=U[1],q=function(){var e=Object(C.a)(S.a.mark((function e(c){var i;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),j||x(!0),p||L(!0),T||M(!0),j&&p&&T){e.next=6;break}return e.abrupt("return");case 6:if(e.prev=6,!t){e.next=12;break}return i={postId:t.id,name:j,email:p,body:T},e.next=11,N(i);case 11:s((function(e){return[].concat(Object(g.a)(e),[Object(y.a)(Object(y.a)({},i),{},{id:+new Date})])}));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),a(n.Load);case 17:return e.prev=17,A(""),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[6,14,17,20]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:q,children:[Object(m.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(m.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(m.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(m.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:d()("input",{"is-danger":O}),value:j,onChange:function(e){return function(e){x(!1),u(e.target.value)}(e)}}),Object(m.jsx)("span",{className:"icon is-small is-left",children:Object(m.jsx)("i",{className:"fas fa-user"})}),O&&Object(m.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(m.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),O&&Object(m.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(m.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(m.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(m.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(m.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:d()("input",{"is-danger":P}),value:p,onChange:function(e){return function(e){L(!1),E(e.target.value)}(e)}}),Object(m.jsx)("span",{className:"icon is-small is-left",children:Object(m.jsx)("i",{className:"fas fa-envelope"})}),P&&Object(m.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(m.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),P&&Object(m.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(m.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(m.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:d()("textarea",{"is-danger":D}),value:T,onChange:function(e){return function(e){M(!1),A(e.target.value)}(e)}})}),D&&Object(m.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(m.jsxs)("div",{className:"field is-grouped",children:[Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("button",{type:"submit",className:d()("button is-link",{"is-loading":c}),children:"Add"})}),Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){return x(!1),L(!1),M(!1),u(""),E(""),void A("")},children:"Clear"})})]})]})})),w=r.a.memo((function(e){var t=e.selectedPost,s=e.isCommentFormActive,c=e.setIsCommentFormActive,a=e.comments,i=e.setComments,r=e.isLoading,l=e.error,d=e.setError;Object(o.useEffect)((function(){d(n.None),t&&v(null===t||void 0===t?void 0:t.id).then(i).catch((function(){return d(n.Load)}))}),[null===t||void 0===t?void 0:t.id]);var j=function(e){i((function(t){return t.filter((function(t){return t.id!==e}))})),function(e){f("/comments/".concat(e))}(e)};return Object(m.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(m.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(m.jsxs)("div",{className:"block",children:[Object(m.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(null===t||void 0===t?void 0:t.id,": ").concat(null===t||void 0===t?void 0:t.title)}),Object(m.jsx)("p",{"data-cy":"PostBody",children:null===t||void 0===t?void 0:t.body})]}),Object(m.jsxs)("div",{className:"block",children:[r&&Object(m.jsx)(p,{}),l&&Object(m.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),!l&&0===a.length&&Object(m.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),a.length>0&&Object(m.jsx)("p",{className:"title is-4",children:"Comments:"}),a.map((function(e){return Object(m.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(m.jsxs)("div",{className:"message-header",children:[Object(m.jsx)("a",{href:"mailto:".concat(e.email),"data-cy":"CommentAuthor",children:e.name}),Object(m.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return j(e.id)},children:"delete button"})]}),Object(m.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]},e.id)})),!l&&!s&&Object(m.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return c(!0)},children:"Write a comment"})]}),s&&Object(m.jsx)(k,{setError:d,selectedPost:t,setComments:i,isLoading:r})]})})})),P=r.a.memo((function(e){var t=e.users,s=e.selectedUser,n=e.setSelectedUser,c=e.setSelectedPost,a=Object(o.useState)(!1),r=Object(i.a)(a,2),l=r[0],j=r[1],u=Object(o.useRef)(null),b=function(e){u.current&&!u.current.contains(e.target)&&j(!1)},h=function(e){"Escape"===e.key&&j(!1)};return Object(o.useEffect)((function(){return document.addEventListener("click",b),document.addEventListener("keydown",h),function(){document.removeEventListener("click",b),document.removeEventListener("keydown",h)}}),[]),Object(m.jsxs)("div",{ref:u,"data-cy":"UserSelector",className:d()("dropdown",{"is-active":l}),children:[Object(m.jsx)("div",{className:"dropdown-trigger",children:Object(m.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){return j(!0)},children:[s?s.name:Object(m.jsx)("span",{children:"Choose a user"}),Object(m.jsx)("span",{className:"icon is-small",children:Object(m.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(m.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(m.jsx)("div",{className:"dropdown-content",children:t.map((function(e){return Object(m.jsx)("a",{href:"#user-".concat(e.id),className:d()("dropdown-item",{"is-active":(null===s||void 0===s?void 0:s.id)===e.id}),onClick:function(){return function(e){n(e),j(!1),c(null)}(e)},children:e.name},e.id)}))})})]})})),L=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),s=t[0],c=t[1],a=Object(o.useState)(null),r=Object(i.a)(a,2),l=r[0],u=r[1],b=Object(o.useState)([]),h=Object(i.a)(b,2),x=h[0],f=h[1],N=Object(o.useState)(null),y=Object(i.a)(N,2),g=y[0],C=y[1],E=Object(o.useState)(n.None),S=Object(i.a)(E,2),k=S[0],L=S[1],F=Object(o.useState)([]),I=Object(i.a)(F,2),T=I[0],A=I[1],B=Object(o.useState)(!1),U=Object(i.a)(B,2),D=U[0],M=U[1],q=Object(o.useState)(!1),_=Object(i.a)(q,2),J=_[0],W=_[1];return Object(o.useEffect)((function(){L(n.None),O("/users").then(f).catch((function(){return L(n.Load)}))}),[]),Object(o.useEffect)((function(){var e;L(n.None),g&&(W(!0),(e=null===g||void 0===g?void 0:g.id,O("/posts?userId=".concat(e))).then(c).catch((function(){return L(n.Load)})).finally((function(){return W(!1)})))}),[g]),Object(o.useEffect)((function(){L(n.None),l&&v(null===l||void 0===l?void 0:l.id).then(A).catch((function(){return L(n.Load)}))}),[null===l||void 0===l?void 0:l.id]),Object(m.jsx)("main",{className:"section",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"tile is-ancestor",children:[Object(m.jsx)("div",{className:"tile is-parent",children:Object(m.jsxs)("div",{className:"tile is-child box is-success",children:[Object(m.jsx)("div",{className:"block",children:Object(m.jsx)(P,{users:x,selectedUser:g,setSelectedUser:C,setSelectedPost:u})}),Object(m.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!J&&!g&&Object(m.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),J&&Object(m.jsx)(p,{}),!J&&k&&Object(m.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),g&&!J&&Object(m.jsx)(m.Fragment,{children:0===s.length?Object(m.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}):Object(m.jsx)(j,{posts:s,selectedPost:l,setSelectedPost:u,setIsCommentFormActive:M,setIsLoading:W})})]})]})}),Object(m.jsx)("div",{"data-cy":"Sidebar",className:d()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":l}),children:Object(m.jsx)("div",{className:"tile is-child box is-success ",children:l&&Object(m.jsx)(w,{error:k,setError:L,comments:T,setComments:A,selectedPost:l,isCommentFormActive:D,setIsCommentFormActive:M,isLoading:J})})})]})})})},F=function(){return Object(m.jsx)(L,{})};a.a.render(Object(m.jsx)(F,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.f217492c.chunk.js.map
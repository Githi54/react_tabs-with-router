(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(t,e,c){},18:function(t,e,c){"use strict";c.r(e);var a=c(9),n=c.n(a),s=c(4),i=(c(14),c(15),c(16),c(2)),b=c(6),j=c.n(b),r=(c(0),c(1)),l=function(t){var e=t.tabs,c=Object(i.h)().tabId,a=e.find((function(t){return":".concat(t.id)===c}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"Tabs page"}),Object(r.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:e.map((function(t){var e=t.id,c=t.title;return Object(r.jsx)("li",{className:j()({"is-active":(null===a||void 0===a?void 0:a.id)===e}),"data-cy":"Tab",children:Object(r.jsx)(s.b,{to:"../:".concat(e),"data-cy":"TabLink",children:c})},e)}))})}),Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:a?a.content:"Please select a tab"})]})]})},d=function(t){var e=t.to,c=t.content;return Object(r.jsx)(s.c,{to:e,className:function(t){var e=t.isActive;return j()("navbar-item",{"is-active":e})},children:c})},o=function(){return Object(r.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsx)(d,{to:"/",content:"Home"}),Object(r.jsx)(d,{to:"/tabs",content:"Tabs"})]})})})},h=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],x=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o,{}),Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)(i.d,{children:[Object(r.jsx)(i.b,{path:"/",element:Object(r.jsx)("h1",{className:"title",children:"Home page"})}),Object(r.jsx)(i.b,{path:"home",element:Object(r.jsx)(i.a,{to:"/",replace:!0})}),Object(r.jsxs)(i.b,{path:"/tabs",children:[Object(r.jsx)(i.b,{index:!0,element:Object(r.jsx)(l,{tabs:h})}),Object(r.jsx)(i.b,{path:":tabId",element:Object(r.jsx)(l,{tabs:h})})]}),Object(r.jsx)(i.b,{path:"*",element:Object(r.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})};n.a.render(Object(r.jsx)(s.a,{children:Object(r.jsx)(x,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.5b11a76c.chunk.js.map
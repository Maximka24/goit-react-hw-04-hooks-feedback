(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(e,t,c){e.exports={List:"Feedback-btn-list_List__28_AB",ElemList:"Feedback-btn-list_ElemList__2f7-E",BtnList:"Feedback-btn-list_BtnList__MsFBV"}},function(e,t,c){e.exports={Title:"Statistics_Title__C8xvL",List:"Statistics_List__1_wPX",ElemList:"Statistics_ElemList__1_KkJ"}},,,function(e,t,c){e.exports={Container:"Feedback_Container__CuLIF",Title:"Feedback_Title__1fx0q"}},,function(e,t,c){e.exports={Section:"Section_Section__1_s9P"}},,,,,,function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),i=c(7),a=c.n(i),l=c(4),o=c(8),r=c.n(o),j=c(0),b=function(e){var t=e.children;return Object(j.jsx)("div",{className:r.a.Section,children:t})},u=c(2),d=c.n(u),O=function(e){var t=e.onBtnLike,c=e.onBtnNeutral,s=e.onBtnBad;return Object(j.jsxs)("ul",{className:d.a.List,children:[Object(j.jsx)("li",{className:d.a.ElemList,children:Object(j.jsx)("button",{className:d.a.BtnList,onClick:t,children:"Good"})}),Object(j.jsx)("li",{className:d.a.ElemList,children:Object(j.jsx)("button",{className:d.a.BtnList,onClick:c,children:"Neutral"})}),Object(j.jsx)("li",{className:d.a.ElemList,children:Object(j.jsx)("button",{className:d.a.BtnList,onClick:s,children:"Bad"})})]})},f=c(6),h=c.n(f),m=function(e){var t=e.onClickLike,c=e.onClickNeutral,s=e.onClickBad;return Object(j.jsxs)("div",{className:h.a.Container,children:[Object(j.jsx)("h2",{className:h.a.Title,children:"Please leave feedback"}),Object(j.jsx)(O,{onBtnLike:t,onBtnNeutral:c,onBtnBad:s})]})},x=c(3),_=c.n(x),L=function(e){var t=e.good,c=e.neutral,s=e.bad,n=e.total,i=e.positive;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:_.a.Title,children:"Statistics"}),0===t&&0===c&&0===s?Object(j.jsx)("p",{children:"No feedback given"}):Object(j.jsxs)("ul",{className:_.a.List,children:[Object(j.jsxs)("li",{className:_.a.ElemList,children:["Good: ",t]}),Object(j.jsxs)("li",{className:_.a.ElemList,children:["Neutral: ",c]}),Object(j.jsxs)("li",{className:_.a.ElemList,children:["Bad: ",s]}),Object(j.jsxs)("li",{className:_.a.ElemList,children:["Total: ",n]}),Object(j.jsxs)("li",{className:_.a.ElemList,children:["Positive feedback: ",i,"%"]})]})]})};function k(){var e=Object(s.useState)(0),t=Object(l.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)(0),a=Object(l.a)(i,2),o=a[0],r=a[1],u=Object(s.useState)(0),d=Object(l.a)(u,2),O=d[0],f=d[1],h=Object(s.useState)(0),x=Object(l.a)(h,2),_=x[0],k=x[1],N=Object(s.useState)(0),B=Object(l.a)(N,2),E=B[0],v=B[1],C=Object(s.useRef)(!0);Object(s.useEffect)((function(){v(c/_*100)}),[c,_]),Object(s.useEffect)((function(){C.current?C.current=!1:k((function(e){return e+1}))}),[c,o,O]);return Object(j.jsxs)(b,{children:[Object(j.jsx)(m,{onClickLike:function(){console.log(),n((function(e){return e+1})),0===_&&v(100)},onClickNeutral:function(){r((function(e){return e+1}))},onClickBad:function(){f((function(e){return e+1}))}}),Object(j.jsx)(L,{good:c,neutral:o,bad:O,total:_,positive:E})]})}a.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.dfcbff21.chunk.js.map
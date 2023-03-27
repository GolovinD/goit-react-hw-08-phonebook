"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[676],{9676:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r=t(4270),o=t(9439),u=t(2791),a=t(9434),i="NOT_FOUND";var c=function(e,n){return e===n};function l(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,o=void 0===r?c:r,u=t.maxSize,a=void 0===u?1:u,l=t.resultEqualityCheck,s=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,o=0;o<r;o++)if(!e(n[o],t[o]))return!1;return!0}}(o),f=1===a?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:i},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(s):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return i}return{get:r,put:function(n,o){r(n)===i&&(t.unshift({key:n,value:o}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(a,s);function p(){var n=f.get(arguments);if(n===i){if(n=e.apply(null,arguments),l){var t=f.getEntries(),r=t.find((function(e){return l(e.value,n)}));r&&(n=r.value)}f.put(arguments,n)}return n}return p.clearCache=function(){return f.clear()},p}function s(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function f(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var o=function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];var u,a=0,i={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(i=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=i,f=l.memoizeOptions,p=void 0===f?t:f,d=Array.isArray(p)?p:[p],v=s(r),h=e.apply(void 0,[function(){return a++,c.apply(null,arguments)}].concat(d)),m=e((function(){for(var e=[],n=v.length,t=0;t<n;t++)e.push(v[t].apply(null,arguments));return u=h.apply(null,e)}));return Object.assign(m,{resultFunc:c,memoizedResultFunc:h,dependencies:v,lastResult:function(){return u},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),m};return o}var p=f(l),d=function(e){return e.contacts.items},v=(p([d,function(e){return e.filter.query}],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),t(3634)),h="ContactForm_form__dhl+T",m=t(184),y=function(){var e=(0,u.useState)(""),n=(0,o.Z)(e,2),t=n[0],r=n[1],i=(0,u.useState)(""),c=(0,o.Z)(i,2),l=c[0],s=c[1],f=(0,a.I0)(),p=(0,a.v9)(d);console.log(p);return(0,m.jsx)("div",{children:(0,m.jsxs)("form",{className:h,onSubmit:function(e){e.preventDefault(),function(e,n){if(console.log(e),p.find((function(n){return n.name.toLowerCase()===e.toLowerCase()})))return alert("".concat(e," is already in contacts.")),!1;var t={name:e,phone:n};console.log(t),f((0,v.uK)(t))}(t,l),console.log(t),""!==t&&""!==l&&(r(""),s(""))},children:[(0,m.jsxs)("label",{children:["Name",(0,m.jsx)("input",{type:"text",value:t,onChange:function(e){console.log(e.target.value),r(e.target.value),console.log(t)},name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,m.jsxs)("label",{children:["Number",(0,m.jsx)("input",{type:"tel",value:l,onChange:function(e){s(e.target.value)},name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,m.jsx)("button",{className:"btn",type:"submit",children:"Add contact"})]})})};function g(){return(0,m.jsxs)("div",{children:[(0,m.jsx)(r.q,{children:(0,m.jsx)("title",{children:"Contacts"})}),(0,m.jsx)(y,{})]})}}}]);
//# sourceMappingURL=676.8003797a.chunk.js.map
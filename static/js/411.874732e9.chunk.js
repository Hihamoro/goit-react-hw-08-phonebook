"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[411],{9411:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var a=t(9434),r=t(2791),o=t(6916),i=function(e){return e.contacts.contacts},u=function(e){return e.contacts.filter},c=function(e){return e.contacts.isLoading},s=(0,o.P1)([i,u],(function(e,n){var t=n.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))})),l=t(6052),d=t(9439),m=t(5984),h=t(4554),f=t(8279),x=t(6151),b=t(184);function p(){var e=(0,a.I0)(),n=(0,a.v9)(i),t=(0,r.useState)(""),o=(0,d.Z)(t,2),u=o[0],c=o[1],s=(0,r.useState)(""),p=(0,d.Z)(s,2),v=p[0],g=p[1],j=(0,m.x0)(),Z=(0,m.x0)(),C=function(e){var n=e.target,t=n.name,a=n.value;switch(t){case"name":c(a);break;case"number":g(a);break;default:return}},w=function(){c(""),g("")};return(0,b.jsxs)(h.Z,{component:"form",noValidate:!0,onSubmit:function(t){t.preventDefault();var a={name:u,number:v},r=n.find((function(e){return e.name.toLowerCase()===a.name.toLowerCase()}));r?alert(" ".concat(r.name," is already in contacts.")):e((0,l.uK)(a)),w()},sx:{mt:1},border:1,maxWidth:480,ml:"auto",mr:"auto",mb:5,borderRadius:2,padding:5,children:[(0,b.jsx)(f.Z,{margin:"normal",required:!0,fullWidth:!0,label:"Contact Name",autoComplete:"email",onChange:C,autoFocus:!0,id:j,type:"text",name:"name",value:u,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}),(0,b.jsx)(f.Z,{margin:"normal",required:!0,fullWidth:!0,name:"number",label:"Phone Number",autoComplete:"current-password",id:Z,type:"tel",value:v,onChange:C,pattern:"[0-9]{3}-[0-9]{2}-[0-9]{2}",title:"Phone number must be digits and can contain spaces, dashes, parentheses"}),(0,b.jsx)(x.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Add contact"})]})}var v=t(1538);function g(){var e=(0,a.I0)(),n=(0,a.v9)(u),t=(0,m.x0)();return(0,b.jsx)(h.Z,{maxWidth:400,ml:"auto",mr:"auto",children:(0,b.jsx)(f.Z,{margin:"normal",fullWidth:!0,id:t,type:"text",value:n,onChange:function(n){e((0,v.M)(n.currentTarget.value))},label:"Please enter contact name",variant:"standard"})})}var j=t(8593),Z="Loader_wrapper__2YrQT";function C(){return(0,b.jsx)("div",{className:Z,children:(0,b.jsx)(j.Rf,{color:"#1976d2",width:"100",visible:!0,ariaLabel:"falling-lines-loading"})})}var w=t(493),k=t(4852),_=t(653),y=t(6259),L=t(9952);function P(){var e=(0,a.I0)(),n=(0,a.v9)(s);return(0,b.jsx)(h.Z,{mt:5,mb:10,children:(0,b.jsx)(w.Z,{dense:!0,sx:{width:"100%",maxWidth:480,bgcolor:"background.paper",marginLeft:"auto",marginRight:"auto"},children:n.map((function(n){var t=n.id,a=n.name,r=n.number;return(0,b.jsxs)(k.ZP,{disablePadding:!0,children:[(0,b.jsx)(_.Z,{children:(0,b.jsx)(L.Z,{color:"primary"})}),(0,b.jsxs)(y.Z,{children:[a,": ",r]}),(0,b.jsx)(x.Z,{type:"button",onClick:function(){return e((0,l.GK)(t))},children:"Delete"})]},t)}))})})}var W=t(1614),A=t(890);function z(){var e=(0,a.I0)(),n=(0,a.v9)(c);return(0,r.useEffect)((function(){e((0,l.yF)())}),[e]),(0,b.jsxs)(W.Z,{children:[(0,b.jsx)(A.Z,{component:"h1",variant:"h4",align:"center",mt:10,children:"Phonebook"}),(0,b.jsx)(p,{}),(0,b.jsx)(g,{}),n&&(0,b.jsx)(C,{}),(0,b.jsx)(P,{})]})}}}]);
//# sourceMappingURL=411.874732e9.chunk.js.map
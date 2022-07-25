"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[388],{388:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(885),r=n(2791),i=n(3504),c=n(5984),s=n(2026),l=n(184),o=function(e){var t=e.formId,n=e.type,a=e.inputName,r=e.value,i=e.pattern,c=e.title,o=e.setName,u=e.inputRef,_=e.placeholder;return(0,l.jsxs)("label",{htmlFor:t,children:[a,(0,l.jsx)("input",{ref:u,onChange:o,id:t,type:n,name:a,value:r,pattern:i,title:c,placeholder:_,required:!0,className:s.Z.input__field})]})},u=function(e){var t=e.contacts,n=e.filter,a=e.deletionHandler;return console.log("contacts",t.items),(0,l.jsx)("ul",{className:s.Z.contact__list,children:""==={filter:n}?t.items.map((function(e){return(0,l.jsxs)("li",{className:s.Z.contact__listItem,children:[e.name,": ",e.number,(0,l.jsx)("button",{type:"button",onClick:function(){return a(e.id)},children:"Delete"})]},e.id)})):t.items.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).map((function(e){return(0,l.jsxs)("li",{className:s.Z.contact__listItem,children:[e.name,": ",e.number,(0,l.jsx)("button",{className:s.Z.input__button,type:"button",onClick:function(){return a(e.id)},children:"Delete"})]},e.id)}))})},_=function(e){var t=e.setName,n=e.inputId,a=e.type,r=e.inputName,i=e.value,c=e.placeholder;return(0,l.jsx)("input",{onChange:t,id:n,type:a,name:r,value:i,placeholder:c,className:s.Z.input__field})},d=n(9434),m=n(3261),f=n(220),p=function(){var e=(0,r.useState)(""),t=(0,a.Z)(e,2),n=t[0],p=t[1],h=(0,r.useState)(""),x=(0,a.Z)(h,2),v=x[0],N=x[1],b=(0,r.useRef)(),y=(0,r.useRef)((0,c.x0)()),g=(0,r.useRef)((0,c.x0)()),j=(0,r.useRef)((0,c.x0)()),Z=(0,d.I0)(),k=(0,d.v9)((function(e){return e.contacts})),C=(0,d.v9)((function(e){return e.contacts.filter}));(0,r.useEffect)((function(){Z((0,f.yF)()),b.current.focus()}),[]),(0,r.useEffect)((function(){}),[k]);return(0,l.jsxs)("div",{className:s.Z.container,children:[(0,l.jsx)(i.rU,{to:"/usermenu",className:s.Z.link__menu,children:"Profile"}),(0,l.jsx)("h1",{className:s.Z.input__header,children:"Phonebook"}),(0,l.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),k.items.some((function(e){return e.name===n})))alert("".concat(n," is already in contacts"));else{var t={id:(0,c.x0)(),name:n,number:v};console.log("new List",t),a=t,Z((0,f.xf)(a)),p(""),N("")}var a},children:[(0,l.jsx)(o,{inputRef:b,formId:y.current,type:"text",inputName:"Name",value:n,setName:function(e){p(e.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Enter contact's name"}),(0,l.jsx)(o,{formId:g.current,type:"tel",inputName:"Number",value:v,setName:function(e){N(e.target.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"Enter contact's number"}),(0,l.jsx)("button",{type:"submit",className:s.Z.input__button,children:"Add contact"})]}),(0,l.jsx)("h2",{className:s.Z.input__header,children:"Contacts:"}),(0,l.jsx)(_,{setName:function(e){var t;t=e.target.value,Z(m.C.actions.filterContacts(t))},inputId:j.current,type:"text",inputName:"Filter",value:C,placeholder:"Enter a phrase to find a contact"}),(0,l.jsx)(u,{contacts:k,filter:C,deletionHandler:function(e){var t;t=e,Z(m.C.actions.deleteContact(t)),function(e){Z((0,f.zY)(e))}(e)}})]})}},2026:function(e,t){t.Z={container:"PageStyles_container__j4f+1",input__field:"PageStyles_input__field__9n3ER",input__button:"PageStyles_input__button__ecN1D",link__text:"PageStyles_link__text__5Zgk8",link__menu:"PageStyles_link__menu__Ro0Je",contact__list:"PageStyles_contact__list__QkM31",contact__listItem:"PageStyles_contact__listItem__zmhcw"}},5984:function(e,t,n){n.d(t,{x0:function(){return a}});var a=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var a=63&n[e];t+=a<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a<63?"_":"-"}return t}}}]);
//# sourceMappingURL=388.3071f827.chunk.js.map
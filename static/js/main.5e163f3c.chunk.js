(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{125:function(t,e,n){t.exports=n(406)},24:function(t,e,n){t.exports={"contact-list":"Contact_contact-list__1CEDm","contact-list__items":"Contact_contact-list__items__gbR8_","contact-info":"Contact_contact-info__3szzo","contact-info__paragraph":"Contact_contact-info__paragraph__rdzeF","contact-info__button":"Contact_contact-info__button__3N4TL"}},26:function(t,e,n){t.exports={"contact-form":"ContactForm_contact-form__1XZM6","form-lable":"ContactForm_form-lable__1_G8-","form-input":"ContactForm_form-input__295Je","form-button":"ContactForm_form-button__3zsvn"}},406:function(t,e,n){"use strict";n.r(e);n(126);var a=n(1),c=n.n(a),r=n(14),o=n.n(r),l=n(124),i=n(37),s=n(46),m=n(47),u=n(49),f=n(48),_=n(45),p=n(26),b=n.n(p),h=function(t){Object(u.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChage=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(_.a)({},a,c))},t.hendleSubmit=function(e){e.preventDefault(),t.props.onContactsAdd(Object(i.a)({},t.state)),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(m.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("form",{onSubmit:this.hendleSubmit,className:b.a["contact-form"]},c.a.createElement("lable",{className:b.a["form-lable"]},"Name",c.a.createElement("input",{type:"text",name:"name",value:e,onChange:this.handleChage,className:b.a["form-input"]})),c.a.createElement("lable",{className:b.a["form-lable"]},"Number",c.a.createElement("input",{type:"text",name:"number",value:n,onChange:this.handleChage,className:b.a["form-input"]})),c.a.createElement("button",{className:b.a["form-button"],type:"submit"},"Add contact"))}}]),n}(a.Component),d=n(24),C=n.n(d),v=function(t){var e=t.contact,n=t.deleteContacts;return c.a.createElement("div",{className:C.a["contact-info"]},c.a.createElement("p",{className:C.a["contact-info__paragraph"]},e.name,": ",c.a.createElement("span",null,e.number)),c.a.createElement("button",{type:"button",onClick:n,className:C.a["contact-info__button"]},"Delete"))},E=function(t){var e=t.tasks,n=t.deleteContacts;return c.a.createElement("ul",{className:C.a["contact-list"]},e.map((function(t){return c.a.createElement("li",{key:t.id,className:C.a["contact-list__items"]},c.a.createElement(v,{contact:t,deleteContacts:function(){return n(t.id)}}))})))},g=n(51),N=n.n(g),y=function(t){var e=t.value,n=t.onChangeFilter;return c.a.createElement("div",{className:N.a.filter},c.a.createElement("label",{className:N.a["filter-lable"]},"Find contacts by name",c.a.createElement("input",{type:"text",value:e,onChange:function(t){return n(t.target.value)},className:N.a["filter-input"]})))},j=n(76),O=n.n(j),F=n(408),k=function(t,e){return t.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))},S=function(t){Object(u.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.changeFilter=function(e){t.setState({filter:e})},t.addContacts=function(e){var n=k(t.state.contacts,e),a=Object(i.a)(Object(i.a)({},e),{},{id:Object(F.a)()});e.name?n?alert("".concat(n.name," is already in contacts")):t.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[a])}})):alert("Input name please!")},t.onDeleteContacts=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(m.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}(e,n);return c.a.createElement("div",null,c.a.createElement("h1",{className:O.a["title-h1"]},"Phonebook"),c.a.createElement(h,{onContactsAdd:this.addContacts}),e.length>0&&c.a.createElement("h2",{className:O.a["title-h2"]},"Contacts"),e.length>1&&c.a.createElement(y,{value:n,onChangeFilter:this.changeFilter}),e.length>0&&c.a.createElement(E,{tasks:a,deleteContacts:this.onDeleteContacts}))}}]),n}(a.Component);o.a.render(c.a.createElement(S,null),document.getElementById("root"))},51:function(t,e,n){t.exports={filter:"Filter_filter__SPc_P","filter-lable":"Filter_filter-lable__2nkHS","filter-input":"Filter_filter-input__2W9F8"}},76:function(t,e,n){t.exports={"title-h1":"App_title-h1__kOtCj","title-h2":"App_title-h2__1gg4r"}}},[[125,1,2]]]);
//# sourceMappingURL=main.5e163f3c.chunk.js.map
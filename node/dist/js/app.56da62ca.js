(function(t){function e(e){for(var a,o,s=e[0],l=e[1],m=e[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(d.length)d.shift()();return n.push.apply(n,m||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],a=!0,s=1;s<i.length;s++){var l=i[s];0!==r[l]&&(a=!1)}a&&(n.splice(e--,1),t=o(o.s=i[0]))}return t}var a={},r={app:0},n=[];function o(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=a,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(i,a,function(e){return t[e]}.bind(null,a));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var m=0;m<s.length;m++)e(s[m]);var c=l;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"106d":function(t,e,i){},"30f7":function(t,e,i){"use strict";i("106d")},5270:function(t,e,i){"use strict";i("c18d")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",[i("router-link",{attrs:{to:"/login"}},[t._v("Login")])],1),i("div",[i("router-link",{attrs:{to:"/register"}},[t._v("Register")])],1),i("div",[i("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),i("b-row",[i("b-col",{attrs:{sm:"2"}},[i("label",{attrs:{for:"user"}},[t._v("IME:")])]),i("b-col",{attrs:{sm:"10"}},[i("p",{staticStyle:{"text-align":"left"},attrs:{id:"user"}},[t._v(t._s(t.user.username))])])],1),i("router-view")],1)},n=[],o=i("5530"),s=i("8c4f"),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("div",[i("b-jumbotron",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("Fudbalska liga")]},proxy:!0}])},[i("hr",{staticClass:"my-4"}),i("p",[t._v(" Ovde mozete videti trenutne rezultate nase mini lige! ")]),i("router-link",{staticClass:"btn btn-primary btn-lg",attrs:{to:"/timovi",type:"button"}},[t._v("Timovi")]),i("div",{staticClass:"mt-2 col-md-12"}),i("router-link",{staticClass:"btn btn-primary btn-lg",attrs:{to:"/fudbaleri"}},[t._v("Fudbaleri")])],1)],1)])},m=[],c={name:"Home"},u=c,d=i("2877"),b=Object(d["a"])(u,l,m,!1,null,null,null),p=b.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{attrs:{id:"nav"}},[i("AddTim",{attrs:{timovi:t.timovi}})],1),i("b-row",[i("b-col",{attrs:{sm:"1",offset:"5"}},[i("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"ID tima"},model:{value:t.idTimovi2,callback:function(e){t.idTimovi2=e},expression:"idTimovi2"}})],1),i("b-button",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{variant:"primary"},on:{click:t.openTeam}},[t._v("Vise detalja")])],1),i("div",[i("b-row",[i("b-col",[t._v(" ---- ")])],1)],1),i("div",{staticClass:"tabela"},[i("Header"),i("b-container",[i("b-row",[i("b-col",{attrs:{cm:"6"}},[i("TabelaTimova")],1)],1),i("b-row",[i("b-col",{attrs:{sm:"2",offset:"4"}},[i("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"ID tima"},model:{value:t.idTimovi,callback:function(e){t.idTimovi=e},expression:"idTimovi"}})],1),i("b-button",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{variant:"primary"},on:{click:t.deleteTeam}},[t._v("Delete")])],1)],1)],1)],1)},v=[],h=(i("d3b7"),i("ddb0"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("b-jumbotron",{attrs:{header:"Dodajte tim"}},[i("b-container",{attrs:{fluid:""}},[i("b-form",[i("b-row",{staticClass:"mt-2"},[i("b-col",{attrs:{sm:"2",offset:"4"}},[i("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"Ime tima"},model:{value:t.ime_tima,callback:function(e){t.ime_tima=e},expression:"ime_tima"}})],1),i("b-col",{attrs:{sm:"2"}},[i("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"Osvojeni poeni"},model:{value:t.osvojeni_poeni,callback:function(e){t.osvojeni_poeni=e},expression:"osvojeni_poeni"}})],1)],1),i("b-row",{staticClass:"mt-2"}),i("b-row",[i("b-col",{attrs:{sm:"12"}},[i("b-button",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{variant:"primary",size:"lg"},on:{click:t.addNew}},[t._v("Save")]),i("router-link",{staticClass:"btn btn-primary btn-lg mb-2 mr-sm-2 mb-sm-0",attrs:{to:"/edittim",type:"button",variant:"primary"}},[t._v("Edit")])],1)],1)],1)],1)],1)],1)}),g=[],j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("b-jumbotron",{attrs:{header:"Promenite broj poena tima"}},[i("b-container",{attrs:{fluid:""}},[i("b-form",[i("b-row",{staticClass:"mt-2"},[i("b-col",{attrs:{sm:"2",offset:"3"}},[i("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"ID tima"},model:{value:t.idTimovi,callback:function(e){t.idTimovi=e},expression:"idTimovi"}})],1),i("b-col",{attrs:{sm:"2"}},[i("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"Ime tima"},model:{value:t.ime_tima,callback:function(e){t.ime_tima=e},expression:"ime_tima"}})],1),i("b-col",{attrs:{sm:"2"}},[i("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"Osvojeni poeni"},model:{value:t.osvojeni_poeni,callback:function(e){t.osvojeni_poeni=e},expression:"osvojeni_poeni"}})],1)],1),i("b-row",{staticClass:"mt-2"}),i("b-row",[i("b-col",{attrs:{sm:"12"}},[i("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:t.change}},[t._v("Save")])],1)],1)],1)],1)],1)],1)},_=[],y=i("2f62"),w=i("d370"),x=w.object().keys({ime_tima:w.string().min(3).max(24).required(),osvojeni_poeni:w.number().required(),id:w.number().required()}),T={name:"EditTim",computed:Object(o["a"])({},Object(y["c"])(["timovi"])),data:function(){return{ime_tima:"",osvojeni_poeni:"",idTimovi:""}},methods:Object(o["a"])(Object(o["a"])({},Object(y["b"])(["changeTim"])),{},{change:function(){var t=JSON.stringify({ime_tima:this.ime_tima,osvojeni_poeni:parseInt(this.osvojeni_poeni)}),e=x.validate({ime_tima:this.ime_tima,osvojeni_poeni:parseInt(this.osvojeni_poeni),id:this.idTimovi}),i=e.error;e.value;i?alert(i):(this.changeTim({idTimovi:parseInt(this.idTimovi),msg:t}),Xt.push({path:"/timovi"})),this.ime_tima="",this.osvojeni_poeni="",this.idTimovi=""}})},O=T,k=Object(d["a"])(O,j,_,!1,null,"192e2fb2",null),F=k.exports,C=i("d370"),I=C.object().keys({ime_tima:C.string().min(3).max(24).required(),osvojeni_poeni:C.number().required()}),z={name:"AddTim",props:{timovi:Array},data:function(){return{ime_tima:"",osvojeni_poeni:""}},methods:Object(o["a"])(Object(o["a"])({},Object(y["b"])(["newTim"])),{},{addNew:function(){var t=JSON.stringify({ime_tima:this.ime_tima,osvojeni_poeni:parseInt(this.osvojeni_poeni)}),e=I.validate({ime_tima:this.ime_tima,osvojeni_poeni:parseInt(this.osvojeni_poeni)}),i=e.error;e.value;i?alert(i):this.newTim(t),this.ime_tima="",this.osvojeni_poeni=""}})},E=z,S=Object(d["a"])(E,h,g,!1,null,"b32c8aa0",null),q=S.exports,P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("b-table",{attrs:{"sticky-header":"800px",items:t.timovi,fields:t.fields,"head-variant":"light"}})],1)},N=[],$={name:"TabelaTimova",computed:Object(o["a"])({},Object(y["c"])(["timovi"])),data:function(){return{fields:[{key:"idTimovi"},{key:"ime_tima"},{key:"osvojeni_poeni"}]}}},A=$,D=Object(d["a"])(A,P,N,!1,null,"9855aec4",null),J=D.exports,M=i("d370"),U=M.object().keys({id:M.number().required()}),H={name:"Timovi",components:{TabelaTimova:J,AddTim:q},data:function(){return{idTimovi:"",idTimovi2:""}},methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(y["b"])(["loadTimovi"])),Object(y["b"])(["deleteTim"])),{},{deleteTeam:function(){var t=U.validate({id:this.idTimovi}),e=t.error;t.value;e?alert(e):this.deleteTim(parseInt(this.idTimovi)),this.idTimovi=""},openTeam:function(){var t=U.validate({id:this.idTimovi2}),e=t.error;t.value;e?alert(e):Xt.push({path:"/timovi/".concat(this.idTimovi2)})}}),mounted:function(){this.loadTimovi()}},R=H,L=Object(d["a"])(R,f,v,!1,null,"2e60a002",null),G=L.exports,V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",[i("div",{attrs:{id:"nav"}},[i("AddFudbaler",{attrs:{fudbaleri:t.fudbaleri}})],1)]),i("b-row",[i("b-col",{attrs:{sm:"1",offset:"5"}},[i("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"ID fudbalera"},model:{value:t.idFudbaleri2,callback:function(e){t.idFudbaleri2=e},expression:"idFudbaleri2"}})],1),i("b-button",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{variant:"primary"},on:{click:t.openFudbaler}},[t._v("Vise detalja")])],1),i("div",[i("b-row",[i("b-col",[t._v(" ---- ")])],1)],1),i("div",[i("div",{staticClass:"tabela"},[i("Header"),i("b-container",[i("b-row",[i("b-col",{attrs:{cm:"6"}},[i("TabelaFudbalera")],1)],1),i("b-row",[i("b-col",{attrs:{sm:"2",offset:"4"}},[i("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"ID fudbalera"},model:{value:t.idFudbaleri,callback:function(e){t.idFudbaleri=e},expression:"idFudbaleri"}})],1),i("b-button",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{variant:"primary",size:"lg"},on:{click:t.deleteFudbal}},[t._v("Delete")])],1)],1)],1)])],1)},Z=[],B=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("b-table",{attrs:{"sticky-header":"800px",items:t.fudbaleri,fields:t.fields,"head-variant":"light"}})],1)},K=[],Q={name:"TabelaFudbalera",computed:Object(o["a"])({},Object(y["c"])(["fudbaleri"])),data:function(){return{fields:[{key:"idFudbaleri"},{key:"ime"},{key:"prezime"},{key:"golovi"},{key:"asistencije"}]}}},W=Q,X=Object(d["a"])(W,B,K,!1,null,"5c4aea6e",null),Y=X.exports,tt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("b-jumbotron",{attrs:{header:"Dodajte fudbalera"}},[i("b-container",{attrs:{fluid:""}},[i("b-form",[i("b-row",{staticClass:"mt-2"},[i("b-col",{attrs:{sm:"2",offset:"2"}},[i("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"Ime"},model:{value:t.ime,callback:function(e){t.ime=e},expression:"ime"}})],1),i("b-col",{attrs:{sm:"2"}},[i("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"Prezime"},model:{value:t.prezime,callback:function(e){t.prezime=e},expression:"prezime"}})],1),i("b-col",{attrs:{sm:"2"}},[i("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"Golovi"},model:{value:t.golovi,callback:function(e){t.golovi=e},expression:"golovi"}})],1),i("b-col",{attrs:{sm:"2"}},[i("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"Asistencije"},model:{value:t.asistencije,callback:function(e){t.asistencije=e},expression:"asistencije"}})],1)],1),i("b-row",{staticClass:"mt-2"}),i("b-row",[i("b-col",{attrs:{sm:"12"}},[i("b-button",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{variant:"primary",size:"lg"},on:{click:t.addNew}},[t._v("Save")]),i("router-link",{staticClass:"btn btn-primary btn-lg mb-2 mr-sm-2 mb-sm-0",attrs:{to:"/editFudbaler",type:"button",variant:"primary"}},[t._v("Edit")])],1)],1)],1)],1)],1)],1)},et=[],it=(i("498a"),i("d370")),at=it.object().keys({ime:it.string().trim().max(30).required(),prezime:it.string().trim().max(30).required(),golovi:it.number().required(),asistencije:it.number().required()}),rt={name:"AddFudbaler",props:{fudbaleri:Array},data:function(){return{ime:"",prezime:"",golovi:"",asistencije:""}},methods:Object(o["a"])(Object(o["a"])({},Object(y["b"])(["newFudbaler"])),{},{addNew:function(){var t=JSON.stringify({ime:this.ime,prezime:this.prezime,golovi:parseInt(this.golovi),asistencije:parseInt(this.asistencije)}),e=at.validate({ime:this.ime,prezime:this.prezime,golovi:parseInt(this.golovi),asistencije:parseInt(this.asistencije)}),i=e.error;e.value;i?alert(i):this.newFudbaler(t),this.ime="",this.prezime="",this.golovi="",this.asistencije=""}})},nt=rt,ot=Object(d["a"])(nt,tt,et,!1,null,"0889667c",null),st=ot.exports,lt=i("d370"),mt=lt.object().keys({id:lt.number().required()}),ct={name:"Fudbaleri",components:{TabelaFudbalera:Y,AddFudbaler:st},data:function(){return{idFudbaleri:"",idFudbaleri2:""}},methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(y["b"])(["loadFudbaleri"])),Object(y["b"])(["deleteFudbaler"])),{},{deleteFudbal:function(){console.log(this.idFudbaleri);var t=mt.validate({id:this.idFudbaleri}),e=t.error;t.value;e?alert(e):this.deleteFudbaler(parseInt(this.idFudbaleri)),this.idFudbaleri=""},openFudbaler:function(){var t=mt.validate({id:this.idFudbaleri2}),e=t.error;t.value;e?alert(e):Xt.push({path:"/fudbaleri/".concat(this.idFudbaleri2)})}}),mounted:function(){this.loadFudbaleri()}},ut=ct,dt=Object(d["a"])(ut,V,Z,!1,null,"7458d8d0",null),bt=dt.exports,pt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("b-jumbotron",{attrs:{header:"Izmenite informacije o fudbaleru"}},[i("b-container",{attrs:{fluid:""}},[i("b-form",[i("b-row",{staticClass:"mt-2"},[i("b-col",{attrs:{sm:"2",offset:"1"}},[i("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"ID fudbalera"},model:{value:t.idFudbaleri,callback:function(e){t.idFudbaleri=e},expression:"idFudbaleri"}})],1),i("b-col",{attrs:{sm:"2"}},[i("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"Ime"},model:{value:t.ime,callback:function(e){t.ime=e},expression:"ime"}})],1),i("b-col",{attrs:{sm:"2"}},[i("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"Prezime"},model:{value:t.prezime,callback:function(e){t.prezime=e},expression:"prezime"}})],1),i("b-col",{attrs:{sm:"2"}},[i("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"golovi"},model:{value:t.golovi,callback:function(e){t.golovi=e},expression:"golovi"}})],1),i("b-col",{attrs:{sm:"2"}},[i("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"asistencije"},model:{value:t.asistencije,callback:function(e){t.asistencije=e},expression:"asistencije"}})],1)],1),i("b-row",{staticClass:"mt-2"}),i("b-row",[i("b-col",{attrs:{sm:"12"}},[i("b-button",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{variant:"primary",size:"lg"},on:{click:t.change}},[t._v("Save")])],1)],1)],1)],1)],1)],1)},ft=[],vt=i("d370"),ht=vt.object().keys({ime:vt.string().trim().max(30).required(),prezime:vt.string().trim().max(30).required(),golovi:vt.number().required(),asistencije:vt.number().required(),id:vt.number().required()}),gt={name:"EditFudbaler",data:function(){return{ime:"",prezime:"",golovi:"",minuti_odigrani:"",idFudbaleri:""}},methods:Object(o["a"])(Object(o["a"])({},Object(y["b"])(["changeFudbaler"])),{},{change:function(){var t=JSON.stringify({ime:this.ime,prezime:this.prezime,golovi:parseInt(this.golovi),asistencije:parseInt(this.asistencije)}),e=ht.validate({ime:this.ime,prezime:this.prezime,golovi:parseInt(this.golovi),asistencije:parseInt(this.asistencije),id:this.idFudbaleri}),i=e.error;e.value;i?alert(i):(this.changeFudbaler({idFudbaleri:parseInt(this.idFudbaleri),msg:t}),Xt.push({path:"/fudbaleri"})),this.ime="",this.prezime="",this.golovi="",this.asistencije="",this.idFudbaleri=""}})},jt=gt,_t=Object(d["a"])(jt,pt,ft,!1,null,"fb5862a0",null),yt=_t.exports,wt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-container",{attrs:{fluid:""}},[i("b-row",[i("b-col",{attrs:{sm:"2"}},[i("label",{attrs:{for:"user"}},[t._v("IME:")])]),i("b-col",{attrs:{sm:"10"}},[i("p",{staticStyle:{"text-align":"left"},attrs:{id:"user"}},[t._v(t._s(t.tim.ime_tima))])])],1),i("b-row",{staticClass:"mt-2"},[i("b-col",{attrs:{sm:"2"}},[i("label",{attrs:{for:"msg"}},[t._v("POENI:")])]),i("b-col",{attrs:{sm:"10"}},[i("p",{staticStyle:{"text-align":"left"},attrs:{id:"msg"}},[t._v(t._s(t.tim.osvojeni_poeni))])])],1)],1)},xt=[],Tt={name:"Tim",components:{},data:function(){return{}},computed:Object(o["a"])(Object(o["a"])({},Object(y["c"])(["timovi"])),{},{tim:function(){for(var t=0;t<this.timovi.length;t++)if(this.timovi[t].idTimovi===parseInt(this.$route.params.id))return this.timovi[t]}}),methods:Object(o["a"])({},Object(y["b"])(["loadTimovi"]))},Ot=Tt,kt=Object(d["a"])(Ot,wt,xt,!1,null,"6a0f8a0a",null),Ft=kt.exports,Ct=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-container",{attrs:{fluid:""}},[i("b-row",[i("b-col",{attrs:{sm:"2"}},[i("label",{attrs:{for:"user"}},[t._v("IME:")])]),i("b-col",{attrs:{sm:"10"}},[i("p",{staticStyle:{"text-align":"left"},attrs:{id:"user"}},[t._v(t._s(t.fudbaler.ime))])])],1),i("b-row",{staticClass:"mt-2"},[i("b-col",{attrs:{sm:"2"}},[i("label",{attrs:{for:"msg"}},[t._v("PREZIME:")])]),i("b-col",{attrs:{sm:"10"}},[i("p",{staticStyle:{"text-align":"left"},attrs:{id:"msg"}},[t._v(t._s(t.fudbaler.prezime))])])],1),i("b-row",{staticClass:"mt-2"},[i("b-col",{attrs:{sm:"2"}},[i("label",{attrs:{for:"msg"}},[t._v("Golovi:")])]),i("b-col",{attrs:{sm:"10"}},[i("p",{staticStyle:{"text-align":"left"},attrs:{id:"msg"}},[t._v(t._s(t.fudbaler.golovi))])])],1),i("b-row",{staticClass:"mt-2"},[i("b-col",{attrs:{sm:"2"}},[i("label",{attrs:{for:"msg"}},[t._v("Asistencije:")])]),i("b-col",{attrs:{sm:"10"}},[i("p",{staticStyle:{"text-align":"left"},attrs:{id:"msg"}},[t._v(t._s(t.fudbaler.asistencije))])])],1)],1)},It=[],zt={name:"Fudbaler",components:{},data:function(){return{}},computed:Object(o["a"])(Object(o["a"])({},Object(y["c"])(["fudbaleri"])),{},{fudbaler:function(){for(var t=0;t<this.fudbaleri.length;t++)if(this.fudbaleri[t].idFudbaleri===parseInt(this.$route.params.id))return this.fudbaleri[t]}}),methods:Object(o["a"])({},Object(y["b"])(["loadFudbaleri"]))},Et=zt,St=Object(d["a"])(Et,Ct,It,!1,null,"3c241ed8",null),qt=St.exports,Pt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"login"}},[i("h1",[t._v("Login")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",name:"username",placeholder:"Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),i("button",{attrs:{type:"button"},on:{click:t.loginF}},[t._v("Login")])])},Nt=[],$t=i("d370"),At=$t.object().keys({username:$t.string().min(5).max(40).required(),password:$t.string().min(5).max(15).required()}),Dt={name:"Login",data:function(){return{username:"",password:""}},methods:Object(o["a"])(Object(o["a"])({},Object(y["b"])(["login"])),{},{loginF:function(){var t=JSON.stringify({username:this.username,password:this.password});console.log(t);var e=At.validate({username:this.username,password:this.password}),i=e.error;e.value;i?alert(i):this.login(t)}})},Jt=Dt,Mt=(i("5270"),Object(d["a"])(Jt,Pt,Nt,!1,null,"00f3df61",null)),Ut=Mt.exports,Ht=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"register"}},[i("h1",[t._v("Registration")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",name:"username",placeholder:"Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",name:"email",placeholder:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",name:"name",placeholder:"name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),i("button",{attrs:{type:"button"},on:{click:t.addNew}},[t._v("Register")])])},Rt=[],Lt=(i("b0c0"),i("d370")),Gt=Lt.object().keys({username:Lt.string().min(5).max(40).required(),password:Lt.string().min(5).max(15).required(),name:Lt.string().min(2).max(20),email:Lt.string().email({tlds:{allow:!1}})}),Vt={name:"Register",data:function(){return{username:"",password:"",name:"",email:""}},methods:Object(o["a"])(Object(o["a"])({},Object(y["b"])(["newUser"])),{},{addNew:function(){var t=JSON.stringify({username:this.username,password:this.password,name:this.name,email:this.email});console.log(t);var e=Gt.validate({username:this.username,password:this.password,name:this.name,email:this.email}),i=e.error;e.value;i?alert(i):this.newUser(t)}})},Zt=Vt,Bt=(i("30f7"),Object(d["a"])(Zt,Ht,Rt,!1,null,"e981fc0a",null)),Kt=Bt.exports;a["default"].use(s["a"]);var Qt=[{path:"/",name:"Home",component:p},{path:"/timovi",name:"Timovi",component:G},{path:"/fudbaleri",name:"Fudbaleri",component:bt},{path:"/editTim",name:"EditTim",component:F},{path:"/editFudbaler",name:"EditFudbaler",component:yt},{path:"/timovi/:id",name:"timovi",component:Ft},{path:"/fudbaleri/:id",name:"fudbaleri",component:qt},{path:"/login",name:"login",component:Ut},{path:"/register",name:"register",component:Kt}],Wt=new s["a"]({mode:"history",base:"/",routes:Qt}),Xt=Wt,Yt={computed:Object(o["a"])({},Object(y["c"])(["user"]))},te=Yt,ee=(i("034f"),Object(d["a"])(te,r,n,!1,null,null,null)),ie=ee.exports;i("a434");a["default"].use(y["a"]);var ae=new y["a"].Store({state:{fudbaleri:[],timovi:[],user:[]},mutations:{setUser:function(t,e){t.user=e},setFudbaleri:function(t,e){t.fudbaleri=e},setTimovi:function(t,e){t.timovi=e},addTim:function(t,e){t.timovi.push(e)},addFudbaler:function(t,e){t.fudbaleri.push(e)},removeFudbaler:function(t,e){for(var i=0;i<t.fudbaleri.length;i++)if(t.fudbaleri[i].idFudbaleri===e){t.fudbaleri.splice(i,1);break}},removeTim:function(t,e){for(var i=0;i<t.timovi.length;i++)if(t.timovi[i].idTimovi===e){t.timovi.splice(i,1);break}},updateFudbaler:function(t,e){for(var i=0;i<t.fudbaleri.length;i++)if(t.fudbaleri[i].idTimovi===parseInt(e.idTimovi)){t.fudbaleri[i].ime=e.msg.ime,t.fudbaleri[i].prezime=e.msg.prezime,t.fudbaleri[i].osvojeni_poeni=e.msg.osvojeni_poeni,t.fudbaleri[i].minuti_odigrani=e.msg.minuti_odigrani;break}},updateTim:function(t,e){for(var i=0;i<t.timovi.length;i++)if(t.timovi[i].idTimovi===parseInt(e.idTimovi)){t.timovi[i].ime_tima=e.msg.ime_tima,t.timovi[i].osvojeni_poeni=e.msg.osvojeni_poeni;break}}},actions:{loadFudbaleri:function(t){var e=t.commit;fetch("http://localhost:81/api/fudbaleri",{method:"get"}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){e("setFudbaleri",t)})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))},loadTimovi:function(t){var e=t.commit;fetch("http://localhost:81/api/timovi",{method:"get"}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){e("setTimovi",t)})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))},deleteFudbaler:function(t,e){var i=t.commit;fetch("http://localhost:81/api/fudbaleri/del/".concat(e),{method:"post"}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){i("removeFudbaler",t.idFudbaleri)})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))},deleteTim:function(t,e){var i=t.commit;fetch("http://localhost:81/api/timovi/del/".concat(e),{method:"post"}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){i("removeTim",t.idTimovi)})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))},login:function(t,e){var i=t.commit;fetch("http://localhost:81/api/login",{method:"post",headers:{"Content-Type":"application/json"},body:e}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){i("setUser",t)})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))},newUser:function(t,e){t.commit;fetch("http://localhost:81/api/register",{method:"post",headers:{"Content-Type":"application/json"},body:e}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))},newTim:function(t,e){var i=t.commit;fetch("http://localhost:81/api/timovi",{method:"post",headers:{"Content-Type":"application/json"},body:e}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){i("addTim",t)})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))},newFudbaler:function(t,e){var i=t.commit;fetch("http://localhost:81/api/fudbaleri",{method:"post",headers:{"Content-Type":"application/json"},body:e}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){i("addFudbaler",t)})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))},changeTim:function(t,e){var i=t.commit;fetch("http://localhost:81/api/timovi/".concat(e.idTimovi),{method:"post",headers:{"Content-Type":"application/json"},body:e.msg}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){i("updateTim",{id:e.idTimovi,msg:t})})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))},changeFudbaler:function(t,e){var i=t.commit;fetch("http://localhost:81/api/fudbaleri/".concat(e.idFudbaleri),{method:"post",headers:{"Content-Type":"application/json"},body:e.msg}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){i("updateFudbaler",{id:e.idFudbaleri,msg:t})})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))}},modules:{}}),re=i("5f5b");i("f9e3"),i("2dd8");a["default"].use(re["a"]),a["default"].config.productionTip=!1,new a["default"]({router:Xt,store:ae,render:function(t){return t(ie)}}).$mount("#app")},"85ec":function(t,e,i){},c18d:function(t,e,i){}});
//# sourceMappingURL=app.56da62ca.js.map
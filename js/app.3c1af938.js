(function(e){function t(t){for(var s,n,i=t[0],l=t[1],c=t[2],m=0,d=[];m<i.length;m++)n=i[m],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],s=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(s=!1)}s&&(o.splice(t--,1),e=n(n.s=a[0]))}return e}var s={},r={app:0},o=[];function n(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=s,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/employee-management/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"06ee":function(e,t,a){},"0986":function(e,t,a){"use strict";a("c628")},"0c1f":function(e,t,a){},"0e46":function(e,t,a){"use strict";a("06ee")},"14c7":function(e,t,a){"use strict";a("1e4c")},"19e8":function(e,t,a){"use strict";a("0c1f")},"1cda":function(e,t,a){},"1e4c":function(e,t,a){},"29c1":function(e,t,a){"use strict";a("ca47")},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=o,e.exports=r,r.id="4678"},5423:function(e,t,a){"use strict";a("ff4b")},"56d7":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",[e.$route.meta.hideLayoutComponents?e._e():a("header-component"),a("transition",{attrs:{name:"route",mode:"out-in"}},[a("router-view")],1),a("alert-component"),e.$route.meta.hideLayoutComponents?e._e():a("footer-component")],1)},r=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"header"},[s("b-navbar-toggle",{staticClass:"header__btn-side-menu",attrs:{target:"side-menu"}},[s("font-awesome-icon",{attrs:{icon:["fas","bars"]}})],1),s("h3",{staticClass:"header__title"},[e._v(" "+e._s(e.title)+" ")]),s("b-sidebar",{staticClass:"header__navbar",attrs:{id:"side-menu","no-header":"",backdrop:"",shadow:""}},[s("div",{staticClass:"header__navbar-background"},[s("img",{staticClass:"navbar__logo",attrs:{src:a("cf05"),alt:"Logo"}}),s("div",{staticClass:"navbar__user"},[s("img",{staticClass:"navbar__avatar",attrs:{src:a("915e"),alt:"Avatar"}}),s("p",{staticClass:"navbar__title"},[e._v(" Bienvenido ")]),s("p",{staticClass:"navbar__text"},[e._v(" "+e._s(e.user.name)+" "+e._s(e.user.lastName)+" ")])])]),s("b-nav",{staticClass:"px-3 py-2",attrs:{vertical:""}},[e._l(e.menuItems,(function(t,a){return[t.children?s("b-nav-item-dropdown",{key:a,scopedSlots:e._u([{key:"button-content",fn:function(){return[s("font-awesome-icon",{attrs:{icon:t.icon}}),e._v(" "+e._s(t.title)+" ")]},proxy:!0}],null,!0)},[e._l(t.children,(function(t,a){return[s("b-dropdown-item",{key:a,attrs:{to:{name:t.routeName}}},[e._v(" "+e._s(t.title)+" ")])]}))],2):s("b-nav-item",{key:a,attrs:{to:{name:t.routeName}}},[e._v(" "+e._s(t.title)+" ")])]})),e.isLoggedIn?s("b-nav-item",{on:{click:function(t){return e.signOut()}}},[s("font-awesome-icon",{attrs:{icon:["fas","sign-out-alt"]}}),e._v(" Cerrar sesión ")],1):e._e()],2)],1)],1)},n=[],i=a("2f62"),l=a("2591"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"image"},[a("div",{staticClass:"image__outline",style:e.image__outline_color},[e.image?a("img",{staticClass:"image-circle",attrs:{width:e.imageSize,height:e.imageSize,src:e.imageUrl}}):a("p",{staticClass:"image-names"},[e._v(" "+e._s(e.joinInitialLetters()))]),e.editable?a("div",{staticClass:"image__background-icon"},[a("label",{attrs:{for:"profile-image"}},[a("font-awesome-icon",{staticClass:"image-icon",attrs:{icon:"camera"}}),a("input",{attrs:{id:"profile-image",name:"myImageProfile",type:"file",accept:"image/png, image/gif, image/jpeg"},on:{change:function(t){return e.onFileChange(t)}}})],1)]):e._e()])])},u=[],m={props:{name:String,lastName:String,imageUrl:String,imageSize:Number,editable:Boolean,isActive:Boolean},data(){return{imageSrc:null}},methods:{joinInitialLetters(){return this.name[0]&&this.lastName[0]?this.name[0]+this.lastName[0]:"+"},onFileChange(e){const t=e.target.files;if(!t.length)return this.imageSrc=null;this.createImage(t[0])},createImage(e){const t=new FileReader;t.onload=e=>{this.imageSrc=e.target.result,this.$emit("input",this.imageSrc)},t.readAsDataURL(e)}},computed:{image__outline_color(){return this.isActive?{"--borderColor":"#72EEA6"}:{"--borderColor":"#BB0000"}},image(){return this.imageUrl||this.imageSrc}}},d=m,p=(a("6a01"),a("2877")),f=Object(p["a"])(d,c,u,!1,null,"ccba3f72",null),b=f.exports,g={name:"header-component",components:{"card-image":b},data(){return{menuItems:[{title:"Empleados",icon:"phone-alt",children:[{title:"Lista",routeName:"employees"},{title:"Crear",routeName:"create-employee"}]}]}},computed:{...Object(i["b"])({title:"getTitle",isLoggedIn:"getIsLoggedIn",user:"getUserData"})},methods:{signOut(){this.$root.$store.dispatch("setLogout"),l["a"].auth().signOut().then(()=>this.$router.go("/"))}}},h=g,y=(a("e886"),Object(p["a"])(h,o,n,!1,null,"3a3de088",null)),_=y.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div")},j=[],C=(a("c89f"),{}),E=Object(p["a"])(C,v,j,!1,null,"2e67aa7b",null),w=E.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"alert"}},[a("b-alert",{attrs:{show:e.status,dismissible:"",fade:"",variant:e.alertType}},[e._v(" "+e._s(e.message)+" ")])],1)},x=[],k={data(){return{alertType:"",message:"",alertInterval:""}},computed:{alerts(){return this.$root.$store.getters.getAlertQueue},status(){return this.$root.$store.getters.getAlertActiveStatus}},watch:{status(){this.alertIterator(),this.alertInterval=setInterval(this.alertIterator,1500)}},methods:{alertIterator(){if(0==this.alerts.length)return this.$root.$store.dispatch("shutDownAlert"),void setTimeout(clearInterval(this.alertInterval),1500);this.message=this.alerts[0].message,this.alertType=this.alerts[0].type,this.alerts.shift()}}},$=k,L=(a("5423"),Object(p["a"])($,S,x,!1,null,"11ac62e0",null)),I=L.exports,A={name:"app",components:{"header-component":_,"footer-component":w,"alert-component":I}},N=A,O=(a("5c0b"),Object(p["a"])(N,s,r,!1,null,null,null)),F=O.exports,T=a("bc3a"),z=a.n(T),D=a("2b0e"),P={state:{active:!1,alertQueue:[]},getters:{getAlertActiveStatus:e=>e.active,getAlertQueue:e=>e.alertQueue},actions:{setAlert({commit:e},t){e("SET_ALERT",t)},shutDownAlert({commit:e}){e("SHUT_DOWN_ALERT")},enableAlert({commit:e}){e("ENABLE_ALERT")}},mutations:{SET_ALERT(e,t){e.alertQueue.push({message:t.msg,type:t.type}),setTimeout(()=>e.active=!0,500)},SHUT_DOWN_ALERT(e){e.active=!1},ENABLE_ALERT(e){e.active=!0}}},R={state:{user:{isLoggedIn:!1,data:null}},getters:{getIsLoggedIn:e=>e.user.isLoggedIn,getUserData:e=>e.user.data},actions:{fetchUser({commit:e},t){e("SET_LOGIN"),e("SET_USER",t)},setLogout({commit:e}){e("SET_LOGOUT")}},mutations:{SET_LOGIN(e){e.user.isLoggedIn=!0},SET_LOGOUT(e){console.log(e.user.isLoggedIn),e.user.isLoggedIn=!1,console.log(e.user.isLoggedIn)},SET_USER(e,t){e.user.data=t}}},U={state:{title:""},getters:{getTitle:e=>e.title},actions:{initializeHeader({commit:e},t){e("INITIALIZE_HEADER",t)}},mutations:{INITIALIZE_HEADER(e,t){e.title=t.title}}},B={state:{employees:null,employee_map:{},working_hours:[8,4],employees_filter:[{text:"Todos",value:"all",disabled:!1},{text:"Activos",value:"true",disabled:!1},{text:"Inactivos",value:"false",disabled:!1}],roles:["Cocinero","Repartidor","Cajero"],salary_filter:["Diario","Semanal","Mensual"],isLoading:!1},getters:{getEmployees:e=>e.employees,getEmployee:e=>e.employee_map,getRoles:e=>e.roles,getWorkingHours:e=>e.working_hours,getEmployeeFilters:e=>e.employees_filter,getSalaryFilters:e=>e.salary_filter,getLoading:e=>e.isLoading},actions:{fetchEmployees({commit:e,dispatch:t}){t("setLoading",!0),l["a"].firestore().collection("empleados").get().then(a=>{const s=a.docs.map(e=>e.data());e("SET_EMPLOYEES",s),t("setLoading",!1),t("setAlert",{msg:"Consulta de usuarios realizada con éxito",type:"success"})}).catch(e=>{console.log(e),t("setLoading",!1),t("setAlert",{msg:"Error al traer los usuarios de la base de datos",type:"danger"})})},fetchEmployee({commit:e,dispatch:t},a){t("setLoading",!0),l["a"].firestore().collection("empleados").doc(a).get().then(a=>{console.log(a.data()),e("SET_EMPLOYEE",a.data()),t("setLoading",!1),t("setAlert",{msg:"Consulta de usuarios realizada con éxito",type:"success"})}).catch(e=>{console.log(e),t("setLoading",!1),t("setAlert",{msg:"Error al traer los usuarios de la base de datos",type:"danger"})})},add({getters:e,dispatch:t},a){const s=e.getEmployees;s.push(a),t("setAlert",{msg:"Empleado creado con éxito",type:"success"})},edit({getters:e},t){const a=e.getEmployees,s=a.findIndex(e=>e.id===t.id);a[s]=t},setLoading({commit:e},t){e("SET_LOADING",t)}},mutations:{SET_EMPLOYEES(e,t){e.employees=t},SET_EMPLOYEE(e,t){e.employee_map=t},SET_ROLES(e,t){e.roles=t},SET_LOADING(e,t){e.isLoading=t}}};D["default"].use(i["a"]);var H=new i["a"].Store({modules:{employees:B,alert:P,auth:R,header:U}}),W=a("8c4f"),q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login__wrapper"},[s("img",{attrs:{src:a("cf05"),alt:"Logo"}}),s("h2",{staticClass:"login__title"},[e._v(" Iniciar sesión ")]),s("b-form",[s("b-form-group",{attrs:{id:"user",label:"Usuario","label-for":"user-input"}},[s("b-form-input",{attrs:{id:"user-input",type:"text",placeholder:"Escriba su usuario",required:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),s("b-form-group",{attrs:{id:"password",label:"Contraseña","label-for":"password-input"}},[s("b-form-input",{attrs:{id:"password-input",type:"password",placeholder:"Escriba su contraseña",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),s("b-button",{staticClass:"btn",attrs:{block:""},on:{click:function(t){return e.login()}}},[e._v(" Ingresar ")])],1)],1)},M=[],G={data(){return{username:"sancheze82@uabc.edu.mx",password:"edgar123"}},methods:{login(){l["a"].auth().signInWithEmailAndPassword(this.username,this.password).then(()=>this.$router.push("employees"),e=>{console.log(e)})}}},V=G,Q=(a("0e46"),Object(p["a"])(V,q,M,!1,null,"1b1a785c",null)),J=Q.exports,Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"list__filters"},[a("b-form-input",{staticClass:"navbar__input",attrs:{type:"text",placeholder:"Buscar por nombre...",required:""},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}}),a("div",{staticClass:"filters__btn"},[a("p",{staticClass:"filters__text text-bold"},[e._v(" "+e._s(e.employeesCounter)+" resultados ")]),a("p",{staticClass:"filters__text text-bold",attrs:{id:"popover-reactive-1"}},[e._v(" Filtrar por "),a("font-awesome-icon",{attrs:{icon:["fas","angle-down"]}})],1),a("b-popover",{attrs:{target:"popover-reactive-1",placement:"bottomright",container:"filters"}},[a("b-form-radio-group",{attrs:{id:"radio-filters-list",options:e.employeeFilters,stacked:""},model:{value:e.selectedFilter,callback:function(t){e.selectedFilter=t},expression:"selectedFilter"}})],1)],1)],1),a("div",{staticClass:"list__employees"},[a("loader-component",{attrs:{loading:e.isLoading}}),[a("transition-group",{staticClass:"card-container",attrs:{name:"list",tag:"div"}},[e._l(e.employees,(function(t,s){return[a("router-link",{key:s,attrs:{to:{name:"profile-employee",params:{id:t.id}}}},[a("card",{key:s,class:{"card-inactive":!t.activeEmployee},attrs:{firstColumnWidth:"25",secondColumnWidth:"75"},scopedSlots:e._u([{key:"firstColumn",fn:function(){return[a("card-image",{attrs:{imageSize:80,name:t.name[0],lastName:t.lastName[0],imageUrl:t.profileImage,editable:!1,isActive:t.activeEmployee}})]},proxy:!0},{key:"secondColumn",fn:function(){return[a("p",{staticClass:"card__title"},[e._v(" "+e._s(t.name)+" "+e._s(t.lastName)+" ")]),a("p",{staticClass:"card__text"},[e._v(" "+e._s(t.role)+" | "),a("span",{staticClass:"font-weight-bold"},[e._v(" "+e._s(e._f("formatActiveStatusText")(t.activeEmployee))+" ")])]),a("p",{staticClass:"card__text"},[a("font-awesome-icon",{staticClass:"card__icon",attrs:{icon:"phone-alt"}}),e._v(" "+e._s(t.phoneNumber)+" ")],1)]},proxy:!0}],null,!0)}),a("hr")],1)]}))],2),a("router-link",{staticClass:"btn btn-floating",attrs:{tag:"button",to:{name:"create-employee"}}},[a("font-awesome-icon",{attrs:{icon:"plus"}})],1)]],2)])},Z=[],X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card",style:e.gridColumns},[a("div",{staticClass:"firstColumn"},[e._t("firstColumn")],2),a("div",{staticClass:"secondColumn"},[e._t("secondColumn")],2),a("div",{staticClass:"thirdColumn"},[e._t("thirdColumn")],2)])},K=[],ee={props:{firstColumnWidth:{width:String,default:"33.3"},secondColumnWidth:String,thirdColumnWidth:String},computed:{gridColumns(){return{"--firstColumnWidth":this.firstColumnWidth+"%","--secondColumnWidth":this.secondColumnWidth?this.secondColumnWidth+"%":(100-this.firstColumnWidth)/2+"%","--thirdColumnWidth":this.thirdColumnWidth?this.thirdColumnWidth+"%":this.secondColumnWidth?100-this.firstColumnWidth-this.secondColumnWidth+"%":(100-this.firstColumnWidth)/2+"%"}}}},te=ee,ae=(a("0986"),Object(p["a"])(te,X,K,!1,null,"bed6848e",null)),se=ae.exports,re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-overlay",{attrs:{show:e.loading,variant:e.variant,opacity:e.opacity,"no-wrap":""}})},oe=[],ne={props:{loading:Boolean},data(){return{variant:"dark",opacity:.5}}},ie=ne,le=Object(p["a"])(ie,re,oe,!1,null,null,null),ce=le.exports,ue={name:"listEmployees",components:{card:se,"card-image":b,alert:I,"loader-component":ce},data(){return{selectedFilter:"all",searchValue:"",employeesCounter:0}},beforeRouteEnter(e,t,a){a(e=>{e.$root.$store.dispatch("fetchEmployees"),e.$root.$store.dispatch("initializeHeader",{title:"Empleados"})})},computed:{...Object(i["b"])({employeeFilters:"getEmployeeFilters",isLoading:"getLoading"}),employees(){const e=this.$root.$store.getters.getEmployees;if(e)return e.filter(e=>this.selectedFilter.indexOf(!e.activeEmployee)).filter(e=>!this.searchValue||e.name.toLowerCase().includes(this.searchValue.toLowerCase())).sort((e,t)=>e.name>t.name?1:-1)}},watch:{employees(){this.employeesCounter=this.employees.length}},filters:{emptyDate:function(e){return e||"Present"},formatActiveStatusText:function(e){return e?"Activo":"Inactivo"}}},me=ue,de=(a("6793"),Object(p["a"])(me,Y,Z,!1,null,"49e15fb2",null)),pe=de.exports,fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"edit__wrapper"},[a("loader-component",{attrs:{loading:e.isLoading}}),a("employee-form",{attrs:{employee:e.employee}})],1)},be=[],ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-form",{staticClass:"form",attrs:{id:"employeeForm"},on:{submit:e.triggerParentMethod}},[a("card-image",{attrs:{imageUrl:e.employee.profileImage,imageSize:125,name:e.validateString(e.employee.name,0),lastName:e.validateString(e.employee.lastName,0),editable:!0},model:{value:e.employee.profileImage,callback:function(t){e.$set(e.employee,"profileImage",t)},expression:"employee.profileImage"}}),a("b-form-group",{attrs:{id:"name",label:"Nombre","label-for":"name-input"}},[a("b-form-input",{attrs:{id:"name-input",type:"text",placeholder:"Ingrese el nombre de su nuevo empleado",required:""},model:{value:e.employee.name,callback:function(t){e.$set(e.employee,"name",t)},expression:"employee.name"}})],1),a("b-form-group",{attrs:{id:"lastName",label:"Apellido","label-for":"lastName-input"}},[a("b-form-input",{attrs:{id:"lastname-input",type:"text",placeholder:"Ingrese el apellido de su nuevo empleado",required:""},model:{value:e.employee.lastName,callback:function(t){e.$set(e.employee,"lastName",t)},expression:"employee.lastName"}})],1),a("b-form-group",{attrs:{id:"telephone",label:"Teléfono","label-for":"telephone-input"}},[a("b-form-input",{attrs:{id:"telephone-input",type:"tel",placeholder:"Ingrese el teléfono de su nuevo empleado",min:"10",required:""},model:{value:e.employee.phoneNumber,callback:function(t){e.$set(e.employee,"phoneNumber",t)},expression:"employee.phoneNumber"}})],1),a("b-form-group",{attrs:{id:"emergencyNumber",label:"Teléfono de emergencia","label-for":"emergencyNumber-input"}},[a("b-form-input",{attrs:{id:"emergencyNumber-input",type:"tel",placeholder:"Ingrese un teléfono en caso de emergencia",min:"10",required:""},on:{keydown:function(t){return e.phoneNumberFormatter("emergencyNumber-input")}},model:{value:e.employee.emergencyNumber,callback:function(t){e.$set(e.employee,"emergencyNumber",t)},expression:"employee.emergencyNumber"}})],1),a("b-form-group",{attrs:{id:"email",label:"Correo electrónico","label-for":"email-input"}},[a("b-form-input",{attrs:{id:"email-input",type:"email",placeholder:"Ingrese su correo electrónico",required:""},model:{value:e.employee.email,callback:function(t){e.$set(e.employee,"email",t)},expression:"employee.email"}})],1),a("b-form-group",{attrs:{id:"socialNumber",label:"Número de seguro social","label-for":"socialNumber-input"}},[a("b-form-input",{attrs:{id:"socialNumber-input",type:"text",placeholder:"Ingrese el NSS correspondiente",required:""},model:{value:e.employee.socialNumber,callback:function(t){e.$set(e.employee,"socialNumber",t)},expression:"employee.socialNumber"}})],1),a("b-form-group",{attrs:{id:"rfc",label:"RFC","label-for":"rfc-input"}},[a("b-form-input",{attrs:{id:"rfc-input",type:"text",placeholder:"Ingrese el RFC correspondiente",required:""},model:{value:e.employee.rfc,callback:function(t){e.$set(e.employee,"rfc",t)},expression:"employee.rfc"}})],1),a("b-form-group",{attrs:{id:"role",label:"Ocupación","label-for":"role-select"}},[a("b-form-select",{attrs:{plain:"",id:"role-input",options:e.roles,required:""},scopedSlots:e._u([{key:"first",fn:function(){return[a("b-form-select-option",{attrs:{value:void 0,disabled:""}},[e._v(" Seleccione una opción ")])]},proxy:!0}]),model:{value:e.employee.role,callback:function(t){e.$set(e.employee,"role",t)},expression:"employee.role"}})],1),a("div",{staticClass:"formGroup__salary"},[a("b-form-group",{attrs:{id:"workinghours",label:"Horas de trabajo","label-for":"range-workingHours"}},[a("b-form-input",{staticClass:"formGroup__workingHours__input",attrs:{id:"range-workingHours",type:"range",min:"4",max:"12",required:""},model:{value:e.employee.workingHours,callback:function(t){e.$set(e.employee,"workingHours",t)},expression:"employee.workingHours"}}),a("span",{staticClass:"formGroup__workingHours__text"},[e._v(" "+e._s(e._f("defaultValue")(e.employee.workingHours))+" ")])],1),a("b-form-group",{attrs:{id:"baseSalary",label:"Salario diario","label-for":"baseSalary-select"}},[a("span",{staticClass:"salary__dolar_symbol"},[e._v("$")]),a("b-form-input",{staticClass:"salary__input",attrs:{id:"baseSalary-input",type:"number",placeholder:"0",required:""},model:{value:e.employee.baseSalary,callback:function(t){e.$set(e.employee,"baseSalary",t)},expression:"employee.baseSalary"}})],1)],1),a("b-form-group",{attrs:{id:"startDate-group",label:"Fecha de inicio","label-for":"date-select"}},[a("b-form-datepicker",{attrs:{id:"startDate",placeholder:"Seleccione una fecha",required:""},model:{value:e.employee.startDate,callback:function(t){e.$set(e.employee,"startDate",t)},expression:"employee.startDate"}})],1),a("b-form-group",{attrs:{label:"Subir archivo","label-size":"sm","label-for":"attachment"}},[a("b-form-file",{attrs:{id:"attachment",size:"sm",placeholder:"Presione el botón para subir un archivo"},on:{change:function(t){return e.onFileChange(t)}},model:{value:e.employee.attachment,callback:function(t){e.$set(e.employee,"attachment",t)},expression:"employee.attachment"}})],1),a("b-button",{staticClass:"mr-1 btn-block",attrs:{block:"",variant:"primary",type:"submit"}},[e._v(" Guardar usuario ")])],1)},he=[],ye={name:"employeeForm",props:{employee:Object},components:{"card-image":b},created(){},computed:{workingHours(){return this.$root.$store.getters.getWorkingHours},roles(){return this.$root.$store.getters.getRoles}},methods:{triggerParentMethod(e){e.preventDefault(),this.$parent.save()},validateString(e="",t){return e.substring(t)},async onFileChange(e){const t=e.target.files;if(!t.length)return this.imageSrc=null;const a=await this.getAsByteArray(t[0]);this.employee.attachment[0]=a},async getAsByteArray(e){return new Uint8Array(await this.readFile(e))},readFile(e){return new Promise((t,a)=>{let s=new FileReader;s.addEventListener("loadend",e=>t(e.target.result)),s.addEventListener("error",a),s.readAsArrayBuffer(e)})},phoneNumberFormatter(e){const t=document.getElementById(e),a=this.formatPhoneNumber(t.value);t.value=a},formatPhoneNumber(e){if(!e)return e;const t=e.replace(/[^\d]/g,""),a=t.length;return a<3?t:a<7?`(${t.slice(0,3)}) ${t.slice(3)}`:`(${t.slice(0,3)}) ${t.slice(3,6)}-${t.slice(6,9)}`}},filters:{defaultValue(e){return e||"8"}}},_e=ye,ve=(a("19e8"),Object(p["a"])(_e,ge,he,!1,null,"c782d638",null)),je=ve.exports,Ce={name:"edit-employee",components:{"employee-form":je,"loader-component":ce},data(){return{}},computed:{employee(){return this.$root.$store.getters.getEmployee},isLoading(){return this.$root.$store.getters.getLoading}},beforeRouteEnter(e,t,a){a(e=>{e.$root.$store.dispatch("fetchEmployee",e.$route.params.id),e.$root.$store.dispatch("initializeHeader",{title:"Editar empleado"})})},watch:{employee(e,t){console.log(t),console.log(e)}},methods:{save(){this.$root.$store.dispatch("edit",this.employee).then(()=>this.$router.push("/employees"))}}},Ee=Ce,we=(a("29c1"),Object(p["a"])(Ee,fe,be,!1,null,"45260924",null)),Se=we.exports,xe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"create__wrapper"},[a("employee-form",{attrs:{employee:e.employee}})],1)},ke=[],$e={name:"create-employee",components:{"employee-form":je},data(){return{employee:{activeEmployee:!1,workingHours:8}}},beforeRouteEnter(e,t,a){a(e=>{e.$root.$store.dispatch("initializeHeader",{title:"Crear empleado"})})},methods:{save(){this.$root.$store.dispatch("add",this.employee).then(()=>this.$router.push("/employees"))}}},Le=$e,Ie=(a("acad"),Object(p["a"])(Le,xe,ke,!1,null,"7a4ed24a",null)),Ae=Ie.exports,Ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"profile"},[a("loader-component",{attrs:{loading:e.isLoading}}),a("div",{staticClass:"profile__card"},[a("card-image",{attrs:{imageSize:125,name:e.validateString(e.employee.name,0),lastName:e.validateString(e.employee.lastName,0),imageUrl:e.employee.profileImage,editable:!1}}),a("div",{staticClass:"card__information"},[a("div",{staticClass:"information__user"},[a("p",{staticClass:"font-weight-bold"},[e._v(" "+e._s(e.employee.name)+" "+e._s(e.employee.lastName)+" ")]),a("p",[e._v(" "+e._s(e.employee.role)+" ")]),e.employee.endDate?a("p",{staticClass:"text-danger"},[a("span",{staticClass:"font-weight-bold"},[e._v(" Fecha terminación laboral: ")]),e._v(" "+e._s(e._f("dateFormat")(e.employee.endDate))+" ")]):e._e()]),a("p",[a("span",{staticClass:"font-weight-bold information__text-color"},[e._v(" Teléfono ")]),e._v(" "+e._s(e.employee.phoneNumber)+" ")]),a("p",[a("span",{staticClass:"font-weight-bold information__text-color"},[e._v(" Emergencia ")]),e._v(" "+e._s(e.employee.emergencyNumber)+" ")]),a("p",[a("span",{staticClass:"font-weight-bold information__text-color"},[e._v(" Fecha inicio ")]),e._v(" "+e._s(e._f("dateFormat")(e.employee.startDate))+" ")]),a("p",[a("span",{staticClass:"font-weight-bold information__text-color"},[e._v(" Jornada ")]),e._v(" "+e._s(e.employee.workingHours)+" horas ")]),a("p",[a("span",{staticClass:"font-weight-bold information__text-color"},[e._v(" NSS ")]),e._v(" "+e._s(e.employee.socialNumber)+" ")]),a("p",[a("span",{staticClass:"font-weight-bold information__text-color"},[e._v(" RFC ")]),e._v(" "+e._s(e.employee.rfc)+" ")])])],1),a("div",{staticClass:"profile__economics"},[a("p",{staticClass:"font-weight-bold text-center"},[e._v(" Cálculos de prestaciones económicas ")]),a("div",{staticClass:"separator economics__salary"},[a("p",{staticClass:"text-small font-weight-bold economics__text"},[e._v(" Sueldo ")]),a("b-form-select",{staticClass:"economics__select",attrs:{options:e.salaryFilters,size:"sm",placeholder:"Periodo"},on:{change:function(t){return e.onChange(t)}},scopedSlots:e._u([{key:"first",fn:function(){return[a("b-form-select-option",{attrs:{value:null,disabled:""}},[e._v(" Selecciona un filtro para el salario ")])]},proxy:!0}]),model:{value:e.selectedSalaryPeriod,callback:function(t){e.selectedSalaryPeriod=t},expression:"selectedSalaryPeriod"}}),a("p",{staticClass:"text-small text-center economics__summary"},[a("span",{staticClass:"font-weight-bold"},[e._v(" El pago corresponde a: ")]),e._v(" "+e._s(e._f("toUSD")(e.salary))+" ")])],1),a("div",{staticClass:"separator"},[a("p",{staticClass:"text-small"},[a("span",{staticClass:"font-weight-bold"},[a("font-awesome-icon",{attrs:{icon:"plane-departure"}}),e._v(" Prima vacacional: ")],1),e._v(" "+e._s(e._f("toUSD")(e.vacationBonus))+" ")])]),a("div",{staticClass:"separator"},[a("p",{staticClass:"text-small"},[a("span",{staticClass:"font-weight-bold"},[a("font-awesome-icon",{attrs:{icon:"hand-holding-usd"}}),e._v(" Aguinaldo: ")],1),e._v(" "+e._s(e._f("toUSD")(e.christmasBonus))+" ")])])]),a("router-link",{staticClass:"btn btn-floating",attrs:{tag:"button",to:{name:"edit-employee",params:{id:e.employee.id}}}},[a("font-awesome-icon",{attrs:{icon:"pen"}})],1)],1)},Oe=[],Fe=a("c1df"),Te=a.n(Fe),ze={name:"profileEmployee",components:{"card-image":b,"loader-component":ce},data(){return{daysPerSalary:1,selectedSalaryPeriod:"Diario"}},beforeRouteEnter(e,t,a){a(e=>{e.$root.$store.dispatch("fetchEmployee",e.$route.params.id.toString()),e.$root.$store.dispatch("initializeHeader",{title:"Detalles del empleado"})})},computed:{employee(){return this.$root.$store.getters.getEmployee},salaryFilters(){return this.$root.$store.getters.getSalaryFilters},salary(){return this.employee.baseSalary*this.daysPerSalary},vacationBonus(){return this.vacationBonusCalculator(this.employee.startDate)},christmasBonus(){return this.christmasBonusCalculator(this.employee.startDate)},isLoading(){return this.$root.$store.getters.getLoading}},methods:{onChange(e){switch(e){case"Diario":return this.daysPerSalary=1;case"Semanal":return this.daysPerSalary=7;case"Mensual":return this.daysPerSalary=30}},validateArray(e,t){return e&&e.length>0?e[e.length-1][t]:""},validateString(e="",t){return e.substring(t)},sortNestedArray(e,t){e||e[t].sort((function(e,t){return new Date(e.startDate)-new Date(t.startDate)}))},vacationBonusCalculator(e){const t=365,a=parseInt(this.daysActive(e).toFixed(0)),s=parseInt((this.daysActive(e)/t).toFixed(0));if(a<t)return 0;const r={1:6,2:8,3:10,4:12,5:16,6:18};let o=r[s]||20;return(this.employee.baseSalary*o*.25).toFixed(2)},christmasBonusCalculator(e){const t=365,a=this.daysActive(e);return a<t?(.041*a*this.employee.baseSalary).toFixed(2):(15*this.employee.baseSalary).toFixed(2)},daysActive(e){const t=new Date(e),a=Date.now(),s=864e5;return(a-t)/s}},filters:{toUSD(e){return 0===e?"No aplica por tiempo":`$${e} pesos`},phoneFormat:function(e){return e?"("+e.substring(0,3)+") "+e.substring(3,6)+"-"+e.substring(6):""},dateFormat:function(e){if(e){const t=e.toDate();return Te()(t).format("L")}return""}}},De=ze,Pe=(a("14c7"),Object(p["a"])(De,Ne,Oe,!1,null,"ea801700",null)),Re=Pe.exports,Ue=[{name:"login",path:"/",component:J,meta:{hideLayoutComponents:!0}},{name:"employees",path:"/employees",component:pe,meta:{requiresAuth:!0}},{name:"create-employee",path:"/employees/create",component:Ae,meta:{requiresAuth:!0}},{name:"profile-employee",path:"/employees/:id",component:Re,meta:{requiresAuth:!0}},{name:"edit-employee",path:"/employees/edit/:id",component:Se,meta:{requiresAuth:!0}},{path:"/*",redirect:"/"}],Be=a("ecee"),He=a("c074"),We=a("ad3d"),qe=a("5f5b"),Me=a("2b88"),Ge=a.n(Me);a("ab8b"),a("177c");Be["c"].add(He["a"]),D["default"].component("font-awesome-icon",We["a"]),D["default"].use(W["a"]),D["default"].use(qe["a"]),D["default"].use(Ge.a),D["default"].prototype.$axios=z.a,D["default"].prototype.$store=H;const Ve=new W["a"]({routes:Ue,mode:"history"});Ve.beforeEach((e,t,a)=>{if(e.matched.some(e=>e.meta.requiresAuth)){const e=H.getters.getIsLoggedIn;e?a():a({path:"/login"})}else a()});var Qe={apiKey:"AIzaSyC49cRfBDVXGQx1XJYAF37J7kkFc-TSEZI",authDomain:"blog-list-1d104.firebaseapp.com",databaseURL:"https://blog-list-1d104-default-rtdb.firebaseio.com",projectId:"blog-list-1d104",storageBucket:"blog-list-1d104.appspot.com",messagingSenderId:"757047064866",appId:"1:757047064866:web:d2661f2b8ea8eeab744d7b"};l["a"].initializeApp(Qe),l["a"].auth().onAuthStateChanged(e=>{e&&l["a"].firestore().collection("usuarios").doc(e.uid).get().then(e=>{H.dispatch("fetchUser",e.data())})}),new D["default"]({el:"#app",render:e=>e(F),router:Ve,store:H,created(){const e=document.documentElement;e.setAttribute("lang","es")}})},"5c0b":function(e,t,a){"use strict";a("9c0c")},6793:function(e,t,a){"use strict";a("a213")},"6a01":function(e,t,a){"use strict";a("d3eb")},"915e":function(e,t,a){e.exports=a.p+"img/avatar.dbfd82ae.jpg"},"9c0c":function(e,t,a){},a213:function(e,t,a){},acad:function(e,t,a){"use strict";a("e1f8")},c628:function(e,t,a){},c89f:function(e,t,a){"use strict";a("cafa")},ca47:function(e,t,a){},cafa:function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.c3cd8bff.png"},d3eb:function(e,t,a){},e1f8:function(e,t,a){},e886:function(e,t,a){"use strict";a("1cda")},ff4b:function(e,t,a){}});
//# sourceMappingURL=app.3c1af938.js.map
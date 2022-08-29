(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{116:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(0),c=a(9),i=a.n(c),s=a(17),o=a(22),l=a(70),u=a(79),d="CREATE",p="UPDATE",j="DELETE",b="FETCH_ALL",f=Object(o.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return e.filter((function(e){return e._id!==t.payload}));case p:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case b:return t.payload;case d:return[].concat(Object(u.a)(e),[t.payload]);default:return e}}}),m=a(49),x=a(157),h=a(158),O=a(152),g=a(161),v=a(156),y=a(18),C=a.n(y),w=a(35),k=a(36),N=a.n(k),I="https://memories-project-shing.herokuapp.com/posts",E=function(e,t){return N.a.patch("".concat(I,"/").concat(e),t)},S=function(e){return N.a.delete("".concat(I,"/").concat(e))},D=function(e){return N.a.patch("".concat(I,"/").concat(e,"/likePost"))},_=a(155),z=a(149),T=a(151),W=a(160),A=a(153),B=a(154),F=a(76),M=a.n(F),L=a(77),R=a.n(L),H=a(75),J=a.n(H),P=a(71),U=a.n(P),V=a(146),q=Object(V.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),G=function(e){var t=e.post,a=e.setCurrentId,r=q(),c=Object(s.b)();return Object(n.jsxs)(z.a,{className:r.card,children:[Object(n.jsx)(T.a,{className:r.media,image:t.selectedFile,title:t.title}),Object(n.jsxs)("div",{className:r.overlay,children:[Object(n.jsx)(O.a,{variant:"h6",children:t.creator}),Object(n.jsx)(O.a,{variant:"body2",children:U()(t.createdAt).fromNow()})]}),Object(n.jsx)("div",{className:r.overlay2,children:Object(n.jsx)(W.a,{style:{color:"white"},size:"small",onClick:function(){return a(t._id)},children:Object(n.jsx)(J.a,{fontSize:"default"})})}),Object(n.jsx)("div",{className:r.details,children:Object(n.jsx)(O.a,{variant:"body2",color:"textSecondary",children:t.tags.map((function(e){return"#".concat(e," ")}))})}),Object(n.jsx)(O.a,{className:r.title,variant:"h5",gutterBottom:!0,children:t.title}),Object(n.jsx)(A.a,{children:Object(n.jsx)(O.a,{variant:"body2",color:"textSecondary",component:"p",children:t.message})}),Object(n.jsxs)(B.a,{className:r.cardActions,children:[Object(n.jsxs)(W.a,{size:"small",color:"primary",onClick:function(){return c((e=t._id,function(){var t=Object(w.a)(C.a.mark((function t(a){var n,r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,D(e);case 3:n=t.sent,r=n.data,a({type:p,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(n.jsx)(M.a,{fontSize:"small"}),"\xa0 Like \xa0",t.likeCount]}),Object(n.jsxs)(W.a,{size:"small",color:"primary",onClick:function(){return c((e=t._id,function(){var t=Object(w.a)(C.a.mark((function t(a){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S(e);case 3:a({type:j,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(n.jsx)(R.a,{fontSize:"small"}),"Delete"]})]})]})},K=Object(V.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),Q=function(e){var t=e.setCurrentId,a=Object(s.c)((function(e){return e.posts})),r=K();return console.log(a),a.length?Object(n.jsx)(v.a,{className:r.mainContainer,container:!0,alignItems:"stretch",spacing:3,children:a.map((function(e){return Object(n.jsx)(v.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(G,{post:e,setCurrentId:t})},e._id)}))}):Object(n.jsx)(_.a,{})},X=a(19),Y=a(81),Z=a(159),$=a(78),ee=a.n($),te=Object(V.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),ae=function(e){var t=e.currentId,a=e.setCurrentId,c=Object(r.useState)({creator:"",title:"",message:"",tags:"",selectedFile:""}),i=Object(m.a)(c,2),o=i[0],l=i[1],u=Object(s.c)((function(e){return t?e.posts.find((function(e){return e._id===t})):null})),j=te(),b=Object(s.b)();Object(r.useEffect)((function(){u&&l(u)}),[t,u]);var f=function(){a(null),l({creator:"",title:"",message:"",tags:"",selectedFile:""})};return Object(n.jsx)(Y.a,{className:j.paper,children:Object(n.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(j.root," ").concat(j.form),onSubmit:function(e){e.preventDefault(),b(t?function(e,t){return function(){var a=Object(w.a)(C.a.mark((function a(n){var r,c;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,E(e,t);case 3:r=a.sent,c=r.data,n({type:p,payload:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}(t,o):function(e){return function(){var t=Object(w.a)(C.a.mark((function t(a){var n,r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,N.a.post(I,c);case 3:n=t.sent,r=n.data,a({type:d,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(o)),f()},children:[Object(n.jsxs)(O.a,{variant:"h6",children:[t?"Editing":"Creating"," a Memory"]}),Object(n.jsx)(Z.a,{name:"creator",variant:"outlined",label:"Creator",fullWidth:!0,value:o.creator,onChange:function(e){return l(Object(X.a)(Object(X.a)({},o),{},{creator:e.target.value}))}}),Object(n.jsx)(Z.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:o.title,onChange:function(e){return l(Object(X.a)(Object(X.a)({},o),{},{title:e.target.value}))}}),Object(n.jsx)(Z.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,value:o.message,onChange:function(e){return l(Object(X.a)(Object(X.a)({},o),{},{message:e.target.value}))}}),Object(n.jsx)(Z.a,{name:"tags",variant:"outlined",label:"Tags",fullWidth:!0,value:o.tags,onChange:function(e){return l(Object(X.a)(Object(X.a)({},o),{},{tags:e.target.value.split(",")}))}}),Object(n.jsx)("div",{className:j.fileInput,children:Object(n.jsx)(ee.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return l(Object(X.a)(Object(X.a)({},o),{},{selectedFile:t}))}})}),Object(n.jsx)(W.a,{className:j.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(n.jsx)(W.a,{variant:"contained",color:"secondary",size:"small",onClick:f,fullWidth:!0,children:"Clear"})]})})},ne=a.p+"static/media/memories.9cfa8a46.png",re=a(48),ce=Object(V.a)((function(e){return Object(re.a)({appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"rgba(0,183,255, 1)"},image:{marginLeft:"15px"}},e.breakpoints.down("sm"),{mainContainer:{flexDirection:"column-reverse"}})})),ie=function(){var e=Object(r.useState)(null),t=Object(m.a)(e,2),a=t[0],c=t[1],i=ce(),o=Object(s.b)();return Object(r.useEffect)((function(){o(function(){var e=Object(w.a)(C.a.mark((function e(t){var a,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get(I);case 3:a=e.sent,n=a.data,t({type:b,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[o]),Object(n.jsxs)(x.a,{maxWidth:"lg",children:[Object(n.jsxs)(h.a,{className:i.appBar,position:"static",color:"inherit",children:[Object(n.jsx)(O.a,{className:i.heading,variant:"h2",align:"center",children:"Memories"}),Object(n.jsx)("img",{className:i.image,src:ne,alt:"memories",height:"60"})]}),Object(n.jsx)(g.a,{in:!0,children:Object(n.jsx)(x.a,{children:Object(n.jsxs)(v.a,{className:i.mainContainer,container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(n.jsx)(v.a,{item:!0,xs:12,sm:7,children:Object(n.jsx)(Q,{setCurrentId:c})}),Object(n.jsx)(v.a,{item:!0,xs:12,sm:4,children:Object(n.jsx)(ae,{currentId:a,setCurrentId:c})})]})})})]})},se=(a(116),Object(o.e)(f,Object(o.d)(Object(o.a)(l.a))));i.a.render(Object(n.jsx)(s.a,{store:se,children:Object(n.jsx)(ie,{})}),document.getElementById("root"))}},[[117,1,2]]]);
//# sourceMappingURL=main.770cd67d.chunk.js.map
(self.webpackChunkohjelmoinnin_mooc=self.webpackChunkohjelmoinnin_mooc||[]).push([[775],{80453:function(t,e,r){"use strict";var a=r(22122),n=r(81253),o=r(67294),i=r(85505),l=r(34621),p=r(81664),h={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},s=o.forwardRef((function(t,e){var r=t.align,l=void 0===r?"inherit":r,s=t.classes,c=t.className,g=t.color,d=void 0===g?"initial":g,m=t.component,u=t.display,y=void 0===u?"initial":u,E=t.gutterBottom,b=void 0!==E&&E,f=t.noWrap,P=void 0!==f&&f,v=t.paragraph,Z=void 0!==v&&v,x=t.variant,w=void 0===x?"body1":x,L=t.variantMapping,S=void 0===L?h:L,k=(0,n.Z)(t,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),T=m||(Z?"p":S[w]||h[w])||"span";return o.createElement(T,(0,a.Z)({className:(0,i.Z)(s.root,c,"inherit"!==w&&s[w],"initial"!==d&&s["color".concat((0,p.Z)(d))],P&&s.noWrap,b&&s.gutterBottom,Z&&s.paragraph,"inherit"!==l&&s["align".concat((0,p.Z)(l))],"initial"!==y&&s["display".concat((0,p.Z)(y))]),ref:e},k))}));e.Z=(0,l.Z)((function(t){return{root:{margin:0},body2:t.typography.body2,body1:t.typography.body1,caption:t.typography.caption,button:t.typography.button,h1:t.typography.h1,h2:t.typography.h2,h3:t.typography.h3,h4:t.typography.h4,h5:t.typography.h5,h6:t.typography.h6,subtitle1:t.typography.subtitle1,subtitle2:t.typography.subtitle2,overline:t.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},colorTextPrimary:{color:t.palette.text.primary},colorTextSecondary:{color:t.palette.text.secondary},colorError:{color:t.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(s)},8982:function(t,e,r){"use strict";r.r(e);var a=r(41788),n=r(67294),o=r(35414),i=r(3772),l=r(86810),p=r(65769),h=r(54021),s=r(80453),c=r(83332),g=r(74222),d=r.n(g),m=r(50238),u=r(13578),y=function(t){function e(e){var r;return(r=t.call(this,e)||this).componentDidMount=function(){var t=new URLSearchParams(r.props.location.search).get("path"),e=d().githubUrl.concat("/edit/master",t);r.setState({path:new URLSearchParams(r.props.location.search).get("path"),editPath:e,loginThenEditPath:"https://github.com/join?return_to="+e+"&source=login"})},r.state={path:"",editPath:"",loginThenEditPath:""},r}return(0,a.Z)(e,t),e.prototype.render=function(){return""===this.state.path?n.createElement("div",null,"Loading..."):n.createElement(i.Z,null,n.createElement(l.Z,null,n.createElement(o.Z,{title:this.props.t("editPageTitle")}),n.createElement(s.Z,{variant:"h3",component:"h1"},this.props.t("editPageTitle")),n.createElement("br",null),n.createElement("p",null,this.props.t("editPage1")),n.createElement("p",null,this.props.t("editPage2")," ",n.createElement(p.MS,{external:"true",href:""+this.state.loginThenEditPath,target:"_blank",rel:"noopener noreferrer"},this.props.t("editPage3"))),n.createElement("p",null,this.props.t("editPage4")," ",n.createElement(p.MS,{external:"true",href:""+d().githubUrl.concat("/pulls"),target:"_blank",rel:"noopener noreferrer"},this.props.t("editPage3"))," ",this.props.t("editPage5")),n.createElement("center",null,n.createElement(p.MS,{external:"true",href:""+this.state.editPath,target:"_blank",rel:"noopener noreferrer"},n.createElement(c.Z,{color:"primary",variant:"contained"},this.props.t("editPageButtonText"),this.state.path))),n.createElement("br",null),n.createElement(s.Z,{variant:"h4",component:"h1"},this.props.t("editPageSecondHeader")),n.createElement("ol",null,n.createElement("li",null,this.props.t("editPageList1")),n.createElement("li",null,this.props.t("editPageList2")),n.createElement("li",null,this.props.t("editPageList3")),n.createElement("li",null,this.props.t("editPageList4")),n.createElement("li",null,this.props.t("editPageList5")),n.createElement("li",null,this.props.t("editPageList6"))),n.createElement("p",null,this.props.t("editPage6"))))},e}(n.Component);e.default=(0,m.Z)("common")((0,u.Z)((0,h._N)(y)))}}]);
//# sourceMappingURL=component---src-pages-edit-page-js-e83cc1327db37de7cda4.js.map
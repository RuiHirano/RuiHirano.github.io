(window.webpackJsonp=window.webpackJsonp||[]).push([[7,8],{"/ARi":function(t,e,a){"use strict";a.r(e);var o=a("q1tI"),r=a.n(o),i=a("wx14"),n=a("Ff2n"),l=(a("17x9"),a("iuhU")),c=a("H2TA"),p=a("NqtD"),s=a("kKAo"),d=o.forwardRef((function(t,e){var a=t.classes,r=t.className,c=t.color,d=void 0===c?"primary":c,u=t.position,h=void 0===u?"fixed":u,g=Object(n.a)(t,["classes","className","color","position"]);return o.createElement(s.a,Object(i.a)({square:!0,component:"header",elevation:4,className:Object(l.a)(a.root,a["position".concat(Object(p.a)(h))],a["color".concat(Object(p.a)(d))],r,"fixed"===h&&"mui-fixed"),ref:e},g))})),u=Object(c.a)((function(t){var e="light"===t.palette.type?t.palette.grey[100]:t.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:t.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:e,color:t.palette.getContrastText(e)},colorPrimary:{backgroundColor:t.palette.primary.main,color:t.palette.primary.contrastText},colorSecondary:{backgroundColor:t.palette.secondary.main,color:t.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(d),h=a("rePB"),g=o.forwardRef((function(t,e){var a=t.classes,r=t.className,c=t.component,p=void 0===c?"div":c,s=t.disableGutters,d=void 0!==s&&s,u=t.variant,h=void 0===u?"regular":u,g=Object(n.a)(t,["classes","className","component","disableGutters","variant"]);return o.createElement(p,Object(i.a)({className:Object(l.a)(a.root,a[h],r,!d&&a.gutters),ref:e},g))})),y=Object(c.a)((function(t){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:Object(h.a)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),regular:t.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(g),m=a("Z3vd"),b=a("ofer"),f=a("RD7I"),v=a("cNwE");var x=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(f.a)(t,Object(i.a)({defaultTheme:v.a},e))};e.default=function(){return r.a.createElement("div",{className:classes.grow},r.a.createElement(MainDrawer,{openDrawer:openDrawer,setOpenDrawer:setOpenDrawer}),r.a.createElement(u,{position:"static",className:classes.app_bar},r.a.createElement(y,null,r.a.createElement(m.a,{onClick:toUserHome},r.a.createElement(b.a,{className:classes.title,variant:"h6",noWrap:!0},"Rui Hirano")))))},x((function(t){var e;return{grow:{flexGrow:1},title:(e={display:"none",color:"black"},e[t.breakpoints.up("sm")]={display:"block"},e),app_bar:{backgroundColor:"white"}}}))},Uxhg:function(t,e,a){"use strict";a.r(e);var o=a("q1tI"),r=a.n(o),i=a("ofer"),n=a("/ARi");e.default=function(){return r.a.createElement("div",null,r.a.createElement(n.default,null),r.a.createElement(i.a,null,"about page"),r.a.createElement(i.a,null,"about page"))}},ofer:function(t,e,a){"use strict";var o=a("wx14"),r=a("Ff2n"),i=a("q1tI"),n=(a("17x9"),a("iuhU")),l=a("H2TA"),c=a("NqtD"),p={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},s=i.forwardRef((function(t,e){var a=t.align,l=void 0===a?"inherit":a,s=t.classes,d=t.className,u=t.color,h=void 0===u?"initial":u,g=t.component,y=t.display,m=void 0===y?"initial":y,b=t.gutterBottom,f=void 0!==b&&b,v=t.noWrap,x=void 0!==v&&v,w=t.paragraph,O=void 0!==w&&w,j=t.variant,k=void 0===j?"body1":j,E=t.variantMapping,N=void 0===E?p:E,A=Object(r.a)(t,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),R=g||(O?"p":N[k]||p[k])||"span";return i.createElement(R,Object(o.a)({className:Object(n.a)(s.root,d,"inherit"!==k&&s[k],"initial"!==h&&s["color".concat(Object(c.a)(h))],x&&s.noWrap,f&&s.gutterBottom,O&&s.paragraph,"inherit"!==l&&s["align".concat(Object(c.a)(l))],"initial"!==m&&s["display".concat(Object(c.a)(m))]),ref:e},A))}));e.a=Object(l.a)((function(t){return{root:{margin:0},body2:t.typography.body2,body1:t.typography.body1,caption:t.typography.caption,button:t.typography.button,h1:t.typography.h1,h2:t.typography.h2,h3:t.typography.h3,h4:t.typography.h4,h5:t.typography.h5,h6:t.typography.h6,subtitle1:t.typography.subtitle1,subtitle2:t.typography.subtitle2,overline:t.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},colorTextPrimary:{color:t.palette.text.primary},colorTextSecondary:{color:t.palette.text.secondary},colorError:{color:t.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(s)}}]);
//# sourceMappingURL=component---src-pages-about-index-tsx-511edaa426f20c2cc2ca.js.map
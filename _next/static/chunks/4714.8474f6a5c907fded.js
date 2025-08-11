"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4714],{14714:function(t,e,l){l.r(e);var n=l(85893),o=l(31258),r=l(27484),i=l.n(r),s=l(70178),d=l.n(s),a=l(94203),u=l(62810);l(67294);var c=l(9253),h=l(46888),p=l(3023),x=l(14888),f=l(86108),j=l(19521),m=l(13256),g=l(39511);i().extend(d());let k=(0,j.ZP)(o.Zbd).withConfig({componentId:"sc-361fcbfd-0"})`
  border: 1px solid ${t=>{let{theme:e}=t;return e.colors.backgroundAlt}};
  width: 100%;
  height: ${300}px;
  display: flex;
  background-color: transparent;
  flex-direction: column;
  padding: 1rem;
  > * {
    font-size: 1rem;
  }
`;e.default=t=>{let{data:e,color:l="#1FC7D4",value:o,label:r,setValue:s,setLabel:d,topLeft:j,topRight:y,bottomLeft:v,bottomRight:b,minHeight:w=300,...C}=t,{theme:_}=(0,a.ZP)();return(0,n.jsxs)(k,{...C,children:[(0,n.jsxs)(g.m0,{children:[null!=j?j:null,null!=y?y:null]}),(null==e?void 0:e.length)===0?(0,n.jsxs)(m.pr,{children:[(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{})]}):(0,n.jsx)(c.h,{width:"100%",height:"100%",children:(0,n.jsxs)(h.T,{width:500,height:300,data:e,margin:{top:5,right:30,left:20,bottom:5},onMouseLeave:()=>{d&&d(void 0),s&&s(void 0)},children:[(0,n.jsx)("defs",{children:(0,n.jsxs)("linearGradient",{id:"gradient",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,n.jsx)("stop",{offset:"5%",stopColor:(0,u._j)(.36,l),stopOpacity:.5}),(0,n.jsx)("stop",{offset:"100%",stopColor:l,stopOpacity:0})]})}),(0,n.jsx)(p.K,{dataKey:"time",axisLine:!1,tickLine:!1,tickFormatter:t=>i()(t).format("DD"),minTickGap:10}),(0,n.jsx)(x.u,{cursor:{stroke:_.colors.backgroundAlt2},contentStyle:{display:"none"},formatter:(t,e,l)=>{s&&o!==l.payload.value&&s(l.payload.value);let n=i()(l.payload.time).format("MMM D, YYYY");return d&&r!==n&&d(n),null}}),(0,n.jsx)(f.u,{dataKey:"value",type:"monotone",stroke:l,fill:"url(#gradient)",strokeWidth:2})]})}),(0,n.jsxs)(g.m0,{children:[null!=v?v:null,null!=b?b:null]})]})}}}]);
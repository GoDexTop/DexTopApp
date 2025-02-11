"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[426,4714],{14714:function(e,t,n){n.r(t);var i=n(85893),l=n(87619),s=n(27484),r=n.n(s),o=n(70178),a=n.n(o),d=n(94203),c=n(62810);n(67294);var x=n(9253),h=n(46888),m=n(3023),u=n(14888),p=n(86108),v=n(19521),j=n(13256),f=n(39511);r().extend(a());let g=(0,v.ZP)(l.Zbd).withConfig({componentId:"sc-361fcbfd-0"})`
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.backgroundAlt}};
  width: 100%;
  height: ${300}px;
  display: flex;
  background-color: transparent;
  flex-direction: column;
  padding: 1rem;
  > * {
    font-size: 1rem;
  }
`;t.default=e=>{let{data:t,color:n="#1FC7D4",value:l,label:s,setValue:o,setLabel:a,topLeft:v,topRight:D,bottomLeft:S,bottomRight:b,minHeight:w=300,...T}=e,{theme:y}=(0,d.ZP)();return(0,i.jsxs)(g,{...T,children:[(0,i.jsxs)(f.m0,{children:[null!=v?v:null,null!=D?D:null]}),(null==t?void 0:t.length)===0?(0,i.jsxs)(j.pr,{children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{})]}):(0,i.jsx)(x.h,{width:"100%",height:"100%",children:(0,i.jsxs)(h.T,{width:500,height:300,data:t,margin:{top:5,right:30,left:20,bottom:5},onMouseLeave:()=>{a&&a(void 0),o&&o(void 0)},children:[(0,i.jsx)("defs",{children:(0,i.jsxs)("linearGradient",{id:"gradient",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,i.jsx)("stop",{offset:"5%",stopColor:(0,c._j)(.36,n),stopOpacity:.5}),(0,i.jsx)("stop",{offset:"100%",stopColor:n,stopOpacity:0})]})}),(0,i.jsx)(m.K,{dataKey:"time",axisLine:!1,tickLine:!1,tickFormatter:e=>r()(e).format("DD"),minTickGap:10}),(0,i.jsx)(u.u,{cursor:{stroke:y.colors.backgroundAlt2},contentStyle:{display:"none"},formatter:(e,t,n)=>{o&&l!==n.payload.value&&o(n.payload.value);let i=r()(n.payload.time).format("MMM D, YYYY");return a&&s!==i&&a(i),null}}),(0,i.jsx)(p.u,{dataKey:"value",type:"monotone",stroke:n,fill:"url(#gradient)",strokeWidth:2})]})}),(0,i.jsxs)(f.m0,{children:[null!=S?S:null,null!=b?b:null]})]})}},88412:function(e,t,n){n.d(t,{Z:function(){return PoolTable}});var i=n(85893),l=n(87619),s=n(27086),r=n(41664),o=n.n(r),a=n(67294),d=n(99712),c=n(19521),x=n(75824),h=n(49923),m=n(1793),u=n(14706),p=n(89397),v=n(54042),j=n(2003),f=n(13256),g=n(39511),D=n(7846);let S=c.ZP.div.withConfig({componentId:"sc-cfcd8327-0"})`
  display: grid;
  grid-gap: 1em;
  align-items: center;

  grid-template-columns: 20px 3.5fr repeat(3, 1fr);
  padding: 0 24px;
  @media screen and (max-width: 900px) {
    grid-template-columns: 20px 1.5fr repeat(2, 1fr);
    & :nth-child(3) {
      display: none;
    }
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 20px 1.5fr repeat(1, 1fr);
    & :nth-child(5) {
      display: none;
    }
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1.3fr 1fr;
    > *:nth-child(1) {
      display: none;
    }
  }
`,b=(0,c.ZP)(o()).withConfig({componentId:"sc-cfcd8327-1"})`
  text-decoration: none;
  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`,w={feeTier:"feeTier",volumeUSD:"volumeUSD",tvlUSD:"tvlUSD",volumeUSDWeek:"volumeUSDWeek"},DataRow=e=>{var t,n;let{poolData:s,index:r,chainPath:o}=e,a=(0,d.RE)();return(0,i.jsx)(b,{href:`/${u.ew}${o}/pairs?address=${s.address}`,children:(0,i.jsxs)(S,{children:[(0,i.jsx)(l.xvT,{fontWeight:400,children:r+1}),(0,i.jsx)(l.xvT,{fontWeight:400,children:(0,i.jsxs)(g.DA,{children:[(0,i.jsx)(h.g,{address0:s.token0.address,address1:s.token1.address,chainName:a}),(0,i.jsxs)(l.xvT,{ml:"8px",children:[null!==(t=x.VG[s.token0.address])&&void 0!==t?t:s.token0.symbol,"/",null!==(n=x.VG[s.token1.address])&&void 0!==n?n:s.token1.symbol]}),(0,i.jsx)(j.FS,{ml:"10px",style:{fontSize:14},children:(0,p.Uo)(s.feeTier)})]})}),(0,i.jsx)(l.xvT,{fontWeight:400,children:(0,v.Y)(s.tvlUSD)}),(0,i.jsx)(l.xvT,{fontWeight:400,children:(0,v.Y)(s.volumeUSD)}),(0,i.jsx)(l.xvT,{fontWeight:400,children:(0,v.Y)(s.volumeUSDWeek)})]})})};function PoolTable(e){let{poolDatas:t,maxItems:n=10}=e,{chainId:r}=(0,s.g)(),[o,c]=(0,a.useState)(w.tvlUSD),[x,h]=(0,a.useState)(!0),p=(0,d.hb)(),[v,j]=(0,a.useState)(1),[g,b]=(0,a.useState)(1);(0,a.useEffect)(()=>{let e=1;t.length%n==0&&(e=0),b(Math.floor(t.length/n)+e)},[n,t]);let T=(0,a.useMemo)(()=>t?t.filter(e=>{var t;return!!e&&!(null===u.Lr||void 0===u.Lr?void 0:null===(t=u.Lr[r])||void 0===t?void 0:t.includes(e.address))}).sort((e,t)=>e&&t?e[o]>t[o]?(x?-1:1)*1:-((x?-1:1)*1):-1).slice(n*(v-1),v*n):[],[r,n,v,t,x,o]),y=(0,a.useCallback)(e=>{c(e),h(o!==e||!x),j(1)},[x,o]),k=(0,D.c)(o,x);return t?(0,i.jsx)(m.y6,{children:T.length>0?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(S,{children:[(0,i.jsx)(l.xvT,{color:"text",children:"#"}),(0,i.jsxs)(m._J,{color:"text",children:["Pair",(0,i.jsx)(D.K,{scale:"sm",variant:"subtle",onClick:()=>y(w.feeTier),className:k(w.feeTier),children:(0,i.jsx)(l.HKD,{})})]}),(0,i.jsxs)(m._J,{color:"text",children:["TVL",(0,i.jsx)(D.K,{scale:"sm",variant:"subtle",onClick:()=>y(w.tvlUSD),className:k(w.tvlUSD),children:(0,i.jsx)(l.HKD,{})})]}),(0,i.jsxs)(m._J,{color:"text",children:["Volume 24H",(0,i.jsx)(D.K,{scale:"sm",variant:"subtle",onClick:()=>y(w.volumeUSD),className:k(w.volumeUSD),children:(0,i.jsx)(l.HKD,{})})]}),(0,i.jsxs)(m._J,{color:"text",children:["Volume 7D",(0,i.jsx)(D.K,{scale:"sm",variant:"subtle",onClick:()=>y(w.volumeUSDWeek),className:k(w.volumeUSDWeek),children:(0,i.jsx)(l.HKD,{})})]})]}),(0,i.jsx)(m.SS,{}),T.map((e,t)=>e?(0,i.jsxs)(a.Fragment,{children:[(0,i.jsx)(DataRow,{index:(v-1)*10+t,poolData:e,chainPath:p}),(0,i.jsx)(m.SS,{})]},`${null==e?void 0:e.address}_Row`):null),(0,i.jsxs)(m.Ob,{children:[(0,i.jsx)(l.xuv,{onClick:()=>{j(1===v?v:v-1)},children:(0,i.jsx)(m.Eh,{children:(0,i.jsx)(l.Rpv,{color:1===v?"textDisabled":"primary"})})}),(0,i.jsx)(l.xvT,{children:`Page ${v} of ${g}`}),(0,i.jsx)(l.xuv,{onClick:()=>{j(v===g?v:v+1)},children:(0,i.jsx)(m.Eh,{children:(0,i.jsx)(l.mrv,{color:v===g?"textDisabled":"primary"})})})]})]}):(0,i.jsxs)(f.pr,{children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{})]})}):(0,i.jsx)(f.ZP,{})}},2338:function(e,t,n){n.d(t,{Z:function(){return TokenTable}});var i=n(85893),l=n(87619),s=n(36945),r=n(27086),o=n(94203),a=n(67294),d=n(99712),c=n(19521),x=n(49923),h=n(1793),m=n(14706),u=n(54042),p=n(9229),v=n(13256),j=n(42278),f=n(39511),g=n(7846);let D=c.ZP.div.withConfig({componentId:"sc-49d412fc-0"})`
  display: grid;
  grid-gap: 1em;
  align-items: center;

  grid-template-columns: 20px 3fr repeat(4, 1fr);
  padding: 0 24px;
  @media screen and (max-width: 900px) {
    grid-template-columns: 20px 1.5fr repeat(3, 1fr);
    & :nth-child(4) {
      display: none;
    }
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 20px 1.5fr repeat(2, 1fr);
    & :nth-child(6) {
      display: none;
    }
  }

  @media screen and (max-width: 670px) {
    grid-template-columns: 1.3fr 1fr;
    > *:first-child {
      display: none;
    }
    > *:nth-child(3) {
      display: none;
    }
  }
`,S=(0,c.ZP)(l.aBH).withConfig({componentId:"sc-49d412fc-1"})`
  text-decoration: none;
  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`,b=(0,c.ZP)(x.X).withConfig({componentId:"sc-49d412fc-2"})`
  @media screen and (max-width: 670px) {
    width: 16px;
    height: 16px;
  }
`,DataRow=e=>{let{tokenData:t,index:n,chainPath:r}=e,{theme:a}=(0,o.ZP)(),c=(0,d.RE)(),{isMobile:x}=(0,s.SL)();return(0,i.jsxs)(S,{to:`/${m.ew}${r}/tokens?address=${t.address}`,children:[(0,i.jsxs)(D,{children:[(0,i.jsx)(l.xvT,{children:n+1}),(0,i.jsxs)(l.kCb,{children:[(0,i.jsx)(f.DA,{children:(0,i.jsx)(b,{address:t.address,chainName:c})}),(0,i.jsx)(l.xvT,{style:{marginLeft:"10px"},children:(0,i.jsxs)(f.DA,{children:[x?(0,i.jsx)(p.Z,{text:t.symbol}):(0,i.jsx)(p.Z,{text:t.name}),!x&&(0,i.jsxs)(l.xvT,{ml:"8px",color:a.colors.text,children:["(",t.symbol,")"]})]})})]}),(0,i.jsx)(l.xvT,{fontWeight:400,children:(0,u.Y)(t.priceUSD)}),(0,i.jsx)(l.xvT,{fontWeight:400,children:(0,i.jsx)(j.Z,{value:t.priceUSDChange,fontWeight:400})}),(0,i.jsx)(l.xvT,{fontWeight:400,children:(0,u.Y)(t.volumeUSD)}),(0,i.jsx)(l.xvT,{fontWeight:400,children:(0,u.Y)(t.tvlUSD)})]})," "]})},w={name:"name",volumeUSD:"volumeUSD",tvlUSD:"tvlUSD",priceUSD:"priceUSD",priceUSDChange:"priceUSDChange"};function TokenTable(e){let{tokenDatas:t,maxItems:n=10}=e,{chainId:s}=(0,r.g)(),o=(0,d.hb)(),[c,x]=(0,a.useState)(w.volumeUSD),[u,p]=(0,a.useState)(!0),[j,f]=(0,a.useState)(1),[S,b]=(0,a.useState)(1);(0,a.useEffect)(()=>{let e=1;t&&(t.length%n==0&&(e=0),b(Math.floor(t.length/n)+e))},[n,t]);let T=(0,a.useMemo)(()=>t?t.filter(e=>{var t;return!!e&&!(null===m.Em||void 0===m.Em?void 0:null===(t=m.Em[s])||void 0===t?void 0:t.includes(e.address))}).sort((e,t)=>e&&t?e[c]>t[c]?(u?-1:1)*1:-((u?-1:1)*1):-1).slice(n*(j-1),j*n):[],[t,n,j,,c,u,s]),y=(0,a.useCallback)(e=>{x(e),p(c!==e||!u),f(1)},[u,c]),k=(0,g.c)(c,u);return t?(0,i.jsx)(h.y6,{children:T.length>0?(0,i.jsxs)(l.Tz7,{gap:"16px",children:[(0,i.jsxs)(D,{children:[(0,i.jsx)(l.xvT,{color:"text",children:"#"}),(0,i.jsxs)(h._J,{color:"text",children:["Name",(0,i.jsx)(g.K,{scale:"sm",variant:"subtle",onClick:()=>y(w.name),className:k(w.name),children:(0,i.jsx)(l.HKD,{})})]}),(0,i.jsxs)(h._J,{color:"text",children:["Price",(0,i.jsx)(g.K,{scale:"sm",variant:"subtle",onClick:()=>y(w.priceUSD),className:k(w.priceUSD),children:(0,i.jsx)(l.HKD,{})})]}),(0,i.jsxs)(h._J,{color:"text",children:["Price Change",(0,i.jsx)(g.K,{scale:"sm",variant:"subtle",onClick:()=>y(w.priceUSDChange),className:k(w.priceUSDChange),children:(0,i.jsx)(l.HKD,{})})]}),(0,i.jsxs)(h._J,{color:"text",children:["Volume 24H",(0,i.jsx)(g.K,{scale:"sm",variant:"subtle",onClick:()=>y(w.volumeUSD),className:k(w.volumeUSD),children:(0,i.jsx)(l.HKD,{})})]}),(0,i.jsxs)(h._J,{color:"text",children:["TVL",(0,i.jsx)(g.K,{scale:"sm",variant:"subtle",onClick:()=>y(w.tvlUSD),className:k(w.tvlUSD),children:(0,i.jsx)(l.HKD,{})})]})]}),(0,i.jsx)(h.SS,{}),T.map((e,t)=>e?(0,i.jsxs)(a.Fragment,{children:[(0,i.jsx)(DataRow,{index:(j-1)*10+t,tokenData:e,chainPath:o}),(0,i.jsx)(h.SS,{})]},`${e.address}_sortedTokens`):null),(0,i.jsxs)(h.Ob,{children:[(0,i.jsx)(l.xuv,{onClick:()=>{f(1===j?j:j-1)},children:(0,i.jsx)(h.Eh,{children:(0,i.jsx)(l.Rpv,{color:1===j?"textDisabled":"primary"})})}),(0,i.jsx)(l.xvT,{children:`Page ${j} of ${S}`}),(0,i.jsx)(l.xuv,{onClick:()=>{f(j===S?j:j+1)},children:(0,i.jsx)(h.Eh,{children:(0,i.jsx)(l.mrv,{color:j===S?"textDisabled":"primary"})})})]})]}):(0,i.jsxs)(v.pr,{children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{})]})}):(0,i.jsx)(v.ZP,{})}},80145:function(e,t,n){n.d(t,{Qv:function(){return r},Tw:function(){return s},Vd:function(){return o}});var i=n(19521),l=n(87619);i.ZP.div.withConfig({componentId:"sc-1fc5a48-0"})`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.2em;
  margin-bottom: 0.5em;
`,i.ZP.div.withConfig({componentId:"sc-1fc5a48-1"})`
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  opacity: ${e=>e.faded?.3:1};
  padding: 0 20px;
  user-select: none;
  :hover {
    cursor: pointer;
  }
`,i.ZP.div.withConfig({componentId:"sc-1fc5a48-2"})`
  height: 1px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.backgroundAlt}};
  width: 100%;
`;let s=i.ZP.span.withConfig({componentId:"sc-1fc5a48-3"})`
  font-variant-numeric: tabular-nums;
`;i.ZP.div.withConfig({componentId:"sc-1fc5a48-4"})`
  width: 90%;
`,i.ZP.div.withConfig({componentId:"sc-1fc5a48-5"})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  max-width: 100vw !important;
  height: 200vh;
  mix-blend-mode: color;
  background: ${e=>{let{backgroundColor:t}=e;return`radial-gradient(50% 50% at 50% 50%, ${t} 0%, rgba(255, 255, 255, 0) 100%)`}};
  transform: translateY(-176vh);
`,i.ZP.div.withConfig({componentId:"sc-1fc5a48-6"})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  max-width: 100vw !important;
  height: 200vh;
  mix-blend-mode: color;
  background: ${e=>{let{backgroundColor:t}=e;return`radial-gradient(50% 50% at 50% 50%, ${t} 0%, rgba(255, 255, 255, 0) 100%)`}};
  transform: translateY(-150vh);
`;let r=(0,i.ZP)(l.kCb).withConfig({componentId:"sc-1fc5a48-7"})`
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  padding: 0;
  gap: 1em;

  & > * {
    width: 100%;
  }

  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    flex-direction: row;
  }
`;(0,i.ZP)(l.rUS).withConfig({componentId:"sc-1fc5a48-8"})`
  width: 24px;
  height: 24px;
  margin-right: 8px;

  & :hover {
    opacity: 0.8;
  }
`;let o=i.ZP.div.withConfig({componentId:"sc-1fc5a48-9"})`
  margin-top: 20px;
  display: none;
  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    display: block;
  }
`},50426:function(e,t,n){n.d(t,{Z:function(){return Home}});var i=n(85893),l=n(87619),s=n(18803),r=n(27484),o=n.n(r),a=n(27086),d=n(94203),c=n(67294),x=n(44373),h=n(2003),m=n(14714),u=n(42278),p=n(88412),v=n(39511),j=n(2338),f=n(32521),g=n(80145),D=n(25425),S=n(1445);function useTransformedVolumeData(e,t){return(0,c.useMemo)(()=>{if(e){let n={};return e.forEach(e=>{let{date:i,volumeUSD:l}=e,s=function(e,t){let n=o().unix(e).utc();switch(t){case"month":return n.format("YYYY-MM");case"week":let i=n.week().toString();return 1===i.length&&(i=`0${i}`),`${n.year()}-${i}`;default:return""}}(i,t);n[s]?n[s].value+=l:n[s]={time:(0,S.g)(i),value:l}}),Object.values(n)}return[]},[e,t])}var b=n(93556),w=n(89397),T=n(49109),y=n(54042);function Home(){var e,t,n,r;(0,c.useEffect)(()=>{window.scrollTo(0,0)},[]);let{theme:k}=(0,d.ZP)(),C=(0,D.rf)(),U=(0,D.Gx)(),Z=(0,D.oe)(),P=(0,D.TJ)(),Y=(0,D.B5)(),{chainId:H}=(0,a.g)(),[$,M]=(0,c.useState)(),[K,L]=(0,c.useState)(),[V,W]=(0,c.useState)(),[E,I]=(0,c.useState)(),_=o()();(0,c.useEffect)(()=>{L(void 0),M(void 0)},[H]),(0,c.useEffect)(()=>{void 0===K&&C&&L(C.tvlUSD)},[K,C]);let z=(0,c.useMemo)(()=>Y?Y.map(e=>({time:(0,S.g)(e.date),value:e.tvlUSD})):[],[Y]),N=(0,c.useMemo)(()=>Y?Y.map(e=>({time:(0,S.g)(e.date),value:e.volumeUSD})):[],[Y]),A=useTransformedVolumeData(Y,"week"),J=useTransformedVolumeData(Y,"month"),[R,B]=(0,c.useState)(b.H.daily),F=(0,c.useMemo)(()=>Z?Object.values(Z).map(e=>e).filter(w.Dw):[],[Z]),O=(0,c.useMemo)(()=>P?Object.values(P).map(e=>e).filter(w.Dw):[],[P]),G=(0,c.useMemo)(()=>(0,y.Y)(K,2,!0),[K]);return(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(l.X6q,{scale:"lg",mb:"16px",color:"primaryBright",children:"DexTop Info & Analytics"}),(0,i.jsxs)(g.Qv,{children:[(0,i.jsx)(l.Zbd,{children:(0,i.jsx)(m.default,{data:z,height:220,minHeight:332,value:K,label:V,setValue:L,setLabel:W,topLeft:(0,i.jsxs)(l.Tz7,{gap:"4px",children:[(0,i.jsx)(l.xvT,{fontSize:"16px",children:"TVL"}),(0,i.jsx)(l.xvT,{fontSize:"32px",children:(0,i.jsx)(g.Tw,{children:G})}),(0,i.jsx)(l.xvT,{fontSize:"12px",height:"14px",children:(0,i.jsxs)(g.Tw,{children:[null!=V?V:_.format("MMM D, YYYY")," (UTC)"]})})]})})}),(0,i.jsx)(l.Zbd,{children:(0,i.jsx)(x.Z,{height:200,minHeight:332,data:R===b.H.monthly?J:R===b.H.weekly?A:N,color:k.colors.primary,setValue:M,setLabel:I,value:$,label:E,activeWindow:R,topRight:(0,i.jsxs)(v.DA,{style:{marginLeft:"-40px",marginTop:"8px"},children:[(0,i.jsx)(l.zxk,{scale:"sm",variant:R===b.H.daily?"primary":"bubblegum",onClick:()=>B(b.H.daily),children:"D"}),(0,i.jsx)(l.zxk,{scale:"sm",variant:R===b.H.weekly?"primary":"bubblegum",style:{marginLeft:"8px"},onClick:()=>B(b.H.weekly),children:"W"}),(0,i.jsx)(l.zxk,{variant:R===b.H.monthly?"primary":"bubblegum",scale:"sm",style:{marginLeft:"8px"},onClick:()=>B(b.H.monthly),children:"M"})]}),topLeft:(0,i.jsxs)(l.Tz7,{gap:"4px",children:[(0,i.jsx)(l.xvT,{fontSize:"16px",children:"Volume"}),(0,i.jsx)(l.xvT,{fontSize:"32px",children:(0,i.jsx)(g.Tw,{children:$?(0,y.Y)($):(0,y.Y)(null===(e=N[N.length-1])||void 0===e?void 0:e.value,2)})}),(0,i.jsx)(l.xvT,{fontSize:"12px",height:"14px",children:(0,i.jsxs)(g.Tw,{children:[null!=E?E:_.format("MMM D, YYYY")," (UTC)"]})})]})})})]}),(0,i.jsx)(g.Vd,{children:(0,i.jsx)(h.BA,{children:(0,i.jsx)(v.m0,{children:(0,i.jsxs)(v.DA,{children:[(0,i.jsxs)(v.DA,{mr:"20px",children:[(0,i.jsx)(l.xvT,{mr:"4px",children:"Volume 24H: "}),(0,i.jsx)(l.xvT,{mr:"4px",children:(0,y.Y)(null===(t=N[N.length-1])||void 0===t?void 0:t.value)}),(0,i.jsx)(u.Z,{value:(0,T.Y)(null===(n=N[N.length-1])||void 0===n?void 0:n.value.toString(),null===(r=N[N.length-2])||void 0===r?void 0:r.value.toString()),wrap:!0})]}),(0,i.jsxs)(v.DA,{mr:"20px",children:[(0,i.jsx)(l.xvT,{mr:"4px",children:"Fees 24H: "}),(0,i.jsx)(l.xvT,{mr:"4px",children:(0,y.Y)(null==C?void 0:C.feesUSD)}),(0,i.jsx)(u.Z,{value:null==C?void 0:C.feeChange,wrap:!0})]}),(0,i.jsx)(l.xuv,{children:(0,i.jsxs)(v.DA,{mr:"20px",children:[(0,i.jsx)(l.xvT,{mr:"4px",children:"TVL: "}),(0,i.jsx)(l.xvT,{mr:"4px",children:(0,y.Y)(null==C?void 0:C.tvlUSD)}),(0,i.jsx)(u.Z,{value:null==C?void 0:C.tvlUSDChange,wrap:!0})]})})]})})})}),(0,i.jsx)(l.X6q,{scale:"lg",mt:"40px",mb:"16px",color:"primaryBright",children:"Top Tokens"}),(0,i.jsx)(j.Z,{tokenDatas:F}),(0,i.jsx)(l.X6q,{scale:"lg",mt:"40px",mb:"16px",color:"primaryBright",children:"Top Pairs"}),(0,i.jsx)(p.Z,{poolDatas:O}),(0,i.jsx)(l.X6q,{scale:"lg",mt:"40px",mb:"16px",color:"primaryBright",children:"Transactions"}),U?(0,i.jsx)(f.Z,{transactions:U}):null]})}}}]);
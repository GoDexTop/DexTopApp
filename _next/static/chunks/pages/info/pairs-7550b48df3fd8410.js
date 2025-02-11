(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8470],{69902:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/info/pairs",function(){return l(79568)}])},79568:function(e,s,l){"use strict";l.r(s);var i=l(85893),n=l(11163),r=l(12166),t=l(30573),o=l(70756);let InfoPoolsPage=()=>{let e=(0,n.useRouter)(),s=e.isReady&&e.query.address||void 0;return s?(0,i.jsx)(t.Z,{address:s}):(0,i.jsx)(o.Z,{})};InfoPoolsPage.Layout=r.O,InfoPoolsPage.chains=[],s.default=InfoPoolsPage},88412:function(e,s,l){"use strict";l.d(s,{Z:function(){return PoolTable}});var i=l(85893),n=l(87619),r=l(27086),t=l(41664),o=l.n(t),d=l(67294),a=l(99712),c=l(19521),x=l(75824),u=l(49923),h=l(1793),v=l(14706),j=l(89397),m=l(54042),f=l(2003),p=l(13256),g=l(39511),D=l(7846);let S=c.ZP.div.withConfig({componentId:"sc-cfcd8327-0"})`
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
`,k=(0,c.ZP)(o()).withConfig({componentId:"sc-cfcd8327-1"})`
  text-decoration: none;
  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`,P={feeTier:"feeTier",volumeUSD:"volumeUSD",tvlUSD:"tvlUSD",volumeUSDWeek:"volumeUSDWeek"},DataRow=e=>{var s,l;let{poolData:r,index:t,chainPath:o}=e,d=(0,a.RE)();return(0,i.jsx)(k,{href:`/${v.ew}${o}/pairs?address=${r.address}`,children:(0,i.jsxs)(S,{children:[(0,i.jsx)(n.xvT,{fontWeight:400,children:t+1}),(0,i.jsx)(n.xvT,{fontWeight:400,children:(0,i.jsxs)(g.DA,{children:[(0,i.jsx)(u.g,{address0:r.token0.address,address1:r.token1.address,chainName:d}),(0,i.jsxs)(n.xvT,{ml:"8px",children:[null!==(s=x.VG[r.token0.address])&&void 0!==s?s:r.token0.symbol,"/",null!==(l=x.VG[r.token1.address])&&void 0!==l?l:r.token1.symbol]}),(0,i.jsx)(f.FS,{ml:"10px",style:{fontSize:14},children:(0,j.Uo)(r.feeTier)})]})}),(0,i.jsx)(n.xvT,{fontWeight:400,children:(0,m.Y)(r.tvlUSD)}),(0,i.jsx)(n.xvT,{fontWeight:400,children:(0,m.Y)(r.volumeUSD)}),(0,i.jsx)(n.xvT,{fontWeight:400,children:(0,m.Y)(r.volumeUSDWeek)})]})})};function PoolTable(e){let{poolDatas:s,maxItems:l=10}=e,{chainId:t}=(0,r.g)(),[o,c]=(0,d.useState)(P.tvlUSD),[x,u]=(0,d.useState)(!0),j=(0,a.hb)(),[m,f]=(0,d.useState)(1),[g,k]=(0,d.useState)(1);(0,d.useEffect)(()=>{let e=1;s.length%l==0&&(e=0),k(Math.floor(s.length/l)+e)},[l,s]);let T=(0,d.useMemo)(()=>s?s.filter(e=>{var s;return!!e&&!(null===v.Lr||void 0===v.Lr?void 0:null===(s=v.Lr[t])||void 0===s?void 0:s.includes(e.address))}).sort((e,s)=>e&&s?e[o]>s[o]?(x?-1:1)*1:-((x?-1:1)*1):-1).slice(l*(m-1),m*l):[],[t,l,m,s,x,o]),b=(0,d.useCallback)(e=>{c(e),u(o!==e||!x),f(1)},[x,o]),U=(0,D.c)(o,x);return s?(0,i.jsx)(h.y6,{children:T.length>0?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(S,{children:[(0,i.jsx)(n.xvT,{color:"text",children:"#"}),(0,i.jsxs)(h._J,{color:"text",children:["Pair",(0,i.jsx)(D.K,{scale:"sm",variant:"subtle",onClick:()=>b(P.feeTier),className:U(P.feeTier),children:(0,i.jsx)(n.HKD,{})})]}),(0,i.jsxs)(h._J,{color:"text",children:["TVL",(0,i.jsx)(D.K,{scale:"sm",variant:"subtle",onClick:()=>b(P.tvlUSD),className:U(P.tvlUSD),children:(0,i.jsx)(n.HKD,{})})]}),(0,i.jsxs)(h._J,{color:"text",children:["Volume 24H",(0,i.jsx)(D.K,{scale:"sm",variant:"subtle",onClick:()=>b(P.volumeUSD),className:U(P.volumeUSD),children:(0,i.jsx)(n.HKD,{})})]}),(0,i.jsxs)(h._J,{color:"text",children:["Volume 7D",(0,i.jsx)(D.K,{scale:"sm",variant:"subtle",onClick:()=>b(P.volumeUSDWeek),className:U(P.volumeUSDWeek),children:(0,i.jsx)(n.HKD,{})})]})]}),(0,i.jsx)(h.SS,{}),T.map((e,s)=>e?(0,i.jsxs)(d.Fragment,{children:[(0,i.jsx)(DataRow,{index:(m-1)*10+s,poolData:e,chainPath:j}),(0,i.jsx)(h.SS,{})]},`${null==e?void 0:e.address}_Row`):null),(0,i.jsxs)(h.Ob,{children:[(0,i.jsx)(n.xuv,{onClick:()=>{f(1===m?m:m-1)},children:(0,i.jsx)(h.Eh,{children:(0,i.jsx)(n.Rpv,{color:1===m?"textDisabled":"primary"})})}),(0,i.jsx)(n.xvT,{children:`Page ${m} of ${g}`}),(0,i.jsx)(n.xuv,{onClick:()=>{f(m===g?m:m+1)},children:(0,i.jsx)(h.Eh,{children:(0,i.jsx)(n.mrv,{color:m===g?"textDisabled":"primary"})})})]})]}):(0,i.jsxs)(p.pr,{children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{})]})}):(0,i.jsx)(p.ZP,{})}},70756:function(e,s,l){"use strict";var i=l(85893),n=l(87619),r=l(18803),t=l(67294),o=l(88412),d=l(25425);s.Z=()=>{let e=(0,d.TJ)(),s=(0,t.useMemo)(()=>e?Object.values(e):[],[e]);return(0,i.jsxs)(r.Z,{children:[(0,i.jsx)(n.X6q,{scale:"lg",mt:"40px",mb:"16px",id:"info-pools-title",color:"primaryBright",children:"All Pairs"}),(0,i.jsx)(o.Z,{poolDatas:s})]})}}},function(e){e.O(0,[4158,7883,2810,6888,2062,2656,573,9774,2888,179],function(){return e(e.s=69902)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7798],{3841:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/info/[chainName]/pairs",function(){return l(61750)}])},61750:function(e,s,l){"use strict";l.r(s);var n=l(85893),i=l(70756),t=l(12166);let InfoPoolsPage=()=>(0,n.jsx)(i.Z,{});InfoPoolsPage.Layout=t.O,InfoPoolsPage.chains=[],s.default=InfoPoolsPage},88412:function(e,s,l){"use strict";l.d(s,{Z:function(){return PoolTable}});var n=l(85893),i=l(87619),t=l(27086),r=l(41664),o=l.n(r),d=l(67294),a=l(99712),c=l(19521),x=l(75824),h=l(49923),u=l(1793),v=l(14706),j=l(89397),m=l(54042),f=l(2003),p=l(13256),g=l(39511),D=l(7846);let S=c.ZP.div.withConfig({componentId:"sc-cfcd8327-0"})`
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
`,P={feeTier:"feeTier",volumeUSD:"volumeUSD",tvlUSD:"tvlUSD",volumeUSDWeek:"volumeUSDWeek"},DataRow=e=>{var s,l;let{poolData:t,index:r,chainPath:o}=e,d=(0,a.RE)();return(0,n.jsx)(k,{href:`/${v.ew}${o}/pairs?address=${t.address}`,children:(0,n.jsxs)(S,{children:[(0,n.jsx)(i.xvT,{fontWeight:400,children:r+1}),(0,n.jsx)(i.xvT,{fontWeight:400,children:(0,n.jsxs)(g.DA,{children:[(0,n.jsx)(h.g,{address0:t.token0.address,address1:t.token1.address,chainName:d}),(0,n.jsxs)(i.xvT,{ml:"8px",children:[null!==(s=x.VG[t.token0.address])&&void 0!==s?s:t.token0.symbol,"/",null!==(l=x.VG[t.token1.address])&&void 0!==l?l:t.token1.symbol]}),(0,n.jsx)(f.FS,{ml:"10px",style:{fontSize:14},children:(0,j.Uo)(t.feeTier)})]})}),(0,n.jsx)(i.xvT,{fontWeight:400,children:(0,m.Y)(t.tvlUSD)}),(0,n.jsx)(i.xvT,{fontWeight:400,children:(0,m.Y)(t.volumeUSD)}),(0,n.jsx)(i.xvT,{fontWeight:400,children:(0,m.Y)(t.volumeUSDWeek)})]})})};function PoolTable(e){let{poolDatas:s,maxItems:l=10}=e,{chainId:r}=(0,t.g)(),[o,c]=(0,d.useState)(P.tvlUSD),[x,h]=(0,d.useState)(!0),j=(0,a.hb)(),[m,f]=(0,d.useState)(1),[g,k]=(0,d.useState)(1);(0,d.useEffect)(()=>{let e=1;s.length%l==0&&(e=0),k(Math.floor(s.length/l)+e)},[l,s]);let T=(0,d.useMemo)(()=>s?s.filter(e=>{var s;return!!e&&!(null===v.Lr||void 0===v.Lr?void 0:null===(s=v.Lr[r])||void 0===s?void 0:s.includes(e.address))}).sort((e,s)=>e&&s?e[o]>s[o]?(x?-1:1)*1:-((x?-1:1)*1):-1).slice(l*(m-1),m*l):[],[r,l,m,s,x,o]),b=(0,d.useCallback)(e=>{c(e),h(o!==e||!x),f(1)},[x,o]),U=(0,D.c)(o,x);return s?(0,n.jsx)(u.y6,{children:T.length>0?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(S,{children:[(0,n.jsx)(i.xvT,{color:"text",children:"#"}),(0,n.jsxs)(u._J,{color:"text",children:["Pair",(0,n.jsx)(D.K,{scale:"sm",variant:"subtle",onClick:()=>b(P.feeTier),className:U(P.feeTier),children:(0,n.jsx)(i.HKD,{})})]}),(0,n.jsxs)(u._J,{color:"text",children:["TVL",(0,n.jsx)(D.K,{scale:"sm",variant:"subtle",onClick:()=>b(P.tvlUSD),className:U(P.tvlUSD),children:(0,n.jsx)(i.HKD,{})})]}),(0,n.jsxs)(u._J,{color:"text",children:["Volume 24H",(0,n.jsx)(D.K,{scale:"sm",variant:"subtle",onClick:()=>b(P.volumeUSD),className:U(P.volumeUSD),children:(0,n.jsx)(i.HKD,{})})]}),(0,n.jsxs)(u._J,{color:"text",children:["Volume 7D",(0,n.jsx)(D.K,{scale:"sm",variant:"subtle",onClick:()=>b(P.volumeUSDWeek),className:U(P.volumeUSDWeek),children:(0,n.jsx)(i.HKD,{})})]})]}),(0,n.jsx)(u.SS,{}),T.map((e,s)=>e?(0,n.jsxs)(d.Fragment,{children:[(0,n.jsx)(DataRow,{index:(m-1)*10+s,poolData:e,chainPath:j}),(0,n.jsx)(u.SS,{})]},`${null==e?void 0:e.address}_Row`):null),(0,n.jsxs)(u.Ob,{children:[(0,n.jsx)(i.xuv,{onClick:()=>{f(1===m?m:m-1)},children:(0,n.jsx)(u.Eh,{children:(0,n.jsx)(i.Rpv,{color:1===m?"textDisabled":"primary"})})}),(0,n.jsx)(i.xvT,{children:`Page ${m} of ${g}`}),(0,n.jsx)(i.xuv,{onClick:()=>{f(m===g?m:m+1)},children:(0,n.jsx)(u.Eh,{children:(0,n.jsx)(i.mrv,{color:m===g?"textDisabled":"primary"})})})]})]}):(0,n.jsxs)(p.pr,{children:[(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{})]})}):(0,n.jsx)(p.ZP,{})}},70756:function(e,s,l){"use strict";var n=l(85893),i=l(87619),t=l(18803),r=l(67294),o=l(88412),d=l(25425);s.Z=()=>{let e=(0,d.TJ)(),s=(0,r.useMemo)(()=>e?Object.values(e):[],[e]);return(0,n.jsxs)(t.Z,{children:[(0,n.jsx)(i.X6q,{scale:"lg",mt:"40px",mb:"16px",id:"info-pools-title",color:"primaryBright",children:"All Pairs"}),(0,n.jsx)(o.Z,{poolDatas:s})]})}}},function(e){e.O(0,[4158,2062,9774,2888,179],function(){return e(e.s=3841)}),_N_E=e.O()}]);
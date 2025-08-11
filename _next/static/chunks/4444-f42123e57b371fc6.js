"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4444],{2338:function(e,s,r){r.d(s,{Z:function(){return TokenTable}});var n=r(85893),t=r(31258),l=r(36945),i=r(27086),c=r(94203),d=r(67294),a=r(99712),o=r(19521),x=r(49923),h=r(1793),p=r(14706),u=r(54042),m=r(9229),j=r(13256),v=r(42278),f=r(39511),g=r(7846);let D=o.ZP.div.withConfig({componentId:"sc-49d412fc-0"})`
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
`,S=(0,o.ZP)(t.aBH).withConfig({componentId:"sc-49d412fc-1"})`
  text-decoration: none;
  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`,b=(0,o.ZP)(x.X).withConfig({componentId:"sc-49d412fc-2"})`
  @media screen and (max-width: 670px) {
    width: 16px;
    height: 16px;
  }
`,DataRow=e=>{let{tokenData:s,index:r,chainPath:i}=e,{theme:d}=(0,c.ZP)(),o=(0,a.RE)(),{isMobile:x}=(0,l.SL)();return(0,n.jsxs)(S,{to:`/${p.ew}${i}/tokens?address=${s.address}`,children:[(0,n.jsxs)(D,{children:[(0,n.jsx)(t.xvT,{children:r+1}),(0,n.jsxs)(t.kCb,{children:[(0,n.jsx)(f.DA,{children:(0,n.jsx)(b,{address:s.address,chainName:o})}),(0,n.jsx)(t.xvT,{style:{marginLeft:"10px"},children:(0,n.jsxs)(f.DA,{children:[x?(0,n.jsx)(m.Z,{text:s.symbol}):(0,n.jsx)(m.Z,{text:s.name}),!x&&(0,n.jsxs)(t.xvT,{ml:"8px",color:d.colors.text,children:["(",s.symbol,")"]})]})})]}),(0,n.jsx)(t.xvT,{fontWeight:400,children:(0,u.Y)(s.priceUSD)}),(0,n.jsx)(t.xvT,{fontWeight:400,children:(0,n.jsx)(v.Z,{value:s.priceUSDChange,fontWeight:400})}),(0,n.jsx)(t.xvT,{fontWeight:400,children:(0,u.Y)(s.volumeUSD)}),(0,n.jsx)(t.xvT,{fontWeight:400,children:(0,u.Y)(s.tvlUSD)})]})," "]})},k={name:"name",volumeUSD:"volumeUSD",tvlUSD:"tvlUSD",priceUSD:"priceUSD",priceUSDChange:"priceUSDChange"};function TokenTable(e){let{tokenDatas:s,maxItems:r=10}=e,{chainId:l}=(0,i.g)(),c=(0,a.hb)(),[o,x]=(0,d.useState)(k.volumeUSD),[u,m]=(0,d.useState)(!0),[v,f]=(0,d.useState)(1),[S,b]=(0,d.useState)(1);(0,d.useEffect)(()=>{let e=1;s&&(s.length%r==0&&(e=0),b(Math.floor(s.length/r)+e))},[r,s]);let C=(0,d.useMemo)(()=>s?s.filter(e=>{var s;return!!e&&!(null===p.Em||void 0===p.Em?void 0:null===(s=p.Em[l])||void 0===s?void 0:s.includes(e.address))}).sort((e,s)=>e&&s?e[o]>s[o]?(u?-1:1)*1:-((u?-1:1)*1):-1).slice(r*(v-1),v*r):[],[s,r,v,,o,u,l]),T=(0,d.useCallback)(e=>{x(e),m(o!==e||!u),f(1)},[u,o]),w=(0,g.c)(o,u);return s?(0,n.jsx)(h.y6,{children:C.length>0?(0,n.jsxs)(t.Tz7,{gap:"16px",children:[(0,n.jsxs)(D,{children:[(0,n.jsx)(t.xvT,{color:"text",children:"#"}),(0,n.jsxs)(h._J,{color:"text",children:["Name",(0,n.jsx)(g.K,{scale:"sm",variant:"subtle",onClick:()=>T(k.name),className:w(k.name),children:(0,n.jsx)(t.HKD,{})})]}),(0,n.jsxs)(h._J,{color:"text",children:["Price",(0,n.jsx)(g.K,{scale:"sm",variant:"subtle",onClick:()=>T(k.priceUSD),className:w(k.priceUSD),children:(0,n.jsx)(t.HKD,{})})]}),(0,n.jsxs)(h._J,{color:"text",children:["Price Change",(0,n.jsx)(g.K,{scale:"sm",variant:"subtle",onClick:()=>T(k.priceUSDChange),className:w(k.priceUSDChange),children:(0,n.jsx)(t.HKD,{})})]}),(0,n.jsxs)(h._J,{color:"text",children:["Volume 24H",(0,n.jsx)(g.K,{scale:"sm",variant:"subtle",onClick:()=>T(k.volumeUSD),className:w(k.volumeUSD),children:(0,n.jsx)(t.HKD,{})})]}),(0,n.jsxs)(h._J,{color:"text",children:["TVL",(0,n.jsx)(g.K,{scale:"sm",variant:"subtle",onClick:()=>T(k.tvlUSD),className:w(k.tvlUSD),children:(0,n.jsx)(t.HKD,{})})]})]}),(0,n.jsx)(h.SS,{}),C.map((e,s)=>e?(0,n.jsxs)(d.Fragment,{children:[(0,n.jsx)(DataRow,{index:(v-1)*10+s,tokenData:e,chainPath:c}),(0,n.jsx)(h.SS,{})]},`${e.address}_sortedTokens`):null),(0,n.jsxs)(h.Ob,{children:[(0,n.jsx)(t.xuv,{onClick:()=>{f(1===v?v:v-1)},children:(0,n.jsx)(h.Eh,{children:(0,n.jsx)(t.Rpv,{color:1===v?"textDisabled":"primary"})})}),(0,n.jsx)(t.xvT,{children:`Page ${v} of ${S}`}),(0,n.jsx)(t.xuv,{onClick:()=>{f(v===S?v:v+1)},children:(0,n.jsx)(h.Eh,{children:(0,n.jsx)(t.mrv,{color:v===S?"textDisabled":"primary"})})})]})]}):(0,n.jsxs)(j.pr,{children:[(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{})]})}):(0,n.jsx)(j.ZP,{})}},34444:function(e,s,r){r.d(s,{Z:function(){return TokensPage}});var n=r(85893),t=r(31258),l=r(18803),i=r(67294),c=r(25425),d=r(2338),a=r(99712),o=r(19521),x=r(29872),h=r(27086),p=r(49923),components_Percent=e=>{let{value:s,...r}=e;if(!s||Number.isNaN(s))return(0,n.jsx)(t.xvT,{...r,children:"-"});let l=s<0;return(0,n.jsxs)(t.xvT,{...r,color:l?"warning2":"success",children:[l?"↓":"↑",Math.abs(s).toFixed(2),"%"]})},u=r(14706);let m=(0,o.ZP)(t.aBH).withConfig({componentId:"sc-4c8edf84-0"})`
  display: inline-block;
  min-width: 190px;
  margin-left: 16px;
  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
`,j=(0,o.ZP)(t.xuv).withConfig({componentId:"sc-4c8edf84-1"})`
  border: 1px solid ${e=>{let{theme:s}=e;return s.colors.primary}};
  border-radius: ${e=>{let{theme:s}=e;return s.radii.card}};
  padding: 16px;
`,v=o.ZP.div.withConfig({componentId:"sc-4c8edf84-2"})`
  width: 100%;
  overflow-x: auto;
  padding: 16px 0;
  white-space: nowrap;
  ::-webkit-scrollbar {
    display: none;
  }
`,DataCard=e=>{let{tokenData:s}=e,r=(0,a.RE)(),l=(0,a.hb)();return(0,n.jsx)(m,{to:`/${u.ew}${l}/tokens?address=${s.address}`,children:(0,n.jsx)(j,{children:(0,n.jsxs)(t.kCb,{children:[(0,n.jsx)(t.xuv,{width:"32px",height:"32px",children:(0,n.jsx)(p.X,{address:s.address,size:"32px",chainName:r})}),(0,n.jsxs)(t.xuv,{ml:"16px",children:[(0,n.jsx)(t.xvT,{children:s.symbol}),(0,n.jsxs)(t.kCb,{alignItems:"center",children:[(0,n.jsxs)(t.xvT,{fontSize:"14px",mr:"6px",lineHeight:"16px",children:["$",(0,x.d)(s.priceUSD)]}),(0,n.jsx)(components_Percent,{fontSize:"14px",value:s.priceUSDChange})]})]})]})})})};var components_TopTokenMovers=()=>{let e=(0,c.oe)(),{chainId:s}=(0,h.g)(),r=(0,i.useMemo)(()=>e?Object.values(e).sort((e,s)=>e&&s?Math.abs(null==e?void 0:e.priceUSDChange)>Math.abs(null==s?void 0:s.priceUSDChange)?-1:1:-1).slice(0,Math.min(20,Object.values(e).length)).filter(e=>null==e?void 0:e.exists).filter(e=>{var r;return!!e&&!(null===u.Em||void 0===u.Em?void 0:null===(r=u.Em[s])||void 0===r?void 0:r.includes(e.address))}):[],[e,s]),l=(0,i.useRef)(null),d=(0,i.useRef)(!0);return((0,i.useEffect)(()=>{let e=setInterval(()=>{l.current&&(l.current.scrollLeft===l.current.scrollWidth-l.current.clientWidth?d.current=!1:0===l.current.scrollLeft&&(d.current=!0),l.current.scrollTo(d.current?l.current.scrollLeft+1:l.current.scrollLeft-1,0))},30);return()=>{clearInterval(e)}},[]),0!==r.length&&r.some(e=>e))?(0,n.jsxs)(t.Zbd,{my:"16px",children:[(0,n.jsx)(t.xvT,{ml:"16px",mt:"8px",children:"Top Movers"}),(0,n.jsx)(v,{ref:l,children:r.map(e=>e?(0,n.jsx)(DataCard,{tokenData:e},`top-card-token-${null==e?void 0:e.address}`):null)})]}):null},TokensPage=()=>{let e=(0,c.oe)(),s=(0,i.useMemo)(()=>e?Object.values(e).map(e=>e).filter(e=>e):[],[e]);return(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(components_TopTokenMovers,{}),(0,n.jsx)(t.X6q,{scale:"lg",mt:"40px",mb:"16px",id:"info-tokens-title",color:"primaryBright",children:"All Tokens"}),(0,n.jsx)(d.Z,{tokenDatas:s})]})}}}]);
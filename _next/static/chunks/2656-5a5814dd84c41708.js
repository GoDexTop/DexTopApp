"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2656],{44373:function(e,t,n){var i=n(85893),r=n(87619),l=n(27484),o=n.n(l),s=n(70178),a=n.n(s),d=n(94203);n(67294);var c=n(9253),h=n(94831),x=n(3023),u=n(14888),m=n(98604),f=n(19521),p=n(93556),j=n(13256);o().extend(a());let g=(0,f.ZP)(r.Zbd).withConfig({componentId:"sc-8c265d67-0"})`
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
`,CustomBar=e=>{let{x:t,y:n,width:r,height:l,fill:o}=e;return(0,i.jsx)("g",{children:(0,i.jsx)("rect",{x:t,y:n,fill:o,width:r,height:l,rx:"2"})})};t.Z=e=>{let{data:t,color:n="#1FC7D4",setValue:l,setLabel:s,value:a,label:f,activeWindow:v,topLeft:k,topRight:y,bottomLeft:T,bottomRight:$,minHeight:M=300,...b}=e,{theme:C}=(0,d.ZP)(),S=o()();return(0,i.jsxs)(g,{...b,children:[(0,i.jsxs)(r.m0X,{style:{alignItems:"flex-start"},children:[null!=k?k:null,null!=y?y:null]}),(null==t?void 0:t.length)===0?(0,i.jsxs)(j.pr,{children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{})]}):(0,i.jsx)(c.h,{width:"100%",height:"100%",children:(0,i.jsxs)(h.v,{width:500,height:300,data:t,margin:{top:5,right:30,left:20,bottom:5},onMouseLeave:()=>{s&&s(void 0),l&&l(void 0)},children:[(0,i.jsx)(x.K,{dataKey:"time",axisLine:!1,tickLine:!1,tickFormatter:e=>o()(e).format(v===p.H.monthly?"MMM":"DD"),minTickGap:10}),(0,i.jsx)(u.u,{cursor:{fill:C.colors.backgroundAlt},contentStyle:{display:"none"},formatter:(e,t,n)=>{l&&a!==n.payload.value&&l(n.payload.value);let i=o()(n.payload.time).format("MMM D"),r=o()(n.payload.time).format("MMM D, YYYY"),d=o()(n.payload.time).add(1,"week"),c=o()(n.payload.time).add(1,"month");if(s&&f!==i){if(v===p.H.weekly){let e=d.isAfter(S);s(`${i}-${e?S.format("MMM D, YYYY"):d.format("MMM D, YYYY")}`)}else if(v===p.H.monthly){let e=c.isAfter(S);s(`${i}-${e?S.format("MMM D, YYYY"):c.format("MMM D, YYYY")}`)}else s(r)}return null}}),(0,i.jsx)(m.$,{dataKey:"value",fill:n,shape:e=>(0,i.jsx)(CustomBar,{height:e.height,width:e.width,x:e.x,y:e.y,fill:n})})]})}),(0,i.jsxs)(r.m0X,{children:[null!=T?T:null,null!=$?$:null]})]})}},9229:function(e,t,n){var i=n(85893),r=n(87619),l=n(90755),o=n(19521);let s=o.ZP.div.withConfig({componentId:"sc-a86ca33-0"})`
  position: relative;
  margin-left: ${e=>{let{margin:t}=e;return t&&"4px"}};
  color: ${e=>{let{theme:t,link:n,color:i}=e;return n?t.colors.primary:null!=i?i:t.colors.text}};
  font-size: ${e=>{let{fontSize:t}=e;return null!=t?t:"inherit"}};

  :hover {
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    font-size: ${e=>{let{adjustSize:t}=e;return t&&"12px"}};
  }
`;t.Z=e=>{let{text:t,maxCharacters:n=20,margin:o=!1,adjustSize:a=!1,fontSize:d,color:c,link:h,...x}=e,{targetRef:u,tooltip:m,tooltipVisible:f}=(0,l.lL)((0,i.jsx)(r.xvT,{children:t}),{placement:"right-end",trigger:"click"});return t?t.length>n?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{margin:o,adjustSize:a,link:!!h,color:c,fontSize:d,...x,ref:u,children:` ${t.slice(0,n-1)}...`}),f&&m]}):(0,i.jsx)(s,{color:c,margin:o,adjustSize:a,link:!!h,fontSize:d,...x,children:t}):(0,i.jsx)("span",{})}},42278:function(e,t,n){n.d(t,{Z:function(){return Percent}});var i=n(85893),r=n(87619),l=n(19521);let o=(0,l.ZP)(r.xvT).withConfig({componentId:"sc-9aa7bb34-0"})`
  font-size: ${e=>{let{fontSize:t}=e;return t}};
  font-weight: ${e=>{let{fontWeight:t}=e;return t}};
  color: ${e=>{let{theme:t,negative:n}=e;return n?t.colors.warning2:t.colors.success}};
`;function Percent(e){let{value:t,decimals:n=2,fontSize:l="16px",fontWeight:s=500,wrap:a=!1,simple:d=!1,...c}=e;if(null==t)return(0,i.jsx)(r.xvT,{fontWeight:s,fontSize:l,children:"-"});let h=parseFloat(t.toFixed(n));return d?(0,i.jsxs)(o,{...c,fontWeight:s,fontSize:l,negative:!1,children:[Math.abs(t).toFixed(n),"%"]}):(0,i.jsxs)(o,{...c,fontWeight:s,fontSize:l,negative:h<0,children:[a&&"(",h<0&&"↓",h>0&&"↑",Math.abs(t).toFixed(n),"%",a&&")"]})}},32521:function(e,t,n){n.d(t,{Z:function(){return TransactionTable}});var i=n(85893),r=n(87619),l=n(67294),o=n(99712),s=n(75824),a=n(19521),d=n(29872),c=n(61129),h=n(1793),x=n(93556),u=n(89397),m=n(1445),f=n(54042),p=n(9229),j=n(13256),g=n(39511),v=n(7846);let k=a.ZP.div.withConfig({componentId:"sc-24e5d423-0"})`
  display: grid;
  grid-gap: 1em;
  align-items: center;

  grid-template-columns: 1.5fr repeat(5, 1fr);
  padding: 0 24px;
  @media screen and (max-width: 940px) {
    grid-template-columns: 1.5fr repeat(4, 1fr);
    & > *:nth-child(5) {
      display: none;
    }
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1.5fr repeat(2, 1fr);
    & > *:nth-child(5) {
      display: none;
    }
    & > *:nth-child(3) {
      display: none;
    }
    & > *:nth-child(4) {
      display: none;
    }
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1.5fr repeat(1, 1fr);
    & > *:nth-child(5) {
      display: none;
    }
    & > *:nth-child(3) {
      display: none;
    }
    & > *:nth-child(4) {
      display: none;
    }
    & > *:nth-child(2) {
      display: none;
    }
  }
`,y=a.ZP.button.withConfig({componentId:"sc-24e5d423-1"})`
  cursor: pointer;
  font-weight: ${e=>{let{active:t}=e;return t?500:400}};
  margin-right: 0.75rem !important;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  padding: 0px;
  color: ${e=>{let{active:t,theme:n}=e;return t?n.colors.text:n.colors.textSubtle}};
  outline: none;
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`,T={amountUSD:"amountUSD",timestamp:"timestamp",sender:"sender",amountToken0:"amountToken0",amountToken1:"amountToken1"},DataRow=e=>{var t,n;let{transaction:l}=e,a=Math.abs(l.amountToken0),h=Math.abs(l.amountToken1),j=(0,o.RE)(),g=null!==(t=s.VG[l.token0Address.toLowerCase()])&&void 0!==t?t:l.token0Symbol,v=null!==(n=s.VG[l.token1Address.toLowerCase()])&&void 0!==n?n:l.token1Symbol,y=l.amountToken0<0?g:v,T=l.amountToken1<0?g:v;return(0,i.jsxs)(k,{children:[(0,i.jsx)(r.NRJ,{href:(0,c.C)(l.hash,"transaction",s.Pi[j]),children:(0,i.jsx)(r.xvT,{fontWeight:400,children:l.type===x.i.MINT?`Add ${g} and ${v}`:l.type===x.i.SWAP?`Swap ${T} for ${y}`:`Remove ${g} and ${v}`})}),(0,i.jsx)(r.xvT,{fontWeight:400,children:(0,f.Y)(l.amountUSD)}),(0,i.jsx)(r.xvT,{fontWeight:400,children:(0,i.jsx)(p.Z,{text:`${(0,d.d)(a)}  ${g}`,maxCharacters:16})}),(0,i.jsx)(r.xvT,{fontWeight:400,children:(0,i.jsx)(p.Z,{text:`${(0,d.d)(h)}  ${v}`,maxCharacters:16})}),(0,i.jsx)(r.xvT,{fontWeight:400,children:(0,i.jsx)(r.NRJ,{href:(0,c.C)(l.sender,"address",s.Pi[j]),children:(0,u.Xn)(l.sender)})}),(0,i.jsx)(r.xvT,{fontWeight:400,children:(0,m.m)(l.timestamp,0)})]})};function TransactionTable(e){let{transactions:t,maxItems:n=10}=e,[o,s]=(0,l.useState)(T.timestamp),[a,d]=(0,l.useState)(!0),[c,u]=(0,l.useState)(1),[m,f]=(0,l.useState)(1),[p,$]=(0,l.useState)(void 0),M=(0,v.c)(o,a);(0,l.useEffect)(()=>{let e=1;t.filter(e=>void 0===p||e.type===p).length%n==0&&(e=0);let i=Math.floor(t.filter(e=>void 0===p||e.type===p).length/n)+e;f(i),0===i?u(0):u(1)},[n,t,p]);let b=(0,l.useMemo)(()=>t?[...t].sort((e,t)=>e&&t?e[o]>t[o]?(a?-1:1)*1:-((a?-1:1)*1):-1).filter(e=>void 0===p||e.type===p).slice(n*(c-1),c*n):[],[t,n,c,o,a,p]),C=(0,l.useCallback)(e=>{s(e),d(o!==e||!a)},[a,o]);return t?(0,i.jsx)(h.y6,{children:(0,i.jsxs)(r.Tz7,{gap:"16px",children:[(0,i.jsxs)(k,{children:[(0,i.jsxs)(g.DA,{children:[(0,i.jsx)(y,{onClick:()=>{$(void 0)},active:void 0===p,children:"All"}),(0,i.jsx)(y,{onClick:()=>{$(x.i.SWAP)},active:p===x.i.SWAP,children:"Swaps"}),(0,i.jsx)(y,{onClick:()=>{$(x.i.MINT)},active:p===x.i.MINT,children:"Adds"}),(0,i.jsx)(y,{onClick:()=>{$(x.i.BURN)},active:p===x.i.BURN,children:"Removes"})]}),(0,i.jsxs)(h._J,{color:"text",children:["Total Value",(0,i.jsx)(v.K,{scale:"sm",variant:"subtle",onClick:()=>C(T.amountUSD),className:M(T.amountUSD),children:(0,i.jsx)(r.HKD,{})})]}),(0,i.jsxs)(h._J,{color:"text",children:["Token0 Amount",(0,i.jsx)(v.K,{scale:"sm",variant:"subtle",onClick:()=>C(T.amountToken0),className:M(T.amountToken0),children:(0,i.jsx)(r.HKD,{})})]}),(0,i.jsxs)(h._J,{color:"text",children:["Token1 Amount",(0,i.jsx)(v.K,{scale:"sm",variant:"subtle",onClick:()=>C(T.amountToken1),className:M(T.amountToken1),children:(0,i.jsx)(r.HKD,{})})]}),(0,i.jsxs)(h._J,{color:"text",children:["Account",(0,i.jsx)(v.K,{scale:"sm",variant:"subtle",onClick:()=>C(T.sender),className:M(T.sender),children:(0,i.jsx)(r.HKD,{})})]}),(0,i.jsxs)(h._J,{color:"text",children:["Time"," ",(0,i.jsx)(v.K,{scale:"sm",variant:"subtle",onClick:()=>C(T.timestamp),className:M(T.timestamp),children:(0,i.jsx)(r.HKD,{})})]})]}),(0,i.jsx)(h.SS,{}),b.map((e,t)=>e?(0,i.jsxs)(l.Fragment,{children:[(0,i.jsx)(DataRow,{transaction:e}),(0,i.jsx)(h.SS,{})]},`${e.hash}/${e.timestamp}/${t}/transactionRecord`):null),0===b.length&&(0,i.jsx)(r.kCb,{justifyContent:"center",children:(0,i.jsx)(r.xvT,{children:"No Transactions"})}),(0,i.jsxs)(h.Ob,{children:[(0,i.jsx)(r.xuv,{onClick:()=>{c>1&&u(c-1)},children:(0,i.jsx)(h.Eh,{children:(0,i.jsx)(r.Rpv,{color:c<=1?"textDisabled":"primary"})})}),(0,i.jsxs)(r.xvT,{children:["Page ",c," of ",m]}),(0,i.jsx)(r.xuv,{onClick:()=>{c!==m&&u(c+1)},children:(0,i.jsx)(h.Eh,{children:(0,i.jsx)(r.mrv,{color:c===m?"textDisabled":"primary"})})})]})]})}):(0,i.jsx)(j.ZP,{})}},1445:function(e,t,n){n.d(t,{g:function(){return unixToDate},m:function(){return formatTime}});var i=n(27484),r=n.n(i);function unixToDate(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD";return r().unix(e).utc().format(t)}let formatTime=(e,t)=>{let n=r()(),i=r().unix(parseInt(e)).add(null!=t?t:0,"minute"),l=n.diff(i,"second"),o=n.diff(i,"minute"),s=n.diff(i,"hour"),a=n.diff(i,"day");return o<1?"recently":s>=24?`${a} ${1===a?"day":"days"} ago`:o>=60?`${s} ${1===s?"hour":"hours"} ago`:l>=60?`${o} ${1===o?"minute":"minutes"} ago`:`${l} ${1===l?"second":"seconds"} ago`}}}]);
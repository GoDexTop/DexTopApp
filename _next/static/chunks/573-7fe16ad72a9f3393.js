"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[573,4714],{58739:function(e,i,t){t.d(i,{O:function(){return Breadcrumbs_Breadcrumbs}});var n=t(85893),l=t(67294),o=t(19521),r=t(57247),s=t(15113);let d=o.ZP.div.withConfig({componentId:"sc-b9c7047c-0"})`
  align-items: center;
  color: ${e=>{let{theme:i}=e;return i.colors.textDisabled}};
  display: flex;
  justify-content: center;
  padding-left: 4px;
  padding-right: 4px;

  ${e=>{let{theme:i}=e;return i.mediaQueries.sm}} {
    padding-left: 8px;
    padding-right: 8px;
  }

  ${e=>{let{theme:i}=e;return i.mediaQueries.md}} {
    padding-left: 16px;
    padding-right: 16px;
  }
`,c=o.ZP.ul.withConfig({componentId:"sc-b9c7047c-1"})`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;

  a {
    color: ${e=>{let{theme:i}=e;return i.colors.primary}};

    &:hover {
      color: ${e=>{let{theme:i}=e;return i.colors.primaryBright}};
    }
  }

  ${r.Dh}
`,insertSeparators=(e,i)=>e.reduce((e,t,l)=>0===l?[...e,t]:[...e,(0,n.jsx)(d,{"aria-hidden":!0,children:i},`separator-${l}`),t],[]),a=(0,n.jsx)(s.Z,{color:"currentColor",width:"24px"});var Breadcrumbs_Breadcrumbs=e=>{let{separator:i=a,children:t}=e,o=l.Children.toArray(t).filter(e=>(0,l.isValidElement)(e)),r=insertSeparators(o,i);return(0,n.jsx)(c,{children:r.map((e,i)=>(0,n.jsx)("li",{children:e},`child-${i}`))})}},54272:function(e,i,t){t.d(i,{_:function(){return TabToggleGroup},o:function(){return d}});var n=t(85893),l=t(31258),o=t(19521);let r=(0,o.ZP)(l.kCb).withConfig({componentId:"sc-532dd31b-0"})`
  overflow-x: scroll;
  padding: 0;
  border-radius: 8px 8px 0 0;
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`,s=(0,o.ZP)(l.kCb).withConfig({componentId:"sc-532dd31b-1"})`
  justify-content: space-between;
  // background-color: ${e=>{let{theme:i}=e;return i.colors.input}};
  width: 100%;
`,d=(0,o.ZP)(l.xuv).attrs({as:"button"}).withConfig({componentId:"sc-532dd31b-2"})`
  display: inline-flex;
  justify-content: center;
  cursor: pointer;
  flex: 1;
  border: 0;
  outline: 0;
  margin: 0;
  // border-radius: 8px 8px 0 0;
  font-size: 16px;
  font-weight: 600;
  color: ${e=>{let{theme:i,isActive:t}=e;return t?i.colors.text:i.colors.textSubtle}};
  background-color: ${e=>{let{theme:i,isActive:t}=e;return t?i.colors.dropdown:i.colors.backgroundAlt}};
  box-shadow: none;
`;d.defaultProps={p:"16px"};let TabToggleGroup=e=>{let{children:i}=e;return(0,n.jsx)(r,{p:["0 4px","0 16px"],children:(0,n.jsx)(s,{children:i})})}},14714:function(e,i,t){t.r(i);var n=t(85893),l=t(31258),o=t(27484),r=t.n(o),s=t(70178),d=t.n(s),c=t(94203),a=t(62810);t(67294);var x=t(9253),u=t(46888),h=t(3023),p=t(14888),v=t(86108),m=t(19521),j=t(13256),f=t(39511);r().extend(d());let g=(0,m.ZP)(l.Zbd).withConfig({componentId:"sc-361fcbfd-0"})`
  border: 1px solid ${e=>{let{theme:i}=e;return i.colors.backgroundAlt}};
  width: 100%;
  height: ${300}px;
  display: flex;
  background-color: transparent;
  flex-direction: column;
  padding: 1rem;
  > * {
    font-size: 1rem;
  }
`;i.default=e=>{let{data:i,color:t="#1FC7D4",value:l,label:o,setValue:s,setLabel:d,topLeft:m,topRight:b,bottomLeft:k,bottomRight:y,minHeight:T=300,...C}=e,{theme:w}=(0,c.ZP)();return(0,n.jsxs)(g,{...C,children:[(0,n.jsxs)(f.m0,{children:[null!=m?m:null,null!=b?b:null]}),(null==i?void 0:i.length)===0?(0,n.jsxs)(j.pr,{children:[(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{})]}):(0,n.jsx)(x.h,{width:"100%",height:"100%",children:(0,n.jsxs)(u.T,{width:500,height:300,data:i,margin:{top:5,right:30,left:20,bottom:5},onMouseLeave:()=>{d&&d(void 0),s&&s(void 0)},children:[(0,n.jsx)("defs",{children:(0,n.jsxs)("linearGradient",{id:"gradient",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,n.jsx)("stop",{offset:"5%",stopColor:(0,a._j)(.36,t),stopOpacity:.5}),(0,n.jsx)("stop",{offset:"100%",stopColor:t,stopOpacity:0})]})}),(0,n.jsx)(h.K,{dataKey:"time",axisLine:!1,tickLine:!1,tickFormatter:e=>r()(e).format("DD"),minTickGap:10}),(0,n.jsx)(p.u,{cursor:{stroke:w.colors.backgroundAlt2},contentStyle:{display:"none"},formatter:(e,i,t)=>{s&&l!==t.payload.value&&s(t.payload.value);let n=r()(t.payload.time).format("MMM D, YYYY");return d&&o!==n&&d(n),null}}),(0,n.jsx)(v.u,{dataKey:"value",type:"monotone",stroke:t,fill:"url(#gradient)",strokeWidth:2})]})}),(0,n.jsxs)(f.m0,{children:[null!=k?k:null,null!=y?y:null]})]})}},30573:function(e,i,t){t.d(i,{Z:function(){return views_PoolPage}});var n,l,o=t(85893),r=t(27484),s=t.n(r),d=t(31258),c=t(36945),a=t(18803),x=t(58739),u=t(54272),h=t(87752),p=t(94203),v=t(67294),m=t(75824),j=t(99712),f=t(19521),g=t(61129),b=t(29872),k=t(49923),y=t(44373),T=t(14714),C=t(2003),w=t(29928),$=t(31717),S=t(9253),P=t(94831),D=t(14888),L=t(3023),Z=t(98604),A=t(43815),z=t(2763),I=t(14706),B=t(25425),E=t(39511);let N=f.ZP.div.withConfig({componentId:"sc-8f1b1cfb-0"})`
  border-radius: 8px;
  padding: 6px 12px;
  color: white;
  width: fit-content;
  font-size: 14px;
  background-color: ${e=>{let{theme:i}=e;return i.colors.backgroundAlt}};
`;function CurrentPriceLabel(e){let{data:i,chartProps:t,poolData:n}=e,{theme:l}=(0,p.ZP)(),r=null==i?void 0:i[t.index];if(null==r?void 0:r.isCurrent){let{price0:e}=r,{price1:i}=r;return(0,o.jsx)("g",{children:(0,o.jsx)("foreignObject",{x:t.x-80,y:318,width:"100%",height:100,children:(0,o.jsx)(N,{children:(0,o.jsxs)(d.Tz7,{gap:"6px",children:[(0,o.jsxs)(E.DA,{align:"center",children:[(0,o.jsx)(d.xvT,{mr:"6px",children:"Current Price"}),(0,o.jsx)(d.xuv,{style:{marginTop:"2px",height:"6px",width:"6px",borderRadius:"50%",backgroundColor:l.colors.failure}})]}),(0,o.jsx)(d.xvT,{children:`1 ${null==n?void 0:n.token0.symbol} = ${Number(e).toLocaleString(void 0,{minimumSignificantDigits:1})} ${null==n?void 0:n.token1.symbol}`}),(0,o.jsx)(d.xvT,{children:`1 ${null==n?void 0:n.token1.symbol} = ${Number(i).toLocaleString(void 0,{minimumSignificantDigits:1})} ${null==n?void 0:n.token0.symbol}`})]})})})})}return null}var q=t(54042);let H=(0,f.ZP)(C.hl).withConfig({componentId:"sc-df300728-0"})`
  width: 260px;
  padding: 12px;
  opacity: 0.6;
  font-size: 12px;
  z-index: 10;
  ${e=>{let{theme:i}=e;return i.mediaQueries.md}} {
    width: 320px;
  }
`;var DensityChart_CustomToolTip=function(e){var i,t,n,l,r,s,c,a,x,u,h,v,m,j,f,g;let{chartProps:b,poolData:k,currentPrice:y}=e,{theme:T}=(0,p.ZP)(),C=null==b?void 0:null===(t=b.payload)||void 0===t?void 0:null===(i=t[0])||void 0===i?void 0:i.payload.price0,w=null==b?void 0:null===(l=b.payload)||void 0===l?void 0:null===(n=l[0])||void 0===n?void 0:n.payload.price1,$=null==b?void 0:null===(s=b.payload)||void 0===s?void 0:null===(r=s[0])||void 0===r?void 0:r.payload.tvlToken0,S=null==b?void 0:null===(a=b.payload)||void 0===a?void 0:null===(c=a[0])||void 0===c?void 0:c.payload.tvlToken1;return(0,o.jsx)(H,{children:(0,o.jsxs)(d.Tz7,{gap:"sm",children:[(0,o.jsx)(d.xvT,{color:T.colors.textSubtle,children:"Tick stats"}),(0,o.jsxs)(E.m0,{children:[(0,o.jsxs)(d.xvT,{children:[null==k?void 0:null===(x=k.token0)||void 0===x?void 0:x.symbol," Price:"," "]}),(0,o.jsxs)(d.xvT,{children:[C?Number(C).toLocaleString(void 0,{minimumSignificantDigits:1}):""," ",null==k?void 0:null===(u=k.token1)||void 0===u?void 0:u.symbol]})]}),(0,o.jsxs)(E.m0,{children:[(0,o.jsxs)(d.xvT,{children:[null==k?void 0:null===(h=k.token1)||void 0===h?void 0:h.symbol," Price:"," "]}),(0,o.jsxs)(d.xvT,{children:[w?Number(w).toLocaleString(void 0,{minimumSignificantDigits:1}):""," ",null==k?void 0:null===(v=k.token0)||void 0===v?void 0:v.symbol]})]}),y&&C&&y>w?(0,o.jsxs)(E.m0,{children:[(0,o.jsxs)(d.xvT,{children:[null==k?void 0:null===(m=k.token0)||void 0===m?void 0:m.symbol," Locked:"," "]}),(0,o.jsxs)(d.xvT,{children:[$?(0,q.d)($):""," ",null==k?void 0:null===(j=k.token0)||void 0===j?void 0:j.symbol]})]}):(0,o.jsxs)(E.m0,{children:[(0,o.jsxs)(d.xvT,{children:[null==k?void 0:null===(f=k.token1)||void 0===f?void 0:f.symbol," Locked:"," "]}),(0,o.jsxs)(d.xvT,{children:[S?(0,q.d)(S):""," ",null==k?void 0:null===(g=k.token1)||void 0===g?void 0:g.symbol]})]})]})})};let M=f.ZP.div.withConfig({componentId:"sc-9bb1c866-0"})`
  position: relative;
  width: 100%;
  height: 400px;
`,Y=f.ZP.div.withConfig({componentId:"sc-9bb1c866-1"})`
  position: absolute;
  right: 40px;
  bottom: 100px;
  padding: 4px;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 6px;
`,U=f.ZP.div.withConfig({componentId:"sc-9bb1c866-2"})`
  width: 32x;
  border-radius: 50%;
  background-color: black;
  padding: 4px 8px;
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  align-items: center;
  opacity: ${e=>{let{disabled:i}=e;return i?.4:.9}};
  background-color: ${e=>{let{theme:i,disabled:t}=e;return t?i.colors.backgroundAlt2:i.colors.backgroundAlt}};
  user-select: none;

  :hover {
    cursor: pointer;
    opacity: 0.4;
  }
`,F={left:0,right:599,refAreaLeft:"",refAreaRight:""};function DensityChart(e){var i,t;let{address:n}=e,l=(0,B.CU)(n),r=(0,g.xP)(null==l?void 0:null===(i=l.token0)||void 0===i?void 0:i.address),s=(0,g.xP)(null==l?void 0:null===(t=l.token1)||void 0===t?void 0:t.address),c=null==l?void 0:l.feeTier,a=(0,v.useMemo)(()=>l&&r&&s?new w.WU(1,r,l.token0.decimals,l.token0.symbol):void 0,[r,s,l]),x=(0,v.useMemo)(()=>l&&s&&s?new w.WU(1,s,l.token1.decimals,l.token1.symbol):void 0,[s,l]),u=(0,B.uk)(n),[h,p]=(0,v.useState)(200),m=2*h+1,[j,f]=(0,v.useState)(!1),[b,k]=(0,v.useState)(F),[y,T]=(0,v.useState)();(0,v.useEffect)(()=>{async function formatData(){if(u&&(null==l?void 0:l.feeTier)){let e=await Promise.all(u.ticksProcessed.map(async(e,i)=>{let t=e.tickIdx===u.activeTickIdx,n=$.pk.getSqrtRatioAtTick(e.tickIdx),o=null==l?void 0:l.feeTier,r=[{index:e.tickIdx-$.LX[o],liquidityGross:e.liquidityGross,liquidityNet:e.liquidityNet*BigInt("-1")},{index:e.tickIdx,liquidityGross:e.liquidityGross,liquidityNet:e.liquidityNet}],s=a&&x&&c?new $.Kg(a,x,c,n,e.liquidityActive,e.tickIdx,r):void 0,d=u.ticksProcessed[i-1]?$.pk.getSqrtRatioAtTick(u.ticksProcessed[i-1].tickIdx):void 0,h=a?w.ih.fromRawAmount(a,I.LB):void 0,p=s&&h?await s.getOutputAmount(h,d):void 0,v=null==p?void 0:p[0],m=v?parseFloat(v.toExact())*parseFloat(e.price1):0,j=v?parseFloat(v.toExact()):0;return{index:i,isCurrent:t,activeLiquidity:parseFloat(e.liquidityActive.toString()),price0:parseFloat(e.price0),price1:parseFloat(e.price1),tvlToken0:m,tvlToken1:j}}));null==e||e.forEach((i,t)=>{t>0&&(e[t-1].tvlToken0=i.tvlToken0,e[t-1].tvlToken1=i.tvlToken1)}),e&&(j&&f(!1),T(e))}return[]}y||formatData()},[c,y,j,null==l?void 0:l.feeTier,u,a,x]);let C=b.left+20>=b.right-20-1,E=b.left-20<0,N=(0,v.useCallback)(()=>{C||k({...b,left:b.left+20,right:b.right-20})},[b,C]),q=(0,v.useCallback)(()=>{E?(f(!0),p(h+20),T(void 0),k({...b,left:0,right:m})):k({...b,left:b.left-20,right:b.right+20})},[m,E,h,b]),H=(0,v.useMemo)(()=>{if(y)return y.slice(b.left,b.right)},[y,b.left,b.right]);if((0,v.useEffect)(()=>{T(void 0)},[n]),!u)return(0,o.jsx)(d.kCb,{mt:"80px",justifyContent:"center",children:(0,o.jsx)(d.$jN,{})});let CustomBar=e=>{let{x:i,y:t,width:n,height:l,fill:r}=e;return(0,o.jsx)("g",{children:(0,o.jsx)("rect",{x:i,y:t,fill:r,width:n,height:l,rx:"2"})})};return(0,o.jsxs)(M,{children:[j?(0,o.jsx)(d.kCb,{mt:"80px",justifyContent:"center",children:(0,o.jsx)(d.$jN,{})}):(0,o.jsx)(S.h,{width:"100%",height:"100%",children:(0,o.jsxs)(P.v,{width:500,height:300,data:H,margin:{top:5,right:30,left:20,bottom:60},children:[(0,o.jsx)(D.u,{content:e=>{var i;return(0,o.jsx)(DensityChart_CustomToolTip,{chartProps:e,poolData:l,currentPrice:null!==(i=null==l?void 0:l.token0Price)&&void 0!==i?i:0})}}),(0,o.jsx)(L.K,{reversed:!0,tick:!1}),(0,o.jsxs)(Z.$,{dataKey:"activeLiquidity",fill:"#2172E5",isAnimationActive:!1,shape:e=>(0,o.jsx)(CustomBar,{height:e.height,width:e.width,x:e.x,y:e.y,fill:e.fill}),children:[null==H?void 0:H.map(e=>(0,o.jsx)(A.b,{fill:e.isCurrent?"#ED4B9E":"#31D0AA"},`cell-${e.index}`)),(0,o.jsx)(z.e,{dataKey:"activeLiquidity",position:"inside",content:e=>(0,o.jsx)(CurrentPriceLabel,{chartProps:e,poolData:l,data:H})})]})]})}),(0,o.jsxs)(Y,{children:[(0,o.jsx)(U,{disabled:!1,onClick:q,children:"-"}),(0,o.jsx)(U,{disabled:C,onClick:N,children:"+"})]})]})}var V=t(13256),_=t(42278),R=t(32521),G=t(89397),O=t(1445);let K=f.ZP.div.withConfig({componentId:"sc-6ad24fba-0"})`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 1em;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`,W=(0,f.ZP)(d.kCb).withConfig({componentId:"sc-6ad24fba-1"})`
  padding: 8px 0px;
  margin-right: 16px;
  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;(n=l||(l={}))[n.VOL=0]="VOL",n[n.PRICE=1]="PRICE",n[n.DENSITY=2]="DENSITY",n[n.FEES=3]="FEES",n[n.TVL=4]="TVL";var views_PoolPage=e=>{var i,t,n;let{address:l}=e,{isXs:r,isSm:f}=(0,c.SL)(),w=s()();(0,v.useEffect)(()=>{window.scrollTo(0,0)},[]);let{theme:$}=(0,p.ZP)(),S=$.colors.primary,P=(0,B.CU)(l),D=(0,B.lR)(l),L=(0,B.j8)(l),[Z,A]=(0,v.useState)(0),[z,N]=(0,v.useState)(),[H,M]=(0,v.useState)(),Y=(0,v.useMemo)(()=>!!P&&1>Math.abs(P.token1Price-P.token0Price),[P]),U=(0,v.useMemo)(()=>D?D.map(e=>({time:(0,O.g)(e.date),value:e.totalValueLockedUSD})):[],[D]),F=(0,v.useMemo)(()=>D?D.map(e=>({time:(0,O.g)(e.date),value:e.volumeUSD})):[],[D]),X=(0,v.useMemo)(()=>D?D.map(e=>({time:(0,O.g)(e.date),value:e.feesUSD})):[],[D]),Q=(0,j.RE)(),J=(0,j.hb)(),ee=(0,j.U1)();return(0,o.jsx)(a.Z,{children:P?(0,o.jsxs)(d.Tz7,{gap:"32px",children:[(0,o.jsxs)(d.kCb,{justifyContent:"space-between",mb:"16px",flexDirection:["column","column","row"],children:[(0,o.jsxs)(x.O,{mb:"32px",children:[(0,o.jsx)(d.aBH,{to:`/${I.ew}${J}${ee}`,children:(0,o.jsx)(d.xvT,{color:"primaryBright",children:"Info"})}),(0,o.jsx)(d.aBH,{to:`/${I.ew}${J}/pairs${ee}`,children:(0,o.jsx)(d.xvT,{color:"primaryBright",children:"Pairs"})}),(0,o.jsx)(d.kCb,{children:(0,o.jsxs)(d.xvT,{mr:"8px",color:"primaryBright",children:[`${P.token0.symbol} / ${P.token1.symbol}
                `,(0,o.jsx)(C.FS,{ml:"4px",style:{display:"inline-block"},children:(0,G.Uo)(P.feeTier)})]})})]}),(0,o.jsx)(d.kCb,{justifyContent:[null,null,"flex-end"],mt:["8px","8px",0],children:(0,o.jsxs)(d.NRJ,{color:"primaryBright",mr:"8px",href:(0,g.C)(l,"address",m.Pi[Q]),children:["View on ",m.nA[Q]]})})]}),(0,o.jsxs)(d.kCb,{flexDirection:"column",children:[(0,o.jsxs)(d.kCb,{alignItems:"center",mb:["8px",null],children:[(0,o.jsx)(k.g,{address0:P.token0.address,address1:P.token1.address,size:32,chainName:Q}),(0,o.jsxs)(d.xvT,{ml:"38px",fontSize:r||f?"24px":"40px",id:"info-pool-pair-title",color:"primaryBright",children:[`${P.token0.symbol} / ${P.token1.symbol}`," ",(0,o.jsx)(C.FS,{ml:"4px",style:{display:"inline-block"},children:(0,G.Uo)(P.feeTier)})]})]}),(0,o.jsxs)(d.kCb,{justifyContent:"space-between",flexDirection:["column","column","column","row"],children:[(0,o.jsxs)(d.kCb,{flexDirection:["column","column","row"],mb:["8px","8px",null],children:[(0,o.jsx)(d.aBH,{to:`/${I.ew}${J}/tokens?address=${P.token0.address}${ee}`,children:(0,o.jsxs)(W,{children:[(0,o.jsx)(k.X,{address:P.token0.address,size:"24px",chainName:Q}),(0,o.jsx)(d.xvT,{color:"primaryBright",fontSize:"16px",ml:"4px",style:{whiteSpace:"nowrap"},width:"fit-content",children:`1 ${P.token0.symbol} =  ${(0,b.d)(P.token1Price,{notation:"standard",displayThreshold:.001,tokenPrecision:Y?"enhanced":"normal"})} ${P.token1.symbol}`})]})}),(0,o.jsx)(d.aBH,{to:`/${I.ew}${J}/tokens?address=${P.token1.address}${ee}`,children:(0,o.jsxs)(W,{ml:[null,null,"10px"],children:[(0,o.jsx)(k.X,{address:P.token1.address,size:"24px",chainName:Q}),(0,o.jsx)(d.xvT,{color:"primaryBright",fontSize:"16px",ml:"4px",style:{whiteSpace:"nowrap"},width:"fit-content",children:`1 ${P.token1.symbol} =  ${(0,b.d)(P.token0Price,{notation:"standard",displayThreshold:.001,tokenPrecision:Y?"enhanced":"normal"})} ${P.token0.symbol}`})]})})]}),(0,o.jsxs)(d.kCb,{children:[(0,o.jsx)(d.aBH,{to:`/add?currency=${P.token0.address}&currency=${P.token1.address}?chain=${h.MS[m.Pi[Q]]}`,children:(0,o.jsx)(d.zxk,{mr:"8px",variant:"secondary",height:"48px",px:"12px",children:(0,o.jsx)(d.xvT,{color:"primaryBright",children:"Add V3 Liquidity"})})}),(0,o.jsx)(d.aBH,{to:`/swap?inputCurrency=${P.token0.address}&outputCurrency=${P.token1.address}&chain=${h.MS[m.Pi[Q]]}`,children:(0,o.jsx)(d.zxk,{height:"48px",variant:"primary",px:"12px",children:"Trade"})})]})]})]}),(0,o.jsxs)(K,{children:[(0,o.jsx)(d.Zbd,{children:(0,o.jsxs)(d.xuv,{p:"24px",children:[(0,o.jsx)(d.Zbd,{mb:"24px",children:(0,o.jsxs)(d.Tz7,{padding:"16px",gap:"md",children:[(0,o.jsx)(d.xvT,{children:"Total Tokens Locked"}),(0,o.jsxs)(E.m0,{children:[(0,o.jsxs)(E.DA,{children:[(0,o.jsx)(k.X,{address:P.token0.address,size:"20px",chainName:Q}),(0,o.jsx)(d.xvT,{fontSize:"14px",ml:"8px",children:P.token0.symbol})]}),(0,o.jsx)(d.xvT,{fontSize:"14px",children:(0,b.d)(P.tvlToken0)})]}),(0,o.jsxs)(E.m0,{children:[(0,o.jsxs)(E.DA,{children:[(0,o.jsx)(k.X,{address:P.token1.address,size:"20px",chainName:Q}),(0,o.jsx)(d.xvT,{fontSize:"14px",ml:"8px",children:P.token1.symbol})]}),(0,o.jsx)(d.xvT,{fontSize:"14px",children:(0,b.d)(P.tvlToken1)})]})]})}),(0,o.jsxs)(d.xuv,{mb:"20px",children:[(0,o.jsx)(d.xvT,{lineHeight:1.3,fontWeight:400,children:"TVL"}),(0,o.jsx)(d.xvT,{lineHeight:1,fontSize:"24px",children:(0,q.Y)(P.tvlUSD)}),(0,o.jsx)(_.Z,{value:P.tvlUSDChange})]}),(0,o.jsxs)(d.xuv,{mb:"20px",children:[(0,o.jsx)(d.xvT,{lineHeight:1.3,fontWeight:400,children:"Volume 24H"}),(0,o.jsx)(d.xvT,{lineHeight:1,fontSize:"24px",children:(0,q.Y)(P.volumeUSD)}),(0,o.jsx)(_.Z,{value:P.volumeUSDChange})]}),(0,o.jsxs)(d.xuv,{mb:"20px",children:[(0,o.jsx)(d.xvT,{lineHeight:1.3,fontWeight:400,children:"Fees 24H"}),(0,o.jsx)(d.xvT,{lineHeight:1,fontSize:"24px",children:(0,q.Y)(P.feeUSD)})]})]})}),(0,o.jsxs)(d.Zbd,{children:[(0,o.jsxs)(u._,{children:[(0,o.jsx)(u.o,{isActive:0===Z,onClick:()=>A(0),children:(0,o.jsx)(d.xvT,{children:"Volume"})}),(0,o.jsx)(u.o,{isActive:2===Z,onClick:()=>A(2),children:(0,o.jsx)(d.xvT,{children:"Liquidity"})}),(0,o.jsx)(u.o,{isActive:3===Z,onClick:()=>A(3),children:(0,o.jsx)(d.xvT,{children:"Fees"})}),(0,o.jsx)(u.o,{isActive:4===Z,onClick:()=>A(4),children:(0,o.jsx)(d.xvT,{children:"TVL"})})]}),(0,o.jsxs)(d.kCb,{flexDirection:"column",px:"24px",pt:"24px",children:[z?(0,q.Y)(z):0===Z?(0,q.Y)(null===(i=F[F.length-1])||void 0===i?void 0:i.value):2===Z?"":4===Z?(0,q.Y)(null===(t=U[U.length-1])||void 0===t?void 0:t.value):(0,q.Y)(null===(n=X[X.length-1])||void 0===n?void 0:n.value),(0,o.jsx)(d.xvT,{small:!0,color:"secondary",children:2!==Z&&`${null!=H?H:w.format("MMM D, YYYY")} (UTC)`})]}),(0,o.jsx)(d.xuv,{height:"380px",children:0===Z?(0,o.jsx)(y.Z,{data:F,color:S,minHeight:340,setValue:N,setLabel:M,value:z,label:H}):3===Z?(0,o.jsx)(y.Z,{data:X,color:S,minHeight:340,setValue:N,setLabel:M,value:z,label:H}):4===Z?(0,o.jsx)(T.default,{data:U,minHeight:340,setValue:N,setLabel:M,value:z,label:H}):(0,o.jsx)(DensityChart,{address:l})})]})]}),(0,o.jsx)(d.X6q,{color:"primaryBright",children:"Transactions"}),L?(0,o.jsx)(R.Z,{transactions:L}):(0,o.jsx)(V.Qw,{fill:!1})]}):(0,o.jsx)(d.kCb,{mt:"80px",justifyContent:"center",children:(0,o.jsx)(d.$jN,{})})})}}}]);
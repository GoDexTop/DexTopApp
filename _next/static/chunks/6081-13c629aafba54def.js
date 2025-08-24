"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6081],{34429:function(e,t,o){o.d(t,{DY:function(){return r},OZ:function(){return n}});let n=2,r=1664130827},93490:function(e,t,o){var n,r,a,i,l,s,d,u;o.d(t,{Mb:function(){return i},iF:function(){return c}}),(l=n||(n={})).COMMUNITY="Community",l.CORE="Core",l.BINANCE="Binance",l.AUTO="Auto",(s=r||(r={})).PENDING="pending",s.OPEN="open",s.CLOSE="close",s.CLAIMABLE="claimable",(d=a||(a={}))[d.ToBeAnnounced=0]="ToBeAnnounced",d[d.Pending=1]="Pending",d[d.Open=2]="Open",d[d.Finished=3]="Finished",d[d.Closed=4]="Closed";let c={Idle:"idle",Fetching:"pending",Fetched:"success",Failed:"error"};(u=i||(i={})).LOWER="LOWER",u.UPPER="UPPER"},75824:function(e,t,o){o.d(t,{J5:function(){return checkIsStableSwap},OO:function(){return d},Pi:function(){return u},VG:function(){return p},VQ:function(){return s},WK:function(){return m},nA:function(){return c}});var n=o(23532),r=o(22066),a=o(87752),i=o(34429),l=o(6752);let s={[a.a_.ETHEREUM]:"PLS"},d={PLS:n.Hs};i.DY;let u={PLS:a.a_.ETHEREUM};a.a_.ETHEREUM,r.GJ;let c={PLS:l.F.blockExplorers.default.name},m={"0x738d96caf7096659db4c1afbf1e1bdfd281f388c":"Ankr Staked MATIC","0x14016e85a25aeb13065688cafb43044c2ef86784":"True USD Old"},p={"0x14016e85a25aeb13065688cafb43044c2ef86784":"TUSDOLD"},checkIsStableSwap=()=>window.location.href.includes("stableSwap")},99712:function(e,t,o){o.d(t,{RE:function(){return useChainNameByQuery},hb:function(){return useMultiChainPath},U1:function(){return useStableSwapPath}});var n,r,a,i,l=o(11163);o(67294);var s=o(58844);o(17204),(n=a||(a={}))[n.SWAP=0]="SWAP",n[n.MINT=1]="MINT",n[n.BURN=2]="BURN",(r=i||(i={}))[r.V3=0]="V3",r[r.V2=1]="V2";var d=o(75824);s.Ps`
  query poolTransactions($address: ID!) {
    mints(first: 35, orderBy: timestamp, orderDirection: desc, where: { pair: $address }) {
      id
      timestamp
      to
      amount0
      amount1
      amountUSD
      pair {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
    }
    swaps(first: 35, orderBy: timestamp, orderDirection: desc, where: { pair: $address }) {
      id
      timestamp
      from
      amount0In
      amount1In
      amount0Out
      amount1Out
      amountUSD
      pair {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
    }
    burns(first: 35, orderBy: timestamp, orderDirection: desc, where: { pair: $address }) {
      id
      timestamp
      sender
      amount0
      amount1
      amountUSD
      pair {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
    }
  }
`,s.Ps`
  query overviewCharts($startTime: Int!, $skip: Int!) {
    pancakeDayDatas(first: 1000, skip: $skip, where: { date_gt: $startTime }, orderBy: date, orderDirection: asc) {
      date
      dailyVolumeUSD
      totalLiquidityUSD
    }
  }
`,o(64075),s.Ps`
  query overviewTransactions {
    mints: mints(first: 33, orderBy: timestamp, orderDirection: desc) {
      id
      timestamp
      pair {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      to
      amount0
      amount1
      amountUSD
    }
    swaps: swaps(first: 33, orderBy: timestamp, orderDirection: desc) {
      id
      timestamp
      pair {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      from
      amount0In
      amount1In
      amount0Out
      amount1Out
      amountUSD
    }
    burns: burns(first: 33, orderBy: timestamp, orderDirection: desc) {
      id
      timestamp
      pair {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      sender
      amount0
      amount1
      amountUSD
    }
  }
`,o(75472),o(71472),o(58867),o(93386);let useChainNameByQuery=()=>"PLS",useMultiChainPath=()=>{let e=(0,l.useRouter)(),{chainName:t}=e.query;return t?`/${t}`:""},useStableSwapPath=()=>(0,d.J5)()?"?type=stableSwap":""},29872:function(e,t,o){o.d(t,{d:function(){return formatAmount}});let getFirstThreeNonZeroDecimals=e=>{var t;return null===(t=e.toFixed(9).match(/^-?\d*\.?0*\d{0,2}/))||void 0===t?void 0:t[0]},formatAmount=(e,t)=>{let{notation:o=e&&e>=1e4?"compact":"standard",displayThreshold:n,tokenPrecision:r,isInteger:a}=t||{notation:e&&e>=1e4?"compact":"standard"};if(0===e)return a?"0":"0.00";if(!e)return"-";if(!Number.isFinite(e))return"∞";if(n&&e<n)return`<${n}`;if(e<1&&!r)return getFirstThreeNonZeroDecimals(e);let i=2;r&&(i=e<1||"enhanced"===r?3:2);let l=parseFloat(null==e?void 0:e.toFixed(i));return Intl.NumberFormat("en-US",{notation:o,minimumFractionDigits:a&&e<1e3?0:i,maximumFractionDigits:a&&e<1e3?0:i,useGrouping:l<1e18}).format(l)}},71472:function(e,t,o){o.d(t,{z:function(){return getBlocksFromTimestamps}});var n=o(58844),r=o(75472),a=o.n(r),i=o(75824),l=o(58867);let getBlockSubqueries=e=>e.map(e=>`t${e}:blocks(first: 1, orderBy: timestamp, orderDirection: desc, where: { timestamp_gt: ${e}, timestamp_lt: ${e+600} }) {
      number
    }`),blocksQueryConstructor=e=>n.Ps`query blocks {
    ${e}
  }`,getBlocksFromTimestamps=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"desc",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"PLS";if((null==e?void 0:e.length)===0)return[];let r=await (0,l.L)(blocksQueryConstructor,getBlockSubqueries(e),i.OO[n],o),s=[];if(r){for(let e of Object.keys(r))r[e].length>0&&s.push({timestamp:e.split("t")[1],number:parseInt(r[e][0].number,10)});return a()(s,e=>e.number,t)}return s}},99939:function(e,t,o){var n=o(88306),r=o.n(n),a=o(87752),i=o(61129),l=o(60480);let s={[a.a_.ETHEREUM]:"ethereum"},d="https://raw.githubusercontent.com/Hex1exe/logos/main/tokens",u=r()(e=>e&&(0,l.U)(e.address)?`${d}/${e.chainId}/tokens/${(0,i.xP)(e.address)}.png`:null,e=>`${null==e?void 0:e.chainId}#${null==e?void 0:e.address}`);r()((e,t)=>{if(e&&t&&(0,l.U)(e)){let o=(0,i.xP)(e);if(369===t)return`${d}/369/tokens/${o}.png`;if(s[t])return`https://assets-cdn.trustwallet.com/blockchains/${s[t]}/assets/${o}/logo.png`}return null},(e,t)=>`${t}#${e}`),t.Z=u},49923:function(e,t,o){o.d(t,{X:function(){return CurrencyLogo},g:function(){return DoubleCurrencyLogo}});var n=o(85893),r=o(29928),a=o(31258),i=o(67294),l=o(75824),s=o(19521),d=o(61129),u=o(99939);let c=(0,s.ZP)(a.Sju).withConfig({componentId:"sc-c62bdc2d-0"})`
  width: ${e=>{let{size:t}=e;return t}};
  height: ${e=>{let{size:t}=e;return t}};
  border-radius: ${e=>{let{size:t}=e;return t}};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
  background-color:rgba(250, 249, 250, 0);
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,CurrencyLogo=e=>{let{address:t,size:o="24px",chainName:a="PLS",...s}=e,m=(0,i.useMemo)(()=>(0,u.Z)(new r.WU(l.Pi[a],t,18,"")),[t,a]),p=(0,d.xP)(t),f=p?`https://tokens.dextop.pro/tokens/${p}.png`:"";return(0,n.jsx)(c,{size:o,srcs:m?[f,m]:[f],alt:"token logo",useFilledIcon:!0,...s})},m=s.ZP.div.withConfig({componentId:"sc-c62bdc2d-1"})`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 32px;
`,DoubleCurrencyLogo=e=>{let{address0:t,address1:o,size:r=16,chainName:a="PLS"}=e;return(0,n.jsxs)(m,{children:[t&&(0,n.jsx)(CurrencyLogo,{address:t,size:`${r.toString()}px`,chainName:a}),o&&(0,n.jsx)(CurrencyLogo,{address:o,size:`${r.toString()}px`,chainName:a})]})}},1793:function(e,t,o){o.d(t,{Eh:function(){return s},Ob:function(){return l},SS:function(){return d},_J:function(){return a},y6:function(){return i}});var n=o(19521),r=o(31258);let a=(0,n.ZP)(r.xvT).withConfig({componentId:"sc-af340c5b-0"})`
  cursor: pointer;
  display: flex;
  justify-content: start;
  gap: 5px;
  align-items: center;
`,i=(0,n.ZP)(r.kCb).withConfig({componentId:"sc-af340c5b-1"})`
  width: 100%;
  padding-top: 16px;
  flex-direction: column;
  gap: 16px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.backgroundAlt}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primary}};
  border-radius: ${e=>{let{theme:t}=e;return t.radii.card}};
  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    border-radius: ${e=>{let{theme:t}=e;return t.radii.card}};
  }
  overflow: hidden;
`,l=n.ZP.div.withConfig({componentId:"sc-af340c5b-2"})`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.2em;
  margin-bottom: 1.2em;
`,s=n.ZP.div.withConfig({componentId:"sc-af340c5b-3"})`
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  padding: 0 20px;
  &:hover {
    cursor: pointer;
  }
`,d=n.ZP.div.withConfig({componentId:"sc-af340c5b-4"})`
  height: 1px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.backgroundAlt}};
  width: 100%;
`},64075:function(e,t,o){o.d(t,{T:function(){return useBlockFromTimeStampSWR}}),o(67294);var n=o(75824),r=o(99712),a=o(10777),i=o(71472);let useBlockFromTimeStampSWR=function(e){var t;let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"desc",l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,s=arguments.length>3?arguments[3]:void 0,d=(0,r.RE)(),u=null!=s?s:d,c=n.Pi[u],m=JSON.stringify(e),p=JSON.parse(m),{data:f}=(0,a.a)({queryKey:[`info/blocks/${m}/${c}`,null!==(t=n.VQ[c])&&void 0!==t?t:u],queryFn:()=>(0,i.z)(p,o,l,u),refetchOnReconnect:!1,refetchOnMount:!1,refetchOnWindowFocus:!1});return{blocks:f}}},58867:function(e,t,o){o.d(t,{L:function(){return multiQuery}});var n=o(58844),r=o(22066),utils_requestWithTimeout=function(e,t,o){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3e4;return Promise.race([o?e.request(t,o):e.request(t),new Promise((e,t)=>{setTimeout(()=>{t(Error(`Request timed out after ${n} milliseconds`))},n)})])};let multiQuery=async function(e,t,o){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1e3,i={},l=!1,s=0,d="string"==typeof o?new n.g6(o,{headers:(0,r.vA)(o)}):o;try{for(;!l;){let o=t.length;s+a<t.length&&(o=s+a);let n=t.slice(s,o),r=await utils_requestWithTimeout(d,e(n));i={...i,...r},l=Object.keys(r).length<a||s+a>t.length,s+=a}return i}catch(e){return console.error("Failed to fetch info data",e),null}}},2003:function(e,t,o){o.d(t,{BA:function(){return l},FS:function(){return s},hl:function(){return i}});var n=o(31258),r=o(19521);let a=(0,r.ZP)(n.xuv).withConfig({componentId:"sc-af38cc1a-0"})`
  width: ${e=>{let{width:t}=e;return null!=t?t:"100%"}};
  border-radius: 16px;
  padding: 1rem;
  padding: ${e=>{let{padding:t}=e;return t}};
  border: ${e=>{let{border:t}=e;return t}};
  border-radius: ${e=>{let{borderRadius:t}=e;return t}};
`;t.ZP=a;let i=(0,r.ZP)(a).withConfig({componentId:"sc-af38cc1a-1"})`
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.background}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.backgroundAlt}};
`;(0,r.ZP)(a).withConfig({componentId:"sc-af38cc1a-2"})`
  background-color: ${e=>{let{theme:t}=e;return t.colors.backgroundDisabled}};
`,(0,r.ZP)(a).withConfig({componentId:"sc-af38cc1a-3"})`
  background-color: ${e=>{let{theme:t}=e;return t.colors.backgroundAlt2}};
`;let l=(0,r.ZP)(a).withConfig({componentId:"sc-af38cc1a-4"})`
  background-color: ${e=>{let{theme:t}=e;return t.colors.backgroundAlt}};
`;(0,r.ZP)(a).withConfig({componentId:"sc-af38cc1a-5"})`
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.backgroundDisabled}};
`,(0,r.ZP)(a).withConfig({componentId:"sc-af38cc1a-6"})`
  background-color: rgba(243, 132, 30, 0.05);
  color: ${e=>{let{theme:t}=e;return t.colors.gradientGold}};
  font-weight: 500;
`,(0,r.ZP)(a).withConfig({componentId:"sc-af38cc1a-7"})`
  background-color: rgba(255, 0, 122, 0.03);
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  font-weight: 500;
`,(0,r.ZP)(a).withConfig({componentId:"sc-af38cc1a-8"})`
  background-color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  color: ${e=>{let{theme:t}=e;return t.colors.gradientBlue}};
  border-radius: 12px;
  width: fit-content;
`,r.ZP.div.withConfig({componentId:"sc-af38cc1a-9"})`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;

  ::-webkit-scrollbar {
    display: none;
  }
`;let s=(0,r.ZP)(a).withConfig({componentId:"sc-af38cc1a-10"})`
  width: fit-content;
  border-radius: 8px;
  background: ${e=>{let{theme:t}=e;return t.colors.success}};
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  padding: 4px 6px;
  font-weight: 400;
`},39113:function(e,t,o){o.d(t,{O:function(){return InfoPageLayout}});var n=o(85893),r=o(31258),a=o(11163),i=o(99712),l=o(14706);o(21819),o(52205),o(23532);var s=o(67294),d=o(75824),u=o(19521);o(63150);var c=o(6752),m=o(29589),p=o(36945),f=o(34429),k=o(75472),h=o.n(k),v=o(23714),y=o(29872),b=o(49923),g=o(25425),D=o(89397),S=o(2003);let x=u.ZP.div.withConfig({componentId:"sc-77aedbbf-0"})`
  position: relative;
  z-index: 105;
  width: 100%;
`,T=(0,u.ZP)(r.IIB).withConfig({componentId:"sc-77aedbbf-1"})`
  z-index: 9999;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.inputSecondary}};
`,w=u.ZP.div.withConfig({componentId:"sc-77aedbbf-2"})`
  display: flex;
  flex-direction: column;
  z-index: 9999;
  width: 100%;
  top: 50px;
  max-height: 400px;
  overflow: auto;
  right: 0;
  padding: 1.5rem;
  padding-bottom: 2.5rem;
  position: absolute;
  background: ${e=>{let{theme:t}=e;return t.colors.background}};
  border-radius: 8px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.04);
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondary}};
  margin-top: 4px;
  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    margin-top: 0;
    width: 500px;
    max-height: 600px;
  }
  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    margin-top: 0;
    width: 800px;
    max-height: 600px;
  }
`,$=u.ZP.div.withConfig({componentId:"sc-77aedbbf-3"})`
  position: absolute;
  min-height: 100vh;
  // width: 100vw;
  z-index: 104;
  background-color: black;
  opacity: 0.7;
  left: 0;
  top: 0;
`,U=u.ZP.div.withConfig({componentId:"sc-77aedbbf-4"})`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 1fr;
  margin: 8px 0;
  align-items: center;
  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    grid-template-columns: 1.5fr repeat(3, 1fr);
  }
`,P=u.ZP.div.withConfig({componentId:"sc-77aedbbf-5"})`
  height: 1px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
  width: 100%;
  margin: 16px 0;
`,F=u.ZP.div.withConfig({componentId:"sc-77aedbbf-6"})`
  color: ${e=>{let{theme:t}=e;return t.colors.secondary}};
  display: block;
  margin-top: 16px;
  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
`,I=u.ZP.div.withConfig({componentId:"sc-77aedbbf-7"})`
  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
`,C=u.ZP.div.withConfig({componentId:"sc-77aedbbf-8"})`
  width: fit-content;
  padding: 4px 8px;
  border-radius: 8px;
  display: flex;
  font-size: 12px;
  font-weight: 600;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${e=>{let{theme:t,enabled:o}=e;return o?t.colors.primary:"transparent"}};
  color: ${e=>{let{theme:t,enabled:o}=e;return o?t.card.background:t.colors.secondary}};
  :hover {
    opacity: 0.6;
    cursor: pointer;
  }
`,tokenIncludesSearchTerm=(e,t)=>e.address.toLowerCase().includes(t.toLowerCase())||e.symbol.toLowerCase().includes(t.toLowerCase())||e.name.toLowerCase().includes(t.toLowerCase()),poolIncludesSearchTerm=(e,t)=>e.address.toLowerCase().includes(t.toLowerCase())||tokenIncludesSearchTerm(e.token0,t)||tokenIncludesSearchTerm(e.token1,t);var components_Search=()=>{var e,t;let o=(0,a.useRouter)(),{isXs:u,isSm:c}=(0,p.SL)(),k=(0,s.useRef)(null),q=(0,s.useRef)(null),L=(0,s.useRef)(null),A=(0,s.useRef)(null),[E,j]=(0,s.useState)(!1),[B,O]=(0,s.useState)(""),N=(0,m.Z)(B,600),{tokens:_,pools:R,loading:V,error:Z}=(0,g.sk)(N),[M,K]=(0,s.useState)(3),[G,H]=(0,s.useState)(3);(0,s.useEffect)(()=>{K(3),H(3)},[N]);let handleOutsideClick=e=>{let t=q.current&&q.current.contains(e.target),o=k.current&&k.current.contains(e.target),n=L.current&&L.current.contains(e.target),r=A.current&&A.current.contains(e.target);t||o||n||r||(H(3),K(3),j(!1))};(0,s.useEffect)(()=>{let e=document.querySelector("body");return E?(document.addEventListener("click",handleOutsideClick),e&&(e.style.overflow="hidden")):(document.removeEventListener("click",handleOutsideClick),e&&(e.style.overflow="visible")),()=>{document.removeEventListener("click",handleOutsideClick)}},[E]);let[z]=(0,v.z6)(),[W]=(0,v.Hx)(),handleItemClick=e=>{j(!1),H(3),K(3),o.push(e)},Q=(0,g.xu)(z),X=(0,g.R6)(W),Y=(null==X?void 0:X.length)!==W.length,[J,ee]=(0,s.useState)(!1),et=(0,s.useMemo)(()=>J?null==Q?void 0:Q.filter(e=>tokenIncludesSearchTerm(e,B)):h()(_,e=>e.volumeUSD,"desc"),[J,_,Q,B]),eo=(0,s.useMemo)(()=>J?null==X?void 0:X.filter(e=>poolIncludesSearchTerm(e,B)):h()(R,e=>e.volumeUSD,"desc"),[R,J,X,B]),en=(0,i.hb)(),er=(0,i.RE)(),ea=(0,d.J5)()?"?type=stableSwap":"";return(0,n.jsxs)(n.Fragment,{children:[E?(0,n.jsx)($,{}):null,(0,n.jsxs)(x,{children:[(0,n.jsx)(T,{type:"text",value:B,onChange:e=>{O(e.target.value)},placeholder:"Search liquidity pairs or tokens",ref:k,onFocus:()=>{j(!0)}}),E&&(0,n.jsxs)(w,{ref:q,children:[(0,n.jsxs)(r.kCb,{mb:"16px",children:[(0,n.jsx)(C,{enabled:!J,onClick:()=>ee(!1),children:"Search"}),(0,n.jsx)(C,{style:{display:"none"},enabled:J,onClick:()=>ee(!0),children:"Watchlist"})]}),Z&&(0,n.jsx)(r.xvT,{color:"failure",children:"Error occurred, please try again"}),(0,n.jsxs)(U,{children:[(0,n.jsx)(r.xvT,{color:"text",children:"Tokens"}),!u&&!c&&(0,n.jsx)(r.xvT,{textAlign:"end",fontSize:"12px",children:"Price"}),!u&&!c&&(0,n.jsx)(r.xvT,{textAlign:"end",fontSize:"12px",children:"Volume 24H"}),!u&&!c&&(0,n.jsx)(r.xvT,{textAlign:"end",fontSize:"12px",children:"Liquidity"})]}),null==et?void 0:et.slice(0,M).map(e=>{var t,o;return(0,n.jsx)(I,{onClick:()=>handleItemClick(`/${l.ew}${en}/tokens?address=${e.address}${ea}`),children:(0,n.jsxs)(U,{children:[(0,n.jsxs)(r.kCb,{children:[(0,n.jsx)(b.X,{address:e.address,chainName:er}),(0,n.jsx)(r.xvT,{ml:"10px",children:(0,n.jsx)(r.xvT,{children:`${null!==(t=d.WK[e.address])&&void 0!==t?t:e.name} (${null!==(o=d.VG[e.address])&&void 0!==o?o:e.symbol})`})})]}),!u&&!c&&(0,n.jsxs)(r.xvT,{textAlign:"end",children:["$",(0,y.d)(e.priceUSD)]}),!u&&!c&&(0,n.jsxs)(r.xvT,{textAlign:"end",children:["$",(0,y.d)(e.volumeUSD)]}),!u&&!c&&(0,n.jsxs)(r.xvT,{textAlign:"end",children:["$",(0,y.d)(e.tvlUSD)]})]})},`searchTokenResult${e.address}`)}),(()=>{let e=(null==et?void 0:et.length)===0&&!V&&N.length>=f.OZ,t=(null==et?void 0:et.length)===0&&!V,o=J?t:e;return(0,n.jsxs)(n.Fragment,{children:[V&&N&&(0,n.jsx)(r.OdW,{}),o&&(0,n.jsx)(r.xvT,{children:"No results"}),!J&&N.length<f.OZ&&(0,n.jsx)(r.xvT,{children:"Search liquidity pairs or tokens"})]})})(),(0,n.jsx)(F,{onClick:()=>{var e,t;M+5<(null!==(e=null==et?void 0:et.length)&&void 0!==e?e:0)?K(M+5):K(null!==(t=null==et?void 0:et.length)&&void 0!==t?t:0)},ref:L,style:{display:(null!==(e=null==et?void 0:et.length)&&void 0!==e?e:0)<=M?"none":"block"},children:"See more..."}),(0,n.jsx)(P,{}),(0,n.jsxs)(U,{children:[(0,n.jsx)(r.xvT,{color:"text",mb:"8px",children:"Pairs"}),!u&&!c&&(0,n.jsx)(r.xvT,{textAlign:"end",fontSize:"12px",children:"Volume 24H"}),!u&&!c&&(0,n.jsx)(r.xvT,{textAlign:"end",fontSize:"12px",children:"Volume 7D"}),!u&&!c&&(0,n.jsx)(r.xvT,{textAlign:"end",fontSize:"12px",children:"Liquidity"})]}),null==eo?void 0:eo.slice(0,G).map(e=>{var t,o;return(0,n.jsx)(I,{onClick:()=>handleItemClick(`/${l.ew}${en}/pairs?address=${e.address}${ea}`),children:(0,n.jsxs)(U,{children:[(0,n.jsxs)(r.kCb,{children:[(0,n.jsx)(b.g,{address0:e.token0.address,address1:e.token1.address,chainName:er}),(0,n.jsx)(r.xvT,{ml:"10px",style:{whiteSpace:"nowrap"},children:(0,n.jsx)(r.xvT,{children:`${null!==(t=d.VG[e.token0.address])&&void 0!==t?t:e.token0.symbol} / ${null!==(o=d.VG[e.token1.address])&&void 0!==o?o:e.token1.symbol}`})}),(0,n.jsx)(S.FS,{ml:"10px",style:{fontSize:14},children:(0,D.Uo)(e.feeTier)})]}),!u&&!c&&(0,n.jsxs)(r.xvT,{textAlign:"end",children:["$",(0,y.d)(e.volumeUSD)]}),!u&&!c&&(0,n.jsxs)(r.xvT,{textAlign:"end",children:["$",(0,y.d)(e.volumeUSDWeek)]}),!u&&!c&&(0,n.jsxs)(r.xvT,{textAlign:"end",children:["$",(0,y.d)(e.tvlUSD)]})]})},`searchPoolResult${e.address}`)}),(()=>{let e=J?Y:V,t=(null==eo?void 0:eo.length)===0&&!V&&N.length>=f.OZ,o=(null==eo?void 0:eo.length)===0&&!e,a=J?o:t,i=J?"Saved tokens will appear here":"No results";return(0,n.jsxs)(n.Fragment,{children:[e&&N&&(0,n.jsx)(r.OdW,{}),a&&(0,n.jsx)(r.xvT,{children:i}),!J&&N.length<f.OZ&&(0,n.jsx)(r.xvT,{children:"Search liquidity pairs or tokens"})]})})(),(0,n.jsx)(F,{onClick:()=>{var e,t;G+5<(null!==(e=null==eo?void 0:eo.length)&&void 0!==e?e:0)?H(G+5):H(null!==(t=null==eo?void 0:eo.length)&&void 0!==t?t:0)},ref:A,style:{display:(null!==(t=null==eo?void 0:eo.length)&&void 0!==t?t:0)<=G?"none":"block"},children:"See more..."})]})]})]})};let q=(0,u.ZP)(r.kCb).withConfig({componentId:"sc-c2ea0800-0"})`
  // background: ${e=>{let{theme:t}=e;return t.colors.backgroundAlt2}};
  justify-content: space-between;
  padding: 20px 16px;
  flex-direction: column;
  gap: 8px;
  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    padding: 20px 40px;
    flex-direction: row;
  }
`;c.F;var Layout_InfoNav=e=>{let{isStableSwap:t}=e,o=(0,a.useRouter)(),d=(0,i.hb)(),u=(0,s.useMemo)(()=>{var e,t;return(null==o?void 0:null===(e=o.pathname)||void 0===e?void 0:e.includes("/pairs"))?1:(null==o?void 0:null===(t=o.pathname)||void 0===t?void 0:t.includes("/tokens"))?2:0},[o.pathname]),c=t?"?type=stableSwap":"";return(0,n.jsxs)(q,{children:[(0,n.jsx)(r.kCb,{children:(0,n.jsx)(r.xuv,{children:(0,n.jsxs)(r.xzh,{activeIndex:u,scale:"sm",variant:"primary",children:[(0,n.jsx)(r.kgj,{as:r.aBH,to:`/${l.ew}${d}${c}`,children:"Overview"}),(0,n.jsx)(r.kgj,{as:r.aBH,to:`/${l.ew}${d}/pairs${c}`,children:"Pairs"}),(0,n.jsx)(r.kgj,{as:r.aBH,to:`/${l.ew}${d}/tokens${c}`,children:"Tokens"})]})})}),(0,n.jsx)(r.xuv,{width:["100%","100%","250px"],children:(0,n.jsx)(components_Search,{})})]})};let InfoPageLayout=e=>{var t;let{children:o}=e,s=(0,a.useRouter)();(0,i.RE)();let d=(0,i.hb)();return null==s||null===(t=s.pathname)||void 0===t||t.includes(l.ew),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.XEe,{items:[{label:"V3",href:`/info/${d}`},{label:"V2",href:`/info${d}`}],activeItem:`/info${d}`}),(0,n.jsx)(Layout_InfoNav,{isStableSwap:!1}),o]})}},13256:function(e,t,o){o.d(t,{Qw:function(){return LocalLoader},ZP:function(){return Loader},pr:function(){return c}});var n=o(85893),r=o(19521);let a=r.F4`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,i=r.ZP.svg.withConfig({componentId:"sc-a4b36cfd-0"})`
  animation: 2s ${a} linear infinite;
  height: ${e=>{let{size:t}=e;return t}};
  width: ${e=>{let{size:t}=e;return t}};
  path {
    stroke: ${e=>{let{stroke:t,theme:o}=e;return null!=t?t:o.colors.primary}};
  }
`;function Loader(e){let{size:t="16px",stroke:o,...r}=e;return(0,n.jsx)(i,{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",size:t,stroke:o,...r,children:(0,n.jsx)("path",{d:"M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})})}let l=r.F4`
  0% { transform: scale(1); }
  60% { transform: scale(1.1); }
  100% { transform: scale(1); }
`,s=r.ZP.div.withConfig({componentId:"sc-a4b36cfd-1"})`
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>{let{theme:t,fill:o}=e;return o?"black":t.colors.background}};
  height: 100%;
  width: 100%;
  ${e=>e.fill&&!e.height?r.iv`
          height: 100vh;
        `:r.iv`
          height: 180px;
        `}
`,d=r.ZP.div.withConfig({componentId:"sc-a4b36cfd-2"})`
  animation: ${l} 800ms linear infinite;
  & > * {
    width: 72px;
  }
`,LocalLoader=e=>{let{fill:t}=e;return(0,n.jsx)(s,{fill:t?1:0,children:(0,n.jsx)(d,{children:(0,n.jsx)("img",{src:"https://assets.pancakeswap.finance/web/pancake-3d-spinner-v2.gif",alt:"loading-icon"})})})},u=r.F4`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,c=r.ZP.div.withConfig({componentId:"sc-a4b36cfd-3"})`
  display: grid;
  min-width: 75%;
  max-width: 100%;
  grid-column-gap: 0.5em;
  grid-row-gap: 0.8em;
  grid-template-columns: repeat(1, 1fr);
  & > div {
    animation: ${u} 1.5s infinite;
    animation-fill-mode: both;
    background: linear-gradient(
      to left,
      // ${e=>{let{theme:t}=e;return t.colors.background}} 25%,
      ${e=>{let{theme:t}=e;return t.colors.background}} 33%,
      ${e=>{let{theme:t}=e;return t.colors.backgroundAlt2}} 66%
    );
    background-size: 400%;
    border-radius: 12px;
    height: 2.4em;
    will-change: background-position;
  }
  & > div:nth-child(4n + 1) {
    grid-column: 1 / 3;
  }
  & > div:nth-child(4n) {
    grid-column: 3 / 4;
    margin-bottom: 2em;
  }
`},39511:function(e,t,o){o.d(t,{DA:function(){return l},m0:function(){return i}});var n=o(31258),r=o(19521);let a=(0,r.ZP)(n.xuv).withConfig({componentId:"sc-5ed01856-0"})`
  width: ${e=>{let{width:t}=e;return null!=t?t:"100%"}};
  display: flex;
  padding: 0;
  align-items: ${e=>{let{align:t}=e;return null!=t?t:"center"}};
  justify-content: ${e=>{let{justify:t}=e;return null!=t?t:"flex-start"}};
  padding: ${e=>{let{padding:t}=e;return t}};
  border: ${e=>{let{border:t}=e;return t}};
  border-radius: ${e=>{let{borderRadius:t}=e;return t}};
`,i=(0,r.ZP)(a).withConfig({componentId:"sc-5ed01856-1"})`
  justify-content: space-between;
`;r.ZP.div.withConfig({componentId:"sc-5ed01856-2"})`
  display: flex;
  align-items: flex-end;
`,(0,r.ZP)(a).withConfig({componentId:"sc-5ed01856-3"})`
  flex-wrap: wrap;
  margin: ${e=>{let{gap:t}=e;return t&&`-${t}`}};
  justify-content: ${e=>{let{justify:t}=e;return t}};

  & > * {
    margin: ${e=>{let{gap:t}=e;return t}} !important;
  }
`;let l=(0,r.ZP)(a).withConfig({componentId:"sc-5ed01856-4"})`
  width: fit-content;
  margin: ${e=>{let{gap:t}=e;return t&&`-${t}`}};
`;(0,r.ZP)(i).withConfig({componentId:"sc-5ed01856-5"})`
  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    flex-direction: column;
    row-gap: 1rem;
  }
`},7846:function(e,t,o){o.d(t,{K:function(){return i},c:function(){return useSortFieldClassName}});var n=o(31258),r=o(19521),a=o(67294);let useSortFieldClassName=(e,t)=>(0,a.useCallback)(o=>{let n=t?"is-desc":"is-asc";return e===o?n:""},[t,e]),i=(0,r.ZP)(n.zxk).withConfig({componentId:"sc-1a067214-0"})`
  padding: 4px 8px;
  border-radius: 8px;
  width: 25px;
  height: 25px;
  margin-left: 3px;
  border-color: ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
  background: ${e=>{let{theme:t}=e;return t.isDark?t.colors.backgroundDisabled:t.colors.input}};
  path {
    fill: ${e=>{let{theme:t}=e;return t.isDark?"rgba(255, 255, 255, 0.2)":"#B4ACCF"}};
  }
  &.is-asc {
    background: ${e=>{let{theme:t}=e;return t.isDark?t.colors.input:t.colors.secondary80}};
    path:first-child {
      fill: rgba(255, 255, 255, 1);
    }
    path:last-child {
      fill: rgba(255, 255, 255, 0.3);
    }
  }
  &.is-desc {
    background: ${e=>{let{theme:t}=e;return t.isDark?t.colors.input:t.colors.secondary80}};
    path:first-child {
      fill: rgba(255, 255, 255, 0.3);
    }
    path:last-child {
      fill: rgba(255, 255, 255, 1);
    }
  }
`},14706:function(e,t,o){o.d(t,{Em:function(){return i},LB:function(){return d},Lr:function(){return a},Mp:function(){return u},Tb:function(){return s},ew:function(){return r},qX:function(){return c},uv:function(){return l}});var n=o(87752);let r="info",a={[n.a_.ETHEREUM]:["0x86d257cdb7bc9c0df10e84c8709697f92770b335","0xf8dbd52488978a79dfe6ffbd81a01fc5948bf9ee","0x8fe8d9bb8eeba3ed688069c3d6b556c9ca258248","0xa850478adaace4c08fc61de44d8cf3b64f359bec","0x277667eb3e34f134adf870be9550e9f323d0dc24","0x8c0411f2ad5470a66cb2e9c64536cfb8dcd54d51","0x055284a4ca6532ecc219ac06b577d540c686669d","0xb078bf211e330b5f95b7114ae845188cc36b795d","0x7778797342652bd27b365962ffc7f6ece356eb57","0xe9825d867e3bef05223bda609fa8ab89aef93797"]},i={[n.a_.ETHEREUM]:["0xd46ba6d942050d489dbd938a2c909a5d5039a161","0x7dfb72a2aad08c937706f21421b15bfc34cba9ca","0x12b32f10a499bf40db334efe04226cca00bf2d9b","0x160de4468586b6b2f8a92feb0c260fc6cfc743b1","0xd84787a01b0cad89fbca231e6960cc0f3f18df34","0xdb19f2052d2b1ad46ed98c66336a5daadeb13005"]},l={DAY:"day",WEEK:"week",MONTH:"month"},s=3600,d=2n**128n-1n,u={[n.a_.ETHEREUM]:21e6},c=50},25425:function(e,t,o){o.d(t,{lR:function(){return usePoolChartData},CU:function(){return usePoolData},uk:function(){return usePoolTickData},j8:function(){return usePoolTransactions},R6:function(){return usePoolsData},CN:function(){return usePoolsForToken},B5:function(){return useProtocolChartData},rf:function(){return useProtocolData},Gx:function(){return useProtocolTransactionData},sk:function(){return useSearchData},ku:function(){return useTokenChartData},Ws:function(){return useTokenData},Q4:function(){return useTokenPriceData},Vq:function(){return useTokenTransactions},xu:function(){return useTokensData},TJ:function(){return useTopPoolsData},oe:function(){return useTopTokensData}});var n=o(93490),r=o(27484),a=o.n(r),i=o(67294),l=o(99712),s=o(75824),d=o(28401),u=o(18717),c=o(7069),m=o(85899);let getDeltaTimestamps=()=>{let e=1e3*(0,d.Z)(new Date),t=(0,d.Z)((0,u.Z)((0,c.Z)(e,1))),o=(0,d.Z)((0,u.Z)((0,c.Z)(e,2))),n=(0,d.Z)((0,u.Z)((0,m.Z)(e,1))),r=(0,d.Z)((0,u.Z)((0,m.Z)(e,2)));return[t,o,n,r]};var p=o(22066),f=o(64075),k=o(10777),h=o(14706),v=o(44431),y=o.n(v),b=o(70178),g=o.n(b),D=o(55183),S=o.n(D),x=o(58844);a().extend(g()),a().extend(S());let T=x.Ps`
  query poolDayDatas($startTime: Int!, $skip: Int!, $address: Bytes!) {
    poolDayDatas(
      first: 1000
      skip: $skip
      where: { pool: $address, date_gt: $startTime }
      orderBy: date
      orderDirection: asc
    ) {
      date
      volumeUSD
      tvlUSD
      feesUSD
      protocolFeesUSD
      pool {
        feeTier
      }
    }
  }
`;async function chartData_fetchPoolChartData(e,t){let o=[],n=a().utc().unix(),r=!1,i=0,l=!1;try{for(;!l;){let n=await t.request(T,{address:e,startTime:1619170975,skip:i});n.poolDayDatas.length>0&&(i+=1e3,(n.poolDayDatas.length<1e3||r)&&(l=!0),n.poolDayDatas&&(o=o.concat(n.poolDayDatas)))}}catch(e){console.error(e),r=!0}if(o){var s,d;let e=o.reduce((e,t)=>{let o=parseInt((t.date/86400).toFixed(0)),n=parseFloat(t.pool.feeTier)/1e4,r=(null==t?void 0:t.volumeUSD)?parseFloat(t.volumeUSD)*n:0;return e[o]={date:t.date,volumeUSD:parseFloat(t.volumeUSD),totalValueLockedUSD:parseFloat(t.tvlUSD)-r,feesUSD:new(y())(t.feesUSD).minus(t.protocolFeesUSD).toNumber()},e},{}),t=e[parseInt(Object.keys(e)[0])],r=null!==(s=null==t?void 0:t.date)&&void 0!==s?s:1619170975,a=null!==(d=null==t?void 0:t.totalValueLockedUSD)&&void 0!==d?d:0;for(;r<n-86400;){let t=r+86400,o=parseInt((t/86400).toFixed(0));Object.keys(e).includes(o.toString())?a=e[o].totalValueLockedUSD:e[o]={date:t,volumeUSD:0,totalValueLockedUSD:a,feesUSD:0},r=t}let i=Object.keys(e).map(t=>e[parseInt(t)]);return{data:i,error:!1}}return{data:void 0,error:r}}var w=o(49109);let POOLS_BULK=(e,t)=>{let o="[";t.forEach(e=>{o=`${o}"${e}",`}),o+="]";let n=`
    query pools {
      pools(where: {id_in: ${o}},
     ${e?`block: {number: ${e}} ,`:""}
     orderBy: totalValueLockedUSD, orderDirection: desc) {
        id
        feeTier
        liquidity
        sqrtPrice
        tick
        token0 {
            id
            symbol
            name
            decimals
            derivedETH
        }
        token1 {
            id
            symbol
            name
            decimals
            derivedETH
        }
        token0Price
        token1Price
        volumeUSD
        volumeToken0
        volumeToken1
        txCount
        totalValueLockedToken0
        totalValueLockedToken1
        totalValueLockedUSD
        feesUSD
        protocolFeesUSD
      }
      bundles(where: {id: "1"}) {
        ethPriceUSD
      }
    }
    `;return x.Ps`
    ${n}
  `};async function poolData_fetchPoolDatas(e,t,o){try{var n,r,a,i;let[l,s,d]=null!=o?o:[],u=await e.request(POOLS_BULK(void 0,t)),c=await e.request(POOLS_BULK(null==l?void 0:l.number,t)),m=await e.request(POOLS_BULK(null==s?void 0:s.number,t)),p=await e.request(POOLS_BULK(null==d?void 0:d.number,t)),f=(null==u?void 0:null===(r=u.bundles)||void 0===r?void 0:null===(n=r[0])||void 0===n?void 0:n.ethPriceUSD)?parseFloat(null==u?void 0:null===(i=u.bundles)||void 0===i?void 0:null===(a=i[0])||void 0===a?void 0:a.ethPriceUSD):0,k=(null==u?void 0:u.pools)?u.pools.reduce((e,t)=>(e[t.id]=t,e),{}):{},h=(null==c?void 0:c.pools)?c.pools.reduce((e,t)=>(e[t.id]=t,e),{}):{},v=(null==m?void 0:m.pools)?m.pools.reduce((e,t)=>(e[t.id]=t,e),{}):{},b=(null==p?void 0:p.pools)?p.pools.reduce((e,t)=>(e[t.id]=t,e),{}):{},g=t.reduce((e,t)=>{let o=k[t],n=h[t],r=v[t],a=b[t],[i,l]=o&&n&&r?(0,w.P)(o.volumeUSD,n.volumeUSD,r.volumeUSD):o?[parseFloat(o.volumeUSD),0]:[0,0],s=o&&a?parseFloat(o.volumeUSD)-parseFloat(a.volumeUSD):o?parseFloat(o.volumeUSD):0,d=o&&n?new(y())(null==o?void 0:o.feesUSD).minus(null==o?void 0:o.protocolFeesUSD).minus(new(y())(null==n?void 0:n.feesUSD).minus(null==n?void 0:n.protocolFeesUSD)):new(y())(null==o?void 0:o.feesUSD).minus(null==o?void 0:o.protocolFeesUSD),u=o?parseFloat(o.feeTier)/1e4/100:0,c=(null==o?void 0:o.volumeToken0)?parseFloat(o.volumeToken0)*u/2:0,m=(null==o?void 0:o.volumeToken1)?parseFloat(o.volumeToken1)*u/2:0,p=o?parseFloat(o.totalValueLockedToken0)-c:0,g=o?parseFloat(o.totalValueLockedToken1)-m:0,D=o?parseFloat(o.totalValueLockedUSD):0,S=o&&n?(parseFloat(o.totalValueLockedUSD)-parseFloat(n.totalValueLockedUSD))/parseFloat("0"===n.totalValueLockedUSD?"1":n.totalValueLockedUSD)*100:0,x=o?p*parseFloat(o.token0.derivedETH)*f+g*parseFloat(o.token1.derivedETH)*f:void 0;x&&(D=x);let T=o?parseInt(o.feeTier):0;return o&&(e[t]={address:t,feeTier:T,liquidity:parseFloat(o.liquidity),sqrtPrice:parseFloat(o.sqrtPrice),tick:parseFloat(o.tick),token0:{address:o.token0.id,name:o.token0.name,symbol:o.token0.symbol,decimals:parseInt(o.token0.decimals),derivedETH:parseFloat(o.token0.derivedETH)},token1:{address:o.token1.id,name:o.token1.name,symbol:o.token1.symbol,decimals:parseInt(o.token1.decimals),derivedETH:parseFloat(o.token1.derivedETH)},token0Price:parseFloat(o.token0Price),token1Price:parseFloat(o.token1Price),volumeUSD:i,volumeUSDChange:l,volumeUSDWeek:s,tvlUSD:D,tvlUSDChange:S,tvlToken0:p,tvlToken1:g,feeUSD:d.toNumber()}),e},{});return{error:!1,data:g}}catch(e){return console.error(e),{error:!0,data:void 0}}}var $=o(24350),U=o.n($),P=o(31717),F=o(29928);let FEE_TIER_TO_TICK_SPACING=e=>{switch(e){case"10000":return 200;case"2500":return 50;case"500":return 10;case"100":return 1;default:throw Error(`Tick spacing for fee tier ${e} undefined.`)}},fetchInitializedTicks=async(e,t,o,n)=>{let r=x.Ps`
    query surroundingTicks(
      $poolAddress: String!
      $tickIdxLowerBound: BigInt!
      $tickIdxUpperBound: BigInt!
      $skip: Int!
    ) {
      ticks(
        first: 1000
        skip: $skip
        where: { poolAddress: $poolAddress, tickIdx_lte: $tickIdxUpperBound, tickIdx_gte: $tickIdxLowerBound }
      ) {
        tickIdx
        liquidityGross
        liquidityNet
        price0
        price1
      }
    }
  `,a=[],i=[],l=0;do try{let s=await n.request(r,{poolAddress:e,tickIdxLowerBound:t,tickIdxUpperBound:o,skip:l});if(!s)continue;a=s.ticks,i=i.concat(a),l+=1e3}catch(e){return console.error(e),{error:!0,ticks:i}}while(a.length>0);return{ticks:i,loading:!1,error:!1}},I=x.Ps`
  query pool($poolAddress: ID!) {
    pool(id: $poolAddress) {
      tick
      token0 {
        symbol
        id
        decimals
      }
      token1 {
        symbol
        id
        decimals
      }
      feeTier
      sqrtPrice
      liquidity
    }
  }
`,fetchTicksSurroundingPrice=async function(e,t,o){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:300;try{var r;let a;let i=await t.request(I,{poolAddress:e}),{pool:{tick:l,feeTier:s,liquidity:d,token0:{id:u,decimals:c,symbol:m},token1:{id:p,decimals:f,symbol:k}}}=i,h=parseInt(l),v=FEE_TIER_TO_TICK_SPACING(s),y=Math.floor(h/v)*v,b=y-n*v,g=y+n*v,D=await fetchInitializedTicks(e,b,g,t);if(D.error||D.loading)return{error:D.error};let{ticks:S}=D,x=U()(S,"tickIdx"),T=new F.WU(o,u,parseInt(c),m),w=new F.WU(o,p,parseInt(f),k),$=y;$<P.pk.MIN_TICK&&($=P.pk.MIN_TICK),$>P.pk.MAX_TICK&&($=P.pk.MAX_TICK);let C={liquidityActive:BigInt(d),tickIdx:y,liquidityNet:0n,price0:(0,P.zz)(T,w,$).toFixed(4),price1:(0,P.zz)(w,T,$).toFixed(4),liquidityGross:0n},q=x[y];q&&(C.liquidityGross=BigInt(q.liquidityGross),C.liquidityNet=BigInt(q.liquidityNet)),(r=a||(a={}))[r.ASC=0]="ASC",r[r.DESC=1]="DESC";let computeSurroundingTicks=(e,t,o,n)=>{let r={...e},a=[];for(let e=0;e<o;e++){let e=0===n?r.tickIdx+t:r.tickIdx-t;if(e<P.pk.MIN_TICK||e>P.pk.MAX_TICK)break;let o={liquidityActive:r.liquidityActive,tickIdx:e,liquidityNet:0n,price0:(0,P.zz)(T,w,e).toFixed(4),price1:(0,P.zz)(w,T,e).toFixed(4),liquidityGross:0n},i=x[e.toString()];i&&(o.liquidityGross=BigInt(i.liquidityGross),o.liquidityNet=BigInt(i.liquidityNet)),0===n&&i?o.liquidityActive=r.liquidityActive+BigInt(i.liquidityNet):1===n&&0n!==r.liquidityNet&&(o.liquidityActive=r.liquidityActive-r.liquidityNet),a.push(o),r=o}return 1===n&&(a=a.reverse()),a},L=computeSurroundingTicks(C,v,n,0),A=computeSurroundingTicks(C,v,n,1),E=A.concat(C).concat(L);return{data:{ticksProcessed:E,feeTier:s,tickSpacing:v,activeTickIdx:y}}}catch(e){return console.error(e),{error:!0}}};var C=o(89397);let q=x.Ps`
  query topPools {
    pools(first: 50, orderBy: totalValueLockedUSD, orderDirection: desc) {
      id
    }
  }
`;async function topPools_fetchTopPoolAddresses(e,t){try{let o=await e.request(q,{client:e,fetchPolicy:"cache-first"}),n=o?o.pools.map(e=>{var o;if(null===h.Lr||void 0===h.Lr||null===(o=h.Lr[t])||void 0===o||!o.includes(e.id.toLocaleLowerCase()))return e.id}).filter(C.Dw):void 0;return{error:!1,addresses:n}}catch(e){return console.error(e),{error:!1,addresses:void 0}}}var L=o(93556);let A=x.Ps`
  query transactions($address: String) {
    mints(first: 100, orderBy: timestamp, orderDirection: desc, where: { pool: $address }) {
      timestamp
      transaction {
        id
      }

      token0 {
        id
        symbol
      }
      token1 {
        id
        symbol
      }
      owner
      sender
      origin
      amount0
      amount1
      amountUSD
    }
    swaps(first: 100, orderBy: timestamp, orderDirection: desc, where: { pool: $address }) {
      timestamp
      transaction {
        id
      }
      token0 {
        id
        symbol
      }
      token1 {
        id
        symbol
      }
      origin
      amount0
      amount1
      amountUSD
    }
    burns(first: 100, orderBy: timestamp, orderDirection: desc, where: { pool: $address }) {
      timestamp
      transaction {
        id
      }
      token0 {
        id
        symbol
      }
      token1 {
        id
        symbol
      }
      owner
      origin
      amount0
      amount1
      amountUSD
    }
  }
`;async function fetchPoolTransactions(e,t){try{let o=await t.request(A,{address:e}),n=o.mints.map(e=>({type:L.i.MINT,hash:e.transaction.id,timestamp:e.timestamp,sender:e.origin,token0Symbol:e.token0.symbol,token1Symbol:e.token1.symbol,token0Address:e.token0.id,token1Address:e.token1.id,amountUSD:parseFloat(e.amountUSD),amountToken0:parseFloat(e.amount0),amountToken1:parseFloat(e.amount1)})),r=o.burns.map(e=>({type:L.i.BURN,hash:e.transaction.id,timestamp:e.timestamp,sender:e.origin,token0Symbol:e.token0.symbol,token1Symbol:e.token1.symbol,token0Address:e.token0.id,token1Address:e.token1.id,amountUSD:parseFloat(e.amountUSD),amountToken0:parseFloat(e.amount0),amountToken1:parseFloat(e.amount1)})),a=o.swaps.map(e=>({type:L.i.SWAP,hash:e.transaction.id,timestamp:e.timestamp,sender:e.origin,token0Symbol:e.token0.symbol,token1Symbol:e.token1.symbol,token0Address:e.token0.id,token1Address:e.token1.id,amountUSD:parseFloat(e.amountUSD),amountToken0:parseFloat(e.amount0),amountToken1:parseFloat(e.amount1)}));return{data:[...n,...r,...a],error:!1}}catch(e){return console.error(e),{data:void 0,error:!0}}}o(87752),a().extend(g()),a().extend(S());let E=x.Ps`
  query pancakeDayDatas($startTime: Int!, $skip: Int!) {
    pancakeDayDatas(first: 1000, skip: $skip, where: { date_gt: $startTime }, orderBy: date, orderDirection: asc) {
      id
      date
      volumeUSD
      tvlUSD
    }
  }
`;async function fetchChartData(e){let t=[],o=a().utc().unix(),n=!1;try{let o=await e.request(E,{startTime:1619170975,skip:0});t=o.pancakeDayDatas}catch{n=!0}if(t){var r,i;let e=t.reduce((e,t)=>{let o=parseInt((t.date/86400).toFixed(0));return e[o]={date:t.date,volumeUSD:parseFloat(t.volumeUSD),tvlUSD:parseFloat(t.tvlUSD)},e},{}),n=e[parseInt(Object.keys(e)[0])],a=null!==(r=null==n?void 0:n.date)&&void 0!==r?r:1619170975,l=null!==(i=null==n?void 0:n.tvlUSD)&&void 0!==i?i:0;for(;a<o-86400;){let t=a+86400,o=parseInt((t/86400).toFixed(0));Object.keys(e).includes(o.toString())?l=e[o].tvlUSD:e[o]={date:t,volumeUSD:0,tvlUSD:l},a=t}return{data:Object.values(e),error:!1}}return{data:void 0,error:n}}let GLOBAL_DATA=e=>{let t=` query pancakeFactories {
      factories(
       ${void 0!==e?`block: { number: ${e}}`:""} 
       first: 1) {
        txCount
        totalVolumeUSD
        totalFeesUSD
        totalValueLockedUSD
        totalProtocolFeesUSD
      }
    }`;return x.Ps`
    ${t}
  `};async function fetchProtocolData(e,t){try{var o,n,r,a,i;let[l,s]=null!=t?t:[],d=await e.request(GLOBAL_DATA()),u=await e.request(GLOBAL_DATA(null!==(a=null==l?void 0:l.number)&&void 0!==a?a:0)),c=await e.request(GLOBAL_DATA(null!==(i=null==s?void 0:s.number)&&void 0!==i?i:0)),m=null==d?void 0:null===(o=d.factories)||void 0===o?void 0:o[0],p=null==u?void 0:null===(n=u.factories)||void 0===n?void 0:n[0],f=null==c?void 0:null===(r=c.factories)||void 0===r?void 0:r[0],k=m&&p?parseFloat(m.totalVolumeUSD)-parseFloat(p.totalVolumeUSD):parseFloat(m.totalVolumeUSD),h=(null==p?void 0:p.totalVolumeUSD)&&(null==f?void 0:f.totalVolumeUSD)?parseFloat(p.totalVolumeUSD)-parseFloat(f.totalVolumeUSD):void 0,v=k&&h?(k-h)/h*100:0,b=(0,w.Y)(null==m?void 0:m.totalValueLockedUSD,null==p?void 0:p.totalValueLockedUSD),g=m&&p?parseFloat(m.txCount)-parseFloat(p.txCount):parseFloat(m.txCount),D=p&&f?parseFloat(p.txCount)-parseFloat(f.txCount):void 0,S=g&&D?(0,w.Y)(g.toString(),D.toString()):0,x=p&&f?new(y())(p.totalFeesUSD).minus(p.totalProtocolFeesUSD).minus(new(y())(f.totalFeesUSD).minus(f.totalProtocolFeesUSD)):void 0,T=m&&p?new(y())(m.totalFeesUSD).minus(m.totalProtocolFeesUSD).minus(new(y())(p.totalFeesUSD).minus(p.totalProtocolFeesUSD)):new(y())(m.totalFeesUSD).minus(m.totalProtocolFeesUSD),$=T&&x?(0,w.Y)(T.toString(),x.toString()):0,U={volumeUSD:k,volumeUSDChange:"number"==typeof v?v:0,tvlUSD:parseFloat(null==m?void 0:m.totalValueLockedUSD),tvlUSDChange:b,feesUSD:T.toNumber(),feeChange:$,txCount:g,txCountChange:S};return{error:!1,data:U}}catch(e){return console.error(e),{error:!1,data:void 0}}}let j=x.Ps`
  query transactions {
    transactions(first: 500, orderBy: timestamp, orderDirection: desc) {
      id
      timestamp
      mints {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
        owner
        sender
        origin
        amount0
        amount1
        amountUSD
      }
      swaps {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
        origin
        amount0
        amount1
        amountUSD
      }
      burns {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
        owner
        origin
        amount0
        amount1
        amountUSD
      }
    }
  }
`;async function fetchTopTransactions(e){try{let t=await e.request(j);if(!t)return;let o=t.transactions.reduce((e,t)=>{let o=t.mints.map(e=>({type:L.i.MINT,hash:t.id,timestamp:t.timestamp,sender:e.origin,token0Symbol:e.token0.symbol,token1Symbol:e.token1.symbol,token0Address:e.token0.id,token1Address:e.token1.id,amountUSD:parseFloat(e.amountUSD),amountToken0:parseFloat(e.amount0),amountToken1:parseFloat(e.amount1)})),n=t.burns.map(e=>({type:L.i.BURN,hash:t.id,timestamp:t.timestamp,sender:e.origin,token0Symbol:e.token0.symbol,token1Symbol:e.token1.symbol,token0Address:e.token0.id,token1Address:e.token1.id,amountUSD:parseFloat(e.amountUSD),amountToken0:parseFloat(e.amount0),amountToken1:parseFloat(e.amount1)})),r=t.swaps.map(e=>({hash:t.id,type:L.i.SWAP,timestamp:t.timestamp,sender:e.origin,token0Symbol:e.token0.symbol,token1Symbol:e.token1.symbol,token0Address:e.token0.id,token1Address:e.token1.id,amountUSD:parseFloat(e.amountUSD),amountToken0:parseFloat(e.amount0),amountToken1:parseFloat(e.amount1)}));return e=[...e,...o,...n,...r]},[]);return o}catch{return}}let getPercentChange=(e,t)=>e&&t?(e-t)/t*100:0,ETH_PRICES=(e,t,o)=>{let n=e?`oneDay: bundles(first: 1, block: { number: ${e} }) {
      ethPriceUSD
    }`:"",r=t?`twoDay: bundles(first: 1, block: { number: ${t} }) {
      ethPriceUSD
    }`:"",a=o?`oneWeek: bundles(first: 1, block: { number: ${o} }) {
      ethPriceUSD
    }`:"",i=`
  query prices {
    current: bundles(first: 1) {
      ethPriceUSD
    }
    ${n}
    ${r}
    ${a}
  }
`;return x.Ps`
    ${i}
  `};async function fetchEthPrices(e,t){try{let[m,p,f]=null!=e?e:[],k=await t.request(ETH_PRICES(null==m?void 0:m.number,null==p?void 0:p.number,null==f?void 0:f.number));if(k){var o,n,r,a,i,l,s,d,u,c;return{data:{current:parseFloat(null!==(s=k.current[0].ethPriceUSD)&&void 0!==s?s:"0"),oneDay:parseFloat(null!==(d=null==k?void 0:null===(n=k.oneDay)||void 0===n?void 0:null===(o=n[0])||void 0===o?void 0:o.ethPriceUSD)&&void 0!==d?d:"0"),twoDay:parseFloat(null!==(u=null==k?void 0:null===(a=k.twoDay)||void 0===a?void 0:null===(r=a[0])||void 0===r?void 0:r.ethPriceUSD)&&void 0!==u?u:"0"),week:parseFloat(null!==(c=null==k?void 0:null===(l=k.oneWeek)||void 0===l?void 0:null===(i=l[0])||void 0===i?void 0:i.ethPriceUSD)&&void 0!==c?c:"0")},error:!1}}return{data:void 0,error:!0}}catch(e){return console.error(e),{data:void 0,error:!0}}}let TOKENS_BULK=(e,t)=>{let o="[";t.forEach(e=>{o=`${o}"${e}",`}),o+="]";let n=`
    query tokens {
      tokens(where: {id_in: ${o}},
    ${e?`block: {number: ${e}} ,`:""}
     orderBy: totalValueLockedUSD, orderDirection: desc) {
        id
        symbol
        name
        decimals
        derivedETH
        volumeUSD
        volume
        txCount
        totalValueLocked
        feesUSD
        totalValueLockedUSD
      }
    }
    `;return x.Ps`
    ${n}
  `};async function fetchedTokenDatas(e,t,o){let[n,r,a]=null!=o?o:[];try{let{data:i}=await fetchEthPrices(o,e),l=await e.request(TOKENS_BULK(void 0,t)),s=await e.request(TOKENS_BULK(null==n?void 0:n.number,t)),d=await e.request(TOKENS_BULK(null==r?void 0:r.number,t)),u=await e.request(TOKENS_BULK(null==a?void 0:a.number,t));if(!i)return{error:!1,data:void 0};let c=(null==l?void 0:l.tokens)?l.tokens.reduce((e,t)=>(e[t.id]=t,e),{}):{},m=(null==s?void 0:s.tokens)?s.tokens.reduce((e,t)=>(e[t.id]=t,e),{}):{},p=(null==d?void 0:d.tokens)?d.tokens.reduce((e,t)=>(e[t.id]=t,e),{}):{},f=(null==u?void 0:u.tokens)?u.tokens.reduce((e,t)=>(e[t.id]=t,e),{}):{},k=t.reduce((e,t)=>{var o,n;let r=c[t],a=m[t],l=p[t],s=f[t],[d,u]=r&&a&&l?(0,w.P)(r.volumeUSD,a.volumeUSD,l.volumeUSD):r?[parseFloat(r.volumeUSD),0]:[0,0],k=r&&s?parseFloat(r.volumeUSD)-parseFloat(s.volumeUSD):r?parseFloat(r.volumeUSD):0,h=r?parseFloat(r.totalValueLockedUSD):0,v=getPercentChange(parseFloat(null==r?void 0:r.totalValueLockedUSD),parseFloat(null==a?void 0:a.totalValueLockedUSD)),y=r?parseFloat(r.decimals):0,b=r?parseFloat(r.totalValueLocked):0,g=r?parseFloat(r.derivedETH)*i.current:0,D=a?parseFloat(a.derivedETH)*i.oneDay:0,S=s?parseFloat(s.derivedETH)*i.week:0,x=g&&D?getPercentChange(g,D):0,T=g&&S?getPercentChange(g,S):0,$=r&&a?parseFloat(r.txCount)-parseFloat(a.txCount):r?parseFloat(r.txCount):0,U=r&&a?parseFloat(r.feesUSD)-parseFloat(a.feesUSD):r?parseFloat(r.feesUSD):0;return e[t]={exists:!!r,address:t,name:null!==(o=null==r?void 0:r.name)&&void 0!==o?o:"",symbol:null!==(n=null==r?void 0:r.symbol)&&void 0!==n?n:"",decimals:y,volumeUSD:d,volumeUSDChange:u,volumeUSDWeek:k,txCount:$,tvlUSD:h,feesUSD:U,tvlUSDChange:v,tvlToken:b,priceUSD:g,priceUSDChange:x,priceUSDChangeWeek:T},e},{});return{error:!1,data:k}}catch(e){return{error:!0,data:void 0}}}let B=x.Ps`
  query tokens($value: String, $id: ID) {
    asSymbol: tokens(where: { symbol_contains: $value }, orderBy: totalValueLockedUSD, orderDirection: desc) {
      id
      symbol
      name
      totalValueLockedUSD
    }
    asName: tokens(where: { name_contains: $value }, orderBy: totalValueLockedUSD, orderDirection: desc) {
      id
      symbol
      name
      totalValueLockedUSD
    }
    asAddress: tokens(where: { id: $id }, orderBy: totalValueLockedUSD, orderDirection: desc) {
      id
      symbol
      name
      totalValueLockedUSD
    }
  }
`,O=x.Ps`
  query pools($tokens: [String!], $id: ID) {
    as0: pools(where: { token0_in: $tokens }) {
      id
      feeTier
      token0 {
        id
        symbol
        name
      }
      token1 {
        id
        symbol
        name
      }
    }
    as1: pools(where: { token1_in: $tokens }) {
      id
      feeTier
      token0 {
        id
        symbol
        name
      }
      token1 {
        id
        symbol
        name
      }
    }
    asAddress: pools(where: { id: $id }) {
      id
      feeTier
      token0 {
        id
        symbol
        name
      }
      token1 {
        id
        symbol
        name
      }
    }
  }
`;async function fetchSearchResults(e,t,o){try{var n,r,a;let i=await e.request(B,{value:t?t.toUpperCase():"",id:t}),l=await e.request(O,{tokens:null===(n=i.asSymbol)||void 0===n?void 0:n.map(e=>e.id).slice(0,h.qX),id:t}),s=[...i.asAddress.map(e=>e.id),...i.asName.map(e=>e.id),...i.asSymbol.map(e=>e.id)].slice(0,h.qX),d=[...l.as0.map(e=>e.id),...l.as1.map(e=>e.id),...l.asAddress.map(e=>e.id)].slice(0,h.qX),u=await fetchedTokenDatas(e,s,o),c=await poolData_fetchPoolDatas(e,d,o),m=Object.values(null!==(r=null==u?void 0:u.data)&&void 0!==r?r:{}).filter(C.Dw).filter(e=>{let o=Object.keys(e).map(o=>{let n="0x"===t.slice(0,2);return("address"===o&&!!n||"symbol"===o&&!n||"name"===o&&!n)&&e[o].match(RegExp((0,C.hr)(t),"i"))});return o.some(e=>e)}),p=Object.values(null!==(a=null==c?void 0:c.data)&&void 0!==a?a:{}).filter(C.Dw).filter(e=>{let o=Object.keys(e).map(o=>{let n="0x"===t.slice(0,2);return"address"===o&&n?e[o].match(RegExp((0,C.hr)(t),"i")):("token0"===o||"token1"===o)&&!n&&(e[o].name.match(RegExp((0,C.hr)(t),"i"))||e[o].symbol.toLocaleLowerCase().match(RegExp((0,C.hr)(t.toLocaleLowerCase()),"i")))});return o.some(e=>e)});return{tokens:m,pools:p}}catch(e){return{tokens:[],pools:[]}}}a().extend(g()),a().extend(S());let N=x.Ps`
  query tokenDayDatas($startTime: Int!, $skip: Int!, $address: String) {
    tokenDayDatas(
      first: 1000
      skip: $skip
      where: { token: $address, date_gt: $startTime }
      orderBy: date
      orderDirection: asc
    ) {
      date
      volumeUSD
      totalValueLockedUSD
    }
  }
`;async function fetchTokenChartData(e,t){let o=[],n=a().utc().unix(),r=!1,i=0,l=!1;try{for(;!l;){let n=await t.request(N,{address:e,startTime:1619170975,skip:i});n.tokenDayDatas.length>0&&(i+=1e3,(n.tokenDayDatas.length<1e3||r)&&(l=!0),n&&(o=o.concat(n.tokenDayDatas)))}}catch{r=!0}if(o){var s,d;let e=o.reduce((e,t)=>{let o=parseInt((t.date/86400).toFixed(0));return e[o]={date:t.date,volumeUSD:parseFloat(t.volumeUSD),totalValueLockedUSD:parseFloat(t.totalValueLockedUSD)},e},{}),t=e[parseInt(Object.keys(e)[0])],r=null!==(s=null==t?void 0:t.date)&&void 0!==s?s:1619170975,a=null!==(d=null==t?void 0:t.totalValueLockedUSD)&&void 0!==d?d:0;for(;r<n-86400;){let t=r+86400,o=parseInt((t/86400).toFixed(0));Object.keys(e).includes(o.toString())?a=e[o].totalValueLockedUSD:e[o]={date:t,volumeUSD:0,totalValueLockedUSD:a},r=t}let i=Object.keys(e).map(t=>e[parseInt(t)]);return{data:i,error:!1}}return{data:void 0,error:r}}let _=x.Ps`
  query topPools($address: String!) {
    asToken0: pools(first: 200, orderBy: totalValueLockedUSD, orderDirection: desc, where: { token0: $address }) {
      id
    }
    asToken1: pools(first: 200, orderBy: totalValueLockedUSD, orderDirection: desc, where: { token1: $address }) {
      id
    }
  }
`;async function fetchPoolsForToken(e,t){try{let o=await t.request(_,{address:e}),n=o.asToken0.concat(o.asToken1).map(e=>e.id);return{error:!1,addresses:n}}catch{return{error:!0,addresses:void 0}}}var R=o(71472);a().extend(g()),a().extend(S());let V=x.Ps`
  query tokenHourDatas($startTime: Int!, $skip: Int!, $address: String!) {
    tokenHourDatas(
      first: 100
      skip: $skip
      where: { token: $address, periodStartUnix_gt: $startTime }
      orderBy: periodStartUnix
      orderDirection: asc
    ) {
      periodStartUnix
      high
      low
      open
      close
    }
  }
`;async function priceData_fetchTokenPriceData(e,t,o,n,r,i){try{let d=a().utc().unix();if(!o)return console.error("Error constructing price start timestamp"),{data:[],error:!1};let u=[],c=o;for(;c<=d;)u.push(c),c+=t;if(0===u.length)return{data:[],error:!1};let m=(await (0,R.z)(u,"asc",500,r)).filter(e=>e.number>=i);if(!m||0===m.length)return console.error("Error fetching blocks"),{data:[],error:!1};let p=[],f=0,k=!1;for(;!k;){var l,s;let t=await n.request(V,{address:e,startTime:o,skip:f});(null==t?void 0:null===(l=t.tokenHourDatas)||void 0===l?void 0:l.length)>0&&(f+=100,(null==t?void 0:null===(s=t.tokenHourDatas)||void 0===s?void 0:s.length)<100&&(k=!0),t&&(p=p.concat(t.tokenHourDatas)))}let h=p.map(e=>({time:(null==e?void 0:e.periodStartUnix)||(null==e?void 0:e.date),open:parseFloat(e.open),close:parseFloat(e.close),high:parseFloat(e.high),low:parseFloat(e.low)}));return{data:h,error:!1}}catch(e){return console.error(e),{data:[],error:!0}}}let Z=x.Ps`
  query topPools {
    tokens(first: 50, orderBy: totalValueLockedUSD, orderDirection: desc) {
      id
    }
  }
`;async function fetchTopTokenAddresses(e){try{let t=await e.request(Z);return{error:!1,addresses:t?t.tokens.map(e=>e.id):void 0}}catch(e){return{error:!0,addresses:void 0}}}let M=x.Ps`
  query transactions($address: String!) {
    mintsAs0: mints(first: 500, orderBy: timestamp, orderDirection: desc, where: { token0: $address }) {
      timestamp
      transaction {
        id
      }
      pool {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      owner
      sender
      origin
      amount0
      amount1
      amountUSD
    }
    mintsAs1: mints(first: 500, orderBy: timestamp, orderDirection: desc, where: { token0: $address }) {
      timestamp
      transaction {
        id
      }
      pool {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      owner
      sender
      origin
      amount0
      amount1
      amountUSD
    }
    swapsAs0: swaps(first: 500, orderBy: timestamp, orderDirection: desc, where: { token0: $address }) {
      timestamp
      transaction {
        id
      }
      pool {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      origin
      amount0
      amount1
      amountUSD
    }
    swapsAs1: swaps(first: 500, orderBy: timestamp, orderDirection: desc, where: { token1: $address }) {
      timestamp
      transaction {
        id
      }
      pool {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      origin
      amount0
      amount1
      amountUSD
    }
    burnsAs0: burns(first: 500, orderBy: timestamp, orderDirection: desc, where: { token0: $address }) {
      timestamp
      transaction {
        id
      }
      pool {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      owner
      origin
      amount0
      amount1
      amountUSD
    }
    burnsAs1: burns(first: 500, orderBy: timestamp, orderDirection: desc, where: { token1: $address }) {
      timestamp
      transaction {
        id
      }
      pool {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      owner
      origin
      amount0
      amount1
      amountUSD
    }
  }
`;async function fetchTokenTransactions(e,t){try{let o=await t.request(M,{address:e}),n=o.mintsAs0.map(e=>({type:L.i.MINT,hash:e.transaction.id,timestamp:e.timestamp,sender:e.origin,token0Symbol:e.pool.token0.symbol,token1Symbol:e.pool.token1.symbol,token0Address:e.pool.token0.id,token1Address:e.pool.token1.id,amountUSD:parseFloat(e.amountUSD),amountToken0:parseFloat(e.amount0),amountToken1:parseFloat(e.amount1)})),r=o.mintsAs1.map(e=>({type:L.i.MINT,hash:e.transaction.id,timestamp:e.timestamp,sender:e.origin,token0Symbol:e.pool.token0.symbol,token1Symbol:e.pool.token1.symbol,token0Address:e.pool.token0.id,token1Address:e.pool.token1.id,amountUSD:parseFloat(e.amountUSD),amountToken0:parseFloat(e.amount0),amountToken1:parseFloat(e.amount1)})),a=o.burnsAs0.map(e=>({type:L.i.BURN,hash:e.transaction.id,timestamp:e.timestamp,sender:e.origin,token0Symbol:e.pool.token0.symbol,token1Symbol:e.pool.token1.symbol,token0Address:e.pool.token0.id,token1Address:e.pool.token1.id,amountUSD:parseFloat(e.amountUSD),amountToken0:parseFloat(e.amount0),amountToken1:parseFloat(e.amount1)})),i=o.burnsAs1.map(e=>({type:L.i.BURN,hash:e.transaction.id,timestamp:e.timestamp,sender:e.origin,token0Symbol:e.pool.token0.symbol,token1Symbol:e.pool.token1.symbol,token0Address:e.pool.token0.id,token1Address:e.pool.token1.id,amountUSD:parseFloat(e.amountUSD),amountToken0:parseFloat(e.amount0),amountToken1:parseFloat(e.amount1)})),l=o.swapsAs0.map(e=>({type:L.i.SWAP,hash:e.transaction.id,timestamp:e.timestamp,sender:e.origin,token0Symbol:e.pool.token0.symbol,token1Symbol:e.pool.token1.symbol,token0Address:e.pool.token0.id,token1Address:e.pool.token1.id,amountUSD:parseFloat(e.amountUSD),amountToken0:parseFloat(e.amount0),amountToken1:parseFloat(e.amount1)})),s=o.swapsAs1.map(e=>({type:L.i.SWAP,hash:e.transaction.id,timestamp:e.timestamp,sender:e.origin,token0Symbol:e.pool.token0.symbol,token1Symbol:e.pool.token1.symbol,token0Address:e.pool.token0.id,token1Address:e.pool.token1.id,amountUSD:parseFloat(e.amountUSD),amountToken0:parseFloat(e.amount0),amountToken1:parseFloat(e.amount1)}));return{data:[...n,...r,...a,...i,...l,...s],error:!1,loading:!1}}catch{return{data:void 0,error:!0,loading:!1}}}let K={retry:3,retryDelay:3e3,keepPreviousData:!0,refetchOnMount:!1,refetchOnReconnect:!1,refetchOnWindowFocus:!1},useProtocolChartData=()=>{var e;let t=(0,l.RE)(),o=s.Pi[t],{data:n}=(0,k.a)({queryKey:[`v3/info/protocol/ProtocolChartData/${o}`,o],queryFn:async()=>fetchChartData(p.GI[o]),enabled:!!t,...K});return null!==(e=null==n?void 0:n.data)&&void 0!==e?e:[]},useProtocolData=()=>{var e;let t=(0,l.RE)(),o=s.Pi[t],[n,r]=getDeltaTimestamps(),{blocks:a}=(0,f.T)([n,r]),{data:i}=(0,k.a)({queryKey:[`v3/info/protocol/ProtocolData/${o}`,o],queryFn:()=>fetchProtocolData(p.GI[o],null!=a?a:[]),enabled:!!(a&&a.length>0)&&!!t,...K});return null!==(e=null==i?void 0:i.data)&&void 0!==e?e:void 0},useProtocolTransactionData=()=>{var e;let t=(0,l.RE)(),o=s.Pi[t],{data:n}=(0,k.a)({queryKey:[`v3/info/protocol/ProtocolTransactionData/${o}`,o],queryFn:async()=>fetchTopTransactions(p.GI[o]),enabled:!!t,...K});return null!==(e=null==n?void 0:n.filter(e=>e.amountUSD>0))&&void 0!==e?e:[]};async function fetchTopTokens(e,t){try{var o;let n=await fetchTopTokenAddresses(e),r=await fetchedTokenDatas(e,null!==(o=n.addresses)&&void 0!==o?o:[],t);return r}catch(e){return console.error(e),{data:{},error:!0}}}let useTopTokensData=()=>{let e=(0,l.RE)(),t=s.Pi[e],[o,n,r]=getDeltaTimestamps(),{blocks:a}=(0,f.T)([o,n,r]),{data:i}=(0,k.a)({queryKey:[`v3/info/token/TopTokensData/${t}`,t],queryFn:async()=>{var e;return fetchTopTokens(p.GI[t],null!==(e=null==a?void 0:a.filter(e=>e.number>=h.Mp[t]))&&void 0!==e?e:[])},enabled:!!e&&!!(a&&(null==a?void 0:a.length)>0),...K});return null==i?void 0:i.data},useTokensData=(e,t)=>{let o=(0,l.RE)(),n=null!=t?t:s.Pi[o],[r,a,i]=getDeltaTimestamps(),{blocks:d}=(0,f.T)([r,a,i],void 0,void 0,"PLS"),{data:u}=(0,k.a)({queryKey:[`v3/info/token/tokensData/${t}/${e.join()}`,n],queryFn:async()=>{var t;return fetchedTokenDatas(p.mN[n],e,null!==(t=null==d?void 0:d.filter(e=>e.number>=h.Mp[n]))&&void 0!==t?t:[])},enabled:!!(n&&d&&e&&(null==e?void 0:e.length)>0&&(null==d?void 0:d.length)>0),...K});return(null==u?void 0:u.data)?Object.values(null==u?void 0:u.data):void 0},useTokenData=e=>{var t;let o=(0,l.RE)(),n=s.Pi[o],[r,a,i]=getDeltaTimestamps(),{blocks:d}=(0,f.T)([r,a,i]),{data:u}=(0,k.a)({queryKey:[`v3/info/token/tokenData/${n}/${e}`,n],queryFn:()=>{var t;return fetchedTokenDatas(p.GI[n],[e],null!==(t=null==d?void 0:d.filter(e=>e.number>=h.Mp[n]))&&void 0!==t?t:[])},enabled:!!(o&&e&&"undefined"!==e),...K});return null==u?void 0:null===(t=u.data)||void 0===t?void 0:t[e]},usePoolsForToken=e=>{let t=(0,l.RE)(),o=s.Pi[t],{data:n}=(0,k.a)({queryKey:[`v3/info/token/poolsForTOken/${o}/${e}`,o],queryFn:()=>fetchPoolsForToken(e,p.GI[o]),enabled:!!(t&&e&&"undefined"!==e),...K});return null==n?void 0:n.addresses},useTokenChartData=e=>{let t=(0,l.RE)(),o=s.Pi[t],{data:n}=(0,k.a)({queryKey:[`v3/info/token/tokenChartData/${o}/${e}`,o],queryFn:()=>fetchTokenChartData(e,p.GI[o]),enabled:!!(t&&e&&"undefined"!==e),...K});return null==n?void 0:n.data},useTokenPriceData=(e,t,o)=>{let n=(0,l.RE)(),r=s.Pi[n],i=a()(),d=i.subtract(1,null!=o?o:"day").startOf("hour").unix(),{data:u}=(0,k.a)({queryKey:[`v3/info/token/tokenPriceData/${r}/${e}/${t}/${o}`,r],queryFn:()=>priceData_fetchTokenPriceData(e,t,d,p.GI[r],s.VQ[r],h.Mp[r]),enabled:!!(n&&e&&"undefined"!==e),...K});return null==u?void 0:u.data},useTokenTransactions=e=>{let t=(0,l.RE)(),o=s.Pi[t],{data:n}=(0,k.a)({queryKey:[`v3/info/token/tokenTransaction/${o}/${e}`,o],queryFn:()=>fetchTokenTransactions(e,p.GI[o]),enabled:!!(t&&e&&"undefined"!==e),...K});return null==n?void 0:n.data};async function fetchTopPools(e,t,o){try{var n;let r=await topPools_fetchTopPoolAddresses(e,t),a=await poolData_fetchPoolDatas(e,null!==(n=r.addresses)&&void 0!==n?n:[],o);return a}catch(e){return console.error(e),{data:{},error:!0}}}let useTopPoolsData=()=>{let e=(0,l.RE)(),t=s.Pi[e],[o,n,r]=getDeltaTimestamps(),{blocks:a}=(0,f.T)([o,n,r]),{data:i}=(0,k.a)({queryKey:[`v3/info/pool/TopPoolsData/${t}`,t],queryFn:async()=>{var e;return fetchTopPools(p.GI[t],t,null!==(e=null==a?void 0:a.filter(e=>e.number>=h.Mp[t]))&&void 0!==e?e:[])},enabled:!!(e&&t&&a&&a.length>0),...K});return null==i?void 0:i.data},usePoolsData=e=>{let t=(0,l.RE)(),o=s.Pi[t],[n,r,a]=getDeltaTimestamps(),{blocks:i}=(0,f.T)([n,r,a]),{data:d}=(0,k.a)({queryKey:[`v3/info/pool/poolsData/${o}/${e.join()}`,o],queryFn:()=>{var t;return poolData_fetchPoolDatas(p.GI[o],e,null!==(t=null==i?void 0:i.filter(e=>e.number>=h.Mp[o]))&&void 0!==t?t:[])},enabled:!!(t&&o&&i&&i.length>0),...K});return(null==d?void 0:d.data)?Object.values(d.data):void 0},usePoolData=e=>{var t,o;let n=(0,l.RE)(),r=s.Pi[n],[a,i,d]=getDeltaTimestamps(),{blocks:u}=(0,f.T)([a,i,d]),{data:c}=(0,k.a)({queryKey:[`v3/info/pool/poolData/${r}/${e}`,r],queryFn:()=>{var t;return poolData_fetchPoolDatas(p.GI[r],[e],null!==(t=null==u?void 0:u.filter(e=>e.number>=h.Mp[r]))&&void 0!==t?t:[])},enabled:!!(n&&e&&"undefined"!==e),...K});return null!==(o=null==c?void 0:null===(t=c.data)||void 0===t?void 0:t[e])&&void 0!==o?o:void 0},usePoolTransactions=e=>{var t;let o=(0,l.RE)(),n=s.Pi[o],{data:r}=(0,k.a)({queryKey:[`v3/info/pool/poolTransaction/${n}/${e}`,n],queryFn:()=>fetchPoolTransactions(e,p.GI[n]),enabled:!!(o&&e&&"undefined"!==e),...K});return null!==(t=null==r?void 0:r.data)&&void 0!==t?t:void 0},usePoolChartData=e=>{let t=(0,l.RE)(),o=s.Pi[t],{data:n}=(0,k.a)({queryKey:[`v3/info/pool/poolChartData/${o}/${e}`,o],queryFn:()=>chartData_fetchPoolChartData(e,p.GI[o]),enabled:!!(t&&e&&"undefined"!==e),...K});return null==n?void 0:n.data},usePoolTickData=e=>{var t;let o=(0,l.RE)(),n=s.Pi[o],{data:r}=(0,k.a)({queryKey:[`v3/info/pool/poolTickData/${n}/${e}`,n],queryFn:()=>fetchTicksSurroundingPrice(e,p.GI[n],n),enabled:!!(o&&e&&"undefined"!==e),...K});return null!==(t=null==r?void 0:r.data)&&void 0!==t?t:void 0},useSearchData=e=>{let t=(0,l.RE)(),o=s.Pi[t],[r,a,d]=getDeltaTimestamps(),{blocks:u}=(0,f.T)([r,a,d]),{data:c,status:m,error:v}=(0,k.a)({queryKey:[`v3/info/pool/searchData/${o}/${e}`,o],queryFn:()=>{var t;return fetchSearchResults(p.GI[o],e,null!==(t=null==u?void 0:u.filter(e=>e.number>=h.Mp[o]))&&void 0!==t?t:[])},enabled:!!(t&&e&&u&&(null==u?void 0:u.length)>0),...K}),y=(0,i.useMemo)(()=>c?{...c,loading:m!==n.iF.Fetched,error:v}:{tokens:[],pools:[],loading:!0,error:v},[c,m,v]);return y}},93556:function(e,t,o){var n,r,a,i;o.d(t,{H:function(){return n},i:function(){return r}}),(a=n||(n={}))[a.daily=0]="daily",a[a.weekly=1]="weekly",a[a.monthly=2]="monthly",(i=r||(r={}))[i.SWAP=0]="SWAP",i[i.MINT=1]="MINT",i[i.BURN=2]="BURN"},49109:function(e,t,o){o.d(t,{P:function(){return get2DayChange},Y:function(){return getPercentChange}});let get2DayChange=(e,t,o)=>{let n=parseFloat(e)-parseFloat(t),r=parseFloat(t)-parseFloat(o),a=(n-r)/r*100;return Number.isNaN(a)||!Number.isFinite(a)?[n,0]:[n,a]},getPercentChange=(e,t)=>{if(e&&t){let o=(parseFloat(e)-parseFloat(t))/parseFloat(t)*100;if(Number.isFinite(o))return o}return 0}},89397:function(e,t,o){o.d(t,{Dw:function(){return notEmpty},T9:function(){return currentTimestamp},Uo:function(){return feeTierPercent},Xn:function(){return shortenAddress},hr:function(){return escapeRegExp}});var n=o(45775);function notEmpty(e){return null!=e}function escapeRegExp(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function shortenAddress(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,o=function(e){try{return(0,n.K)(e)}catch{return!1}}(e);if(!o)throw Error(`Invalid 'address' parameter '${e}'.`);return`${o.substring(0,t+2)}...${o.substring(42-t)}`}function feeTierPercent(e){return`${e/1e4}%`}let currentTimestamp=()=>new Date().getTime()},54042:function(e,t,o){o.d(t,{Y:function(){return formatDollarAmount},d:function(){return formatAmount}});let formatDollarAmount=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,o=!(arguments.length>2)||void 0===arguments[2]||arguments[2];return void 0!==e&&e<=0?"$0.00":e?e<.001&&t<=3?"<$0.001":Intl.NumberFormat("en-US",{notation:o?"compact":"standard",minimumFractionDigits:e>1e3?2:t,maximumFractionDigits:e>1e3?2:t}).format(e):"-"},formatAmount=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return void 0!==e&&e<=0?"0":e?e<.001?"<0.001":Intl.NumberFormat("en-US",{notation:"compact",minimumFractionDigits:e>1e3?2:t,maximumFractionDigits:e>1e3?2:t}).format(e):"-"}}}]);
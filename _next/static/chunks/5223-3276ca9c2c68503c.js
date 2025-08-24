"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5223],{26256:function(e,t,n){n.d(t,{j:function(){return AppBody},t:function(){return App_AppHeader}});var r=n(85893),i=n(19521),o=n(31258),s=n(78108),l=n(41664),c=n.n(l),a=n(69674);let d=(0,i.ZP)(o.kCb).withConfig({componentId:"sc-d0579d0b-0"})`
  align-items: center;
  justify-content: space-between;
  width: 100%;
  // border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
`;var App_AppHeader=e=>{let{title:t,backTo:n,noConfig:i=!1,extra:l}=e;return(0,r.jsx)(d,{children:(0,r.jsxs)(o.kCb,{alignItems:"center",width:"100%",style:{gap:"16px"},height:"48px",children:[n&&("string"==typeof n?(0,r.jsx)(c(),{passHref:!0,href:n,style:{height:"32px"},children:(0,r.jsx)(o.Rpv,{width:"32px"})}):(0,r.jsx)(o.hU,{scale:"sm",variant:"text",onClick:n,children:(0,r.jsx)(o.Rpv,{width:"32px"})})),(0,r.jsx)(o.kCb,{flexDirection:"column",width:"100%",children:(0,r.jsxs)(o.kCb,{alignItems:"center",justifyContent:"space-between",children:[(0,r.jsx)(o.kCb,{children:(0,r.jsx)(o.xvT,{children:t})}),(0,r.jsxs)(o.kCb,{alignItems:"center",children:[!i&&(0,r.jsx)(o.BwQ,{children:(0,r.jsx)(s.Z,{mode:a.a.SWAP_LIQUIDITY,mr:"0"})}),l&&(0,r.jsx)(o.zxk,{as:o.aBH,to:l.link,variant:"secondary",height:"36px",px:"10px",children:l.name})]})]})})]})})},u=n(98960);let x=(0,i.ZP)(u.Zb).withConfig({componentId:"sc-e737f669-0"})`
  background: ${e=>{let{theme:t}=e;return t.colors.backgroundAlt}};
  border-radius: 8px;
  border: 3px solid ${e=>{let{theme:t}=e;return t.colors.textDisabled}};
  max-width: 464px;
  width: 100%;
  z-index: 1;
`;function AppBody(e){let{children:t}=e;return(0,r.jsx)(x,{padding:"12px",children:t})}},25786:function(e,t,n){n.d(t,{Tz:function(){return s},lg:function(){return o}});var r=n(19521);let i=r.ZP.div.withConfig({componentId:"sc-91e5cc43-0"})`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`,o=(0,r.ZP)(i).withConfig({componentId:"sc-91e5cc43-1"})`
  width: 100%;
  align-items: center;
`,s=r.ZP.div.withConfig({componentId:"sc-91e5cc43-2"})`
  display: grid;
  grid-auto-rows: auto;
  grid-row-gap: ${e=>{let{gap:t}=e;return"sm"===t&&"8px"||"md"===t&&"12px"||"lg"===t&&"24px"||t}};
  justify-items: ${e=>{let{justify:t}=e;return t}};
`;t.ZP=i},38489:function(e,t,n){n.d(t,{BA:function(){return l},DA:function(){return c},m0:function(){return s}});var r=n(19521),i=n(12887);let o=(0,r.ZP)(i.xu).withConfig({componentId:"sc-e2bcadfd-0"})`
  width: ${e=>{let{width:t}=e;return null!=t?t:"100%"}};
  display: flex;
  align-items: ${e=>{let{align:t}=e;return null!=t?t:"center"}};
  justify-content: ${e=>{let{justify:t}=e;return null!=t?t:"flex-start"}};
  padding: ${e=>{let{padding:t}=e;return null!=t?t:"0"}};
  border: ${e=>{let{border:t}=e;return t}};
  border-radius: ${e=>{let{borderRadius:t}=e;return t}};
`,s=(0,r.ZP)(o).withConfig({componentId:"sc-e2bcadfd-1"})`
  justify-content: space-between;
`;r.ZP.div.withConfig({componentId:"sc-e2bcadfd-2"})`
  display: flex;
  align-items: flex-end;
`;let l=(0,r.ZP)(o).withConfig({componentId:"sc-e2bcadfd-3"})`
  flex-wrap: wrap;
  margin: ${e=>{let{gap:t}=e;return t&&`-${t}`}};
  justify-content: ${e=>{let{justify:t}=e;return t}};

  & > * {
    margin: ${e=>{let{gap:t}=e;return t}} !important;
  }
`,c=(0,r.ZP)(o).withConfig({componentId:"sc-e2bcadfd-4"})`
  width: fit-content;
  margin: ${e=>{let{gap:t}=e;return t&&`-${t}`}};

  & > * {
    margin: ${e=>{let{gap:t}=e;return t}} !important;
  }
`;t.ZP=o},74906:function(e,t,n){n.d(t,{Z:function(){return CircleLoader}});var r=n(85893),i=n(19521);let o=i.F4`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,s=i.ZP.svg.withConfig({componentId:"sc-fa227f0-0"})`
  animation: 2s ${o} linear infinite;
  height: ${e=>{let{size:t}=e;return t}};
  width: ${e=>{let{size:t}=e;return t}};
  path {
    stroke: ${e=>{let{stroke:t,theme:n}=e;return null!=t?t:n.colors.primary}};
  }
`;function CircleLoader(e){let{size:t="16px",stroke:n,...i}=e;return(0,r.jsx)(s,{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",size:t,stroke:n,...i,children:(0,r.jsx)("path",{d:"M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})})}},60908:function(e,t,n){var r=n(19521);let i=r.ZP.span.withConfig({componentId:"sc-818b03ea-0"})`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`;t.Z=i},91461:function(e,t,n){n.d(t,{Z:function(){return CurrencyLogo}});var r=n(85893),i=n(28865),o=n(67294),s=n(31219),l=n(19521),c=n(57081),a=n(99939);let d=(0,l.ZP)(i.S).withConfig({componentId:"sc-dd34f29c-0"})`
  width: ${e=>{let{size:t}=e;return t}};
  height: ${e=>{let{size:t}=e;return t}};
  border-radius: 50%;
`;function CurrencyLogo(e){var t,n;let{currency:i,size:l="24px",style:u}=e,x=(0,c.Z)(i instanceof s.DT?i.logoURI:void 0),h=(0,o.useMemo)(()=>{if(null==i?void 0:i.isNative)return[];if(null==i?void 0:i.isToken){let e=(0,a.Z)(i);return i instanceof s.DT?e?[...x,e]:[...x]:e?[e]:[]}return[]},[i,x]);return(null==i?void 0:i.isNative)?(0,r.jsx)(d,{size:l,srcs:[`/images/chains/${i.chainId}.png`],width:l,style:u}):i&&"0xa1077a294dde1b09bb078844df40758a5d0f9a27"===i.wrapped.address&&369===i.chainId?(0,r.jsx)(d,{size:l,srcs:["/images/369/tokens/0xa1077a294dde1b09bb078844df40758a5d0f9a27.png"],alt:`${null!==(t=null==i?void 0:i.symbol)&&void 0!==t?t:"token"} logo`,style:u}):(0,r.jsx)(d,{size:l,srcs:h,alt:`${null!==(n=null==i?void 0:i.symbol)&&void 0!==n?n:"token"} logo`,style:u})}},104:function(e,t,n){n.d(t,{Z:function(){return DoubleCurrencyLogo}});var r=n(85893),i=n(19521),o=n(91461);let s=i.ZP.div.withConfig({componentId:"sc-409329ce-0"})`
  display: flex;
  flex-direction: row;
  margin-right: ${e=>{let{margin:t}=e;return t&&"4px"}};
`;function DoubleCurrencyLogo(e){let{currency0:t,currency1:n,size:i=20,margin:l=!1}=e;return(0,r.jsxs)(s,{margin:l,children:[t&&(0,r.jsx)(o.Z,{currency:t,size:`${i.toString()}px`,style:{marginRight:"4px"}}),n&&(0,r.jsx)(o.Z,{currency:n,size:`${i.toString()}px`})]})}},90579:function(e,t,n){n.d(t,{X:function(){return r.Z},g:function(){return i.Z}});var r=n(91461),i=n(104)},74723:function(e,t,n){n.d(t,{Z:function(){return CurrencySearchModal}});var r=n(85893),i=n(67294),o=n(19521),s=n(72157),l=n(7177),c=n(75948),a=n(36945),d=n(64029),u=n(81064),x=n(40231),h=n(94203),p=n(31258),m=n(35275),g=n(57081),f=n(41219);let v=(0,o.ZP)(f.Z).withConfig({componentId:"sc-2a1db3a0-0"})`
  width: ${e=>{let{size:t}=e;return t}};
  height: ${e=>{let{size:t}=e;return t}};
`;function ListLogo(e){let{logoURI:t,style:n,size:i="24px",alt:o}=e,s=(0,g.Z)(t);return(0,r.jsx)(v,{alt:o,size:i,srcs:s,style:n})}let j=o.ZP.div.withConfig({componentId:"sc-ae924161-0"})`
  position: relative;
  width: 100%;
`,k=o.ZP.div.withConfig({componentId:"sc-ae924161-1"})`
  height: 3px;
  width: 3px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.text}};
  border-radius: 50%;
`,w=(0,o.ZP)(p.xuv).withConfig({componentId:"sc-ae924161-2"})`
  width: ${e=>{let{width:t}=e;return null!=t?t:"100%"}};
  padding: ${e=>{let{padding:t}=e;return null!=t?t:"1.25rem"}};
  border: ${e=>{let{border:t}=e;return t}};
  border-radius: ${e=>{let{borderRadius:t}=e;return null!=t?t:"16px"}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
`;function ImportList(e){let{listURL:t,listLogoURI:n,listName:o,listTokenLength:s,onAddList:l,addError:c}=e,{theme:a}=(0,h.ZP)(),[d,u]=(0,i.useState)(!1);return(0,r.jsx)(j,{children:(0,r.jsx)(m.Tz,{gap:"md",children:(0,r.jsxs)(m.Tz,{gap:"md",children:[(0,r.jsx)(w,{width:"370px",padding:"12px 20px",children:(0,r.jsx)(p.m0X,{children:(0,r.jsxs)(p.DAo,{flexWrap:"nowrap",children:[n&&(0,r.jsx)(ListLogo,{logoURI:n,size:"40px"}),(0,r.jsxs)(m.Tz,{gap:"sm",style:{marginLeft:"20px"},children:[(0,r.jsxs)(p.DAo,{children:[(0,r.jsx)(p.xvT,{bold:!0,mr:"6px",children:o}),(0,r.jsx)(k,{}),(0,r.jsxs)(p.xvT,{small:!0,color:"textSubtle",ml:"6px",children:[s," tokens"]})]}),(0,r.jsx)(p.rUS,{style:{width:"100%",overflowX:"scroll"},small:!0,external:!0,ellipsis:!0,href:`https://tokenlists.org/token-list?url=${t}`,children:t})]})]})})}),(0,r.jsx)(p.v0C,{variant:"danger",children:(0,r.jsxs)(p.kCb,{flexDirection:"column",children:[(0,r.jsx)(p.xvT,{fontSize:"20px",textAlign:"center",color:a.colors.failure,mb:"16px",children:"Import at your own risk"}),(0,r.jsx)(p.xvT,{color:a.colors.failure,mb:"8px",children:"By adding this list you are implicitly trusting that the data is correct. Anyone can create a list, including creating fake versions of existing lists and lists that claim to represent projects that do not have one."}),(0,r.jsx)(p.xvT,{bold:!0,color:a.colors.failure,mb:"16px",children:"If you purchase a token from this list, you may not be able to sell it back."}),(0,r.jsxs)(p.kCb,{alignItems:"center",children:[(0,r.jsx)(p.XZJ,{name:"confirmed",type:"checkbox",checked:d,onChange:()=>u(!d),scale:"sm"}),(0,r.jsx)(p.xvT,{ml:"10px",style:{userSelect:"none"},children:"I understand"})]})]})}),(0,r.jsx)(p.zxk,{disabled:!d,onClick:l,children:"Import"}),c?(0,r.jsx)(p.xvT,{color:"failure",style:{textOverflow:"ellipsis",overflow:"hidden"},children:c}):null]})})})}var b=n(19922),y=n(29589),C=n(89704),I=n(31219),T=n(61129),$=n(27086),S=n(98287),Z=n(25786),L=n(38489),P=n(51439),z=n(90579);let R=o.ZP.div.withConfig({componentId:"sc-b3093ca3-0"})`
  display: inline-block;
  vertical-align: top;
  margin-right: 5px;
  margin-bottom: 5px;
`,M=o.ZP.div.withConfig({componentId:"sc-b3093ca3-1"})`
  border: 1px solid ${e=>{let{theme:t,disable:n}=e;return n?"transparent":t.colors.inputSecondary}};
  border-radius: 18px;
  display: flex;
  padding: 5px 10px 5px 6px;
  align-items: center;
  :hover {
    cursor: ${e=>{let{disable:t}=e;return!t&&"pointer"}};
    background-color: ${e=>{let{theme:t,disable:n}=e;return!n&&t.colors.input}};
  }
  background-color: ${e=>{let{theme:t,disable:n}=e;return n&&t.colors.input}};
`,D=o.ZP.div.withConfig({componentId:"sc-b3093ca3-2"})`
  // white-space: nowrap;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;function CommonBases(e){let{chainId:t,onSelect:n,selectedCurrency:i}=e,o=(0,C.Z)(),s=t?[P.kx[t][0],P.kx[t][1],P.kx[t][2],P.kx[t][3],P.kx[t][4],P.kx[t][5],P.kx[t][6]]:[],l=null==i?void 0:i.equals(o);return(0,r.jsx)(Z.Tz,{gap:"md",children:(0,r.jsxs)(D,{children:[(0,r.jsx)(R,{children:(0,r.jsxs)(M,{onClick:()=>!l&&n(o),disable:l,children:[(0,r.jsx)(z.X,{currency:o,style:{marginRight:8,borderRadius:"50%"}}),(0,r.jsx)(p.xvT,{children:o.symbol})]})},"buttonBase#native"),(t&&s||[]).map(e=>{let t=null==i?void 0:i.equals(e);return(0,r.jsx)(R,{children:(0,r.jsxs)(M,{onClick:()=>!t&&n(e),disable:t,children:[(0,r.jsx)(z.X,{currency:e,style:{marginRight:8,borderRadius:"50%"}}),(0,r.jsx)(p.xvT,{children:e.symbol})]})},`buttonBase#${e.address}`)})]})})}var H=n(1314),A=n(91592),E=n(92321),U=n(20873),B=n(74906),_=n(91461);let N=o.ZP.div.withConfig({componentId:"sc-b9f240c8-0"})`
  padding: 4px 20px;
  height: 56px;
  display: grid;
  grid-template-columns: auto minmax(auto, 1fr) auto;
  grid-gap: 10px;
  align-items: center;

  opacity: ${e=>{let{dim:t}=e;return t?"0.4":"1"}};

  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    grid-gap: 16px;
  }
`,W=(0,o.ZP)(p.nSX).withConfig({componentId:"sc-b9f240c8-1"})`
  height: 16px;
  width: 16px;
  margin-right: 6px;
  stroke: ${e=>{let{theme:t}=e;return t.colors.success}};
`,X=(0,o.ZP)(p.kCb).withConfig({componentId:"sc-b9f240c8-2"})`
  white-space: nowrap;
  overflow: hidden;
  align-items: center;
  text-overflow: ellipsis;
  max-width: 210px;
  gap: 8px;
`;function ImportRow(e){var t,n;let{token:i,style:o,dim:s,onCurrencySelect:l,showImportView:d,setImportToken:u}=e,{isMobile:x}=(0,a.SL)(),h=(0,c.qB)(),m=(null==i?void 0:i.chainId)&&(null==h?void 0:null===(n=h[i.chainId])||void 0===n?void 0:null===(t=n[i.address])||void 0===t?void 0:t.list),g=(0,S.EH)(i),f=(0,S.ZN)(i);return(0,r.jsxs)(N,{style:o,variant:"text",as:f&&l?p.zxk:"a",onClick:()=>{f&&(null==l||l(i))},children:[(0,r.jsx)(_.Z,{currency:i,size:x?"20px":"24px",style:{opacity:s?"0.6":"1"}}),(0,r.jsxs)(Z.Tz,{gap:"4px",style:{opacity:s?"0.6":"1"},children:[(0,r.jsx)(L.BA,{children:(0,r.jsxs)(X,{title:i.name,children:[(0,r.jsx)(p.xvT,{ellipsis:!0,color:"textDisabled",fontSize:"14px",children:i.symbol}),(0,r.jsx)(p.xvT,{ellipsis:!0,color:"textDisabled",fontSize:"12px",children:i.name})]})}),m&&m.logoURI&&(0,r.jsxs)(L.DA,{children:[(0,r.jsxs)(p.xvT,{fontSize:x?"10px":"14px",mr:"4px",color:"textSubtle",children:["via ",m.name]}),(0,r.jsx)(ListLogo,{logoURI:m.logoURI,size:"12px"})]})]}),f||g?(0,r.jsxs)(L.DA,{style:{minWidth:"fit-content"},children:[(0,r.jsx)(W,{}),(0,r.jsx)(p.xvT,{color:"success",children:"Active"})]}):(0,r.jsx)(p.zxk,{scale:x?"sm":"md",width:"fit-content",onClick:()=>{u&&u(i),d()},children:"Import"})]})}function currencyKey(e){return(null==e?void 0:e.isToken)?e.address:(null==e?void 0:e.isNative)?e.symbol:""}let O=(0,o.ZP)(p.xvT).withConfig({componentId:"sc-3dd0a45e-0"})`
  white-space: nowrap;
  overflow: hidden;
  max-width: 5rem;
  text-overflow: ellipsis;
`,F=o.ZP.div.withConfig({componentId:"sc-3dd0a45e-1"})`
  padding: 4px 20px;
  height: 56px;
  display: grid;
  grid-gap: 16px;
  align-items: center;
`,V=(0,o.ZP)(p.xuv).withConfig({componentId:"sc-3dd0a45e-2"})`
  width: ${e=>{let{width:t}=e;return null!=t?t:"100%"}};
  padding: ${e=>{let{padding:t}=e;return null!=t?t:"1.25rem"}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  border-radius: ${e=>{let{borderRadius:t}=e;return null!=t?t:"16px"}};
`;function Balance(e){let{balance:t}=e;return(0,r.jsx)(O,{title:t.toExact(),children:t.toSignificant(4)})}let K=(0,o.ZP)(L.m0).withConfig({componentId:"sc-3dd0a45e-3"})`
  padding: 4px 20px;
  height: 56px;
  display: grid;
  grid-template-columns: auto minmax(auto, 1fr) minmax(0, 72px);
  grid-gap: 8px;
  cursor: ${e=>{let{disabled:t}=e;return!t&&"pointer"}};
  pointer-events: ${e=>{let{disabled:t}=e;return t&&"none"}};
  :hover {
    background-color: ${e=>{let{theme:t,disabled:n}=e;return!n&&t.colors.background}};
  }
  opacity: ${e=>{let{disabled:t,selected:n}=e;return t||n?.5:1}};
`;function CurrencyRow(e){let{currency:t,onSelect:n,isSelected:i,otherSelected:o,style:s}=e,{address:l}=(0,E.m)(),a=currencyKey(t),d=(0,c.z0)(),u=(0,T.wK)(d,t),x=(0,S.EH)(t),h=(0,U._h)(null!=l?l:void 0,t);return(0,r.jsxs)(K,{style:s,className:`token-item-${a}`,onClick:()=>i?null:n(),disabled:i,selected:o,children:[(0,r.jsx)(z.X,{currency:t,size:"36px"}),(0,r.jsxs)(Z.ZP,{children:[(0,r.jsx)(p.xvT,{children:t.symbol}),(0,r.jsxs)(p.xvT,{color:"textDisabled",fontSize:"12px",ellipsis:!0,maxWidth:"200px",children:[!u&&x&&"Added by user •"," ",t.name]})]}),(0,r.jsx)(L.DA,{style:{justifySelf:"flex-end"},children:h?(0,r.jsx)(Balance,{balance:h}):l?(0,r.jsx)(B.Z,{}):null})]})}function CurrencyList(e){let{height:t,currencies:n,inactiveCurrencies:o,selectedCurrency:s,onCurrencySelect:l,otherCurrency:c,fixedListRef:a,showNative:d,showImportView:u,setImportToken:x,breakIndex:h}=e,m=(0,C.Z)(),g=(0,i.useMemo)(()=>{let e=d?[m,...n,...o]:[...n,...o];return void 0!==h&&(e=[...e.slice(0,h),void 0,...e.slice(h,e.length)]),e},[h,n,o,d,m]),{chainId:f}=(0,$.g)(),v=(0,i.useCallback)(e=>{let{data:t,index:i,style:o}=e,a=t[i],d=!!(s&&a&&s.equals(a)),m=!!(c&&a&&c.equals(a)),handleSelect=()=>l(a),g=(0,A.pu)(a,f),v=i>n.length;return i!==h&&t?v&&g?(0,r.jsx)(ImportRow,{onCurrencySelect:handleSelect,style:o,token:g,showImportView:u,setImportToken:x,dim:!0}):(0,r.jsx)(CurrencyRow,{style:o,currency:a,isSelected:d,onSelect:handleSelect,otherSelected:m}):(0,r.jsx)(F,{style:o,children:(0,r.jsx)(V,{padding:"8px 12px",borderRadius:"8px",children:(0,r.jsxs)(L.m0,{children:[(0,r.jsx)(p.xvT,{small:!0,children:"Expanded results from inactive Token Lists"}),(0,r.jsx)(p.s6f,{text:"Tokens from inactive lists. Import specific tokens below or click 'Manage' to activate more lists.",ml:"4px"})]})})})},[s,c,f,n.length,h,l,u,x]),j=(0,i.useCallback)((e,t)=>currencyKey(t[e]),[]);return(0,r.jsx)(H.t7,{height:t,ref:a,width:"100%",itemData:g,itemCount:g.length,itemSize:56,itemKey:j,children:v})}function createFilterToken(e){let t=(0,T.xP)(e);if(t){let e=t.toLowerCase();return t=>"address"in t&&e===t.address.toLowerCase()}let n=e.toLowerCase().split(/\s+/).filter(e=>e.length>0);if(0===n.length)return()=>!0;let matchesSearch=e=>{let t=e.toLowerCase().split(/\s+/).filter(e=>e.length>0);return n.every(e=>0===e.length||t.some(t=>t.startsWith(e)||t.endsWith(e)))};return e=>{let{symbol:t,name:n}=e;return!!t&&matchesSearch(t)||!!n&&matchesSearch(n)}}var Q=n(29928),sorting=function(e){let t=(0,U.uD)(),n=(0,i.useMemo)(()=>(0,Q.Nk)(null!=t?t:{}),[t]);return(0,i.useMemo)(()=>e?(e,t)=>-1*n(e,t):n,[e,n])},SearchModal_CurrencySearch=function(e){let{selectedCurrency:t,onCurrencySelect:n,otherSelectedCurrency:o,showCommonBases:s,showSearchInput:l=!0,showImportView:d,setImportToken:u,height:x,tokensToShow:h}=e,{chainId:m}=(0,$.g)(),g=(0,i.useRef)(),[f,v]=(0,i.useState)(""),j=(0,y.Z)(f,200),[k]=(0,i.useState)(!1),w=(0,S.e_)(),b=(0,S.dQ)(j),P=(0,S.EH)(b),{isMobile:z}=(0,a.SL)(),R=(0,C.Z)(),M=(0,i.useMemo)(()=>{var e,t,n;if(h)return!1;let r=j.toLowerCase().trim();return R&&(null===(n=R.symbol)||void 0===n?void 0:null===(t=n.toLowerCase)||void 0===t?void 0:null===(e=t.call(n))||void 0===e?void 0:e.indexOf(r))!==-1},[j,R,h]),D=(0,i.useMemo)(()=>{let e=createFilterToken(j);return Object.values(h||w).filter(e)},[h,w,j]),H=(0,i.useMemo)(()=>{if(!D)return[];let e=j.toLowerCase().trim(),t=e.split(/\s+/).filter(e=>e.length>0);if(t.length>1)return D;let n=[],r=[],i=[];return D.forEach(o=>{var s,l;let c=null===(s=o.symbol)||void 0===s?void 0:s.toLowerCase();return c===t[0]||(null===(l=o.name)||void 0===l?void 0:l.toLowerCase())===e?n.push(o):c.startsWith(e)?r.push(o):i.push(o)}),[...n,...r,...i]},[D,j]),A=sorting(k),E=(0,i.useMemo)(()=>[...H].sort(A),[H,A]),U=(0,i.useCallback)(e=>{n(e)},[n]),B=(0,i.useRef)();(0,i.useEffect)(()=>{var e;z||null===(e=B.current)||void 0===e||e.focus()},[z]);let _=(0,i.useCallback)(e=>{var t;let n=e.target.value,r=(0,T.xP)(n);v(r||n),null===(t=g.current)||void 0===t||t.scrollTo(0)},[]),N=(0,i.useCallback)(e=>{if("Enter"===e.key){let e=j.toLowerCase().trim();if(e===R.symbol.toLowerCase().trim())U(R);else if(E.length>0){var t;((null===(t=E[0].symbol)||void 0===t?void 0:t.toLowerCase())===j.trim().toLowerCase()||1===E.length)&&U(E[0])}}},[j,E,U,R]),W=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=(0,c.R0)(),r=(0,c.eu)(),{chainId:o}=(0,$.g)(),s=(0,S.e_)();return(0,i.useMemo)(()=>{if(!e||0===e.trim().length)return[];let i=createFilterToken(e),l=[],c=[],a={},d=e.toLowerCase().trim();for(let e of r){var u,x,h;let t=null===(u=n[e])||void 0===u?void 0:u.current;if(t){for(let e of t.tokens)if(e.chainId===o&&!(e.address in s)&&!a[e.address]&&i(e)){let t=new I.DT({...e,address:(0,T.xP)(e.address)||e.address});a[t.address]=!0,(null===(x=e.name)||void 0===x?void 0:x.toLowerCase())===d||(null===(h=e.symbol)||void 0===h?void 0:h.toLowerCase())===d?l.push(t):c.push(t)}}}return[...l,...c].slice(0,t)},[s,o,r,n,t,e])}(j),X=!!(null==W?void 0:W.length),O=(0,i.useCallback)(()=>!b||P||X?(null==E?void 0:E.length)||X?(0,r.jsx)(p.xuv,{margin:"6px -24px 0 -24px",children:(0,r.jsx)(CurrencyList,{height:z?s?300:350:390,showNative:M,currencies:E,inactiveCurrencies:W,breakIndex:(null==W?void 0:W.length)&&E?E.length:void 0,onCurrencySelect:U,otherCurrency:o,selectedCurrency:t,fixedListRef:g,showImportView:d,setImportToken:u})}):(0,r.jsx)(Z.ZP,{style:{padding:"20px",height:"100%"},children:(0,r.jsx)(p.xvT,{color:"textSubtle",textAlign:"center",mb:"20px",children:"No results found."})}):(0,r.jsx)(Z.ZP,{style:{padding:"20px 0",height:"100%"},children:(0,r.jsx)(ImportRow,{onCurrencySelect:U,token:b,showImportView:d,setImportToken:u})}),[W,E,U,X,o,b,P,t,u,M,d,s,z,x]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(Z.Tz,{gap:"16px",children:[l&&(0,r.jsx)(L.ZP,{children:(0,r.jsx)(p.IIB,{id:"token-search-input",placeholder:"Search name or paste address",scale:"md",autoComplete:"off",value:f,ref:B,onChange:_,onKeyDown:N})}),s&&(0,r.jsx)(CommonBases,{chainId:m,onSelect:U,selectedCurrency:t})]}),O()]})},q=n(23714),J=n(67645),Y=n(63150);let getStandard=e=>"ERC20";var SearchModal_ImportToken=function(e){var t,n;let{tokens:o,handleCurrencySelect:s}=e,{chainId:l}=(0,$.g)(),[c,a]=(0,i.useState)(!1),d=(0,q._E)();return(0,r.jsxs)(Z.Tz,{gap:"lg",children:[(0,r.jsxs)(p.xvT,{children:[`Anyone can create a ${getStandard(l)} token on ${null!==(n=null===(t=Y.p5.find(e=>e.id===l))||void 0===t?void 0:t.name)&&void 0!==n?n:""} with any name, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token.`," If you purchase an arbitrary token, you may be unable to sell it back."]}),o.map(e=>{let t=e.address?`${(0,J.Z)(e.address,6)}`:null;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.kCb,{alignItems:"center",justifyContent:"space-between",children:e.chainId&&(0,r.jsx)(p.rUS,{href:(0,T.C)(e.address,"address",e.chainId),external:!0,children:`View on ${(0,T.X0)(e.chainId)}`})}),(0,r.jsxs)(p.kCb,{alignItems:"center",justifyContent:"space-between",children:[(0,r.jsxs)(p.kCb,{alignItems:"center",children:[(0,r.jsx)(p.xvT,{mr:"8px",children:e.name}),(0,r.jsxs)(p.xvT,{children:["(",e.symbol,")"]})]}),(0,r.jsx)(p.xvT,{mr:"4px",children:t})]})]})}),(0,r.jsxs)(p.rjZ,{gridTemplateRows:"1fr 1fr",gridGap:"4px",children:[(0,r.jsxs)(p.kCb,{alignItems:"center",onClick:()=>a(!c),children:[(0,r.jsx)(p.XZJ,{scale:"sm",name:"confirmed",type:"checkbox",checked:c,onChange:()=>a(!c)}),(0,r.jsx)(p.xvT,{ml:"8px",style:{userSelect:"none"},children:"I understand"})]}),(0,r.jsx)(p.zxk,{variant:"danger",disabled:!c,onClick:()=>{o.forEach(e=>{d(e)}),s&&s(o[0])},className:".token-dismiss-button",children:"Import"})]})]})},G=n(12663),ee=n(90755),et=n(11635),en=n(48583),er=n(75059),ei=n(92897);let eo=(0,o.ZP)(p.xuv).withConfig({componentId:"sc-b21c1c00-0"})`
  width: ${e=>{let{width:t}=e;return null!=t?t:"100%"}};
  padding: ${e=>{let{padding:t}=e;return null!=t?t:"1.25rem"}};
  border: ${e=>{let{border:t}=e;return t}};
  border-radius: ${e=>{let{borderRadius:t}=e;return null!=t?t:"16px"}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
`,es=(0,o.ZP)(Z.ZP).withConfig({componentId:"sc-b21c1c00-1"})`
  width: 100%;
  height: 100%;
`,el=(0,o.ZP)(L.ZP).withConfig({componentId:"sc-b21c1c00-2"})`
  background-color: ${e=>{let{active:t,theme:n}=e;return t?`${n.colors.success19}`:"transparent"}};
  border: solid 1px;
  border-color: ${e=>{let{active:t,theme:n}=e;return t?n.colors.success:n.colors.tertiary}};
  transition: 200ms;
  align-items: center;
  padding: 1rem;
  border-radius: 20px;
  opacity: ${e=>{let{hasActiveTokens:t}=e;return t?1:.4}};
`,ec=(0,i.memo)(function(e){var t;let{listUrl:n}=e,{chainId:o}=(0,$.g)(),a=(0,c.EF)(n),d=(0,en.Dv)(c.Ti),[,u]=(0,l.n_)(),{current:x,pendingUpdate:h}=d[n],m=(0,i.useMemo)(()=>x&&o?x.tokens.reduce((e,t)=>t.chainId===o?e+1:e,0):0,[o,x]),g=(0,i.useCallback)(()=>{h&&u((0,s.xJ)(n))},[u,n,h]),f=(0,i.useCallback)(()=>{window.confirm("Please confirm you would like to remove this list")&&u((0,s.J_)(n))},[u,n]),v=(0,i.useCallback)(()=>{u((0,s.ic)(n))},[u,n]),j=(0,i.useCallback)(()=>{u((0,s.K$)(n))},[u,n]),{targetRef:k,tooltip:w,tooltipVisible:b}=(0,ee.lL)((0,r.jsxs)("div",{children:[(0,r.jsx)(p.xvT,{children:x&&(t=x.version,`v${t.major}.${t.minor}.${t.patch}`)}),(0,r.jsx)(p.NRJ,{external:!0,href:`https://tokenlists.org/token-list?url=${n}`,children:"See"}),(0,r.jsx)(p.zxk,{variant:"danger",scale:"xs",onClick:f,disabled:1===Object.keys(d).length,children:"Remove"}),h&&(0,r.jsx)(p.zxk,{variant:"text",onClick:g,style:{fontSize:"12px"},children:"Update list"})]}),{placement:"right-end",trigger:"click"});return x?(0,r.jsxs)(el,{active:a,hasActiveTokens:m>0,id:`list-row-${n.replace(/\./g,"-")}`,children:[b&&w,x.logoURI?(0,r.jsx)(ListLogo,{size:"40px",style:{marginRight:"1rem"},logoURI:x.logoURI,alt:`${x.name} list logo`}):(0,r.jsx)("div",{style:{width:"24px",height:"24px",marginRight:"1rem"}}),(0,r.jsxs)(Z.ZP,{style:{flex:"1"},children:[(0,r.jsx)(L.ZP,{children:(0,r.jsx)(p.xvT,{bold:!0,children:x.name})}),(0,r.jsxs)(L.DA,{mt:"4px",children:[(0,r.jsxs)(p.xvT,{fontSize:"12px",mr:"6px",textTransform:"lowercase",children:[x.tokens.length," Tokens"]}),(0,r.jsx)("span",{ref:k,children:(0,r.jsx)(p.IEm,{color:"text",width:"12px"})})]})]}),(0,r.jsx)(p.ZDl,{checked:a,onChange:()=>{a?j():v()}})]},n):null}),ea=o.ZP.div.withConfig({componentId:"sc-b21c1c00-3"})`
  padding: 1rem 0;
  height: 100%;
  overflow: auto;
`;var SearchModal_ManageLists=function(e){let{setModalView:t,setImportList:n,setListUrl:o}=e,[a,d]=(0,i.useState)(""),{chainId:u}=(0,$.g)(),[,x]=(0,l.n_)(),h=(0,c.R0)(),m=(0,c.v0)(),[g,f]=(0,i.useState)();(0,i.useEffect)(()=>{!g&&m&&f(m)},[g,m]);let v=(0,i.useCallback)(e=>{d(e.target.value)},[]),j=(0,s.jn)(x),k=(0,i.useMemo)(()=>(0,er.Z)(a).length>0,[a]),w=(0,i.useMemo)(()=>{let e=Object.keys(h);return e.filter(e=>{let t=!!h[e].current&&!et.US.includes(e);if(t&&u){var n;return null===(n=et.vv[u])||void 0===n?void 0:n.includes(e)}return!1}).sort((e,t)=>{let{current:n}=h[e],{current:r}=h[t];if((null==g?void 0:g.includes(e))&&!(null==g?void 0:g.includes(t)))return -1;if(!(null==g?void 0:g.includes(e))&&(null==g?void 0:g.includes(t)))return 1;if(n&&r){let e="pancakeswap";return!n.name.toLowerCase().includes(e)&&r.name.toLowerCase().includes(e)?1:n.name.toLowerCase()<r.name.toLowerCase()?-1:n.name.toLowerCase()===r.name.toLowerCase()?0:1}return n?-1:r?1:0})},[h,u,g]),[b,y]=(0,i.useState)(),[C,I]=(0,i.useState)();(0,i.useEffect)(()=>{async function fetchTempList(){j(a,!1).then(e=>y(e)).catch(()=>I("Error importing list"))}k?fetchTempList():(y(void 0),""!==a&&I("Enter valid list location")),""===a&&I(void 0)},[j,a,k]);let T=Object.keys(h).includes(a),S=(0,i.useCallback)(()=>{b&&(n(b),t(ei.Hv.importList),o(a))},[a,n,o,t,b]);return(0,r.jsxs)(es,{children:[(0,r.jsxs)(Z.Tz,{gap:"14px",children:[(0,r.jsx)(L.ZP,{children:(0,r.jsx)(p.IIB,{id:"list-add-input",scale:"lg",placeholder:"https:// or ipfs://",value:a,onChange:v})}),C?(0,r.jsx)(p.xvT,{color:"failure",style:{textOverflow:"ellipsis",overflow:"hidden"},children:C}):null]}),b&&(0,r.jsx)(Z.Tz,{style:{marginTop:8},children:(0,r.jsx)(eo,{padding:"12px 20px",children:(0,r.jsxs)(L.m0,{children:[(0,r.jsxs)(L.DA,{children:[b.logoURI&&(0,r.jsx)(ListLogo,{logoURI:b.logoURI,size:"40px"}),(0,r.jsxs)(Z.Tz,{gap:"4px",style:{marginLeft:"20px"},children:[(0,r.jsx)(p.xvT,{bold:!0,children:b.name}),(0,r.jsxs)(p.xvT,{color:"textSubtle",small:!0,textTransform:"lowercase",children:[b.tokens.length," Tokens"]})]})]}),T?(0,r.jsxs)(L.DA,{children:[(0,r.jsx)(p.KML,{width:"16px",mr:"10px"}),(0,r.jsx)(p.xvT,{children:"Loaded"})]}):(0,r.jsx)(p.zxk,{width:"fit-content",onClick:S,children:"Import"})]})})}),(0,r.jsx)(ea,{children:(0,r.jsx)(Z.Tz,{gap:"md",children:w.map(e=>(0,r.jsx)(ec,{listUrl:e},e))})})]})},ed=n(92252);let eu=o.ZP.div.withConfig({componentId:"sc-eb2222b0-0"})`
  width: 100%;
  height: calc(100% - 60px);
  position: relative;
  padding-bottom: 60px;
`,ex=o.ZP.div.withConfig({componentId:"sc-eb2222b0-1"})`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;function ManageTokens(e){let{setModalView:t,setImportToken:n}=e,{chainId:o}=(0,$.g)(),[s,l]=(0,i.useState)(""),c=(0,i.useRef)(),a=(0,i.useCallback)(e=>{let t=e.target.value,n=(0,T.xP)(t);l(n||t)},[]),d=(0,S.dQ)(s),u=(0,ed.Z)(),x=(0,q.QG)(),h=(0,i.useCallback)(()=>{o&&u&&u.forEach(e=>x(o,e.address))},[x,u,o]),m=(0,i.useMemo)(()=>o&&u.map(e=>(0,r.jsxs)(L.m0,{width:"100%",children:[(0,r.jsxs)(L.DA,{children:[(0,r.jsx)(z.X,{currency:e,size:"20px"}),(0,r.jsx)(p.rUS,{external:!0,href:(0,T.C)(e.address,"address",o),color:"textSubtle",ml:"10px",mr:"3px",children:e.symbol}),(0,r.jsx)("a",{href:(0,T.C)(e.address,"token",o),target:"_blank",rel:"noreferrer noopener",children:(0,r.jsx)(p.a2c,{width:"20px",color:"textSubtle"})})]}),(0,r.jsx)(L.DA,{children:(0,r.jsx)(p.hU,{variant:"text",onClick:()=>x(o,e.address),children:(0,r.jsx)(p.qCY,{color:"textSubtle"})})})]},e.address)),[u,o,x]),g=""===s||(0,T.xP)(s);return(0,r.jsx)(eu,{children:(0,r.jsxs)(Z.ZP,{style:{width:"100%",flex:"1 1"},children:[(0,r.jsxs)(Z.Tz,{gap:"14px",children:[(0,r.jsx)(L.ZP,{children:(0,r.jsx)(p.IIB,{id:"token-search-input",scale:"lg",placeholder:"0x0000",value:s,autoComplete:"off",ref:c,onChange:a,isWarning:!g})}),!g&&(0,r.jsx)(p.xvT,{color:"failure",children:"Enter valid token address"}),d&&(0,r.jsx)(ImportRow,{token:d,showImportView:()=>t(ei.Hv.importToken),setImportToken:n,style:{height:"fit-content"}})]}),m,(0,r.jsxs)(ex,{children:[(0,r.jsxs)(p.xvT,{bold:!0,color:"textSubtle",children:[null==u?void 0:u.length," ",1===u.length?"Imported Token":"Imported Tokens"]}),u.length>0&&(0,r.jsx)(p.zxk,{variant:"tertiary",onClick:h,children:"Clear all"})]})]})})}let eh=(0,o.ZP)(G.xz).withConfig({componentId:"sc-2e756df3-0"})`
  width: 100%;
`;function Manage(e){let{setModalView:t,setImportList:n,setImportToken:o,setListUrl:s}=e,[l,c]=(0,i.useState)(!0);return(0,r.jsxs)(x.fe,{style:{overflow:"visible"},children:[(0,r.jsxs)(eh,{activeIndex:l?0:1,onItemClick:()=>c(e=>!e),scale:"sm",variant:"subtle",mb:"32px",children:[(0,r.jsx)(G.kg,{width:"50%",children:"Lists"}),(0,r.jsx)(G.kg,{width:"50%",children:"Tokens"})]}),l?(0,r.jsx)(SearchModal_ManageLists,{setModalView:t,setImportList:n,setListUrl:s}):(0,r.jsx)(ManageTokens,{setModalView:t,setImportToken:o})]})}let ep=o.ZP.div.withConfig({componentId:"sc-546804f3-0"})`
  width: 100%;
  background-color: ${e=>{let{theme:t}=e;return t.colors.backgroundAlt}};
  text-align: center;
  align-items: center;
`,em=(0,o.ZP)(x.F0).withConfig({componentId:"sc-546804f3-1"})`
  width: 100%;
  min-width: 320px;
  max-width: 420px !important;
  min-height: 500px;
`,eg=(0,o.ZP)(x.fe).withConfig({componentId:"sc-546804f3-2"})`
  padding: 10px 20px 5px 20px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;function CurrencySearchModal(e){var t;let{onDismiss:n=()=>null,onCurrencySelect:o,selectedCurrency:h,otherSelectedCurrency:p,showCommonBases:m=!0,commonBasesType:g,showSearchInput:f,tokensToShow:v}=e,[j,k]=(0,i.useState)(ei.Hv.search),w=(0,i.useCallback)(e=>{null==n||n(),null==o||o(e)},[n,o]),y=(0,b.Z)(j),[C,I]=(0,i.useState)(),[T,$]=(0,i.useState)(),[S,Z]=(0,i.useState)(),[,L]=(0,l.n_)(),P=(0,c.R0)(),z=!!(S&&(null===(t=P[S])||void 0===t?void 0:t.loadingRequestId)),R=(0,s.jn)(L),[M,D]=(0,i.useState)(null),H=(0,i.useCallback)(()=>{!z&&S&&(D(null),R(S).then(()=>{L((0,s.ic)(S)),k(ei.Hv.manage)}).catch(e=>{D(e.message),L((0,s.J_)(S))}))},[z,L,R,S]),A={[ei.Hv.search]:{title:"Select a Token",onBack:void 0},[ei.Hv.manage]:{title:"Manage",onBack:()=>k(ei.Hv.search)},[ei.Hv.importToken]:{title:"Import Tokens",onBack:()=>k(y&&y!==ei.Hv.importToken?y:ei.Hv.search)},[ei.Hv.importList]:{title:"Import List",onBack:()=>k(ei.Hv.search)}},{isMobile:E}=(0,a.SL)(),U=(0,i.useRef)(null),[B,_]=(0,i.useState)(void 0);return(0,i.useEffect)(()=>{U.current&&_(U.current.offsetHeight-330)},[]),(0,r.jsxs)(em,{drag:!!E&&"y",dragConstraints:{top:0,bottom:600},dragElastic:{top:0},dragSnapToOrigin:!0,onDragStart:()=>{U.current&&(U.current.style.animation="none")},onDragEnd:(e,t)=>{t.velocity.y>x.dl&&n&&n()},ref:U,children:[(0,r.jsxs)(x.xB,{children:[(0,r.jsxs)(x.r6,{children:[A[j].onBack&&(0,r.jsx)(x.vy,{onBack:A[j].onBack}),(0,r.jsx)(d.xv,{children:A[j].title})]}),(0,r.jsx)(x.ol,{onDismiss:n})]}),(0,r.jsxs)(eg,{children:[j===ei.Hv.search?(0,r.jsx)(SearchModal_CurrencySearch,{onCurrencySelect:w,selectedCurrency:h,otherSelectedCurrency:p,showCommonBases:m,commonBasesType:g,showSearchInput:f,showImportView:()=>k(ei.Hv.importToken),setImportToken:I,height:B,tokensToShow:v}):j===ei.Hv.importToken&&C?(0,r.jsx)(SearchModal_ImportToken,{tokens:[C],handleCurrencySelect:w}):j===ei.Hv.importList&&T&&S?(0,r.jsx)(ImportList,{onAddList:H,addError:M,listURL:S,listLogoURI:null==T?void 0:T.logoURI,listName:null==T?void 0:T.name,listTokenLength:null==T?void 0:T.tokens.length}):j===ei.Hv.manage?(0,r.jsx)(Manage,{setModalView:k,setImportToken:I,setImportList:$,setListUrl:Z}):"",j===ei.Hv.search&&(0,r.jsx)(ep,{children:(0,r.jsx)(u.zx,{scale:"sm",variant:"text",onClick:()=>k(ei.Hv.manage),className:"list-token-manage-button",children:"Manage Tokens"})})]})]})}},92897:function(e,t,n){var r,i,o,s;n.d(t,{Hv:function(){return r},L0:function(){return i}}),(o=r||(r={}))[o.search=0]="search",o[o.manage=1]="manage",o[o.importToken=2]="importToken",o[o.importList=3]="importList",(s=i||(i={})).LIQUIDITY="LIQUIDITY",s.SWAP_LIMITORDER="SWAP_LIMITORDER"},57081:function(e,t,n){n.d(t,{Z:function(){return useHttpLocations}});var r=n(67294),i=n(75059);function useHttpLocations(e){return(0,r.useMemo)(()=>e?(0,i.Z)(e):[],[e])}},99939:function(e,t,n){var r=n(88306),i=n.n(r),o=n(87752),s=n(61129),l=n(60480);let c={[o.a_.ETHEREUM]:"ethereum"},a="https://raw.githubusercontent.com/Hex1exe/logos/main/tokens",d=i()(e=>e&&(0,l.U)(e.address)?`${a}/${e.chainId}/tokens/${(0,s.xP)(e.address)}.png`:null,e=>`${null==e?void 0:e.chainId}#${null==e?void 0:e.address}`);i()((e,t)=>{if(e&&t&&(0,l.U)(e)){let n=(0,s.xP)(e);if(369===t)return`${a}/369/tokens/${n}.png`;if(c[t])return`https://assets-cdn.trustwallet.com/blockchains/${c[t]}/assets/${n}/logo.png`}return null},(e,t)=>`${t}#${e}`),t.Z=d},75059:function(e,t,n){n.d(t,{Z:function(){return uriToHttp}});function uriToHttp(e){var t,n;let r=e.split(":")[0].toLowerCase();switch(r){case"https":return[e];case"http":return[`https${e.substring(4)}`,e];case"ipfs":let i=null===(t=e.match(/^ipfs:(\/\/)?(.*)$/i))||void 0===t?void 0:t[2];return[`https://cloudflare-ipfs.com/ipfs/${i}/`,`https://ipfs.io/ipfs/${i}/`];case"ipns":let o=null===(n=e.match(/^ipns:(\/\/)?(.*)$/i))||void 0===n?void 0:n[2];return[`https://cloudflare-ipfs.com/ipns/${o}/`,`https://ipfs.io/ipns/${o}/`];default:return[]}}}}]);
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
`;t.Z=i},91461:function(e,t,n){n.d(t,{Z:function(){return CurrencyLogo}});var r=n(85893),i=n(28865),o=n(67294),s=n(31219),l=n(19521),c=n(57081),a=n(99939);let d=(0,l.ZP)(i.S).withConfig({componentId:"sc-186c7d6c-0"})`
  width: ${e=>{let{size:t}=e;return t}};
  height: ${e=>{let{size:t}=e;return t}};
  border-radius: 50%;
`;function CurrencyLogo(e){var t,n;let{currency:i,size:l="24px",style:u}=e,x=(0,c.Z)(i instanceof s.DT?i.logoURI:void 0),h=(0,o.useMemo)(()=>{if(null==i?void 0:i.isNative)return[];if(null==i?void 0:i.isToken){let e=(0,a.Z)(i);return i instanceof s.DT?e?[...x,e]:[...x]:e?[e]:[]}return[]},[i,x]);return(null==i?void 0:i.isNative)?(0,r.jsx)(d,{size:l,srcs:[`/images/chains/${i.chainId}.png`],width:l,style:u}):i&&"0xBEb654A116aeEf764988DF0C6B4bf67CC869D01b"===i.wrapped.address&&148===i.chainId?(0,r.jsx)(d,{size:l,srcs:["/images/148/tokens/0xBEb654A116aeEf764988DF0C6B4bf67CC869D01b.png"],alt:`${null!==(t=null==i?void 0:i.symbol)&&void 0!==t?t:"token"} logo`,style:u}):(0,r.jsx)(d,{size:l,srcs:h,alt:`${null!==(n=null==i?void 0:i.symbol)&&void 0!==n?n:"token"} logo`,style:u})}},104:function(e,t,n){n.d(t,{Z:function(){return DoubleCurrencyLogo}});var r=n(85893),i=n(19521),o=n(91461);let s=i.ZP.div.withConfig({componentId:"sc-409329ce-0"})`
  display: flex;
  flex-direction: row;
  margin-right: ${e=>{let{margin:t}=e;return t&&"4px"}};
`;function DoubleCurrencyLogo(e){let{currency0:t,currency1:n,size:i=20,margin:l=!1}=e;return(0,r.jsxs)(s,{margin:l,children:[t&&(0,r.jsx)(o.Z,{currency:t,size:`${i.toString()}px`,style:{marginRight:"4px"}}),n&&(0,r.jsx)(o.Z,{currency:n,size:`${i.toString()}px`})]})}},90579:function(e,t,n){n.d(t,{X:function(){return r.Z},g:function(){return i.Z}});var r=n(91461),i=n(104)},74723:function(e,t,n){n.d(t,{Z:function(){return CurrencySearchModal}});var r=n(85893),i=n(67294),o=n(40231),s=n(94203),l=n(19521),c=n(31258),a=n(35275),d=n(57081),u=n(41219);let x=(0,l.ZP)(u.Z).withConfig({componentId:"sc-2a1db3a0-0"})`
  width: ${e=>{let{size:t}=e;return t}};
  height: ${e=>{let{size:t}=e;return t}};
`;function ListLogo(e){let{logoURI:t,style:n,size:i="24px",alt:o}=e,s=(0,d.Z)(t);return(0,r.jsx)(x,{alt:o,size:i,srcs:s,style:n})}let h=l.ZP.div.withConfig({componentId:"sc-ae924161-0"})`
  position: relative;
  width: 100%;
`,p=l.ZP.div.withConfig({componentId:"sc-ae924161-1"})`
  height: 3px;
  width: 3px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.text}};
  border-radius: 50%;
`,m=(0,l.ZP)(c.xuv).withConfig({componentId:"sc-ae924161-2"})`
  width: ${e=>{let{width:t}=e;return null!=t?t:"100%"}};
  padding: ${e=>{let{padding:t}=e;return null!=t?t:"1.25rem"}};
  border: ${e=>{let{border:t}=e;return t}};
  border-radius: ${e=>{let{borderRadius:t}=e;return null!=t?t:"16px"}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
`;function ImportList(e){let{listURL:t,listLogoURI:n,listName:o,listTokenLength:l,onAddList:d,addError:u}=e,{theme:x}=(0,s.ZP)(),[g,f]=(0,i.useState)(!1);return(0,r.jsx)(h,{children:(0,r.jsx)(a.Tz,{gap:"md",children:(0,r.jsxs)(a.Tz,{gap:"md",children:[(0,r.jsx)(m,{width:"370px",padding:"12px 20px",children:(0,r.jsx)(c.m0X,{children:(0,r.jsxs)(c.DAo,{flexWrap:"nowrap",children:[n&&(0,r.jsx)(ListLogo,{logoURI:n,size:"40px"}),(0,r.jsxs)(a.Tz,{gap:"sm",style:{marginLeft:"20px"},children:[(0,r.jsxs)(c.DAo,{children:[(0,r.jsx)(c.xvT,{bold:!0,mr:"6px",children:o}),(0,r.jsx)(p,{}),(0,r.jsxs)(c.xvT,{small:!0,color:"textSubtle",ml:"6px",children:[l," tokens"]})]}),(0,r.jsx)(c.rUS,{style:{width:"100%",overflowX:"scroll"},small:!0,external:!0,ellipsis:!0,href:`https://tokenlists.org/token-list?url=${t}`,children:t})]})]})})}),(0,r.jsx)(c.v0C,{variant:"danger",children:(0,r.jsxs)(c.kCb,{flexDirection:"column",children:[(0,r.jsx)(c.xvT,{fontSize:"20px",textAlign:"center",color:x.colors.failure,mb:"16px",children:"Import at your own risk"}),(0,r.jsx)(c.xvT,{color:x.colors.failure,mb:"8px",children:"By adding this list you are implicitly trusting that the data is correct. Anyone can create a list, including creating fake versions of existing lists and lists that claim to represent projects that do not have one."}),(0,r.jsx)(c.xvT,{bold:!0,color:x.colors.failure,mb:"16px",children:"If you purchase a token from this list, you may not be able to sell it back."}),(0,r.jsxs)(c.kCb,{alignItems:"center",children:[(0,r.jsx)(c.XZJ,{name:"confirmed",type:"checkbox",checked:g,onChange:()=>f(!g),scale:"sm"}),(0,r.jsx)(c.xvT,{ml:"10px",style:{userSelect:"none"},children:"I understand"})]})]})}),(0,r.jsx)(c.zxk,{disabled:!g,onClick:d,children:"Import"}),u?(0,r.jsx)(c.xvT,{color:"failure",style:{textOverflow:"ellipsis",overflow:"hidden"},children:u}):null]})})})}var g=n(36945),f=n(64029),v=n(81064),j=n(7177),w=n(75948),b=n(19922),k=n(72157),C=n(29589),y=n(89704),I=n(31219),T=n(61129),$=n(27086),S=n(98287),Z=n(25786),L=n(38489),P=n(51439),z=n(90579);let R=l.ZP.div.withConfig({componentId:"sc-c34005db-0"})`
  display: inline-block;
  vertical-align: top;
  margin-right: 5px;
  margin-bottom: 5px;
`,D=l.ZP.div.withConfig({componentId:"sc-c34005db-1"})`
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
`,M=l.ZP.div.withConfig({componentId:"sc-c34005db-2"})`
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
`;function CommonBases(e){let{chainId:t,onSelect:n,selectedCurrency:i}=e,o=(0,y.Z)(),s=t?[P.kx[t][0],P.kx[t][1],P.kx[t][2]]:[],l=null==i?void 0:i.equals(o);return(0,r.jsx)(Z.Tz,{gap:"md",children:(0,r.jsxs)(M,{children:[(0,r.jsx)(R,{children:(0,r.jsxs)(D,{onClick:()=>!l&&n(o),disable:l,children:[(0,r.jsx)(z.X,{currency:o,style:{marginRight:8,borderRadius:"50%"}}),(0,r.jsx)(c.xvT,{children:o.symbol})]})},"buttonBase#native"),(t&&s||[]).map(e=>{let t=null==i?void 0:i.equals(e);return(0,r.jsx)(R,{children:(0,r.jsxs)(D,{onClick:()=>!t&&n(e),disable:t,children:[(0,r.jsx)(z.X,{currency:e,style:{marginRight:8,borderRadius:"50%"}}),(0,r.jsx)(c.xvT,{children:e.symbol})]})},`buttonBase#${e.address}`)})]})})}var E=n(1314),A=n(91592),B=n(92321),H=n(20873),U=n(74906),_=n(91461);let N=l.ZP.div.withConfig({componentId:"sc-b9f240c8-0"})`
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
`,F=(0,l.ZP)(c.nSX).withConfig({componentId:"sc-b9f240c8-1"})`
  height: 16px;
  width: 16px;
  margin-right: 6px;
  stroke: ${e=>{let{theme:t}=e;return t.colors.success}};
`,W=(0,l.ZP)(c.kCb).withConfig({componentId:"sc-b9f240c8-2"})`
  white-space: nowrap;
  overflow: hidden;
  align-items: center;
  text-overflow: ellipsis;
  max-width: 210px;
  gap: 8px;
`;function ImportRow(e){var t,n;let{token:i,style:o,dim:s,onCurrencySelect:l,showImportView:a,setImportToken:d}=e,{isMobile:u}=(0,g.SL)(),x=(0,w.qB)(),h=(null==i?void 0:i.chainId)&&(null==x?void 0:null===(n=x[i.chainId])||void 0===n?void 0:null===(t=n[i.address])||void 0===t?void 0:t.list),p=(0,S.EH)(i),m=(0,S.ZN)(i);return(0,r.jsxs)(N,{style:o,variant:"text",as:m&&l?c.zxk:"a",onClick:()=>{m&&(null==l||l(i))},children:[(0,r.jsx)(_.Z,{currency:i,size:u?"20px":"24px",style:{opacity:s?"0.6":"1"}}),(0,r.jsxs)(Z.Tz,{gap:"4px",style:{opacity:s?"0.6":"1"},children:[(0,r.jsx)(L.BA,{children:(0,r.jsxs)(W,{title:i.name,children:[(0,r.jsx)(c.xvT,{ellipsis:!0,color:"textDisabled",fontSize:"14px",children:i.symbol}),(0,r.jsx)(c.xvT,{ellipsis:!0,color:"textDisabled",fontSize:"12px",children:i.name})]})}),h&&h.logoURI&&(0,r.jsxs)(L.DA,{children:[(0,r.jsxs)(c.xvT,{fontSize:u?"10px":"14px",mr:"4px",color:"textSubtle",children:["via ",h.name]}),(0,r.jsx)(ListLogo,{logoURI:h.logoURI,size:"12px"})]})]}),m||p?(0,r.jsxs)(L.DA,{style:{minWidth:"fit-content"},children:[(0,r.jsx)(F,{}),(0,r.jsx)(c.xvT,{color:"success",children:"Active"})]}):(0,r.jsx)(c.zxk,{scale:u?"sm":"md",width:"fit-content",onClick:()=>{d&&d(i),a()},children:"Import"})]})}function currencyKey(e){return(null==e?void 0:e.isToken)?e.address:(null==e?void 0:e.isNative)?e.symbol:""}let X=(0,l.ZP)(c.xvT).withConfig({componentId:"sc-3dd0a45e-0"})`
  white-space: nowrap;
  overflow: hidden;
  max-width: 5rem;
  text-overflow: ellipsis;
`,O=l.ZP.div.withConfig({componentId:"sc-3dd0a45e-1"})`
  padding: 4px 20px;
  height: 56px;
  display: grid;
  grid-gap: 16px;
  align-items: center;
`,V=(0,l.ZP)(c.xuv).withConfig({componentId:"sc-3dd0a45e-2"})`
  width: ${e=>{let{width:t}=e;return null!=t?t:"100%"}};
  padding: ${e=>{let{padding:t}=e;return null!=t?t:"1.25rem"}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  border-radius: ${e=>{let{borderRadius:t}=e;return null!=t?t:"16px"}};
`;function Balance(e){let{balance:t}=e;return(0,r.jsx)(X,{title:t.toExact(),children:t.toSignificant(4)})}let K=(0,l.ZP)(L.m0).withConfig({componentId:"sc-3dd0a45e-3"})`
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
`;function CurrencyRow(e){let{currency:t,onSelect:n,isSelected:i,otherSelected:o,style:s}=e,{address:l}=(0,B.m)(),a=currencyKey(t),d=(0,w.z0)(),u=(0,T.wK)(d,t),x=(0,S.EH)(t),h=(0,H._h)(null!=l?l:void 0,t);return(0,r.jsxs)(K,{style:s,className:`token-item-${a}`,onClick:()=>i?null:n(),disabled:i,selected:o,children:[(0,r.jsx)(z.X,{currency:t,size:"36px"}),(0,r.jsxs)(Z.ZP,{children:[(0,r.jsx)(c.xvT,{children:t.symbol}),(0,r.jsxs)(c.xvT,{color:"textDisabled",fontSize:"12px",ellipsis:!0,maxWidth:"200px",children:[!u&&x&&"Added by user •"," ",t.name]})]}),(0,r.jsx)(L.DA,{style:{justifySelf:"flex-end"},children:h?(0,r.jsx)(Balance,{balance:h}):l?(0,r.jsx)(U.Z,{}):null})]})}function CurrencyList(e){let{height:t,currencies:n,inactiveCurrencies:o,selectedCurrency:s,onCurrencySelect:l,otherCurrency:a,fixedListRef:d,showNative:u,showImportView:x,setImportToken:h,breakIndex:p}=e,m=(0,y.Z)(),g=(0,i.useMemo)(()=>{let e=u?[m,...n,...o]:[...n,...o];return void 0!==p&&(e=[...e.slice(0,p),void 0,...e.slice(p,e.length)]),e},[p,n,o,u,m]),{chainId:f}=(0,$.g)(),v=(0,i.useCallback)(e=>{let{data:t,index:i,style:o}=e,d=t[i],u=!!(s&&d&&s.equals(d)),m=!!(a&&d&&a.equals(d)),handleSelect=()=>l(d),g=(0,A.pu)(d,f),v=i>n.length;return i!==p&&t?v&&g?(0,r.jsx)(ImportRow,{onCurrencySelect:handleSelect,style:o,token:g,showImportView:x,setImportToken:h,dim:!0}):(0,r.jsx)(CurrencyRow,{style:o,currency:d,isSelected:u,onSelect:handleSelect,otherSelected:m}):(0,r.jsx)(O,{style:o,children:(0,r.jsx)(V,{padding:"8px 12px",borderRadius:"8px",children:(0,r.jsxs)(L.m0,{children:[(0,r.jsx)(c.xvT,{small:!0,children:"Expanded results from inactive Token Lists"}),(0,r.jsx)(c.s6f,{text:"Tokens from inactive lists. Import specific tokens below or click 'Manage' to activate more lists.",ml:"4px"})]})})})},[s,a,f,n.length,p,l,x,h]),j=(0,i.useCallback)((e,t)=>currencyKey(t[e]),[]);return(0,r.jsx)(E.t7,{height:t,ref:d,width:"100%",itemData:g,itemCount:g.length,itemSize:56,itemKey:j,children:v})}function createFilterToken(e){let t=(0,T.xP)(e);if(t){let e=t.toLowerCase();return t=>"address"in t&&e===t.address.toLowerCase()}let n=e.toLowerCase().split(/\s+/).filter(e=>e.length>0);if(0===n.length)return()=>!0;let matchesSearch=e=>{let t=e.toLowerCase().split(/\s+/).filter(e=>e.length>0);return n.every(e=>0===e.length||t.some(t=>t.startsWith(e)||t.endsWith(e)))};return e=>{let{symbol:t,name:n}=e;return!!t&&matchesSearch(t)||!!n&&matchesSearch(n)}}var Q=n(29928),sorting=function(e){let t=(0,H.uD)(),n=(0,i.useMemo)(()=>(0,Q.Nk)(null!=t?t:{}),[t]);return(0,i.useMemo)(()=>e?(e,t)=>-1*n(e,t):n,[e,n])},SearchModal_CurrencySearch=function(e){let{selectedCurrency:t,onCurrencySelect:n,otherSelectedCurrency:o,showCommonBases:s,showSearchInput:l=!0,showImportView:a,setImportToken:d,height:u,tokensToShow:x}=e,{chainId:h}=(0,$.g)(),p=(0,i.useRef)(),[m,f]=(0,i.useState)(""),v=(0,C.Z)(m,200),[j]=(0,i.useState)(!1),b=(0,S.e_)(),k=(0,S.dQ)(v),P=(0,S.EH)(k),{isMobile:z}=(0,g.SL)(),R=(0,y.Z)(),D=(0,i.useMemo)(()=>{var e,t,n;if(x)return!1;let r=v.toLowerCase().trim();return R&&(null===(n=R.symbol)||void 0===n?void 0:null===(t=n.toLowerCase)||void 0===t?void 0:null===(e=t.call(n))||void 0===e?void 0:e.indexOf(r))!==-1},[v,R,x]),M=(0,i.useMemo)(()=>{let e=createFilterToken(v);return Object.values(x||b).filter(e)},[x,b,v]),E=(0,i.useMemo)(()=>{if(!M)return[];let e=v.toLowerCase().trim(),t=e.split(/\s+/).filter(e=>e.length>0);if(t.length>1)return M;let n=[],r=[],i=[];return M.forEach(o=>{var s,l;let c=null===(s=o.symbol)||void 0===s?void 0:s.toLowerCase();return c===t[0]||(null===(l=o.name)||void 0===l?void 0:l.toLowerCase())===e?n.push(o):c.startsWith(e)?r.push(o):i.push(o)}),[...n,...r,...i]},[M,v]),A=sorting(j),B=(0,i.useMemo)(()=>[...E].sort(A),[E,A]),H=(0,i.useCallback)(e=>{n(e)},[n]),U=(0,i.useRef)();(0,i.useEffect)(()=>{var e;z||null===(e=U.current)||void 0===e||e.focus()},[z]);let _=(0,i.useCallback)(e=>{var t;let n=e.target.value,r=(0,T.xP)(n);f(r||n),null===(t=p.current)||void 0===t||t.scrollTo(0)},[]),N=(0,i.useCallback)(e=>{if("Enter"===e.key){let e=v.toLowerCase().trim();if(e===R.symbol.toLowerCase().trim())H(R);else if(B.length>0){var t;((null===(t=B[0].symbol)||void 0===t?void 0:t.toLowerCase())===v.trim().toLowerCase()||1===B.length)&&H(B[0])}}},[v,B,H,R]),F=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=(0,w.R0)(),r=(0,w.eu)(),{chainId:o}=(0,$.g)(),s=(0,S.e_)();return(0,i.useMemo)(()=>{if(!e||0===e.trim().length)return[];let i=createFilterToken(e),l=[],c=[],a={},d=e.toLowerCase().trim();for(let e of r){var u,x,h;let t=null===(u=n[e])||void 0===u?void 0:u.current;if(t){for(let e of t.tokens)if(e.chainId===o&&!(e.address in s)&&!a[e.address]&&i(e)){let t=new I.DT({...e,address:(0,T.xP)(e.address)||e.address});a[t.address]=!0,(null===(x=e.name)||void 0===x?void 0:x.toLowerCase())===d||(null===(h=e.symbol)||void 0===h?void 0:h.toLowerCase())===d?l.push(t):c.push(t)}}}return[...l,...c].slice(0,t)},[s,o,r,n,t,e])}(v),W=!!(null==F?void 0:F.length),X=(0,i.useCallback)(()=>!k||P||W?(null==B?void 0:B.length)||W?(0,r.jsx)(c.xuv,{margin:"6px -24px 0 -24px",children:(0,r.jsx)(CurrencyList,{height:z?s?300:350:390,showNative:D,currencies:B,inactiveCurrencies:F,breakIndex:(null==F?void 0:F.length)&&B?B.length:void 0,onCurrencySelect:H,otherCurrency:o,selectedCurrency:t,fixedListRef:p,showImportView:a,setImportToken:d})}):(0,r.jsx)(Z.ZP,{style:{padding:"20px",height:"100%"},children:(0,r.jsx)(c.xvT,{color:"textSubtle",textAlign:"center",mb:"20px",children:"No results found."})}):(0,r.jsx)(Z.ZP,{style:{padding:"20px 0",height:"100%"},children:(0,r.jsx)(ImportRow,{onCurrencySelect:H,token:k,showImportView:a,setImportToken:d})}),[F,B,H,W,o,k,P,t,d,D,a,s,z,u]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(Z.Tz,{gap:"16px",children:[l&&(0,r.jsx)(L.ZP,{children:(0,r.jsx)(c.IIB,{id:"token-search-input",placeholder:"Search name or paste address",scale:"md",autoComplete:"off",value:m,ref:U,onChange:_,onKeyDown:N})}),s&&(0,r.jsx)(CommonBases,{chainId:h,onSelect:H,selectedCurrency:t})]}),X()]})},q=n(23714),J=n(67645),Y=n(63150);let getStandard=e=>"ERC20";var SearchModal_ImportToken=function(e){var t,n;let{tokens:o,handleCurrencySelect:s}=e,{chainId:l}=(0,$.g)(),[a,d]=(0,i.useState)(!1),u=(0,q._E)();return(0,r.jsxs)(Z.Tz,{gap:"lg",children:[(0,r.jsxs)(c.xvT,{children:[`Anyone can create a ${getStandard(l)} token on ${null!==(n=null===(t=Y.p5.find(e=>e.id===l))||void 0===t?void 0:t.name)&&void 0!==n?n:""} with any name, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token.`," If you purchase an arbitrary token, you may be unable to sell it back."]}),o.map(e=>{let t=e.address?`${(0,J.Z)(e.address,6)}`:null;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.kCb,{alignItems:"center",justifyContent:"space-between",children:e.chainId&&(0,r.jsx)(c.rUS,{href:(0,T.C)(e.address,"address",e.chainId),external:!0,children:`View on ${(0,T.X0)(e.chainId)}`})}),(0,r.jsxs)(c.kCb,{alignItems:"center",justifyContent:"space-between",children:[(0,r.jsxs)(c.kCb,{alignItems:"center",children:[(0,r.jsx)(c.xvT,{mr:"8px",children:e.name}),(0,r.jsxs)(c.xvT,{children:["(",e.symbol,")"]})]}),(0,r.jsx)(c.xvT,{mr:"4px",children:t})]})]})}),(0,r.jsxs)(c.rjZ,{gridTemplateRows:"1fr 1fr",gridGap:"4px",children:[(0,r.jsxs)(c.kCb,{alignItems:"center",onClick:()=>d(!a),children:[(0,r.jsx)(c.XZJ,{scale:"sm",name:"confirmed",type:"checkbox",checked:a,onChange:()=>d(!a)}),(0,r.jsx)(c.xvT,{ml:"8px",style:{userSelect:"none"},children:"I understand"})]}),(0,r.jsx)(c.zxk,{variant:"danger",disabled:!a,onClick:()=>{o.forEach(e=>{u(e)}),s&&s(o[0])},className:".token-dismiss-button",children:"Import"})]})]})},G=n(12663),ee=n(90755),et=n(11635),en=n(48583),er=n(75059),ei=n(92897);let eo=(0,l.ZP)(c.xuv).withConfig({componentId:"sc-b21c1c00-0"})`
  width: ${e=>{let{width:t}=e;return null!=t?t:"100%"}};
  padding: ${e=>{let{padding:t}=e;return null!=t?t:"1.25rem"}};
  border: ${e=>{let{border:t}=e;return t}};
  border-radius: ${e=>{let{borderRadius:t}=e;return null!=t?t:"16px"}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
`,es=(0,l.ZP)(Z.ZP).withConfig({componentId:"sc-b21c1c00-1"})`
  width: 100%;
  height: 100%;
`,el=(0,l.ZP)(L.ZP).withConfig({componentId:"sc-b21c1c00-2"})`
  background-color: ${e=>{let{active:t,theme:n}=e;return t?`${n.colors.success19}`:"transparent"}};
  border: solid 1px;
  border-color: ${e=>{let{active:t,theme:n}=e;return t?n.colors.success:n.colors.tertiary}};
  transition: 200ms;
  align-items: center;
  padding: 1rem;
  border-radius: 20px;
  opacity: ${e=>{let{hasActiveTokens:t}=e;return t?1:.4}};
`,ec=(0,i.memo)(function(e){var t;let{listUrl:n}=e,{chainId:o}=(0,$.g)(),s=(0,w.EF)(n),l=(0,en.Dv)(w.Ti),[,a]=(0,j.n_)(),{current:d,pendingUpdate:u}=l[n],x=(0,i.useMemo)(()=>d&&o?d.tokens.reduce((e,t)=>t.chainId===o?e+1:e,0):0,[o,d]),h=(0,i.useCallback)(()=>{u&&a((0,k.xJ)(n))},[a,n,u]),p=(0,i.useCallback)(()=>{window.confirm("Please confirm you would like to remove this list")&&a((0,k.J_)(n))},[a,n]),m=(0,i.useCallback)(()=>{a((0,k.ic)(n))},[a,n]),g=(0,i.useCallback)(()=>{a((0,k.K$)(n))},[a,n]),{targetRef:f,tooltip:v,tooltipVisible:b}=(0,ee.lL)((0,r.jsxs)("div",{children:[(0,r.jsx)(c.xvT,{children:d&&(t=d.version,`v${t.major}.${t.minor}.${t.patch}`)}),(0,r.jsx)(c.NRJ,{external:!0,href:`https://tokenlists.org/token-list?url=${n}`,children:"See"}),(0,r.jsx)(c.zxk,{variant:"danger",scale:"xs",onClick:p,disabled:1===Object.keys(l).length,children:"Remove"}),u&&(0,r.jsx)(c.zxk,{variant:"text",onClick:h,style:{fontSize:"12px"},children:"Update list"})]}),{placement:"right-end",trigger:"click"});return d?(0,r.jsxs)(el,{active:s,hasActiveTokens:x>0,id:`list-row-${n.replace(/\./g,"-")}`,children:[b&&v,d.logoURI?(0,r.jsx)(ListLogo,{size:"40px",style:{marginRight:"1rem"},logoURI:d.logoURI,alt:`${d.name} list logo`}):(0,r.jsx)("div",{style:{width:"24px",height:"24px",marginRight:"1rem"}}),(0,r.jsxs)(Z.ZP,{style:{flex:"1"},children:[(0,r.jsx)(L.ZP,{children:(0,r.jsx)(c.xvT,{bold:!0,children:d.name})}),(0,r.jsxs)(L.DA,{mt:"4px",children:[(0,r.jsxs)(c.xvT,{fontSize:"12px",mr:"6px",textTransform:"lowercase",children:[d.tokens.length," Tokens"]}),(0,r.jsx)("span",{ref:f,children:(0,r.jsx)(c.IEm,{color:"text",width:"12px"})})]})]}),(0,r.jsx)(c.ZDl,{checked:s,onChange:()=>{s?g():m()}})]},n):null}),ea=l.ZP.div.withConfig({componentId:"sc-b21c1c00-3"})`
  padding: 1rem 0;
  height: 100%;
  overflow: auto;
`;var SearchModal_ManageLists=function(e){let{setModalView:t,setImportList:n,setListUrl:o}=e,[s,l]=(0,i.useState)(""),{chainId:a}=(0,$.g)(),[,d]=(0,j.n_)(),u=(0,w.R0)(),x=(0,w.v0)(),[h,p]=(0,i.useState)();(0,i.useEffect)(()=>{!h&&x&&p(x)},[h,x]);let m=(0,i.useCallback)(e=>{l(e.target.value)},[]),g=(0,k.jn)(d),f=(0,i.useMemo)(()=>(0,er.Z)(s).length>0,[s]),v=(0,i.useMemo)(()=>{let e=Object.keys(u);return e.filter(e=>{let t=!!u[e].current&&!et.US.includes(e);if(t&&a){var n;return null===(n=et.vv[a])||void 0===n?void 0:n.includes(e)}return!1}).sort((e,t)=>{let{current:n}=u[e],{current:r}=u[t];if((null==h?void 0:h.includes(e))&&!(null==h?void 0:h.includes(t)))return -1;if(!(null==h?void 0:h.includes(e))&&(null==h?void 0:h.includes(t)))return 1;if(n&&r){let e="pancakeswap";return!n.name.toLowerCase().includes(e)&&r.name.toLowerCase().includes(e)?1:n.name.toLowerCase()<r.name.toLowerCase()?-1:n.name.toLowerCase()===r.name.toLowerCase()?0:1}return n?-1:r?1:0})},[u,a,h]),[b,C]=(0,i.useState)(),[y,I]=(0,i.useState)();(0,i.useEffect)(()=>{async function fetchTempList(){g(s,!1).then(e=>C(e)).catch(()=>I("Error importing list"))}f?fetchTempList():(C(void 0),""!==s&&I("Enter valid list location")),""===s&&I(void 0)},[g,s,f]);let T=Object.keys(u).includes(s),S=(0,i.useCallback)(()=>{b&&(n(b),t(ei.Hv.importList),o(s))},[s,n,o,t,b]);return(0,r.jsxs)(es,{children:[(0,r.jsxs)(Z.Tz,{gap:"14px",children:[(0,r.jsx)(L.ZP,{children:(0,r.jsx)(c.IIB,{id:"list-add-input",scale:"lg",placeholder:"https:// or ipfs://",value:s,onChange:m})}),y?(0,r.jsx)(c.xvT,{color:"failure",style:{textOverflow:"ellipsis",overflow:"hidden"},children:y}):null]}),b&&(0,r.jsx)(Z.Tz,{style:{marginTop:8},children:(0,r.jsx)(eo,{padding:"12px 20px",children:(0,r.jsxs)(L.m0,{children:[(0,r.jsxs)(L.DA,{children:[b.logoURI&&(0,r.jsx)(ListLogo,{logoURI:b.logoURI,size:"40px"}),(0,r.jsxs)(Z.Tz,{gap:"4px",style:{marginLeft:"20px"},children:[(0,r.jsx)(c.xvT,{bold:!0,children:b.name}),(0,r.jsxs)(c.xvT,{color:"textSubtle",small:!0,textTransform:"lowercase",children:[b.tokens.length," Tokens"]})]})]}),T?(0,r.jsxs)(L.DA,{children:[(0,r.jsx)(c.KML,{width:"16px",mr:"10px"}),(0,r.jsx)(c.xvT,{children:"Loaded"})]}):(0,r.jsx)(c.zxk,{width:"fit-content",onClick:S,children:"Import"})]})})}),(0,r.jsx)(ea,{children:(0,r.jsx)(Z.Tz,{gap:"md",children:v.map(e=>(0,r.jsx)(ec,{listUrl:e},e))})})]})},ed=n(92252);let eu=l.ZP.div.withConfig({componentId:"sc-eb2222b0-0"})`
  width: 100%;
  height: calc(100% - 60px);
  position: relative;
  padding-bottom: 60px;
`,ex=l.ZP.div.withConfig({componentId:"sc-eb2222b0-1"})`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;function ManageTokens(e){let{setModalView:t,setImportToken:n}=e,{chainId:o}=(0,$.g)(),[s,l]=(0,i.useState)(""),a=(0,i.useRef)(),d=(0,i.useCallback)(e=>{let t=e.target.value,n=(0,T.xP)(t);l(n||t)},[]),u=(0,S.dQ)(s),x=(0,ed.Z)(),h=(0,q.QG)(),p=(0,i.useCallback)(()=>{o&&x&&x.forEach(e=>h(o,e.address))},[h,x,o]),m=(0,i.useMemo)(()=>o&&x.map(e=>(0,r.jsxs)(L.m0,{width:"100%",children:[(0,r.jsxs)(L.DA,{children:[(0,r.jsx)(z.X,{currency:e,size:"20px"}),(0,r.jsx)(c.rUS,{external:!0,href:(0,T.C)(e.address,"address",o),color:"textSubtle",ml:"10px",mr:"3px",children:e.symbol}),(0,r.jsx)("a",{href:(0,T.C)(e.address,"token",o),target:"_blank",rel:"noreferrer noopener",children:(0,r.jsx)(c.a2c,{width:"20px",color:"textSubtle"})})]}),(0,r.jsx)(L.DA,{children:(0,r.jsx)(c.hU,{variant:"text",onClick:()=>h(o,e.address),children:(0,r.jsx)(c.qCY,{color:"textSubtle"})})})]},e.address)),[x,o,h]),g=""===s||(0,T.xP)(s);return(0,r.jsx)(eu,{children:(0,r.jsxs)(Z.ZP,{style:{width:"100%",flex:"1 1"},children:[(0,r.jsxs)(Z.Tz,{gap:"14px",children:[(0,r.jsx)(L.ZP,{children:(0,r.jsx)(c.IIB,{id:"token-search-input",scale:"lg",placeholder:"0x0000",value:s,autoComplete:"off",ref:a,onChange:d,isWarning:!g})}),!g&&(0,r.jsx)(c.xvT,{color:"failure",children:"Enter valid token address"}),u&&(0,r.jsx)(ImportRow,{token:u,showImportView:()=>t(ei.Hv.importToken),setImportToken:n,style:{height:"fit-content"}})]}),m,(0,r.jsxs)(ex,{children:[(0,r.jsxs)(c.xvT,{bold:!0,color:"textSubtle",children:[null==x?void 0:x.length," ",1===x.length?"Imported Token":"Imported Tokens"]}),x.length>0&&(0,r.jsx)(c.zxk,{variant:"tertiary",onClick:p,children:"Clear all"})]})]})})}let eh=(0,l.ZP)(G.xz).withConfig({componentId:"sc-2e756df3-0"})`
  width: 100%;
`;function Manage(e){let{setModalView:t,setImportList:n,setImportToken:s,setListUrl:l}=e,[c,a]=(0,i.useState)(!0);return(0,r.jsxs)(o.fe,{style:{overflow:"visible"},children:[(0,r.jsxs)(eh,{activeIndex:c?0:1,onItemClick:()=>a(e=>!e),scale:"sm",variant:"subtle",mb:"32px",children:[(0,r.jsx)(G.kg,{width:"50%",children:"Lists"}),(0,r.jsx)(G.kg,{width:"50%",children:"Tokens"})]}),c?(0,r.jsx)(SearchModal_ManageLists,{setModalView:t,setImportList:n,setListUrl:l}):(0,r.jsx)(ManageTokens,{setModalView:t,setImportToken:s})]})}let ep=l.ZP.div.withConfig({componentId:"sc-1630974f-0"})`
  width: 100%;
  background-color: ${e=>{let{theme:t}=e;return t.colors.backgroundAlt}};
  text-align: center;
  align-items: center;
`,em=(0,l.ZP)(o.F0).withConfig({componentId:"sc-1630974f-1"})`
  width: 100%;
  min-width: 320px;
  max-width: 420px !important;
  min-height: 500px;
`,eg=(0,l.ZP)(o.fe).withConfig({componentId:"sc-1630974f-2"})`
  padding: 10px 20px 5px 20px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;function CurrencySearchModal(e){var t;let{onDismiss:n=()=>null,onCurrencySelect:s,selectedCurrency:l,otherSelectedCurrency:c,showCommonBases:a=!0,commonBasesType:d,showSearchInput:u,tokensToShow:x}=e,[h,p]=(0,i.useState)(ei.Hv.search),m=(0,i.useCallback)(e=>{null==n||n(),null==s||s(e)},[n,s]),C=(0,b.Z)(h),[y,I]=(0,i.useState)(),[T,$]=(0,i.useState)(),[S,Z]=(0,i.useState)(),[,L]=(0,j.n_)(),P=(0,w.R0)(),z=!!(S&&(null===(t=P[S])||void 0===t?void 0:t.loadingRequestId)),R=(0,k.jn)(L),[D,M]=(0,i.useState)(null),E=(0,i.useCallback)(()=>{!z&&S&&(M(null),R(S).then(()=>{L((0,k.ic)(S)),p(ei.Hv.manage)}).catch(e=>{M(e.message),L((0,k.J_)(S))}))},[z,L,R,S]),A={[ei.Hv.search]:{title:"Select a Token",onBack:void 0},[ei.Hv.manage]:{title:"Manage",onBack:()=>p(ei.Hv.search)},[ei.Hv.importToken]:{title:"Import Tokens",onBack:()=>p(C&&C!==ei.Hv.importToken?C:ei.Hv.search)},[ei.Hv.importList]:{title:"Import List",onBack:()=>p(ei.Hv.search)}},{isMobile:B}=(0,g.SL)(),H=(0,i.useRef)(null),[U,_]=(0,i.useState)(void 0);return(0,i.useEffect)(()=>{H.current&&_(H.current.offsetHeight-330)},[]),(0,r.jsxs)(em,{drag:!!B&&"y",dragConstraints:{top:0,bottom:600},dragElastic:{top:0},dragSnapToOrigin:!0,onDragStart:()=>{H.current&&(H.current.style.animation="none")},onDragEnd:(e,t)=>{t.velocity.y>o.dl&&n&&n()},ref:H,children:[(0,r.jsxs)(o.xB,{children:[(0,r.jsxs)(o.r6,{children:[A[h].onBack&&(0,r.jsx)(o.vy,{onBack:A[h].onBack}),(0,r.jsx)(f.xv,{children:A[h].title})]}),(0,r.jsx)(o.ol,{onDismiss:n})]}),(0,r.jsxs)(eg,{children:[h===ei.Hv.search?(0,r.jsx)(SearchModal_CurrencySearch,{onCurrencySelect:m,selectedCurrency:l,otherSelectedCurrency:c,showCommonBases:a,commonBasesType:d,showSearchInput:u,showImportView:()=>p(ei.Hv.importToken),setImportToken:I,height:U,tokensToShow:x}):h===ei.Hv.importToken&&y?(0,r.jsx)(SearchModal_ImportToken,{tokens:[y],handleCurrencySelect:m}):h===ei.Hv.importList&&T&&S?(0,r.jsx)(ImportList,{onAddList:E,addError:D,listURL:S,listLogoURI:null==T?void 0:T.logoURI,listName:null==T?void 0:T.name,listTokenLength:null==T?void 0:T.tokens.length}):h===ei.Hv.manage?(0,r.jsx)(Manage,{setModalView:p,setImportToken:I,setImportList:$,setListUrl:Z}):"",h===ei.Hv.search&&(0,r.jsx)(ep,{children:(0,r.jsx)(v.zx,{scale:"sm",variant:"text",onClick:()=>p(ei.Hv.manage),className:"list-token-manage-button",children:"Manage Tokens"})})]})]})}},92897:function(e,t,n){var r,i,o,s;n.d(t,{Hv:function(){return r},L0:function(){return i}}),(o=r||(r={}))[o.search=0]="search",o[o.manage=1]="manage",o[o.importToken=2]="importToken",o[o.importList=3]="importList",(s=i||(i={})).LIQUIDITY="LIQUIDITY",s.SWAP_LIMITORDER="SWAP_LIMITORDER"},57081:function(e,t,n){n.d(t,{Z:function(){return useHttpLocations}});var r=n(67294),i=n(75059);function useHttpLocations(e){return(0,r.useMemo)(()=>e?(0,i.Z)(e):[],[e])}},99939:function(e,t,n){var r=n(88306),i=n.n(r),o=n(87752),s=n(61129),l=n(60480);let c={[o.a_.ETHEREUM]:"ethereum"},a=i()(e=>e&&c[e.chainId]&&(0,l.U)(e.address)?`/images/${e.chainId}/tokens/${(0,s.xP)(e.address)}.png`:null,e=>`${null==e?void 0:e.chainId}#${null==e?void 0:e.address}`);i()((e,t)=>e&&t&&c[t]&&(0,l.U)(e)?`https://assets-cdn.trustwallet.com/blockchains/${c[t]}/assets/${(0,s.xP)(e)}/logo.png`:null,(e,t)=>`${t}#${e}`),t.Z=a},75059:function(e,t,n){n.d(t,{Z:function(){return uriToHttp}});function uriToHttp(e){var t,n;let r=e.split(":")[0].toLowerCase();switch(r){case"https":return[e];case"http":return[`https${e.substring(4)}`,e];case"ipfs":let i=null===(t=e.match(/^ipfs:(\/\/)?(.*)$/i))||void 0===t?void 0:t[2];return[`https://cloudflare-ipfs.com/ipfs/${i}/`,`https://ipfs.io/ipfs/${i}/`];case"ipns":let o=null===(n=e.match(/^ipns:(\/\/)?(.*)$/i))||void 0===n?void 0:n[2];return[`https://cloudflare-ipfs.com/ipns/${o}/`,`https://ipfs.io/ipns/${o}/`];default:return[]}}}}]);
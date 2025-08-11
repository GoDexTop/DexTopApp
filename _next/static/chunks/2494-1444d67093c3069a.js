(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2494],{76710:function(e,t,r){"use strict";function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread2(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}r.d(t,{u:function(){return createRuntimeFn}});var shouldApplyCompound=(e,t,r)=>{for(var n of Object.keys(e)){var o;if(e[n]!==(null!==(o=t[n])&&void 0!==o?o:r[n]))return!1}return!0},createRuntimeFn=e=>t=>{var r=e.defaultClassName,n=_objectSpread2(_objectSpread2({},e.defaultVariants),t);for(var o in n){var i,l=null!==(i=n[o])&&void 0!==i?i:e.defaultVariants[o];if(null!=l){var s=l;"boolean"==typeof s&&(s=!0===s?"true":"false");var a=e.variantClassNames[o][s];a&&(r+=" "+a)}}for(var[c,u]of e.compoundVariants)shouldApplyCompound(c,n,e.defaultVariants)&&(r+=" "+u);return r}},42029:function(e,t,r){"use strict";r(20921),r(55709),r(42726)},74145:function(e,t,r){"use strict";r.d(t,{Z:function(){return atomWithStorageWithErrorCatch}});var n=r(95495);function atomWithStorageWithErrorCatch(e,t,r){let o=(0,n.FL)(()=>{let e=r||(()=>window.localStorage),t=null==e?void 0:e();return t?{removeItem:e=>{t.removeItem(e)},getItem:e=>t.getItem(e),setItem:(e,r)=>{try{t.setItem(e,r)}catch(t){console.error(`localStorage error with key ${e}`)}}}:t});return(0,n.O4)(e,t,o)}},78774:function(e,t,r){"use strict";function currencyId(e){var t;if(null==e?void 0:e.isNative)return null===(t=e.symbol)||void 0===t?void 0:t.toUpperCase();if(null==e?void 0:e.isToken)return e.address;throw Error("invalid currency")}r.d(t,{H:function(){return currencyId}}),t.Z=currencyId},75533:function(e,t,r){"use strict";r.d(t,{i:function(){return maxAmountSpend}});var n=r(29928),o=r(51439);function maxAmountSpend(e){var t;if(e)return(null===(t=e.currency)||void 0===t?void 0:t.isNative)?e.quotient>o.Uz?n.ih.fromRawAmount(e.currency,e.quotient-o.Uz):n.ih.fromRawAmount(e.currency,o.iV):e}},6981:function(e,t,r){"use strict";function transactionErrorToUserReadableMessage(e){let t;for(;e;){var r,n,o,i,l,s;t=null!==(l=null!==(i=null!==(o=e.reason)&&void 0!==o?o:null===(r=e.data)||void 0===r?void 0:r.message)&&void 0!==i?i:e.message)&&void 0!==l?l:t,e=null!==(s=e.error)&&void 0!==s?s:null===(n=e.data)||void 0===n?void 0:n.originalError}(null==t?void 0:t.indexOf("execution reverted: "))===0&&(t=t.substring(20));let formatErrorMessage=e=>[e,`(${t})`].join(" ");switch(t){case"PancakeRouter: EXPIRED":return formatErrorMessage("The transaction could not be sent because the deadline has passed. Please check that your transaction deadline is not too low.");case"PancakeRouter: INSUFFICIENT_OUTPUT_AMOUNT":case"PancakeRouter: EXCESSIVE_INPUT_AMOUNT":case"PancakeRouter: INSUFFICIENT_A_AMOUNT":case"PancakeRouter: INSUFFICIENT_B_AMOUNT":case"swapMulti: incorrect user balance":case"Pancake: K":return formatErrorMessage("This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.");case"TransferHelper: TRANSFER_FROM_FAILED":return formatErrorMessage("The input token cannot be transferred. There may be an issue with the input token.");case"Pancake: TRANSFER_FAILED":return formatErrorMessage("The output token cannot be transferred. There may be an issue with the output token.");default:if((null==t?void 0:t.indexOf("undefined is not an object"))!==-1)return console.error(e,t),"An error occurred when trying to execute this operation. You may need to increase your slippage tolerance. If that does not work, there may be an incompatibility with the token you are trading.";return`Unknown error${t?`: "${t}"`:""}. Try increasing your slippage tolerance.`}}r.d(t,{e:function(){return transactionErrorToUserReadableMessage}})},42494:function(e,t,r){"use strict";r.d(t,{Z:function(){return V3Swap}});var n,o,i=r(85893),l=r(19521),s=r(67294),a=r(31258),c=r(18803),u=r(26256),d=r(50535),p=r(75587),m=r(94808),x=r(75760),h=r(29928);r(94654);var g=r(51439);r(32486);var f=r(91592),v=r(27086),b=r(89704),y=r(48583),T=r(11163),j=r(61129),w=r(60491),P=r(87752),I=r(15242),C=r(36100),N=r(82451),A=r(82002),S=r(37122);let U=P.zG.filter(e=>{var t;return(null==e?void 0:e.contracts)&&(null===(t=e.contracts)||void 0===t?void 0:t.ensUniversalResolver)}).map(e=>e.id),k=/^[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?$/,E=/^0x[a-fA-F0-9]{40}$/,useGetENSAddressByName_useGetENSAddressByName=e=>{let{chainId:t}=(0,v.g)(),r=(0,s.useMemo)(()=>!!(t&&U.includes(t)),[t]),{data:n}=function(e={}){let{name:t,query:r={}}=e,n=(0,S.Z)(e),o=(0,A.x)({config:n}),i=function(e,t={}){return{async queryFn({queryKey:t}){let{name:r,scopeKey:n,...o}=t[1];if(!r)throw Error("name is required");return(0,I.O)(e,{...o,name:r})},queryKey:function(e={}){return["ensAddress",(0,C.O)(e)]}(t)}}(n,{...e,chainId:e.chainId??o}),l=!!(t&&(r.enabled??!0));return(0,N.aM)({...r,...i,enabled:l})}({name:e,chainId:t,query:{enabled:void 0!==e&&(k.test(e)||E.test(e))&&r}});return n};r(23714);var $=r(20873),O=r(27486);function useSwapState(){return(0,y.Dv)(O.I)}let z=/^[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?$/,_=/^0x[a-fA-F0-9]{40}$/;var Z=r(59894),D=r(98287),F=r(23568),R=r(75533),M=r(1713),L=r(78774),B=r(19987),V=r(89928),Y=r(92897),X=r(38489);r(85577),r(99625),r(74694),r(95432);var q=r(76710);(0,q.u)({defaultClassName:"_18bcqi21uo _18bcqi22uw",variantClassNames:{error:{true:"_18bcqi21mi",false:"_18bcqi21mu"},showBridgeWarning:{true:"_18bcqi21mc"}},defaultVariants:{},compoundVariants:[]}),(0,q.u)({defaultClassName:"gl26hd9",variantClassNames:{selected:{true:"gl26hda",false:"gl26hdb"}},defaultVariants:{},compoundVariants:[]}),(0,q.u)({defaultClassName:"gl26hd5",variantClassNames:{error:{true:"gl26hd6"},align:{left:"gl26hd7",right:"gl26hd8"}},defaultVariants:{align:"right",error:!1},compoundVariants:[]}),(0,q.u)({defaultClassName:"gl26hdm _18bcqi26 _18bcqi216 _18bcqi22i _18bcqi21pu _18bcqi219c gl26hdl",variantClassNames:{removePadding:{true:"gl26hdn"},noMinHeight:{true:"gl26hdo"}},defaultVariants:{},compoundVariants:[]});var W=r(99228);function useIsWrapping(){let{[p.gN.INPUT]:{currencyId:e},[p.gN.OUTPUT]:{currencyId:t}}=useSwapState(),{typedValue:r}=useSwapState(),n=(0,D.U8)(e),o=(0,D.U8)(t);return(0,W.hN)(n,o,r)}var H=r(13243);function useAllowRecipient(){let[e]=(0,H.zu)(),t=useIsWrapping();return e&&!t}var K=r(7424),G=r(15103),Q=r(74145);let J=(0,Q.Z)("pcs:useStableSwap",!0),ee=(0,Q.Z)("pcs:useV2Swap",!0),et=(0,Q.Z)("pcs:useV3Swap",!0),er=(0,Q.Z)("pcs:useSplitRouting",!0);(0,G.cn)(e=>1===[e(J),e(ee),e(et)].filter(Boolean).length);let en=(0,G.cn)(e=>[e(J),e(ee),e(et),e(er),!e(H.JW)].some(e=>!1===e),(e,t)=>{t(J,!0),t(ee,!0),t(et,!0),t(er,!0),t(H.JW,!1)});var eo=r(32696);function useSlippageAdjustedAmounts(e){let[t]=(0,H.eq)();return(0,s.useMemo)(()=>(0,eo.b5)(e,t),[t,e])}var ei=r(45047);let el=["0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f","0xf164fC0Ec4E93095b804a4795bBe1e041497b92a","0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"];var es=r(76479),ea=r(58722),ec=r(67645),eu=r(57078);r(42029);let logTx=e=>{let{account:t,hash:r,chainId:n}=e;fetch(`/api/_log/${t}/${n}/${r}`)};var ed=r(6981),ep=r(13670),em=r(95946),ex=r(25375);function isZero(e){return/^0x0*$/.test(e)}let TransactionRejectedError=class TransactionRejectedError extends Error{};(n=o||(o={}))[n.INVALID=0]="INVALID",n[n.LOADING=1]="LOADING",n[n.VALID=2]="VALID";var eh=r(77117);let eg=(0,l.ZP)(a.kCb).withConfig({componentId:"sc-cfb1fe05-0"})`
  position: relative;
  flex-direction: column;
  // justify-content: space-between;
  margin-bottom: 1rem;
`;l.ZP.div.withConfig({componentId:"sc-cfb1fe05-1"})`
  padding: 2px;

  ${e=>{let{clickable:t}=e;return t?l.iv`
          :hover {
            cursor: pointer;
            opacity: 0.8;
          }
        `:null}}
`;let ef=(0,l.ZP)(a.xvT).withConfig({componentId:"sc-cfb1fe05-2"})`
  color: ${e=>{let{theme:t,severity:r}=e;return 3===r||4===r?t.colors.warning2:2===r?t.colors.warning:1===r?t.colors.warning:t.colors.success}};
`;l.ZP.button.withConfig({componentId:"sc-cfb1fe05-3"})`
  height: 22px;
  width: 22px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  border: none;
  border-radius: 50%;
  padding: 0.2rem;
  font-size: 0.875rem;
  font-weight: 400;
  margin-left: 0.4rem;
  cursor: pointer;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;

  :hover {
    background-color: ${e=>{let{theme:t}=e;return t.colors.dropdown}};
  }
  :focus {
    background-color: ${e=>{let{theme:t}=e;return t.colors.dropdown}};
    outline: none;
  }
`;let ev=(0,l.ZP)(a.xvT).attrs({ellipsis:!0}).withConfig({componentId:"sc-cfb1fe05-4"})`
  width: 220px;
`;l.ZP.div.withConfig({componentId:"sc-cfb1fe05-5"})`
  background-color: ${e=>{let{theme:t}=e;return`${t.colors.failure33}`}};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  font-size: 0.825rem;
  width: 100%;
  padding: 3rem 1.25rem 1rem 1rem;
  margin-top: -2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.failure}};
  z-index: -1;
  p {
    padding: 0;
    margin: 0;
    font-weight: 500;
  }
`,l.ZP.div.withConfig({componentId:"sc-cfb1fe05-6"})`
  background-color: ${e=>{let{theme:t}=e;return`${t.colors.failure33}`}};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  border-radius: 12px;
  min-width: 48px;
  height: 48px;
`;let eb=(0,l.ZP)(a.Tz7).withConfig({componentId:"sc-cfb1fe05-7"})`
  background-color: ${e=>{let{theme:t}=e;return`${t.colors.warning33}`}};
  padding: 0.5rem;
  border-radius: 12px;
  margin-top: 8px;
`;function FormattedPriceImpact(e){let{priceImpact:t}=e;return(0,i.jsx)(ef,{fontSize:"14px",severity:(0,w.oX)(t),children:t?t.lessThan(g.IS)?"<0.01%":`${t.toFixed(2)}%`:"-"})}let ey=(0,s.memo)(function(e){let{inputAmount:t,outputAmount:r,tradeType:n,slippageAdjustedAmounts:o,priceImpactWithoutFee:l,realizedLPFee:s}=e,c=n===h.YL.EXACT_INPUT;return(0,i.jsxs)(a.Tz7,{style:{padding:"8px"},children:[(0,i.jsxs)(X.m0,{children:[(0,i.jsxs)(X.DA,{children:[(0,i.jsx)(a.xvT,{fontSize:"14px",color:"textSubtle",children:c?"Minimum received":"Maximum sold"}),(0,i.jsx)(a.s6f,{text:"Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.",ml:"4px",placement:"top"})]}),(0,i.jsx)(X.DA,{children:(0,i.jsx)(a.xvT,{fontSize:"14px",children:c?`${(0,V.dN)(o[p.gN.OUTPUT],4)} ${null==r?void 0:r.currency.symbol}`:`${(0,V.dN)(o[p.gN.INPUT],4)} ${null==t?void 0:t.currency.symbol}`})})]}),l&&(0,i.jsxs)(X.m0,{style:{padding:"4px 0 0 0"},children:[(0,i.jsxs)(X.DA,{children:[(0,i.jsx)(a.xvT,{fontSize:"14px",color:"textSubtle",children:"Price Impact"}),(0,i.jsx)(a.s6f,{text:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(a.xvT,{fontSize:"12px",children:"The difference between the market price and estimated price due to trade size."})}),ml:"4px",placement:"top"})]}),(0,i.jsx)(FormattedPriceImpact,{priceImpact:l})]}),s&&(0,i.jsxs)(X.m0,{style:{padding:"4px 0 0 0"},children:[(0,i.jsxs)(X.DA,{children:[(0,i.jsx)(a.xvT,{fontSize:"14px",color:"textSubtle",children:"Trading Fee"}),(0,i.jsx)(a.s6f,{text:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(a.xvT,{fontSize:"12px",mb:"12px",children:"Fee ranging from 1% to 0.01% depending on the pool fee tier."})}),ml:"4px",placement:"top"})]}),(0,i.jsx)(a.xvT,{fontSize:"14px",children:`${(0,V.dN)(s,4)} ${null==t?void 0:t.currency.symbol}`})]})]})});var eT=r(40231),ej=(0,s.memo)(function(e){let{path:t}=e;return(0,i.jsx)(a.kCb,{flexWrap:"wrap",width:"100%",justifyContent:"flex-end",alignItems:"center",children:t.map((e,r)=>{var n;let o=r===t.length-1,l=e.isToken?(0,f.Bv)(e):e;return(0,i.jsxs)(s.Fragment,{children:[(0,i.jsx)(a.kCb,{alignItems:"end",children:(0,i.jsx)(a.xvT,{fontSize:"14px",ml:"0.125rem",mr:"0.125rem",children:null!==(n=null==l?void 0:l.symbol)&&void 0!==n?n:""})}),!o&&(0,i.jsx)(a.XCv,{width:"12px"})]},e.isToken?e.address:"")})})}),ew=r(90755),eP=r(25786),eI=r(32584);let eC=(0,l.ZP)(a.kCb).withConfig({componentId:"sc-424242d7-0"})`
  position: relative;
  flex-direction: row;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 3px;
    border-top: 3px dotted ${e=>{let{theme:t}=e;return t.colors.text}};
    transform: translateY(-50%);
    z-index: 1;
  }

  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    min-width: 400px;
  }
`,eN=(0,l.ZP)(a.xuv).withConfig({componentId:"sc-424242d7-1"})`
  position: relative;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  padding: 2px 4px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.backgroundDisabled}};
  z-index: 2;
  svg,
  img {
    &:first-child {
      margin-bottom: 2px;
      ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
        margin-bottom: 0px;
        margin-right: 2px;
      }
    }
  }
  &.isStableSwap,
  &.highlight {
    background-color: ${e=>{let{theme:t}=e;return t.colors.backgroundDisabled}};
  }
  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    padding: 4px 8px;
  }
`,eA=l.ZP.div.withConfig({componentId:"sc-424242d7-2"})`
  font-size: 14px;
  line-height: 16px;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  position: absolute;
  transform: translateY(-50%);
  white-space: nowrap;
  left: 50%;
  transform: translateX(-50%);
  top: calc(100% + 3px);
  font-weight: ${e=>e.fontWeight||"normal"};

  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    font-size: 16px;
    line-height: 20px;
  }
`,eS=(0,l.ZP)(eI.p).withConfig({componentId:"sc-424242d7-3"})`
  position: relative;
  padding: 2px;
  background: linear-gradient(180deg, #53dee9 0%, rgb(24, 82, 2) 76.22%);
  border-radius: 50%;
  z-index: 2;
  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
`,TokenLogo=e=>{let{currency:t}=e,[r,n]=(0,s.useState)(null);return(0,s.useEffect)(()=>{if("address"in t){let e=`/images/369/tokens/${t.address}.png`,r=new Image;r.src=e,r.onload=()=>{n(e)},r.onerror=()=>{var e;n((e=t.address,`https://tokens.dextop.pro/tokens/${e}.png`))}}else n("https://tokens.dextop.pro/tokens/0xA1077a294dDE1B09bB078844df40758a5D0f9a27.png")},[t]),r?(0,i.jsx)("img",{src:r,alt:`${t.symbol} logo`}):(0,i.jsx)("div",{children:"Loading..."})},eU=(0,s.memo)(function(e){let{isOpen:t,onDismiss:r,routes:n}=e;return(0,i.jsx)(eT.kw,{closeOnOverlayClick:!0,isOpen:t,onDismiss:r,minHeight:"0",children:(0,i.jsx)(eT.u_,{title:(0,i.jsxs)(a.kCb,{justifyContent:"center",children:["Route"," ",(0,i.jsx)(a.s6f,{text:"Routing through these tokens resulted in the best price for your trade.",ml:"4px",placement:"top-start"})]}),style:{minHeight:"0"},bodyPadding:"24px",children:(0,i.jsx)(eP.Tz,{gap:"48px",children:n.map((e,t)=>(0,i.jsx)(ek,{route:e},t))})})})}),ek=(0,s.memo)(function(e){let{route:t}=e,{path:r,pools:n,inputAmount:o,outputAmount:l}=t,{currency:c}=o,{currency:u}=l,{targetRef:d,tooltip:p,tooltipVisible:m}=(0,ew.lL)((0,i.jsx)(a.xvT,{children:c.symbol}),{placement:"right"}),{targetRef:x,tooltip:h,tooltipVisible:g}=(0,ew.lL)((0,i.jsx)(a.xvT,{children:u.symbol}),{placement:"right"}),f=(0,s.useMemo)(()=>{if(r.length<=1)return[];let e=[];for(let t=0;t<r.length-1;t+=1)e.push([r[t],r[t+1]]);return e},[r]),v=f.length>0?f.map((e,t)=>{let[r,o]=e,l=n[t],s=ei.SmartRouter.isV3Pool(l),a=ei.SmartRouter.isV2Pool(l),c=a?`v2_${l.reserve0.currency.symbol}_${l.reserve1.currency.symbol}`:l.address,u=a?"V2":s?`V3 (${(0,eo.rc)(l.fee).toSignificant(6)}%)`:"StableSwap",d=`${r.symbol}/${o.symbol}${s?` (${(0,eo.rc)(l.fee).toSignificant(6)}%)`:""}`;return(0,i.jsx)(PairNode,{pair:e,text:u,className:s?"highlight":"",tooltipText:d},c)}):null;return(0,i.jsx)(eP.Tz,{gap:"24px",children:(0,i.jsxs)(eC,{justifyContent:"space-between",alignItems:"center",children:[(0,i.jsxs)(eS,{size:{xs:"32px",md:"48px"},ref:d,children:[(0,i.jsx)(TokenLogo,{currency:c}),(0,i.jsxs)(eA,{fontWeight:"bold",children:[t.percent,"%"]})]}),m&&p,v,(0,i.jsx)(eS,{size:{xs:"32px",md:"48px"},ref:x,children:(0,i.jsx)(TokenLogo,{currency:u})}),g&&h]})})});function PairNode(e){let{pair:t,text:r,className:n,tooltipText:o}=e,[l,s]=t,a=(0,ew.lL)(o);return(0,i.jsxs)(eN,{className:n,ref:a.targetRef,children:[a.tooltipVisible&&a.tooltip,(0,i.jsx)(eI.p,{size:{xs:"24px",md:"32px"},children:(0,i.jsx)(TokenLogo,{currency:l})}),(0,i.jsx)(eI.p,{size:{xs:"24px",md:"32px"},children:(0,i.jsx)(TokenLogo,{currency:s})}),(0,i.jsx)(eA,{children:r})]})}let eE=(0,l.ZP)(X.m0).withConfig({componentId:"sc-c1233e74-0"})`
  padding: 0 8px 0;
`,e$=(0,s.memo)(function(e){let{routes:t=[]}=e,r=(0,eT.R0)();if(!t.length)return null;let n=t.length;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(eE,{children:[(0,i.jsxs)("span",{style:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(a.xvT,{fontSize:"14px",color:"textSubtle",children:"Route"}),(0,i.jsx)(a.s6f,{text:"Route is automatically calculated based on your routing preference to achieve the best price for your trade.",ml:"4px",placement:"top-start"})]}),(0,i.jsx)(a.xuv,{onClick:r.onOpen,role:"button",children:(0,i.jsxs)("span",{style:{display:"flex",alignItems:"center"},children:[n>1?(0,i.jsxs)(a.xvT,{fontSize:"14px",children:[n," Separate Routes"]}):(0,i.jsx)(RouteComp,{route:t[0]}),(0,i.jsx)(a.hU,{ml:"8px",variant:"text",color:"textSubtle",scale:"xs",children:(0,i.jsx)(a.W1M,{width:"16px",height:"16px",color:"textSubtle"})})]})}),(0,i.jsx)(eU,{...r,routes:t})]})})});function RouteComp(e){let{route:t}=e,{path:r}=t;return(0,i.jsx)(X.m0,{children:(0,i.jsx)(ej,{path:r})})}let eO=l.ZP.div.withConfig({componentId:"sc-417a4c1e-0"})`
  width: 100%;
  border-radius: 20px;

  transform: ${e=>{let{show:t}=e;return t?"translateY(0%)":"translateY(-100%)"}};
  transition: transform 300ms ease-in-out;
`,ez=(0,s.memo)(function(e){let{loaded:t,trade:r}=e,n=useSlippageAdjustedAmounts(null!=r?r:void 0),o=useIsWrapping(),{priceImpactWithoutFee:l,lpFeeAmount:c}=(0,s.useMemo)(()=>(0,eo.U7)(r),[r]),u=(0,s.useMemo)(()=>null==r?void 0:r.routes.some(e=>e.pools.some(ei.SmartRouter.isStablePool)),[r]);if(o||!t||!r)return null;let{inputAmount:d,outputAmount:p,tradeType:m,routes:x}=r;return(0,i.jsx)(eO,{show:t,children:(0,i.jsxs)(a.Tz7,{gap:"0px",children:[(0,i.jsx)(ey,{slippageAdjustedAmounts:n,inputAmount:d,outputAmount:p,tradeType:m,priceImpactWithoutFee:null!=l?l:void 0,realizedLPFee:null!=c?c:void 0,hasStablePair:u}),(0,i.jsx)(e$,{routes:x})]})})});var e_=r(24619),eZ=r(60908),eD=r(36400),eF=r(74906),eR=r(20528),eM=r(69674),eL=r(88051),eB=r(51675),eV=r(92321);let eY=(0,l.ZP)(X.m0).withConfig({componentId:"sc-b6a41b3e-0"})`
  width: 50%;
`,eX=l.ZP.div.withConfig({componentId:"sc-b6a41b3e-1"})`
  min-width: 20px;
  min-height: 20px;
  background-color: ${e=>{let{theme:t,confirmed:r,disabled:n}=e;return n?t.colors.backgroundDisabled:r?t.colors.success:t.colors.primary}};
  border-radius: 50%;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 8px;
  font-size: 12px;
`,eq=l.ZP.div.withConfig({componentId:"sc-b6a41b3e-2"})`
  width: calc(100% - 20px);
  display: flex;
  align-items: center;
`,eW=l.ZP.div.withConfig({componentId:"sc-b6a41b3e-3"})`
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    ${e=>{let{theme:t,prevConfirmed:r,disabled:n}=e;return n?t.colors.backgroundDisabled:r?t.colors.success:t.colors.primary}}
      0%,
    ${e=>{let{theme:t,prevConfirmed:r,disabled:n}=e;return n?t.colors.backgroundDisabled:r?t.colors.primary:t.colors.backgroundDisabled}}
      80%
  );
  opacity: 0.6;
`;function ProgressCircles(e){let{steps:t,disabled:r=!1,...n}=e;return(0,i.jsx)(eP.Tz,{justify:"center",...n,children:(0,i.jsxs)(eY,{children:[t.map((e,n)=>(0,i.jsxs)(eq,{children:[(0,i.jsx)(eX,{confirmed:e,disabled:r||!t[n-1]&&0!==n,children:e?"✓":n+1}),(0,i.jsx)(eW,{prevConfirmed:e,disabled:r})]},n)),(0,i.jsx)(eX,{disabled:r||!t[t.length-1],children:t.length+1})]})})}(0,l.ZP)(a.kCb).withConfig({componentId:"sc-bd25f492-0"})`
  position: relative;
  flex-direction: column;
  // justify-content: space-between;
  // padding: 0.25rem;
`;let eH=l.ZP.div.withConfig({componentId:"sc-bd25f492-1"})`
  padding: 2px;

  ${e=>{let{clickable:t}=e;return t?l.iv`
          :hover {
            cursor: pointer;
            opacity: 0.8;
          }
        `:null}}
`,eK=(0,l.ZP)(a.xvT).withConfig({componentId:"sc-bd25f492-2"})`
  color: ${e=>{let{theme:t,severity:r}=e;return 3===r||4===r?t.colors.failure:2===r?t.colors.warning:1===r?t.colors.text:t.colors.success}};
`,eG=l.ZP.button.withConfig({componentId:"sc-bd25f492-3"})`
  height: 22px;
  width: 22px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  border: none;
  border-radius: 50%;
  padding: 0.2rem;
  font-size: 0.875rem;
  font-weight: 400;
  margin-left: 0.4rem;
  cursor: pointer;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;

  :hover {
    background-color: ${e=>{let{theme:t}=e;return t.colors.dropdown}};
  }
  :focus {
    background-color: ${e=>{let{theme:t}=e;return t.colors.dropdown}};
    outline: none;
  }
`;(0,l.ZP)(a.xvT).attrs({ellipsis:!0}).withConfig({componentId:"sc-bd25f492-4"})`
  width: 220px;
`;let eQ=l.ZP.div.withConfig({componentId:"sc-bd25f492-5"})`
  background-color: ${e=>{let{theme:t}=e;return`${t.colors.failure33}`}};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  font-size: 0.825rem;
  width: 100%;
  padding: 1rem;
  margin-top: 0.5rem;
  color: ${e=>{let{theme:t}=e;return t.colors.failure}};
  z-index: -1;
  p {
    padding: 0;
    margin: 0;
    font-weight: 500;
  }
`,eJ=l.ZP.div.withConfig({componentId:"sc-bd25f492-6"})`
  background-color: ${e=>{let{theme:t}=e;return`${t.colors.failure33}`}};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  border-radius: 12px;
  min-width: 48px;
  height: 48px;
`;function styleds_SwapCallbackError(e){let{error:t}=e;return(0,i.jsxs)(eQ,{children:[(0,i.jsx)(eJ,{children:(0,i.jsx)(a.Pz_,{width:"24px"})}),(0,i.jsx)("p",{style:{fontSize:"16px"},children:t})]})}(0,l.ZP)(eP.Tz).withConfig({componentId:"sc-bd25f492-7"})`
  border-radius: 12px;
  margin-top: 8px;
`;var e0=r(18876),e2=r(31347),e1=r(86832),e4=r(12021);function FormattedPriceImpact_FormattedPriceImpact(e){let{priceImpact:t}=e;return(0,i.jsx)(eK,{fontSize:"14px",severity:(0,w.oX)(t),children:t?t.lessThan(g.IS)?"<0.01%":`${t.toFixed(2)}%`:"-"})}let e5=(0,l.ZP)(a.Tz7).withConfig({componentId:"sc-917cd343-0"})`
  margin-top: 24px;
  padding: 16px;
  border-radius: ${e=>{let{theme:t}=e;return t.radii.default}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
`,e8=(0,s.memo)(function(e){var t,r;let{priceImpact:n,lpFee:o,inputAmount:l,outputAmount:c,tradeType:u,executionPrice:d,slippageAdjustedAmounts:m,isEnoughInputBalance:x,onConfirm:g,swapErrorMessage:f,disabledConfirm:v}=e,[b,y]=(0,s.useState)(!1),T=(0,w.oX)(n);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e5,{children:[(0,i.jsxs)(X.m0,{align:"center",children:[(0,i.jsx)(a.xvT,{fontSize:"14px",children:"Price"}),(0,i.jsxs)(a.xvT,{fontSize:"14px",style:{justifyContent:"center",alignItems:"center",display:"flex",textAlign:"right",paddingLeft:"10px"},children:[(0,eo.Kh)(null!=d?d:void 0,l,c,b),(0,i.jsx)(eG,{onClick:()=>y(!b),children:(0,i.jsx)(a.kFI,{width:"14px"})})]})]}),(0,i.jsxs)(X.m0,{children:[(0,i.jsxs)(X.DA,{children:[(0,i.jsx)(a.xvT,{fontSize:"14px",children:u===h.YL.EXACT_INPUT?"Minimum received":"Maximum sold"}),(0,i.jsx)(a.s6f,{text:"Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.",ml:"4px",placement:"top"})]}),(0,i.jsxs)(X.DA,{children:[(0,i.jsx)(a.xvT,{fontSize:"14px",children:u===h.YL.EXACT_INPUT?null!==(t=(0,V.dN)(m[p.gN.OUTPUT],4))&&void 0!==t?t:"-":null!==(r=(0,V.dN)(m[p.gN.INPUT],4))&&void 0!==r?r:"-"}),(0,i.jsx)(a.xvT,{fontSize:"14px",marginLeft:"4px",children:u===h.YL.EXACT_INPUT?c.currency.symbol:l.currency.symbol})]})]}),(0,i.jsxs)(X.m0,{children:[(0,i.jsxs)(X.DA,{children:[(0,i.jsx)(a.xvT,{fontSize:"14px",children:"Price Impact"}),(0,i.jsx)(a.s6f,{text:"The difference between the market price and your price due to trade size.",ml:"4px",placement:"top"})]}),(0,i.jsx)(FormattedPriceImpact_FormattedPriceImpact,{priceImpact:null!=n?n:void 0})]}),(0,i.jsxs)(X.m0,{children:[(0,i.jsxs)(X.DA,{children:[(0,i.jsx)(a.xvT,{fontSize:"14px",children:"Trading Fee"}),(0,i.jsx)(a.s6f,{text:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.xvT,{children:"Fee ranging from 1% to 0.01% depending on the pool fee tier. You can check the fee tier by clicking the magnifier icon under the “Route” section."}),(0,i.jsx)(a.xvT,{mt:"12px",children:(0,i.jsx)(a.rUS,{style:{display:"inline"},ml:"4px",external:!0,href:"https://info.dextop.pro",children:"Fee Breakdown and Tokenomics"})})]}),ml:"4px",placement:"top"})]}),(0,i.jsx)(a.xvT,{fontSize:"14px",textAlign:"right",children:o?`${(0,V.dN)(o,6)} ${l.currency.symbol}`:"-"})]})]}),(0,i.jsxs)(X.BA,{children:[(0,i.jsx)(a.zxk,{variant:T>2?"danger":"primary",onClick:g,disabled:v,mt:"12px",id:"confirm-swap-or-send",width:"100%",height:"48px",children:T>2||u===h.YL.EXACT_OUTPUT&&!x?"Swap Anyway":"Confirm Swap"}),f?(0,i.jsx)(styleds_SwapCallbackError,{error:f}):null]})]})});var e6=r(90579);function SwapModalHeader(e){let{inputAmount:t,outputAmount:r,tradeType:n,priceImpactWithoutFee:o,slippageAdjustedAmounts:l,isEnoughInputBalance:c,recipient:u,showAcceptChanges:d,onAcceptChanges:m,allowedSlippage:x}=e,g=(0,w.oX)(o),f=d&&n===h.YL.EXACT_OUTPUT&&c?"primary":n!==h.YL.EXACT_OUTPUT||c?"text":"failure",v=n===h.YL.EXACT_INPUT?(0,V.dN)(l[p.gN.OUTPUT],6):(0,V.dN)(l[p.gN.INPUT],6),b=n===h.YL.EXACT_INPUT?r.currency.symbol:t.currency.symbol,y=(0,s.useMemo)(()=>n===h.YL.EXACT_INPUT?`Output is estimated. You will receive at least ${v} ${b} or the transaction will revert.`:`Input is estimated. You will sell at most ${v} ${b} or the transaction will revert.`,[n,v,b]),T=u?(0,ec.Z)(u):"",j=`Output will be sent to ${T}`,[P,I]=j.split(T);return(0,i.jsxs)(eP.Tz,{gap:"md",children:[(0,i.jsxs)(X.m0,{align:"flex-end",children:[(0,i.jsxs)(X.DA,{gap:"4px",children:[(0,i.jsx)(e6.X,{currency:t.currency,size:"24px",style:{marginRight:"12px"}}),(0,i.jsx)(ev,{fontSize:"24px",color:f,children:(0,V.dN)(t,6)})]}),(0,i.jsx)(X.DA,{gap:"0px",children:(0,i.jsx)(a.xvT,{fontSize:"24px",ml:"10px",children:t.currency.symbol})})]}),(0,i.jsx)(X.DA,{children:(0,i.jsx)(a.veu,{width:"16px",ml:"4px"})}),(0,i.jsxs)(X.m0,{align:"flex-end",children:[(0,i.jsxs)(X.DA,{gap:"4px",children:[(0,i.jsx)(e6.X,{currency:r.currency,size:"24px"}),(0,i.jsx)(ev,{fontSize:"24px",color:g>2?"failure":d&&n===h.YL.EXACT_INPUT?"primary":"text",children:(0,V.dN)(r,6)})]}),(0,i.jsx)(X.DA,{children:(0,i.jsx)(a.xvT,{fontSize:"24px",ml:"10px",children:r.currency.symbol})})]}),d?(0,i.jsx)(eb,{justify:"flex-start",gap:"0px",children:(0,i.jsxs)(X.m0,{children:[(0,i.jsxs)(X.DA,{children:[(0,i.jsx)(a.Pz_,{mr:"8px"}),(0,i.jsx)(a.xvT,{bold:!0,children:" Price Updated"})]}),(0,i.jsx)(a.zxk,{height:"36px",onClick:m,children:"Accept"})]})}):null,(0,i.jsxs)(eP.Tz,{justify:"flex-start",gap:"sm",style:{padding:"24px 0 0 0px"},children:[(0,i.jsxs)(X.DA,{style:{width:"100%"},children:[(0,i.jsx)(a.xvT,{color:"secondary",textTransform:"uppercase",children:"Slippage Tolerance"}),(0,i.jsx)(a.xvT,{color:"primary",ml:"auto",textAlign:"end",children:"number"==typeof x?`${(0,w.P4)(x).toFixed(2)}%`:x})]}),n===h.YL.EXACT_OUTPUT&&!c&&(0,i.jsx)(a.xvT,{small:!0,color:"failure",textAlign:"left",style:{width:"100%"},children:"Insufficient input token balance. Your transaction may fail."}),(0,i.jsx)(a.xvT,{small:!0,color:"textSubtle",textAlign:"left",style:{maxWidth:"320px"},children:y})]})]})}let e3=(0,s.memo)(function(e){let{trade:t,originalTrade:r,onAcceptChanges:n,allowedSlippage:o,onConfirm:l,recipient:a,currencyBalances:c}=e,u=(0,s.useMemo)(()=>!!(t&&r&&(t.tradeType!==r.tradeType||!t.inputAmount.currency.equals(r.inputAmount.currency)||!t.inputAmount.equalTo(r.inputAmount)||!t.outputAmount.currency.equals(r.outputAmount.currency)||!t.outputAmount.equalTo(r.outputAmount))),[r,t]),d=(0,s.useMemo)(()=>(0,eo.b5)(t,o),[t,o]),{priceImpactWithoutFee:m,lpFeeAmount:x}=(0,s.useMemo)(()=>(0,eo.U7)(t),[t]),g=(0,s.useMemo)(()=>ei.SmartRouter.getExecutionPrice(t),[t]),f=(0,s.useMemo)(()=>{var e;if((null==t?void 0:t.tradeType)!==h.YL.EXACT_OUTPUT)return!1;let r=!!(c&&c[p.gN.INPUT]),n=r&&(null===(e=c[p.gN.INPUT])||void 0===e?void 0:e.currency.isNative),o=r?n?(0,R.i)(c[p.gN.INPUT]):c[p.gN.INPUT]:null;return!!o&&!!d&&!!d[p.gN.INPUT]&&(o.greaterThan(d[p.gN.INPUT])||o.equalTo(d[p.gN.INPUT]))},[c,t,d]),v=(0,s.useCallback)(()=>t?(0,i.jsx)(SwapModalHeader,{inputAmount:t.inputAmount,outputAmount:t.outputAmount,tradeType:t.tradeType,priceImpactWithoutFee:null!=m?m:void 0,allowedSlippage:o,slippageAdjustedAmounts:d,isEnoughInputBalance:f,recipient:a,showAcceptChanges:u,onAcceptChanges:n}):null,[m,o,n,a,u,t,d,f]),b=(0,s.useCallback)(()=>t?(0,i.jsx)(e8,{tradeType:t.tradeType,inputAmount:t.inputAmount,outputAmount:t.outputAmount,onConfirm:l,lpFee:x,priceImpact:m,executionPrice:g,slippageAdjustedAmounts:d,disabledConfirm:u,isEnoughInputBalance:f}):null,[l,u,f,d,x,m,t,g]);return(0,i.jsx)(e4.p,{topContent:v,bottomContent:b})}),e9=(0,s.memo)(function(e){let{trade:t,originalTrade:r,currencyBalances:n,onAcceptChanges:o,onConfirm:l,onDismiss:a,customOnDismiss:c,swapErrorMessage:u,attemptingTxn:d,txHash:p,openSettingModal:m}=e,{chainId:x}=(0,v.g)(),[h]=(0,H.eq)(),{recipient:g}=useSwapState(),f=(0,s.useCallback)(()=>{c&&c(),null==a||a()},[c,a]),b=d||p?null:u?(0,i.jsx)(e1.h,{onDismiss:a,message:u}):(0,i.jsx)(e3,{trade:t,currencyBalances:n,originalTrade:r,onAcceptChanges:o,allowedSlippage:h,onConfirm:l,recipient:null!=g?g:void 0}),y=(0,s.useMemo)(()=>{var e,r,n,o,i,l,s,a;return`Swapping ${null!==(i=(0,V.dN)(null==t?void 0:t.inputAmount,6))&&void 0!==i?i:""} ${null!==(l=null==t?void 0:null===(r=t.inputAmount)||void 0===r?void 0:null===(e=r.currency)||void 0===e?void 0:e.symbol)&&void 0!==l?l:""} for ${null!==(s=(0,V.dN)(null==t?void 0:t.outputAmount,6))&&void 0!==s?s:""} ${null!==(a=null==t?void 0:null===(o=t.outputAmount)||void 0===o?void 0:null===(n=o.currency)||void 0===n?void 0:n.symbol)&&void 0!==a?a:""}`},[t]);return x?(0,i.jsxs)(eT.u_,{title:"Review Swap",onDismiss:f,bodyPadding:"20px",minWidth:["100%","418px"],children:[d?(0,i.jsx)(e0.P,{pendingText:y}):p?(0,i.jsx)(e2.r,{chainId:x,hash:p}):null,b]}):null}),e7=(0,l.ZP)(a.Zbd).withConfig({componentId:"sc-22b055ed-0"})`
  background-color: ${e=>{let{theme:t}=e;return t.colors.dropdown}};
`,te=(0,eR.h)(eR.Z),tt=(0,s.memo)(function(e){var t,r,n,o,l,c,u;let{trade:d,tradeError:m,tradeLoading:f}=e,{open:v}=(0,e_.k_)(),{address:b}=(0,eV.m)(),[T]=(0,H.zu)(),{typedValue:I,independentField:C,[p.gN.INPUT]:{currencyId:N},[p.gN.OUTPUT]:{currencyId:A}}=useSwapState(),S=(0,D.U8)(N),U=(0,D.U8)(A),{onUserInput:k}=(0,F._)(),{wrapType:E,execute:O,inputError:z}=(0,W.ZP)(S,U,I),_=E!==W.kC.NOT_APPLICABLE,[R,M]=(0,y.KO)(en),L=useSlippageAdjustedAmounts(d),B=ei.cN[null!==(l=null==d?void 0:null===(r=d.inputAmount)||void 0===r?void 0:null===(t=r.currency)||void 0===t?void 0:t.chainId)&&void 0!==l?l:P.a_.ETHEREUM],Y=L[p.gN.INPUT],q=(0,$.K5)(null!=b?b:void 0,[null!=S?S:void 0,null!=U?U:void 0]),K={[p.gN.INPUT]:q[0],[p.gN.OUTPUT]:q[1]},{approvalState:G,approveCallback:Q}=(0,eL.qL)(Y,B),{priceImpactWithoutFee:J}=(0,s.useMemo)(()=>_?{}:(0,eo.U7)(d),[_,d]),ee=function(e,t){var r,n;let o;let{account:i}=(0,Z.Ge)(),{independentField:l,typedValue:s}=useSwapState(),a=null===(r=t[p.gN.INPUT])||void 0===r?void 0:r.currency,c=null===(n=t[p.gN.OUTPUT])||void 0===n?void 0:n.currency,u=useSlippageAdjustedAmounts(null!=e?e:void 0),d=i||null,m=l===p.gN.INPUT,h=m?a:c,g=(0,x.Z)(s,null!=h?h:void 0);i||(o="Connect Wallet"),g||(o=null!=o?o:"Enter an amount"),a&&c||(o=null!=o?o:"Select a token");let f=(0,j.xP)(d);d&&f?(-1!==el.indexOf(f)||e&&e.routes.some(e=>e.path.some(e=>e.isToken&&e.address===f)))&&(o=null!=o?o:"Invalid recipient"):o=null!=o?o:"Enter a recipient";let[v,b]=[t[p.gN.INPUT],u?u[p.gN.INPUT]:null];return v&&b&&v.lessThan(b)&&(o=`Insufficient ${b.currency.symbol} balance`),o}(d,K),et=function(e,t,r){var n,o;let{independentField:i,typedValue:l}=useSwapState(),s=null===(n=t[p.gN.INPUT])||void 0===n?void 0:n.currency,a=null===(o=t[p.gN.OUTPUT])||void 0===o?void 0:o.currency,c=i===p.gN.INPUT,u=c?s:a,d=(0,x.Z)(l,null!=u?u:void 0);return r?{[p.gN.INPUT]:d,[p.gN.OUTPUT]:d}:{[p.gN.INPUT]:i===p.gN.INPUT?d:null==e?void 0:e.inputAmount,[p.gN.OUTPUT]:i===p.gN.OUTPUT?d:null==e?void 0:e.outputAmount}}(d,K,_),er=et[C],[eh]=(0,eB.$)(),{callback:eg,error:ef}=function(e){let{trade:t,deadline:r,feeOptions:n}=e,{account:o,chainId:i}=(0,ea.Z)(),[l]=(0,H.eq)()||[es.gv],a=(0,s.useMemo)(()=>(0,w.P4)(l),[l]),{recipient:c}=useSwapState(),u=null===c?o:c,d=function(e,t,r,n,o){let{account:i,chainId:l}=(0,ea.Z)(),a=useGetENSAddressByName_useGetENSAddressByName(null!=r?r:void 0),c=null===r?i:(0,j.xP)(r)?r:(0,j.xP)(a)?a:null;return(0,s.useMemo)(()=>{if(!e||!c||!i||!l)return[];let r=l?ei.cN[l]:void 0;if(!r)return[];let{value:s,calldata:a}=ei.cH.swapCallParameters(e,{fee:o,recipient:c,slippageTolerance:t,deadlineOrPreviousBlockhash:null==n?void 0:n.toString()});return[{address:r,calldata:a,value:s}]},[i,t,l,n,o,c,e])}(t,a,c,r,n),{callback:p}=function(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=(0,eu.h7)(),{sendTransactionAsync:i}=(0,ex.p)(),l=ep.rk[t],[a]=(0,H.eq)()||[es.gv],{recipient:c}=useSwapState(),u=null===c?e:c;return(0,s.useMemo)(()=>r&&i&&e&&t&&l?{callback:async function(){let s=await Promise.all(n.map(t=>{let{address:r,calldata:n,value:o}=t,i=!o||isZero(o)?{account:e,to:r,data:n,value:0n}:{account:e,to:r,data:n,value:(0,em.y_)(o)};return l.estimateGas(i).then(e=>({call:t,gasEstimate:e})).catch(e=>(console.debug("Gas estimate failed, trying eth_call to extract error",t),{call:t,error:(0,ed.e)(e)}))})),d=s.find((e,t,r)=>"gasEstimate"in e&&(t===r.length-1||"gasEstimate"in r[t+1]));if(!d){let e=s.filter(e=>"error"in e);if(e.length>0)throw e[e.length-1].error;let t=s.find(e=>!("error"in e));if(!t)throw Error("Unexpected error. Could not estimate gas for the swap.");d=t}let{call:{address:p,calldata:m,value:x}}=d;return i({account:e,chainId:t,to:p,data:m,value:x&&!isZero(x)?(0,em.y_)(x):0n,..."gasEstimate"in d?{gas:(0,j.yC)(d.gasEstimate)}:{}}).then(n=>{let i=r.inputAmount.currency.symbol,l=r.outputAmount.currency.symbol,s=(0,w.P4)(a),d=r.tradeType===h.YL.EXACT_INPUT?(0,V.dN)(r.inputAmount,3):(0,V.dN)(ei.SmartRouter.maximumAmountIn(r,s),3),p=r.tradeType===h.YL.EXACT_OUTPUT?(0,V.dN)(r.outputAmount,3):(0,V.dN)(ei.SmartRouter.minimumAmountOut(r,s),3),m=`Swap ${r.tradeType===h.YL.EXACT_OUTPUT?"max.":""} ${d} ${i} for ${r.tradeType===h.YL.EXACT_INPUT?"min.":""} ${p} ${l}`,x=u&&(0,j.xP)(u)?(0,ec.Z)(u):u,g=c===e?m:`${m} to ${x}`,f=r.tradeType===h.YL.EXACT_OUTPUT?c===e?"Swap max. %inputAmount% %inputSymbol% for %outputAmount% %outputSymbol%":"Swap max. %inputAmount% %inputSymbol% for %outputAmount% %outputSymbol% to %recipientAddress%":c===e?"Swap %inputAmount% %inputSymbol% for min. %outputAmount% %outputSymbol%":"Swap %inputAmount% %inputSymbol% for min. %outputAmount% %outputSymbol% to %recipientAddress%";return o({hash:n},{summary:g,translatableSummary:{text:f,data:{inputAmount:null!=d?d:"",inputSymbol:i,outputAmount:null!=p?p:"",outputSymbol:l,...c!==e&&{recipientAddress:x}}},type:"swap"}),logTx({account:e,chainId:t,hash:n}),{hash:n}}).catch(e=>{throw console.error("Swap failed",e,p,m,x),Error(`Swap failed: ${(0,ed.e)(e)}`)})}}:{callback:null},[r,i,e,t,l,n,a,u,c,o])}(o,i,null!=t?t:void 0,d);return(0,s.useMemo)(()=>t&&o&&i&&p?u?{state:2,callback:p}:null!==c?{state:0,error:"Invalid recipient"}:{state:1}:{state:0,error:"Missing dependencies"},[t,o,i,p,u,c])}({trade:d,deadline:eh}),[{tradeToConfirm:ev,swapErrorMessage:eb,attemptingTxn:ey,txHash:ej},ew]=(0,s.useState)({tradeToConfirm:void 0,attemptingTxn:!1,swapErrorMessage:void 0,txHash:void 0}),[eP,eI]=(0,s.useState)(!1),eC=(0,s.useCallback)(()=>{ew({tradeToConfirm:ev,attemptingTxn:ey,swapErrorMessage:eb,txHash:ej}),ej&&k(p.gN.INPUT,"")},[ey,k,eb,ev,ej,ew]),eN=(0,s.useCallback)(()=>{(!J||function(e,t,r){if(!e.lessThan(t)){let e="confirm";return window.prompt(`This swap has a price impact of at least ${t.toFixed(0)}%. Please type the word "${e}" to continue with this swap.`)===e}return!!e.lessThan(r)||window.confirm(`This swap has a price impact of at least ${r.toFixed(0)}%. Please confirm that you would like to continue with this swap.`)}(J,g.EV,g.Uf))&&eg&&(ew({attemptingTxn:!0,tradeToConfirm:ev,swapErrorMessage:void 0,txHash:void 0}),eg().then(e=>{ew({attemptingTxn:!1,tradeToConfirm:ev,swapErrorMessage:void 0,txHash:e.hash})}).catch(e=>{if(e instanceof TransactionRejectedError){eC();return}ew({attemptingTxn:!1,tradeToConfirm:ev,swapErrorMessage:"string"==typeof e?e:e.message,txHash:void 0})}))},[J,eg,ev,ew,eC]),eA=(0,s.useCallback)(()=>{ew({tradeToConfirm:d,swapErrorMessage:eb,txHash:ej,attemptingTxn:ey})},[ey,eb,d,ej,ew]),[eS,eU]=(0,s.useState)(!1),[ek]=(0,eT.dd)((0,i.jsx)(te,{customOnDismiss:()=>eU(!0),mode:eM.a.SWAP_LIQUIDITY})),[eE]=(0,eT.dd)((0,i.jsx)(e9,{trade:d,originalTrade:ev,currencyBalances:K,onAcceptChanges:eA,attemptingTxn:ey,txHash:ej,onConfirm:eN,swapErrorMessage:eb,customOnDismiss:eC,openSettingModal:ek}),!0,!0,"confirmSwapModal"),e$=(0,s.useCallback)(()=>{T?eN():(ew({tradeToConfirm:d,attemptingTxn:!1,swapErrorMessage:void 0,txHash:void 0}),eE())},[T,eN,eE,d]);(0,s.useEffect)(()=>{eS&&(eU(!1),ew(e=>({...e,swapErrorMessage:void 0})),eE())},[eS,eE,ew]),(0,s.useEffect)(()=>{eI(!1)},[null==d?void 0:null===(n=d.inputAmount)||void 0===n?void 0:n.currency]),(0,s.useEffect)(()=>{G===eL.UK.PENDING&&eI(!0)},[G,eP]);let eO=(0,w.oX)(J);if(!b)return(0,i.jsx)(a.zxk,{width:"100%",variant:"primary",height:"58px",onClick:()=>v(),children:(0,i.jsx)(a.xvT,{fontSize:"20px",children:"Connect Wallet"})});if(_)return(0,i.jsx)(eD.A,{width:"100%",disabled:!!z,onClick:O,children:null!=z?z:E===W.kC.WRAP?"Wrap":E===W.kC.UNWRAP?"Unwrap":null});let ez=!((null!==(c=null==d?void 0:null===(o=d.routes)||void 0===o?void 0:o.length)&&void 0!==c?c:0)>0)||m,eR=!!(S&&U&&(null==er?void 0:er.greaterThan(g.iV)));if(ez&&eR&&!f)return(0,i.jsx)(a.Tz7,{gap:"12px",children:(0,i.jsx)(e7,{style:{textAlign:"center",padding:"0.75rem"},children:(0,i.jsx)(a.xvT,{color:"textSubtle",children:"Insufficient liquidity for this trade."})})});let eY=!ee&&(G===eL.UK.NOT_APPROVED||G===eL.UK.PENDING||eP&&G===eL.UK.APPROVED)&&!(eO>3&&!T),eX=!ee&&!f,eq=G===eL.UK.APPROVED,eW=eY?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(X.m0,{children:[(0,i.jsx)(eD.A,{variant:G===eL.UK.APPROVED?"success":"primary",onClick:Q,disabled:G!==eL.UK.NOT_APPROVED||eP,width:"48%",height:"56px",children:G===eL.UK.PENDING?(0,i.jsxs)(X.BA,{gap:"6px",justify:"center",children:["Enabling ",(0,i.jsx)(eF.Z,{stroke:"white"})]}):eP&&eq?"Enabled":`Enable ${null!==(u=null==S?void 0:S.symbol)&&void 0!==u?u:""}`}),(0,i.jsx)(eD.A,{variant:eX&&eO>2?"danger":"primary",onClick:()=>{e$()},width:"48%",height:"56px",id:"swap-button",disabled:!eX||!eq||eO>3&&!T,children:f&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(eZ.Z,{children:"Searching For The Best Price"})})||(eO>3&&!T?"Price Impact High":eO>2?"Swap Anyway":"Swap")})]}),(0,i.jsx)(a.sgG,{style:{marginTop:"1rem"},children:(0,i.jsx)(ProgressCircles,{steps:[G===eL.UK.APPROVED]})}),T&&eb?(0,i.jsx)(styleds_SwapCallbackError,{error:eb}):null]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(eD.A,{variant:eX&&eO>2&&!ef?"danger":"primary",onClick:()=>{e$()},id:"swap-button",width:"100%",height:"56px",disabled:!eX||eO>3&&!T||!!ef||!eq,children:ee||f&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(eZ.Z,{children:"Searching For The Best Price"})})||(eO>3&&!T?"Price Impact Too High":eO>2?"Swap Anyway":"Swap")}),T&&eb?(0,i.jsx)(styleds_SwapCallbackError,{error:eb}):null]});return(0,i.jsx)(a.xuv,{mt:"0.25rem",children:eW})}),tr=l.ZP.div.withConfig({componentId:"sc-a29a15ae-0"})`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  border-radius: 8px;
  // background-color: ${e=>{let{theme:t}=e;return t.colors.backgroundAlt}};
  z-index: 1;
  width: 100%;
  padding-bottom: 20px;
`,tn=l.ZP.div.withConfig({componentId:"sc-a29a15ae-1"})`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius:8px;
  border: 2px solid ${e=>{let{error:t,theme:r}=e;return t?r.colors.failure:r.colors.cardBorder}};
  transition: border-color 300ms ${e=>{let{error:t}=e;return t?"step-end":"step-start"}},
    color 500ms ${e=>{let{error:t}=e;return t?"step-end":"step-start"}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.input}};
`,to=l.ZP.div.withConfig({componentId:"sc-a29a15ae-2"})`
  flex: 1;
  padding: 1rem;
`,ti=l.ZP.input.withConfig({componentId:"sc-a29a15ae-3"})`
  font-size: 1.25rem;
  outline: none;
  border: none;
  flex: 1 1 auto;
  background-color: ${e=>{let{theme:t}=e;return t.colors.backgroundAlt}};
  transition: color 300ms ${e=>{let{error:t}=e;return t?"step-end":"step-start"}};
  color: ${e=>{let{error:t,theme:r}=e;return t?r.colors.failure:r.colors.primary}};
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  width: 100%;
  ::placeholder {
    color: ${e=>{let{theme:t}=e;return t.colors.textDisabled}};
  }
  padding: 0px;
  -webkit-appearance: textfield;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${e=>{let{theme:t}=e;return t.colors.textDisabled}};
  }
`;function AddressInputPanel(e){let{id:t,value:r,onChange:n}=e,{chainId:o}=(0,v.g)(),l=(0,j.xP)(r)?r:void 0,c=(0,s.useCallback)(e=>{let t=e.target.value,r=t.replace(/\s+/g,"");n(r)},[n]),u=!!(r.length>0&&!l);return(0,i.jsx)(tr,{id:t,children:(0,i.jsx)(tn,{error:u,children:(0,i.jsx)(to,{children:(0,i.jsxs)(eP.Tz,{gap:"md",children:[(0,i.jsxs)(X.m0,{children:[(0,i.jsx)(a.xvT,{small:!0,children:"Recipient"}),l&&o&&(0,i.jsxs)(a.rUS,{external:!0,small:!0,href:(0,j.C)(l,"address",o),children:["(",`View on ${(0,j.X0)(o)}`,o===P.a_.ETHEREUM&&(0,i.jsx)(a.a2c,{color:"primary",ml:"4px"}),")"]})]}),(0,i.jsx)(ti,{className:"recipient-address-input",type:"text",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:"Wallet Address",error:u,pattern:"^(0x[a-fA-F0-9]{40})$",onChange:c,value:r})]})})})})}let tl=(0,s.memo)(function(){let{recipient:e}=useSwapState(),{onChangeRecipient:t}=(0,F._)(),r=useAllowRecipient();return r&&null!==e?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(X.BA,{justify:"space-between",style:{padding:"0 1rem"},children:[(0,i.jsx)(eH,{clickable:!1,children:(0,i.jsx)(a.veu,{width:"16px"})}),(0,i.jsx)(a.zxk,{variant:"text",id:"remove-recipient-button",onClick:()=>t(null),children:"'- Remove send'"})]}),(0,i.jsx)(AddressInputPanel,{id:"recipient",value:e,onChange:t})]}):null});(0,l.ZP)(a.xuv).withConfig({componentId:"sc-a01483a3-0"})`
  // background: rgb(27, 28, 29);
  border-radius: 8px;
`,(0,l.ZP)(a.xuv).withConfig({componentId:"sc-a01483a3-1"})`
  padding: 9px 0;
  border-radius: 8px;
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.textDisabled}};
`;var V3Swap=function(){let{isLoading:e,trade:t,error:r}=function(){let{maxHops:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{independentField:t,typedValue:r,[p.gN.INPUT]:{currencyId:n},[p.gN.OUTPUT]:{currencyId:o}}=useSwapState(),i=(0,D.U8)(n),l=(0,D.U8)(o),a=t===p.gN.INPUT,c=a?i:l,u=a?l:i,d=a?h.YL.EXACT_INPUT:h.YL.EXACT_OUTPUT,m=(0,x.Z)(r,null!=c?c:void 0),[g]=(0,H.RO)(),[f]=(0,y.KO)(er),[v]=(0,y.KO)(ee),[b]=(0,y.KO)(et),[T]=(0,y.KO)(J),{isLoading:j,trade:w,refresh:P,syncing:I,isStale:C,error:N}=(0,K.ZU)({amount:m,currency:null!=u?u:void 0,baseCurrency:null!=c?c:void 0,tradeType:d,maxHops:g?1:e,maxSplits:f?void 0:0,v2Swap:v,v3Swap:b,stableSwap:T,type:"auto"});return{refresh:P,syncing:I,isStale:C,error:N,isLoading:(0,s.useDeferredValue)(j||r&&!w&&!N),trade:r?w:null}}(),n=!e,{account:o}=(0,Z.Ge)(),[l,g]=[null==t?void 0:t.inputAmount,null==t?void 0:t.outputAmount],{recipient:f,independentField:w,typedValue:P,[p.gN.INPUT]:{currencyId:I},[p.gN.OUTPUT]:{currencyId:C}}=useSwapState(),N=useIsWrapping(),A=(0,D.U8)(I),S=(0,D.U8)(C),{onSwitchTokens:U,onCurrencySelection:k,onUserInput:E,onChangeRecipient:q}=(0,F._)(),[W]=(0,$.K5)(o,[A,S]),G=(0,s.useMemo)(()=>(0,R.i)(W),[W]);!function(){let{chainId:e}=(0,v.g)(),[,t]=(0,y.KO)(O.I),r=(0,b.Z)(),{query:n}=(0,T.useRouter)(),[o,i]=(0,s.useState)();(0,s.useEffect)(()=>{var o;if(!e||!r||!m.p$[e])return;let l=function(e,t,r){var n,o;let i=(0,j.xP)(e.inputCurrency)||(null!=t?t:"PLS"),l="string"==typeof e.outputCurrency?(0,j.xP)(e.outputCurrency)||t:null!=r?r:m.Jb.address;i===l&&("string"==typeof e.outputCurrency?i="":l="");let s=function(e){if("string"!=typeof e)return null;let t=(0,j.xP)(e);return t||(z.test(e)||_.test(e)?e:null)}(e.recipient);return{[p.gN.INPUT]:{currencyId:i},[p.gN.OUTPUT]:{currencyId:l},typedValue:"string"!=typeof(n=e.exactAmount)||Number.isNaN(parseFloat(n))?"":n,independentField:"string"==typeof(o=e.exactField)&&"output"===o.toLowerCase()?p.gN.OUTPUT:p.gN.INPUT,recipient:s}}(n,r.symbol,null===(o=m.p$[e])||void 0===o?void 0:o.address);t((0,p.mV)({typedValue:l.typedValue,field:l.independentField,inputCurrencyId:l[p.gN.INPUT].currencyId,outputCurrencyId:l[p.gN.OUTPUT].currencyId,recipient:null})),i({inputCurrencyId:l[p.gN.INPUT].currencyId,outputCurrencyId:l[p.gN.OUTPUT].currencyId})},[t,e,n,r])}();let Q=(0,s.useCallback)(e=>E(p.gN.INPUT,e),[E]),en=(0,s.useCallback)(e=>E(p.gN.OUTPUT,e),[E]),eo=(0,s.useCallback)(e=>{G&&E(p.gN.INPUT,G.multiply(new M.gG(e,100)).toExact())},[G,E]),ei=(0,s.useCallback)(()=>{G&&E(p.gN.INPUT,G.toExact())},[G,E]),el=(0,s.useCallback)((e,t,r,n)=>{k(t,e);let o=t===p.gN.INPUT,i=o?r:n,l=o?n:r,s=(0,L.Z)(e);s===l&&(0,B.Z)(o?"outputCurrency":"inputCurrency",i),(0,B.Z)(o?"inputCurrency":"outputCurrency",s)},[k]),es=(0,s.useCallback)(e=>el(e,p.gN.INPUT,null!=I?I:"",null!=C?C:""),[el,I,C]),ea=(0,s.useCallback)(e=>el(e,p.gN.OUTPUT,null!=I?I:"",null!=C?C:""),[el,I,C]),ec=w===p.gN.INPUT,eu=(0,s.useMemo)(()=>P&&(ec?P:(0,V.dN)(l)||""),[P,ec,l]),ed=(0,s.useMemo)(()=>P&&(ec?(0,V.dN)(g)||"":P),[P,ec,g]),ep=useAllowRecipient();return(0,i.jsx)(c.Z,{children:(0,i.jsx)(a.kCb,{justifyContent:"center",mt:"40px",children:(0,i.jsxs)(u.j,{children:[(0,i.jsx)(eh.Z,{title:"Swap"}),(0,i.jsxs)(eg,{id:"swap-page",position:"relative",children:[(0,i.jsx)(d.Z,{label:ec||N?"From":"From (estimated)",value:N?P:eu,showMaxButton:!0,maxAmount:G,showQuickInputButton:!0,currency:A,onUserInput:Q,onPercentInput:eo,onMax:ei,onCurrencySelect:es,otherCurrency:S,id:"swap-currency-input",showCommonBases:!0,showBUSD:!0,commonBasesType:Y.L0.SWAP_LIMITORDER}),(0,i.jsxs)(X.BA,{justify:"center",my:"8px",mx:"auto",zIndex:"2",children:[(0,i.jsxs)(a.hU,{className:"gl26hd2 gl26hd1",variant:"text",onClick:()=>{U(),(0,B.Z)("inputCurrency",C),(0,B.Z)("outputCurrency",I)},width:"15px",height:"15px",children:[(0,i.jsx)(a.veu,{className:"gl26hd3",color:"primary"}),(0,i.jsx)(a.Wpj,{className:"gl26hd4",color:"primary"})]}),ep&&null===f?(0,i.jsx)(a.zxk,{variant:"text",id:"add-recipient-button",onClick:()=>q(""),children:"+ Add a send (optional)"}):null]}),(0,i.jsx)(d.Z,{value:N?P:ed,onUserInput:en,label:ec&&!N?"To (estimated)":"To",showMaxButton:!1,currency:S,onCurrencySelect:ea,otherCurrency:A,id:"swap-currency-output",showCommonBases:!0,showBUSD:!0,commonBasesType:Y.L0.SWAP_LIMITORDER})]}),(0,i.jsx)(tl,{}),(0,i.jsx)(tt,{trade:null!=t?t:void 0,tradeError:null!=r?r:void 0,tradeLoading:!n}),(0,i.jsx)(ez,{loaded:n,trade:t})]})})})}},77117:function(e,t,r){"use strict";r.d(t,{Z:function(){return components_CurrencyInputHeader}});var n=r(85893),o=r(31258),i=r(78108),l=r(32584);r(32692),r(64029);let CurrencyInputHeader=e=>{let{title:t,subtitle:r}=e;return(0,n.jsxs)(l.p,{width:"100%",alignItems:"center",flexDirection:"column",pb:"12px",children:[(0,n.jsx)(l.p,{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between",children:t}),r]})};var s=r(69674),a=r(11163),components_CurrencyInputHeader=e=>{let{title:t}=e,r=(0,a.useRouter)(),l=(0,n.jsxs)(o.kCb,{width:"100%",alignItems:"center",justifyContent:"space-between",flexDirection:"row",children:[(0,n.jsx)(o.kCb,{justifyContent:"end",children:(0,n.jsx)(i.Z,{color:"textSubtle",mr:"0",mode:s.a.SWAP_LIQUIDITY})}),(0,n.jsx)(o.zxk,{as:o.aBH,to:"/swap",variant:"/swap"===r.pathname?"text":"subtle",width:"75%",height:"36px",children:"Swap"}),(0,n.jsx)(o.zxk,{as:o.aBH,to:"/pool",variant:"/pool"===r.pathname?"text":"subtle",width:"100%",height:"36px",children:"Liquidity"})]});return(0,n.jsx)(CurrencyInputHeader,{title:l,subtitle:(0,n.jsx)(n.Fragment,{})})}},86832:function(e,t,r){"use strict";r.d(t,{h:function(){return TransactionErrorContent}});var n=r(85893),o=r(19521),i=r(31258),l=r(35275);let s=o.ZP.div.withConfig({componentId:"sc-1e1e6c20-0"})`
  width: 100%;
`;function TransactionErrorContent(e){let{message:t,onDismiss:r}=e;return(0,n.jsxs)(s,{children:[(0,n.jsxs)(l.Tz,{justify:"center",children:[(0,n.jsx)(i.Pz_,{color:"failure",width:"64px"}),(0,n.jsx)(i.xvT,{color:"failure",style:{textAlign:"center",width:"85%",wordBreak:"break-word"},children:(null==t?void 0:t.toString().includes("User rejected the request"))?"User rejected the request":t})]}),r?(0,n.jsx)(i.kCb,{justifyContent:"center",pt:"24px",children:(0,n.jsx)(i.zxk,{onClick:r,scale:"md",variant:"tertiary",children:"Dismiss"})}):null]})}},95432:function(){},25375:function(e,t,r){"use strict";r.d(t,{p:function(){return useSendTransaction}});var n=r(98029),o=r(66357),i=r(37122);function useSendTransaction(e={}){let{mutation:t}=e,r=(0,i.Z)(e),{mutate:l,mutateAsync:s,...a}=(0,n.D)({...t,mutationFn:e=>(0,o.T)(r,e),mutationKey:["sendTransaction"]});return{...a,sendTransaction:l,sendTransactionAsync:s}}}}]);
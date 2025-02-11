(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2494],{76710:function(e,t,r){"use strict";function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread2(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}r.d(t,{u:function(){return createRuntimeFn}});var shouldApplyCompound=(e,t,r)=>{for(var n of Object.keys(e)){var i;if(e[n]!==(null!==(i=t[n])&&void 0!==i?i:r[n]))return!1}return!0},createRuntimeFn=e=>t=>{var r=e.defaultClassName,n=_objectSpread2(_objectSpread2({},e.defaultVariants),t);for(var i in n){var o,s=null!==(o=n[i])&&void 0!==o?o:e.defaultVariants[i];if(null!=s){var l=s;"boolean"==typeof l&&(l=!0===l?"true":"false");var a=e.variantClassNames[i][l];a&&(r+=" "+a)}}for(var[u,c]of e.compoundVariants)shouldApplyCompound(u,n,e.defaultVariants)&&(r+=" "+c);return r}},42029:function(e,t,r){"use strict";r(20921),r(55709),r(42726)},74145:function(e,t,r){"use strict";r.d(t,{Z:function(){return atomWithStorageWithErrorCatch}});var n=r(95495);function atomWithStorageWithErrorCatch(e,t,r){let i=(0,n.FL)(()=>{let e=r||(()=>window.localStorage),t=null==e?void 0:e();return t?{removeItem:e=>{t.removeItem(e)},getItem:e=>t.getItem(e),setItem:(e,r)=>{try{t.setItem(e,r)}catch(t){console.error(`localStorage error with key ${e}`)}}}:t});return(0,n.O4)(e,t,i)}},78774:function(e,t,r){"use strict";function currencyId(e){var t;if(null==e?void 0:e.isNative)return null===(t=e.symbol)||void 0===t?void 0:t.toUpperCase();if(null==e?void 0:e.isToken)return e.address;throw Error("invalid currency")}r.d(t,{H:function(){return currencyId}}),t.Z=currencyId},75533:function(e,t,r){"use strict";r.d(t,{i:function(){return maxAmountSpend}});var n=r(29928),i=r(51439);function maxAmountSpend(e){var t;if(e)return(null===(t=e.currency)||void 0===t?void 0:t.isNative)?e.quotient>i.Uz?n.ih.fromRawAmount(e.currency,e.quotient-i.Uz):n.ih.fromRawAmount(e.currency,i.iV):e}},6981:function(e,t,r){"use strict";function transactionErrorToUserReadableMessage(e){let t;for(;e;){var r,n,i,o,s,l;t=null!==(s=null!==(o=null!==(i=e.reason)&&void 0!==i?i:null===(r=e.data)||void 0===r?void 0:r.message)&&void 0!==o?o:e.message)&&void 0!==s?s:t,e=null!==(l=e.error)&&void 0!==l?l:null===(n=e.data)||void 0===n?void 0:n.originalError}(null==t?void 0:t.indexOf("execution reverted: "))===0&&(t=t.substring(20));let formatErrorMessage=e=>[e,`(${t})`].join(" ");switch(t){case"PancakeRouter: EXPIRED":return formatErrorMessage("The transaction could not be sent because the deadline has passed. Please check that your transaction deadline is not too low.");case"PancakeRouter: INSUFFICIENT_OUTPUT_AMOUNT":case"PancakeRouter: EXCESSIVE_INPUT_AMOUNT":case"PancakeRouter: INSUFFICIENT_A_AMOUNT":case"PancakeRouter: INSUFFICIENT_B_AMOUNT":case"swapMulti: incorrect user balance":case"Pancake: K":return formatErrorMessage("This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.");case"TransferHelper: TRANSFER_FROM_FAILED":return formatErrorMessage("The input token cannot be transferred. There may be an issue with the input token.");case"Pancake: TRANSFER_FAILED":return formatErrorMessage("The output token cannot be transferred. There may be an issue with the output token.");default:if((null==t?void 0:t.indexOf("undefined is not an object"))!==-1)return console.error(e,t),"An error occurred when trying to execute this operation. You may need to increase your slippage tolerance. If that does not work, there may be an incompatibility with the token you are trading.";return`Unknown error${t?`: "${t}"`:""}. Try increasing your slippage tolerance.`}}r.d(t,{e:function(){return transactionErrorToUserReadableMessage}})},42494:function(e,t,r){"use strict";r.d(t,{Z:function(){return V3Swap}});var n,i,o=r(85893),s=r(19521),l=r(67294),a=r(87619),u=r(18803),c=r(26256),d=r(50535),p=r(75587),m=r(94808),x=r(75760),h=r(29928);r(94654);var g=r(51439);r(32486);var f=r(91592),b=r(27086),v=r(89704),y=r(48583),T=r(11163),j=r(61129),w=r(60491),P=r(87752),I=r(15242),C=r(36100),N=r(82451),A=r(82002),S=r(37122);let U=P.zG.filter(e=>{var t;return(null==e?void 0:e.contracts)&&(null===(t=e.contracts)||void 0===t?void 0:t.ensUniversalResolver)}).map(e=>e.id),k=/^[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?$/,E=/^0x[a-fA-F0-9]{40}$/,useGetENSAddressByName_useGetENSAddressByName=e=>{let{chainId:t}=(0,b.g)(),r=(0,l.useMemo)(()=>!!(t&&U.includes(t)),[t]),{data:n}=function(e={}){let{name:t,query:r={}}=e,n=(0,S.Z)(e),i=(0,A.x)({config:n}),o=function(e,t={}){return{async queryFn({queryKey:t}){let{name:r,scopeKey:n,...i}=t[1];if(!r)throw Error("name is required");return(0,I.O)(e,{...i,name:r})},queryKey:function(e={}){return["ensAddress",(0,C.O)(e)]}(t)}}(n,{...e,chainId:e.chainId??i}),s=!!(t&&(r.enabled??!0));return(0,N.aM)({...r,...o,enabled:s})}({name:e,chainId:t,query:{enabled:void 0!==e&&(k.test(e)||E.test(e))&&r}});return n};r(23714);var $=r(20873),O=r(27486);function useSwapState(){return(0,y.Dv)(O.I)}let z=/^[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?$/,_=/^0x[a-fA-F0-9]{40}$/;var Z=r(21649),M=r(98287),R=r(23568),D=r(75533),F=r(1713),L=r(78774),V=r(19987),B=r(89928),Y=r(92897),X=r(38489);r(85577),r(65843),r(64434),r(68158);var q=r(76710);(0,q.u)({defaultClassName:"_18bcqi21uo _18bcqi22uw",variantClassNames:{error:{true:"_18bcqi21mi",false:"_18bcqi21mu"},showBridgeWarning:{true:"_18bcqi21mc"}},defaultVariants:{},compoundVariants:[]}),(0,q.u)({defaultClassName:"gl26hd9",variantClassNames:{selected:{true:"gl26hda",false:"gl26hdb"}},defaultVariants:{},compoundVariants:[]}),(0,q.u)({defaultClassName:"gl26hd5",variantClassNames:{error:{true:"gl26hd6"},align:{left:"gl26hd7",right:"gl26hd8"}},defaultVariants:{align:"right",error:!1},compoundVariants:[]}),(0,q.u)({defaultClassName:"gl26hdm _18bcqi26 _18bcqi216 _18bcqi22i _18bcqi21pu _18bcqi219c gl26hdl",variantClassNames:{removePadding:{true:"gl26hdn"},noMinHeight:{true:"gl26hdo"}},defaultVariants:{},compoundVariants:[]});var W=r(99228);function useIsWrapping(){let{[p.gN.INPUT]:{currencyId:e},[p.gN.OUTPUT]:{currencyId:t}}=useSwapState(),{typedValue:r}=useSwapState(),n=(0,M.U8)(e),i=(0,M.U8)(t);return(0,W.hN)(n,i,r)}var K=r(13243);function useAllowRecipient(){let[e]=(0,K.zu)(),t=useIsWrapping();return e&&!t}var H=r(7424),G=r(15103),Q=r(74145);let J=(0,Q.Z)("pcs:useStableSwap",!0),ee=(0,Q.Z)("pcs:useV2Swap",!0),et=(0,Q.Z)("pcs:useV3Swap",!0),er=(0,Q.Z)("pcs:useSplitRouting",!0);(0,G.cn)(e=>1===[e(J),e(ee),e(et)].filter(Boolean).length);let en=(0,G.cn)(e=>[e(J),e(ee),e(et),e(er),!e(K.JW)].some(e=>!1===e),(e,t)=>{t(J,!0),t(ee,!0),t(et,!0),t(er,!0),t(K.JW,!1)});var ei=r(32696);function useSlippageAdjustedAmounts(e){let[t]=(0,K.eq)();return(0,l.useMemo)(()=>(0,ei.b5)(e,t),[t,e])}var eo=r(45047);let es=["0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f","0xf164fC0Ec4E93095b804a4795bBe1e041497b92a","0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"];var el=r(76479),ea=r(58722),eu=r(67645),ec=r(57078);r(42029);let logTx=e=>{let{account:t,hash:r,chainId:n}=e;fetch(`/api/_log/${t}/${n}/${r}`)};var ed=r(6981),ep=r(13670),em=r(95946),ex=r(25375);function isZero(e){return/^0x0*$/.test(e)}let TransactionRejectedError=class TransactionRejectedError extends Error{};(n=i||(i={}))[n.INVALID=0]="INVALID",n[n.LOADING=1]="LOADING",n[n.VALID=2]="VALID";var eh=r(77117);let eg=(0,s.ZP)(a.kCb).withConfig({componentId:"sc-cfb1fe05-0"})`
  position: relative;
  flex-direction: column;
  // justify-content: space-between;
  margin-bottom: 1rem;
`;s.ZP.div.withConfig({componentId:"sc-cfb1fe05-1"})`
  padding: 2px;

  ${e=>{let{clickable:t}=e;return t?s.iv`
          :hover {
            cursor: pointer;
            opacity: 0.8;
          }
        `:null}}
`;let ef=(0,s.ZP)(a.xvT).withConfig({componentId:"sc-cfb1fe05-2"})`
  color: ${e=>{let{theme:t,severity:r}=e;return 3===r||4===r?t.colors.warning2:2===r?t.colors.warning:1===r?t.colors.warning:t.colors.success}};
`;s.ZP.button.withConfig({componentId:"sc-cfb1fe05-3"})`
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
`;let eb=(0,s.ZP)(a.xvT).attrs({ellipsis:!0}).withConfig({componentId:"sc-cfb1fe05-4"})`
  width: 220px;
`;s.ZP.div.withConfig({componentId:"sc-cfb1fe05-5"})`
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
`,s.ZP.div.withConfig({componentId:"sc-cfb1fe05-6"})`
  background-color: ${e=>{let{theme:t}=e;return`${t.colors.failure33}`}};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  border-radius: 12px;
  min-width: 48px;
  height: 48px;
`;let ev=(0,s.ZP)(a.Tz7).withConfig({componentId:"sc-cfb1fe05-7"})`
  background-color: ${e=>{let{theme:t}=e;return`${t.colors.warning33}`}};
  padding: 0.5rem;
  border-radius: 12px;
  margin-top: 8px;
`;function FormattedPriceImpact(e){let{priceImpact:t}=e;return(0,o.jsx)(ef,{fontSize:"14px",severity:(0,w.oX)(t),children:t?t.lessThan(g.IS)?"<0.01%":`${t.toFixed(2)}%`:"-"})}let ey=(0,l.memo)(function(e){let{inputAmount:t,outputAmount:r,tradeType:n,slippageAdjustedAmounts:i,priceImpactWithoutFee:s,realizedLPFee:l}=e,u=n===h.YL.EXACT_INPUT;return(0,o.jsxs)(a.Tz7,{style:{padding:"8px"},children:[(0,o.jsxs)(X.m0,{children:[(0,o.jsxs)(X.DA,{children:[(0,o.jsx)(a.xvT,{fontSize:"14px",color:"textSubtle",children:u?"Minimum received":"Maximum sold"}),(0,o.jsx)(a.s6f,{text:"Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.",ml:"4px",placement:"top"})]}),(0,o.jsx)(X.DA,{children:(0,o.jsx)(a.xvT,{fontSize:"14px",children:u?`${(0,B.dN)(i[p.gN.OUTPUT],4)} ${null==r?void 0:r.currency.symbol}`:`${(0,B.dN)(i[p.gN.INPUT],4)} ${null==t?void 0:t.currency.symbol}`})})]}),s&&(0,o.jsxs)(X.m0,{style:{padding:"4px 0 0 0"},children:[(0,o.jsxs)(X.DA,{children:[(0,o.jsx)(a.xvT,{fontSize:"14px",color:"textSubtle",children:"Price Impact"}),(0,o.jsx)(a.s6f,{text:(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(a.xvT,{fontSize:"12px",children:"The difference between the market price and estimated price due to trade size."})}),ml:"4px",placement:"top"})]}),(0,o.jsx)(FormattedPriceImpact,{priceImpact:s})]}),l&&(0,o.jsxs)(X.m0,{style:{padding:"4px 0 0 0"},children:[(0,o.jsxs)(X.DA,{children:[(0,o.jsx)(a.xvT,{fontSize:"14px",color:"textSubtle",children:"Trading Fee"}),(0,o.jsx)(a.s6f,{text:(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(a.xvT,{fontSize:"12px",mb:"12px",children:"Fee ranging from 1% to 0.01% depending on the pool fee tier."})}),ml:"4px",placement:"top"})]}),(0,o.jsx)(a.xvT,{fontSize:"14px",children:`${(0,B.dN)(l,4)} ${null==t?void 0:t.currency.symbol}`})]})]})});var eT=r(40231),ej=(0,l.memo)(function(e){let{path:t}=e;return(0,o.jsx)(a.kCb,{flexWrap:"wrap",width:"100%",justifyContent:"flex-end",alignItems:"center",children:t.map((e,r)=>{var n;let i=r===t.length-1,s=e.isToken?(0,f.Bv)(e):e;return(0,o.jsxs)(l.Fragment,{children:[(0,o.jsx)(a.kCb,{alignItems:"end",children:(0,o.jsx)(a.xvT,{fontSize:"14px",ml:"0.125rem",mr:"0.125rem",children:null!==(n=null==s?void 0:s.symbol)&&void 0!==n?n:""})}),!i&&(0,o.jsx)(a.XCv,{width:"12px"})]},e.isToken?e.address:"")})})}),ew=r(90755),eP=r(25786),eI=r(32584);let eC=(0,s.ZP)(a.kCb).withConfig({componentId:"sc-424242d7-0"})`
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
`,eN=(0,s.ZP)(a.xuv).withConfig({componentId:"sc-424242d7-1"})`
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
`,eA=s.ZP.div.withConfig({componentId:"sc-424242d7-2"})`
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
`,eS=(0,s.ZP)(eI.p).withConfig({componentId:"sc-424242d7-3"})`
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
`,TokenLogo=e=>{let{currency:t}=e,[r,n]=(0,l.useState)(null);return(0,l.useEffect)(()=>{if("address"in t){let e=`/images/369/tokens/${t.address}.png`,r=new Image;r.src=e,r.onload=()=>{n(e)},r.onerror=()=>{var e;n((e=t.address,`https://tokens.dextop.pro/tokens/${e}.png`))}}else n("https://tokens.dextop.pro/tokens/0xA1077a294dDE1B09bB078844df40758a5D0f9a27.png")},[t]),r?(0,o.jsx)("img",{src:r,alt:`${t.symbol} logo`}):(0,o.jsx)("div",{children:"Loading..."})},eU=(0,l.memo)(function(e){let{isOpen:t,onDismiss:r,routes:n}=e;return(0,o.jsx)(eT.kw,{closeOnOverlayClick:!0,isOpen:t,onDismiss:r,minHeight:"0",children:(0,o.jsx)(eT.u_,{title:(0,o.jsxs)(a.kCb,{justifyContent:"center",children:["Route"," ",(0,o.jsx)(a.s6f,{text:"Routing through these tokens resulted in the best price for your trade.",ml:"4px",placement:"top-start"})]}),style:{minHeight:"0"},bodyPadding:"24px",children:(0,o.jsx)(eP.Tz,{gap:"48px",children:n.map((e,t)=>(0,o.jsx)(ek,{route:e},t))})})})}),ek=(0,l.memo)(function(e){let{route:t}=e,{path:r,pools:n,inputAmount:i,outputAmount:s}=t,{currency:u}=i,{currency:c}=s,{targetRef:d,tooltip:p,tooltipVisible:m}=(0,ew.lL)((0,o.jsx)(a.xvT,{children:u.symbol}),{placement:"right"}),{targetRef:x,tooltip:h,tooltipVisible:g}=(0,ew.lL)((0,o.jsx)(a.xvT,{children:c.symbol}),{placement:"right"}),f=(0,l.useMemo)(()=>{if(r.length<=1)return[];let e=[];for(let t=0;t<r.length-1;t+=1)e.push([r[t],r[t+1]]);return e},[r]),b=f.length>0?f.map((e,t)=>{let[r,i]=e,s=n[t],l=eo.SmartRouter.isV3Pool(s),a=eo.SmartRouter.isV2Pool(s),u=a?`v2_${s.reserve0.currency.symbol}_${s.reserve1.currency.symbol}`:s.address,c=a?"V2":l?`V3 (${(0,ei.rc)(s.fee).toSignificant(6)}%)`:"StableSwap",d=`${r.symbol}/${i.symbol}${l?` (${(0,ei.rc)(s.fee).toSignificant(6)}%)`:""}`;return(0,o.jsx)(PairNode,{pair:e,text:c,className:l?"highlight":"",tooltipText:d},u)}):null;return(0,o.jsx)(eP.Tz,{gap:"24px",children:(0,o.jsxs)(eC,{justifyContent:"space-between",alignItems:"center",children:[(0,o.jsxs)(eS,{size:{xs:"32px",md:"48px"},ref:d,children:[(0,o.jsx)(TokenLogo,{currency:u}),(0,o.jsxs)(eA,{fontWeight:"bold",children:[t.percent,"%"]})]}),m&&p,b,(0,o.jsx)(eS,{size:{xs:"32px",md:"48px"},ref:x,children:(0,o.jsx)(TokenLogo,{currency:c})}),g&&h]})})});function PairNode(e){let{pair:t,text:r,className:n,tooltipText:i}=e,[s,l]=t,a=(0,ew.lL)(i);return(0,o.jsxs)(eN,{className:n,ref:a.targetRef,children:[a.tooltipVisible&&a.tooltip,(0,o.jsx)(eI.p,{size:{xs:"24px",md:"32px"},children:(0,o.jsx)(TokenLogo,{currency:s})}),(0,o.jsx)(eI.p,{size:{xs:"24px",md:"32px"},children:(0,o.jsx)(TokenLogo,{currency:l})}),(0,o.jsx)(eA,{children:r})]})}let eE=(0,s.ZP)(X.m0).withConfig({componentId:"sc-c1233e74-0"})`
  padding: 0 8px 0;
`,e$=(0,l.memo)(function(e){let{routes:t=[]}=e,r=(0,eT.R0)();if(!t.length)return null;let n=t.length;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(eE,{children:[(0,o.jsxs)("span",{style:{display:"flex",alignItems:"center"},children:[(0,o.jsx)(a.xvT,{fontSize:"14px",color:"textSubtle",children:"Route"}),(0,o.jsx)(a.s6f,{text:"Route is automatically calculated based on your routing preference to achieve the best price for your trade.",ml:"4px",placement:"top-start"})]}),(0,o.jsx)(a.xuv,{onClick:r.onOpen,role:"button",children:(0,o.jsxs)("span",{style:{display:"flex",alignItems:"center"},children:[n>1?(0,o.jsxs)(a.xvT,{fontSize:"14px",children:[n," Separate Routes"]}):(0,o.jsx)(RouteComp,{route:t[0]}),(0,o.jsx)(a.hU,{ml:"8px",variant:"text",color:"textSubtle",scale:"xs",children:(0,o.jsx)(a.W1M,{width:"16px",height:"16px",color:"textSubtle"})})]})}),(0,o.jsx)(eU,{...r,routes:t})]})})});function RouteComp(e){let{route:t}=e,{path:r}=t;return(0,o.jsx)(X.m0,{children:(0,o.jsx)(ej,{path:r})})}let eO=s.ZP.div.withConfig({componentId:"sc-417a4c1e-0"})`
  width: 100%;
  border-radius: 20px;

  transform: ${e=>{let{show:t}=e;return t?"translateY(0%)":"translateY(-100%)"}};
  transition: transform 300ms ease-in-out;
`,ez=(0,l.memo)(function(e){let{loaded:t,trade:r}=e,n=useSlippageAdjustedAmounts(null!=r?r:void 0),i=useIsWrapping(),{priceImpactWithoutFee:s,lpFeeAmount:u}=(0,l.useMemo)(()=>(0,ei.U7)(r),[r]),c=(0,l.useMemo)(()=>null==r?void 0:r.routes.some(e=>e.pools.some(eo.SmartRouter.isStablePool)),[r]);if(i||!t||!r)return null;let{inputAmount:d,outputAmount:p,tradeType:m,routes:x}=r;return(0,o.jsx)(eO,{show:t,children:(0,o.jsxs)(a.Tz7,{gap:"0px",children:[(0,o.jsx)(ey,{slippageAdjustedAmounts:n,inputAmount:d,outputAmount:p,tradeType:m,priceImpactWithoutFee:null!=s?s:void 0,realizedLPFee:null!=u?u:void 0,hasStablePair:c}),(0,o.jsx)(e$,{routes:x})]})})});var e_=r(24619),eZ=r(60908),eM=r(36400),eR=r(74906),eD=r(20528),eF=r(69674),eL=r(88051),eV=r(51675),eB=r(92321);let eY=(0,s.ZP)(X.m0).withConfig({componentId:"sc-b6a41b3e-0"})`
  width: 50%;
`,eX=s.ZP.div.withConfig({componentId:"sc-b6a41b3e-1"})`
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
`,eq=s.ZP.div.withConfig({componentId:"sc-b6a41b3e-2"})`
  width: calc(100% - 20px);
  display: flex;
  align-items: center;
`,eW=s.ZP.div.withConfig({componentId:"sc-b6a41b3e-3"})`
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
`;function ProgressCircles(e){let{steps:t,disabled:r=!1,...n}=e;return(0,o.jsx)(eP.Tz,{justify:"center",...n,children:(0,o.jsxs)(eY,{children:[t.map((e,n)=>(0,o.jsxs)(eq,{children:[(0,o.jsx)(eX,{confirmed:e,disabled:r||!t[n-1]&&0!==n,children:e?"✓":n+1}),(0,o.jsx)(eW,{prevConfirmed:e,disabled:r})]},n)),(0,o.jsx)(eX,{disabled:r||!t[t.length-1],children:t.length+1})]})})}(0,s.ZP)(a.kCb).withConfig({componentId:"sc-bd25f492-0"})`
  position: relative;
  flex-direction: column;
  // justify-content: space-between;
  // padding: 0.25rem;
`;let eK=s.ZP.div.withConfig({componentId:"sc-bd25f492-1"})`
  padding: 2px;

  ${e=>{let{clickable:t}=e;return t?s.iv`
          :hover {
            cursor: pointer;
            opacity: 0.8;
          }
        `:null}}
`,eH=(0,s.ZP)(a.xvT).withConfig({componentId:"sc-bd25f492-2"})`
  color: ${e=>{let{theme:t,severity:r}=e;return 3===r||4===r?t.colors.failure:2===r?t.colors.warning:1===r?t.colors.text:t.colors.success}};
`,eG=s.ZP.button.withConfig({componentId:"sc-bd25f492-3"})`
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
`;(0,s.ZP)(a.xvT).attrs({ellipsis:!0}).withConfig({componentId:"sc-bd25f492-4"})`
  width: 220px;
`;let eQ=s.ZP.div.withConfig({componentId:"sc-bd25f492-5"})`
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
`,eJ=s.ZP.div.withConfig({componentId:"sc-bd25f492-6"})`
  background-color: ${e=>{let{theme:t}=e;return`${t.colors.failure33}`}};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  border-radius: 12px;
  min-width: 48px;
  height: 48px;
`;function styleds_SwapCallbackError(e){let{error:t}=e;return(0,o.jsxs)(eQ,{children:[(0,o.jsx)(eJ,{children:(0,o.jsx)(a.Pz_,{width:"24px"})}),(0,o.jsx)("p",{style:{fontSize:"16px"},children:t})]})}(0,s.ZP)(eP.Tz).withConfig({componentId:"sc-bd25f492-7"})`
  border-radius: 12px;
  margin-top: 8px;
`;var e0=r(18876),e2=r(31347),e1=r(86832),e4=r(12021);function FormattedPriceImpact_FormattedPriceImpact(e){let{priceImpact:t}=e;return(0,o.jsx)(eH,{fontSize:"14px",severity:(0,w.oX)(t),children:t?t.lessThan(g.IS)?"<0.01%":`${t.toFixed(2)}%`:"-"})}let e5=(0,s.ZP)(a.Tz7).withConfig({componentId:"sc-917cd343-0"})`
  margin-top: 24px;
  padding: 16px;
  border-radius: ${e=>{let{theme:t}=e;return t.radii.default}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
`,e8=(0,l.memo)(function(e){var t,r;let{priceImpact:n,lpFee:i,inputAmount:s,outputAmount:u,tradeType:c,executionPrice:d,slippageAdjustedAmounts:m,isEnoughInputBalance:x,onConfirm:g,swapErrorMessage:f,disabledConfirm:b}=e,[v,y]=(0,l.useState)(!1),T=(0,w.oX)(n);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e5,{children:[(0,o.jsxs)(X.m0,{align:"center",children:[(0,o.jsx)(a.xvT,{fontSize:"14px",children:"Price"}),(0,o.jsxs)(a.xvT,{fontSize:"14px",style:{justifyContent:"center",alignItems:"center",display:"flex",textAlign:"right",paddingLeft:"10px"},children:[(0,ei.Kh)(null!=d?d:void 0,s,u,v),(0,o.jsx)(eG,{onClick:()=>y(!v),children:(0,o.jsx)(a.kFI,{width:"14px"})})]})]}),(0,o.jsxs)(X.m0,{children:[(0,o.jsxs)(X.DA,{children:[(0,o.jsx)(a.xvT,{fontSize:"14px",children:c===h.YL.EXACT_INPUT?"Minimum received":"Maximum sold"}),(0,o.jsx)(a.s6f,{text:"Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.",ml:"4px",placement:"top"})]}),(0,o.jsxs)(X.DA,{children:[(0,o.jsx)(a.xvT,{fontSize:"14px",children:c===h.YL.EXACT_INPUT?null!==(t=(0,B.dN)(m[p.gN.OUTPUT],4))&&void 0!==t?t:"-":null!==(r=(0,B.dN)(m[p.gN.INPUT],4))&&void 0!==r?r:"-"}),(0,o.jsx)(a.xvT,{fontSize:"14px",marginLeft:"4px",children:c===h.YL.EXACT_INPUT?u.currency.symbol:s.currency.symbol})]})]}),(0,o.jsxs)(X.m0,{children:[(0,o.jsxs)(X.DA,{children:[(0,o.jsx)(a.xvT,{fontSize:"14px",children:"Price Impact"}),(0,o.jsx)(a.s6f,{text:"The difference between the market price and your price due to trade size.",ml:"4px",placement:"top"})]}),(0,o.jsx)(FormattedPriceImpact_FormattedPriceImpact,{priceImpact:null!=n?n:void 0})]}),(0,o.jsxs)(X.m0,{children:[(0,o.jsxs)(X.DA,{children:[(0,o.jsx)(a.xvT,{fontSize:"14px",children:"Trading Fee"}),(0,o.jsx)(a.s6f,{text:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.xvT,{children:"Fee ranging from 1% to 0.01% depending on the pool fee tier. You can check the fee tier by clicking the magnifier icon under the “Route” section."}),(0,o.jsx)(a.xvT,{mt:"12px",children:(0,o.jsx)(a.rUS,{style:{display:"inline"},ml:"4px",external:!0,href:"https://info.dextop.pro",children:"Fee Breakdown and Tokenomics"})})]}),ml:"4px",placement:"top"})]}),(0,o.jsx)(a.xvT,{fontSize:"14px",textAlign:"right",children:i?`${(0,B.dN)(i,6)} ${s.currency.symbol}`:"-"})]})]}),(0,o.jsxs)(X.BA,{children:[(0,o.jsx)(a.zxk,{variant:T>2?"danger":"primary",onClick:g,disabled:b,mt:"12px",id:"confirm-swap-or-send",width:"100%",height:"48px",children:T>2||c===h.YL.EXACT_OUTPUT&&!x?"Swap Anyway":"Confirm Swap"}),f?(0,o.jsx)(styleds_SwapCallbackError,{error:f}):null]})]})});var e6=r(90579);function SwapModalHeader(e){let{inputAmount:t,outputAmount:r,tradeType:n,priceImpactWithoutFee:i,slippageAdjustedAmounts:s,isEnoughInputBalance:u,recipient:c,showAcceptChanges:d,onAcceptChanges:m,allowedSlippage:x}=e,g=(0,w.oX)(i),f=d&&n===h.YL.EXACT_OUTPUT&&u?"primary":n!==h.YL.EXACT_OUTPUT||u?"text":"failure",b=n===h.YL.EXACT_INPUT?(0,B.dN)(s[p.gN.OUTPUT],6):(0,B.dN)(s[p.gN.INPUT],6),v=n===h.YL.EXACT_INPUT?r.currency.symbol:t.currency.symbol,y=(0,l.useMemo)(()=>n===h.YL.EXACT_INPUT?`Output is estimated. You will receive at least ${b} ${v} or the transaction will revert.`:`Input is estimated. You will sell at most ${b} ${v} or the transaction will revert.`,[n,b,v]),T=c?(0,eu.Z)(c):"",j=`Output will be sent to ${T}`,[P,I]=j.split(T);return(0,o.jsxs)(eP.Tz,{gap:"md",children:[(0,o.jsxs)(X.m0,{align:"flex-end",children:[(0,o.jsxs)(X.DA,{gap:"4px",children:[(0,o.jsx)(e6.X,{currency:t.currency,size:"24px",style:{marginRight:"12px"}}),(0,o.jsx)(eb,{fontSize:"24px",color:f,children:(0,B.dN)(t,6)})]}),(0,o.jsx)(X.DA,{gap:"0px",children:(0,o.jsx)(a.xvT,{fontSize:"24px",ml:"10px",children:t.currency.symbol})})]}),(0,o.jsx)(X.DA,{children:(0,o.jsx)(a.veu,{width:"16px",ml:"4px"})}),(0,o.jsxs)(X.m0,{align:"flex-end",children:[(0,o.jsxs)(X.DA,{gap:"4px",children:[(0,o.jsx)(e6.X,{currency:r.currency,size:"24px"}),(0,o.jsx)(eb,{fontSize:"24px",color:g>2?"failure":d&&n===h.YL.EXACT_INPUT?"primary":"text",children:(0,B.dN)(r,6)})]}),(0,o.jsx)(X.DA,{children:(0,o.jsx)(a.xvT,{fontSize:"24px",ml:"10px",children:r.currency.symbol})})]}),d?(0,o.jsx)(ev,{justify:"flex-start",gap:"0px",children:(0,o.jsxs)(X.m0,{children:[(0,o.jsxs)(X.DA,{children:[(0,o.jsx)(a.Pz_,{mr:"8px"}),(0,o.jsx)(a.xvT,{bold:!0,children:" Price Updated"})]}),(0,o.jsx)(a.zxk,{height:"36px",onClick:m,children:"Accept"})]})}):null,(0,o.jsxs)(eP.Tz,{justify:"flex-start",gap:"sm",style:{padding:"24px 0 0 0px"},children:[(0,o.jsxs)(X.DA,{style:{width:"100%"},children:[(0,o.jsx)(a.xvT,{color:"secondary",textTransform:"uppercase",children:"Slippage Tolerance"}),(0,o.jsx)(a.xvT,{color:"primary",ml:"auto",textAlign:"end",children:"number"==typeof x?`${(0,w.P4)(x).toFixed(2)}%`:x})]}),n===h.YL.EXACT_OUTPUT&&!u&&(0,o.jsx)(a.xvT,{small:!0,color:"failure",textAlign:"left",style:{width:"100%"},children:"Insufficient input token balance. Your transaction may fail."}),(0,o.jsx)(a.xvT,{small:!0,color:"textSubtle",textAlign:"left",style:{maxWidth:"320px"},children:y})]})]})}let e3=(0,l.memo)(function(e){let{trade:t,originalTrade:r,onAcceptChanges:n,allowedSlippage:i,onConfirm:s,recipient:a,currencyBalances:u}=e,c=(0,l.useMemo)(()=>!!(t&&r&&(t.tradeType!==r.tradeType||!t.inputAmount.currency.equals(r.inputAmount.currency)||!t.inputAmount.equalTo(r.inputAmount)||!t.outputAmount.currency.equals(r.outputAmount.currency)||!t.outputAmount.equalTo(r.outputAmount))),[r,t]),d=(0,l.useMemo)(()=>(0,ei.b5)(t,i),[t,i]),{priceImpactWithoutFee:m,lpFeeAmount:x}=(0,l.useMemo)(()=>(0,ei.U7)(t),[t]),g=(0,l.useMemo)(()=>eo.SmartRouter.getExecutionPrice(t),[t]),f=(0,l.useMemo)(()=>{var e;if((null==t?void 0:t.tradeType)!==h.YL.EXACT_OUTPUT)return!1;let r=!!(u&&u[p.gN.INPUT]),n=r&&(null===(e=u[p.gN.INPUT])||void 0===e?void 0:e.currency.isNative),i=r?n?(0,D.i)(u[p.gN.INPUT]):u[p.gN.INPUT]:null;return!!i&&!!d&&!!d[p.gN.INPUT]&&(i.greaterThan(d[p.gN.INPUT])||i.equalTo(d[p.gN.INPUT]))},[u,t,d]),b=(0,l.useCallback)(()=>t?(0,o.jsx)(SwapModalHeader,{inputAmount:t.inputAmount,outputAmount:t.outputAmount,tradeType:t.tradeType,priceImpactWithoutFee:null!=m?m:void 0,allowedSlippage:i,slippageAdjustedAmounts:d,isEnoughInputBalance:f,recipient:a,showAcceptChanges:c,onAcceptChanges:n}):null,[m,i,n,a,c,t,d,f]),v=(0,l.useCallback)(()=>t?(0,o.jsx)(e8,{tradeType:t.tradeType,inputAmount:t.inputAmount,outputAmount:t.outputAmount,onConfirm:s,lpFee:x,priceImpact:m,executionPrice:g,slippageAdjustedAmounts:d,disabledConfirm:c,isEnoughInputBalance:f}):null,[s,c,f,d,x,m,t,g]);return(0,o.jsx)(e4.p,{topContent:b,bottomContent:v})}),e9=(0,l.memo)(function(e){let{trade:t,originalTrade:r,currencyBalances:n,onAcceptChanges:i,onConfirm:s,onDismiss:a,customOnDismiss:u,swapErrorMessage:c,attemptingTxn:d,txHash:p,openSettingModal:m}=e,{chainId:x}=(0,b.g)(),[h]=(0,K.eq)(),{recipient:g}=useSwapState(),f=(0,l.useCallback)(()=>{u&&u(),null==a||a()},[u,a]),v=d||p?null:c?(0,o.jsx)(e1.h,{onDismiss:a,message:c}):(0,o.jsx)(e3,{trade:t,currencyBalances:n,originalTrade:r,onAcceptChanges:i,allowedSlippage:h,onConfirm:s,recipient:null!=g?g:void 0}),y=(0,l.useMemo)(()=>{var e,r,n,i,o,s,l,a;return`Swapping ${null!==(o=(0,B.dN)(null==t?void 0:t.inputAmount,6))&&void 0!==o?o:""} ${null!==(s=null==t?void 0:null===(r=t.inputAmount)||void 0===r?void 0:null===(e=r.currency)||void 0===e?void 0:e.symbol)&&void 0!==s?s:""} for ${null!==(l=(0,B.dN)(null==t?void 0:t.outputAmount,6))&&void 0!==l?l:""} ${null!==(a=null==t?void 0:null===(i=t.outputAmount)||void 0===i?void 0:null===(n=i.currency)||void 0===n?void 0:n.symbol)&&void 0!==a?a:""}`},[t]);return x?(0,o.jsxs)(eT.u_,{title:"Review Swap",onDismiss:f,bodyPadding:"20px",minWidth:["100%","418px"],children:[d?(0,o.jsx)(e0.P,{pendingText:y}):p?(0,o.jsx)(e2.r,{chainId:x,hash:p}):null,v]}):null}),e7=(0,s.ZP)(a.Zbd).withConfig({componentId:"sc-22b055ed-0"})`
  background-color: ${e=>{let{theme:t}=e;return t.colors.dropdown}};
`,te=(0,eD.h)(eD.Z),tt=(0,l.memo)(function(e){var t,r,n,i,s,u,c;let{trade:d,tradeError:m,tradeLoading:f}=e,{open:b}=(0,e_.k_)(),{address:v}=(0,eB.m)(),[T]=(0,K.zu)(),{typedValue:I,independentField:C,[p.gN.INPUT]:{currencyId:N},[p.gN.OUTPUT]:{currencyId:A}}=useSwapState(),S=(0,M.U8)(N),U=(0,M.U8)(A),{onUserInput:k}=(0,R._)(),{wrapType:E,execute:O,inputError:z}=(0,W.ZP)(S,U,I),_=E!==W.kC.NOT_APPLICABLE,[D,F]=(0,y.KO)(en),L=useSlippageAdjustedAmounts(d),V=eo.cN[null!==(s=null==d?void 0:null===(r=d.inputAmount)||void 0===r?void 0:null===(t=r.currency)||void 0===t?void 0:t.chainId)&&void 0!==s?s:P.a_.ETHEREUM],Y=L[p.gN.INPUT],q=(0,$.K5)(null!=v?v:void 0,[null!=S?S:void 0,null!=U?U:void 0]),H={[p.gN.INPUT]:q[0],[p.gN.OUTPUT]:q[1]},{approvalState:G,approveCallback:Q}=(0,eL.qL)(Y,V),{priceImpactWithoutFee:J}=(0,l.useMemo)(()=>_?{}:(0,ei.U7)(d),[_,d]),ee=function(e,t){var r,n;let i;let{account:o}=(0,Z.Ge)(),{independentField:s,typedValue:l}=useSwapState(),a=null===(r=t[p.gN.INPUT])||void 0===r?void 0:r.currency,u=null===(n=t[p.gN.OUTPUT])||void 0===n?void 0:n.currency,c=useSlippageAdjustedAmounts(null!=e?e:void 0),d=o||null,m=s===p.gN.INPUT,h=m?a:u,g=(0,x.Z)(l,null!=h?h:void 0);o||(i="Connect Wallet"),g||(i=null!=i?i:"Enter an amount"),a&&u||(i=null!=i?i:"Select a token");let f=(0,j.xP)(d);d&&f?(-1!==es.indexOf(f)||e&&e.routes.some(e=>e.path.some(e=>e.isToken&&e.address===f)))&&(i=null!=i?i:"Invalid recipient"):i=null!=i?i:"Enter a recipient";let[b,v]=[t[p.gN.INPUT],c?c[p.gN.INPUT]:null];return b&&v&&b.lessThan(v)&&(i=`Insufficient ${v.currency.symbol} balance`),i}(d,H),et=function(e,t,r){var n,i;let{independentField:o,typedValue:s}=useSwapState(),l=null===(n=t[p.gN.INPUT])||void 0===n?void 0:n.currency,a=null===(i=t[p.gN.OUTPUT])||void 0===i?void 0:i.currency,u=o===p.gN.INPUT,c=u?l:a,d=(0,x.Z)(s,null!=c?c:void 0);return r?{[p.gN.INPUT]:d,[p.gN.OUTPUT]:d}:{[p.gN.INPUT]:o===p.gN.INPUT?d:null==e?void 0:e.inputAmount,[p.gN.OUTPUT]:o===p.gN.OUTPUT?d:null==e?void 0:e.outputAmount}}(d,H,_),er=et[C],[eh]=(0,eV.$)(),{callback:eg,error:ef}=function(e){let{trade:t,deadline:r,feeOptions:n}=e,{account:i,chainId:o}=(0,ea.Z)(),[s]=(0,K.eq)()||[el.gv],a=(0,l.useMemo)(()=>(0,w.P4)(s),[s]),{recipient:u}=useSwapState(),c=null===u?i:u,d=function(e,t,r,n,i){let{account:o,chainId:s}=(0,ea.Z)(),a=useGetENSAddressByName_useGetENSAddressByName(null!=r?r:void 0),u=null===r?o:(0,j.xP)(r)?r:(0,j.xP)(a)?a:null;return(0,l.useMemo)(()=>{if(!e||!u||!o||!s)return[];let r=s?eo.cN[s]:void 0;if(!r)return[];let{value:l,calldata:a}=eo.cH.swapCallParameters(e,{fee:i,recipient:u,slippageTolerance:t,deadlineOrPreviousBlockhash:null==n?void 0:n.toString()});return[{address:r,calldata:a,value:l}]},[o,t,s,n,i,u,e])}(t,a,u,r,n),{callback:p}=function(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=(0,ec.h7)(),{sendTransactionAsync:o}=(0,ex.p)(),s=ep.rk[t],[a]=(0,K.eq)()||[el.gv],{recipient:u}=useSwapState(),c=null===u?e:u;return(0,l.useMemo)(()=>r&&o&&e&&t&&s?{callback:async function(){let l=await Promise.all(n.map(t=>{let{address:r,calldata:n,value:i}=t,o=!i||isZero(i)?{account:e,to:r,data:n,value:0n}:{account:e,to:r,data:n,value:(0,em.y_)(i)};return s.estimateGas(o).then(e=>({call:t,gasEstimate:e})).catch(e=>(console.debug("Gas estimate failed, trying eth_call to extract error",t),{call:t,error:(0,ed.e)(e)}))})),d=l.find((e,t,r)=>"gasEstimate"in e&&(t===r.length-1||"gasEstimate"in r[t+1]));if(!d){let e=l.filter(e=>"error"in e);if(e.length>0)throw e[e.length-1].error;let t=l.find(e=>!("error"in e));if(!t)throw Error("Unexpected error. Could not estimate gas for the swap.");d=t}let{call:{address:p,calldata:m,value:x}}=d;return o({account:e,chainId:t,to:p,data:m,value:x&&!isZero(x)?(0,em.y_)(x):0n,..."gasEstimate"in d?{gas:(0,j.yC)(d.gasEstimate)}:{}}).then(n=>{let o=r.inputAmount.currency.symbol,s=r.outputAmount.currency.symbol,l=(0,w.P4)(a),d=r.tradeType===h.YL.EXACT_INPUT?(0,B.dN)(r.inputAmount,3):(0,B.dN)(eo.SmartRouter.maximumAmountIn(r,l),3),p=r.tradeType===h.YL.EXACT_OUTPUT?(0,B.dN)(r.outputAmount,3):(0,B.dN)(eo.SmartRouter.minimumAmountOut(r,l),3),m=`Swap ${r.tradeType===h.YL.EXACT_OUTPUT?"max.":""} ${d} ${o} for ${r.tradeType===h.YL.EXACT_INPUT?"min.":""} ${p} ${s}`,x=c&&(0,j.xP)(c)?(0,eu.Z)(c):c,g=u===e?m:`${m} to ${x}`,f=r.tradeType===h.YL.EXACT_OUTPUT?u===e?"Swap max. %inputAmount% %inputSymbol% for %outputAmount% %outputSymbol%":"Swap max. %inputAmount% %inputSymbol% for %outputAmount% %outputSymbol% to %recipientAddress%":u===e?"Swap %inputAmount% %inputSymbol% for min. %outputAmount% %outputSymbol%":"Swap %inputAmount% %inputSymbol% for min. %outputAmount% %outputSymbol% to %recipientAddress%";return i({hash:n},{summary:g,translatableSummary:{text:f,data:{inputAmount:null!=d?d:"",inputSymbol:o,outputAmount:null!=p?p:"",outputSymbol:s,...u!==e&&{recipientAddress:x}}},type:"swap"}),logTx({account:e,chainId:t,hash:n}),{hash:n}}).catch(e=>{throw console.error("Swap failed",e,p,m,x),Error(`Swap failed: ${(0,ed.e)(e)}`)})}}:{callback:null},[r,o,e,t,s,n,a,c,u,i])}(i,o,null!=t?t:void 0,d);return(0,l.useMemo)(()=>t&&i&&o&&p?c?{state:2,callback:p}:null!==u?{state:0,error:"Invalid recipient"}:{state:1}:{state:0,error:"Missing dependencies"},[t,i,o,p,c,u])}({trade:d,deadline:eh}),[{tradeToConfirm:eb,swapErrorMessage:ev,attemptingTxn:ey,txHash:ej},ew]=(0,l.useState)({tradeToConfirm:void 0,attemptingTxn:!1,swapErrorMessage:void 0,txHash:void 0}),[eP,eI]=(0,l.useState)(!1),eC=(0,l.useCallback)(()=>{ew({tradeToConfirm:eb,attemptingTxn:ey,swapErrorMessage:ev,txHash:ej}),ej&&k(p.gN.INPUT,"")},[ey,k,ev,eb,ej,ew]),eN=(0,l.useCallback)(()=>{(!J||function(e,t,r){if(!e.lessThan(t)){let e="confirm";return window.prompt(`This swap has a price impact of at least ${t.toFixed(0)}%. Please type the word "${e}" to continue with this swap.`)===e}return!!e.lessThan(r)||window.confirm(`This swap has a price impact of at least ${r.toFixed(0)}%. Please confirm that you would like to continue with this swap.`)}(J,g.EV,g.Uf))&&eg&&(ew({attemptingTxn:!0,tradeToConfirm:eb,swapErrorMessage:void 0,txHash:void 0}),eg().then(e=>{ew({attemptingTxn:!1,tradeToConfirm:eb,swapErrorMessage:void 0,txHash:e.hash})}).catch(e=>{if(e instanceof TransactionRejectedError){eC();return}ew({attemptingTxn:!1,tradeToConfirm:eb,swapErrorMessage:"string"==typeof e?e:e.message,txHash:void 0})}))},[J,eg,eb,ew,eC]),eA=(0,l.useCallback)(()=>{ew({tradeToConfirm:d,swapErrorMessage:ev,txHash:ej,attemptingTxn:ey})},[ey,ev,d,ej,ew]),[eS,eU]=(0,l.useState)(!1),[ek]=(0,eT.dd)((0,o.jsx)(te,{customOnDismiss:()=>eU(!0),mode:eF.a.SWAP_LIQUIDITY})),[eE]=(0,eT.dd)((0,o.jsx)(e9,{trade:d,originalTrade:eb,currencyBalances:H,onAcceptChanges:eA,attemptingTxn:ey,txHash:ej,onConfirm:eN,swapErrorMessage:ev,customOnDismiss:eC,openSettingModal:ek}),!0,!0,"confirmSwapModal"),e$=(0,l.useCallback)(()=>{T?eN():(ew({tradeToConfirm:d,attemptingTxn:!1,swapErrorMessage:void 0,txHash:void 0}),eE())},[T,eN,eE,d]);(0,l.useEffect)(()=>{eS&&(eU(!1),ew(e=>({...e,swapErrorMessage:void 0})),eE())},[eS,eE,ew]),(0,l.useEffect)(()=>{eI(!1)},[null==d?void 0:null===(n=d.inputAmount)||void 0===n?void 0:n.currency]),(0,l.useEffect)(()=>{G===eL.UK.PENDING&&eI(!0)},[G,eP]);let eO=(0,w.oX)(J);if(!v)return(0,o.jsx)(a.zxk,{width:"100%",variant:"primary",height:"58px",onClick:()=>b(),children:(0,o.jsx)(a.xvT,{fontSize:"20px",children:"Connect Wallet"})});if(_)return(0,o.jsx)(eM.A,{width:"100%",disabled:!!z,onClick:O,children:null!=z?z:E===W.kC.WRAP?"Wrap":E===W.kC.UNWRAP?"Unwrap":null});let ez=!((null!==(u=null==d?void 0:null===(i=d.routes)||void 0===i?void 0:i.length)&&void 0!==u?u:0)>0)||m,eD=!!(S&&U&&(null==er?void 0:er.greaterThan(g.iV)));if(ez&&eD&&!f)return(0,o.jsx)(a.Tz7,{gap:"12px",children:(0,o.jsx)(e7,{style:{textAlign:"center",padding:"0.75rem"},children:(0,o.jsx)(a.xvT,{color:"textSubtle",children:"Insufficient liquidity for this trade."})})});let eY=!ee&&(G===eL.UK.NOT_APPROVED||G===eL.UK.PENDING||eP&&G===eL.UK.APPROVED)&&!(eO>3&&!T),eX=!ee&&!f,eq=G===eL.UK.APPROVED,eW=eY?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(X.m0,{children:[(0,o.jsx)(eM.A,{variant:G===eL.UK.APPROVED?"success":"primary",onClick:Q,disabled:G!==eL.UK.NOT_APPROVED||eP,width:"48%",height:"56px",children:G===eL.UK.PENDING?(0,o.jsxs)(X.BA,{gap:"6px",justify:"center",children:["Enabling ",(0,o.jsx)(eR.Z,{stroke:"white"})]}):eP&&eq?"Enabled":`Enable ${null!==(c=null==S?void 0:S.symbol)&&void 0!==c?c:""}`}),(0,o.jsx)(eM.A,{variant:eX&&eO>2?"danger":"primary",onClick:()=>{e$()},width:"48%",height:"56px",id:"swap-button",disabled:!eX||!eq||eO>3&&!T,children:f&&(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(eZ.Z,{children:"Searching For The Best Price"})})||(eO>3&&!T?"Price Impact High":eO>2?"Swap Anyway":"Swap")})]}),(0,o.jsx)(a.sgG,{style:{marginTop:"1rem"},children:(0,o.jsx)(ProgressCircles,{steps:[G===eL.UK.APPROVED]})}),T&&ev?(0,o.jsx)(styleds_SwapCallbackError,{error:ev}):null]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(eM.A,{variant:eX&&eO>2&&!ef?"danger":"primary",onClick:()=>{e$()},id:"swap-button",width:"100%",height:"56px",disabled:!eX||eO>3&&!T||!!ef||!eq,children:ee||f&&(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(eZ.Z,{children:"Searching For The Best Price"})})||(eO>3&&!T?"Price Impact Too High":eO>2?"Swap Anyway":"Swap")}),T&&ev?(0,o.jsx)(styleds_SwapCallbackError,{error:ev}):null]});return(0,o.jsx)(a.xuv,{mt:"0.25rem",children:eW})}),tr=s.ZP.div.withConfig({componentId:"sc-a29a15ae-0"})`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  border-radius: 8px;
  // background-color: ${e=>{let{theme:t}=e;return t.colors.backgroundAlt}};
  z-index: 1;
  width: 100%;
  padding-bottom: 20px;
`,tn=s.ZP.div.withConfig({componentId:"sc-a29a15ae-1"})`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius:8px;
  border: 2px solid ${e=>{let{error:t,theme:r}=e;return t?r.colors.failure:r.colors.cardBorder}};
  transition: border-color 300ms ${e=>{let{error:t}=e;return t?"step-end":"step-start"}},
    color 500ms ${e=>{let{error:t}=e;return t?"step-end":"step-start"}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.input}};
`,ti=s.ZP.div.withConfig({componentId:"sc-a29a15ae-2"})`
  flex: 1;
  padding: 1rem;
`,to=s.ZP.input.withConfig({componentId:"sc-a29a15ae-3"})`
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
`;function AddressInputPanel(e){let{id:t,value:r,onChange:n}=e,{chainId:i}=(0,b.g)(),s=(0,j.xP)(r)?r:void 0,u=(0,l.useCallback)(e=>{let t=e.target.value,r=t.replace(/\s+/g,"");n(r)},[n]),c=!!(r.length>0&&!s);return(0,o.jsx)(tr,{id:t,children:(0,o.jsx)(tn,{error:c,children:(0,o.jsx)(ti,{children:(0,o.jsxs)(eP.Tz,{gap:"md",children:[(0,o.jsxs)(X.m0,{children:[(0,o.jsx)(a.xvT,{small:!0,children:"Recipient"}),s&&i&&(0,o.jsxs)(a.rUS,{external:!0,small:!0,href:(0,j.C)(s,"address",i),children:["(",`View on ${(0,j.X0)(i)}`,i===P.a_.ETHEREUM&&(0,o.jsx)(a.a2c,{color:"primary",ml:"4px"}),")"]})]}),(0,o.jsx)(to,{className:"recipient-address-input",type:"text",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:"Wallet Address",error:c,pattern:"^(0x[a-fA-F0-9]{40})$",onChange:u,value:r})]})})})})}let ts=(0,l.memo)(function(){let{recipient:e}=useSwapState(),{onChangeRecipient:t}=(0,R._)(),r=useAllowRecipient();return r&&null!==e?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(X.BA,{justify:"space-between",style:{padding:"0 1rem"},children:[(0,o.jsx)(eK,{clickable:!1,children:(0,o.jsx)(a.veu,{width:"16px"})}),(0,o.jsx)(a.zxk,{variant:"text",id:"remove-recipient-button",onClick:()=>t(null),children:"'- Remove send'"})]}),(0,o.jsx)(AddressInputPanel,{id:"recipient",value:e,onChange:t})]}):null});(0,s.ZP)(a.xuv).withConfig({componentId:"sc-a01483a3-0"})`
  // background: rgb(27, 28, 29);
  border-radius: 8px;
`,(0,s.ZP)(a.xuv).withConfig({componentId:"sc-a01483a3-1"})`
  padding: 9px 0;
  border-radius: 8px;
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.textDisabled}};
`;var V3Swap=function(){let{isLoading:e,trade:t,error:r}=function(){let{maxHops:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{independentField:t,typedValue:r,[p.gN.INPUT]:{currencyId:n},[p.gN.OUTPUT]:{currencyId:i}}=useSwapState(),o=(0,M.U8)(n),s=(0,M.U8)(i),a=t===p.gN.INPUT,u=a?o:s,c=a?s:o,d=a?h.YL.EXACT_INPUT:h.YL.EXACT_OUTPUT,m=(0,x.Z)(r,null!=u?u:void 0),[g]=(0,K.RO)(),[f]=(0,y.KO)(er),[b]=(0,y.KO)(ee),[v]=(0,y.KO)(et),[T]=(0,y.KO)(J),{isLoading:j,trade:w,refresh:P,syncing:I,isStale:C,error:N}=(0,H.ZU)({amount:m,currency:null!=c?c:void 0,baseCurrency:null!=u?u:void 0,tradeType:d,maxHops:g?1:e,maxSplits:f?void 0:0,v2Swap:b,v3Swap:v,stableSwap:T,type:"auto"});return{refresh:P,syncing:I,isStale:C,error:N,isLoading:(0,l.useDeferredValue)(j||r&&!w&&!N),trade:r?w:null}}(),n=!e,{account:i}=(0,Z.Ge)(),[s,g]=[null==t?void 0:t.inputAmount,null==t?void 0:t.outputAmount],{recipient:f,independentField:w,typedValue:P,[p.gN.INPUT]:{currencyId:I},[p.gN.OUTPUT]:{currencyId:C}}=useSwapState(),N=useIsWrapping(),A=(0,M.U8)(I),S=(0,M.U8)(C),{onSwitchTokens:U,onCurrencySelection:k,onUserInput:E,onChangeRecipient:q}=(0,R._)(),[W]=(0,$.K5)(i,[A,S]),G=(0,l.useMemo)(()=>(0,D.i)(W),[W]);!function(){let{chainId:e}=(0,b.g)(),[,t]=(0,y.KO)(O.I),r=(0,v.Z)(),{query:n}=(0,T.useRouter)(),[i,o]=(0,l.useState)();(0,l.useEffect)(()=>{var i;if(!e||!r||!m.fV[e])return;let s=function(e,t,r){var n,i;let o=(0,j.xP)(e.inputCurrency)||(null!=t?t:"PLS"),s="string"==typeof e.outputCurrency?(0,j.xP)(e.outputCurrency)||t:null!=r?r:m.Jb.address;o===s&&("string"==typeof e.outputCurrency?o="":s="");let l=function(e){if("string"!=typeof e)return null;let t=(0,j.xP)(e);return t||(z.test(e)||_.test(e)?e:null)}(e.recipient);return{[p.gN.INPUT]:{currencyId:o},[p.gN.OUTPUT]:{currencyId:s},typedValue:"string"!=typeof(n=e.exactAmount)||Number.isNaN(parseFloat(n))?"":n,independentField:"string"==typeof(i=e.exactField)&&"output"===i.toLowerCase()?p.gN.OUTPUT:p.gN.INPUT,recipient:l}}(n,r.symbol,null===(i=m.fV[e])||void 0===i?void 0:i.address);t((0,p.mV)({typedValue:s.typedValue,field:s.independentField,inputCurrencyId:s[p.gN.INPUT].currencyId,outputCurrencyId:s[p.gN.OUTPUT].currencyId,recipient:null})),o({inputCurrencyId:s[p.gN.INPUT].currencyId,outputCurrencyId:s[p.gN.OUTPUT].currencyId})},[t,e,n,r])}();let Q=(0,l.useCallback)(e=>E(p.gN.INPUT,e),[E]),en=(0,l.useCallback)(e=>E(p.gN.OUTPUT,e),[E]),ei=(0,l.useCallback)(e=>{G&&E(p.gN.INPUT,G.multiply(new F.gG(e,100)).toExact())},[G,E]),eo=(0,l.useCallback)(()=>{G&&E(p.gN.INPUT,G.toExact())},[G,E]),es=(0,l.useCallback)((e,t,r,n)=>{k(t,e);let i=t===p.gN.INPUT,o=i?r:n,s=i?n:r,l=(0,L.Z)(e);l===s&&(0,V.Z)(i?"outputCurrency":"inputCurrency",o),(0,V.Z)(i?"inputCurrency":"outputCurrency",l)},[k]),el=(0,l.useCallback)(e=>es(e,p.gN.INPUT,null!=I?I:"",null!=C?C:""),[es,I,C]),ea=(0,l.useCallback)(e=>es(e,p.gN.OUTPUT,null!=I?I:"",null!=C?C:""),[es,I,C]),eu=w===p.gN.INPUT,ec=(0,l.useMemo)(()=>P&&(eu?P:(0,B.dN)(s)||""),[P,eu,s]),ed=(0,l.useMemo)(()=>P&&(eu?(0,B.dN)(g)||"":P),[P,eu,g]),ep=useAllowRecipient();return(0,o.jsx)(u.Z,{children:(0,o.jsx)(a.kCb,{justifyContent:"center",mt:"40px",children:(0,o.jsxs)(c.j,{children:[(0,o.jsx)(eh.Z,{title:"Swap"}),(0,o.jsxs)(eg,{id:"swap-page",position:"relative",children:[(0,o.jsx)(d.Z,{label:eu||N?"From":"From (estimated)",value:N?P:ec,showMaxButton:!0,maxAmount:G,showQuickInputButton:!0,currency:A,onUserInput:Q,onPercentInput:ei,onMax:eo,onCurrencySelect:el,otherCurrency:S,id:"swap-currency-input",showCommonBases:!0,showBUSD:!0,commonBasesType:Y.L0.SWAP_LIMITORDER}),(0,o.jsxs)(X.BA,{justify:"center",my:"8px",mx:"auto",zIndex:"2",children:[(0,o.jsxs)(a.hU,{className:"gl26hd2 gl26hd1",variant:"text",onClick:()=>{U(),(0,V.Z)("inputCurrency",C),(0,V.Z)("outputCurrency",I)},width:"15px",height:"15px",children:[(0,o.jsx)(a.veu,{className:"gl26hd3",color:"primary"}),(0,o.jsx)(a.Wpj,{className:"gl26hd4",color:"primary"})]}),ep&&null===f?(0,o.jsx)(a.zxk,{variant:"text",id:"add-recipient-button",onClick:()=>q(""),children:"+ Add a send (optional)"}):null]}),(0,o.jsx)(d.Z,{value:N?P:ed,onUserInput:en,label:eu&&!N?"To (estimated)":"To",showMaxButton:!1,currency:S,onCurrencySelect:ea,otherCurrency:A,id:"swap-currency-output",showCommonBases:!0,showBUSD:!0,commonBasesType:Y.L0.SWAP_LIMITORDER})]}),(0,o.jsx)(ts,{}),(0,o.jsx)(tt,{trade:null!=t?t:void 0,tradeError:null!=r?r:void 0,tradeLoading:!n}),(0,o.jsx)(ez,{loaded:n,trade:t})]})})})}},77117:function(e,t,r){"use strict";r.d(t,{Z:function(){return components_CurrencyInputHeader}});var n=r(85893),i=r(87619),o=r(78108),s=r(32584);r(32692),r(64029);let CurrencyInputHeader=e=>{let{title:t,subtitle:r}=e;return(0,n.jsxs)(s.p,{width:"100%",alignItems:"center",flexDirection:"column",pb:"12px",children:[(0,n.jsx)(s.p,{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between",children:t}),r]})};var l=r(69674),a=r(11163),components_CurrencyInputHeader=e=>{let{title:t}=e,r=(0,a.useRouter)(),s=(0,n.jsxs)(i.kCb,{width:"100%",alignItems:"center",justifyContent:"space-between",flexDirection:"row",children:[(0,n.jsx)(i.kCb,{justifyContent:"end",children:(0,n.jsx)(o.Z,{color:"textSubtle",mr:"0",mode:l.a.SWAP_LIQUIDITY})}),(0,n.jsx)(i.zxk,{as:i.aBH,to:"/swap",variant:"/swap"===r.pathname?"text":"subtle",width:"75%",height:"36px",children:"Swap"}),(0,n.jsx)(i.zxk,{as:i.aBH,to:"/pool",variant:"/pool"===r.pathname?"text":"subtle",width:"100%",height:"36px",children:"Liquidity"})]});return(0,n.jsx)(CurrencyInputHeader,{title:s,subtitle:(0,n.jsx)(n.Fragment,{})})}},86832:function(e,t,r){"use strict";r.d(t,{h:function(){return TransactionErrorContent}});var n=r(85893),i=r(19521),o=r(87619),s=r(35275);let l=i.ZP.div.withConfig({componentId:"sc-1e1e6c20-0"})`
  width: 100%;
`;function TransactionErrorContent(e){let{message:t,onDismiss:r}=e;return(0,n.jsxs)(l,{children:[(0,n.jsxs)(s.Tz,{justify:"center",children:[(0,n.jsx)(o.Pz_,{color:"failure",width:"64px"}),(0,n.jsx)(o.xvT,{color:"failure",style:{textAlign:"center",width:"85%",wordBreak:"break-word"},children:(null==t?void 0:t.toString().includes("User rejected the request"))?"User rejected the request":t})]}),r?(0,n.jsx)(o.kCb,{justifyContent:"center",pt:"24px",children:(0,n.jsx)(o.zxk,{onClick:r,scale:"md",variant:"tertiary",children:"Dismiss"})}):null]})}},68158:function(){},98029:function(e,t,r){"use strict";r.d(t,{D:function(){return useMutation}});var n=r(67294),i=r(59289),o=r(27037),s=r(7506),l=r(24139),a=class extends s.l{#e;#t=void 0;#r;#n;constructor(e,t){super(),this.#e=e,this.setOptions(t),this.bindMethods(),this.#i()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){let t=this.options;this.options=this.#e.defaultMutationOptions(e),(0,l.VS)(this.options,t)||this.#e.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#r,observer:this}),t?.mutationKey&&this.options.mutationKey&&(0,l.Ym)(t.mutationKey)!==(0,l.Ym)(this.options.mutationKey)?this.reset():this.#r?.state.status==="pending"&&this.#r.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#r?.removeObserver(this)}onMutationUpdate(e){this.#i(),this.#o(e)}getCurrentResult(){return this.#t}reset(){this.#r?.removeObserver(this),this.#r=void 0,this.#i(),this.#o()}mutate(e,t){return this.#n=t,this.#r?.removeObserver(this),this.#r=this.#e.getMutationCache().build(this.#e,this.options),this.#r.addObserver(this),this.#r.execute(e)}#i(){let e=this.#r?.state??(0,i.R)();this.#t={...e,isPending:"pending"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset}}#o(e){o.V.batch(()=>{if(this.#n&&this.hasListeners()){let t=this.#t.variables,r=this.#t.context;e?.type==="success"?(this.#n.onSuccess?.(e.data,t,r),this.#n.onSettled?.(e.data,null,t,r)):e?.type==="error"&&(this.#n.onError?.(e.error,t,r),this.#n.onSettled?.(void 0,e.error,t,r))}this.listeners.forEach(e=>{e(this.#t)})})}},u=r(30202),c=r(86290);function useMutation(e,t){let r=(0,u.NL)(t),[i]=n.useState(()=>new a(r,e));n.useEffect(()=>{i.setOptions(e)},[i,e]);let s=n.useSyncExternalStore(n.useCallback(e=>i.subscribe(o.V.batchCalls(e)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),l=n.useCallback((e,t)=>{i.mutate(e,t).catch(c.Z)},[i]);if(s.error&&(0,c.L)(i.options.throwOnError,[s.error]))throw s.error;return{...s,mutate:l,mutateAsync:s.mutate}}},25375:function(e,t,r){"use strict";r.d(t,{p:function(){return useSendTransaction}});var n=r(98029),i=r(66357),o=r(37122);function useSendTransaction(e={}){let{mutation:t}=e,r=(0,o.Z)(e),{mutate:s,mutateAsync:l,...a}=(0,n.D)({...t,mutationFn:e=>(0,i.T)(r,e),mutationKey:["sendTransaction"]});return{...a,sendTransaction:s,sendTransactionAsync:l}}}}]);
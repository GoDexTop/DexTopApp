(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1690],{76710:function(e,i,n){"use strict";function ownKeys(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,t)}return n}function _objectSpread2(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(n),!0).forEach(function(i){var t;t=n[i],i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}n.d(i,{u:function(){return createRuntimeFn}});var shouldApplyCompound=(e,i,n)=>{for(var t of Object.keys(e)){var r;if(e[t]!==(null!==(r=i[t])&&void 0!==r?r:n[t]))return!1}return!0},createRuntimeFn=e=>i=>{var n=e.defaultClassName,t=_objectSpread2(_objectSpread2({},e.defaultVariants),i);for(var r in t){var o,l=null!==(o=t[r])&&void 0!==o?o:e.defaultVariants[r];if(null!=l){var d=l;"boolean"==typeof d&&(d=!0===d?"true":"false");var u=e.variantClassNames[r][d];u&&(n+=" "+u)}}for(var[a,s]of e.compoundVariants)shouldApplyCompound(a,t,e.defaultVariants)&&(n+=" "+s);return n}},13425:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/add/v2",function(){return n(75085)}])},3774:function(e,i,n){"use strict";n(87752);var t=n(21649);n(51439),n(11163),n(67294),n(63150);var r=n(27086);n(69323),i.Z=()=>{let e=(0,t.Ge)(),{chainId:i,isWrongNetwork:n}=(0,r.g)();return{...e,chainId:i,isWrongNetwork:n}}},21585:function(e,i,n){"use strict";var t=n(29928),r=n(67294),o=n(26647),l=n(66749);i.Z=function(e){var i,n;let d=(0,l.Ib)((null==e?void 0:e.isToken)?e.address:void 0),u=null===(n=(0,o.Wk)({contract:d,functionName:"totalSupply"}))||void 0===n?void 0:null===(i=n.result)||void 0===i?void 0:i.toString();return(0,r.useMemo)(()=>(null==e?void 0:e.isToken)&&u?t.ih.fromRawAmount(e,u):void 0,[e,u])}},75085:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return ei}});var t=n(85893),r=n(98287),o=n(11163),l=n(67294),d=n(19521),u=n(24619),a=n(29928),s=n(87619),c=n(40231),v=n(58722),C=n(3774),g=n(36400);let getLPSymbol=(e,i,n)=>e===a.FX[n].symbol?`${a.B5[n].symbol}-${i} LP`:i===a.FX[n].symbol?`${e}-${a.B5[n].symbol} LP`:`${e}-${i} LP`;var p=n(6981),R=n(51439),N=n(25786),x=n(50535),y=n(26256),h=n(38489),m=n(32486),f=n(88051),E=n(51675),_=n(28429),U=n(21585),b=n(9473),j=n(75760),A=n(92321),Y=n(95995),T=n(20873);function useMintState(){return(0,b.v9)(e=>e.mint)}var w=n(57078),B=n(23714),S=n(61129),k=n(60491),q=n(75533),P=n(60908),I=n(92897),M=n(18803),L=n(64029),AddLiquidity_PoolPriceBar=function(e){var i,n,r,o,l,d,u,a,s,c,v,C;let{currencies:g,noLiquidity:p,poolTokenPercentage:x,price:y}=e;return(0,t.jsx)(N.Tz,{gap:"md",children:(0,t.jsxs)(h.BA,{justify:"space-around",gap:"4px",children:[(0,t.jsxs)(N.Tz,{justify:"center",children:[(0,t.jsx)(L.xv,{children:null!==(d=null==y?void 0:y.toSignificant(6))&&void 0!==d?d:"-"}),(0,t.jsxs)(L.xv,{fontSize:"14px",pt:1,children:[null!==(u=null===(i=g[_.gN.CURRENCY_B])||void 0===i?void 0:i.symbol)&&void 0!==u?u:""," per ",null!==(a=null===(n=g[_.gN.CURRENCY_A])||void 0===n?void 0:n.symbol)&&void 0!==a?a:""]})]}),(0,t.jsxs)(N.Tz,{justify:"center",children:[(0,t.jsx)(L.xv,{children:null!==(s=null==y?void 0:null===(r=y.invert())||void 0===r?void 0:r.toSignificant(6))&&void 0!==s?s:"-"}),(0,t.jsxs)(L.xv,{fontSize:"14px",pt:1,children:[null!==(c=null===(o=g[_.gN.CURRENCY_A])||void 0===o?void 0:o.symbol)&&void 0!==c?c:""," per ",null!==(v=null===(l=g[_.gN.CURRENCY_B])||void 0===l?void 0:l.symbol)&&void 0!==v?v:""]})]}),(0,t.jsxs)(N.Tz,{justify:"center",children:[(0,t.jsxs)(L.xv,{children:[p&&y?"100":null!==(C=(null==x?void 0:x.lessThan(R.IS))?"<0.01":null==x?void 0:x.toFixed(2))&&void 0!==C?C:"0","%"]}),(0,t.jsx)(L.xv,{fontSize:"14px",pt:1,children:"Share in Trading Pair"})]})]})})},O=n(12021),D=n(31347),$=n(86832),z=n(22606),F=n(14841),V=n.n(F),Z=n(90579);let G=(0,d.ZP)(s.xuv).withConfig({componentId:"sc-baf11ccc-0"})`
  width: 12px;
  height: 12px;
  border-radius: 50%;
`,CircleSvg=e=>{let{percent:i=1,stroke:n="#1FC7D4",...r}=e;return(0,t.jsxs)(s.nyw,{width:"60px",height:"60px",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:[(0,t.jsxs)("g",{filter:"url(#filter0_i_1147_113741)",children:[(0,t.jsx)("circle",{r:"10",cx:"10",cy:"10",fill:"#7645D9"}),(0,t.jsx)("circle",{r:"5",cx:"10",cy:"10",fill:"transparent",stroke:n,strokeWidth:"10",strokeDasharray:`calc(${100*i}px * 31.4 / 100) 31.4`,transform:"rotate(-90) translate(-20)"})]}),(0,t.jsx)("defs",{children:(0,t.jsxs)("filter",{id:"filter0_i_1147_113741",x:0,y:0,width:60,height:60,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,t.jsx)("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),(0,t.jsx)("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,t.jsx)("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,t.jsx)("feOffset",{dy:-2}),(0,t.jsx)("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),(0,t.jsx)("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}),(0,t.jsx)("feBlend",{in2:"shape",result:"effect1_innerShadow_1147_113741"})]})})]})},Subtitle=e=>{let{children:i}=e;return(0,t.jsx)(s.xvT,{fontSize:"12px",textTransform:"uppercase",color:"secondary",children:i})},PairDistribution=e=>{let i,{title:n,percent:r,currencyA:o,currencyB:l,currencyAValue:d,currencyBValue:u,tooltipTargetRef:a}=e;return 100===r&&(i=d?"primary":"secondary"),(0,t.jsxs)(N.Tz,{gap:"8px",children:[(0,t.jsx)(Subtitle,{children:n}),(0,t.jsxs)(s.kCb,{children:[void 0!==r&&(0,t.jsx)("div",{ref:a,children:(0,t.jsx)(CircleSvg,{stroke:i,percent:r,mr:"34px"})}),(0,t.jsxs)(N.Tz,{style:{width:"100%"},children:[o&&(0,t.jsxs)(h.m0,{children:[(0,t.jsxs)(h.BA,{gap:"4px",children:[(0,t.jsx)(G,{bg:"primary"}),(0,t.jsx)(Z.X,{currency:o}),(0,t.jsx)(s.xvT,{children:null==o?void 0:o.symbol})]}),(0,t.jsx)(s.xvT,{children:d||"0"})]}),l&&(0,t.jsxs)(h.m0,{children:[(0,t.jsxs)(h.BA,{gap:"4px",children:[(0,t.jsx)(G,{bg:"secondary"}),(0,t.jsx)(Z.X,{currency:l}),(0,t.jsx)(s.xvT,{children:null==l?void 0:l.symbol})]}),(0,t.jsx)(s.xvT,{children:u||"0"})]})]})]})]})},AddLiquidityModalHeader=e=>{var i,n,r,o,l,d,u,a,c;let{currencies:v,poolTokenPercentage:C,liquidityMinted:g,price:p,noLiquidity:R,children:x}=e;return(0,t.jsxs)(N.Tz,{gap:"24px",children:[(0,t.jsx)(N.Tz,{gap:"8px",children:(0,t.jsxs)(h.m0,{children:[(0,t.jsxs)(h.BA,{gap:"4px",children:[(0,t.jsx)(Z.g,{currency0:v[z.g.CURRENCY_A],currency1:v[z.g.CURRENCY_B],size:24}),(0,t.jsx)(s.xvT,{color:"textSubtle",children:(null===(i=v[z.g.CURRENCY_A])||void 0===i?void 0:i.symbol)&&(null===(n=v[z.g.CURRENCY_B])||void 0===n?void 0:n.symbol)&&getLPSymbol(null===(r=v[z.g.CURRENCY_A])||void 0===r?void 0:r.symbol,null===(o=v[z.g.CURRENCY_B])||void 0===o?void 0:o.symbol,null===(l=v[z.g.CURRENCY_A])||void 0===l?void 0:l.chainId)})]}),(0,t.jsx)(s.xvT,{ml:"8px",children:null==g?void 0:g.toSignificant(6)})]})}),(0,t.jsxs)(h.m0,{children:[(0,t.jsx)(Subtitle,{children:"Your share in the pair"}),(0,t.jsxs)(s.xvT,{children:[R?"100":null==C?void 0:C.toSignificant(4),"%"]})]}),(0,t.jsx)(N.Tz,{gap:"8px",children:x}),!!p&&(0,t.jsxs)(N.Tz,{children:[(0,t.jsxs)(h.m0,{children:[(0,t.jsx)(Subtitle,{children:"Rates"}),(0,t.jsx)(s.xvT,{children:`1 ${null===(d=v[z.g.CURRENCY_A])||void 0===d?void 0:d.symbol} = ${null==p?void 0:p.toSignificant(4)} ${null===(u=v[z.g.CURRENCY_B])||void 0===u?void 0:u.symbol}`})]}),(0,t.jsx)(h.m0,{style:{justifyContent:"flex-end"},children:(0,t.jsx)(s.xvT,{children:`1 ${null===(a=v[z.g.CURRENCY_B])||void 0===a?void 0:a.symbol} = ${null==p?void 0:p.invert().toSignificant(4)} ${null===(c=v[z.g.CURRENCY_A])||void 0===c?void 0:c.symbol}`})})]})]})};var components_ConfirmAddLiquidityModal=e=>{let{title:i,onDismiss:n,customOnDismiss:r,attemptingTxn:o,hash:d,pendingText:u,price:a,currencies:s,noLiquidity:c,allowedSlippage:v,parsedAmounts:C,liquidityErrorMessage:p,onAdd:R,poolTokenPercentage:N,liquidityMinted:x,currencyToAdd:y,isStable:h}=e,m=.5;if(h&&C[z.g.CURRENCY_A]||C[z.g.CURRENCY_B]){var f,E;let e=C[z.g.CURRENCY_A]?V()(null===(f=C[z.g.CURRENCY_A])||void 0===f?void 0:f.toSignificant(6)):0,i=a&&parseFloat(null==a?void 0:a.toSignificant(4))||1,n=i*e,t=C[z.g.CURRENCY_B]?V()(null===(E=C[z.g.CURRENCY_B])||void 0===E?void 0:E.toSignificant(6)):0;m=n/(n+t)}let _=(0,l.useCallback)(()=>{var e,i;return(0,t.jsx)(AddLiquidityModalHeader,{allowedSlippage:v,currencies:s,liquidityMinted:x,poolTokenPercentage:N,price:a,noLiquidity:c,children:(0,t.jsx)(PairDistribution,{title:"Input",percent:m,currencyA:s[z.g.CURRENCY_A],currencyAValue:null===(e=C[z.g.CURRENCY_A])||void 0===e?void 0:e.toSignificant(6),currencyB:s[z.g.CURRENCY_B],currencyBValue:null===(i=C[z.g.CURRENCY_B])||void 0===i?void 0:i.toSignificant(6)})})},[v,m,s,x,c,C,N,a]),U=(0,l.useCallback)(()=>(0,t.jsx)(g.A,{width:"100%",onClick:R,mt:"20px",height:"48px",variant:"primary",children:c?"Create Pair & Supply":"Confirm Supply"}),[c,R]),b=(0,l.useCallback)(()=>p?(0,t.jsx)($.h,{message:p,onDismiss:n}):(0,t.jsx)(O.p,{topContent:_,bottomContent:U}),[n,U,_,p]);return(0,t.jsx)(D.Z,{minWidth:["100%",null,"420px"],title:i,onDismiss:n,customOnDismiss:r,attemptingTxn:o,currencyToAdd:y,hash:d,content:b,pendingText:u})},K=n(89704),X=n(27086),H=n(78774),W=n(94808),Q=n(45775);let useCurrencySelectRoute=()=>{let e=(0,K.Z)(),i=(0,o.useRouter)(),{chainId:n}=(0,X.g)(),[t,r]=i.query.currency||[e.symbol,W.fV[n].address],d=(0,l.useCallback)((e,i)=>{var t,r,o;let l=(0,H.Z)(e);if(l===i)return[l,void 0];let d=(null==e?void 0:e.isNative)||void 0!==n&&l===(null===(t=a.FX[n])||void 0===t?void 0:t.address),u=void 0!==i&&(i===(null===(r=a.B5[n])||void 0===r?void 0:r.symbol)||void 0!==n&&(0,Q.K)(i)===(null===(o=a.FX[n])||void 0===o?void 0:o.address));return d&&u?[l,void 0]:[l,i]},[n]),u=(0,l.useCallback)(e=>{let[n,t]=d(e,r);void 0===t?i.replace({pathname:i.pathname,query:{...i.query,currency:[n]}},void 0,{shallow:!0}):i.replace({pathname:i.pathname,query:{...i.query,currency:[n,t]}},void 0,{shallow:!0})},[d,r,i]),s=(0,l.useCallback)(e=>{let[n,r]=d(e,t);void 0===r?i.replace({pathname:i.pathname,query:{...i.query,currency:[n]}},void 0,{shallow:!0}):i.replace({pathname:i.pathname,query:{...i.query,currency:[r,n]}},void 0,{shallow:!0})},[d,t,i]);return{handleCurrencyASelect:u,handleCurrencyBSelect:s}},J=(0,d.ZP)(s.kCb).withConfig({componentId:"sc-1e480247-0"})`
  border: 1px solid ${e=>{let{theme:i}=e;return i.colors.input}};
  padding: 10px 10px;
  border-radius: 8px;
  background: ${e=>{let{theme:i}=e;return i.colors.cardBorder}};
`;function AddLiquidity(e){var i,n,r,o,d,b,L,O,D,$,z,F,V,Z,G,K,X,H;let{currencyA:W,currencyB:Q}=e,{account:ee,chainId:ei}=(0,v.Z)(),{isWrongNetwork:en}=(0,C.Z)(),{open:et}=(0,u.k_)(),er=(0,B.uB)(),{independentField:eo,typedValue:el,otherTypedValue:ed}=useMintState(),{dependentField:eu,currencies:ea,pair:es,pairState:ec,currencyBalances:ev,parsedAmounts:eC,price:eg,noLiquidity:ep,liquidityMinted:eR,poolTokenPercentage:eN,error:ex,addError:ey}=function(e,i){var n,t,r,o,d,u,s,c;let v,C;let{address:g}=(0,A.m)(),{independentField:p,typedValue:N,otherTypedValue:x}=useMintState(),y=p===_.gN.CURRENCY_A?_.gN.CURRENCY_B:_.gN.CURRENCY_A,h=(0,l.useMemo)(()=>({[_.gN.CURRENCY_A]:null!=e?e:void 0,[_.gN.CURRENCY_B]:null!=i?i:void 0}),[e,i]),[f,E]=(0,m.yX)(h[_.gN.CURRENCY_A],h[_.gN.CURRENCY_B]),b=(0,U.Z)(null==E?void 0:E.liquidityToken),Y=f===m._G.NOT_EXISTS||!!(b&&b.quotient===R.iV)||!!(f===m._G.EXISTS&&E&&E.reserve0.quotient===R.iV&&E.reserve1.quotient===R.iV),w=(0,T.K5)(null!=g?g:void 0,(0,l.useMemo)(()=>[h[_.gN.CURRENCY_A],h[_.gN.CURRENCY_B]],[h])),B={[_.gN.CURRENCY_A]:w[0],[_.gN.CURRENCY_B]:w[1]},S=(0,j.Z)(N,h[p]),k=(0,l.useMemo)(()=>{if(Y)return x&&h[y]?(0,j.Z)(x,h[y]):void 0;if(S){let n=null==S?void 0:S.wrapped,[t,r]=[null==e?void 0:e.wrapped,null==i?void 0:i.wrapped];if(t&&r&&n&&E){let o=y===_.gN.CURRENCY_B?i:e,l=y===_.gN.CURRENCY_B?E.priceOf(t).quote(n):E.priceOf(r).quote(n);return(null==o?void 0:o.isNative)?a.ih.fromRawAmount(o,l.quotient):l}}},[Y,x,h,y,S,e,i,E]),q=(0,l.useMemo)(()=>({[_.gN.CURRENCY_A]:p===_.gN.CURRENCY_A?S:k,[_.gN.CURRENCY_B]:p===_.gN.CURRENCY_A?k:S}),[k,S,p]),P=(0,l.useMemo)(()=>{if(Y){let{[_.gN.CURRENCY_A]:e,[_.gN.CURRENCY_B]:i}=q;return e&&i?new a.tA(e.currency,i.currency,e.quotient,i.quotient):void 0}let i=null==e?void 0:e.wrapped;return E&&i?E.priceOf(i):void 0},[e,Y,E,q]),I=(0,l.useMemo)(()=>{let{[_.gN.CURRENCY_A]:e,[_.gN.CURRENCY_B]:i}=q,[n,t]=[null==e?void 0:e.wrapped,null==i?void 0:i.wrapped];if(E&&b&&n&&t)try{return E.getLiquidityMinted(b,n,t)}catch(e){console.error(e)}},[q,E,b]),M=(0,l.useMemo)(()=>{if(I&&b)return new a.gG(I.quotient,b.add(I).quotient)},[I,b]);g||(v="Connect Wallet"),f===m._G.INVALID&&(v=null!=v?v:"Choose a valid pair");let{[_.gN.CURRENCY_A]:L,[_.gN.CURRENCY_B]:O}=q;return L&&O&&(null==B?void 0:null===(n=B[_.gN.CURRENCY_A])||void 0===n?void 0:n.equalTo(0))&&(null==B?void 0:null===(t=B[_.gN.CURRENCY_B])||void 0===t?void 0:t.equalTo(0))&&(v=null!=v?v:"No token balance"),q[_.gN.CURRENCY_A]&&q[_.gN.CURRENCY_B]||(C="Enter an amount"),L&&(null==B?void 0:null===(r=B[_.gN.CURRENCY_A])||void 0===r?void 0:r.lessThan(L))&&(C=`Insufficient ${null!==(u=null===(d=h[_.gN.CURRENCY_A])||void 0===d?void 0:d.symbol)&&void 0!==u?u:""} balance`),O&&(null==B?void 0:null===(o=B[_.gN.CURRENCY_B])||void 0===o?void 0:o.lessThan(O))&&(C=`Insufficient ${null!==(c=null===(s=h[_.gN.CURRENCY_B])||void 0===s?void 0:s.symbol)&&void 0!==c?c:""} balance`),{dependentField:y,currencies:h,pair:E,pairState:f,currencyBalances:B,parsedAmounts:q,price:P,noLiquidity:Y,liquidityMinted:I,poolTokenPercentage:M,error:v,addError:C}}(null!=W?W:void 0,null!=Q?Q:void 0),{onFieldAInput:eh,onFieldBInput:em}=function(e){let i=(0,Y.TL)(),n=(0,l.useCallback)(n=>{i((0,_.LC)({field:_.gN.CURRENCY_A,typedValue:n,noLiquidity:!0===e}))},[i,e]),t=(0,l.useCallback)(n=>{i((0,_.LC)({field:_.gN.CURRENCY_B,typedValue:n,noLiquidity:!0===e}))},[i,e]);return{onFieldAInput:n,onFieldBInput:t}}(ep),[{attemptingTxn:ef,liquidityErrorMessage:eE,txHash:e_},eU]=(0,l.useState)({attemptingTxn:!1,liquidityErrorMessage:void 0,txHash:void 0}),eb=(0,E.$)(),[ej]=(0,B.$2)(),eA=[_.gN.CURRENCY_A,_.gN.CURRENCY_B].reduce((e,i)=>({...e,[i]:(0,q.i)(ev[i])}),{}),{handleCurrencyASelect:eY,handleCurrencyBSelect:eT}=useCurrencySelectRoute(),ew=(0,l.useMemo)(()=>{var e,i;return{[eo]:el,[eu]:ep?ed:null!==(i=null===(e=eC[eu])||void 0===e?void 0:e.toSignificant(6))&&void 0!==i?i:""}},[eu,eo,ep,ed,eC,el]),{approvalState:eB,approveCallback:eS}=(0,f.qL)(eC[_.gN.CURRENCY_A],R.bR[ei]),{approvalState:ek,approveCallback:eq}=(0,f.qL)(eC[_.gN.CURRENCY_B],R.bR[ei]),eP=(0,w.h7)(),eI=(0,k.Ti)();async function onAdd(){var e,i,n,t,r,o,l;let d,u,a,s;if(!ei||!ee||!eI)return;let{[_.gN.CURRENCY_A]:c,[_.gN.CURRENCY_B]:v}=eC;if(!c||!v||!W||!Q||!eb)return;let C={[_.gN.CURRENCY_A]:(0,k.uc)(c,ep?0:ej)[0],[_.gN.CURRENCY_B]:(0,k.uc)(v,ep?0:ej)[0]};if((null==W?void 0:W.isNative)||(null==Q?void 0:Q.isNative)){let t=null==Q?void 0:Q.isNative;d=eI.estimateGas.addLiquidityETH,u=eI.write.addLiquidityETH,a=[null!==(n=null===(i=t?W:Q)||void 0===i?void 0:null===(e=i.wrapped)||void 0===e?void 0:e.address)&&void 0!==n?n:"",(t?c:v).quotient.toString(),C[t?_.gN.CURRENCY_A:_.gN.CURRENCY_B].toString(),C[t?_.gN.CURRENCY_B:_.gN.CURRENCY_A].toString(),ee,Number(eb[0]).toString()],s=(t?v:c).quotient}else d=eI.estimateGas.addLiquidity,u=eI.write.addLiquidity,a=[null!==(o=null==W?void 0:null===(t=W.wrapped)||void 0===t?void 0:t.address)&&void 0!==o?o:"",null!==(l=null==Q?void 0:null===(r=Q.wrapped)||void 0===r?void 0:r.address)&&void 0!==l?l:"",c.quotient.toString(),v.quotient.toString(),C[_.gN.CURRENCY_A].toString(),C[_.gN.CURRENCY_B].toString(),ee,Number(eb[0]).toString()],s=null;eU({attemptingTxn:!0,liquidityErrorMessage:void 0,txHash:void 0}),await d(a,s?{value:s}:{}).then(e=>u(a,{...s?{value:s}:{},gasLimit:(0,S.yC)(e)}).then(e=>{var i,n,t,r;eU({attemptingTxn:!1,liquidityErrorMessage:void 0,txHash:e});let o=null===(i=ea[_.gN.CURRENCY_A])||void 0===i?void 0:i.symbol,l=null===(n=eC[_.gN.CURRENCY_A])||void 0===n?void 0:n.toSignificant(3),d=null===(t=ea[_.gN.CURRENCY_B])||void 0===t?void 0:t.symbol,u=null===(r=eC[_.gN.CURRENCY_B])||void 0===r?void 0:r.toSignificant(3);eP({hash:e},{summary:`Add ${l} ${o} and ${u} ${d}`,translatableSummary:{text:"Add %amountA% %symbolA% and %amountB% %symbolB%",data:{amountA:null!=l?l:"",symbolA:null!=o?o:"",amountB:null!=u?u:"",symbolB:null!=d?d:""}},type:"add-liquidity"}),es&&er(es)})).catch(e=>{e&&4001!==e.code&&console.error("Add V2 Liquidity failed",e,a,s),eU({attemptingTxn:!1,liquidityErrorMessage:e&&4001!==e.code?`Add liquidity failed: ${(0,p.e)(e)}`:void 0,txHash:void 0})})}let eM=`Supplying ${null!==(z=null===(i=eC[_.gN.CURRENCY_A])||void 0===i?void 0:i.toSignificant(6))&&void 0!==z?z:""} ${null!==(F=null===(n=ea[_.gN.CURRENCY_A])||void 0===n?void 0:n.symbol)&&void 0!==F?F:""} and ${null!==(V=null===(r=eC[_.gN.CURRENCY_B])||void 0===r?void 0:r.toSignificant(6))&&void 0!==V?V:""} ${null!==(Z=null===(o=ea[_.gN.CURRENCY_B])||void 0===o?void 0:o.symbol)&&void 0!==Z?Z:""}`,eL=(0,l.useCallback)(()=>{e_&&eh("")},[eh,e_]),[eO]=(0,c.dd)((0,t.jsx)(components_ConfirmAddLiquidityModal,{title:ep?"You are creating a trading pair":"You will receive",customOnDismiss:eL,attemptingTxn:ef,hash:e_,pendingText:eM,currencyToAdd:null==es?void 0:es.liquidityToken,allowedSlippage:ej,onAdd:onAdd,parsedAmounts:eC,currencies:ea,liquidityErrorMessage:eE,price:eg,noLiquidity:ep,poolTokenPercentage:eN,liquidityMinted:eR}),!0,!0,"addLiquidityModal"),eD=!ex&&!ey,e$=!eD||eB!==f.UK.APPROVED||ek!==f.UK.APPROVED,ez=eB===f.UK.NOT_APPROVED||eB===f.UK.PENDING,eF=ek===f.UK.NOT_APPROVED||ek===f.UK.PENDING;return(0,t.jsx)(M.Z,{children:(0,t.jsx)(s.kCb,{justifyContent:"center",flexDirection:"column",alignItems:"center",mt:"40px",children:(0,t.jsxs)(y.j,{children:[(0,t.jsx)(y.t,{title:(null===(d=ea[_.gN.CURRENCY_A])||void 0===d?void 0:d.symbol)&&(null===(b=ea[_.gN.CURRENCY_B])||void 0===b?void 0:b.symbol)?`${getLPSymbol(ea[_.gN.CURRENCY_A].symbol,ea[_.gN.CURRENCY_B].symbol,ei)}`:"Add V2 Liquidity",backTo:"/pool/v2"}),(0,t.jsxs)(N.Tz,{style:{marginTop:"10px"},children:[(0,t.jsx)(x.Z,{showBUSD:!0,onInputBlur:void 0,error:!1,disabled:!1,beforeButton:(0,t.jsx)(t.Fragment,{}),onCurrencySelect:eY,value:ew[_.gN.CURRENCY_A],onUserInput:eh,onPercentInput:e=>{if(eA[_.gN.CURRENCY_A]){var i,n;eh(null!==(n=null===(i=eA[_.gN.CURRENCY_A])||void 0===i?void 0:i.multiply(new a.gG(e,100)).toExact())&&void 0!==n?n:"")}},onMax:()=>{var e,i;eh(null!==(i=null===(e=eA[_.gN.CURRENCY_A])||void 0===e?void 0:e.toExact())&&void 0!==i?i:"")},showQuickInputButton:!0,showMaxButton:!0,maxAmount:eA[_.gN.CURRENCY_A],currency:ea[_.gN.CURRENCY_A],id:"add-liquidity-input-tokena",showCommonBases:!0,commonBasesType:I.L0.LIQUIDITY}),(0,t.jsx)(s.kCb,{my:"-16px",justifyContent:"center",zIndex:"2",children:(0,t.jsx)(J,{children:(0,t.jsx)(s.dtP,{width:"16px"})})}),(0,t.jsx)(x.Z,{showBUSD:!0,onInputBlur:void 0,error:!1,beforeButton:(0,t.jsx)(t.Fragment,{}),onCurrencySelect:eT,value:ew[_.gN.CURRENCY_B],onUserInput:em,onPercentInput:e=>{if(eA[_.gN.CURRENCY_B]){var i,n;em(null!==(n=null===(i=eA[_.gN.CURRENCY_B])||void 0===i?void 0:i.multiply(new a.gG(e,100)).toExact())&&void 0!==n?n:"")}},onMax:()=>{var e,i;em(null!==(i=null===(e=eA[_.gN.CURRENCY_B])||void 0===e?void 0:e.toExact())&&void 0!==i?i:"")},showQuickInputButton:!0,showMaxButton:!0,maxAmount:eA[_.gN.CURRENCY_B],currency:ea[_.gN.CURRENCY_B],id:"add-liquidity-input-tokenb",showCommonBases:!0,commonBasesType:I.L0.LIQUIDITY}),ea[_.gN.CURRENCY_A]&&ea[_.gN.CURRENCY_B]&&ec!==m._G.INVALID&&(0,t.jsx)(s.xuv,{my:"20px",children:(0,t.jsx)(AddLiquidity_PoolPriceBar,{currencies:ea,poolTokenPercentage:eN,noLiquidity:ep,price:eg})}),ee?en?(0,t.jsx)(g.A,{height:"58px"}):(0,t.jsxs)(N.Tz,{gap:"md",children:[(ez||eF)&&eD&&(0,t.jsxs)(h.m0,{style:{gap:"8px"},children:[ez&&(0,t.jsx)(s.zxk,{onClick:eS,disabled:eB===f.UK.PENDING,width:"100%",height:"58px",variant:"secondary",children:eB===f.UK.PENDING?(0,t.jsxs)(P.Z,{children:["Enabling ",null!==(G=null===(L=ea[_.gN.CURRENCY_A])||void 0===L?void 0:L.symbol)&&void 0!==G?G:"Unknown"]}):`Enable ${null!==(K=null===(O=ea[_.gN.CURRENCY_A])||void 0===O?void 0:O.symbol)&&void 0!==K?K:"Unknown"}`}),eF&&(0,t.jsx)(s.zxk,{onClick:eq,disabled:ek===f.UK.PENDING,width:"100%",height:"58px",variant:"secondary",children:ek===f.UK.PENDING?(0,t.jsxs)(P.Z,{children:["Enabling ",null!==(X=null===(D=ea[_.gN.CURRENCY_B])||void 0===D?void 0:D.symbol)&&void 0!==X?X:"Unknown"]}):`Enable ${null!==(H=null===($=ea[_.gN.CURRENCY_B])||void 0===$?void 0:$.symbol)&&void 0!==H?H:"Unknown"}`})]}),(0,t.jsx)(g.A,{variant:eD?"primary":"danger",onClick:()=>{eU({attemptingTxn:!1,liquidityErrorMessage:void 0,txHash:void 0}),eO()},disabled:e$,height:"58px",children:(null!=ex?ex:ey)||"Supply"})]}):(0,t.jsx)(s.zxk,{width:"100%",variant:"primary",height:"48px",onClick:()=>et(),children:(0,t.jsx)(s.xvT,{fontSize:"16px",children:"Connect Wallet"})})]})]})})})}var ee=n(63150);let AddLiquidityPage=()=>{let e=(0,o.useRouter)(),{currencyIdA:i,currencyIdB:n}=function(){var e,i;let{chainId:n}=(0,X.g)(),t=(0,o.useRouter)(),r=(0,K.Z)(),[l,d]=t.isReady?t.query.currency||[r.symbol,(null===(e=W.fV[n])||void 0===e?void 0:e.address)||(null===(i=W.gn[n])||void 0===i?void 0:i.address)]:[void 0,void 0,void 0];return{currencyIdA:l,currencyIdB:d}}();(0,l.useCallback)(()=>{e.replace({pathname:e.pathname,query:{currency:[i,n]}},void 0,{shallow:!0})},[e,i,n]);let d=(0,r.U8)(i),u=(0,r.U8)(n);return(0,t.jsx)(AddLiquidity,{currencyA:d,currencyB:u})};AddLiquidityPage.chains=ee.vo;var ei=AddLiquidityPage},78774:function(e,i,n){"use strict";function currencyId(e){var i;if(null==e?void 0:e.isNative)return null===(i=e.symbol)||void 0===i?void 0:i.toUpperCase();if(null==e?void 0:e.isToken)return e.address;throw Error("invalid currency")}n.d(i,{H:function(){return currencyId}}),i.Z=currencyId},75533:function(e,i,n){"use strict";n.d(i,{i:function(){return maxAmountSpend}});var t=n(29928),r=n(51439);function maxAmountSpend(e){var i;if(e)return(null===(i=e.currency)||void 0===i?void 0:i.isNative)?e.quotient>r.Uz?t.ih.fromRawAmount(e.currency,e.quotient-r.Uz):t.ih.fromRawAmount(e.currency,r.iV):e}},6981:function(e,i,n){"use strict";function transactionErrorToUserReadableMessage(e){let i;for(;e;){var n,t,r,o,l,d;i=null!==(l=null!==(o=null!==(r=e.reason)&&void 0!==r?r:null===(n=e.data)||void 0===n?void 0:n.message)&&void 0!==o?o:e.message)&&void 0!==l?l:i,e=null!==(d=e.error)&&void 0!==d?d:null===(t=e.data)||void 0===t?void 0:t.originalError}(null==i?void 0:i.indexOf("execution reverted: "))===0&&(i=i.substring(20));let formatErrorMessage=e=>[e,`(${i})`].join(" ");switch(i){case"PancakeRouter: EXPIRED":return formatErrorMessage("The transaction could not be sent because the deadline has passed. Please check that your transaction deadline is not too low.");case"PancakeRouter: INSUFFICIENT_OUTPUT_AMOUNT":case"PancakeRouter: EXCESSIVE_INPUT_AMOUNT":case"PancakeRouter: INSUFFICIENT_A_AMOUNT":case"PancakeRouter: INSUFFICIENT_B_AMOUNT":case"swapMulti: incorrect user balance":case"Pancake: K":return formatErrorMessage("This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.");case"TransferHelper: TRANSFER_FROM_FAILED":return formatErrorMessage("The input token cannot be transferred. There may be an issue with the input token.");case"Pancake: TRANSFER_FAILED":return formatErrorMessage("The output token cannot be transferred. There may be an issue with the output token.");default:if((null==i?void 0:i.indexOf("undefined is not an object"))!==-1)return console.error(e,i),"An error occurred when trying to execute this operation. You may need to increase your slippage tolerance. If that does not work, there may be an incompatibility with the token you are trading.";return`Unknown error${i?`: "${i}"`:""}. Try increasing your slippage tolerance.`}}n.d(i,{e:function(){return transactionErrorToUserReadableMessage}})},86832:function(e,i,n){"use strict";n.d(i,{h:function(){return TransactionErrorContent}});var t=n(85893),r=n(19521),o=n(87619),l=n(35275);let d=r.ZP.div.withConfig({componentId:"sc-1e1e6c20-0"})`
  width: 100%;
`;function TransactionErrorContent(e){let{message:i,onDismiss:n}=e;return(0,t.jsxs)(d,{children:[(0,t.jsxs)(l.Tz,{justify:"center",children:[(0,t.jsx)(o.Pz_,{color:"failure",width:"64px"}),(0,t.jsx)(o.xvT,{color:"failure",style:{textAlign:"center",width:"85%",wordBreak:"break-word"},children:(null==i?void 0:i.toString().includes("User rejected the request"))?"User rejected the request":i})]}),n?(0,t.jsx)(o.kCb,{justifyContent:"center",pt:"24px",children:(0,t.jsx)(o.zxk,{onClick:n,scale:"md",variant:"tertiary",children:"Dismiss"})}):null]})}}},function(e){e.O(0,[1314,5223,2464,9774,2888,179],function(){return e(e.s=13425)}),_N_E=e.O()}]);
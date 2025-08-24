"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8638],{13336:function(e,t,n){n.d(t,{d0:function(){return parseViemError},yS:function(){return getViemErrorMessage}});var r=n(62027),i=n(39028);function parseViemError(e){return e instanceof r.G?e:"string"==typeof e?new i.ir(Error(e)):e instanceof Error?new i.ir(e):null}function getViemErrorMessage(e){let t=parseViemError(e);return t?t.details||t.shortMessage:String(e)}},17133:function(e,t,n){n.d(t,{Z:function(){return isUserRejected}});let isUserRejected=e=>"object"==typeof e&&e.toString().includes("User rejected the request.")},98638:function(e,t,n){n.d(t,{Z:function(){return views_Farms}});var r=n(85893),i=n(67294),a=n(44431),l=n.n(a),s=n(92321),o=n(31258),d=n(19521),c=n(18803),u=n(94808),p=n(58722),h=n(76479),m=n(1730),x=n(9473),g=n(95995),f=n(10777);n(3379);var v=n(83666),k=n(27086),w=n(83591),b=n(92256),y=n(58409),j=n(68697),C=n(8499);let selectFarmByKey=(e,t)=>n=>n.farms.data.find(n=>n[e]===t),makeUserFarmFromPidSelector=e=>(0,j.P1)([selectFarmByKey("pid",e)],e=>{let{allowance:t,tokenBalance:n,stakedBalance:r,earnings:i}=(0,C.lD)(e);return{allowance:t,tokenBalance:n,stakedBalance:r,earnings:i}});(0,j.P1)([e=>e.farms.data.find(e=>2===e.pid)],e=>{let t=null==e?void 0:e.tokenPriceBusd;return new(l())(t||"0")});let selectFarms=e=>e.farms,farmSelector=e=>(0,j.P1)([selectFarms],t=>(function(e,t){let n=e.data.map(C.b4).filter(e=>e.token.chainId===t),{loadArchivedFarmsData:r,userDataLoaded:i,poolLength:a,regularCakePerBlock:l,totalAllocPoint:s}=e;return{data:n,loadArchivedFarmsData:!!r,userDataLoaded:!!i,poolLength:a,regularCakePerBlock:l,totalAllocPoint:s}})(t,e)),useFarms=()=>{let{chainId:e}=(0,k.g)();return(0,x.v9)((0,i.useMemo)(()=>farmSelector(e),[e]))},useFarmUser=e=>{let t=(0,i.useMemo)(()=>makeUserFarmFromPidSelector(e),[e]);return(0,x.v9)(t)};var S=n(28583);let T=i.useLayoutEffect;var hooks_useIntersectionObserver=()=>{let[e,t]=(0,i.useState)(null),n=(0,i.useRef)(null),[r,a]=(0,i.useState)(!1);return T(()=>{let t=window.IntersectionObserver;return t?(!n.current&&e&&(n.current=new window.IntersectionObserver(e=>{let[t]=e;a(t.isIntersecting)},{rootMargin:"0px",threshold:1}),n.current.observe(e)),n.current&&!e&&(n.current.disconnect(),a(!1))):a(!0),()=>{n.current&&n.current.disconnect()}},[e]),{observerRef:t,isIntersecting:r}};(0,n(92404).t)(18);let getLpApr=()=>({}),getFarmApr=(e,t,n,r,i,a)=>{var s;console.log("getFarmApr inputs:",{chainId:e,poolWeight:t.toString(),cakePriceUsd:n.toString(),poolLiquidityUsd:r.toString(),farmAddress:i,regularCakePerBlock:a});let o=t?t.times(31536e3*a):new(l())(0),d=o.times(n).div(r).times(100),c=null;!d.isNaN()&&d.isFinite()&&(c=d.toNumber());let u=null!==(s=getLpApr()[null==i?void 0:i.toLowerCase()]||getLpApr()[i])&&void 0!==s?s:0;return console.log("APR result:",{cakeRewardsApr:c,lpRewardsApr:u}),{cakeRewardsApr:c,lpRewardsApr:u}};var P=n(75472),I=n.n(P),F=n(23714),A=n(11163);let getDisplayApr=(e,t)=>e&&t?e+t>1e6?`~${(e+t).toPrecision(6)}`:(e+t).toLocaleString("en-US",{maximumFractionDigits:2}):e?e>1e6?`~${e.toPrecision(6)}`:e.toLocaleString("en-US",{maximumFractionDigits:2}):null,_=[{id:1,name:"farm",sortable:!1,label:""},{id:2,name:"name",sortable:!0,label:""},{id:3,name:"earned",sortable:!0,label:"Earned"},{id:4,name:"apr",sortable:!0,label:"APR"},{id:5,name:"liquidity",sortable:!0,label:"Total Staked"},{id:6,name:"details",sortable:!0,label:""}],$=[{id:1,name:"farm",sortable:!1,label:""},{id:2,name:"name",sortable:!0,label:""},{id:3,name:"liquidity",sortable:!0,label:"Total Staked"},{id:4,name:"apr",sortable:!0,label:"APR"},{id:5,name:"details",sortable:!0,label:""}];var D=n(36945),Z=n(87040),L=n(29928);let getLiquidityUrlPathParts=e=>{let{quoteTokenAddress:t,tokenAddress:n,chainId:r}=e,i=L.FX[r],a=t&&t!==(null==i?void 0:i.address)?t:L.B5[r].symbol,l=n&&n!==(null==i?void 0:i.address)?n:L.B5[r].symbol;return`/add/v2?currency=${a}&currency=${l}`};var utils_getLiquidityUrlPathParts=e=>{let{quoteTokenAddress:t,tokenAddress:n,chainId:r,lpAddress:i}=e;return(null==i?void 0:i.toLowerCase())==="0x891f7557343147eb67c5b3495b776fdd76eacf61"?`https://dextop.pro/swapv1/#/add/PLS/${n}`:getLiquidityUrlPathParts({quoteTokenAddress:t,tokenAddress:n,chainId:r})},U=n(40231);let R=(0,d.ZP)(o.kCb).withConfig({componentId:"sc-fd627e7a-0"})`
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
  width: 100px;
`;var components_ApyButton=e=>{var t;let{pid:n,lpLabel:i,lpTokenPrice:a,lpSymbol:d,cakePrice:c,apr:u,multiplier:p,displayApr:h,addLiquidityUrl:m,strikethrough:x,isTokenOnly:g}=e,{address:f}=(0,s.m)(),{tokenBalance:v,stakedBalance:k}=useFarmUser(n),w=new(l())(k).plus(v).gt(0)?new(l())(k).plus(v):b.HW,[y]=(0,U.dd)((0,r.jsx)(o.F5h,{account:f,pid:n,linkLabel:`Get ${null!=i?i:"unknown"}`,stakingTokenBalance:w,stakingTokenDecimals:18,stakingTokenSymbol:d,stakingTokenPrice:a.toNumber(),earningTokenPrice:null!==(t=null==c?void 0:c.toNumber())&&void 0!==t?t:0,apr:u,multiplier:p,displayApr:h,linkHref:m,isFarm:!g}),!0,!0,`FarmModal${n}`),handleClickButton=e=>{e.stopPropagation(),y()};return(0,r.jsx)(o.kCb,{flexDirection:"column",alignItems:"flex-start",children:(0,r.jsx)(R,{alignItems:"center",style:{textDecoration:x?"line-through":"initial"},onClick:e=>{handleClickButton(e)},children:(0,r.jsxs)(o.xvT,{children:[h,"%"]})})})};let q=d.ZP.div.withConfig({componentId:"sc-81c11022-0"})`
  display: flex;
  align-items: center;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};

  button {
    width: 20px;
    height: 20px;

    svg {
      path {
        fill: ${e=>{let{theme:t}=e;return t.colors.textSubtle}};
      }
    }
  }
`,B=d.ZP.div.withConfig({componentId:"sc-81c11022-1"})`
  // min-width: 60px;
  text-align: left;
`;var components_Apr=e=>{let{value:t,pid:n,lpLabel:i,lpSymbol:a,lpTokenPrice:l,multiplier:s,tokenAddress:d,quoteTokenAddress:c,cakePrice:u,originalValue:p,hideButton:h=!1,strikethrough:m,lpRewardsApr:x,useTooltipText:g=!0,isTokenOnly:f}=e,{chainId:v}=(0,k.g)(),w=utils_getLiquidityUrlPathParts({quoteTokenAddress:c,tokenAddress:d,chainId:v}),b=`add/${w}`;return 0!==p?(0,r.jsx)(q,{children:p?(0,r.jsx)(components_ApyButton,{variant:h?"text":"text-and-button",pid:n,lpSymbol:a,lpLabel:i,lpTokenPrice:l,multiplier:s,cakePrice:u,apr:p,displayApr:t,lpRewardsApr:x,addLiquidityUrl:b,strikethrough:m,useTooltipText:g,hideButton:h,isTokenOnly:null!=f&&f}):(0,r.jsx)(B,{children:(0,r.jsx)(o.OdW,{width:60})})}):(0,r.jsx)(q,{children:(0,r.jsxs)(B,{children:[p,"%"]})})};let getImageUrlFromToken=e=>{let t=(null==e?void 0:e.isNative)?e.wrapped.address:e.address;return`/images/${e.chainId}/tokens/${t}.png`},TokenPairImage=e=>{let{primaryToken:t,secondaryToken:n,...i}=e;return(0,r.jsx)(o.qAc,{primarySrc:getImageUrlFromToken(t),secondarySrc:getImageUrlFromToken(n),...i})},TokenImage=e=>{let{token:t,...n}=e;return(0,r.jsx)(o.Oic,{src:getImageUrlFromToken(t),...n})};var H=n(64029),N=n(27617);let O=d.ZP.div.withConfig({componentId:"sc-2e2cbd22-0"})`
  padding-left: 16px;
  display: flex;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    padding-left: 32px;
  }
`,E=d.ZP.div.withConfig({componentId:"sc-2e2cbd22-1"})`
  padding-right: 8px;
  width: 120px;
`;var components_FarmTokenInfo=e=>{let{label:t,isReady:n,children:i}=e;if(!n)return(0,r.jsxs)(O,{children:[(0,r.jsx)(N.O,{mr:"8px",width:32,height:32,variant:"circle"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(N.O,{width:40,height:10,mb:"4px"}),(0,r.jsx)(N.O,{width:60,height:24})]})]});let a=(0,r.jsxs)(O,{children:[(0,r.jsx)(E,{children:i}),(0,r.jsx)(o.kCb,{alignItems:"center",children:(0,r.jsx)(H.xv,{children:t})})]});return a},components_Farm=e=>{let{token:t,quoteToken:n,label:i,pid:a,isReady:l,isTokenOnly:s}=e,{stakedBalance:d}=useFarmUser(a);return(0,r.jsx)(components_FarmTokenInfo,{pid:a,label:i,token:t,quoteToken:n,isReady:l,stakedBalance:d,isTokenOnly:s,children:s?(0,r.jsxs)(o.kCb,{width:"100%",alignItems:"center",children:[(0,r.jsx)(TokenImage,{width:36,height:36,token:t,mr:"2px"}),(0,r.jsx)(o.XCv,{}),(0,r.jsx)(TokenImage,{width:36,height:36,token:u.fV[t.chainId]})]}):(0,r.jsxs)(o.kCb,{width:"100%",alignItems:"center",children:[(0,r.jsx)(TokenPairImage,{width:40,height:40,variant:"inverted",primaryToken:t,secondaryToken:n}),(0,r.jsx)(o.XCv,{}),(0,r.jsx)(TokenImage,{width:36,height:36,token:u.fV[t.chainId]})]})})};let W=d.ZP.div.withConfig({componentId:"sc-4690d8d2-0"})`
  font-size: 12px;
  color: ${e=>{let{theme:t}=e;return t.colors.textSubtle}};
  text-align: left;
`,z=d.ZP.div.withConfig({componentId:"sc-4690d8d2-1"})`
  min-height: 24px;
  display: flex;
  align-items: center;
  width: 100%;
`;var components_CellLayout=e=>{let{label:t="",children:n}=e;return(0,r.jsxs)("div",{style:{width:"100%"},children:[t&&(0,r.jsx)(W,{children:t}),(0,r.jsx)(z,{children:n})]})};let M=d.ZP.div.withConfig({componentId:"sc-134cfc5a-0"})`
  // min-width: 110px;
  font-weight: 600;
  text-align: right;
  margin-right: 14px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.lg}} {
    text-align: left;
    margin-right: 0;
  }
`,V=d.ZP.div.withConfig({componentId:"sc-134cfc5a-1"})`
  display: flex;
  align-items: center;
`;var components_Liquidity=e=>{let{liquidity:t}=e,n=t&&t.gt(0)?`$${Number(t).toLocaleString(void 0,{maximumFractionDigits:2})}`:(0,r.jsx)(N.O,{width:60});return(0,r.jsx)(V,{children:(0,r.jsx)(M,{children:(0,r.jsx)(H.xv,{children:n})})})};let Q=d.ZP.span.withConfig({componentId:"sc-41e63e15-0"})`
  color: ${e=>{let{earned:t,theme:n}=e;return t?n.colors.text:n.colors.textDisabled}};
  display: flex;
  align-items: center;
`,X=d.ZP.div.withConfig({componentId:"sc-8c46b427-0"})`
  display: flex;
`,G=d.ZP.div.withConfig({componentId:"sc-8a16d5b5-0"})`
  padding-left: 16px;
  display: flex;
  width: 100%;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    padding-left: 32px;
  }
`;var Y=n(61129),K=n(87598),J=n(13336),ee=n(17133),et=n(87752),en=n(8804),er=n.n(en),ei=n(49403),ea=n(80444),el=n(68597),es=n(33639),eo=n(79814),ed=n(48104);let ec=et.zG.reduce((e,t)=>({...e,[t.id]:(0,ea.v)({chain:t,transport:(0,el.d)(er()(t.rpcUrls.default.http),{timeout:15e3}),batch:{multicall:{batchSize:204800,wait:16}},pollingInterval:6e3})}),{});var eu=n(83454);let ep="preview"!==eu.env.NEXT_PUBLIC_VERCEL_ENV;function useCatchTxError(e){let{throwUserRejectError:t=!1,throwCustomError:n}=e||{},{toastError:a,toastSuccess:l}=(0,D.pm)(),[s,o]=(0,i.useState)(!1),{waitForTransaction:d}=function(){let{chainId:e}=(0,k.g)(),t=(0,ed.t)({chainId:e}),n=(0,i.useCallback)(async n=>{let getTransaction=async()=>{try{var r;let i=null!==(r=null==n?void 0:n.chainId)&&void 0!==r?r:e;if(i&&ec[i])return await ec[i].getTransactionReceipt({hash:n.hash});if(!t)return;return await t.getTransactionReceipt({hash:n.hash})}catch(e){if(e instanceof es.Bh)throw new ei.s1(`Transaction not found: ${n.hash}`);if(e instanceof es.Yb)throw new ei.s1(`Transaction receipt not found: ${n.hash}`);if(e instanceof eo.f)throw new ei.s1(`Block not found for transaction: ${n.hash}`);if(e instanceof es.mc)throw new ei.s1(`Timeout reached when fetching transaction receipt: ${n.hash}`);throw e}};return(0,ei.XD)(getTransaction,{n:10,minWait:5e3,maxWait:1e4,delay:4e3}).promise},[e,t]);return{waitForTransaction:n}}(),[c,u]=(0,i.useState)(!1),p=(0,i.useCallback)(e=>{let t=(0,J.d0)(e);t?a("Error",`Transaction failed with error: ${ep&&e.shortMessage||e.message}`):a("Error","Please try again. Confirm the transaction and make sure you are paying enough gas!")},[a]),h=(0,i.useCallback)((e,t)=>{let n=(0,J.d0)(e);a("Failed",(0,r.jsx)(K.Y,{txHash:t,children:n?`Transaction failed with error: ${ep?(0,J.yS)(n):n.message}`:"Transaction failed. For detailed error message:"}))},[a]),m=(0,i.useCallback)(async e=>{let i=null;try{if(o(!0),!(i=await e()))return null;let t="string"==typeof i?i:i.hash;l("Transaction Submitted!",(0,r.jsx)(K.Y,{txHash:t}));let n=await d({hash:t});if((null==n?void 0:n.status)==="success")return n;throw Error("Failed")}catch(e){if((0,ee.Z)(e)||(i?n?n():h(e,"string"==typeof i?i:i.hash):p(e)),t)throw e}finally{o(!1)}return null},[l,d,t,n,p,h]),x=(0,i.useCallback)(async e=>{let t=null;try{if(u(!0),!(t=await e()))return null;let n="string"==typeof t?t:t.hash;return l("Transaction Submitted!",(0,r.jsx)(K.Y,{txHash:n})),{hash:n}}catch(e){(0,ee.Z)(e)||(t?h(e,"string"==typeof t?t:t.hash):p(e))}finally{u(!1)}return null},[l,p,h]);return{fetchWithCatchTxError:m,fetchTxResponse:x,loading:s,txResponseLoading:c}}let stakeFarm=async(e,t,n)=>{let r=new(l())(n).times(1e18).toString();if(0!==t){var i;return e.write.deposit([t,BigInt(r)],{account:null!==(i=e.account)&&void 0!==i?i:"0x",chain:e.chain})}return null},unstakeFarm=async(e,t,n)=>{let r=new(l())(n).times(1e18).toString();if(0!==t){var i;return e.write.withdraw([t,BigInt(r)],{account:null!==(i=e.account)&&void 0!==i?i:"0x",chain:e.chain})}return null},harvestFarm=async(e,t)=>{if(0!==t){var n;return e.write.deposit([t,0n],{account:null!==(n=e.account)&&void 0!==n?n:"0x",chain:e.chain})}return null};var eh=n(66749),hooks_useHarvestFarm=e=>{let t=(0,eh.y8)(),n=(0,i.useCallback)(async()=>harvestFarm(t,e),[e,t]);return{onReward:n}};let em=d.ZP.div.withConfig({componentId:"sc-6813a981-0"})`
  padding: 16px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.textDisabled}};
  border-radius: 8px;
  flex-grow: 1;
  flex-basis: 0;
  margin-bottom: 8px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    margin-left: 12px;
    margin-right: 12px;
  }

  ${e=>{let{theme:t}=e;return t.mediaQueries.xl}} {
    margin-right: 0;
    margin-bottom: 0;
  }
`,ex=d.ZP.div.withConfig({componentId:"sc-6813a981-1"})`
  display: flex;
  margin-bottom: 8px;
`,eg=d.ZP.div.withConfig({componentId:"sc-6813a981-2"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ef=d.ZP.div.withConfig({componentId:"sc-6813a981-3"})`
  display: flex;
`,ev=(0,d.ZP)(em).withConfig({componentId:"sc-6813a981-4"})`
  &:nth-child(3) {
    flex-basis: 100%;
  }
  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    &:nth-child(3) {
      margin-top: 16px;
    }
  }
`,HarvestActionContainer=e=>{let{children:t,...n}=e,{onReward:r}=hooks_useHarvestFarm(n.pid),{account:a,chainId:l}=(0,p.Z)(),s=(0,g.TL)(),o=(0,i.useCallback)(()=>{a&&l&&s((0,w.IV)({account:a,pids:[n.pid],chainId:l}))},[a,s,l,n.pid]);return t({...n,onDone:o,onReward:r})},HarvestAction=e=>{var t;let{userData:n,userDataReady:a,onReward:s,onDone:d}=e,{toastSuccess:c}=(0,D.pm)(),{chainId:h}=(0,p.Z)(),{fetchWithCatchTxError:m,loading:x}=useCatchTxError(),g=new(l())(null!==(t=null==n?void 0:n.earnings)&&void 0!==t?t:0),f=(0,S.ZP)(u.p$[h]),v=(0,i.useMemo)(()=>f?new(l())(f.toSignificant(6)):b.HW,[f]),k=b.HW,w=0,j=k.toFixed(5,l().ROUND_DOWN);g.isZero()||(w=(k=(0,y.U4)(g)).multipliedBy(v).toNumber(),j=k.toFixed(5,l().ROUND_DOWN));let handleHarvest=async()=>{let e=await m(()=>s());(null==e?void 0:e.status)&&(c("Harvested!",(0,r.jsx)(K.Y,{txHash:e.transactionHash,children:"Your GVR earnings have been sent to your wallet!"})),null==d||d())};return(0,r.jsxs)(em,{children:[(0,r.jsxs)(ex,{children:[(0,r.jsx)(o.xvT,{textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"4px",children:"GVR"}),(0,r.jsx)(o.xvT,{textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:"Earned"})]}),(0,r.jsxs)(eg,{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(o.xvT,{children:j}),w>0&&(0,r.jsx)(o.yo7,{fontSize:"12px",color:"textSubtle",decimals:2,value:w,unit:" USD",prefix:"~"})]}),(0,r.jsx)(o.zxk,{ml:"4px",disabled:k.eq(0)||x||!a,onClick:()=>{handleHarvest()},height:"36px",variant:"secondary",width:"130px",children:x?"Harvesting":"Harvest"})]})]})};var ek=n(57011);n(1713);var ew=n(93421),eb=n(11088),hooks_useApproveFarm=(e,t)=>{let n=(0,ew.Oc)(t),{callWithGasPrice:r}=(0,eb.d)(),a=(0,i.useCallback)(async t=>r(e,"approve",[n,t]),[e,n,r]);return{onApprove:a}},hooks_useStakeFarms=e=>{let t=(0,eh.y8)(),n=(0,i.useCallback)(async n=>stakeFarm(t,e,n),[t,e]);return{onStake:n}},hooks_useUnstakeFarms=e=>{let t=(0,eh.y8)(),n=(0,i.useCallback)(async n=>unstakeFarm(t,e,n),[t,e]);return{onUnstake:n}},ey=n(93150),ej=n(64259),eC=n(12887),eS=n(81064),eT=n(65035),eP=n(21221),eI=n(95419);let eF=(0,d.ZP)(e=>(0,r.jsx)(eC.kC,{...e})).withConfig({componentId:"sc-2ed156ca-0"})`
  cursor: pointer;
`,eA=(0,d.ZP)(e=>(0,r.jsx)(H.xv,{...e})).withConfig({componentId:"sc-2ed156ca-1"})`
  width: 72px;
  max-width: 72px;
  overflow: hidden;
  text-align: right;
  text-overflow: ellipsis;
`;var components_DepositModal=e=>{let{account:t,max:n,stakedBalance:a,tokenName:s="",multiplier:o,displayApr:d,lpPrice:c=b.HW,lpLabel:u="",apr:p=0,addLiquidityUrl:h="",cakePrice:m=b.HW,decimals:x,allowance:g,enablePendingTx:f,onConfirm:v,onDismiss:k,handleApprove:w,isTokenOnly:j}=e,[C,S]=(0,i.useState)(""),[T,P]=(0,i.useState)(b.HW),[I,F]=(0,i.useState)(!1),[A,_]=(0,i.useState)(!1),$=(0,i.useMemo)(()=>(0,y.NJ)(n,x),[n,x]),D=(0,i.useMemo)(()=>{if(g){let e=(0,y.Qe)(new(l())(C),x);return e.gt(g)}return!1},[g,x,C]),Z=new(l())(C),L=(0,i.useMemo)(()=>new(l())($),[$]),R=Z.times(c),q=(0,ey.A1)({principalInUSD:Z.isNaN()?0:R.toNumber(),apr:p,earningTokenPrice:m.toNumber()}),B=m.times(q[3]),N=B.toNumber(),O=(0,y.uf)(N,B.gt(1e4)?0:2,B.gt(1e4)?0:2),E=(0,i.useCallback)(e=>{if(e.currentTarget.validity.valid){let t=e.currentTarget.value.replace(/,/g,".");S(t);let n=""===t?b.HW:new(l())(t).times(c);P(n)}},[S,P,c]),W=(0,i.useCallback)(()=>{S($);let e=new(l())($).times(c);P(e)},[$,S,P,c]),z=(0,i.useCallback)(e=>{let t=L.dividedBy(100).multipliedBy(e),n=(0,ej.X)(t.toNumber().toFixed(x));S(n);let r=t.times(c);P(r)},[L,x,c]);return A?(0,r.jsx)(U.kw,{isOpen:A,children:(0,r.jsx)(eI.F5,{account:t,linkLabel:`Get ${u}`,stakingTokenBalance:a.plus(n),stakingTokenDecimals:x,stakingTokenSymbol:s,stakingTokenPrice:c.toNumber(),earningTokenPrice:m.toNumber(),apr:p,multiplier:o,displayApr:d,linkHref:h,isFarm:!0,initialValue:C,onBack:()=>_(!1)})}):(0,r.jsx)(U.u_,{title:`Stake ${s}`,onDismiss:k,children:(0,r.jsxs)(U.fe,{width:["100%","100%","100%","420px"],children:[(0,r.jsx)(U.SP,{value:C,valueUSDPrice:T,onSelectMax:W,onPercentInput:z,onChange:E,max:$,maxAmount:L,symbol:s,addLiquidityUrl:h,inputTitle:"Stake",decimals:x,needEnable:D}),(0,r.jsxs)(eC.kC,{mt:"24px",alignItems:"center",justifyContent:"space-between",children:[(0,r.jsx)(H.xv,{mr:"8px",color:"textSubtle",children:"Annual ROI at current rates:"}),(0,r.jsxs)(eF,{alignItems:"center",onClick:()=>{_(!0)},children:[(0,r.jsxs)(eA,{children:["$",O]}),(0,r.jsx)(eS.hU,{variant:"text",scale:"sm",children:(0,r.jsx)(eP.qO,{color:"textSubtle",width:"18px"})})]})]}),(0,r.jsxs)(U.nK,{children:[(0,r.jsx)(eS.zx,{variant:"secondary",onClick:k,width:"100%",height:"48px",disabled:I,children:"Cancel"}),D?(0,r.jsx)(eS.zx,{width:"100%",isLoading:f,endIcon:f?(0,r.jsx)(eP.kF,{spin:!0,color:"currentColor"}):null,height:"48px",onClick:()=>w(BigInt(new(l())(C).times(10**x).toString())),variant:"primary",children:"Enable"}):I?(0,r.jsx)(eS.zx,{width:"100%",height:"48px",isLoading:I,endIcon:(0,r.jsx)(eP.kF,{spin:!0,color:"currentColor"}),variant:"primary",children:"Confirming"}):(0,r.jsx)(eS.zx,{width:"100%",height:"48px",variant:"primary",disabled:!Z.isFinite()||Z.eq(0)||Z.gt(L),onClick:async()=>{F(!0),await v(C),null==k||k(),F(!1)},children:"Confirm"})]}),(0,r.jsx)(eT.NR,{href:h,style:{alignSelf:"center"},children:(0,r.jsxs)(H.xv,{fontSize:"14px",children:["Get ",s]})})]})})},components_WithdrawModal=e=>{let{onConfirm:t,onDismiss:n,max:a,lpPrice:s=b.HW,tokenName:o="",decimals:d,isTokenOnly:c}=e,[u,p]=(0,i.useState)(""),[h,m]=(0,i.useState)(b.HW),[x,g]=(0,i.useState)(!1),f=(0,i.useMemo)(()=>(0,y.NJ)(a,d),[a,d]),v=new(l())(u),k=(0,i.useMemo)(()=>new(l())(f),[f]),w=(0,i.useCallback)(e=>{if(e.currentTarget.validity.valid){let t=e.currentTarget.value.replace(/,/g,".");p(t);let n=""===t?b.HW:new(l())(t).times(s);m(n)}},[p,m,s]),j=(0,i.useCallback)(()=>{p(f);let e=new(l())(f).times(s);m(e)},[f,p,m,s]),C=(0,i.useCallback)(e=>{let t=k.dividedBy(100).multipliedBy(e),n=(0,ej.X)(t.toNumber().toFixed(d));p(n);let r=t.times(s);m(r)},[k,d,s]);return(0,r.jsx)(U.u_,{title:c?"Unstake":`Unstake ${o}`,onDismiss:n,children:(0,r.jsxs)(U.fe,{width:["100%","100%","100%","420px"],children:[(0,r.jsx)(U.SP,{onSelectMax:j,onPercentInput:C,onChange:w,value:u,valueUSDPrice:h,max:f,maxAmount:k,symbol:o,inputTitle:"Unstake",decimals:d}),(0,r.jsxs)(U.nK,{children:[(0,r.jsx)(eS.zx,{variant:"secondary",onClick:n,width:"100%",height:"36px",disabled:x,children:"Cancel"}),x?(0,r.jsx)(eS.zx,{width:"100%",height:"36px",isLoading:x,endIcon:(0,r.jsx)(eP.kF,{spin:!0,color:"currentColor"}),variant:"primary",children:"Confirming"}):(0,r.jsx)(eS.zx,{width:"100%",height:"36px",disabled:!v.isFinite()||v.eq(0)||v.gt(k),onClick:async()=>{g(!0),await t(u),null==n||n(),g(!1)},variant:"primary",children:"Confirm"})]})]})})},components_StakedActionComponent=e=>{let{lpSymbol:t,children:n,disabledMinusButton:i,disabledPlusButton:a,onPresentWithdraw:l,onPresentDeposit:s}=e;return(0,r.jsxs)(ev,{children:[(0,r.jsxs)(ex,{children:[(0,r.jsx)(H.xv,{color:"secondary",fontSize:"12px",pr:"4px",children:t}),(0,r.jsx)(H.xv,{textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:"Staked"})]}),(0,r.jsxs)(eg,{children:[n,(0,r.jsxs)(ef,{children:[(0,r.jsx)(eS.hU,{mr:"6px",variant:"secondary",disabled:i,onClick:l,height:"36px",children:(0,r.jsx)(eP.V_,{color:"primary",width:"14px"})}),(0,r.jsx)(eS.hU,{variant:"secondary",disabled:a,onClick:s,height:"36px",children:(0,r.jsx)(eP.dt,{color:"primary",width:"14px"})})]})]})]})},e_=n(946),e$=n(32692),components_StakedLP=e=>{let{stakedBalance:t,quoteTokenSymbol:n,tokenSymbol:a,lpTotalSupply:l,lpTokenPrice:s,tokenAmountTotal:o,quoteTokenAmountTotal:d,isTokenOnly:c,pendingFarmLength:u=0,decimals:p,onClickLoadingIcon:h}=e,m=(0,i.useMemo)(()=>(0,y.O$)(t,p),[t,p]);return(0,r.jsxs)(eC.kC,{flexDirection:"column",alignItems:"flex-start",children:[(0,r.jsxs)(eC.kC,{children:[(0,r.jsx)(e$.X,{color:t.eq(0)?"textDisabled":"text",children:m}),u>0&&(0,r.jsx)(eP.Du,{style:{cursor:"pointer"},spin:!0,onClick:h})]}),t.gt(0)&&s.gt(0)&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e_.y,{fontSize:"12px",color:"textSubtle",decimals:2,value:(0,y.mW)(s.times(t),p),unit:" USD",prefix:"~"}),!c&&(0,r.jsxs)(eC.kC,{style:{gap:"4px"},children:[(0,r.jsx)(e_.y,{fontSize:"12px",color:"textSubtle",decimals:2,value:t.div(l).times(o).toNumber(),unit:` ${a}`}),(0,r.jsx)(e_.y,{fontSize:"12px",color:"textSubtle",decimals:2,value:t.div(l).times(d).toNumber(),unit:` ${n}`})]})]})]})},components_StakeComponent=e=>{let{lpSymbol:t,isStakeReady:n,onPresentDeposit:i}=e;return(0,r.jsxs)(ev,{children:[(0,r.jsxs)(ex,{children:[(0,r.jsx)(H.xv,{textTransform:"uppercase",color:"textSubtle",fontSize:"12px",pr:"4px",children:"Stake"}),(0,r.jsx)(H.xv,{color:"secondary",fontSize:"12px",children:t})]}),(0,r.jsx)(eg,{children:(0,r.jsx)(eS.zx,{width:"100%",onClick:i,variant:"secondary",disabled:n,height:"36px",children:"Deposit"})})]})},components_AccountNotConnect=e=>{let{children:t}=e;return(0,r.jsxs)(ev,{children:[(0,r.jsx)(ex,{children:(0,r.jsx)(H.xv,{textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:"Start Earning"})}),(0,r.jsx)(eg,{children:t})]})};let StakedContainer=e=>{let{children:t,...n}=e,{address:r}=(0,s.m)(),{lpAddress:a}=n,l=(0,eh.X_)(a),{onStake:o,onUnstake:d,onApprove:c,onDone:u}=function(e,t){let{account:n,chainId:r}=(0,p.Z)(),{onStake:a}=hooks_useStakeFarms(t),{onUnstake:l}=hooks_useUnstakeFarms(t),s=(0,g.TL)(),{onApprove:o}=hooks_useApproveFarm(e,r),d=(0,i.useCallback)(()=>{n&&r&&s((0,w.IV)({account:n,pids:[t],chainId:r}))},[n,t,r,s]);return{onStake:a,onUnstake:l,onApprove:o,onDone:d}}(l,n.pid),{allowance:h}=n.userData||{},m=r&&h&&h.isGreaterThan(0);return t({...n,onStake:o,onDone:u,onUnstake:d,onApprove:c,isApproved:m})};var StakedAction=e=>{let{pid:t,apr:n,multiplier:a,lpSymbol:s,lpLabel:o,lpTokenPrice:d,quoteToken:c,token:h,displayApr:m,lpTotalSupply:x,tokenAmountTotal:g,quoteTokenAmountTotal:f,userData:v,onDone:k,onStake:w,onUnstake:y,onApprove:j,isTokenOnly:C}=e,{toastSuccess:T}=(0,D.pm)(),{fetchWithCatchTxError:P,loading:I}=useCatchTxError(),{account:F,chainId:_}=(0,p.Z)(),{tokenBalance:$,stakedBalance:Z,allowance:R}=v||{},q=(0,A.useRouter)(),B=(0,S.ZP)(u.fV[_]),H=(0,i.useMemo)(()=>B?new(l())(B.toSignificant(6)):b.HW,[B]),N=utils_getLiquidityUrlPathParts({quoteTokenAddress:c.address,tokenAddress:h.address,chainId:_}),O=`${N}`,E=(0,i.useMemo)(()=>["history","archived"].some(e=>q.pathname.includes(e)),[q]),handleStake=async e=>{let t=await P(()=>w(e));(null==t?void 0:t.status)&&(T("Staked!",(0,r.jsx)(K.Y,{txHash:t.transactionHash,children:C?"Your funds have been staked in the pool":"Your funds have been staked in the farm"})),k())},handleUnstake=async e=>{let t=await P(()=>y(e));(null==t?void 0:t.status)&&(T("Unstaked",(0,r.jsx)(K.Y,{txHash:t.transactionHash,children:"Your earnings have also been harvested to your wallet"})),k())},W=(0,i.useCallback)(async e=>{let t=await P(()=>j(e));(null==t?void 0:t.status)&&(T("Contract Enabled",(0,r.jsx)(K.Y,{txHash:t.transactionHash})),k())},[j,T,P,k]),[z]=(0,U.dd)((0,r.jsx)(components_DepositModal,{account:F,pid:t,lpTotalSupply:null!=x?x:b.HW,max:null!=$?$:b.HW,lpPrice:d,lpLabel:o,apr:null!=n?n:void 0,displayApr:m,stakedBalance:null!=Z?Z:b.HW,tokenName:s,multiplier:a,addLiquidityUrl:C?`/swap?outputCurrency=${h.address}`:`/add/${O}`,cakePrice:H,decimals:18,allowance:R,enablePendingTx:I,onConfirm:handleStake,handleApprove:W,isTokenOnly:C}),!0,!0,`farm-deposit-modal-${t}`),[M]=(0,U.dd)((0,r.jsx)(components_WithdrawModal,{max:null!=Z?Z:b.HW,onConfirm:handleUnstake,lpPrice:d,tokenName:s,decimals:18,isTokenOnly:C}));if(!F)return(0,r.jsx)(components_AccountNotConnect,{children:(0,r.jsx)(ek.Z,{})});if(null==Z?void 0:Z.gt(0)){var V,Q,X,G;return(0,r.jsx)(components_StakedActionComponent,{lpSymbol:s,disabledPlusButton:E,onPresentWithdraw:M,onPresentDeposit:z,children:(0,r.jsx)(components_StakedLP,{decimals:18,stakedBalance:Z,quoteTokenSymbol:(null===(V=L.FX[_])||void 0===V?void 0:V.symbol)===c.symbol?null===(Q=L.B5[_])||void 0===Q?void 0:Q.symbol:c.symbol,tokenSymbol:(null===(X=L.FX[_])||void 0===X?void 0:X.symbol)===h.symbol?null===(G=L.B5[_])||void 0===G?void 0:G.symbol:h.symbol,lpTotalSupply:null!=x?x:b.HW,lpTokenPrice:null!=d?d:b.HW,tokenAmountTotal:null!=g?g:b.HW,quoteTokenAmountTotal:null!=f?f:b.HW,isTokenOnly:C})})}return(0,r.jsx)(components_StakeComponent,{lpSymbol:s,isStakeReady:E,onPresentDeposit:z})};let eD=d.F4`
  from {
    max-height: 0px;
  }
  to {
    max-height: 700px;
  }
`,eZ=d.F4`
  from {
    max-height: 700px;
  }
  to {
    max-height: 0px;
  }
`,eL=d.ZP.div.withConfig({componentId:"sc-f3cb55a5-0"})`
  animation: ${e=>{let{expanded:t}=e;return t?d.iv`
          ${eD} 300ms linear forwards
        `:d.iv`
          ${eZ} 300ms linear forwards
        `}};
  overflow: hidden;
  background: ${e=>{let{theme:t}=e;return t.colors.dropdown}};
  display: flex;
  width: 100%;
  flex-direction: column-reverse;
  padding: 8px 32px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.lg}} {
    flex-direction: row;
    align-items: center;
    padding: 8px 48px;
  }
`,eU=(0,d.ZP)(o.NRJ).withConfig({componentId:"sc-f3cb55a5-1"})`
  font-weight: 400;
`,eR=d.ZP.div.withConfig({componentId:"sc-f3cb55a5-2"})`
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  align-items: center;
  display: flex;
  justify-content: space-between;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    justify-content: flex-start;
  }
`,eq=d.ZP.div.withConfig({componentId:"sc-f3cb55a5-3"})`
  display: flex;
  flex-direction: column;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    flex-direction: row;
    align-items: center;
    flex-grow: 1;
    flex-basis: 0;
    flex-wrap: wrap;
  }
`,eB=d.ZP.div.withConfig({componentId:"sc-f3cb55a5-4"})`
  min-width: 200px;
`;var components_ActionPanel=e=>{let{details:t,apr:n,userDataReady:i,expanded:a}=e,{chainId:l}=(0,k.g)(),{quoteToken:s,token:d}=t,c=t.lpSymbol&&t.lpSymbol.toUpperCase().replace("DexTop LP","DLP"),{lpAddress:u}=t,p=(0,Y.C)(u,"address",l);return(0,r.jsxs)(eL,{expanded:a,children:[(0,r.jsxs)(eB,{children:[(0,r.jsx)(eR,{children:(0,r.jsx)(eU,{href:t.isTokenOnly?`/swap?outputCurrency=${t.token.address}`:utils_getLiquidityUrlPathParts({quoteTokenAddress:s.address,tokenAddress:d.address,chainId:l,lpAddress:t.lpAddress}),children:(0,r.jsxs)(o.xvT,{fontSize:"14px",children:["Get ",c]})})}),(0,r.jsx)(eU,{href:p,children:(0,r.jsx)(o.xvT,{fontSize:"14px",children:"View Contract"})})]}),(0,r.jsxs)(eq,{children:[(0,r.jsx)(HarvestActionContainer,{...t,userDataReady:i,children:e=>(0,r.jsx)(HarvestAction,{...e})}),(0,r.jsx)(StakedContainer,{...t,userDataReady:i,lpLabel:c,displayApr:n.value,children:e=>(0,r.jsx)(StakedAction,{...e})})]})]})};let eH={apr:components_Apr,farm:e=>{let{token:t,quoteToken:n,isTokenOnly:i}=e;return(0,r.jsx)(G,{children:i?(0,r.jsxs)(o.kCb,{width:"100%",alignItems:"center",children:[(0,r.jsx)(TokenImage,{width:36,height:36,token:t,mr:"2px"}),(0,r.jsx)(o.XCv,{}),(0,r.jsx)(TokenImage,{width:36,height:36,token:u.fV[t.chainId]})]}):(0,r.jsxs)(o.kCb,{width:"100%",alignItems:"center",children:[(0,r.jsx)(TokenPairImage,{width:40,height:40,variant:"inverted",primaryToken:t,secondaryToken:n}),(0,r.jsx)(o.XCv,{}),(0,r.jsx)(TokenImage,{width:36,height:36,token:u.fV[t.chainId]})]})})},name:e=>{let{label:t,isReady:n,stakedBalance:i,isTokenOnly:a}=e,l=i?(0,y.mW)(i):0;if(!n)return(0,r.jsx)(X,{children:(0,r.jsx)("div",{children:(0,r.jsx)(N.O,{width:40,height:10,mb:"4px"})})});let s=(0,r.jsx)(X,{children:(0,r.jsxs)(o.kCb,{alignItems:"center",children:[l?(0,r.jsx)(H.xv,{color:"secondary",fontSize:"12px",textTransform:"uppercase",children:a?"Staking":"Farming"}):(0,r.jsx)(r.Fragment,{}),(0,r.jsx)(H.xv,{children:t})]})});return s},earned:e=>{let{earnings:t,userDataReady:n}=e,i=t>0?t:0;return n?(0,r.jsx)(Q,{earned:i,children:i.toLocaleString()}):(0,r.jsx)(Q,{earned:0,children:(0,r.jsx)(N.O,{width:60})})},liquidity:components_Liquidity},eN=d.ZP.div.withConfig({componentId:"sc-f02261ee-0"})`
  padding: 12px 0px;
  display: flex;
  align-items: center;
  padding-right: 8px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.xl}} {
    padding-right: 32px;
  }
`,eO=d.ZP.tr.withConfig({componentId:"sc-f02261ee-1"})`
  cursor: pointer;
  &:not(:last-child) {
    border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
  }
`,eE=d.ZP.td.withConfig({componentId:"sc-f02261ee-2"})`
  padding: 16px 0 24px 16px;
`,eW=d.ZP.td.withConfig({componentId:"sc-f02261ee-3"})`
  padding-top: 16px;
  padding-bottom: 24px;
`,ez=d.ZP.td.withConfig({componentId:"sc-f02261ee-4"})`
  padding-top: 24px;
`;var components_Row=e=>{let{userDataReady:t,details:n}=e,a=!!useFarmUser(n.pid).stakedBalance.toNumber(),[l,s]=(0,i.useState)(a),o=(0,Z.Z)(l,300),toggleActionPanel=()=>{s(!l)};(0,i.useEffect)(()=>{s(a)},[a]);let{isDesktop:d,isMobile:c}=(0,D.SL)(),u=!d,p=u?$:_,h=p.map(e=>e.name);return(0,r.jsxs)(r.Fragment,{children:[c?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("tr",{style:{cursor:"pointer",width:"100%"},onClick:toggleActionPanel,children:(0,r.jsx)(ez,{colSpan:3,children:(0,r.jsx)(components_Farm,{...e.farm})})}),(0,r.jsxs)(eO,{onClick:toggleActionPanel,children:[(0,r.jsx)(eE,{width:"50%",children:(0,r.jsx)(components_CellLayout,{label:"Total Staked",children:(0,r.jsx)(components_Liquidity,{...e.liquidity})})}),(0,r.jsx)(eW,{width:"50%",children:(0,r.jsx)(components_CellLayout,{label:"APR",children:(0,r.jsx)(components_Apr,{...e.apr,hideButton:!0})})})]})]}):(0,r.jsx)(eO,{onClick:toggleActionPanel,children:Object.keys(e).map(n=>{let a=h.indexOf(n);if(-1===a)return null;switch(n){case"apr":return(0,r.jsx)("td",{children:(0,r.jsx)(eN,{children:(0,r.jsx)(components_CellLayout,{label:"APR",children:(0,r.jsx)(components_Apr,{...e.apr,hideButton:u})})})},n);case"details":return(0,r.jsx)("td",{},n);default:return(0,r.jsx)("td",{children:(0,r.jsx)(eN,{children:(0,r.jsx)(components_CellLayout,{label:p[a].label,children:(0,i.createElement)(eH[n],{...e[n],userDataReady:t})})})},n)}})}),o&&(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:7,children:(0,r.jsx)(components_ActionPanel,{...e,expanded:l})},`farm-actionpanel-${n.pid}`)})]})};let eM=d.ZP.div.withConfig({componentId:"sc-d13f2d59-0"})`
  width: 100%;
  background: ${e=>{let{theme:t}=e;return t.card.background}};
  border-radius: 8px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
`,eV=d.ZP.div.withConfig({componentId:"sc-d13f2d59-1"})`
  overflow: visible;
  scroll-margin-top: 64px;

  &::-webkit-scrollbar {
    display: none;
  }
`,eQ=d.ZP.table.withConfig({componentId:"sc-d13f2d59-2"})`
  border-collapse: collapse;
  font-size: 14px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`,eX=d.ZP.tbody.withConfig({componentId:"sc-d13f2d59-3"})`
  & tr {
    td {
      font-size: 16px;
      vertical-align: middle;
    }

    :last-child {
      td[colspan='5'] {
        > div {
          border-bottom-left-radius: 16px;
          border-bottom-right-radius: 16px;
        }
      }
    }
  }
`,eG=d.ZP.div.withConfig({componentId:"sc-d13f2d59-4"})`
  position: relative;
`;var components_FarmTable=e=>{let{farms:t,cakePrice:n,userDataReady:a}=e,s=(0,i.useRef)(null),o=(0,i.useMemo)(()=>_.map(e=>({id:e.id,name:e.name,label:e.label,sort:(t,n)=>{switch(e.name){case"farm":return n.id-t.id;case"apr":if(t.original.apr.value&&n.original.apr.value)return Number(t.original.apr.value)-Number(n.original.apr.value);return 0;case"earned":return t.original.earned.earnings-n.original.earned.earnings;default:return 1}},sortable:e.sortable})),[]),generateRow=e=>{var t;let{token:r,quoteToken:i}=e,a=r.address,s=i.address,o=e.lpSymbol&&e.lpSymbol.split(" ")[0].toUpperCase().replace("DexTop LP","DLP"),d={apr:{value:null!==(t=getDisplayApr(e.apr,e.lpRewardsApr))&&void 0!==t?t:"0",pid:e.pid,multiplier:e.multiplier,lpLabel:o,lpSymbol:e.lpSymbol,lpTokenPrice:e.lpTokenPrice,tokenAddress:a,quoteTokenAddress:s,cakePrice:n,lpRewardsApr:e.lpRewardsApr,originalValue:e.apr},farm:{label:o,pid:e.pid,token:e.token,quoteToken:e.quoteToken,isReady:void 0!==e.multiplier,isTokenOnly:e.isTokenOnly},name:{label:o,pid:e.pid,token:e.token,quoteToken:e.quoteToken,isReady:void 0!==e.multiplier,isTokenOnly:e.isTokenOnly},earned:{earnings:(0,y.mW)(new(l())(e.userData.earnings)),pid:e.pid},liquidity:{liquidity:null==e?void 0:e.liquidity},details:e};return d},d=t.map(e=>generateRow(e)),c=d.map(e=>{let t={};return o.forEach(n=>{if(!(n.name in e))throw Error(`Invalid row data, ${n.name} not found`);t[n.name]=e[n.name]}),t});return(0,r.jsx)(eM,{id:"farms-table",children:(0,r.jsx)(eG,{id:"table-container",children:(0,r.jsx)(eV,{ref:s,children:(0,r.jsx)(eQ,{children:(0,r.jsx)(eX,{children:c.map(e=>(0,i.createElement)(components_Row,{...e,userDataReady:a,key:`table-row-${e.farm.pid}`}))})})})})})},eY=n(84563),eK=n(11207),eJ=n(12663);let e0=d.ZP.div.withConfig({componentId:"sc-6580afa-0"})`
  display: flex;
  justify-content: center;
  align-items: center;
`,FarmTabButtons=e=>{let t,{hasStakeInFinishedFarms:n}=e,i=(0,A.useRouter)();switch(i.pathname){case"/earn":default:t=0;break;case"/earn/history":t=1;break;case"/earn/archived":t=2}return(0,r.jsx)(e0,{children:(0,r.jsx)(eC.kC,{width:"max-content",flexDirection:"column",children:(0,r.jsxs)(eJ.xz,{activeIndex:t,scale:"sm",variant:"primary",children:[(0,r.jsx)(eJ.kg,{as:eY.a,to:"/earn",children:"Live"}),(0,r.jsx)(eK.B,{show:n,children:(0,r.jsx)(eJ.kg,{as:eY.a,to:"/earn/history",id:"finished-farms-button",children:"Finished"})})]})})})},e1=(0,i.createContext)({chosenFarms:[]}),e2=d.ZP.div.withConfig({componentId:"sc-1da62914-0"})`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;

  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 16px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 16px 0;
    margin-bottom: 0;
  }
`,e6=d.ZP.div.withConfig({componentId:"sc-1da62914-1"})`
  > ${o.xvT} {
    font-size: 12px;
  }
`,e3=d.ZP.div.withConfig({componentId:"sc-1da62914-2"})`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 0px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    width: auto;
    padding: 0;
    margin-top: 12px;
  }
`,e4=d.ZP.div.withConfig({componentId:"sc-1da62914-3"})`
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 100%;

  > div {
    padding: 8px 0px;
  }

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    justify-content: flex-start;
    width: auto;

    > div {
      padding: 0;
    }
    margin-top: 12px;
  }
`,e8=d.ZP.div.withConfig({componentId:"sc-1da62914-4"})`
  display: flex;
  justify-content: center;
  align-items: center;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    margin-left: 16px;
  }
`;var views_Farms=()=>{let{pathname:e,query:t}=(0,A.useRouter)(),{chainId:n}=(0,k.g)(),{data:a,userDataLoaded:d,poolLength:x,regularCakePerBlock:y}=useFarms(),j=(0,S.ZP)(u.fV[n]),T=(0,i.useMemo)(()=>j?new(l())(j.toSignificant(6)):b.HW,[j]),[P,_]=(0,i.useState)(""),$=(0,i.useMemo)(()=>"string"==typeof(null==t?void 0:t.search)?t.search:"",[t]),D=$&&!P?$:P,{address:Z}=(0,s.m)(),[L,U]=(0,i.useState)("hot"),{observerRef:R,isIntersecting:q}=hooks_useIntersectionObserver(),B=(0,i.useRef)(0),H=e.includes("archived"),N=e.includes("history"),O=!N&&!H;!function(){let e=(0,g.TL)(),{account:t,chainId:n}=(0,p.Z)();(0,f.a)({queryKey:["publicFarmData",n],queryFn:async()=>{if(!n)throw Error("ChainId is not defined");let t=await (0,v.getFarmConfig)(n);if(!t)throw Error("Failed to fetch farm config");let r=t.map(e=>e.pid);return e((0,w.eG)({pids:r,chainId:n})),null},enabled:!!(n&&m.G.includes(n)),refetchInterval:h.KI,refetchOnReconnect:!1,refetchOnWindowFocus:!1,refetchOnMount:!1});let r=["farmsWithUserData",t,n];(0,f.a)({queryKey:r,queryFn:async()=>{if(!n)throw Error("ChainId is not defined");let r=await (0,v.getFarmConfig)(n);if(!r)throw Error("Failed to fetch farm config");if(!t)throw Error("Invalid account");let i=r.map(e=>e.pid);return e((0,w.IV)({account:t,pids:i,chainId:n})),null},enabled:!!(t&&n),refetchInterval:h.KI,refetchOnReconnect:!1,refetchOnWindowFocus:!1,refetchOnMount:!1})}();let[E,W]=(0,F.XD)(O),z=a.filter(e=>0!==e.pid&&"0X"!==e.multiplier&&(!x||x>e.pid)),M=a.filter(e=>0!==e.pid&&"0X"===e.multiplier),V=z.filter(e=>e.userData&&new(l())(e.userData.stakedBalance).isGreaterThan(0)),Q=M.filter(e=>e.userData&&new(l())(e.userData.stakedBalance).isGreaterThan(0)),X=a.filter(e=>e.userData&&new(l())(e.userData.stakedBalance).isGreaterThan(0)),G=(0,i.useCallback)(e=>{let t=e.map(e=>{var t,r;if(!e.lpTotalInQuoteToken||!e.quoteTokenPriceBusd)return e;let i=e.isTokenOnly?new(l())(e.lpTotalInQuoteToken).times(null!==(t=e.tokenPriceBusd)&&void 0!==t?t:0):new(l())(e.lpTotalInQuoteToken).times(e.quoteTokenPriceBusd),{cakeRewardsApr:a,lpRewardsApr:s}=O?getFarmApr(n,new(l())(null!==(r=e.poolWeight)&&void 0!==r?r:0),T,i,e.lpAddress,null!=y?y:0):{cakeRewardsApr:0,lpRewardsApr:0};return{...e,apr:null!=a?a:void 0,lpRewardsApr:s,liquidity:i}});return(0,C.kY)(t,D)},[D,O,n,T,y]),[Y,K]=(0,i.useState)(12),J=(0,i.useMemo)(()=>{let e=[];return O&&(e=E?G(V):G(z)),N&&(e=E?G(Q):G(M)),H&&(e=E?G(X):G(a)),e},[z,G,M,a,O,N,H,X,Q,E,V]),ee=(0,i.useMemo)(()=>(e=>{switch(L){case"apr":return I()(e,e=>Number(e.apr)+Number(e.lpRewardsApr),"desc");case"earned":return I()(e,e=>e.userData?Number(e.userData.earnings):0,"desc");case"liquidity":return I()(e,e=>Number(e.liquidity),"desc");default:return e}})(J).slice(0,Y),[J,L,Y]);B.current=ee.length,(0,i.useEffect)(()=>{q&&K(e=>e<=B.current?e+12:e)},[q]);let et=(0,i.useMemo)(()=>({chosenFarms:ee}),[ee]);return(0,r.jsx)(e1.Provider,{value:et,children:(0,r.jsxs)(c.Z,{children:[(0,r.jsxs)(e2,{children:[(0,r.jsxs)(e4,{children:[(0,r.jsx)(FarmTabButtons,{hasStakeInFinishedFarms:Q.length>0}),(0,r.jsx)(e8,{children:(0,r.jsx)(o.kCb,{width:"max-content",flexDirection:"column",children:(0,r.jsxs)(o.xzh,{activeIndex:E?1:0,scale:"sm",variant:"primary",onItemClick:()=>W(!E),children:[(0,r.jsx)(o.kgj,{children:"All"}),(0,r.jsx)(o.kgj,{children:"My"})]})})})]}),(0,r.jsxs)(e3,{children:[(0,r.jsx)(e6,{children:(0,r.jsx)(o.PhF,{options:[{label:"Hot",value:"hot"},{label:"APR",value:"apr"},{label:"Earned",value:"earned"},{label:"Liquidity",value:"liquidity"}],onOptionChange:e=>{U(e.value)}})}),(0,r.jsx)(e6,{style:{marginLeft:16},children:(0,r.jsx)(o.MjL,{initialValue:$,onChange:e=>{_(e.target.value)},placeholder:"Search Farms"})})]})]}),(0,r.jsx)(components_FarmTable,{farms:ee,cakePrice:T,userDataReady:!Z||!!Z&&d}),Z&&!d&&E&&(0,r.jsx)(o.kCb,{justifyContent:"center",children:(0,r.jsx)(o.gbz,{})}),x&&(0,r.jsx)("div",{ref:R})]})})}}}]);
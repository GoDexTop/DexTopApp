"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8638],{13336:function(e,t,n){n.d(t,{d0:function(){return parseViemError},yS:function(){return getViemErrorMessage}});var i=n(62027),r=n(39028);function parseViemError(e){return e instanceof i.G?e:"string"==typeof e?new r.ir(Error(e)):e instanceof Error?new r.ir(e):null}function getViemErrorMessage(e){let t=parseViemError(e);return t?t.details||t.shortMessage:String(e)}},17133:function(e,t,n){n.d(t,{Z:function(){return isUserRejected}});let isUserRejected=e=>"object"==typeof e&&e.toString().includes("User rejected the request.")},98638:function(e,t,n){n.d(t,{Z:function(){return views_Farms}});var i=n(85893),r=n(67294),a=n(44431),l=n.n(a),s=n(92321),o=n(87619),d=n(19521),c=n(18803),u=n(94808),p=n(58722),h=n(76479),m=n(1730),x=n(9473),g=n(95995),f=n(10777);n(3379);var v=n(83666),k=n(27086),w=n(83591),b=n(92256),j=n(58409),y=n(68697),C=n(8499);let selectFarmByKey=(e,t)=>n=>n.farms.data.find(n=>n[e]===t),makeUserFarmFromPidSelector=e=>(0,y.P1)([selectFarmByKey("pid",e)],e=>{let{allowance:t,tokenBalance:n,stakedBalance:i,earnings:r}=(0,C.lD)(e);return{allowance:t,tokenBalance:n,stakedBalance:i,earnings:r}});(0,y.P1)([e=>e.farms.data.find(e=>2===e.pid)],e=>{let t=null==e?void 0:e.tokenPriceBusd;return new(l())(t||"0")});let selectFarms=e=>e.farms,farmSelector=e=>(0,y.P1)([selectFarms],t=>(function(e,t){let n=e.data.map(C.b4).filter(e=>e.token.chainId===t),{loadArchivedFarmsData:i,userDataLoaded:r,poolLength:a,regularCakePerBlock:l,totalAllocPoint:s}=e;return{data:n,loadArchivedFarmsData:!!i,userDataLoaded:!!r,poolLength:a,regularCakePerBlock:l,totalAllocPoint:s}})(t,e)),useFarms=()=>{let{chainId:e}=(0,k.g)();return(0,x.v9)((0,r.useMemo)(()=>farmSelector(e),[e]))},useFarmUser=e=>{let t=(0,r.useMemo)(()=>makeUserFarmFromPidSelector(e),[e]);return(0,x.v9)(t)};var S=n(28583);let T=r.useLayoutEffect;var hooks_useIntersectionObserver=()=>{let[e,t]=(0,r.useState)(null),n=(0,r.useRef)(null),[i,a]=(0,r.useState)(!1);return T(()=>{let t=window.IntersectionObserver;return t?(!n.current&&e&&(n.current=new window.IntersectionObserver(e=>{let[t]=e;a(t.isIntersecting)},{rootMargin:"0px",threshold:1}),n.current.observe(e)),n.current&&!e&&(n.current.disconnect(),a(!1))):a(!0),()=>{n.current&&n.current.disconnect()}},[e]),{observerRef:t,isIntersecting:i}};(0,n(92404).t)(18);let getLpApr=()=>({}),getFarmApr=(e,t,n,i,r,a)=>{var s;let o=t?t.times(31536e3*a):new(l())(0),d=o.times(n).div(i).times(100),c=null;!d.isNaN()&&d.isFinite()&&(c=d.toNumber());let u=null!==(s=getLpApr()[null==r?void 0:r.toLowerCase()]||getLpApr()[r])&&void 0!==s?s:0;return{cakeRewardsApr:c,lpRewardsApr:u}};var I=n(75472),P=n.n(I),F=n(23714),A=n(11163);let getDisplayApr=(e,t)=>e&&t?e+t>1e6?`~${(e+t).toPrecision(6)}`:(e+t).toLocaleString("en-US",{maximumFractionDigits:2}):e?e>1e6?`~${e.toPrecision(6)}`:e.toLocaleString("en-US",{maximumFractionDigits:2}):null,_=[{id:1,name:"farm",sortable:!1,label:""},{id:2,name:"name",sortable:!0,label:""},{id:3,name:"earned",sortable:!0,label:"Earned"},{id:4,name:"apr",sortable:!0,label:"APR"},{id:5,name:"liquidity",sortable:!0,label:"Total Staked"},{id:6,name:"details",sortable:!0,label:""}],$=[{id:1,name:"farm",sortable:!1,label:""},{id:2,name:"name",sortable:!0,label:""},{id:3,name:"liquidity",sortable:!0,label:"Total Staked"},{id:4,name:"apr",sortable:!0,label:"APR"},{id:5,name:"details",sortable:!0,label:""}];var D=n(36945),Z=n(87040),B=n(29928),U=n(87752),utils_getLiquidityUrlPathParts=e=>{let{quoteTokenAddress:t,tokenAddress:n,chainId:i}=e,r=B.FX[i],a=t&&t!==(null==r?void 0:r.address)?t:B.B5[i].symbol,l=n&&n!==(null==r?void 0:r.address)?n:B.B5[i].symbol;return`${a}/${l}?chain=${U.MS[i]}`},L=n(40231);let q=(0,d.ZP)(o.kCb).withConfig({componentId:"sc-fd627e7a-0"})`
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
  width: 100px;
`;var components_ApyButton=e=>{var t;let{pid:n,lpLabel:r,lpTokenPrice:a,lpSymbol:d,cakePrice:c,apr:u,multiplier:p,displayApr:h,addLiquidityUrl:m,strikethrough:x,isTokenOnly:g}=e,{address:f}=(0,s.m)(),{tokenBalance:v,stakedBalance:k}=useFarmUser(n),w=new(l())(k).plus(v).gt(0)?new(l())(k).plus(v):b.HW,[j]=(0,L.dd)((0,i.jsx)(o.F5h,{account:f,pid:n,linkLabel:`Get ${null!=r?r:"unknown"}`,stakingTokenBalance:w,stakingTokenDecimals:18,stakingTokenSymbol:d,stakingTokenPrice:a.toNumber(),earningTokenPrice:null!==(t=null==c?void 0:c.toNumber())&&void 0!==t?t:0,apr:u,multiplier:p,displayApr:h,linkHref:m,isFarm:!g}),!0,!0,`FarmModal${n}`),handleClickButton=e=>{e.stopPropagation(),j()};return(0,i.jsx)(o.kCb,{flexDirection:"column",alignItems:"flex-start",children:(0,i.jsx)(q,{alignItems:"center",style:{textDecoration:x?"line-through":"initial"},onClick:e=>{handleClickButton(e)},children:(0,i.jsxs)(o.xvT,{children:[h,"%"]})})})};let H=d.ZP.div.withConfig({componentId:"sc-81c11022-0"})`
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
`,R=d.ZP.div.withConfig({componentId:"sc-81c11022-1"})`
  // min-width: 60px;
  text-align: left;
`;var components_Apr=e=>{let{value:t,pid:n,lpLabel:r,lpSymbol:a,lpTokenPrice:l,multiplier:s,tokenAddress:d,quoteTokenAddress:c,cakePrice:u,originalValue:p,hideButton:h=!1,strikethrough:m,lpRewardsApr:x,useTooltipText:g=!0,isTokenOnly:f}=e,{chainId:v}=(0,k.g)(),w=utils_getLiquidityUrlPathParts({quoteTokenAddress:c,tokenAddress:d,chainId:v}),b=`add/${w}`;return 0!==p?(0,i.jsx)(H,{children:p?(0,i.jsx)(components_ApyButton,{variant:h?"text":"text-and-button",pid:n,lpSymbol:a,lpLabel:r,lpTokenPrice:l,multiplier:s,cakePrice:u,apr:p,displayApr:t,lpRewardsApr:x,addLiquidityUrl:b,strikethrough:m,useTooltipText:g,hideButton:h,isTokenOnly:null!=f&&f}):(0,i.jsx)(R,{children:(0,i.jsx)(o.OdW,{width:60})})}):(0,i.jsx)(H,{children:(0,i.jsxs)(R,{children:[p,"%"]})})};let getImageUrlFromToken=e=>{let t=(null==e?void 0:e.isNative)?e.wrapped.address:e.address;return`/images/${e.chainId}/tokens/${t}.png`},TokenPairImage=e=>{let{primaryToken:t,secondaryToken:n,...r}=e;return(0,i.jsx)(o.qAc,{primarySrc:getImageUrlFromToken(t),secondarySrc:getImageUrlFromToken(n),...r})},TokenImage=e=>{let{token:t,...n}=e;return(0,i.jsx)(o.Oic,{src:getImageUrlFromToken(t),...n})};var O=n(64029),N=n(27617);let E=d.ZP.div.withConfig({componentId:"sc-2e2cbd22-0"})`
  padding-left: 16px;
  display: flex;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    padding-left: 32px;
  }
`,W=d.ZP.div.withConfig({componentId:"sc-2e2cbd22-1"})`
  padding-right: 8px;
  width: 120px;
`;var components_FarmTokenInfo=e=>{let{label:t,isReady:n,children:r}=e;if(!n)return(0,i.jsxs)(E,{children:[(0,i.jsx)(N.O,{mr:"8px",width:32,height:32,variant:"circle"}),(0,i.jsxs)("div",{children:[(0,i.jsx)(N.O,{width:40,height:10,mb:"4px"}),(0,i.jsx)(N.O,{width:60,height:24})]})]});let a=(0,i.jsxs)(E,{children:[(0,i.jsx)(W,{children:r}),(0,i.jsx)(o.kCb,{alignItems:"center",children:(0,i.jsx)(O.xv,{children:t})})]});return a},components_Farm=e=>{let{token:t,quoteToken:n,label:r,pid:a,isReady:l,isTokenOnly:s}=e,{stakedBalance:d}=useFarmUser(a);return(0,i.jsx)(components_FarmTokenInfo,{pid:a,label:r,token:t,quoteToken:n,isReady:l,stakedBalance:d,isTokenOnly:s,children:s?(0,i.jsxs)(o.kCb,{width:"100%",alignItems:"center",children:[(0,i.jsx)(TokenImage,{width:36,height:36,token:t,mr:"2px"}),(0,i.jsx)(o.XCv,{}),(0,i.jsx)(TokenImage,{width:36,height:36,token:u.fV[t.chainId]})]}):(0,i.jsxs)(o.kCb,{width:"100%",alignItems:"center",children:[(0,i.jsx)(TokenPairImage,{width:40,height:40,variant:"inverted",primaryToken:t,secondaryToken:n}),(0,i.jsx)(o.XCv,{}),(0,i.jsx)(TokenImage,{width:36,height:36,token:u.fV[t.chainId]})]})})};let M=d.ZP.div.withConfig({componentId:"sc-4690d8d2-0"})`
  font-size: 12px;
  color: ${e=>{let{theme:t}=e;return t.colors.textSubtle}};
  text-align: left;
`,z=d.ZP.div.withConfig({componentId:"sc-4690d8d2-1"})`
  min-height: 24px;
  display: flex;
  align-items: center;
  width: 100%;
`;var components_CellLayout=e=>{let{label:t="",children:n}=e;return(0,i.jsxs)("div",{style:{width:"100%"},children:[t&&(0,i.jsx)(M,{children:t}),(0,i.jsx)(z,{children:n})]})};let V=d.ZP.div.withConfig({componentId:"sc-134cfc5a-0"})`
  // min-width: 110px;
  font-weight: 600;
  text-align: right;
  margin-right: 14px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.lg}} {
    text-align: left;
    margin-right: 0;
  }
`,Q=d.ZP.div.withConfig({componentId:"sc-134cfc5a-1"})`
  display: flex;
  align-items: center;
`;var components_Liquidity=e=>{let{liquidity:t}=e,n=t&&t.gt(0)?`$${Number(t).toLocaleString(void 0,{maximumFractionDigits:2})}`:(0,i.jsx)(N.O,{width:60});return(0,i.jsx)(Q,{children:(0,i.jsx)(V,{children:(0,i.jsx)(O.xv,{children:n})})})};let X=d.ZP.span.withConfig({componentId:"sc-41e63e15-0"})`
  color: ${e=>{let{earned:t,theme:n}=e;return t?n.colors.text:n.colors.textDisabled}};
  display: flex;
  align-items: center;
`,Y=d.ZP.div.withConfig({componentId:"sc-8c46b427-0"})`
  display: flex;
`,G=d.ZP.div.withConfig({componentId:"sc-8a16d5b5-0"})`
  padding-left: 16px;
  display: flex;
  width: 100%;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    padding-left: 32px;
  }
`;var K=n(61129),J=n(87598),ee=n(13336),et=n(17133),en=n(8804),ei=n.n(en),er=n(49403),ea=n(80444),el=n(68597),es=n(33639),eo=n(79814),ed=n(48104);let ec=U.zG.reduce((e,t)=>({...e,[t.id]:(0,ea.v)({chain:t,transport:(0,el.d)(ei()(t.rpcUrls.default.http),{timeout:15e3}),batch:{multicall:{batchSize:204800,wait:16}},pollingInterval:6e3})}),{});var eu=n(83454);let ep="preview"!==eu.env.NEXT_PUBLIC_VERCEL_ENV;function useCatchTxError(e){let{throwUserRejectError:t=!1,throwCustomError:n}=e||{},{toastError:a,toastSuccess:l}=(0,D.pm)(),[s,o]=(0,r.useState)(!1),{waitForTransaction:d}=function(){let{chainId:e}=(0,k.g)(),t=(0,ed.t)({chainId:e}),n=(0,r.useCallback)(async n=>{let getTransaction=async()=>{try{var i;let r=null!==(i=null==n?void 0:n.chainId)&&void 0!==i?i:e;if(r&&ec[r])return await ec[r].getTransactionReceipt({hash:n.hash});if(!t)return;return await t.getTransactionReceipt({hash:n.hash})}catch(e){if(e instanceof es.Bh)throw new er.s1(`Transaction not found: ${n.hash}`);if(e instanceof es.Yb)throw new er.s1(`Transaction receipt not found: ${n.hash}`);if(e instanceof eo.f)throw new er.s1(`Block not found for transaction: ${n.hash}`);if(e instanceof es.mc)throw new er.s1(`Timeout reached when fetching transaction receipt: ${n.hash}`);throw e}};return(0,er.XD)(getTransaction,{n:10,minWait:5e3,maxWait:1e4,delay:4e3}).promise},[e,t]);return{waitForTransaction:n}}(),[c,u]=(0,r.useState)(!1),p=(0,r.useCallback)(e=>{let t=(0,ee.d0)(e);t?a("Error",`Transaction failed with error: ${ep&&e.shortMessage||e.message}`):a("Error","Please try again. Confirm the transaction and make sure you are paying enough gas!")},[a]),h=(0,r.useCallback)((e,t)=>{let n=(0,ee.d0)(e);a("Failed",(0,i.jsx)(J.Y,{txHash:t,children:n?`Transaction failed with error: ${ep?(0,ee.yS)(n):n.message}`:"Transaction failed. For detailed error message:"}))},[a]),m=(0,r.useCallback)(async e=>{let r=null;try{if(o(!0),!(r=await e()))return null;let t="string"==typeof r?r:r.hash;l("Transaction Submitted!",(0,i.jsx)(J.Y,{txHash:t}));let n=await d({hash:t});if((null==n?void 0:n.status)==="success")return n;throw Error("Failed")}catch(e){if((0,et.Z)(e)||(r?n?n():h(e,"string"==typeof r?r:r.hash):p(e)),t)throw e}finally{o(!1)}return null},[l,d,t,n,p,h]),x=(0,r.useCallback)(async e=>{let t=null;try{if(u(!0),!(t=await e()))return null;let n="string"==typeof t?t:t.hash;return l("Transaction Submitted!",(0,i.jsx)(J.Y,{txHash:n})),{hash:n}}catch(e){(0,et.Z)(e)||(t?h(e,"string"==typeof t?t:t.hash):p(e))}finally{u(!1)}return null},[l,p,h]);return{fetchWithCatchTxError:m,fetchTxResponse:x,loading:s,txResponseLoading:c}}let stakeFarm=async(e,t,n)=>{var i,r;let a=new(l())(n).times(1e18).toString();return 0!==t?e.write.deposit([t,BigInt(a)],{account:null!==(i=e.account)&&void 0!==i?i:"0x",chain:e.chain}):e.write.enterStaking([BigInt(a)],{account:null!==(r=e.account)&&void 0!==r?r:"0x",chain:e.chain})},unstakeFarm=async(e,t,n)=>{var i,r;let a=new(l())(n).times(1e18).toString();return 0!==t?e.write.withdraw([t,BigInt(a)],{account:null!==(i=e.account)&&void 0!==i?i:"0x",chain:e.chain}):e.write.leaveStaking([BigInt(a)],{account:null!==(r=e.account)&&void 0!==r?r:"0x",chain:e.chain})},harvestFarm=async(e,t)=>{var n,i;return 0!==t?e.write.deposit([t,0n],{account:null!==(n=e.account)&&void 0!==n?n:"0x",chain:e.chain}):e.write.enterStaking([0n],{account:null!==(i=e.account)&&void 0!==i?i:"0x",chain:e.chain})};var eh=n(66749),hooks_useHarvestFarm=e=>{let t=(0,eh.y8)(),n=(0,r.useCallback)(async()=>harvestFarm(t,e),[e,t]);return{onReward:n}};let em=d.ZP.div.withConfig({componentId:"sc-73e16faa-0"})`
  padding: 16px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.input}};
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
`,ex=d.ZP.div.withConfig({componentId:"sc-73e16faa-1"})`
  display: flex;
  margin-bottom: 8px;
`,eg=d.ZP.div.withConfig({componentId:"sc-73e16faa-2"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ef=d.ZP.div.withConfig({componentId:"sc-73e16faa-3"})`
  display: flex;
`,ev=(0,d.ZP)(em).withConfig({componentId:"sc-73e16faa-4"})`
  &:nth-child(3) {
    flex-basis: 100%;
  }
  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    &:nth-child(3) {
      margin-top: 16px;
    }
  }
`,HarvestActionContainer=e=>{let{children:t,...n}=e,{onReward:i}=hooks_useHarvestFarm(n.pid),{account:a,chainId:l}=(0,p.Z)(),s=(0,g.TL)(),o=(0,r.useCallback)(()=>{a&&l&&s((0,w.IV)({account:a,pids:[n.pid],chainId:l}))},[a,s,l,n.pid]);return t({...n,onDone:o,onReward:i})},HarvestAction=e=>{var t;let{userData:n,userDataReady:a,onReward:s,onDone:d}=e,{toastSuccess:c}=(0,D.pm)(),{chainId:h}=(0,p.Z)(),{fetchWithCatchTxError:m,loading:x}=useCatchTxError(),g=new(l())(null!==(t=null==n?void 0:n.earnings)&&void 0!==t?t:0),f=(0,S.ZP)(u.fV[h]),v=(0,r.useMemo)(()=>f?new(l())(f.toSignificant(6)):b.HW,[f]),k=b.HW,w=0,y=k.toFixed(5,l().ROUND_DOWN);g.isZero()||(w=(k=(0,j.U4)(g)).multipliedBy(v).toNumber(),y=k.toFixed(5,l().ROUND_DOWN));let handleHarvest=async()=>{let e=await m(()=>s());(null==e?void 0:e.status)&&(c("Harvested!",(0,i.jsx)(J.Y,{txHash:e.transactionHash,children:"Your DKO earnings have been sent to your wallet!"})),null==d||d())};return(0,i.jsxs)(em,{children:[(0,i.jsxs)(ex,{children:[(0,i.jsx)(o.xvT,{textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"4px",children:"DKO"}),(0,i.jsx)(o.xvT,{textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:"Earned"})]}),(0,i.jsxs)(eg,{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(o.xvT,{children:y}),w>0&&(0,i.jsx)(o.yo7,{fontSize:"12px",color:"textSubtle",decimals:2,value:w,unit:" USD",prefix:"~"})]}),(0,i.jsx)(o.zxk,{ml:"4px",disabled:k.eq(0)||x||!a,onClick:()=>{handleHarvest()},height:"36px",variant:"secondary",width:"130px",children:x?"Harvesting":"Harvest"})]})]})};var ek=n(57011);n(1713);var ew=n(93421),eb=n(11088),hooks_useApproveFarm=(e,t)=>{let n=(0,ew.Oc)(t),{callWithGasPrice:i}=(0,eb.d)(),a=(0,r.useCallback)(async t=>i(e,"approve",[n,t]),[e,n,i]);return{onApprove:a}},hooks_useStakeFarms=e=>{let t=(0,eh.y8)(),n=(0,r.useCallback)(async n=>stakeFarm(t,e,n),[t,e]);return{onStake:n}},hooks_useUnstakeFarms=e=>{let t=(0,eh.y8)(),n=(0,r.useCallback)(async n=>unstakeFarm(t,e,n),[t,e]);return{onUnstake:n}},ej=n(93150),ey=n(64259),eC=n(12887),eS=n(81064),eT=n(65035),eI=n(21221),eP=n(95419);let eF=(0,d.ZP)(e=>(0,i.jsx)(eC.kC,{...e})).withConfig({componentId:"sc-2ed156ca-0"})`
  cursor: pointer;
`,eA=(0,d.ZP)(e=>(0,i.jsx)(O.xv,{...e})).withConfig({componentId:"sc-2ed156ca-1"})`
  width: 72px;
  max-width: 72px;
  overflow: hidden;
  text-align: right;
  text-overflow: ellipsis;
`;var components_DepositModal=e=>{let{account:t,max:n,stakedBalance:a,tokenName:s="",multiplier:o,displayApr:d,lpPrice:c=b.HW,lpLabel:u="",apr:p=0,addLiquidityUrl:h="",cakePrice:m=b.HW,decimals:x,allowance:g,enablePendingTx:f,onConfirm:v,onDismiss:k,handleApprove:w,isTokenOnly:y}=e,[C,S]=(0,r.useState)(""),[T,I]=(0,r.useState)(b.HW),[P,F]=(0,r.useState)(!1),[A,_]=(0,r.useState)(!1),$=(0,r.useMemo)(()=>(0,j.NJ)(n,x),[n,x]),D=(0,r.useMemo)(()=>{if(g){let e=(0,j.Qe)(new(l())(C),x);return e.gt(g)}return!1},[g,x,C]),Z=new(l())(C),B=(0,r.useMemo)(()=>new(l())($),[$]),U=Z.times(c),q=(0,ej.A1)({principalInUSD:Z.isNaN()?0:U.toNumber(),apr:p,earningTokenPrice:m.toNumber()}),H=m.times(q[3]),R=H.toNumber(),N=(0,j.uf)(R,H.gt(1e4)?0:2,H.gt(1e4)?0:2),E=(0,r.useCallback)(e=>{if(e.currentTarget.validity.valid){let t=e.currentTarget.value.replace(/,/g,".");S(t);let n=""===t?b.HW:new(l())(t).times(c);I(n)}},[S,I,c]),W=(0,r.useCallback)(()=>{S($);let e=new(l())($).times(c);I(e)},[$,S,I,c]),M=(0,r.useCallback)(e=>{let t=B.dividedBy(100).multipliedBy(e),n=(0,ey.X)(t.toNumber().toFixed(x));S(n);let i=t.times(c);I(i)},[B,x,c]);return A?(0,i.jsx)(L.kw,{isOpen:A,children:(0,i.jsx)(eP.F5,{account:t,linkLabel:`Get ${u}`,stakingTokenBalance:a.plus(n),stakingTokenDecimals:x,stakingTokenSymbol:s,stakingTokenPrice:c.toNumber(),earningTokenPrice:m.toNumber(),apr:p,multiplier:o,displayApr:d,linkHref:h,isFarm:!0,initialValue:C,onBack:()=>_(!1)})}):(0,i.jsx)(L.u_,{title:`Stake ${s}`,onDismiss:k,children:(0,i.jsxs)(L.fe,{width:["100%","100%","100%","420px"],children:[(0,i.jsx)(L.SP,{value:C,valueUSDPrice:T,onSelectMax:W,onPercentInput:M,onChange:E,max:$,maxAmount:B,symbol:s,addLiquidityUrl:h,inputTitle:"Stake",decimals:x,needEnable:D}),(0,i.jsxs)(eC.kC,{mt:"24px",alignItems:"center",justifyContent:"space-between",children:[(0,i.jsx)(O.xv,{mr:"8px",color:"textSubtle",children:"Annual ROI at current rates:"}),(0,i.jsxs)(eF,{alignItems:"center",onClick:()=>{_(!0)},children:[(0,i.jsxs)(eA,{children:["$",N]}),(0,i.jsx)(eS.hU,{variant:"text",scale:"sm",children:(0,i.jsx)(eI.qO,{color:"textSubtle",width:"18px"})})]})]}),(0,i.jsxs)(L.nK,{children:[(0,i.jsx)(eS.zx,{variant:"secondary",onClick:k,width:"100%",height:"48px",disabled:P,children:"Cancel"}),D?(0,i.jsx)(eS.zx,{width:"100%",isLoading:f,endIcon:f?(0,i.jsx)(eI.kF,{spin:!0,color:"currentColor"}):null,height:"48px",onClick:()=>w(BigInt(new(l())(C).times(10**x).toString())),variant:"primary",children:"Enable"}):P?(0,i.jsx)(eS.zx,{width:"100%",height:"48px",isLoading:P,endIcon:(0,i.jsx)(eI.kF,{spin:!0,color:"currentColor"}),variant:"primary",children:"Confirming"}):(0,i.jsx)(eS.zx,{width:"100%",height:"48px",variant:"primary",disabled:!Z.isFinite()||Z.eq(0)||Z.gt(B),onClick:async()=>{F(!0),await v(C),null==k||k(),F(!1)},children:"Confirm"})]}),(0,i.jsx)(eT.NR,{href:h,style:{alignSelf:"center"},children:(0,i.jsxs)(O.xv,{fontSize:"14px",children:["Get ",s]})})]})})},components_WithdrawModal=e=>{let{onConfirm:t,onDismiss:n,max:a,lpPrice:s=b.HW,tokenName:o="",decimals:d,isTokenOnly:c}=e,[u,p]=(0,r.useState)(""),[h,m]=(0,r.useState)(b.HW),[x,g]=(0,r.useState)(!1),f=(0,r.useMemo)(()=>(0,j.NJ)(a,d),[a,d]),v=new(l())(u),k=(0,r.useMemo)(()=>new(l())(f),[f]),w=(0,r.useCallback)(e=>{if(e.currentTarget.validity.valid){let t=e.currentTarget.value.replace(/,/g,".");p(t);let n=""===t?b.HW:new(l())(t).times(s);m(n)}},[p,m,s]),y=(0,r.useCallback)(()=>{p(f);let e=new(l())(f).times(s);m(e)},[f,p,m,s]),C=(0,r.useCallback)(e=>{let t=k.dividedBy(100).multipliedBy(e),n=(0,ey.X)(t.toNumber().toFixed(d));p(n);let i=t.times(s);m(i)},[k,d,s]);return(0,i.jsx)(L.u_,{title:c?"Unstake DKO":`Unstake ${o}`,onDismiss:n,children:(0,i.jsxs)(L.fe,{width:["100%","100%","100%","420px"],children:[(0,i.jsx)(L.SP,{onSelectMax:y,onPercentInput:C,onChange:w,value:u,valueUSDPrice:h,max:f,maxAmount:k,symbol:o,inputTitle:"Unstake",decimals:d}),(0,i.jsxs)(L.nK,{children:[(0,i.jsx)(eS.zx,{variant:"secondary",onClick:n,width:"100%",height:"36px",disabled:x,children:"Cancel"}),x?(0,i.jsx)(eS.zx,{width:"100%",height:"36px",isLoading:x,endIcon:(0,i.jsx)(eI.kF,{spin:!0,color:"currentColor"}),variant:"primary",children:"Confirming"}):(0,i.jsx)(eS.zx,{width:"100%",height:"36px",disabled:!v.isFinite()||v.eq(0)||v.gt(k),onClick:async()=>{g(!0),await t(u),null==n||n(),g(!1)},variant:"primary",children:"Confirm"})]})]})})},components_StakedActionComponent=e=>{let{lpSymbol:t,children:n,disabledMinusButton:r,disabledPlusButton:a,onPresentWithdraw:l,onPresentDeposit:s}=e;return(0,i.jsxs)(ev,{children:[(0,i.jsxs)(ex,{children:[(0,i.jsx)(O.xv,{color:"secondary",fontSize:"12px",pr:"4px",children:t}),(0,i.jsx)(O.xv,{textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:"Staked"})]}),(0,i.jsxs)(eg,{children:[n,(0,i.jsxs)(ef,{children:[(0,i.jsx)(eS.hU,{mr:"6px",variant:"secondary",disabled:r,onClick:l,height:"36px",children:(0,i.jsx)(eI.V_,{color:"primary",width:"14px"})}),(0,i.jsx)(eS.hU,{variant:"secondary",disabled:a,onClick:s,height:"36px",children:(0,i.jsx)(eI.dt,{color:"primary",width:"14px"})})]})]})]})},e_=n(946),e$=n(32692),components_StakedLP=e=>{let{stakedBalance:t,quoteTokenSymbol:n,tokenSymbol:a,lpTotalSupply:l,lpTokenPrice:s,tokenAmountTotal:o,quoteTokenAmountTotal:d,isTokenOnly:c,pendingFarmLength:u=0,decimals:p,onClickLoadingIcon:h}=e,m=(0,r.useMemo)(()=>(0,j.O$)(t,p),[t,p]);return(0,i.jsxs)(eC.kC,{flexDirection:"column",alignItems:"flex-start",children:[(0,i.jsxs)(eC.kC,{children:[(0,i.jsx)(e$.X,{color:t.eq(0)?"textDisabled":"text",children:m}),u>0&&(0,i.jsx)(eI.Du,{style:{cursor:"pointer"},spin:!0,onClick:h})]}),t.gt(0)&&s.gt(0)&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e_.y,{fontSize:"12px",color:"textSubtle",decimals:2,value:(0,j.mW)(s.times(t),p),unit:" USD",prefix:"~"}),!c&&(0,i.jsxs)(eC.kC,{style:{gap:"4px"},children:[(0,i.jsx)(e_.y,{fontSize:"12px",color:"textSubtle",decimals:2,value:t.div(l).times(o).toNumber(),unit:` ${a}`}),(0,i.jsx)(e_.y,{fontSize:"12px",color:"textSubtle",decimals:2,value:t.div(l).times(d).toNumber(),unit:` ${n}`})]})]})]})},components_StakeComponent=e=>{let{lpSymbol:t,isStakeReady:n,onPresentDeposit:r}=e;return(0,i.jsxs)(ev,{children:[(0,i.jsxs)(ex,{children:[(0,i.jsx)(O.xv,{textTransform:"uppercase",color:"textSubtle",fontSize:"12px",pr:"4px",children:"Stake"}),(0,i.jsx)(O.xv,{color:"secondary",fontSize:"12px",children:t})]}),(0,i.jsx)(eg,{children:(0,i.jsx)(eS.zx,{width:"100%",onClick:r,variant:"secondary",disabled:n,height:"36px",children:"Deposit"})})]})},components_AccountNotConnect=e=>{let{children:t}=e;return(0,i.jsxs)(ev,{children:[(0,i.jsx)(ex,{children:(0,i.jsx)(O.xv,{textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:"Start Earning"})}),(0,i.jsx)(eg,{children:t})]})};let StakedContainer=e=>{let{children:t,...n}=e,{address:i}=(0,s.m)(),{lpAddress:a}=n,l=(0,eh.X_)(a),{onStake:o,onUnstake:d,onApprove:c,onDone:u}=function(e,t){let{account:n,chainId:i}=(0,p.Z)(),{onStake:a}=hooks_useStakeFarms(t),{onUnstake:l}=hooks_useUnstakeFarms(t),s=(0,g.TL)(),{onApprove:o}=hooks_useApproveFarm(e,i),d=(0,r.useCallback)(()=>{n&&i&&s((0,w.IV)({account:n,pids:[t],chainId:i}))},[n,t,i,s]);return{onStake:a,onUnstake:l,onApprove:o,onDone:d}}(l,n.pid),{allowance:h}=n.userData||{},m=i&&h&&h.isGreaterThan(0);return t({...n,onStake:o,onDone:u,onUnstake:d,onApprove:c,isApproved:m})};var StakedAction=e=>{let{pid:t,apr:n,multiplier:a,lpSymbol:s,lpLabel:o,lpTokenPrice:d,quoteToken:c,token:h,displayApr:m,lpTotalSupply:x,tokenAmountTotal:g,quoteTokenAmountTotal:f,userData:v,onDone:k,onStake:w,onUnstake:j,onApprove:y,isTokenOnly:C}=e,{toastSuccess:T}=(0,D.pm)(),{fetchWithCatchTxError:I,loading:P}=useCatchTxError(),{account:F,chainId:_}=(0,p.Z)(),{tokenBalance:$,stakedBalance:Z,allowance:U}=v||{},q=(0,A.useRouter)(),H=(0,S.ZP)(u.fV[_]),R=(0,r.useMemo)(()=>H?new(l())(H.toSignificant(6)):b.HW,[H]),O=utils_getLiquidityUrlPathParts({quoteTokenAddress:c.address,tokenAddress:h.address,chainId:_}),N=`https://dex.dextop.pro/add/${O}`,E=(0,r.useMemo)(()=>["history","archived"].some(e=>q.pathname.includes(e)),[q]),handleStake=async e=>{let t=await I(()=>w(e));(null==t?void 0:t.status)&&(T("Staked!",(0,i.jsx)(J.Y,{txHash:t.transactionHash,children:C?"Your funds have been staked in the pool":"Your funds have been staked in the farm"})),k())},handleUnstake=async e=>{let t=await I(()=>j(e));(null==t?void 0:t.status)&&(T("Unstaked",(0,i.jsx)(J.Y,{txHash:t.transactionHash,children:"Your earnings have also been harvested to your wallet"})),k())},W=(0,r.useCallback)(async e=>{let t=await I(()=>y(e));(null==t?void 0:t.status)&&(T("Contract Enabled",(0,i.jsx)(J.Y,{txHash:t.transactionHash})),k())},[y,T,I,k]),[M]=(0,L.dd)((0,i.jsx)(components_DepositModal,{account:F,pid:t,lpTotalSupply:null!=x?x:b.HW,max:null!=$?$:b.HW,lpPrice:d,lpLabel:o,apr:null!=n?n:void 0,displayApr:m,stakedBalance:null!=Z?Z:b.HW,tokenName:s,multiplier:a,addLiquidityUrl:C?`/swap?outputCurrency=${h.address}`:`/add/${N}`,cakePrice:R,decimals:18,allowance:U,enablePendingTx:P,onConfirm:handleStake,handleApprove:W,isTokenOnly:C}),!0,!0,`farm-deposit-modal-${t}`),[z]=(0,L.dd)((0,i.jsx)(components_WithdrawModal,{max:null!=Z?Z:b.HW,onConfirm:handleUnstake,lpPrice:d,tokenName:s,decimals:18,isTokenOnly:C}));if(!F)return(0,i.jsx)(components_AccountNotConnect,{children:(0,i.jsx)(ek.Z,{})});if(null==Z?void 0:Z.gt(0)){var V,Q,X,Y;return(0,i.jsx)(components_StakedActionComponent,{lpSymbol:s,disabledPlusButton:E,onPresentWithdraw:z,onPresentDeposit:M,children:(0,i.jsx)(components_StakedLP,{decimals:18,stakedBalance:Z,quoteTokenSymbol:(null===(V=B.FX[_])||void 0===V?void 0:V.symbol)===c.symbol?null===(Q=B.B5[_])||void 0===Q?void 0:Q.symbol:c.symbol,tokenSymbol:(null===(X=B.FX[_])||void 0===X?void 0:X.symbol)===h.symbol?null===(Y=B.B5[_])||void 0===Y?void 0:Y.symbol:h.symbol,lpTotalSupply:null!=x?x:b.HW,lpTokenPrice:null!=d?d:b.HW,tokenAmountTotal:null!=g?g:b.HW,quoteTokenAmountTotal:null!=f?f:b.HW,isTokenOnly:C})})}return(0,i.jsx)(components_StakeComponent,{lpSymbol:s,isStakeReady:E,onPresentDeposit:M})};let eD=d.F4`
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
`,eB=d.ZP.div.withConfig({componentId:"sc-66e42ea6-0"})`
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
`,eU=(0,d.ZP)(o.NRJ).withConfig({componentId:"sc-66e42ea6-1"})`
  font-weight: 400;
`,eL=d.ZP.div.withConfig({componentId:"sc-66e42ea6-2"})`
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  align-items: center;
  display: flex;
  justify-content: space-between;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    justify-content: flex-start;
  }
`,eq=d.ZP.div.withConfig({componentId:"sc-66e42ea6-3"})`
  display: flex;
  flex-direction: column;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    flex-direction: row;
    align-items: center;
    flex-grow: 1;
    flex-basis: 0;
    flex-wrap: wrap;
  }
`,eH=d.ZP.div.withConfig({componentId:"sc-66e42ea6-4"})`
  min-width: 200px;
`;var components_ActionPanel=e=>{let{details:t,apr:n,userDataReady:r,expanded:a}=e,{chainId:l}=(0,k.g)(),{quoteToken:s,token:d}=t,c=t.lpSymbol&&t.lpSymbol.toUpperCase().replace("PANCAKE",""),u=utils_getLiquidityUrlPathParts({quoteTokenAddress:s.address,tokenAddress:d.address,chainId:l}),{lpAddress:p}=t,h=(0,K.C)(p,"address",l);return(0,i.jsxs)(eB,{expanded:a,children:[(0,i.jsxs)(eH,{children:[(0,i.jsx)(eL,{children:(0,i.jsx)(eU,{href:t.isTokenOnly?`/swap?outputCurrency=${t.token.address}`:`/add/${u}`,children:(0,i.jsxs)(o.xvT,{fontSize:"14px",children:["Get ",c]})})}),(0,i.jsx)(eU,{href:h,children:(0,i.jsx)(o.xvT,{fontSize:"14px",children:"View Contract"})})]}),(0,i.jsxs)(eq,{children:[(0,i.jsx)(HarvestActionContainer,{...t,userDataReady:r,children:e=>(0,i.jsx)(HarvestAction,{...e})}),(0,i.jsx)(StakedContainer,{...t,userDataReady:r,lpLabel:c,displayApr:n.value,children:e=>(0,i.jsx)(StakedAction,{...e})})]})]})};let eR={apr:components_Apr,farm:e=>{let{token:t,quoteToken:n,isTokenOnly:r}=e;return(0,i.jsx)(G,{children:r?(0,i.jsxs)(o.kCb,{width:"100%",alignItems:"center",children:[(0,i.jsx)(TokenImage,{width:36,height:36,token:t,mr:"2px"}),(0,i.jsx)(o.XCv,{}),(0,i.jsx)(TokenImage,{width:36,height:36,token:u.fV[t.chainId]})]}):(0,i.jsxs)(o.kCb,{width:"100%",alignItems:"center",children:[(0,i.jsx)(TokenPairImage,{width:40,height:40,variant:"inverted",primaryToken:t,secondaryToken:n}),(0,i.jsx)(o.XCv,{}),(0,i.jsx)(TokenImage,{width:36,height:36,token:u.fV[t.chainId]})]})})},name:e=>{let{label:t,isReady:n,stakedBalance:r,isTokenOnly:a}=e,l=r?(0,j.mW)(r):0;if(!n)return(0,i.jsx)(Y,{children:(0,i.jsx)("div",{children:(0,i.jsx)(N.O,{width:40,height:10,mb:"4px"})})});let s=(0,i.jsx)(Y,{children:(0,i.jsxs)(o.kCb,{alignItems:"center",children:[l?(0,i.jsx)(O.xv,{color:"secondary",fontSize:"12px",textTransform:"uppercase",children:a?"Staking":"Farming"}):(0,i.jsx)(i.Fragment,{}),(0,i.jsx)(O.xv,{children:t})]})});return s},earned:e=>{let{earnings:t,userDataReady:n}=e,r=t>0?t:0;return n?(0,i.jsx)(X,{earned:r,children:r.toLocaleString()}):(0,i.jsx)(X,{earned:0,children:(0,i.jsx)(N.O,{width:60})})},liquidity:components_Liquidity},eO=d.ZP.div.withConfig({componentId:"sc-f02261ee-0"})`
  padding: 12px 0px;
  display: flex;
  align-items: center;
  padding-right: 8px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.xl}} {
    padding-right: 32px;
  }
`,eN=d.ZP.tr.withConfig({componentId:"sc-f02261ee-1"})`
  cursor: pointer;
  &:not(:last-child) {
    border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
  }
`,eE=d.ZP.td.withConfig({componentId:"sc-f02261ee-2"})`
  padding: 16px 0 24px 16px;
`,eW=d.ZP.td.withConfig({componentId:"sc-f02261ee-3"})`
  padding-top: 16px;
  padding-bottom: 24px;
`,eM=d.ZP.td.withConfig({componentId:"sc-f02261ee-4"})`
  padding-top: 24px;
`;var components_Row=e=>{let{userDataReady:t,details:n}=e,a=!!useFarmUser(n.pid).stakedBalance.toNumber(),[l,s]=(0,r.useState)(a),o=(0,Z.Z)(l,300),toggleActionPanel=()=>{s(!l)};(0,r.useEffect)(()=>{s(a)},[a]);let{isDesktop:d,isMobile:c}=(0,D.SL)(),u=!d,p=u?$:_,h=p.map(e=>e.name);return(0,i.jsxs)(i.Fragment,{children:[c?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("tr",{style:{cursor:"pointer",width:"100%"},onClick:toggleActionPanel,children:(0,i.jsx)(eM,{colSpan:3,children:(0,i.jsx)(components_Farm,{...e.farm})})}),(0,i.jsxs)(eN,{onClick:toggleActionPanel,children:[(0,i.jsx)(eE,{width:"50%",children:(0,i.jsx)(components_CellLayout,{label:"Total Staked",children:(0,i.jsx)(components_Liquidity,{...e.liquidity})})}),(0,i.jsx)(eW,{width:"50%",children:(0,i.jsx)(components_CellLayout,{label:"APR",children:(0,i.jsx)(components_Apr,{...e.apr,hideButton:!0})})})]})]}):(0,i.jsx)(eN,{onClick:toggleActionPanel,children:Object.keys(e).map(n=>{let a=h.indexOf(n);if(-1===a)return null;switch(n){case"apr":return(0,i.jsx)("td",{children:(0,i.jsx)(eO,{children:(0,i.jsx)(components_CellLayout,{label:"APR",children:(0,i.jsx)(components_Apr,{...e.apr,hideButton:u})})})},n);case"details":return(0,i.jsx)("td",{},n);default:return(0,i.jsx)("td",{children:(0,i.jsx)(eO,{children:(0,i.jsx)(components_CellLayout,{label:p[a].label,children:(0,r.createElement)(eR[n],{...e[n],userDataReady:t})})})},n)}})}),o&&(0,i.jsx)("tr",{children:(0,i.jsx)("td",{colSpan:7,children:(0,i.jsx)(components_ActionPanel,{...e,expanded:l})},`farm-actionpanel-${n.pid}`)})]})};let ez=d.ZP.div.withConfig({componentId:"sc-2bc0b44f-0"})`
  width: 100%;
  background: ${e=>{let{theme:t}=e;return t.card.background}};
  border-radius: 8px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
`,eV=d.ZP.div.withConfig({componentId:"sc-2bc0b44f-1"})`
  overflow: visible;
  scroll-margin-top: 64px;

  &::-webkit-scrollbar {
    display: none;
  }
`,eQ=d.ZP.table.withConfig({componentId:"sc-2bc0b44f-2"})`
  border-collapse: collapse;
  font-size: 14px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`,eX=d.ZP.tbody.withConfig({componentId:"sc-2bc0b44f-3"})`
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
`,eY=d.ZP.div.withConfig({componentId:"sc-2bc0b44f-4"})`
  position: relative;
`;var components_FarmTable=e=>{let{farms:t,cakePrice:n,userDataReady:a}=e,s=(0,r.useRef)(null),o=(0,r.useMemo)(()=>_.map(e=>({id:e.id,name:e.name,label:e.label,sort:(t,n)=>{switch(e.name){case"farm":return n.id-t.id;case"apr":if(t.original.apr.value&&n.original.apr.value)return Number(t.original.apr.value)-Number(n.original.apr.value);return 0;case"earned":return t.original.earned.earnings-n.original.earned.earnings;default:return 1}},sortable:e.sortable})),[]),generateRow=e=>{var t;let{token:i,quoteToken:r}=e,a=i.address,s=r.address,o=e.lpSymbol&&e.lpSymbol.split(" ")[0].toUpperCase().replace("DexTop",""),d={apr:{value:null!==(t=getDisplayApr(e.apr,e.lpRewardsApr))&&void 0!==t?t:"0",pid:e.pid,multiplier:e.multiplier,lpLabel:o,lpSymbol:e.lpSymbol,lpTokenPrice:e.lpTokenPrice,tokenAddress:a,quoteTokenAddress:s,cakePrice:n,lpRewardsApr:e.lpRewardsApr,originalValue:e.apr},farm:{label:o,pid:e.pid,token:e.token,quoteToken:e.quoteToken,isReady:void 0!==e.multiplier,isTokenOnly:e.isTokenOnly},name:{label:o,pid:e.pid,token:e.token,quoteToken:e.quoteToken,isReady:void 0!==e.multiplier,isTokenOnly:e.isTokenOnly},earned:{earnings:(0,j.mW)(new(l())(e.userData.earnings)),pid:e.pid},liquidity:{liquidity:null==e?void 0:e.liquidity},details:e};return d},d=t.map(e=>generateRow(e)),c=d.map(e=>{let t={};return o.forEach(n=>{if(!(n.name in e))throw Error(`Invalid row data, ${n.name} not found`);t[n.name]=e[n.name]}),t});return(0,i.jsx)(ez,{id:"farms-table",children:(0,i.jsx)(eY,{id:"table-container",children:(0,i.jsx)(eV,{ref:s,children:(0,i.jsx)(eQ,{children:(0,i.jsx)(eX,{children:c.map(e=>(0,r.createElement)(components_Row,{...e,userDataReady:a,key:`table-row-${e.farm.pid}`}))})})})})})},eG=n(84563),eK=n(11207),eJ=n(12663);let e0=d.ZP.div.withConfig({componentId:"sc-6580afa-0"})`
  display: flex;
  justify-content: center;
  align-items: center;
`,FarmTabButtons=e=>{let t,{hasStakeInFinishedFarms:n}=e,r=(0,A.useRouter)();switch(r.pathname){case"/earn":default:t=0;break;case"/earn/history":t=1;break;case"/earn/archived":t=2}return(0,i.jsx)(e0,{children:(0,i.jsx)(eC.kC,{width:"max-content",flexDirection:"column",children:(0,i.jsxs)(eJ.xz,{activeIndex:t,scale:"sm",variant:"primary",children:[(0,i.jsx)(eJ.kg,{as:eG.a,to:"/earn",children:"Live"}),(0,i.jsx)(eK.B,{show:n,children:(0,i.jsx)(eJ.kg,{as:eG.a,to:"/earn/history",id:"finished-farms-button",children:"Finished"})})]})})})},e1=(0,r.createContext)({chosenFarms:[]}),e2=d.ZP.div.withConfig({componentId:"sc-776da074-0"})`
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
`,e6=d.ZP.div.withConfig({componentId:"sc-776da074-1"})`
  > ${o.xvT} {
    font-size: 12px;
  }
`,e4=d.ZP.div.withConfig({componentId:"sc-776da074-2"})`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 0px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    width: auto;
    padding: 0;
    margin-top: 12px;
  }
`,e3=d.ZP.div.withConfig({componentId:"sc-776da074-3"})`
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
`,e8=d.ZP.div.withConfig({componentId:"sc-776da074-4"})`
  display: flex;
  justify-content: center;
  align-items: center;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    margin-left: 16px;
  }
`;var views_Farms=()=>{let{pathname:e,query:t}=(0,A.useRouter)(),{chainId:n}=(0,k.g)(),{data:a,userDataLoaded:d,poolLength:x,regularCakePerBlock:j}=useFarms(),y=(0,S.ZP)(u.fV[n]),T=(0,r.useMemo)(()=>y?new(l())(y.toSignificant(6)):b.HW,[y]),[I,_]=(0,r.useState)(""),$=(0,r.useMemo)(()=>"string"==typeof(null==t?void 0:t.search)?t.search:"",[t]),D=$&&!I?$:I,{address:Z}=(0,s.m)(),[B,U]=(0,r.useState)("hot"),{observerRef:L,isIntersecting:q}=hooks_useIntersectionObserver(),H=(0,r.useRef)(0),R=e.includes("archived"),O=e.includes("history"),N=!O&&!R;!function(){let e=(0,g.TL)(),{account:t,chainId:n}=(0,p.Z)();(0,f.a)({queryKey:["publicFarmData",n],queryFn:async()=>{if(!n)throw Error("ChainId is not defined");let t=await (0,v.getFarmConfig)(n);if(!t)throw Error("Failed to fetch farm config");let i=t.map(e=>e.pid);return e((0,w.eG)({pids:i,chainId:n})),null},enabled:!!(n&&m.G.includes(n)),refetchInterval:h.KI,refetchOnReconnect:!1,refetchOnWindowFocus:!1,refetchOnMount:!1});let i=["farmsWithUserData",t,n];(0,f.a)({queryKey:i,queryFn:async()=>{if(!n)throw Error("ChainId is not defined");let i=await (0,v.getFarmConfig)(n);if(!i)throw Error("Failed to fetch farm config");if(!t)throw Error("Invalid account");let r=i.map(e=>e.pid);return e((0,w.IV)({account:t,pids:r,chainId:n})),null},enabled:!!(t&&n),refetchInterval:h.KI,refetchOnReconnect:!1,refetchOnWindowFocus:!1,refetchOnMount:!1})}();let[E,W]=(0,F.XD)(N),M=a.filter(e=>"0X"!==e.multiplier&&(!x||x>e.pid)),z=a.filter(e=>0!==e.pid&&"0X"===e.multiplier),V=M.filter(e=>e.userData&&new(l())(e.userData.stakedBalance).isGreaterThan(0)),Q=z.filter(e=>e.userData&&new(l())(e.userData.stakedBalance).isGreaterThan(0)),X=a.filter(e=>e.userData&&new(l())(e.userData.stakedBalance).isGreaterThan(0)),Y=(0,r.useCallback)(e=>{let t=e.map(e=>{var t,i;if(!e.lpTotalInQuoteToken||!e.quoteTokenPriceBusd)return e;let r=e.isTokenOnly?new(l())(e.lpTotalInQuoteToken).times(null!==(t=e.tokenPriceBusd)&&void 0!==t?t:0):new(l())(e.lpTotalInQuoteToken).times(e.quoteTokenPriceBusd),{cakeRewardsApr:a,lpRewardsApr:s}=N?getFarmApr(n,new(l())(null!==(i=e.poolWeight)&&void 0!==i?i:0),T,r,e.lpAddress,null!=j?j:0):{cakeRewardsApr:0,lpRewardsApr:0};return{...e,apr:null!=a?a:void 0,lpRewardsApr:s,liquidity:r}});return(0,C.kY)(t,D)},[D,N,n,T,j]),[G,K]=(0,r.useState)(12),J=(0,r.useMemo)(()=>{let e=[];return N&&(e=E?Y(V):Y(M)),O&&(e=E?Y(Q):Y(z)),R&&(e=E?Y(X):Y(a)),e},[M,Y,z,a,N,O,R,X,Q,E,V]),ee=(0,r.useMemo)(()=>(e=>{switch(B){case"apr":return P()(e,e=>Number(e.apr)+Number(e.lpRewardsApr),"desc");case"earned":return P()(e,e=>e.userData?Number(e.userData.earnings):0,"desc");case"liquidity":return P()(e,e=>Number(e.liquidity),"desc");default:return e}})(J).slice(0,G),[J,B,G]);H.current=ee.length,(0,r.useEffect)(()=>{q&&K(e=>e<=H.current?e+12:e)},[q]);let et=(0,r.useMemo)(()=>({chosenFarms:ee}),[ee]);return(0,i.jsx)(e1.Provider,{value:et,children:(0,i.jsxs)(c.Z,{children:[(0,i.jsxs)(e2,{children:[(0,i.jsxs)(e3,{children:[(0,i.jsx)(FarmTabButtons,{hasStakeInFinishedFarms:Q.length>0}),(0,i.jsx)(e8,{children:(0,i.jsx)(o.kCb,{width:"max-content",flexDirection:"column",children:(0,i.jsxs)(o.xzh,{activeIndex:E?1:0,scale:"sm",variant:"primary",onItemClick:()=>W(!E),children:[(0,i.jsx)(o.kgj,{children:"All"}),(0,i.jsx)(o.kgj,{children:"My"})]})})})]}),(0,i.jsxs)(e4,{children:[(0,i.jsx)(e6,{children:(0,i.jsx)(o.PhF,{options:[{label:"Hot",value:"hot"},{label:"APR",value:"apr"},{label:"Earned",value:"earned"},{label:"Liquidity",value:"liquidity"}],onOptionChange:e=>{U(e.value)}})}),(0,i.jsx)(e6,{style:{marginLeft:16},children:(0,i.jsx)(o.MjL,{initialValue:$,onChange:e=>{_(e.target.value)},placeholder:"Search Farms"})})]})]}),(0,i.jsx)(components_FarmTable,{farms:ee,cakePrice:T,userDataReady:!Z||!!Z&&d}),Z&&!d&&E&&(0,i.jsx)(o.kCb,{justifyContent:"center",children:(0,i.jsx)(o.gbz,{})}),x&&(0,i.jsx)("div",{ref:L})]})})}}}]);
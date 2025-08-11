(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8485],{61930:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{noSSR:function(){return noSSR},default:function(){return dynamic}});let n=r(38754),l=(r(67294),n._(r(60344)));function convertModule(e){return{default:(null==e?void 0:e.default)||e}}function noSSR(e,t){return delete t.webpack,delete t.modules,e(t)}function dynamic(e,t){let r=l.default,n={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n={...n,...e}),n={...n,...t};let i=n.loader;return(n.loadableGenerated&&(n={...n,...n.loadableGenerated},delete n.loadableGenerated),"boolean"!=typeof n.ssr||n.ssr)?r({...n,loader:()=>null!=i?i().then(convertModule):Promise.resolve(convertModule(()=>null))}):(delete n.webpack,delete n.modules,noSSR(r,n))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},52055:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return i}});let n=r(38754),l=n._(r(67294)),i=l.default.createContext(null)},60344:function(e,t,r){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let n=r(38754),l=n._(r(67294)),i=r(52055),o=[],s=[],a=!1;function load(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}let LoadableSubscription=class LoadableSubscription{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}};function Loadable(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),n=null;function init(){if(!n){let t=new LoadableSubscription(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!a){let e=r.webpack?r.webpack():r.modules;e&&s.push(t=>{for(let r of e)if(t.includes(r))return init()})}function LoadableComponent(e,t){!function(){init();let e=l.default.useContext(i.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let o=l.default.useSyncExternalStore(n.subscribe,n.getCurrentValue,n.getCurrentValue);return l.default.useImperativeHandle(t,()=>({retry:n.retry}),[]),l.default.useMemo(()=>{var t;return o.loading||o.error?l.default.createElement(r.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:n.retry}):o.loaded?l.default.createElement((t=o.loaded)&&t.default?t.default:t,e):null},[e,o])}return LoadableComponent.preload=()=>init(),LoadableComponent.displayName="LoadableComponent",l.default.forwardRef(LoadableComponent)}(load,e)}function flushInitializers(e,t){let r=[];for(;e.length;){let n=e.pop();r.push(n(t))}return Promise.all(r).then(()=>{if(e.length)return flushInitializers(e,t)})}Loadable.preloadAll=()=>new Promise((e,t)=>{flushInitializers(o).then(e,t)}),Loadable.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let res=()=>(a=!0,t());flushInitializers(s,e).then(res,res)})),window.__NEXT_PRELOADREADY=Loadable.preloadReady;let d=Loadable},58739:function(e,t,r){"use strict";r.d(t,{O:function(){return Breadcrumbs_Breadcrumbs}});var n=r(85893),l=r(67294),i=r(19521),o=r(57247),s=r(15113);let a=i.ZP.div.withConfig({componentId:"sc-b9c7047c-0"})`
  align-items: center;
  color: ${e=>{let{theme:t}=e;return t.colors.textDisabled}};
  display: flex;
  justify-content: center;
  padding-left: 4px;
  padding-right: 4px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    padding-left: 8px;
    padding-right: 8px;
  }

  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    padding-left: 16px;
    padding-right: 16px;
  }
`,d=i.ZP.ul.withConfig({componentId:"sc-b9c7047c-1"})`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;

  a {
    color: ${e=>{let{theme:t}=e;return t.colors.primary}};

    &:hover {
      color: ${e=>{let{theme:t}=e;return t.colors.primaryBright}};
    }
  }

  ${o.Dh}
`,insertSeparators=(e,t)=>e.reduce((e,r,l)=>0===l?[...e,r]:[...e,(0,n.jsx)(a,{"aria-hidden":!0,children:t},`separator-${l}`),r],[]),c=(0,n.jsx)(s.Z,{color:"currentColor",width:"24px"});var Breadcrumbs_Breadcrumbs=e=>{let{separator:t=c,children:r}=e,i=l.Children.toArray(r).filter(e=>(0,l.isValidElement)(e)),o=insertSeparators(i,t);return(0,n.jsx)(d,{children:o.map((e,t)=>(0,n.jsx)("li",{children:e},`child-${t}`))})}},54272:function(e,t,r){"use strict";r.d(t,{_:function(){return TabToggleGroup},o:function(){return a}});var n=r(85893),l=r(31258),i=r(19521);let o=(0,i.ZP)(l.kCb).withConfig({componentId:"sc-532dd31b-0"})`
  overflow-x: scroll;
  padding: 0;
  border-radius: 8px 8px 0 0;
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`,s=(0,i.ZP)(l.kCb).withConfig({componentId:"sc-532dd31b-1"})`
  justify-content: space-between;
  // background-color: ${e=>{let{theme:t}=e;return t.colors.input}};
  width: 100%;
`,a=(0,i.ZP)(l.xuv).attrs({as:"button"}).withConfig({componentId:"sc-532dd31b-2"})`
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
  color: ${e=>{let{theme:t,isActive:r}=e;return r?t.colors.text:t.colors.textSubtle}};
  background-color: ${e=>{let{theme:t,isActive:r}=e;return r?t.colors.dropdown:t.colors.backgroundAlt}};
  box-shadow: none;
`;a.defaultProps={p:"16px"};let TabToggleGroup=e=>{let{children:t}=e;return(0,n.jsx)(o,{p:["0 4px","0 16px"],children:(0,n.jsx)(s,{children:t})})}},88412:function(e,t,r){"use strict";r.d(t,{Z:function(){return PoolTable}});var n=r(85893),l=r(31258),i=r(27086),o=r(41664),s=r.n(o),a=r(67294),d=r(99712),c=r(19521),u=r(75824),x=r(49923),p=r(1793),h=r(14706),m=r(89397),f=r(54042),v=r(2003),g=r(13256),j=r(39511),b=r(7846);let y=c.ZP.div.withConfig({componentId:"sc-cfcd8327-0"})`
  display: grid;
  grid-gap: 1em;
  align-items: center;

  grid-template-columns: 20px 3.5fr repeat(3, 1fr);
  padding: 0 24px;
  @media screen and (max-width: 900px) {
    grid-template-columns: 20px 1.5fr repeat(2, 1fr);
    & :nth-child(3) {
      display: none;
    }
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 20px 1.5fr repeat(1, 1fr);
    & :nth-child(5) {
      display: none;
    }
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1.3fr 1fr;
    > *:nth-child(1) {
      display: none;
    }
  }
`,w=(0,c.ZP)(s()).withConfig({componentId:"sc-cfcd8327-1"})`
  text-decoration: none;
  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`,C={feeTier:"feeTier",volumeUSD:"volumeUSD",tvlUSD:"tvlUSD",volumeUSDWeek:"volumeUSDWeek"},DataRow=e=>{var t,r;let{poolData:i,index:o,chainPath:s}=e,a=(0,d.RE)();return(0,n.jsx)(w,{href:`/${h.ew}${s}/pairs?address=${i.address}`,children:(0,n.jsxs)(y,{children:[(0,n.jsx)(l.xvT,{fontWeight:400,children:o+1}),(0,n.jsx)(l.xvT,{fontWeight:400,children:(0,n.jsxs)(j.DA,{children:[(0,n.jsx)(x.g,{address0:i.token0.address,address1:i.token1.address,chainName:a}),(0,n.jsxs)(l.xvT,{ml:"8px",children:[null!==(t=u.VG[i.token0.address])&&void 0!==t?t:i.token0.symbol,"/",null!==(r=u.VG[i.token1.address])&&void 0!==r?r:i.token1.symbol]}),(0,n.jsx)(v.FS,{ml:"10px",style:{fontSize:14},children:(0,m.Uo)(i.feeTier)})]})}),(0,n.jsx)(l.xvT,{fontWeight:400,children:(0,f.Y)(i.tvlUSD)}),(0,n.jsx)(l.xvT,{fontWeight:400,children:(0,f.Y)(i.volumeUSD)}),(0,n.jsx)(l.xvT,{fontWeight:400,children:(0,f.Y)(i.volumeUSDWeek)})]})})};function PoolTable(e){let{poolDatas:t,maxItems:r=10}=e,{chainId:o}=(0,i.g)(),[s,c]=(0,a.useState)(C.tvlUSD),[u,x]=(0,a.useState)(!0),m=(0,d.hb)(),[f,v]=(0,a.useState)(1),[j,w]=(0,a.useState)(1);(0,a.useEffect)(()=>{let e=1;t.length%r==0&&(e=0),w(Math.floor(t.length/r)+e)},[r,t]);let S=(0,a.useMemo)(()=>t?t.filter(e=>{var t;return!!e&&!(null===h.Lr||void 0===h.Lr?void 0:null===(t=h.Lr[o])||void 0===t?void 0:t.includes(e.address))}).sort((e,t)=>e&&t?e[s]>t[s]?(u?-1:1)*1:-((u?-1:1)*1):-1).slice(r*(f-1),f*r):[],[o,r,f,t,u,s]),T=(0,a.useCallback)(e=>{c(e),x(s!==e||!u),v(1)},[u,s]),k=(0,b.c)(s,u);return t?(0,n.jsx)(p.y6,{children:S.length>0?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(y,{children:[(0,n.jsx)(l.xvT,{color:"text",children:"#"}),(0,n.jsxs)(p._J,{color:"text",children:["Pair",(0,n.jsx)(b.K,{scale:"sm",variant:"subtle",onClick:()=>T(C.feeTier),className:k(C.feeTier),children:(0,n.jsx)(l.HKD,{})})]}),(0,n.jsxs)(p._J,{color:"text",children:["TVL",(0,n.jsx)(b.K,{scale:"sm",variant:"subtle",onClick:()=>T(C.tvlUSD),className:k(C.tvlUSD),children:(0,n.jsx)(l.HKD,{})})]}),(0,n.jsxs)(p._J,{color:"text",children:["Volume 24H",(0,n.jsx)(b.K,{scale:"sm",variant:"subtle",onClick:()=>T(C.volumeUSD),className:k(C.volumeUSD),children:(0,n.jsx)(l.HKD,{})})]}),(0,n.jsxs)(p._J,{color:"text",children:["Volume 7D",(0,n.jsx)(b.K,{scale:"sm",variant:"subtle",onClick:()=>T(C.volumeUSDWeek),className:k(C.volumeUSDWeek),children:(0,n.jsx)(l.HKD,{})})]})]}),(0,n.jsx)(p.SS,{}),S.map((e,t)=>e?(0,n.jsxs)(a.Fragment,{children:[(0,n.jsx)(DataRow,{index:(f-1)*10+t,poolData:e,chainPath:m}),(0,n.jsx)(p.SS,{})]},`${null==e?void 0:e.address}_Row`):null),(0,n.jsxs)(p.Ob,{children:[(0,n.jsx)(l.xuv,{onClick:()=>{v(1===f?f:f-1)},children:(0,n.jsx)(p.Eh,{children:(0,n.jsx)(l.Rpv,{color:1===f?"textDisabled":"primary"})})}),(0,n.jsx)(l.xvT,{children:`Page ${f} of ${j}`}),(0,n.jsx)(l.xuv,{onClick:()=>{v(f===j?f:f+1)},children:(0,n.jsx)(p.Eh,{children:(0,n.jsx)(l.mrv,{color:f===j?"textDisabled":"primary"})})})]})]}):(0,n.jsxs)(g.pr,{children:[(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{})]})}):(0,n.jsx)(g.ZP,{})}},80145:function(e,t,r){"use strict";r.d(t,{Qv:function(){return o},Tw:function(){return i},Vd:function(){return s}});var n=r(19521),l=r(31258);n.ZP.div.withConfig({componentId:"sc-1fc5a48-0"})`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.2em;
  margin-bottom: 0.5em;
`,n.ZP.div.withConfig({componentId:"sc-1fc5a48-1"})`
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  opacity: ${e=>e.faded?.3:1};
  padding: 0 20px;
  user-select: none;
  :hover {
    cursor: pointer;
  }
`,n.ZP.div.withConfig({componentId:"sc-1fc5a48-2"})`
  height: 1px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.backgroundAlt}};
  width: 100%;
`;let i=n.ZP.span.withConfig({componentId:"sc-1fc5a48-3"})`
  font-variant-numeric: tabular-nums;
`;n.ZP.div.withConfig({componentId:"sc-1fc5a48-4"})`
  width: 90%;
`,n.ZP.div.withConfig({componentId:"sc-1fc5a48-5"})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  max-width: 100vw !important;
  height: 200vh;
  mix-blend-mode: color;
  background: ${e=>{let{backgroundColor:t}=e;return`radial-gradient(50% 50% at 50% 50%, ${t} 0%, rgba(255, 255, 255, 0) 100%)`}};
  transform: translateY(-176vh);
`,n.ZP.div.withConfig({componentId:"sc-1fc5a48-6"})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  max-width: 100vw !important;
  height: 200vh;
  mix-blend-mode: color;
  background: ${e=>{let{backgroundColor:t}=e;return`radial-gradient(50% 50% at 50% 50%, ${t} 0%, rgba(255, 255, 255, 0) 100%)`}};
  transform: translateY(-150vh);
`;let o=(0,n.ZP)(l.kCb).withConfig({componentId:"sc-1fc5a48-7"})`
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  padding: 0;
  gap: 1em;

  & > * {
    width: 100%;
  }

  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    flex-direction: row;
  }
`;(0,n.ZP)(l.rUS).withConfig({componentId:"sc-1fc5a48-8"})`
  width: 24px;
  height: 24px;
  margin-right: 8px;

  & :hover {
    opacity: 0.8;
  }
`;let s=n.ZP.div.withConfig({componentId:"sc-1fc5a48-9"})`
  margin-top: 20px;
  display: none;
  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    display: block;
  }
`},18485:function(e,t,r){"use strict";var n,l,i=r(85893),o=r(31258),s=r(58739),a=r(36945),d=r(18803),c=r(54272),u=r(27484),x=r.n(u),p=r(87752),h=r(27086),m=r(94203),f=r(5152),v=r.n(f),g=r(67294),j=r(61129),b=r(29872),y=r(67645),w=r(75824),C=r(99712),S=r(19521),T=r(49923),k=r(44373),_=r(13256),D=r(42278),P=r(88412),$=r(32521),L=r(80145),Z=r(14706),U=r(25425),I=r(89397),V=r(1445),z=r(54042);let E=v()(()=>Promise.all([r.e(2001),r.e(2969)]).then(r.bind(r,22969)),{loadableGenerated:{webpack:()=>[22969]},ssr:!1}),B=v()(()=>Promise.all([r.e(2810),r.e(6888),r.e(4714)]).then(r.bind(r,14714)),{loadableGenerated:{webpack:()=>[14714]},ssr:!1}),M=S.ZP.div.withConfig({componentId:"sc-9d211736-0"})`
  margin-top: 16px;
  display: grid;
  grid-template-columns: 260px 1fr;
  grid-gap: 1em;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;(n=l||(l={}))[n.TVL=0]="TVL",n[n.VOL=1]="VOL",n[n.PRICE=2]="PRICE";let O=Z.uv.WEEK;t.Z=e=>{var t,r,n,l,u,f;let{address:v}=e,{isXs:S,isSm:A}=(0,a.SL)();v=v.toLowerCase();let{isDark:R}=(0,m.ZP)();(0,g.useEffect)(()=>{window.scrollTo(0,0)},[]);let H=(0,U.Ws)(v),W=(0,U.CN)(v),Y=(0,U.R6)(null!==(n=null==W?void 0:W.filter((e,t)=>t<200))&&void 0!==n?n:[]),N=(0,U.Vq)(v),G=(0,U.ku)(v),K=(0,g.useMemo)(()=>{var e;return null!==(e=null==Y?void 0:Y.filter(I.Dw))&&void 0!==e?e:[]},[Y]),F=(0,g.useMemo)(()=>G?G.map(e=>({time:(0,V.g)(e.date),value:e.totalValueLockedUSD})):[],[G]),Q=(0,g.useMemo)(()=>G?G.map(e=>({time:(0,V.g)(e.date),value:e.volumeUSD})):[],[G]),[q,J]=(0,g.useState)(0),[X,ee]=(0,g.useState)(),[et,er]=(0,g.useState)(),[en]=(0,g.useState)(O),el=(0,U.Q4)(v,Z.Tb,en),ei=(0,g.useMemo)(()=>{if(el&&H&&el.length>0){let e=Object.assign([],el);return e.push({time:(0,I.T9)()/1e3,open:el[el.length-1].close,close:null==H?void 0:H.priceUSD,high:null==H?void 0:H.priceUSD,low:el[el.length-1].close}),e}},[el,H]),eo=(0,C.hb)(),es=(0,C.U1)(),ea=(0,C.RE)(),{chainId:ed}=(0,h.g)();return(0,i.jsx)(d.Z,{children:H?H.exists?(0,i.jsxs)(o.Tz7,{gap:"32px",children:[(0,i.jsxs)(o.Tz7,{gap:"32px",children:[(0,i.jsxs)(o.kCb,{justifyContent:"space-between",mb:"24px",flexDirection:["column","column","row"],children:[(0,i.jsxs)(s.O,{mb:"32px",children:[(0,i.jsx)(o.aBH,{to:`/${Z.ew}${eo}${es}`,children:(0,i.jsx)(o.xvT,{color:"primaryBright",children:"Info"})}),(0,i.jsx)(o.aBH,{to:`/${Z.ew}${eo}/tokens${es}`,children:(0,i.jsx)(o.xvT,{color:"primaryBright",children:"Tokens"})}),(0,i.jsxs)(o.kCb,{children:[(0,i.jsx)(o.xvT,{mr:"8px",color:"primaryBright",children:null!==(l=w.VG[v.toLowerCase()])&&void 0!==l?l:H.symbol}),(0,i.jsx)(o.xvT,{color:"primaryBright",children:`(${(0,y.Z)(v)})`})]})]}),(0,i.jsx)(o.kCb,{justifyContent:[null,null,"flex-end"],mt:["8px","8px",0],children:(0,i.jsxs)(o.NRJ,{mr:"8px",color:"primaryBright",href:(0,j.C)(v,"address",w.Pi[ea]),children:["View on ",w.nA[ea]]})})]}),(0,i.jsxs)(o.kCb,{justifyContent:"space-between",flexDirection:["column","column","column","row"],children:[(0,i.jsxs)(o.kCb,{flexDirection:"column",mb:["8px",null],children:[(0,i.jsxs)(o.kCb,{alignItems:"center",children:[(0,i.jsx)(T.X,{size:"32px",address:v,chainName:ea}),(0,i.jsx)(o.xvT,{color:"primaryBright",ml:"12px",lineHeight:"0.7",fontSize:S||A?"24px":"40px",id:"info-token-name-title",children:null!==(u=w.WK[v.toLowerCase()])&&void 0!==u?u:H.name}),(0,i.jsxs)(o.xvT,{ml:"12px",lineHeight:"1",fontSize:S||A?"14px":"20px",color:"primaryBright",children:["(",null!==(f=w.VG[v.toLowerCase()])&&void 0!==f?f:H.symbol,")"]})]}),(0,i.jsxs)(o.kCb,{mt:"8px",ml:"46px",alignItems:"center",children:[(0,i.jsxs)(o.xvT,{mr:"16px",fontSize:"24px",color:"primaryBright",children:["$",(0,b.d)(H.priceUSD,{notation:"standard"})]}),(0,i.jsx)(D.Z,{value:H.priceUSDChange,fontWeight:600})]})]}),(0,i.jsxs)(o.kCb,{children:[(0,i.jsx)(o.aBH,{to:`/add?currency=${v}&currency=&chain=${p.MS[ed]}`,children:(0,i.jsx)(o.zxk,{mr:"8px",variant:"text",height:"48px",px:"12px",children:(0,i.jsx)(o.xvT,{color:"primaryBright",children:"Add V3 Liquidity"})})}),(0,i.jsx)(o.aBH,{to:`/swap?outputCurrency=${v}&chain=${p.MS[w.Pi[ea]]}`,children:(0,i.jsx)(o.zxk,{height:"48px",variant:"primary",px:"12px",children:"Trade"})})]})]})]}),H.tvlUSD<=0&&(0,i.jsx)(o.v0C,{variant:"warning",children:(0,i.jsx)(o.YId,{fontSize:"16px",children:"TVL is currently too low to represent the data correctly"})}),(0,i.jsxs)(M,{children:[(0,i.jsx)(o.Zbd,{children:(0,i.jsxs)(o.xuv,{p:"24px",children:[(0,i.jsx)(o.xvT,{small:!0,color:"text",fontSize:"12px",textTransform:"uppercase",children:"TVL"}),(0,i.jsxs)(o.xvT,{fontSize:"24px",children:["$",(0,b.d)(H.tvlUSD)]}),(0,i.jsx)(D.Z,{value:H.tvlUSDChange}),(0,i.jsx)(o.xvT,{mt:"24px",color:"text",fontSize:"12px",textTransform:"uppercase",children:"Volume 24H"}),(0,i.jsxs)(o.xvT,{fontSize:"24px",textTransform:"uppercase",children:["$",(0,b.d)(H.volumeUSD)]}),(0,i.jsx)(D.Z,{value:H.volumeUSDChange}),(0,i.jsx)(o.xvT,{mt:"24px",color:"text",fontSize:"12px",textTransform:"uppercase",children:"Volume 7D"}),(0,i.jsxs)(o.xvT,{fontSize:"24px",children:["$",(0,b.d)(H.volumeUSDWeek)]}),(0,i.jsx)(o.xvT,{mt:"24px",color:"text",fontSize:"12px",textTransform:"uppercase",children:"Transactions 24H"}),(0,i.jsx)(o.xvT,{fontSize:"24px",children:(0,b.d)(H.txCount,{isInteger:!0})})]})}),(0,i.jsxs)(o.Zbd,{children:[(0,i.jsxs)(c._,{children:[(0,i.jsx)(c.o,{isActive:1===q,onClick:()=>J(1),children:(0,i.jsx)(o.xvT,{children:"Volume"})}),(0,i.jsx)(c.o,{isActive:0===q,onClick:()=>J(0),children:(0,i.jsx)(o.xvT,{children:"Liquidity"})}),(0,i.jsx)(c.o,{isActive:2===q,onClick:()=>J(2),children:(0,i.jsx)(o.xvT,{children:"Price"})})]}),(0,i.jsxs)(o.kCb,{flexDirection:"column",px:"24px",pt:"24px",children:[X?(0,z.Y)(X,2):1===q?(0,z.Y)(null===(t=Q[Q.length-1])||void 0===t?void 0:t.value):0===q?(0,z.Y)(null===(r=F[F.length-1])||void 0===r?void 0:r.value):(0,z.Y)(H.priceUSD,2),(0,i.jsx)(o.xvT,{small:!0,color:"text",children:et?(0,i.jsx)(L.Tw,{children:et}):(0,i.jsx)(L.Tw,{children:x().utc().format("MMM D, YYYY")})})]}),(0,i.jsx)(o.xuv,{height:"320px",children:0===q?(0,i.jsx)(B,{data:F,color:R?"#9A6AFF":"#7A6EAA",minHeight:340,value:X,label:et,setValue:ee,setLabel:er}):1===q?(0,i.jsx)(k.Z,{data:Q,color:"#1FC7D4",minHeight:340,value:X,label:et,setValue:ee,setLabel:er}):2===q?(0,i.jsx)(E,{data:ei,setValue:ee,setLabel:er}):null})]})]}),(0,i.jsx)(o.X6q,{color:"primaryBright",children:"Pairs"}),(0,i.jsx)(P.Z,{poolDatas:K}),(0,i.jsx)(o.X6q,{color:"primaryBright",children:"Transactions"}),N?(0,i.jsx)($.Z,{transactions:N}):(0,i.jsx)(_.Qw,{fill:!1})]}):(0,i.jsx)(o.Zbd,{children:(0,i.jsx)(o.xuv,{p:"16px",children:(0,i.jsx)(o.xvT,{children:"No pair has been created with this token yet. Create one"})})}):(0,i.jsx)(o.kCb,{mt:"80px",justifyContent:"center",children:(0,i.jsx)(o.$jN,{})})})}},5152:function(e,t,r){e.exports=r(61930)}}]);
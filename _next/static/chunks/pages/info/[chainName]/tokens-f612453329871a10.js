(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8213],{91910:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/info/[chainName]/tokens",function(){return t(84696)}])},84696:function(e,n,t){"use strict";t.r(n);var r=t(85893),i=t(34444),o=t(12166);let TokenPage=()=>(0,r.jsx)(i.Z,{});TokenPage.Layout=o.O,TokenPage.chains=[],n.default=TokenPage},9229:function(e,n,t){"use strict";var r=t(85893),i=t(87619),o=t(90755),l=t(19521);let s=l.ZP.div.withConfig({componentId:"sc-a86ca33-0"})`
  position: relative;
  margin-left: ${e=>{let{margin:n}=e;return n&&"4px"}};
  color: ${e=>{let{theme:n,link:t,color:r}=e;return t?n.colors.primary:null!=r?r:n.colors.text}};
  font-size: ${e=>{let{fontSize:n}=e;return null!=n?n:"inherit"}};

  :hover {
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    font-size: ${e=>{let{adjustSize:n}=e;return n&&"12px"}};
  }
`;n.Z=e=>{let{text:n,maxCharacters:t=20,margin:l=!1,adjustSize:c=!1,fontSize:a,color:u,link:f,...h}=e,{targetRef:d,tooltip:g,tooltipVisible:x}=(0,o.lL)((0,r.jsx)(i.xvT,{children:n}),{placement:"right-end",trigger:"click"});return n?n.length>t?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{margin:l,adjustSize:c,link:!!f,color:u,fontSize:a,...h,ref:d,children:` ${n.slice(0,t-1)}...`}),x&&g]}):(0,r.jsx)(s,{color:u,margin:l,adjustSize:c,link:!!f,fontSize:a,...h,children:n}):(0,r.jsx)("span",{})}},42278:function(e,n,t){"use strict";t.d(n,{Z:function(){return Percent}});var r=t(85893),i=t(87619),o=t(19521);let l=(0,o.ZP)(i.xvT).withConfig({componentId:"sc-9aa7bb34-0"})`
  font-size: ${e=>{let{fontSize:n}=e;return n}};
  font-weight: ${e=>{let{fontWeight:n}=e;return n}};
  color: ${e=>{let{theme:n,negative:t}=e;return t?n.colors.warning2:n.colors.success}};
`;function Percent(e){let{value:n,decimals:t=2,fontSize:o="16px",fontWeight:s=500,wrap:c=!1,simple:a=!1,...u}=e;if(null==n)return(0,r.jsx)(i.xvT,{fontWeight:s,fontSize:o,children:"-"});let f=parseFloat(n.toFixed(t));return a?(0,r.jsxs)(l,{...u,fontWeight:s,fontSize:o,negative:!1,children:[Math.abs(n).toFixed(t),"%"]}):(0,r.jsxs)(l,{...u,fontWeight:s,fontSize:o,negative:f<0,children:[c&&"(",f<0&&"↓",f>0&&"↑",Math.abs(n).toFixed(t),"%",c&&")"]})}}},function(e){e.O(0,[4158,2062,4444,9774,2888,179],function(){return e(e.s=91910)}),_N_E=e.O()}]);
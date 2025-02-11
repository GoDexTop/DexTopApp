"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2969],{22969:function(e,r,i){i.r(r),i.d(r,{default:function(){return components_CandleChart}});var t=i(85893);let n={white:"white",failure33:"#ED4B9E33",primary0f:"#FFAC260f",primary3D:"#FFAC263d",primaryBright:"#00d1ff",primaryDark:"#8e1552",success:"#00a050",success19:"#00a05019",warning:"#ffcd38",warning2:"#f92c00",warning2D:"#ED4B9E2D",warning33:"#ED4B9E33"},a={binance:"#F0B90B",overlay:"#452a7a",gold:"#FFC700",silver:"#B2B2B2",bronze:"#E7974D",yellow:"#D67E0A"},d={...n,...a,primaryDark2:"#b23a44",primaryDark:"#0098A1",text2:"#000000",primary:"#000000",failure:"#272727",secondary:"#000000",secondary80:"#4d4d4d80",background:"#00d1ff",backgroundDisabled:"#fff",backgroundAlt:"#f1f1f1ff",backgroundAlt2:"rgba(255, 255, 255, 0.23)",cardBorder:"transparent",contrast:"#191326",dropdown:"#F6F6F6",dropdownDeep:"#EEEEEE",invertedContrast:"#FFFFFF",input:"#eeeaf4",inputSecondary:"#d7caec",modal:"#f1f1f1ff",tertiary:"#00d1ff",text:"#2e2e2e",text99:"#2e2e2e99",textDisabled:"#6d6d6d",textSubtle:"#424242",disabled:"#E9EAEB",gradientPrimary:"linear-gradient(228.54deg, #1FC7D4 -13.69%, #7645D9 91.33%)",gradientBubblegum:"linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)",gradientInverseBubblegum:"linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",gradientCardHeader:"linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",gradientBlue:"linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",gradientViolet:"linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",gradientVioletAlt:"linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",gradientGold:"linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",gradientBold:"linear-gradient(#53DEE9, #7645D9)"},l={...n,...a,primaryDark2:"#b23a44",text2:"#000000",primary:"#ffffff",failure:"#cacaca",secondary:"#fff",secondary80:"#dfdfdf80",background:"#17274b",backgroundDisabled:"#fff",backgroundAlt:"#12141688",backgroundAlt2:"rgba(41, 41, 41, 0.7)",cardBorder:"transparent",contrast:"#FFFFFF",dropdown:"#3a3a3a",dropdownDeep:"#353535",invertedContrast:"#162d27",input:"#10122dd6",inputSecondary:"#ffffff11",modal:"#121416",primaryDark:"#0098A1",tertiary:"#17274b",text:"#ffffff",text99:"rgba(20, 20, 20, 0.8)",textDisabled:"#929292",textSubtle:"#ffffff",disabled:"#524B63",gradientPrimary:"linear-gradient(228.54deg, #1FC7D4 -13.69%, #9A6AFF 91.33%)",gradientBubblegum:"linear-gradient(90deg, #303030 0%, #414141 50%, #303030 100%)",gradientInverseBubblegum:"linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",gradientCardHeader:"linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",gradientBlue:"linear-gradient(180deg, #00707F 0%, #19778C 100%)",gradientViolet:"linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",gradientVioletAlt:"linear-gradient(180deg, #434575 0%, #66578D 100%)",gradientGold:"linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",gradientBold:"linear-gradient(#53DEE9, #9A6AFF)"};var o=i(27484),s=i.n(o),c=i(70178),f=i.n(c),u=i(94203),g=i(62001),F=i(67294),b=i(19521),p=i(2003),m=i(39511);s().extend(f());let D=(0,b.ZP)(p.ZP).withConfig({componentId:"sc-e7b5a9fc-0"})`
  width: 100%;
  padding: 1rem;
  display: flex;
  background-color: transparent;
  flex-direction: column;
  > * {
    font-size: 1rem;
  }
  > #candle-chart > div {
    display: none;
  }
  > #candle-chart > div:last-child {
    display: block;
  }
`;var components_CandleChart=e=>{let{data:r,color:i="#1FC7D4",setValue:a,setLabel:o,topLeft:c,topRight:f,bottomLeft:b,bottomRight:p,height:E=300,minHeight:v=300,...C}=e,{theme:y}=(0,u.ZP)(),h=y.colors.tertiary,k=(0,F.useRef)(null),[B,w]=(0,F.useState)(),A=(0,F.useCallback)(()=>{var e;B&&(null==k?void 0:null===(e=k.current)||void 0===e?void 0:e.parentElement)&&(B.resize(k.current.parentElement.clientWidth-32,E),B.timeScale().fitContent(),B.timeScale().scrollToPosition(0,!1))},[B,k,E]);return(0,F.useEffect)(()=>(window.addEventListener("resize",A),()=>window.removeEventListener("resize",A)),[!0,k,A]),(0,F.useEffect)(()=>{var e;if(!B&&r&&(null==r?void 0:r.length)>0&&(null==k?void 0:null===(e=k.current)||void 0===e?void 0:e.parentElement)){let e=(0,g.C2)(k.current,{height:E,width:k.current.parentElement.clientWidth-32,layout:{background:{type:g.Mr.Solid,color:"transparent"},textColor:"#565A69",fontFamily:"Inter var",fontSize:14},rightPriceScale:{scaleMargins:{top:.1,bottom:.1},borderVisible:!1},timeScale:{borderVisible:!1,secondsVisible:!0,tickMarkFormatter:e=>s().unix(e).format("MM/DD h:mm A")},watermark:{visible:!1},grid:{horzLines:{visible:!1},vertLines:{visible:!1}},crosshair:{horzLine:{visible:!1,labelVisible:!1},mode:1,vertLine:{visible:!0,labelVisible:!1,style:3,width:1,color:"#505050",labelBackgroundColor:i}}});e.timeScale().fitContent(),w(e)}},[i,B,r,E,a,h,y]),(0,F.useEffect)(()=>{if(B&&r&&(null==r?void 0:r.length)>0){let e=B.addCandlestickSeries({upColor:n.success,downColor:n.failure33,borderDownColor:n.failure33,borderUpColor:n.success,wickDownColor:n.failure33,wickUpColor:n.success});e.setData(r),e.applyOptions({priceFormat:{type:"price",precision:7,minMove:1e-7}}),B.applyOptions({layout:{textColor:y.isDark?l.textSubtle:d.textSubtle}}),B.subscribeCrosshairMove(r=>{if((null==k?void 0:k.current)&&(void 0===r||void 0===r.time||r&&r.point&&r.point.x<0||r&&r.point&&r.point.x>k.current.clientWidth||r&&r.point&&r.point.y<0||r&&r.point&&r.point.y>E))a&&a(void 0),o&&o(void 0);else if(e&&r){let i=r.time,t=`${s().unix(i).utc().format("MMM D, YYYY h:mm A")} (UTC)`,n=r.seriesData.get(e);a&&a(null==n?void 0:n.open),o&&o(t)}})}},[B,i,r,E,a,o,y.isDark]),(0,t.jsxs)(D,{minHeight:v,children:[(0,t.jsxs)(m.m0,{children:[null!=c?c:null,null!=f?f:null]}),(0,t.jsx)("div",{ref:k,id:"candle-chart",...C}),(0,t.jsxs)(m.m0,{children:[null!=b?b:null,null!=p?p:null]})]})}}}]);
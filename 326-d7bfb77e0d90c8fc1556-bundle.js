"use strict";(self.webpackChunkrestaurant_management_dashboard=self.webpackChunkrestaurant_management_dashboard||[]).push([[326],{8326:(e,t,r)=>{r.r(t),r.d(t,{default:()=>te});var n=r(7294),a=r(5998),u=r(7919),o=r(4687),c=r.n(o),s=r(6936),i=function(e){return e.report.date},l=function(e){var t=e.report;return{error:t.error,loading:t.loading,data:t.data}},f=r(5861),d=r(885),p=r(3144),m=r(5671),v=r(136),b=r(4575),g=r(1120);var y=function(e){(0,v.Z)(a,e);var t,r,n=(t=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,g.Z)(t);if(r){var a=(0,g.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,b.Z)(this,e)});function a(){return(0,m.Z)(this,a),n.apply(this,arguments)}return(0,p.Z)(a)}((0,r(2407).Z)(TypeError)),h=function(e,t){return new Promise((function(r,n){if(null!=t&&t.aborted)n(new y);else{var a=!1,u=setTimeout((function(){a=!0,r()}),e);null==t||t.addEventListener("abort",(function(){a||(clearTimeout(u),n(new y))}))}}))},E=function(e){var t=(0,d.Z)(e.sections[0].elements,4),r=t[0],n=t[1],a=t[2],u=t[3],o=a.reduce((function(e,t){return e[(0,d.Z)(t,1)[0]]=t,e}),{});return{dailyPayments:r.map((function(e){var t=(0,d.Z)(e,2);return{total:t[0]/1e3,name:t[1]}})),dailyCategories:n.map((function(e){var t=(0,d.Z)(e,2);return{total:t[0]/1e3,name:t[1]}})),hourlySales:Array.from({length:24},(function(e,t){var r=o[t];if(!r)return{count:0,total:0};var n=(0,d.Z)(r,3);return{count:n[1],total:n[2]/1e3}})),dailyWaiters:u.map((function(e){var t=(0,d.Z)(e,3),r=t[0],n=t[1];return{name:r,total:t[2]/1e3,count:n}}))}},x=function(){var e=(0,f.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(225).then(r.t.bind(r,2225,19));case 2:return n=e.sent,e.next=5,h(1e3,t);case 5:return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();const w=function(e,t){return(0,f.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:return r=e.sent,e.abrupt("return",E(r));case 4:case"end":return e.stop()}}),e)})))()};var Z=r(4942);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,Z.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var R={SelectDate:"SELECT_REPORT_DATE",Request:"REQUEST_REPORT",Receive:"RECEIVE_REPORT",Failure:"FAILURE_REPORT"},C=Object.keys(R).reduce((function(e,t){var r=R[t];return e[t]=function(e){return O(O({},e||null),{},{type:r})},e}),{}),P=c().mark(S),j=c().mark(D),L=c().mark(T);function S(){var e,t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=function(){var t,r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new AbortController,e.prev=1,e.next=4,(0,s.Ys)(i);case 4:return r=e.sent,e.next=7,(0,s.RE)(w,r,t.signal);case 7:return n=e.sent,e.next=10,(0,s.gz)(C.Receive({data:n}));case 10:e.next=21;break;case 12:return e.prev=12,e.t0=e.catch(1),e.next=16,(0,s.By)();case 16:if(!e.sent){e.next=19;break}return t.abort(),e.abrupt("return");case 19:return e.next=21,(0,s.gz)(C.Failure({error:e.t0}));case 21:case"end":return e.stop()}}),e,null,[[1,12]])},e=c().mark(t),n.next=4,(0,s.rM)(t);case 4:r=n.sent;case 5:return n.next=8,(0,s.qn)(R.Request);case 8:return n.next=10,(0,s.al)(r);case 10:return n.next=12,(0,s.rM)(t);case 12:r=n.sent,n.next=5;break;case 15:case"end":return n.stop()}}),P)}function D(){var e,t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,(0,s.Ys)(i);case 3:return e=r.sent,r.next=6,(0,s.qn)(R.SelectDate);case 6:return r.next=8,(0,s.Ys)(i);case 8:if(t=r.sent,e===t){r.next=12;break}return r.next=12,(0,s.gz)(C.Request());case 12:r.next=0;break;case 14:case"end":return r.stop()}}),j)}function T(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.rM)(S);case 2:return e.next=4,(0,s.rM)(D);case 4:case"end":return e.stop()}}),L)}var _,A=r(5705),q=r(168),F=r(932),W=F.Z.div(_||(_=(0,q.Z)(["\n  label: DashboardGrid;\n  display: grid;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  grid-template-columns: 1fr;\n\n  @media (min-width: 640px) {\n    grid-template-columns: 1fr 1fr;\n  }\n"]))),$=r(3240),B=r(2530),M=r(870);function z(e){var t=e.title,r=e.children;return n.createElement($.Z,{sx:{height:"22.5rem"}},n.createElement(B.Z,null,n.createElement(M.Z,{variant:"h5",color:"text.secondary"},t),r))}var Q,Y=r(5512),I=r(5376),U=["#6495FB","#62DAAC"],G=F.Z.div(Q||(Q=(0,q.Z)(["\n  height: 260px;\n"])));function V(e){var t=e.data;(0,n.useLayoutEffect)((function(){Y.kL.register(Y.qi,Y.u,Y.De)}),[]);var r=t.slice(0,U.length),a=t.map((function(e){return e.name})),u=t.map((function(e){return e.total})),o=U.slice(0,r.length);return n.createElement(z,{title:"Payments"},n.createElement(G,null,n.createElement(I.by,{options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom"}}},data:{labels:a,datasets:[{data:u,backgroundColor:o,borderColor:o,borderWidth:1}]}})))}var H="rgba(100, 149, 251, 0.5)";function J(e){var t=e.data;(0,n.useLayoutEffect)((function(){Y.kL.register(Y.uw,Y.f$,Y.ZL,Y.u)}),[]);var r=t.map((function(e){return e.name})),a=t.map((function(e){return e.total}));return n.createElement(z,{title:"Sales per category"},n.createElement(I.$Q,{options:{indexAxis:"y",elements:{bar:{borderWidth:2}},responsive:!0,plugins:{legend:{display:!1}}},data:{labels:r,datasets:[{data:a,backgroundColor:H,borderColor:H}]}}))}var K="#5C90F6";function N(e){var t=e.data,r=e.date;(0,n.useLayoutEffect)((function(){Y.kL.register(Y.uw,Y.f$,Y.od,Y.jn,Y.u,Y.De)}),[]);var a=t.map((function(e,t){return t})),u=t.map((function(e){return e.total}));return n.createElement(z,{title:"Sales per hour"},n.createElement(I.x1,{options:{responsive:!0,plugins:{legend:{position:"bottom"}}},data:{labels:a,datasets:[{label:r,data:u,borderColor:K,backgroundColor:K}]}}))}var X="rgba(100, 149, 251, 0.5)";function ee(e){var t=e.data;(0,n.useLayoutEffect)((function(){Y.kL.register(Y.uw,Y.f$,Y.ZL,Y.u)}),[]);var r=t.map((function(e){return e.name})),a=t.map((function(e){return e.total}));return n.createElement(z,{title:"Top waiters"},n.createElement(I.$Q,{options:{indexAxis:"y",elements:{bar:{borderWidth:2}},responsive:!0,plugins:{legend:{display:!1}}},data:{labels:r,datasets:[{data:a,backgroundColor:X,borderColor:X}]}}))}function te(){var e=(0,u._7)().runSagaExclusive;(0,n.useEffect)((function(){e(T)}),[]);var t=(0,a.v9)(l),r=t.error,o=t.data,c=(0,a.v9)(i);return r?n.createElement("p",null,"Something went wrong..."):o?n.createElement(W,null,n.createElement(ee,{data:o.dailyWaiters}),n.createElement(N,{data:o.hourlySales,date:c}),n.createElement(V,{data:o.dailyPayments}),n.createElement(J,{data:o.dailyCategories})):n.createElement(A.Z,null)}}}]);
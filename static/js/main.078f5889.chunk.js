(this.webpackJsonpalaska=this.webpackJsonpalaska||[]).push([[0],{148:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(5),l=a.n(r),i=(a(94),a(95),a(48)),c=a(86),f=a(49),s=a(151),u=a(60),d=a(152),g=a(153),h=a(154),p=a(155),m=a(156),y=a(36),v=a.n(y),E=["#8FE9FF","#87EAEF","#FFC9E3","#A7C2FF","#FFA1E3","#FFE269","#BFCFEE","#FFA0C5","#D5FF86"],F=["#7DA8FF","#44E6C1","#FF68A7","#7F86FF","#AE6CFF","#FF5A34","#5D7092","#FF6565","#6BFFDE"],C=["#CFF6FF","#BCFCFF","#FFECF5","#ECFBFF","#EAD9FF","#FFF8DA","#DCE2EE","#FFE7F0","#EEFFCE"],S=["#CADBFF","#A9FFEB","#FFC4DD","#CACDFF","#FFD4F2","#FFD3C9","#EBF2FF","#FFCBCB","#CAFFF3"],k=function(){var e,t=o.a.createRef(),a=!1,r=[],l=[],i=new Map,c=[],f=[],s=[],u=[],d=new Map,g=new Map,h=0,p=0,m=0,y=0,k=[],b=new Map;E.forEach((function(e,t){k.push("l(0) 0:"+e+" 1:"+F[t]),b.set(k[t],"l(0) 0:"+C[t]+" 1:"+S[t])}));var M=null,x={type:"force",nodeSize:function(e){return e.size/2+5},nodeStrength:2500,collideStrength:.8,alphaDecay:.01,preventOverlap:!0,onTick:function(){var e=M.getNodes(),t=M.get("height"),a=M.get("width");e.forEach((function(e){var n=e.getModel();n.x>a-10?n.x=a-10:n.x<10&&(n.x=10),n.y>t-10?n.y=t-10:n.y<10&&(n.y=10)}))}};function I(e){var t=e.item.get("model");t.fx=e.x,t.fy=e.y}v.a.registerBehavior("double-finger-drag-canvas",{getEvents:function(){return{wheel:"onWheel"}},onWheel:function(e){if(e.ctrlKey){var t=M.get("canvas").getPointByClient(e.clientX,e.clientY),a=M.getZoom();e.wheelDelta>0?a+=.05*a:a-=.05*a,M.zoomTo(a,{x:t.x,y:t.y})}else{!function(e,t){var a=e,n=t,o=M.get("group").getBBox(),r=M.getCanvasByPoint(o.minX,o.minY),l=M.getCanvasByPoint(o.maxX,o.maxY);e<0&&r.x-e>m&&(a=0);e>0&&l.x-e<h-m&&(a=0);t<0&&r.y-t>y&&(n=0);t>0&&l.y-t<p-y&&(n=0);M.translate(-a,-n)}(e.deltaX||e.movementX,e.deltaY||e.movementY)}e.preventDefault()}}),v.a.registerNode("bubble",{drawShape:function(e,t){var a=this,n=e.size/2,o=[["M",-n,0],["C",-n,n/2,-n/2,n,0,n],["C",n/2,n,n,n/2,n,0],["C",n,-n/2,n/2,-n,0,-n],["C",-n/2,-n,-n,-n/2,-n,0],["Z"]],r=t.addShape("path",{attrs:{x:0,y:0,path:o,fill:e.color||"steelblue"},name:"path-shape"}),l=t.addShape("path",{attrs:{x:0,y:0,path:o,opacity:.25,fill:e.color||"steelblue",shadowColor:e.color.split(" ")[2].substr(2),shadowBlur:40,shadowOffsetX:0,shadowOffsetY:30},name:"mask-shape"}),i=[],c=[];a.changeDirections(10,i);for(var f=0;f<10;f++){var s=n+i[f]*(Math.random()*n/1e3);c[f]<.97*n?c[f]=.97*n:c[f]>1.03*n&&(c[f]=1.03*n),c.push(s)}r.animate((function(){return{path:a.getBubblePath(n,10,i,c)}}),{repeat:!0,duration:1e4});var u=[],d=[];a.changeDirections(10,u);for(var g=0;g<10;g++){var h=n+u[g]*(Math.random()*n/1e3);d[g]<.97*n?d[g]=.97*n:d[g]>1.03*n&&(d[g]=1.03*n),d.push(h)}return l.animate((function(){return{path:a.getBubblePath(n,10,u,d)}}),{repeat:!0,duration:1e4}),r},changeDirections:function(e,t){for(var a=0;a<e;a++)if(t[a])t[a]=-1*t[a];else{var n=Math.random()>.5?1:-1;t.push(n)}return t},getBubblePath:function(e,t,a,n){for(var o=[],r=2*t,l=2*Math.PI/t,i=0,c=[],f=[],s=0;s<t;s++){var u=.001*Math.random();n[s]=n[s]+a[s]*u*e,n[s]<.97*e?(n[s]=.97*e,a[s]=-1*a[s]):n[s]>1.03*e&&(n[s]=1.03*e,a[s]=-1*a[s]);var d=n[s]*Math.cos(i),g=n[s]*Math.sin(i);c.push({x:d,y:g});for(var h=0;h<2;h++){var p=l/3,m=n[s]/Math.cos(p),y=0===h?-1:1,v=m*Math.cos(i+y*p),E=m*Math.sin(i+y*p);f.push({x:v,y:E})}i+=l}o.push(["M",c[0].x,c[0].y]);for(var F=1;F<t;F++)o.push(["C",f[2*F-1].x,f[2*F-1].y,f[2*F].x,f[2*F].y,c[F].x,c[F].y]);return o.push(["C",f[r-1].x,f[r-1].y,f[0].x,f[0].y,c[0].x,c[0].y]),o.push(["Z"]),o},setState:function(e,t,a){var n=a.get("keyShape");if("dark"===e)if(t)if("#fff"!==n.attr("fill")){n.oriFill=n.attr("fill");var o=b.get(n.attr("fill"));n.attr("fill",o)}else n.attr("opacity",.2);else"#fff"!==n.attr("fill")?n.attr("fill",n.oriFill||n.attr("fill")):n.attr("opacity",1)}},"single-node"),v.a.registerNode("animate-circle",{setState:function(e,t,a){var n=a.get("keyShape"),o=n.get("parent").get("children")[1];if("disappearing"===e&&t)n.animate((function(e){return{opacity:1-e,r:n.attr("r")*(1-e)}}),{duration:200}),o.animate((function(e){return{opacity:1-e}}),{duration:500});else if("appearing"===e&&t){var r=a.getModel().size/2;n.animate((function(e){return{opacity:e,r:r*e,fill:n.attr("fill")}}),{duration:300}),o.animate({onFrame:function(e){return{opacity:e}}},{duration:300})}else if("dark"===e)if(t)if("#fff"!==n.attr("fill")){n.oriFill=n.attr("fill");var l=b.get(n.attr("fill"));n.attr("fill",l)}else n.attr("opacity",.2),o.attr("fill","#A3B1BF");else"#fff"!==n.attr("fill")?n.attr("fill",n.oriFill||n.attr("fill")):(n.attr("opacity",1),o.attr("fill","#697B8C"))}},"circle"),v.a.registerEdge("animate-line",{drawShape:function(e,t){var a=this.getShapeStyle(e);return a=Object.assign(a,{opacity:0,strokeOpacity:0}),t.addShape("path",{attrs:a,name:"path-shape"})},afterDraw:function(e,t){t.get("children")[0].animate((function(t){var a=t*e.style.opacity,n=t*e.style.strokeOpacity;return{opacity:t||a,strokeOpacity:t||n}}),{duration:300})},setState:function(e,t,a){var n=a.get("keyShape");"disappearing"===e&&t?n.animate((function(e){return{opacity:1-e,strokeOpacity:1-e}}),{duration:200}):"dark"===e&&(t?n.attr("opacity",.2):n.attr("opacity",1))}},"line");return Object(n.useEffect)((function(){var n,o;h=null===(n=t.current)||void 0===n?void 0:n.scrollWidth,p=(null===(o=t.current)||void 0===o?void 0:o.scrollHeight)||500,m=h,y=p,M||((M=new v.a.Graph({container:t.current,width:h,height:p,linkCenter:!0,layout:x,modes:{default:["drag-canvas"]},defaultNode:{type:"circle",size:95,labelCfg:{position:"center",style:{fill:"white",fontStyle:"bold"}}},defaultEdge:{color:"#888",type:"animate-line"}})).get("canvas").set("localRefresh",!1),M.on("node:dragstart",(function(e){M.layout(),I(e)})),M.on("node:drag",(function(e){I(e)})),M.on("node:dragend",(function(e){e.item.get("model").fx=null,e.item.get("model").fy=null})),M.on("node:mouseenter",(function(e){var t=e.item,n=t.getModel();if(0!==n.level){a=!0,M.setAutoPaint(!1);var o=M.getNodes(),r=M.getEdges();o.forEach((function(e){M.setItemState(e,"dark",!0),e.getModel().light=!1})),M.setItemState(t,"dark",!1),n.light=!0;var l=n.tags,i=new Map,c=0,f="";n.isLeaf||0===n.level||(f=n.tag,o.forEach((function(e){var t=e.getModel();t.isLeaf&&t.tags.forEach((function(a){a.split("-")[1]===f&&(M.setItemState(e,"dark",!1),t.light=!0)}))}))),l.forEach((function(e){var t=e.split("-");i.set(t[0],c),c++,t[1]&&(i.set(t[1],c),c++)})),o.forEach((function(e){var t=e.getModel();void 0!==i.get(t.tag)&&(M.setItemState(e,"dark",!1),t.light=!0)})),r.forEach((function(e){var t=e.getSource().getModel(),a=e.getTarget().getModel();t.light&&a.light?M.setItemState(e,"dark",!1):M.setItemState(e,"dark",!0)})),M.paint(),M.setAutoPaint(!0)}})),M.on("node:mouseleave",(function(){if(a){var e=M.getNodes(),t=M.getEdges();a=!1,e.forEach((function(e){M.setItemState(e,"dark",!1)})),t.forEach((function(e){M.setItemState(e,"dark",!1)}))}})),M.on("node:click",(function(t){r=[],l=[];var a=t.item.getModel();if((a.isLeaf||0===a.level)&&0===a.level){var n=M.get("layoutController");if(n.layoutMethod.forceSimulation.stop(),c.forEach((function(e){var t=M.findById(e.id);M.setItemState(t,"dark",!1),e.x<.5*h?e.x=300:e.x=h-300})),a.x=h/2,a.y=p/2,l.length&&l.forEach((function(e){var t=M.findById(e.id);t&&M.setItemState(t,"disappearing",!0)})),r.forEach((function(e){var t=M.findById(e.id);t&&M.setItemState(t,"disappearing",!0)})),M.positionsAnimate(),r=[],l=[],e&&e.id===a.id)e=void 0,n.layoutCfg.nodeStrength=2500,n.layoutCfg.collideStrength=.8,n.layoutCfg.alphaDecay=.01;else{e=a;var o=M.get("layoutController");o.layoutCfg.nodeStrength=function(){return-80},o.layoutCfg.collideStrength=.2,o.layoutCfg.linkDistance=function(e){if(0!==e.source.level)return 120;return 250},o.layoutCfg.edgeStrength=function(){return 2};var u=a.tag,m=[];i=new Map,s.forEach((function(e){if(e.tags){for(var t=e.tags,n=t.length,o=!1,c=[],f=0;f<n;f++){var s=t[f].split("-");s[0]===u&&(o=!0),c.push(d.get(s[0]))}if(o){var h=2*Math.random()*Math.PI;if(e.x=a.x+Math.cos(h)*a.size/2+10,e.y=a.y+Math.sin(h)*a.size/2+10,e.style||(e.style={}),e.style.lineWidth=0,e.style.opacity=1,e.isLeaf){e.shape="animate-circle";var p="l(0)",y=c.length;c.forEach((function(e,t){var a=e.color.split(" ")[1].substr(2);p+=" ".concat(t/(y-1),":").concat(a)})),1===y&&(p=a.color.split(" ")[1].substr(2)),e.color=p,e.style.fill=p,e.style.fill="#fff",e.style.lineWidth=1,e.size=60,e.labelCfg={style:{fontSize:11,lineHeight:19,fill:"#697B8C"},position:"center"}}else 0!==e.level&&(e.shape="circle",e.size=95,e.style||(e.style={}),e.color=a.color,e.style.fill=a.color,e.labelCfg={style:{fill:"#fff",fontSize:14},position:"center"});r.push(e),i.set(e.id,e);var v="".concat(a.id,"-").concat(e.id),E=g.get(v);E&&(E.color=a.color,l.push(E)),t.forEach((function(e){var t=e.split("-");t[0]!==u&&m.push(t[0]),t[1]&&m.push(t[1])}))}}})),s.forEach((function(e){for(var t=m.length,a=0;a<t;a++)if(e.tag===m[a]&&void 0===i.get(e.id))return r.push(e),void i.set(e.id,e)})),r.forEach((function(e,t){var n=e.level;r.forEach((function(o,r){if(!(r<=t)){var i,c=o.level;i=n<c?"".concat(e.id,"-").concat(o.id):"".concat(o.id,"-").concat(e.id);var f=a.color;e.isLeaf?0===o.level&&o.tag!==a.tag?f="#DFE5EB":o.isLeaf||o.tags[0]===a.tag||(f="#DFE5EB"):o.isLeaf&&(0===e.level&&e.tag!==a.tag?f="#DFE5EB":e.isLeaf||e.tags[0]===a.tag||(f="#DFE5EB"));var s=g.get(i);s&&(s.color=f,l.push(s))}}))}))}setTimeout((function(){M.changeData({nodes:c.concat(r),edges:f.concat(l)});var e=M.getNodes();M.getEdges().forEach((function(e){M.clearItemStates(e)})),e.forEach((function(e){M.clearItemStates(e),M.setItemState(e,"appearing",!0)}))}),400)}})),M.on("canvas:click",(function(){e=void 0,M.get("layoutController").layoutMethod.forceSimulation.stop();var t=M.getNodes(),n=M.getEdges();a?(a=!1,t.forEach((function(e){M.setItemState(e,"dark",!1)})),n.forEach((function(e){M.setItemState(e,"dark",!1)}))):(t.forEach((function(e){0===e.getModel().level?M.setItemState(e,"dark",!1):M.setItemState(e,"disappearing",!0)})),n.forEach((function(e){M.setItemState(e,"disappearing",!0)})),r=[],l=[],setTimeout((function(){var e=M.get("layoutController");e.layoutCfg.nodeStrength=2500,e.layoutCfg.collideStrength=.8,e.layoutCfg.alphaDecay=.01,M.changeData({nodes:c,edges:f})}),400))})),fetch("https://gw.alipayobjects.com/os/bmw-prod/fc6e64fc-be94-40fb-b9e2-2d13dd414f38.json").then((function(e){return e.json()})).then((function(e){!function(e){var t=M.get("layoutController");t.layoutCfg.nodeStrength=2500,t.layoutCfg.collideStrength=.8,t.layoutCfg.alphaDecay=.01,s=e.nodes,u=e.edges,c=[],f=[],d=new Map,g=new Map,s.forEach((function(e){if(0===e.level&&(e.color=k[c.length%k.length],e.style={fill:k[c.length%k.length],lineWidth:0},e.labelCfg={style:{fontSize:25,fill:"#fff",fontWeight:300}},e.x=800*Math.random(),e.y=800*Math.random(),c.push(e)),e.isLeaf)e.label=e.name;else{var t=e.childrenNum?"\n(".concat(e.childrenNum,")"):"";e.label="".concat(e.name).concat(t)}d.set(e.id,e)})),function(e,t,a){var n=9999999999,o=-9999999999;e.forEach((function(e){n=e[t]<n?e[t]:n,o=e[t]>o?e[t]:o}));var r=o-n,l=a[1]-a[0];e.forEach((function(e){e.size=(e[t]-n)/r*l+a[0]}))}(c,"childrenNum",[120,180]),s.forEach((function(e){if(0!==e.level&&!e.isLeaf){var t=d.get(e.tags[0]);e.color=t.color,e.style={fill:t.color}}})),u.forEach((function(e){e.id="".concat(e.source,"-").concat(e.target),e.style={lineWidth:.5,opacity:1,strokeOpacity:1},g.set(e.id,e)})),M.data({nodes:c,edges:f}),M.render()}(e)})))}),[l,r,i,e,M,p,h,a,t,g,x,d,s,f,c]),o.a.createElement("div",{ref:t})};function b(){var e=Object(i.a)(["\n    background: #fff;\n    padding: 0;\n"]);return b=function(){return e},e}function M(){var e=Object(i.a)(["\n    height: 32px;\n    background: rgba(255, 255, 255, 0.2);\n    margin: 16px;\n"]);return M=function(){return e},e}function x(){var e=Object(i.a)(["\n    min-height: 100vh;\n"]);return x=function(){return e},e}var I=s.a.Header,B=s.a.Content,w=s.a.Footer,D=s.a.Sider,A=u.a.SubMenu,O=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],r=t[1];return o.a.createElement(z,null,o.a.createElement(D,{collapsible:!0,collapsed:a,onCollapse:function(e){console.log("collapsed:",e),r(e)}},o.a.createElement(j,null),o.a.createElement(u.a,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline"},o.a.createElement(u.a.Item,{key:"1",icon:o.a.createElement(g.a,null)},"\u5b58\u50a8"),o.a.createElement(u.a.Item,{key:"2",icon:o.a.createElement(h.a,null)},"\u68c0\u7d22"),o.a.createElement(A,{key:"sub1",icon:o.a.createElement(p.a,null),title:"\u8d44\u4ea7"},o.a.createElement(u.a.Item,{key:"3"},"\u603b\u989d"),o.a.createElement(u.a.Item,{key:"4"},"\u6536\u5165"),o.a.createElement(u.a.Item,{key:"5"},"\u652f\u51fa")),o.a.createElement(A,{key:"sub2",icon:o.a.createElement(m.a,null),title:"\u6211\u7684"},o.a.createElement(u.a.Item,{key:"6"},"\u8d26\u53f7"),o.a.createElement(u.a.Item,{key:"8"},"\u5bc6\u7801")))),o.a.createElement(s.a,null,o.a.createElement(N,null),o.a.createElement(B,{style:{margin:"0 16px"}},o.a.createElement(d.a,{style:{margin:"16px 0"}},o.a.createElement(d.a.Item,null,"User"),o.a.createElement(d.a.Item,null,"Bill"),o.a.createElement(d.a.Item,null,"Apple")),o.a.createElement("div",{style:{padding:24,minHeight:360,background:"#fff"}},"Bill is a cat.",o.a.createElement(k,null))),o.a.createElement(w,{style:{textAlign:"center"}},"Alaka \xa92020 Created by Damon HKC")))},z=Object(f.a)(s.a)(x()),j=f.a.div(M()),N=Object(f.a)(I)(b());var L=function(){return o.a.createElement(O,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},89:function(e,t,a){e.exports=a(148)},94:function(e,t,a){},95:function(e,t,a){}},[[89,1,2]]]);
//# sourceMappingURL=main.078f5889.chunk.js.map
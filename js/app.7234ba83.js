(function(e){function t(t){for(var r,u,i=t[0],c=t[1],l=t[2],s=0,p=[];s<i.length;s++)u=i[s],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={3:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{1:"949744c8",2:"1c6abf3c",4:"c5b9589f"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(e);var l=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var f=l;a.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"get_vote_data",(function(){return y}));var o={};n.r(o),n.d(o,"update_vote_data",(function(){return w}));n("e6cf"),n("5319"),n("7d6e"),n("e54f"),n("985d"),n("31cd");var a=n("2b0e"),u=n("1f91"),i=n("42d2"),c=n("b05d");a["a"].use(c["a"],{config:{},lang:u["a"],iconSet:i["a"]});var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},s=[],f={name:"App"},p=f,d=n("2877"),h=Object(d["a"])(p,l,s,!1,null,null,null),v=h.exports,b=n("2f62"),m=function(){return{vote_data:{}}};function y(e){return t=>e.vote_data[t]}function w(e,t){e.vote_data[t.key]=t.value}var g=n("7fd6"),P={namespaced:!0,state:m,getters:r,mutations:o,actions:g};a["a"].use(b["a"]);const _=new b["a"].Store({modules:{votedata:P},strict:!1});var j=_,O=n("8c4f");n("ddb0");const x=[{path:"/",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"8b24"))}]},{path:"/vote_detail",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"8b24"))}]},{path:"/vote_rank",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"8b03"))}]}];var S=x;a["a"].use(O["a"]);var k=function(){const e=new O["a"]({scrollBehavior:()=>({x:0,y:0}),routes:S,mode:"hash",base:""});return e},E=async function(){const e="function"===typeof j?await j({Vue:a["a"]}):j,t="function"===typeof k?await k({Vue:a["a"],store:e}):k;e.$router=t;const n={router:t,store:e,render:e=>e(v),el:"#q-app"};return{app:n,store:e,router:t}},M=n("bc3a"),T=n.n(M);a["a"].prototype.$axios=T.a;const q="";async function C(){const{app:e,store:t,router:n}=await E();let r=!1;const o=e=>{r=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},u=window.location.href.replace(window.location.origin,""),i=[void 0];for(let l=0;!1===r&&l<i.length;l++)if("function"===typeof i[l])try{await i[l]({app:e,router:n,store:t,Vue:a["a"],ssrContext:null,redirect:o,urlPath:u,publicPath:q})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==r&&new a["a"](e)}C()},"31cd":function(e,t,n){},"7fd6":function(e,t){}});
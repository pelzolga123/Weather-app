!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){const n=(e,t)=>{const n=`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c4f08572f7ad079daf0e57e8f9da343e/${e},${t}`,r=document.getElementById("result");fetch(n).then(e=>e.json()).then(e=>{r.innerHTML=e.currently.temperature,(e=>{const t=new Skycons({color:"orange"});console.log(e),t.set("icon",e),t.play()})(e.currently.icon)}).catch(e=>(displayErr(),e))};(()=>{const e=document.getElementById("getWeather"),t=document.getElementById("city");e.addEventListener("click",e=>{e.preventDefault(),(e=>{fetch(`https://eu1.locationiq.com/v1/search.php?key=8345fc71b8f8b7&q=${e}&format=json`).then(e=>e.json()).then(e=>{const t=e[0].lat,r=e[0].lon;n(t,r)}).catch(e=>(displayErr(),e))})(t.value)})})()}]);
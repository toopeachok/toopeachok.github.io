!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);let i=document.querySelector("#site-search"),r=!1;document.querySelector(".search-icon").addEventListener("click",()=>{return e=i,r?(e.style.opacity="0",e.style.visibility="hidden"):(e.style.opacity="1",e.style.visibility="visible"),void(r=!r);var e});const o=document.querySelectorAll(".navigation-slider__item"),l=document.querySelectorAll(".content-slider__item");for(let e=0;e<o.length;e++)o[e].addEventListener("click",(function(){this.classList.add("navigation-slider__item--active");for(let e=0;e<o.length;e++)this!==o[e]&&o[e].classList.remove("navigation-slider__item--active")})),o[e].addEventListener("click",(function(){let e=parseInt(this.dataset.indexNumber);for(let e=0;e<l.length;e++)l[e].classList.remove("visible-content-slider-item");l[e].classList.add("visible-content-slider-item")}))},function(e,t,n){}]);
module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=1)}([function(e,t){e.exports=require("react")},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";n.r(t),n.d(t,"LongPressContext",(function(){return c})),n.d(t,"LongPress",(function(){return a}));var r=n(0),o=n.n(r);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,u=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,u=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw u}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=Object(r.createContext)({}),a=function(e){var t=e.pressTime,n=void 0===t?300:t,i=e.inactiveHide,a=void 0!==i&&i,l=e.inactiveHideTime,s=void 0===l?2:l,f=e.callbackStart,d=void 0===f?null:f,b=e.callbackRelease,v=void 0===b?null:b,m=e.onClickDefault,p=void 0===m?null:m,y=e.id,g=void 0===y?"":y,S=e.classNames,j=void 0===S?"":S,O=e.elementOnInteraction,h=void 0===O?null:O,x=e.children,w=u(Object(r.useState)(!1),2),M=w[0],N=w[1],P=u(Object(r.useState)(!1),2),E=P[0],I=P[1],T=u(Object(r.useState)(),2),A=T[0],D=(T[1],u(Object(r.useState)(0),2)),_=D[0],k=D[1],C=Object(r.useRef)(E),H=Object(r.useRef)(M);Object(r.useEffect)((function(){C.current=E}),[E]),Object(r.useEffect)((function(){H.current=M}),[M]);var R=function(e){e.stopPropagation(),e.preventDefault();var t=new Date,r=t.getSeconds()+Number(t.getMilliseconds()/1e3);Number(Number(r-_).toFixed(3))>=n/1e3?(N(!0),v&&d(),a&&F()):Number(Number(r-_).toFixed(3))<n/1e3&&p(),k(0)},F=function(){setTimeout((function(){C.current||N(!1)}),s)},L={hasInteraction:E,setHasInteraction:I,showInteractionElements:M,setShowInteractionElements:N};return o.a.createElement(c.Provider,{value:L},o.a.createElement("div",{className:j,id:g,onTouchStart:function(e){console.log("touch"),v&&d();var t=new Date;A&&k(t.getSeconds()+Number(t.getMilliseconds()/1e3))},onMouseDown:function(e){console.log("click"),v&&d();var t=new Date;A||k(t.getSeconds()+Number(t.getMilliseconds()/1e3))},onMouseUp:R,onTouchEnd:R},x,M&&h))}}]);
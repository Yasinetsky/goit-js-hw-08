!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="Expected a function",o=NaN,i="[object Symbol]",f=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,m=s||d||Function("return this")(),v=Object.prototype.toString,p=Math.max,g=Math.min,y=function(){return m.Date.now()};function b(e,t,n){var o,i,f,a,u,c,l=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function v(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function b(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=f}function h(){var e=y();if(b(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-c);return d?g(n,f-(e-l)):n}(e))}function w(e){return u=void 0,m&&o?v(e):(o=i=void 0,a)}function x(){var e=y(),n=b(e);if(o=arguments,i=this,c=e,n){if(void 0===u)return function(e){return l=e,u=setTimeout(h,t),s?v(e):a}(c);if(d)return u=setTimeout(h,t),v(c)}return void 0===u&&(u=setTimeout(h,t)),a}return t=T(t)||0,j(n)&&(s=!!n.leading,f=(d="maxWait"in n)?p(T(n.maxWait)||0,t):f,m="trailing"in n?!!n.trailing:m),x.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=c=i=u=void 0},x.flush=function(){return void 0===u?a:w(y())},x}function j(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function T(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&v.call(e)==i}(e))return o;if(j(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=j(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var n=u.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):a.test(e)?o:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return j(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:o,maxWait:t,trailing:i})};const h={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form  textarea")},w={},x="feedback-form-state";h.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(x)})),h.form.addEventListener("input",e(t)((function(e){w[e.target.name]=e.target.value;const t=JSON.stringify(w);localStorage.setItem(x,t)}),500)),function(){const e=localStorage.getItem(x);if(e){const t=JSON.parse(e);h.textarea.value=t.message,h.form.email.value=t.email}}()}();
//# sourceMappingURL=03-feedback.def2bb54.js.map

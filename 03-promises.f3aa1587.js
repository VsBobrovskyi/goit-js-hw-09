function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){n[e]=o},o.parcelRequired7c6=r);var l=r("7Y9D8");const i={form:document.querySelector(".form"),delay:document.querySelector('[name="delay"]'),delayStep:document.querySelector('[name="step"]'),amountPromises:document.querySelector('[name="amount"]')};function a(e,o){return new Promise(((t,n)=>{const r=Math.random()>.3;setTimeout((()=>{r?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}i.form.addEventListener("submit",(function(o){o.preventDefault();let{delay:t,delayStep:n,amountPromises:r}={delay:Number(i.delay.value),delayStep:Number(i.delayStep.value),amountPromises:Number(i.amountPromises.value)};for(let o=1;o<=r;o+=1)a(o,t).then((({position:o,delay:t})=>{e(l).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`)})).catch((({position:o,delay:t})=>{e(l).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`)})),t+=n}));
//# sourceMappingURL=03-promises.f3aa1587.js.map
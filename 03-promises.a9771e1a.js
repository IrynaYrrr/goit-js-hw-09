function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequire7bc7;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequire7bc7=o);var i=o("7Y9D8");const u=document.querySelector("form"),l=document.querySelector("button");function s(e,t){const r=Math.random()>.3;return new Promise(((n,o)=>{setTimeout((()=>{r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}u.addEventListener("submit",(function(t){t.preventDefault();const r=Number(t.currentTarget.elements.delay.value),n=Number(t.currentTarget.elements.step.value),o=Number(t.currentTarget.elements.amount.value);for(let t=0;t<o;t++)s(t+1,r+n*t).then((({position:r,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${r} in ${n}ms`),t===o-1&&l.removeAttribute("disabled","")})).catch((({position:r,delay:n})=>{e(i).Notify.failure(`❌ Rejected promise ${r} in ${n}ms`),t===o-1&&l.removeAttribute("disabled","")}));l.setAttribute("disabled","")}));
//# sourceMappingURL=03-promises.a9771e1a.js.map

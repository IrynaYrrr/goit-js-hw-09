!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body"),a=null;t.addEventListener("click",(function(){a=setInterval((function(){r.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),t.setAttribute("disabled",""),e.removeAttribute("disabled","")})),e.addEventListener("click",(function(){clearInterval(a),t.removeAttribute("disabled",""),e.setAttribute("disabled","")})),e.setAttribute("disabled","")}();
//# sourceMappingURL=01-color-switcher.c4533d9e.js.map

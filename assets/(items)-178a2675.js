import{l as a,m as c,g as d,i as m,t as u,o as f,b as o,O as g}from"./entry-client-48be99b3.js";import{a as x,g as s,b as v}from"./utils-b0ab5c7d.js";const w=u('<div p="5 xl:10" class="box mx-auto flex flex-col-reverse xl:grid xl:grid-cols-[1fr_auto]"><div id="newsContent"></div></div>',4);function p(l){return a(()=>{const e=document.getElementById("newsContent")?.querySelectorAll("img");e&&e.forEach((r,i)=>{i!=0&&r.setAttribute("loading","lazy")});const n=()=>s("newsContent");window.addEventListener("scroll",n),f(()=>window.removeEventListener("scroll",n))}),c(()=>{setTimeout(()=>{x(),s("newsContent"),v()},50)}),(()=>{const t=d(w),e=t.firstChild;return m(e,()=>l.children),t})()}function E(){return o(p,{get children(){return o(g,{})}})}export{E as default};

import{S as A,i as L,s as E,e as y,b as _,B as b,h,k as v,l as g,n as s,_ as d,U as w}from"./index-2a8bc61d.js";import{p as T}from"./parse-f0c618df.js";import{j as c}from"./singletons-414637a6.js";function F(n){let t,l,i;return{c(){t=v("input"),this.h()},l(e){t=g(e,"INPUT",{type:!0,name:!0,placeholder:!0,class:!0}),this.h()},h(){s(t,"type","password"),s(t,"name",n[0]),s(t,"placeholder",n[3]),s(t,"class","svelte-1gwr0oy")},m(e,a){_(e,t,a),d(t,n[1]),l||(i=w(t,"input",n[5]),l=!0)},p(e,a){a&1&&s(t,"name",e[0]),a&2&&t.value!==e[1]&&d(t,e[1])},d(e){e&&h(t),l=!1,i()}}}function I(n){let t,l,i;return{c(){t=v("input"),this.h()},l(e){t=g(e,"INPUT",{type:!0,name:!0,placeholder:!0,class:!0}),this.h()},h(){s(t,"type","text"),s(t,"name",n[0]),s(t,"placeholder",n[3]),s(t,"class","svelte-1gwr0oy")},m(e,a){_(e,t,a),d(t,n[1]),l||(i=w(t,"input",n[4]),l=!0)},p(e,a){a&1&&s(t,"name",e[0]),a&2&&t.value!==e[1]&&d(t,e[1])},d(e){e&&h(t),l=!1,i()}}}function N(n){let t;function l(a,r){if(a[2]==="text")return I;if(a[2]==="password")return F}let i=l(n),e=i&&i(n);return{c(){e&&e.c(),t=y()},l(a){e&&e.l(a),t=y()},m(a,r){e&&e.m(a,r),_(a,t,r)},p(a,[r]){i===(i=l(a))&&e?e.p(a,r):(e&&e.d(1),e=i&&i(a),e&&(e.c(),e.m(t.parentNode,t)))},i:b,o:b,d(a){e&&e.d(a),a&&h(t)}}}function U(n,t,l){let{name:i=""}=t,{value:e=""}=t,{type:a="text"}=t;i=i.toLowerCase();const r=i.charAt(0).toUpperCase()+i.slice(1);function f(){e=this.value,l(1,e)}function m(){e=this.value,l(1,e)}return n.$$set=o=>{"name"in o&&l(0,i=o.name),"value"in o&&l(1,e=o.value),"type"in o&&l(2,a=o.type)},[i,e,a,r,f,m]}class O extends A{constructor(t){super(),L(this,t,U,N,E,{name:0,value:1,type:2})}}c.disable_scroll_handling;c.goto;c.invalidate;const C=c.invalidateAll;c.preload_data;c.preload_code;c.before_navigate;c.after_navigate;const H=c.apply_action;function M(n){const t=JSON.parse(n);return t.data&&(t.data=T(t.data)),t}function q(n,t=()=>{}){const l=async({action:e,result:a,reset:r})=>{a.type==="success"&&(r!==!1&&HTMLFormElement.prototype.reset.call(n),await C()),(location.origin+location.pathname===e.origin+e.pathname||a.type==="redirect"||a.type==="error")&&H(a)};async function i(e){e.preventDefault();const a=new URL(e.submitter?.hasAttribute("formaction")?e.submitter.formAction:HTMLFormElement.prototype.cloneNode.call(n).action),r=new FormData(n),f=e.submitter?.getAttribute("name");f&&r.append(f,e.submitter?.getAttribute("value")??"");const m=new AbortController;let o=!1;const k=await t({action:a,cancel:()=>o=!0,controller:m,data:r,form:n})??l;if(o)return;let p;try{const u=await fetch(a,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:r,signal:m.signal});p=M(await u.text()),p.type==="error"&&(p.status=u.status)}catch(u){if(u?.name==="AbortError")return;p={type:"error",error:u}}k({action:a,data:r,form:n,update:u=>l({action:a,result:p,reset:u?.reset}),result:p})}return HTMLFormElement.prototype.addEventListener.call(n,"submit",i),{destroy(){HTMLFormElement.prototype.removeEventListener.call(n,"submit",i)}}}export{O as I,q as e};

import{S as U,i as z,s as C,e as P,b as d,B as q,h as _,k as w,l as b,m as y,n as f,_ as I,U as N,f as E,g as L,t as S,d as R,q as V,a as B,w as X,r as F,c as D,x as G,F as v,y as H,u as A,z as J}from"./index-2a8bc61d.js";import{B as K}from"./Button-757541fc.js";function M(i){let e,n,l;return{c(){e=w("textarea"),this.h()},l(s){e=b(s,"TEXTAREA",{rows:!0,placeholder:!0,class:!0}),y(e).forEach(_),this.h()},h(){f(e,"rows",i[6]),f(e,"placeholder",i[2]),f(e,"class","svelte-1tbh7t")},m(s,t){d(s,e,t),I(e,i[0]),n||(l=N(e,"input",i[8]),n=!0)},p(s,t){t&64&&f(e,"rows",s[6]),t&4&&f(e,"placeholder",s[2]),t&1&&I(e,s[0])},d(s){s&&_(e),n=!1,l()}}}function Q(i){let e,n,l,s;return{c(){e=w("input"),this.h()},l(t){e=b(t,"INPUT",{placeholder:!0,style:!0,class:!0}),this.h()},h(){f(e,"placeholder",i[2]),f(e,"style",n="text-align : "+i[3]+"; margin-bottom : "+i[4]+"vh; width: "+i[5]+"%;"),f(e,"class","svelte-1tbh7t")},m(t,a){d(t,e,a),I(e,i[0]),l||(s=N(e,"input",i[7]),l=!0)},p(t,a){a&4&&f(e,"placeholder",t[2]),a&56&&n!==(n="text-align : "+t[3]+"; margin-bottom : "+t[4]+"vh; width: "+t[5]+"%;")&&f(e,"style",n),a&1&&e.value!==t[0]&&I(e,t[0])},d(t){t&&_(e),l=!1,s()}}}function W(i){let e;function n(t,a){return t[1]==="text"?Q:M}let l=n(i),s=l(i);return{c(){s.c(),e=P()},l(t){s.l(t),e=P()},m(t,a){s.m(t,a),d(t,e,a)},p(t,[a]){l===(l=n(t))&&s?s.p(t,a):(s.d(1),s=l(t),s&&(s.c(),s.m(e.parentNode,e)))},i:q,o:q,d(t){s.d(t),t&&_(e)}}}function Y(i,e,n){let{type:l="text"}=e,{placeholder:s=""}=e,{value:t=""}=e,{align:a="left"}=e,{margin:c=0}=e,{width:m=100}=e,{rows:g="2"}=e;function h(){t=this.value,n(0,t)}function p(){t=this.value,n(0,t)}return i.$$set=o=>{"type"in o&&n(1,l=o.type),"placeholder"in o&&n(2,s=o.placeholder),"value"in o&&n(0,t=o.value),"align"in o&&n(3,a=o.align),"margin"in o&&n(4,c=o.margin),"width"in o&&n(5,m=o.width),"rows"in o&&n(6,g=o.rows)},[t,l,s,a,c,m,g,h,p]}class se extends U{constructor(e){super(),z(this,e,Y,W,C,{type:1,placeholder:2,value:0,align:3,margin:4,width:5,rows:6})}}function O(i){let e,n,l,s,t,a,c,m,g,h,p,o,T;return m=new K({props:{mode:"big",$$slots:{default:[Z]},$$scope:{ctx:i}}}),m.$on("click",i[3]),{c(){e=w("div"),n=w("div"),l=V(i[1]),s=B(),t=w("div"),a=V(i[2]),c=B(),X(m.$$.fragment),g=B(),h=w("div"),this.h()},l(u){e=b(u,"DIV",{class:!0});var r=y(e);n=b(r,"DIV",{class:!0});var k=y(n);l=F(k,i[1]),k.forEach(_),s=D(r),t=b(r,"DIV",{class:!0});var j=y(t);a=F(j,i[2]),j.forEach(_),c=D(r),G(m.$$.fragment,r),r.forEach(_),g=D(u),h=b(u,"DIV",{class:!0}),y(h).forEach(_),this.h()},h(){f(n,"class","popup__title svelte-uo6umc"),f(t,"class","popup__message svelte-uo6umc"),f(e,"class","popup svelte-uo6umc"),f(h,"class","popup__backdrop svelte-uo6umc")},m(u,r){d(u,e,r),v(e,n),v(n,l),v(e,s),v(e,t),v(t,a),v(e,c),H(m,e,null),d(u,g,r),d(u,h,r),p=!0,o||(T=N(h,"click",i[3]),o=!0)},p(u,r){(!p||r&2)&&A(l,u[1]),(!p||r&4)&&A(a,u[2]);const k={};r&16&&(k.$$scope={dirty:r,ctx:u}),m.$set(k)},i(u){p||(E(m.$$.fragment,u),p=!0)},o(u){S(m.$$.fragment,u),p=!1},d(u){u&&_(e),J(m),u&&_(g),u&&_(h),o=!1,T()}}}function Z(i){let e;return{c(){e=V("Okej")},l(n){e=F(n,"Okej")},m(n,l){d(n,e,l)},d(n){n&&_(e)}}}function x(i){let e,n,l=i[0]&&O(i);return{c(){l&&l.c(),e=P()},l(s){l&&l.l(s),e=P()},m(s,t){l&&l.m(s,t),d(s,e,t),n=!0},p(s,[t]){s[0]?l?(l.p(s,t),t&1&&E(l,1)):(l=O(s),l.c(),E(l,1),l.m(e.parentNode,e)):l&&(L(),S(l,1,1,()=>{l=null}),R())},i(s){n||(E(l),n=!0)},o(s){S(l),n=!1},d(s){l&&l.d(s),s&&_(e)}}}function $(i,e,n){let{title:l="Alert title"}=e,{message:s="Something went wrong.."}=e,{showPopup:t=!1}=e;const a=()=>n(0,t=!1);return i.$$set=c=>{"title"in c&&n(1,l=c.title),"message"in c&&n(2,s=c.message),"showPopup"in c&&n(0,t=c.showPopup)},[t,l,s,a]}class ne extends U{constructor(e){super(),z(this,e,$,x,C,{title:1,message:2,showPopup:0})}}function ee(i){return i=i.toString(),i.trim().length<=0}function ie(i){let e=!1;const n=i.length-1;for(let l=0;l<=n;l++)if(e=ee(i[l]),e)return!0;return!1}export{se as I,ne as P,ie as i};
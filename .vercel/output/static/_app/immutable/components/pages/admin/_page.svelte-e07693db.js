import{S as ht,i as pt,s as dt,R as K,T as at,k as E,q as ut,a as z,w as W,l as x,m as D,r as ft,h as d,c as O,x as X,n as w,b as T,F as _,y as Y,U as ct,u as _t,V as nt,f as F,t as L,z as Z,W as xt,K as vt,o as Et,X as kt,p as Mt,B as $t,e as mt,g as bt,d as wt,Y as St,Q as qt,Z as Ut,L as Ae,P as Ve,M as Ct,N as Rt,O as Gt,D as je}from"../../../chunks/index-2a8bc61d.js";import{P as Fe,g as Pe,d as Te}from"../../../chunks/PostCategories-1dbebac0.js";import{g as Ne,F as ze,G as Qt,D as Oe,P as Le,a as Me}from"../../../chunks/Requests-e3af1178.js";import{P as Kt,I as Wt,i as Se}from"../../../chunks/formValidation-8d80168c.js";import{B as Xt}from"../../../chunks/Button-757541fc.js";import{_ as qe}from"../../../chunks/preload-helper-41c905a7.js";let Yt,Ue=(async()=>{function Zt(a){let e,t,i,r,u,c,l,s,n,o,f,m,k,j,v,$,P,M,b,N,q,C,J,st;function lt(y){a[13](y)}let I={};return a[0]!==void 0&&(I.categories=a[0]),l=new Fe({props:I}),K.push(()=>at(l,"categories",lt,a[0])),{c(){e=E("div"),t=E("div"),i=E("a"),r=ut(a[1]),c=z(),W(l.$$.fragment),n=z(),o=E("div"),f=E("div"),m=E("i"),k=z(),j=ut(a[3]),v=z(),$=E("div"),P=E("div"),M=E("i"),b=z(),N=E("div"),q=E("i"),this.h()},l(y){e=x(y,"DIV",{class:!0});var A=D(e);t=x(A,"DIV",{class:!0});var B=D(t);i=x(B,"A",{href:!0,class:!0});var H=D(i);r=ft(H,a[1]),H.forEach(d),B.forEach(d),c=O(A),X(l.$$.fragment,A),n=O(A),o=x(A,"DIV",{class:!0});var rt=D(o);f=x(rt,"DIV",{class:!0});var ot=D(f);m=x(ot,"I",{class:!0}),D(m).forEach(d),k=O(ot),j=ft(ot,a[3]),ot.forEach(d),v=O(rt),$=x(rt,"DIV",{class:!0});var p=D($);P=x(p,"DIV",{class:!0});var V=D(P);M=x(V,"I",{class:!0}),D(M).forEach(d),V.forEach(d),b=O(p),N=x(p,"DIV",{class:!0});var R=D(N);q=x(R,"I",{class:!0}),D(q).forEach(d),R.forEach(d),p.forEach(d),rt.forEach(d),A.forEach(d),this.h()},h(){w(i,"href",u="/"+a[2]),w(i,"class","svelte-45rxkk"),w(t,"class","post__title svelte-45rxkk"),w(m,"class","fa-regular fa-calendar svelte-45rxkk"),w(f,"class","post__date svelte-45rxkk"),w(M,"class","fa-solid fa-pen-to-square svelte-45rxkk"),w(P,"class","post__edit svelte-45rxkk"),w(q,"class","fa-solid fa-trash-can svelte-45rxkk"),w(N,"class","post__delete svelte-45rxkk"),w($,"class","post__tools svelte-45rxkk"),w(o,"class","post__footer svelte-45rxkk"),w(e,"class","posts__post svelte-45rxkk")},m(y,A){T(y,e,A),_(e,t),_(t,i),_(i,r),_(e,c),Y(l,e,null),_(e,n),_(e,o),_(o,f),_(f,m),_(f,k),_(f,j),_(o,v),_(o,$),_($,P),_(P,M),_($,b),_($,N),_(N,q),C=!0,J||(st=[ct(P,"click",a[5]),ct(N,"click",a[4]),ct(e,"click",a[12])],J=!0)},p(y,[A]){(!C||A&2)&&_t(r,y[1]),(!C||A&4&&u!==(u="/"+y[2]))&&w(i,"href",u);const B={};!s&&A&1&&(s=!0,B.categories=y[0],nt(()=>s=!1)),l.$set(B)},i(y){C||(F(l.$$.fragment,y),C=!0)},o(y){L(l.$$.fragment,y),C=!1},d(y){y&&d(e),Z(l),J=!1,xt(st)}}}function Jt(a,e,t){let{post_id:i=""}=e,{thumbnail:r={}}=e,{thumbnail_id:u=r.thumbnail_id}=e,{thumbnail_url:c=r.thumbnail_url}=e,{title:l=""}=e,{description:s=""}=e,{createdAt:n=""}=e,{url:o=""}=e,{categories:f=[]}=e;Pe(s.replace(/<\/?[^>]+(>|$)/g,""));const m=Te(n).format("MMMM DD"),k=vt(),j=async()=>{for(let b=0;b<f.length;b++){const N=f[b].category_id,q=await Ne(N);t(0,f[b]=q,f)}};function v(){k("deletePost",i)}function $(){k("editPost",{post_id:i,title:l,createdAt:n,description:s,thumbnail:r,categories:f})}Et(()=>{j()});function P(b){kt.call(this,a,b)}function M(b){f=b,t(0,f)}return a.$$set=b=>{"post_id"in b&&t(6,i=b.post_id),"thumbnail"in b&&t(7,r=b.thumbnail),"thumbnail_id"in b&&t(8,u=b.thumbnail_id),"thumbnail_url"in b&&t(9,c=b.thumbnail_url),"title"in b&&t(1,l=b.title),"description"in b&&t(10,s=b.description),"createdAt"in b&&t(11,n=b.createdAt),"url"in b&&t(2,o=b.url),"categories"in b&&t(0,f=b.categories)},[f,l,o,m,v,$,i,r,u,c,s,n,P,M]}class Bt extends ht{constructor(e){super(),pt(this,e,Jt,Zt,dt,{post_id:6,thumbnail:7,thumbnail_id:8,thumbnail_url:9,title:1,description:10,createdAt:11,url:2,categories:0})}}function Ht(a){let e,t,i,r;return{c(){e=E("form"),t=E("input"),this.h()},l(u){e=x(u,"FORM",{class:!0,style:!0});var c=D(e);t=x(c,"INPUT",{type:!0,accept:!0,name:!0,class:!0}),c.forEach(d),this.h()},h(){w(t,"type","file"),w(t,"accept",".jpg, .jpeg, .png"),w(t,"name","thumbnail"),w(t,"class","svelte-ns88wk"),w(e,"class","thumbnailInput svelte-ns88wk"),Mt(e,"background-image","url("+a[0]+")")},m(u,c){T(u,e,c),_(e,t),a[5](t),i||(r=ct(t,"change",a[2]),i=!0)},p(u,[c]){c&1&&Mt(e,"background-image","url("+u[0]+")")},i:$t,o:$t,d(u){u&&d(e),a[5](null),i=!1,r()}}}const te="/api/thumbnails";function ee(a,e,t){const i=vt();let{thumbnail_id:r=""}=e,{thumbnail_url:u=""}=e,{file_name:c=""}=e,l;const s=async()=>{const o=l.files[0],f=new FormData;f.append("thumbnails",o),f.append("fileName",o.name),await ze(te,f).then(m=>m.json()).then(m=>{t(3,r=m.thumbnail_id),t(0,u=m.thumbnail_url),t(4,c=m.file_name)}),i("inputThumbnail",{thumbnail_id:r,thumbnail_url:u,file_name:c})};function n(o){K[o?"unshift":"push"](()=>{l=o,t(1,l)})}return a.$$set=o=>{"thumbnail_id"in o&&t(3,r=o.thumbnail_id),"thumbnail_url"in o&&t(0,u=o.thumbnail_url),"file_name"in o&&t(4,c=o.file_name)},[u,l,s,r,c,n]}class It extends ht{constructor(e){super(),pt(this,e,ee,Ht,dt,{thumbnail_id:3,thumbnail_url:0,file_name:4})}}function ae(a){let e,t;return{c(){e=E("div"),t=E("div"),this.h()},l(i){e=x(i,"DIV",{class:!0});var r=D(e);t=x(r,"DIV",{}),D(t).forEach(d),r.forEach(d),this.h()},h(){w(e,"class","quill svelte-14t38zy")},m(i,r){T(i,e,r),_(e,t),a[2](t)},p:$t,i:$t,o:$t,d(i){i&&d(e),a[2](null)}}}function ne(a,e,t){let{description:i=""}=e,r;Et(async()=>{const{Quill:c,options:l}=await qe(()=>import("../../../chunks/Quill-7c60e57c.js").then(async n=>(await n.__tla,n)),["..\\..\\..\\chunks\\Quill-7c60e57c.js","..\\..\\..\\chunks\\preload-helper-41c905a7.js","..\\..\\..\\chunks\\PostCategories-1dbebac0.js","..\\..\\..\\chunks\\index-2a8bc61d.js","..\\..\\..\\assets\\PostCategories-b05ac89d.css","..\\..\\..\\chunks\\Requests-e3af1178.js"],import.meta.url);let s=new c(r,l);s.clipboard.dangerouslyPasteHTML(0,i),s.on("text-change",()=>{t(1,i=s.root.innerHTML)})});function u(c){K[c?"unshift":"push"](()=>{r=c,t(0,r)})}return a.$$set=c=>{"description"in c&&t(1,i=c.description)},[r,i,u]}class Dt extends ht{constructor(e){super(),pt(this,e,ne,ae,dt,{description:1})}}const ie=a=>a.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g,"-").toLowerCase().replace(/[&\/\\#,+()$~%.'":*?!<>{}]/g,"");function At(a,e,t){const i=a.slice();return i[31]=e[t],i[32]=e,i[33]=t,i}function Vt(a){let e,t,i,r,u,c,l,s,n,o,f,m,k,j,v,$,P,M,b,N,q,C,J,st,lt;function I(h,S){return h[2].length>0?le:se}let y=I(a),A=y(a);function B(h){a[20](h)}let H={placeholder:"Title",align:"center",margin:2};a[2]!==void 0&&(H.value=a[2]),l=new Wt({props:H}),K.push(()=>at(l,"value",B,a[2]));function rt(h){a[21](h)}function ot(h){a[22](h)}let p={};a[7]!==void 0&&(p.thumbnail_url=a[7]),a[3]!==void 0&&(p.thumbnail_id=a[3]),o=new It({props:p}),K.push(()=>at(o,"thumbnail_url",rt,a[7])),K.push(()=>at(o,"thumbnail_id",ot,a[3])),o.$on("inputThumbnail",a[12]);let V=a[5],R=[];for(let h=0;h<V.length;h+=1)R[h]=jt(At(a,V,h));function yt(h){a[25](h)}function g(h){a[26](h)}let G={};return a[1]!==void 0&&(G.description=a[1]),a[8]!==void 0&&(G.images=a[8]),$=new Dt({props:G}),K.push(()=>at($,"description",yt,a[1])),K.push(()=>at($,"images",g,a[8])),$.$on("text-change",a[11]),N=new Xt({props:{type:"submit",$$slots:{default:[oe]},$$scope:{ctx:a}}}),{c(){e=E("div"),t=E("form"),i=E("h1"),A.c(),r=z(),u=E("div"),c=E("div"),W(l.$$.fragment),n=z(),W(o.$$.fragment),k=z(),j=E("div");for(let h=0;h<R.length;h+=1)R[h].c();v=z(),W($.$$.fragment),b=z(),W(N.$$.fragment),q=z(),C=E("div"),this.h()},l(h){e=x(h,"DIV",{class:!0});var S=D(e);t=x(S,"FORM",{class:!0});var Q=D(t);i=x(Q,"H1",{class:!0});var tt=D(i);A.l(tt),tt.forEach(d),r=O(Q),u=x(Q,"DIV",{class:!0});var U=D(u);c=x(U,"DIV",{class:!0});var et=D(c);X(l.$$.fragment,et),n=O(et),X(o.$$.fragment,et),k=O(et),j=x(et,"DIV",{class:!0});var it=D(j);for(let gt=0;gt<R.length;gt+=1)R[gt].l(it);it.forEach(d),et.forEach(d),v=O(U),X($.$$.fragment,U),U.forEach(d),b=O(Q),X(N.$$.fragment,Q),Q.forEach(d),S.forEach(d),q=O(h),C=x(h,"DIV",{class:!0}),D(C).forEach(d),this.h()},h(){w(i,"class","svelte-4is0y7"),w(j,"class","post__categories svelte-4is0y7"),w(c,"class","post__form_overall svelte-4is0y7"),w(u,"class","post__form_main svelte-4is0y7"),w(t,"class","svelte-4is0y7"),w(e,"class","post__form svelte-4is0y7"),w(C,"class","post__form__backdrop svelte-4is0y7")},m(h,S){T(h,e,S),_(e,t),_(t,i),A.m(i,null),_(t,r),_(t,u),_(u,c),Y(l,c,null),_(c,n),Y(o,c,null),_(c,k),_(c,j);for(let Q=0;Q<R.length;Q+=1)R[Q].m(j,null);_(u,v),Y($,u,null),_(t,b),Y(N,t,null),T(h,q,S),T(h,C,S),J=!0,st||(lt=[ct(t,"submit",St(a[10])),ct(C,"click",a[9])],st=!0)},p(h,S){y===(y=I(h))&&A?A.p(h,S):(A.d(1),A=y(h),A&&(A.c(),A.m(i,null)));const Q={};!s&&S[0]&4&&(s=!0,Q.value=h[2],nt(()=>s=!1)),l.$set(Q);const tt={};if(!f&&S[0]&128&&(f=!0,tt.thumbnail_url=h[7],nt(()=>f=!1)),!m&&S[0]&8&&(m=!0,tt.thumbnail_id=h[3],nt(()=>m=!1)),o.$set(tt),S[0]&48){V=h[5];let it;for(it=0;it<V.length;it+=1){const gt=At(h,V,it);R[it]?R[it].p(gt,S):(R[it]=jt(gt),R[it].c(),R[it].m(j,null))}for(;it<R.length;it+=1)R[it].d(1);R.length=V.length}const U={};!P&&S[0]&2&&(P=!0,U.description=h[1],nt(()=>P=!1)),!M&&S[0]&256&&(M=!0,U.images=h[8],nt(()=>M=!1)),$.$set(U);const et={};S[1]&8&&(et.$$scope={dirty:S,ctx:h}),N.$set(et)},i(h){J||(F(l.$$.fragment,h),F(o.$$.fragment,h),F($.$$.fragment,h),F(N.$$.fragment,h),J=!0)},o(h){L(l.$$.fragment,h),L(o.$$.fragment,h),L($.$$.fragment,h),L(N.$$.fragment,h),J=!1},d(h){h&&d(e),A.d(),Z(l),Z(o),qt(R,h),Z($),Z(N),h&&d(q),h&&d(C),st=!1,xt(lt)}}}function se(a){let e;return{c(){e=ut("Aktualizuj post")},l(t){e=ft(t,"Aktualizuj post")},m(t,i){T(t,e,i)},p:$t,d(t){t&&d(e)}}}function le(a){let e;return{c(){e=ut(a[2])},l(t){e=ft(t,a[2])},m(t,i){T(t,e,i)},p(t,i){i[0]&4&&_t(e,t[2])},d(t){t&&d(e)}}}function jt(a){let e,t,i,r,u,c=a[31].label+"",l,s,n,o;function f(){a[23].call(t,a[32],a[33])}return{c(){e=E("div"),t=E("input"),r=z(),u=E("label"),l=ut(c),s=z(),this.h()},l(m){e=x(m,"DIV",{class:!0});var k=D(e);t=x(k,"INPUT",{type:!0,class:!0,name:!0}),r=O(k),u=x(k,"LABEL",{for:!0,class:!0});var j=D(u);l=ft(j,c),j.forEach(d),s=O(k),k.forEach(d),this.h()},h(){w(t,"type","checkbox"),w(t,"class","category svelte-4is0y7"),w(t,"name","category"),t.__value=i=a[31],t.value=t.__value,a[24][0].push(t),w(u,"for","category"),w(u,"class","svelte-4is0y7"),w(e,"class","post__category svelte-4is0y7")},m(m,k){T(m,e,k),_(e,t),t.checked=~a[4].indexOf(t.__value),t.checked=a[31].checked,_(e,r),_(e,u),_(u,l),_(e,s),n||(o=ct(t,"change",f),n=!0)},p(m,k){a=m,k[0]&32&&i!==(i=a[31])&&(t.__value=i,t.value=t.__value),k[0]&16&&(t.checked=~a[4].indexOf(t.__value)),k[0]&32&&(t.checked=a[31].checked),k[0]&32&&c!==(c=a[31].label+"")&&_t(l,c)},d(m){m&&d(e),a[24][0].splice(a[24][0].indexOf(t),1),n=!1,o()}}}function oe(a){let e;return{c(){e=ut("Aktualizuj post")},l(t){e=ft(t,"Aktualizuj post")},m(t,i){T(t,e,i)},d(t){t&&d(e)}}}function ce(a){let e,t,i,r,u;function c(n){a[19](n)}let l={title:"Nie wype\u0142ni\u0142e\u015B wszystkich p\xF3l.",message:"Spr\xF3buj ponownie ..."};a[6]!==void 0&&(l.showPopup=a[6]),e=new Kt({props:l}),K.push(()=>at(e,"showPopup",c,a[6]));let s=a[0]&&Vt(a);return{c(){W(e.$$.fragment),i=z(),s&&s.c(),r=mt()},l(n){X(e.$$.fragment,n),i=O(n),s&&s.l(n),r=mt()},m(n,o){Y(e,n,o),T(n,i,o),s&&s.m(n,o),T(n,r,o),u=!0},p(n,o){const f={};!t&&o[0]&64&&(t=!0,f.showPopup=n[6],nt(()=>t=!1)),e.$set(f),n[0]?s?(s.p(n,o),o[0]&1&&F(s,1)):(s=Vt(n),s.c(),F(s,1),s.m(r.parentNode,r)):s&&(bt(),L(s,1,1,()=>{s=null}),wt())},i(n){u||(F(e.$$.fragment,n),F(s),u=!0)},o(n){L(e.$$.fragment,n),L(s),u=!1},d(n){Z(e,n),n&&d(i),s&&s.d(n),n&&d(r)}}}function re(a,e,t){const i=vt();let{showEdit:r=!1}=e,{post:u={}}=e,{post_id:c=0}=e,{description:l=""}=e,{title:s=""}=e,{url:n=""}=e,{thumbnail:o={}}=e,{thumbnail_id:f=o.thumbnail_id}=e,{categories:m=[]}=e,{createdAt:k=""}=e,{showForm:j=!1}=e,v=[],$=!1,P=o.thumbnail_url,M=[];const b=()=>{t(0,r=!1)},N=()=>{v.forEach(p=>{p.checked=!1}),m.forEach(p=>{const V=v.findIndex(R=>R.category_id===p.category_id);t(5,v[V].checked=!0,v)})},q=async()=>{const p=await Qt("/api/categories/"),V=await p.json();return p.ok?(t(5,v=V),{status:200,props:{fetchedCategories:V}}):{status:p.status,error:new Error("Couldn't fetch the posts")}},C=()=>{t(14,n=ie(n)),t(13,u={post_id:c,title:s,description:l,thumbnail:o,createdAt:k,categories:m,url:n}),i("submitEdit",u)},J=p=>{t(1,l=p.detail.text)},st=p=>{t(15,o.thumbnail_id=p.detail.thumbnail_id,o),t(15,o.thumbnail_url=p.detail.thumbnail_url,o),t(15,o.file_name=p.detail.file_name,o),t(3,f=p.detail.thumbnail_id)};Et(async()=>{await q(),N()});const lt=[[]];function I(p){$=p,t(6,$)}function y(p){s=p,t(2,s)}function A(p){P=p,t(7,P)}function B(p){f=p,t(3,f)}function H(p,V){m=Ut(lt[0],this.__value,this.checked),p[V].checked=this.checked,t(4,m),t(5,v)}function rt(p){l=p,t(1,l)}function ot(p){M=p,t(8,M)}return a.$$set=p=>{"showEdit"in p&&t(0,r=p.showEdit),"post"in p&&t(13,u=p.post),"post_id"in p&&t(16,c=p.post_id),"description"in p&&t(1,l=p.description),"title"in p&&t(2,s=p.title),"url"in p&&t(14,n=p.url),"thumbnail"in p&&t(15,o=p.thumbnail),"thumbnail_id"in p&&t(3,f=p.thumbnail_id),"categories"in p&&t(4,m=p.categories),"createdAt"in p&&t(17,k=p.createdAt),"showForm"in p&&t(18,j=p.showForm)},[r,l,s,f,m,v,$,P,M,b,C,J,st,u,n,o,c,k,j,I,y,A,B,H,lt,rt,ot]}class ue extends ht{constructor(e){super(),pt(this,e,re,ce,dt,{showEdit:0,post:13,post_id:16,description:1,title:2,url:14,thumbnail:15,thumbnail_id:3,categories:4,createdAt:17,showForm:18},null,[-1,-1])}}function Ft(a,e,t){const i=a.slice();return i[13]=e[t],i}function Pt(a,e){let t,i,r;const u=[e[13]];let c={};for(let l=0;l<u.length;l+=1)c=Ct(c,u[l]);return i=new Bt({props:c}),i.$on("deletePost",e[3]),i.$on("editPost",e[5]),{key:a,first:null,c(){t=mt(),W(i.$$.fragment),this.h()},l(l){t=mt(),X(i.$$.fragment,l),this.h()},h(){this.first=t},m(l,s){T(l,t,s),Y(i,l,s),r=!0},p(l,s){e=l;const n=s&1?Rt(u,[Gt(e[13])]):{};i.$set(n)},i(l){r||(F(i.$$.fragment,l),r=!0)},o(l){L(i.$$.fragment,l),r=!1},d(l){l&&d(t),Z(i,l)}}}function Tt(a){let e,t,i;const r=[a[2]];function u(l){a[6](l)}let c={};for(let l=0;l<r.length;l+=1)c=Ct(c,r[l]);return a[1]!==void 0&&(c.showEdit=a[1]),e=new ue({props:c}),K.push(()=>at(e,"showEdit",u,a[1])),e.$on("submitEdit",a[4]),{c(){W(e.$$.fragment)},l(l){X(e.$$.fragment,l)},m(l,s){Y(e,l,s),i=!0},p(l,s){const n=s&4?Rt(r,[Gt(l[2])]):{};!t&&s&2&&(t=!0,n.showEdit=l[1],nt(()=>t=!1)),e.$set(n)},i(l){i||(F(e.$$.fragment,l),i=!0)},o(l){L(e.$$.fragment,l),i=!1},d(l){Z(e,l)}}}function fe(a){let e,t=[],i=new Map,r,u,c=a[0];const l=n=>n[13].post_id;for(let n=0;n<c.length;n+=1){let o=Ft(a,c,n),f=l(o);i.set(f,t[n]=Pt(f,o))}let s=a[1]&&Tt(a);return{c(){e=E("div");for(let n=0;n<t.length;n+=1)t[n].c();r=z(),s&&s.c(),this.h()},l(n){e=x(n,"DIV",{class:!0});var o=D(e);for(let f=0;f<t.length;f+=1)t[f].l(o);r=O(o),s&&s.l(o),o.forEach(d),this.h()},h(){w(e,"class","posts__display svelte-1xbjbaa")},m(n,o){T(n,e,o);for(let f=0;f<t.length;f+=1)t[f].m(e,null);_(e,r),s&&s.m(e,null),u=!0},p(n,[o]){o&41&&(c=n[0],bt(),t=Ae(t,o,l,1,n,c,i,e,Ve,Pt,r,Ft),wt()),n[1]?s?(s.p(n,o),o&2&&F(s,1)):(s=Tt(n),s.c(),F(s,1),s.m(e,null)):s&&(bt(),L(s,1,1,()=>{s=null}),wt())},i(n){if(!u){for(let o=0;o<c.length;o+=1)F(t[o]);F(s),u=!0}},o(n){for(let o=0;o<t.length;o+=1)L(t[o]);L(s),u=!1},d(n){n&&d(e);for(let o=0;o<t.length;o+=1)t[o].d();s&&s.d()}}}function he(a,e,t){vt();let{posts:i=[]}=e,r=!1,u={};const c=v=>{const $=i.filter(P=>P.post_id!==v);t(0,i=$)},l=v=>{const $=v.detail;s($)};async function s(v){const $=`/api/posts/${v}`;await Oe($),c(v)}const n=v=>{const $=v.detail;f($)},o=async v=>{const $=Object.assign({},v);$.categories=$.categories.map(M=>({category_id:M.category_id})),$.thumbnail_id=$.thumbnail.thumbnail_id;const P=`/api/posts/${v.post_id}`;await Le(P,$)},f=async v=>{m(v),o(v),t(1,r=!1)},m=v=>{const $=v.post_id;v.url=v.title.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g,"-").toLowerCase().replace(/[&\/\\#,+()$~%.'":*?!<>{}]/g,"");const P=i.findIndex(M=>M.post_id===$);t(0,i[P]=v,i)},k=v=>{t(2,u=v.detail),t(1,r=!0)};function j(v){r=v,t(1,r)}return a.$$set=v=>{"posts"in v&&t(0,i=v.posts)},[i,r,u,l,n,k,j]}class pe extends ht{constructor(e){super(),pt(this,e,he,fe,dt,{posts:0})}}function Nt(a,e,t){const i=a.slice();return i[23]=e[t],i}function zt(a){let e,t,i,r,u,c,l,s,n,o,f,m,k,j,v,$,P,M,b,N,q,C,J,st;function lt(g,G){return g[2].length>0?me:de}let I=lt(a),y=I(a);function A(g){a[13](g)}let B={placeholder:"Title",align:"center",margin:2};a[2]!==void 0&&(B.value=a[2]),l=new Wt({props:B}),K.push(()=>at(l,"value",A,a[2]));function H(g){a[14](g)}function rt(g){a[15](g)}let ot={};a[4]!==void 0&&(ot.thumbnail_id=a[4]),a[5]!==void 0&&(ot.thumbnail_url=a[5]),o=new It({props:ot}),K.push(()=>at(o,"thumbnail_id",H,a[4])),K.push(()=>at(o,"thumbnail_url",rt,a[5])),o.$on("inputThumbnail",a[11]);let p=a[1],V=[];for(let g=0;g<p.length;g+=1)V[g]=Ot(Nt(a,p,g));function R(g){a[18](g)}let yt={};return a[3]!==void 0&&(yt.description=a[3]),$=new Dt({props:yt}),K.push(()=>at($,"description",R,a[3])),$.$on("text-change",a[10]),b=new Xt({props:{type:"submit",$$slots:{default:[$e]},$$scope:{ctx:a}}}),{c(){e=E("div"),t=E("form"),i=E("h1"),y.c(),r=z(),u=E("div"),c=E("div"),W(l.$$.fragment),n=z(),W(o.$$.fragment),k=z(),j=E("div");for(let g=0;g<V.length;g+=1)V[g].c();v=z(),W($.$$.fragment),M=z(),W(b.$$.fragment),N=z(),q=E("div"),this.h()},l(g){e=x(g,"DIV",{class:!0});var G=D(e);t=x(G,"FORM",{class:!0});var h=D(t);i=x(h,"H1",{class:!0});var S=D(i);y.l(S),S.forEach(d),r=O(h),u=x(h,"DIV",{class:!0});var Q=D(u);c=x(Q,"DIV",{class:!0});var tt=D(c);X(l.$$.fragment,tt),n=O(tt),X(o.$$.fragment,tt),k=O(tt),j=x(tt,"DIV",{class:!0});var U=D(j);for(let et=0;et<V.length;et+=1)V[et].l(U);U.forEach(d),tt.forEach(d),v=O(Q),X($.$$.fragment,Q),Q.forEach(d),M=O(h),X(b.$$.fragment,h),h.forEach(d),G.forEach(d),N=O(g),q=x(g,"DIV",{class:!0}),D(q).forEach(d),this.h()},h(){w(i,"class","svelte-11tv14b"),w(j,"class","post__categories svelte-11tv14b"),w(c,"class","post__form_overall svelte-11tv14b"),w(u,"class","post__form_main svelte-11tv14b"),w(t,"class","svelte-11tv14b"),w(e,"class","post__form svelte-11tv14b"),w(q,"class","post__form__backdrop svelte-11tv14b")},m(g,G){T(g,e,G),_(e,t),_(t,i),y.m(i,null),_(t,r),_(t,u),_(u,c),Y(l,c,null),_(c,n),Y(o,c,null),_(c,k),_(c,j);for(let h=0;h<V.length;h+=1)V[h].m(j,null);_(u,v),Y($,u,null),_(t,M),Y(b,t,null),T(g,N,G),T(g,q,G),C=!0,J||(st=[ct(t,"submit",St(a[9])),ct(q,"click",a[8])],J=!0)},p(g,G){I===(I=lt(g))&&y?y.p(g,G):(y.d(1),y=I(g),y&&(y.c(),y.m(i,null)));const h={};!s&&G&4&&(s=!0,h.value=g[2],nt(()=>s=!1)),l.$set(h);const S={};if(!f&&G&16&&(f=!0,S.thumbnail_id=g[4],nt(()=>f=!1)),!m&&G&32&&(m=!0,S.thumbnail_url=g[5],nt(()=>m=!1)),o.$set(S),G&130){p=g[1];let U;for(U=0;U<p.length;U+=1){const et=Nt(g,p,U);V[U]?V[U].p(et,G):(V[U]=Ot(et),V[U].c(),V[U].m(j,null))}for(;U<V.length;U+=1)V[U].d(1);V.length=p.length}const Q={};!P&&G&8&&(P=!0,Q.description=g[3],nt(()=>P=!1)),$.$set(Q);const tt={};G&67108864&&(tt.$$scope={dirty:G,ctx:g}),b.$set(tt)},i(g){C||(F(l.$$.fragment,g),F(o.$$.fragment,g),F($.$$.fragment,g),F(b.$$.fragment,g),C=!0)},o(g){L(l.$$.fragment,g),L(o.$$.fragment,g),L($.$$.fragment,g),L(b.$$.fragment,g),C=!1},d(g){g&&d(e),y.d(),Z(l),Z(o),qt(V,g),Z($),Z(b),g&&d(N),g&&d(q),J=!1,xt(st)}}}function de(a){let e;return{c(){e=ut("Add a new post")},l(t){e=ft(t,"Add a new post")},m(t,i){T(t,e,i)},p:$t,d(t){t&&d(e)}}}function me(a){let e;return{c(){e=ut(a[2])},l(t){e=ft(t,a[2])},m(t,i){T(t,e,i)},p(t,i){i&4&&_t(e,t[2])},d(t){t&&d(e)}}}function Ot(a){let e,t,i,r,u,c=a[23].label+"",l,s,n,o;return{c(){e=E("div"),t=E("input"),r=z(),u=E("label"),l=ut(c),s=z(),this.h()},l(f){e=x(f,"DIV",{class:!0});var m=D(e);t=x(m,"INPUT",{type:!0,class:!0,name:!0}),r=O(m),u=x(m,"LABEL",{for:!0,class:!0});var k=D(u);l=ft(k,c),k.forEach(d),s=O(m),m.forEach(d),this.h()},h(){w(t,"type","checkbox"),w(t,"class","category svelte-11tv14b"),w(t,"name","category"),t.__value=i=a[23],t.value=t.__value,a[17][0].push(t),w(u,"for","category"),w(u,"class","svelte-11tv14b"),w(e,"class","post__category svelte-11tv14b")},m(f,m){T(f,e,m),_(e,t),t.checked=~a[7].indexOf(t.__value),_(e,r),_(e,u),_(u,l),_(e,s),n||(o=ct(t,"change",a[16]),n=!0)},p(f,m){m&2&&i!==(i=f[23])&&(t.__value=i,t.value=t.__value),m&128&&(t.checked=~f[7].indexOf(t.__value)),m&2&&c!==(c=f[23].label+"")&&_t(l,c)},d(f){f&&d(e),a[17][0].splice(a[17][0].indexOf(t),1),n=!1,o()}}}function $e(a){let e;return{c(){e=ut("Submit")},l(t){e=ft(t,"Submit")},m(t,i){T(t,e,i)},d(t){t&&d(e)}}}function ge(a){let e,t,i,r,u;function c(n){a[12](n)}let l={title:"Nie wype\u0142ni\u0142e\u015B wszystkich p\xF3l.",message:"Spr\xF3buj ponownie ..."};a[6]!==void 0&&(l.showPopup=a[6]),e=new Kt({props:l}),K.push(()=>at(e,"showPopup",c,a[6]));let s=a[0]&&zt(a);return{c(){W(e.$$.fragment),i=z(),s&&s.c(),r=mt()},l(n){X(e.$$.fragment,n),i=O(n),s&&s.l(n),r=mt()},m(n,o){Y(e,n,o),T(n,i,o),s&&s.m(n,o),T(n,r,o),u=!0},p(n,[o]){const f={};!t&&o&64&&(t=!0,f.showPopup=n[6],nt(()=>t=!1)),e.$set(f),n[0]?s?(s.p(n,o),o&1&&F(s,1)):(s=zt(n),s.c(),F(s,1),s.m(r.parentNode,r)):s&&(bt(),L(s,1,1,()=>{s=null}),wt())},i(n){u||(F(e.$$.fragment,n),F(s),u=!0)},o(n){L(e.$$.fragment,n),L(s),u=!1},d(n){Z(e,n),n&&d(i),s&&s.d(n),n&&d(r)}}}function _e(a,e,t){const i=vt();let{categories:r=[]}=e,{showForm:u=!1}=e,c="",l="",s={},n=s.thumbnail_id,o=s.thumbnail_url,f=!1,m=[];const k=()=>{t(0,u=!u)},j=()=>{t(2,c=""),t(4,n="")},v=(I,y,A)=>{let B=c.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g,"-").toLowerCase().replace(/[&\/\\#,+()$~%.'":*?!<>{}]/g,"");i("addToGrid",{post_id:I,title:c,description:l,thumbnail:s,createdAt:y,categories:A,url:B})};async function $(){let I,y;const A=m.map(H=>({category_id:H.category_id})),B={title:c,description:l,thumbnail_id:n,categories:A};if(Se([c,l,n])){t(6,f=!0);return}await Me("/api/posts",B).then(H=>H.json()).then(H=>{I=H.post_id,y=H.createdAt}),v(I,y,A),j(),t(0,u=!1)}const P=I=>{t(3,l=I.detail.text)},M=I=>{s=I.detail},b=[[]];function N(I){f=I,t(6,f)}function q(I){c=I,t(2,c)}function C(I){n=I,t(4,n)}function J(I){o=I,t(5,o)}function st(){m=Ut(b[0],this.__value,this.checked),t(7,m)}function lt(I){l=I,t(3,l)}return a.$$set=I=>{"categories"in I&&t(1,r=I.categories),"showForm"in I&&t(0,u=I.showForm)},[u,r,c,l,n,o,f,m,k,$,P,M,N,q,C,J,st,b,lt]}class ve extends ht{constructor(e){super(),pt(this,e,_e,ge,dt,{categories:1,showForm:0})}}function Lt(a){let e,t,i;function r(c){a[3](c)}let u={categories:a[1]};return a[0]!==void 0&&(u.showForm=a[0]),e=new ve({props:u}),K.push(()=>at(e,"showForm",r,a[0])),e.$on("addToGrid",a[4]),{c(){W(e.$$.fragment)},l(c){X(e.$$.fragment,c)},m(c,l){Y(e,c,l),i=!0},p(c,l){const s={};l&2&&(s.categories=c[1]),!t&&l&1&&(t=!0,s.showForm=c[0],nt(()=>t=!1)),e.$set(s)},i(c){i||(F(e.$$.fragment,c),i=!0)},o(c){L(e.$$.fragment,c),i=!1},d(c){Z(e,c)}}}function be(a){let e,t,i,r,u,c,l,s=a[0]&&Lt(a);return{c(){e=E("div"),t=E("i"),i=z(),s&&s.c(),r=mt(),this.h()},l(n){e=x(n,"DIV",{class:!0});var o=D(e);t=x(o,"I",{class:!0}),D(t).forEach(d),o.forEach(d),i=O(n),s&&s.l(n),r=mt(),this.h()},h(){w(t,"class","fa-solid fa-circle-plus svelte-11yp0ru"),w(e,"class","posts__add svelte-11yp0ru")},m(n,o){T(n,e,o),_(e,t),T(n,i,o),s&&s.m(n,o),T(n,r,o),u=!0,c||(l=ct(e,"click",a[2]),c=!0)},p(n,[o]){n[0]?s?(s.p(n,o),o&1&&F(s,1)):(s=Lt(n),s.c(),F(s,1),s.m(r.parentNode,r)):s&&(bt(),L(s,1,1,()=>{s=null}),wt())},i(n){u||(F(s),u=!0)},o(n){L(s),u=!1},d(n){n&&d(e),n&&d(i),s&&s.d(n),n&&d(r),c=!1,l()}}}function we(a,e,t){let i=!1,r=[];const u=()=>{t(0,i=!i)},c=async()=>{const n=await Qt("/api/categories/"),o=await n.json();return n.ok?(t(1,r=o),{status:200,props:{fetchedCategories:o}}):{status:n.status,error:new Error("Couldn't fetch the posts")}};Et(()=>{c()});function l(n){i=n,t(0,i)}function s(n){kt.call(this,a,n)}return[i,r,u,l,s]}class ye extends ht{constructor(e){super(),pt(this,e,we,be,dt,{})}}function Ee(a){let e,t,i,r,u,c;t=new ye({}),t.$on("addToGrid",a[1]);function l(n){a[2](n)}let s={};return a[0]!==void 0&&(s.posts=a[0]),r=new pe({props:s}),K.push(()=>at(r,"posts",l,a[0])),{c(){e=E("div"),W(t.$$.fragment),i=z(),W(r.$$.fragment),this.h()},l(n){e=x(n,"DIV",{class:!0});var o=D(e);X(t.$$.fragment,o),i=O(o),X(r.$$.fragment,o),o.forEach(d),this.h()},h(){w(e,"class","admin__posts svelte-pttkwb")},m(n,o){T(n,e,o),Y(t,e,null),_(e,i),Y(r,e,null),c=!0},p(n,[o]){const f={};!u&&o&1&&(u=!0,f.posts=n[0],nt(()=>u=!1)),r.$set(f)},i(n){c||(F(t.$$.fragment,n),F(r.$$.fragment,n),c=!0)},o(n){L(t.$$.fragment,n),L(r.$$.fragment,n),c=!1},d(n){n&&d(e),Z(t),Z(r)}}}function xe(a,e,t){let{posts:i=[]}=e;function r(c){kt.call(this,a,c)}function u(c){i=c,t(0,i)}return a.$$set=c=>{"posts"in c&&t(0,i=c.posts)},[i,r,u]}class ke extends ht{constructor(e){super(),pt(this,e,xe,Ee,dt,{posts:0})}}function Ie(a){let e,t,i,r;function u(l){a[3](l)}let c={};return a[0]!==void 0&&(c.posts=a[0]),t=new ke({props:c}),K.push(()=>at(t,"posts",u,a[0])),t.$on("addToGrid",a[1]),{c(){e=z(),W(t.$$.fragment),this.h()},l(l){je("svelte-19q6gis",document.head).forEach(d),e=O(l),X(t.$$.fragment,l),this.h()},h(){document.title="Posts panel"},m(l,s){T(l,e,s),Y(t,l,s),r=!0},p(l,[s]){const n={};!i&&s&1&&(i=!0,n.posts=l[0],nt(()=>i=!1)),t.$set(n)},i(l){r||(F(t.$$.fragment,l),r=!0)},o(l){L(t.$$.fragment,l),r=!1},d(l){l&&d(e),Z(t,l)}}}function De(a,e,t){let{data:i={}}=e,r=i.posts;const u=l=>{const s=l.detail;t(0,r=[...r,s])};function c(l){r=l,t(0,r)}return a.$$set=l=>{"data"in l&&t(2,i=l.data)},[r,u,i,c]}Yt=class extends ht{constructor(e){super(),pt(this,e,De,Ie,dt,{data:2})}}})();export{Ue as __tla,Yt as default};
function $(){}function Z(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function G(){return Object.create(null)}function v(t){t.forEach(J)}function O(t){return typeof t=="function"}function bt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let N;function xt(t,e){return N||(N=document.createElement("a")),N.href=e,t===N.href}function tt(t){return Object.keys(t).length===0}function et(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function $t(t,e,n){t.$$.on_destroy.push(et(e,n))}function wt(t,e,n,i){if(t){const r=K(t,e,n,i);return t[0](r)}}function K(t,e,n,i){return t[1]&&i?Z(n.ctx.slice(),t[1](i(e))):n.ctx}function vt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],c=Math.max(e.dirty.length,r.length);for(let o=0;o<c;o+=1)l[o]=e.dirty[o]|r[o];return l}return e.dirty|r}return e.dirty}function Et(t,e,n,i,r,l){if(r){const c=K(e,n,i,l);t.p(c,r)}}function kt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Nt(t){return t&&O(t.destroy)?t.destroy:$}let C=!1;function nt(){C=!0}function it(){C=!1}function rt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function ct(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const u=e[s].claim_order,f=(r>0&&e[n[r]].claim_order<=u?r+1:rt(1,r,d=>e[n[d]].claim_order,u))-1;i[s]=n[f]+1;const _=f+1;n[_]=s,r=Math.max(_,r)}const l=[],c=[];let o=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(l.push(e[s-1]);o>=s;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);l.reverse(),c.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<c.length;s++){for(;u<l.length&&c[s].claim_order>=l[u].claim_order;)u++;const f=u<l.length?l[u]:null;t.insertBefore(c[s],f)}}function st(t,e){if(C){for(ct(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function At(t,e,n){C&&!n?st(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function lt(t){t.parentNode&&t.parentNode.removeChild(t)}function St(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ot(t){return document.createElement(t)}function z(t){return document.createTextNode(t)}function jt(){return z(" ")}function Ct(){return z("")}function Mt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Tt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Dt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Lt(t,e,n){const i=new Set;for(let r=0;r<t.length;r+=1)t[r].checked&&i.add(t[r].__value);return n||i.delete(e),Array.from(i)}function ut(t){return Array.from(t.childNodes)}function at(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Q(t,e,n,i,r=!1){at(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const s=n(o);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const s=n(o);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function ft(t,e,n,i){return Q(t,r=>r.nodeName===e,r=>{const l=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];n[o.name]||l.push(o.name)}l.forEach(c=>r.removeAttribute(c))},()=>i(e))}function Pt(t,e,n){return ft(t,e,n,ot)}function dt(t,e){return Q(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>z(e),!0)}function qt(t){return dt(t," ")}function Bt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ht(t,e){t.value=e??""}function Ot(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function zt(t,e,n){t.classList[n?"add":"remove"](e)}function _t(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Ft(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const l=r.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(r)):l===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Rt(t,e){return new t(e)}let w;function x(t){w=t}function F(){if(!w)throw new Error("Function called outside component initialization");return w}function Wt(t){F().$$.on_mount.push(t)}function Gt(t){F().$$.after_update.push(t)}function It(){const t=F();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const l=_t(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,l)}),!l.defaultPrevented}return!0}}function Jt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const b=[],I=[],S=[],q=[],U=Promise.resolve();let B=!1;function V(){B||(B=!0,U.then(X))}function Kt(){return V(),U}function H(t){S.push(t)}function Qt(t){q.push(t)}const P=new Set;let A=0;function X(){const t=w;do{for(;A<b.length;){const e=b[A];A++,x(e),ht(e.$$)}for(x(null),b.length=0,A=0;I.length;)I.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];P.has(n)||(P.add(n),n())}S.length=0}while(b.length);for(;q.length;)q.pop()();B=!1,P.clear(),x(t)}function ht(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}const j=new Set;let g;function Ut(){g={r:0,c:[],p:g}}function Vt(){g.r||v(g.c),g=g.p}function Y(t,e){t&&t.i&&(j.delete(t),t.i(e))}function mt(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),g.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Xt(t,e){mt(t,1,1,()=>{e.delete(t.key)})}function Yt(t,e,n,i,r,l,c,o,s,u,f,_){let d=t.length,m=l.length,h=d;const M={};for(;h--;)M[t[h].key]=h;const E=[],T=new Map,D=new Map;for(h=m;h--;){const a=_(r,l,h),p=n(a);let y=c.get(p);y?i&&y.p(a,e):(y=u(p,a),y.c()),T.set(p,E[h]=y),p in M&&D.set(p,Math.abs(h-M[p]))}const R=new Set,W=new Set;function L(a){Y(a,1),a.m(o,f),c.set(a.key,a),f=a.first,m--}for(;d&&m;){const a=E[m-1],p=t[d-1],y=a.key,k=p.key;a===p?(f=a.first,d--,m--):T.has(k)?!c.has(y)||R.has(y)?L(a):W.has(k)?d--:D.get(y)>D.get(k)?(W.add(y),L(a)):(R.add(k),d--):(s(p,c),d--)}for(;d--;){const a=t[d];T.has(a.key)||s(a,c)}for(;m;)L(E[m-1]);return E}function Zt(t,e){const n={},i={},r={$$scope:1};let l=t.length;for(;l--;){const c=t[l],o=e[l];if(o){for(const s in c)s in o||(i[s]=1);for(const s in o)r[s]||(n[s]=o[s],r[s]=1);t[l]=o}else for(const s in c)r[s]=1}for(const c in i)c in n||(n[c]=void 0);return n}function te(t){return typeof t=="object"&&t!==null?t:{}}function ee(t,e,n,i){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,i===void 0&&n(t.$$.ctx[r]))}function ne(t){t&&t.c()}function ie(t,e){t&&t.l(e)}function pt(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||H(()=>{const c=t.$$.on_mount.map(J).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...c):v(c),t.$$.on_mount=[]}),l.forEach(H)}function yt(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function gt(t,e){t.$$.dirty[0]===-1&&(b.push(t),V(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function re(t,e,n,i,r,l,c,o=[-1]){const s=w;x(t);const u=t.$$={fragment:null,ctx:[],props:l,update:$,not_equal:r,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:G(),dirty:o,skip_bound:!1,root:e.target||s.$$.root};c&&c(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return u.ctx&&r(u.ctx[_],u.ctx[_]=h)&&(!u.skip_bound&&u.bound[_]&&u.bound[_](h),f&&gt(t,_)),d}):[],u.update(),f=!0,v(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){nt();const _=ut(e.target);u.fragment&&u.fragment.l(_),_.forEach(lt)}else u.fragment&&u.fragment.c();e.intro&&Y(t.$$.fragment),pt(t,e.target,e.anchor,e.customElement),it(),X()}x(s)}class ce{$destroy(){yt(this,1),this.$destroy=$}$on(e,n){if(!O(n))return $;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{zt as $,Kt as A,$ as B,wt as C,Ft as D,xt as E,st as F,Et as G,kt as H,vt as I,$t as J,It as K,Yt as L,Z as M,Zt as N,te as O,Xt as P,St as Q,I as R,ce as S,ee as T,Mt as U,Qt as V,v as W,Jt as X,Tt as Y,Lt as Z,Ht as _,jt as a,Nt as a0,At as b,qt as c,Vt as d,Ct as e,Y as f,Ut as g,lt as h,re as i,Gt as j,ot as k,Pt as l,ut as m,Dt as n,Wt as o,Ot as p,z as q,dt as r,bt as s,mt as t,Bt as u,Rt as v,ne as w,ie as x,pt as y,yt as z};

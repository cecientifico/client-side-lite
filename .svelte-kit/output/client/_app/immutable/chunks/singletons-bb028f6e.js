function g(){}const ft=t=>t;function dt(t,e){for(const n in e)t[n]=e[n];return t}function K(t){return t()}function F(){return Object.create(null)}function w(t){t.forEach(K)}function Q(t){return typeof t=="function"}function _t(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function Ft(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function ht(t){return Object.keys(t).length===0}function mt(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Gt(t,e,n){t.$$.on_destroy.push(mt(e,n))}function Ht(t,e,n,r){if(t){const s=Y(t,e,n,r);return t[0](s)}}function Y(t,e,n,r){return t[1]&&r?dt(n.ctx.slice(),t[1](r(e))):n.ctx}function Wt(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const u=[],i=Math.max(e.dirty.length,s.length);for(let o=0;o<i;o+=1)u[o]=e.dirty[o]|s[o];return u}return e.dirty|s}return e.dirty}function Xt(t,e,n,r,s,u){if(s){const i=Y(e,n,r,u);t.p(i,s)}}function Jt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}const Z=typeof window<"u";let pt=Z?()=>window.performance.now():()=>Date.now(),D=Z?t=>requestAnimationFrame(t):g;const $=new Set;function tt(t){$.forEach(e=>{e.c(t)||($.delete(e),e.f())}),$.size!==0&&D(tt)}function gt(t){let e;return $.size===0&&D(tt),{promise:new Promise(n=>{$.add(e={c:t,f:n})}),abort(){$.delete(e)}}}let q=!1;function yt(){q=!0}function bt(){q=!1}function xt(t,e,n,r){for(;t<e;){const s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function $t(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const d=e[c];d.claim_order!==void 0&&l.push(d)}e=l}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,d=(s>0&&e[n[s]].claim_order<=c?s+1:xt(1,s,a=>e[n[a]].claim_order,c))-1;r[l]=n[d]+1;const f=d+1;n[f]=l,s=Math.max(f,s)}const u=[],i=[];let o=e.length-1;for(let l=n[s]+1;l!=0;l=r[l-1]){for(u.push(e[l-1]);o>=l;o--)i.push(e[o]);o--}for(;o>=0;o--)i.push(e[o]);u.reverse(),i.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<i.length;l++){for(;c<u.length&&i[l].claim_order>=u[c].claim_order;)c++;const d=c<u.length?u[c]:null;t.insertBefore(i[l],d)}}function wt(t,e){t.appendChild(e)}function vt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Et(t,e){return wt(t.head||t,e),e.sheet}function kt(t,e){if(q){for($t(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Kt(t,e,n){q&&!n?kt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function et(t){t.parentNode.removeChild(t)}function nt(t){return document.createElement(t)}function Nt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function I(t){return document.createTextNode(t)}function Qt(){return I(" ")}function Yt(){return I("")}function Zt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function te(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function At(t){return Array.from(t.childNodes)}function St(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function it(t,e,n,r,s=!1){St(t);const u=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const o=t[i];if(e(o)){const l=n(o);return l===void 0?t.splice(i,1):t[i]=l,s||(t.claim_info.last_index=i),o}}for(let i=t.claim_info.last_index-1;i>=0;i--){const o=t[i];if(e(o)){const l=n(o);return l===void 0?t.splice(i,1):t[i]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,o}}return r()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function rt(t,e,n,r){return it(t,s=>s.nodeName===e,s=>{const u=[];for(let i=0;i<s.attributes.length;i++){const o=s.attributes[i];n[o.name]||u.push(o.name)}u.forEach(i=>s.removeAttribute(i))},()=>r(e))}function ee(t,e,n){return rt(t,e,n,nt)}function ne(t,e,n){return rt(t,e,n,Nt)}function jt(t,e){return it(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>I(e),!0)}function ie(t){return jt(t," ")}function re(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function se(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Ct(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,r,e),s}const T=new Map;let M=0;function Rt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Tt(t){const e={style_element:nt("style"),rules:{}};return T.set(t,e),e}function G(t,e,n,r,s,u,i,o=0){const l=16.666/r;let c=`{
`;for(let m=0;m<=1;m+=l){const b=e+(n-e)*u(m);c+=m*100+`%{${i(b,1-b)}}
`}const d=c+`100% {${i(n,1-n)}}
}`,f=`__svelte_${Rt(d)}_${o}`,a=vt(t),{style_element:h,rules:_}=T.get(a)||Tt(a);if(!_[f]){const m=Et(a,h);_[f]=!0,m.insertRule(`@keyframes ${f} ${d}`,m.cssRules.length)}const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${r}ms linear ${s}ms 1 both`,M+=1,f}function Mt(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),s=n.length-r.length;s&&(t.style.animation=r.join(", "),M-=s,M||Ot())}function Ot(){D(()=>{M||(T.forEach(t=>{const{style_element:e}=t;et(e)}),T.clear())})}let N;function k(t){N=t}function st(){if(!N)throw new Error("Function called outside component initialization");return N}function oe(t){st().$$.on_mount.push(t)}function le(t){st().$$.after_update.push(t)}const E=[],H=[],C=[],W=[],ot=Promise.resolve();let B=!1;function lt(){B||(B=!0,ot.then(ct))}function ce(){return lt(),ot}function O(t){C.push(t)}const U=new Set;let j=0;function ct(){const t=N;do{for(;j<E.length;){const e=E[j];j++,k(e),qt(e.$$)}for(k(null),E.length=0,j=0;H.length;)H.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];U.has(n)||(U.add(n),n())}C.length=0}while(E.length);for(;W.length;)W.pop()();B=!1,U.clear(),k(t)}function qt(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}let v;function Pt(){return v||(v=Promise.resolve(),v.then(()=>{v=null})),v}function z(t,e,n){t.dispatchEvent(Ct(`${e?"intro":"outro"}${n}`))}const R=new Set;let p;function ue(){p={r:0,c:[],p}}function ae(){p.r||w(p.c),p=p.p}function Ut(t,e){t&&t.i&&(R.delete(t),t.i(e))}function fe(t,e,n,r){if(t&&t.o){if(R.has(t))return;R.add(t),p.c.push(()=>{R.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const zt={duration:0};function de(t,e,n,r){let s=e(t,n),u=r?0:1,i=null,o=null,l=null;function c(){l&&Mt(t,l)}function d(a,h){const _=a.b-u;return h*=Math.abs(_),{a:u,b:a.b,d:_,duration:h,start:a.start,end:a.start+h,group:a.group}}function f(a){const{delay:h=0,duration:_=300,easing:y=ft,tick:m=g,css:b}=s||zt,P={start:pt()+h,b:a};a||(P.group=p,p.r+=1),i||o?o=P:(b&&(c(),l=G(t,u,a,_,h,y,b)),a&&m(0,1),i=d(P,_),O(()=>z(t,a,"start")),gt(A=>{if(o&&A>o.start&&(i=d(o,_),o=null,z(t,i.b,"start"),b&&(c(),l=G(t,u,i.b,i.duration,0,y,s.css))),i){if(A>=i.end)m(u=i.b,1-u),z(t,i.b,"end"),o||(i.b?c():--i.group.r||w(i.group.c)),i=null;else if(A>=i.start){const at=A-i.start;u=i.a+i.d*y(at/i.duration),m(u,1-u)}}return!!(i||o)}))}return{run(a){Q(s)?Pt().then(()=>{s=s(),f(a)}):f(a)},end(){c(),i=o=null}}}function _e(t){t&&t.c()}function he(t,e){t&&t.l(e)}function Lt(t,e,n,r){const{fragment:s,on_mount:u,on_destroy:i,after_update:o}=t.$$;s&&s.m(e,n),r||O(()=>{const l=u.map(K).filter(Q);i?i.push(...l):w(l),t.$$.on_mount=[]}),o.forEach(O)}function Bt(t,e){const n=t.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Dt(t,e){t.$$.dirty[0]===-1&&(E.push(t),lt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function me(t,e,n,r,s,u,i,o=[-1]){const l=N;k(t);const c=t.$$={fragment:null,ctx:null,props:u,update:g,not_equal:s,bound:F(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:F(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};i&&i(c.root);let d=!1;if(c.ctx=n?n(t,e.props||{},(f,a,...h)=>{const _=h.length?h[0]:a;return c.ctx&&s(c.ctx[f],c.ctx[f]=_)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](_),d&&Dt(t,f)),a}):[],c.update(),d=!0,w(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){yt();const f=At(e.target);c.fragment&&c.fragment.l(f),f.forEach(et)}else c.fragment&&c.fragment.c();e.intro&&Ut(t.$$.fragment),Lt(t,e.target,e.anchor,e.customElement),bt(),ct()}k(l)}class pe{$destroy(){Bt(this,1),this.$destroy=g}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!ht(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const x=[];function V(t,e=g){let n;const r=new Set;function s(o){if(_t(t,o)&&(t=o,n)){const l=!x.length;for(const c of r)c[1](),x.push(c,t);if(l){for(let c=0;c<x.length;c+=2)x[c][0](x[c+1]);x.length=0}}}function u(o){s(o(t))}function i(o,l=g){const c=[o,l];return r.add(c),r.size===1&&(n=e(s)||g),o(t),()=>{r.delete(c),r.size===0&&(n(),n=null)}}return{set:s,update:u,subscribe:i}}let X="",ut="";function ge(t){X=t.base,ut=t.assets||X}function ye(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}function be(){return{x:pageXOffset,y:pageYOffset}}function xe(t){let e,n=null,r=null,s=null;for(const i of t.composedPath())i instanceof Element&&(!e&&i.nodeName.toUpperCase()==="A"&&(e=i),n===null&&(n=L(i,"data-sveltekit-noscroll")),r===null&&(r=L(i,"data-sveltekit-prefetch")),s===null&&(s=L(i,"data-sveltekit-reload")));const u=e&&new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI);return{a:e,url:u,options:{noscroll:n,prefetch:r,reload:s}}}function L(t,e){const n=t.getAttribute(e);return n===null?n:n===""?!0:(n==="off",!1)}function J(t){const e=V(t);let n=!0;function r(){n=!0,e.update(i=>i)}function s(i){n=!1,e.set(i)}function u(i){let o;return e.subscribe(l=>{(o===void 0||n&&l!==o)&&i(o=l)})}return{notify:r,set:s,subscribe:u}}function It(){const{set:t,subscribe:e}=V(!1);let n;async function r(){clearTimeout(n);const s=await fetch(`${ut}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(s.ok){const{version:u}=await s.json(),i=u!=="1667351215999";return i&&(t(!0),clearTimeout(n)),i}else throw new Error(`Version check failed: ${s.status}`)}return{subscribe:e,check:r}}let Vt;function $e(t){Vt=t.client}const we={url:J({}),page:J({}),navigating:V(null),updated:It()};export{xe as A,we as B,be as C,ce as D,ge as E,$e as F,ft as G,Nt as H,ne as I,kt as J,O as K,de as L,Ht as M,Xt as N,Jt as O,Wt as P,Vt as Q,V as R,pe as S,g as T,Gt as U,Zt as V,w as W,Ft as X,Qt as a,Kt as b,ie as c,ae as d,Yt as e,Ut as f,ue as g,et as h,me as i,le as j,nt as k,ee as l,At as m,te as n,oe as o,se as p,I as q,jt as r,_t as s,fe as t,re as u,_e as v,he as w,Lt as x,Bt as y,ye as z};
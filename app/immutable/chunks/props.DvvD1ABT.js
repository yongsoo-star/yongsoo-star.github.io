import{S as O,O as W,P as X,Q as P,R as J,T as y,U as I,V as p,C as w,u as C,W as k,X as ee,Y as re,b as ne,Z as q,c as Y,p as B,h as L,a as ie,E as se,_ as te,$ as ae,j as fe,s as U,d as ue,a0 as le,a1 as ce,z as F,a2 as de,a3 as oe,a4 as _e,a5 as V,a6 as ve,a7 as pe,a8 as he,a9 as M,aa as be,ab as we,ac as Pe,ad as ye,ae as Q,F as Z,af as ge,ag as $,ah as A,ai as Re,aj as xe}from"./runtime.B_H9mSWP.js";import{c as Ee}from"./store.DCx8RY4p.js";function E(e,r=null,t){if(typeof e!="object"||e===null||O in e)return e;const a=ee(e);if(a!==W&&a!==X)return e;var i=new Map,c=re(e),_=P(0);c&&i.set("length",P(e.length));var v;return new Proxy(e,{defineProperty(l,n,s){(!("value"in s)||s.configurable===!1||s.enumerable===!1||s.writable===!1)&&J();var f=i.get(n);return f===void 0?(f=P(s.value),i.set(n,f)):y(f,E(s.value,v)),!0},deleteProperty(l,n){var s=i.get(n);if(s===void 0)n in l&&i.set(n,P(p));else{if(c&&typeof n=="string"){var f=i.get("length"),u=Number(n);Number.isInteger(u)&&u<f.v&&y(f,u)}y(s,p),z(_)}return!0},get(l,n,s){var h;if(n===O)return e;var f=i.get(n),u=n in l;if(f===void 0&&(!u||(h=I(l,n))!=null&&h.writable)&&(f=P(E(u?l[n]:p,v)),i.set(n,f)),f!==void 0){var d=w(f);return d===p?void 0:d}return Reflect.get(l,n,s)},getOwnPropertyDescriptor(l,n){var s=Reflect.getOwnPropertyDescriptor(l,n);if(s&&"value"in s){var f=i.get(n);f&&(s.value=w(f))}else if(s===void 0){var u=i.get(n),d=u==null?void 0:u.v;if(u!==void 0&&d!==p)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return s},has(l,n){var d;if(n===O)return!0;var s=i.get(n),f=s!==void 0&&s.v!==p||Reflect.has(l,n);if(s!==void 0||C!==null&&(!f||(d=I(l,n))!=null&&d.writable)){s===void 0&&(s=P(f?E(l[n],v):p),i.set(n,s));var u=w(s);if(u===p)return!1}return f},set(l,n,s,f){var R;var u=i.get(n),d=n in l;if(c&&n==="length")for(var h=s;h<u.v;h+=1){var g=i.get(h+"");g!==void 0?y(g,p):h in l&&(g=P(p),i.set(h+"",g))}u===void 0?(!d||(R=I(l,n))!=null&&R.writable)&&(u=P(void 0),y(u,E(s,v)),i.set(n,u)):(d=u.v!==p,y(u,E(s,v)));var b=Reflect.getOwnPropertyDescriptor(l,n);if(b!=null&&b.set&&b.set.call(f,s),!d){if(c&&typeof n=="string"){var S=i.get("length"),m=Number(n);Number.isInteger(m)&&m>=S.v&&y(S,m+1)}z(_)}return!0},ownKeys(l){w(_);var n=Reflect.ownKeys(l).filter(u=>{var d=i.get(u);return d===void 0||d.v!==p});for(var[s,f]of i)f.v!==p&&!(s in l)&&n.push(s);return n},setPrototypeOf(){k()}})}function z(e,r=1){y(e,e.v+r)}function De(e,r,t,a=null,i=!1){L&&ie();var c=e,_=null,v=null,l=null,n=i?se:0;ne(()=>{if(l===(l=!!r()))return;let s=!1;if(L){const f=c.data===te;l===f&&(c=ae(),fe(c),U(!1),s=!0)}l?(_?q(_):_=Y(()=>t(c)),v&&B(v,()=>{v=null})):(v?q(v):a&&(v=Y(()=>a(c))),_&&B(_,()=>{_=null})),s&&U(!0)},n),L&&(c=ue)}function G(e,r){return e===r||(e==null?void 0:e[O])===r}function Ne(e={},r,t,a){return le(()=>{var i,c;return ce(()=>{i=c,c=[],F(()=>{e!==t(...c)&&(r(e,...c),i&&G(t(...i),e)&&r(null,...i))})}),()=>{de(()=>{c&&G(t(...c),e)&&r(null,...c)})}}),e}const Oe={get(e,r){if(!e.exclude.includes(r))return e.props[r]},set(e,r){return!1},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Le(e,r,t){return new Proxy({props:e,exclude:r},Oe)}const Ie={get(e,r){if(!e.exclude.includes(r))return w(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,t){return r in e.special||(e.special[r]=me({get[r](){return e.props[r]}},r,V)),e.special[r](t),$(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),$(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Ce(e,r){return new Proxy({props:e,exclude:r,special:{},version:P(0)},Ie)}const Se={get(e,r){let t=e.props.length;for(;t--;){let a=e.props[t];if(A(a)&&(a=a()),typeof a=="object"&&a!==null&&r in a)return a[r]}},set(e,r,t){let a=e.props.length;for(;a--;){let i=e.props[a];A(i)&&(i=i());const c=I(i,r);if(c&&c.set)return c.set(t),!0}return!1},getOwnPropertyDescriptor(e,r){let t=e.props.length;for(;t--;){let a=e.props[t];if(A(a)&&(a=a()),typeof a=="object"&&a!==null&&r in a){const i=I(a,r);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,r){if(r===O||r===Q)return!1;for(let t of e.props)if(A(t)&&(t=t()),t!=null&&r in t)return!0;return!1},ownKeys(e){const r=[];for(let t of e.props){A(t)&&(t=t());for(const a in t)r.includes(a)||r.push(a)}return r}};function Fe(...e){return new Proxy({props:e},Se)}function H(e){for(var r=C,t=C;r!==null&&!(r.f&(pe|he));)r=r.parent;try{return M(r),e()}finally{M(t)}}function me(e,r,t,a){var j;var i=(t&be)!==0,c=!we||(t&Pe)!==0,_=(t&ye)!==0,v=(t&Re)!==0,l=!1,n;_?[n,l]=Ee(()=>e[r]):n=e[r];var s=O in e||Q in e,f=((j=I(e,r))==null?void 0:j.set)??(s&&_&&r in e?o=>e[r]=o:void 0),u=a,d=!0,h=!1,g=()=>(h=!0,d&&(d=!1,v?u=F(a):u=a),u);n===void 0&&a!==void 0&&(f&&c&&oe(),n=g(),f&&f(n));var b;if(c)b=()=>{var o=e[r];return o===void 0?g():(d=!0,h=!1,o)};else{var S=H(()=>(i?Z:ge)(()=>e[r]));S.f|=_e,b=()=>{var o=w(S);return o!==void 0&&(u=void 0),o===void 0?u:o}}if(!(t&V))return b;if(f){var m=e.$$legacy;return function(o,x){return arguments.length>0?((!c||!x||m||l)&&f(x?b():o),o):b()}}var R=!1,K=!1,D=xe(n),T=H(()=>Z(()=>{var o=b(),x=w(D);return R?(R=!1,K=!0,x):(K=!1,D.v=o)}));return i||(T.equals=ve),function(o,x){if(arguments.length>0){const N=x?w(T):c&&_?E(o):o;return T.equals(N)||(R=!0,y(D,N),h&&u!==void 0&&(u=N),F(()=>w(T))),o}return w(T)}}export{E as a,Ne as b,De as i,Ce as l,me as p,Le as r,Fe as s};

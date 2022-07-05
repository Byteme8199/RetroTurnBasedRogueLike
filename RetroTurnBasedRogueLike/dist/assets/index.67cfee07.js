const il=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};il();function ya(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const ol="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sl=ya(ol);function yo(e){return!!e||e===""}function Xt(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=me(r)?fl(r):Xt(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(me(e))return e;if(he(e))return e}}const ll=/;(?![^(]*\))/g,cl=/:(.+)/;function fl(e){const t={};return e.split(ll).forEach(n=>{if(n){const r=n.split(cl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Wt(e){let t="";if(me(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const r=Wt(e[n]);r&&(t+=r+" ")}else if(he(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const oe={},Bt=[],ze=()=>{},ul=()=>!1,dl=/^on[^a-z]/,ir=e=>dl.test(e),xa=e=>e.startsWith("onUpdate:"),ye=Object.assign,wa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},pl=Object.prototype.hasOwnProperty,G=(e,t)=>pl.call(e,t),H=Array.isArray,fn=e=>or(e)==="[object Map]",ml=e=>or(e)==="[object Set]",K=e=>typeof e=="function",me=e=>typeof e=="string",_a=e=>typeof e=="symbol",he=e=>e!==null&&typeof e=="object",xo=e=>he(e)&&K(e.then)&&K(e.catch),hl=Object.prototype.toString,or=e=>hl.call(e),gl=e=>or(e).slice(8,-1),vl=e=>or(e)==="[object Object]",ka=e=>me(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,jn=ya(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},bl=/-(\w)/g,Ve=sr(e=>e.replace(bl,(t,n)=>n?n.toUpperCase():"")),yl=/\B([A-Z])/g,Qt=sr(e=>e.replace(yl,"-$1").toLowerCase()),lr=sr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Or=sr(e=>e?`on${lr(e)}`:""),_n=(e,t)=>!Object.is(e,t),Pr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Kn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},xl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ri;const wl=()=>ri||(ri=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let We;class wo{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&We&&(this.parent=We,this.index=(We.scopes||(We.scopes=[])).push(this)-1)}run(t){if(this.active){const n=We;try{return We=this,t()}finally{We=n}}}on(){We=this}off(){We=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function _o(e){return new wo(e)}function _l(e,t=We){t&&t.active&&t.effects.push(e)}const Aa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},ko=e=>(e.w&vt)>0,Ao=e=>(e.n&vt)>0,kl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=vt},Al=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];ko(a)&&!Ao(a)?a.delete(e):t[n++]=a,a.w&=~vt,a.n&=~vt}t.length=n}},Dr=new WeakMap;let sn=0,vt=1;const Br=30;let Ne;const Ct=Symbol(""),Ur=Symbol("");class Ea{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,_l(this,r)}run(){if(!this.active)return this.fn();let t=Ne,n=mt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ne,Ne=this,mt=!0,vt=1<<++sn,sn<=Br?kl(this):ai(this),this.fn()}finally{sn<=Br&&Al(this),vt=1<<--sn,Ne=this.parent,mt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ne===this?this.deferStop=!0:this.active&&(ai(this),this.onStop&&this.onStop(),this.active=!1)}}function ai(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let mt=!0;const Eo=[];function Jt(){Eo.push(mt),mt=!1}function Zt(){const e=Eo.pop();mt=e===void 0?!0:e}function Pe(e,t,n){if(mt&&Ne){let r=Dr.get(e);r||Dr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Aa()),Co(a)}}function Co(e,t){let n=!1;sn<=Br?Ao(e)||(e.n|=vt,n=!ko(e)):n=!e.has(Ne),n&&(e.add(Ne),Ne.deps.push(e))}function Ze(e,t,n,r,a,i){const o=Dr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&H(e))o.forEach((l,f)=>{(f==="length"||f>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":H(e)?ka(n)&&s.push(o.get("length")):(s.push(o.get(Ct)),fn(e)&&s.push(o.get(Ur)));break;case"delete":H(e)||(s.push(o.get(Ct)),fn(e)&&s.push(o.get(Ur)));break;case"set":fn(e)&&s.push(o.get(Ct));break}if(s.length===1)s[0]&&Hr(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);Hr(Aa(l))}}function Hr(e,t){const n=H(e)?e:[...e];for(const r of n)r.computed&&ii(r);for(const r of n)r.computed||ii(r)}function ii(e,t){(e!==Ne||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const El=ya("__proto__,__v_isRef,__isVue"),Oo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(_a)),Cl=Ca(),Ol=Ca(!1,!0),Pl=Ca(!0),oi=Sl();function Sl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Q(this);for(let i=0,o=this.length;i<o;i++)Pe(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(Q)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Jt();const r=Q(this)[t].apply(this,n);return Zt(),r}}),e}function Ca(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Kl:Io:t?To:Ro).get(r))return r;const o=H(r);if(!e&&o&&G(oi,a))return Reflect.get(oi,a,i);const s=Reflect.get(r,a,i);return(_a(a)?Oo.has(a):El(a))||(e||Pe(r,"get",a),t)?s:fe(s)?o&&ka(a)?s:s.value:he(s)?e?Mo(s):en(s):s}}const Rl=Po(),Tl=Po(!0);function Po(e=!1){return function(n,r,a,i){let o=n[r];if(kn(o)&&fe(o)&&!fe(a))return!1;if(!e&&!kn(a)&&(Wr(a)||(a=Q(a),o=Q(o)),!H(n)&&fe(o)&&!fe(a)))return o.value=a,!0;const s=H(n)&&ka(r)?Number(r)<n.length:G(n,r),l=Reflect.set(n,r,a,i);return n===Q(i)&&(s?_n(a,o)&&Ze(n,"set",r,a):Ze(n,"add",r,a)),l}}function Il(e,t){const n=G(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ze(e,"delete",t,void 0),r}function Ml(e,t){const n=Reflect.has(e,t);return(!_a(t)||!Oo.has(t))&&Pe(e,"has",t),n}function Nl(e){return Pe(e,"iterate",H(e)?"length":Ct),Reflect.ownKeys(e)}const So={get:Cl,set:Rl,deleteProperty:Il,has:Ml,ownKeys:Nl},Fl={get:Pl,set(e,t){return!0},deleteProperty(e,t){return!0}},Ll=ye({},So,{get:Ol,set:Tl}),Oa=e=>e,cr=e=>Reflect.getPrototypeOf(e);function In(e,t,n=!1,r=!1){e=e.__v_raw;const a=Q(e),i=Q(t);n||(t!==i&&Pe(a,"get",t),Pe(a,"get",i));const{has:o}=cr(a),s=r?Oa:n?Ra:An;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Mn(e,t=!1){const n=this.__v_raw,r=Q(n),a=Q(e);return t||(e!==a&&Pe(r,"has",e),Pe(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Nn(e,t=!1){return e=e.__v_raw,!t&&Pe(Q(e),"iterate",Ct),Reflect.get(e,"size",e)}function si(e){e=Q(e);const t=Q(this);return cr(t).has.call(t,e)||(t.add(e),Ze(t,"add",e,e)),this}function li(e,t){t=Q(t);const n=Q(this),{has:r,get:a}=cr(n);let i=r.call(n,e);i||(e=Q(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?_n(t,o)&&Ze(n,"set",e,t):Ze(n,"add",e,t),this}function ci(e){const t=Q(this),{has:n,get:r}=cr(t);let a=n.call(t,e);a||(e=Q(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ze(t,"delete",e,void 0),i}function fi(){const e=Q(this),t=e.size!==0,n=e.clear();return t&&Ze(e,"clear",void 0,void 0),n}function Fn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=Q(o),l=t?Oa:e?Ra:An;return!e&&Pe(s,"iterate",Ct),o.forEach((f,c)=>r.call(a,l(f),l(c),i))}}function Ln(e,t,n){return function(...r){const a=this.__v_raw,i=Q(a),o=fn(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),c=n?Oa:t?Ra:An;return!t&&Pe(i,"iterate",l?Ur:Ct),{next(){const{value:d,done:p}=f.next();return p?{value:d,done:p}:{value:s?[c(d[0]),c(d[1])]:c(d),done:p}},[Symbol.iterator](){return this}}}}function st(e){return function(...t){return e==="delete"?!1:this}}function $l(){const e={get(i){return In(this,i)},get size(){return Nn(this)},has:Mn,add:si,set:li,delete:ci,clear:fi,forEach:Fn(!1,!1)},t={get(i){return In(this,i,!1,!0)},get size(){return Nn(this)},has:Mn,add:si,set:li,delete:ci,clear:fi,forEach:Fn(!1,!0)},n={get(i){return In(this,i,!0)},get size(){return Nn(this,!0)},has(i){return Mn.call(this,i,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:Fn(!0,!1)},r={get(i){return In(this,i,!0,!0)},get size(){return Nn(this,!0)},has(i){return Mn.call(this,i,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:Fn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Ln(i,!1,!1),n[i]=Ln(i,!0,!1),t[i]=Ln(i,!1,!0),r[i]=Ln(i,!0,!0)}),[e,n,t,r]}const[jl,zl,Dl,Bl]=$l();function Pa(e,t){const n=t?e?Bl:Dl:e?zl:jl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(G(n,a)&&a in r?n:r,a,i)}const Ul={get:Pa(!1,!1)},Hl={get:Pa(!1,!0)},Wl={get:Pa(!0,!1)},Ro=new WeakMap,To=new WeakMap,Io=new WeakMap,Kl=new WeakMap;function Yl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ql(e){return e.__v_skip||!Object.isExtensible(e)?0:Yl(gl(e))}function en(e){return kn(e)?e:Sa(e,!1,So,Ul,Ro)}function Vl(e){return Sa(e,!1,Ll,Hl,To)}function Mo(e){return Sa(e,!0,Fl,Wl,Io)}function Sa(e,t,n,r,a){if(!he(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=ql(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function ht(e){return kn(e)?ht(e.__v_raw):!!(e&&e.__v_isReactive)}function kn(e){return!!(e&&e.__v_isReadonly)}function Wr(e){return!!(e&&e.__v_isShallow)}function No(e){return ht(e)||kn(e)}function Q(e){const t=e&&e.__v_raw;return t?Q(t):e}function Kt(e){return Kn(e,"__v_skip",!0),e}const An=e=>he(e)?en(e):e,Ra=e=>he(e)?Mo(e):e;function Fo(e){mt&&Ne&&(e=Q(e),Co(e.dep||(e.dep=Aa())))}function Lo(e,t){e=Q(e),e.dep&&Hr(e.dep)}function fe(e){return!!(e&&e.__v_isRef===!0)}function fr(e){return $o(e,!1)}function Gl(e){return $o(e,!0)}function $o(e,t){return fe(e)?e:new Xl(e,t)}class Xl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Q(t),this._value=n?t:An(t)}get value(){return Fo(this),this._value}set value(t){t=this.__v_isShallow?t:Q(t),_n(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:An(t),Lo(this))}}function un(e){return fe(e)?e.value:e}const Ql={get:(e,t,n)=>un(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return fe(a)&&!fe(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function jo(e){return ht(e)?e:new Proxy(e,Ql)}function Jl(e){const t=H(e)?new Array(e.length):{};for(const n in e)t[n]=ec(e,n);return t}class Zl{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function ec(e,t,n){const r=e[t];return fe(r)?r:new Zl(e,t,n)}class tc{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ea(t,()=>{this._dirty||(this._dirty=!0,Lo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=Q(this);return Fo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function nc(e,t,n=!1){let r,a;const i=K(e);return i?(r=e,a=ze):(r=e.get,a=e.set),new tc(r,a,i||!a,n)}function gt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){ur(i,t,n)}return a}function De(e,t,n,r){if(K(e)){const i=gt(e,t,n,r);return i&&xo(i)&&i.catch(o=>{ur(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(De(e[i],t,n,r));return a}function ur(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){gt(l,null,10,[e,o,s]);return}}rc(e,n,a,r)}function rc(e,t,n,r=!0){console.error(e)}let Yn=!1,Kr=!1;const Oe=[];let Qe=0;const dn=[];let ln=null,Ft=0;const pn=[];let ut=null,Lt=0;const zo=Promise.resolve();let Ta=null,Yr=null;function Ia(e){const t=Ta||zo;return e?t.then(this?e.bind(this):e):t}function ac(e){let t=Qe+1,n=Oe.length;for(;t<n;){const r=t+n>>>1;En(Oe[r])<e?t=r+1:n=r}return t}function Do(e){(!Oe.length||!Oe.includes(e,Yn&&e.allowRecurse?Qe+1:Qe))&&e!==Yr&&(e.id==null?Oe.push(e):Oe.splice(ac(e.id),0,e),Bo())}function Bo(){!Yn&&!Kr&&(Kr=!0,Ta=zo.then(Wo))}function ic(e){const t=Oe.indexOf(e);t>Qe&&Oe.splice(t,1)}function Uo(e,t,n,r){H(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Bo()}function oc(e){Uo(e,ln,dn,Ft)}function sc(e){Uo(e,ut,pn,Lt)}function dr(e,t=null){if(dn.length){for(Yr=t,ln=[...new Set(dn)],dn.length=0,Ft=0;Ft<ln.length;Ft++)ln[Ft]();ln=null,Ft=0,Yr=null,dr(e,t)}}function Ho(e){if(dr(),pn.length){const t=[...new Set(pn)];if(pn.length=0,ut){ut.push(...t);return}for(ut=t,ut.sort((n,r)=>En(n)-En(r)),Lt=0;Lt<ut.length;Lt++)ut[Lt]();ut=null,Lt=0}}const En=e=>e.id==null?1/0:e.id;function Wo(e){Kr=!1,Yn=!0,dr(e),Oe.sort((n,r)=>En(n)-En(r));const t=ze;try{for(Qe=0;Qe<Oe.length;Qe++){const n=Oe[Qe];n&&n.active!==!1&&gt(n,null,14)}}finally{Qe=0,Oe.length=0,Ho(),Yn=!1,Ta=null,(Oe.length||dn.length||pn.length)&&Wo(e)}}function lc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||oe;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[c]||oe;p&&(a=n.map(v=>v.trim())),d&&(a=n.map(xl))}let s,l=r[s=Or(t)]||r[s=Or(Ve(t))];!l&&i&&(l=r[s=Or(Qt(t))]),l&&De(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,De(f,e,6,a)}}function Ko(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!K(e)){const l=f=>{const c=Ko(f,t,!0);c&&(s=!0,ye(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(H(i)?i.forEach(l=>o[l]=null):ye(o,i),r.set(e,o),o)}function pr(e,t){return!e||!ir(t)?!1:(t=t.slice(2).replace(/Once$/,""),G(e,t[0].toLowerCase()+t.slice(1))||G(e,Qt(t))||G(e,t))}let Le=null,mr=null;function qn(e){const t=Le;return Le=e,mr=e&&e.type.__scopeId||null,t}function cc(e){mr=e}function fc(){mr=null}function uc(e,t=Le,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&xi(-1);const i=qn(t),o=e(...a);return qn(i),r._d&&xi(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Sr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:c,renderCache:d,data:p,setupState:v,ctx:k,inheritAttrs:I}=e;let C,g;const w=qn(e);try{if(n.shapeFlag&4){const L=a||r;C=Ye(c.call(L,L,d,i,v,p,k)),g=l}else{const L=t;C=Ye(L.length>1?L(i,{attrs:l,slots:s,emit:f}):L(i,null)),g=t.props?l:dc(l)}}catch(L){hn.length=0,ur(L,e,1),C=ge(Pt)}let R=C;if(g&&I!==!1){const L=Object.keys(g),{shapeFlag:D}=R;L.length&&D&7&&(o&&L.some(xa)&&(g=pc(g,o)),R=Yt(R,g))}return n.dirs&&(R=Yt(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),C=R,qn(w),C}const dc=e=>{let t;for(const n in e)(n==="class"||n==="style"||ir(n))&&((t||(t={}))[n]=e[n]);return t},pc=(e,t)=>{const n={};for(const r in e)(!xa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function mc(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ui(r,o,f):!!o;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const p=c[d];if(o[p]!==r[p]&&!pr(f,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ui(r,o,f):!0:!!o;return!1}function ui(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!pr(n,i))return!0}return!1}function hc({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const gc=e=>e.__isSuspense;function vc(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):sc(e)}function zn(e,t){if(pe){let n=pe.provides;const r=pe.parent&&pe.parent.provides;r===n&&(n=pe.provides=Object.create(r)),n[e]=t}}function Je(e,t,n=!1){const r=pe||Le;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&K(t)?t.call(r.proxy):t}}const di={};function Ut(e,t,n){return Yo(e,t,n)}function Yo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=oe){const s=pe;let l,f=!1,c=!1;if(fe(e)?(l=()=>e.value,f=Wr(e)):ht(e)?(l=()=>e,r=!0):H(e)?(c=!0,f=e.some(g=>ht(g)||Wr(g)),l=()=>e.map(g=>{if(fe(g))return g.value;if(ht(g))return jt(g);if(K(g))return gt(g,s,2)})):K(e)?t?l=()=>gt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),De(e,s,3,[p])}:l=ze,t&&r){const g=l;l=()=>jt(g())}let d,p=g=>{d=C.onStop=()=>{gt(g,s,4)}};if(On)return p=ze,t?n&&De(t,s,3,[l(),c?[]:void 0,p]):l(),ze;let v=c?[]:di;const k=()=>{if(!!C.active)if(t){const g=C.run();(r||f||(c?g.some((w,R)=>_n(w,v[R])):_n(g,v)))&&(d&&d(),De(t,s,3,[g,v===di?void 0:v,p]),v=g)}else C.run()};k.allowRecurse=!!t;let I;a==="sync"?I=k:a==="post"?I=()=>_e(k,s&&s.suspense):I=()=>oc(k);const C=new Ea(l,I);return t?n?k():v=C.run():a==="post"?_e(C.run.bind(C),s&&s.suspense):C.run(),()=>{C.stop(),s&&s.scope&&wa(s.scope.effects,C)}}function bc(e,t,n){const r=this.proxy,a=me(e)?e.includes(".")?qo(r,e):()=>r[e]:e.bind(r,r);let i;K(t)?i=t:(i=t.handler,n=t);const o=pe;qt(this);const s=Yo(a,i.bind(r),n);return o?qt(o):Ot(),s}function qo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function jt(e,t){if(!he(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),fe(e))jt(e.value,t);else if(H(e))for(let n=0;n<e.length;n++)jt(e[n],t);else if(ml(e)||fn(e))e.forEach(n=>{jt(n,t)});else if(vl(e))for(const n in e)jt(e[n],t);return e}function rt(e){return K(e)?{setup:e,name:e.name}:e}const Dn=e=>!!e.type.__asyncLoader,Vo=e=>e.type.__isKeepAlive;function yc(e,t){Go(e,"a",t)}function xc(e,t){Go(e,"da",t)}function Go(e,t,n=pe){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(hr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Vo(a.parent.vnode)&&wc(r,t,n,a),a=a.parent}}function wc(e,t,n,r){const a=hr(t,e,r,!0);Ma(()=>{wa(r[t],a)},n)}function hr(e,t,n=pe,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Jt(),qt(n);const s=De(t,n,e,o);return Ot(),Zt(),s});return r?a.unshift(i):a.push(i),i}}const at=e=>(t,n=pe)=>(!On||e==="sp")&&hr(e,t,n),_c=at("bm"),kc=at("m"),Ac=at("bu"),Ec=at("u"),Cc=at("bum"),Ma=at("um"),Oc=at("sp"),Pc=at("rtg"),Sc=at("rtc");function Rc(e,t=pe){hr("ec",e,t)}function wt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Jt(),De(l,n,8,[e.el,s,e,t]),Zt())}}const Xo="components";function mn(e,t){return Ic(Xo,e,!0,t)||e}const Tc=Symbol();function Ic(e,t,n=!0,r=!1){const a=Le||pe;if(a){const i=a.type;if(e===Xo){const s=cf(i,!1);if(s&&(s===t||s===Ve(t)||s===lr(Ve(t))))return i}const o=pi(a[e]||i[e],t)||pi(a.appContext[e],t);return!o&&r?i:o}}function pi(e,t){return e&&(e[t]||e[Ve(t)]||e[lr(Ve(t))])}function Rr(e,t,n,r){let a;const i=n&&n[r];if(H(e)||me(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(he(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];a[s]=t(e[f],f,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const qr=e=>e?cs(e)?$a(e)||e.proxy:qr(e.parent):null,Vn=ye(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>qr(e.parent),$root:e=>qr(e.root),$emit:e=>e.emit,$options:e=>Jo(e),$forceUpdate:e=>e.f||(e.f=()=>Do(e.update)),$nextTick:e=>e.n||(e.n=Ia.bind(e.proxy)),$watch:e=>bc.bind(e)}),Mc={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const v=o[t];if(v!==void 0)switch(v){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==oe&&G(r,t))return o[t]=1,r[t];if(a!==oe&&G(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&G(f,t))return o[t]=3,i[t];if(n!==oe&&G(n,t))return o[t]=4,n[t];Vr&&(o[t]=0)}}const c=Vn[t];let d,p;if(c)return t==="$attrs"&&Pe(e,"get",t),c(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==oe&&G(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,G(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==oe&&G(a,t)?(a[t]=n,!0):r!==oe&&G(r,t)?(r[t]=n,!0):G(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==oe&&G(e,o)||t!==oe&&G(t,o)||(s=i[0])&&G(s,o)||G(r,o)||G(Vn,o)||G(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:G(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Vr=!0;function Nc(e){const t=Jo(e),n=e.proxy,r=e.ctx;Vr=!1,t.beforeCreate&&mi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:c,beforeMount:d,mounted:p,beforeUpdate:v,updated:k,activated:I,deactivated:C,beforeDestroy:g,beforeUnmount:w,destroyed:R,unmounted:L,render:D,renderTracked:V,renderTriggered:U,errorCaptured:q,serverPrefetch:re,expose:xe,inheritAttrs:ve,components:Ae,directives:ot,filters:Re}=t;if(f&&Fc(f,r,null,e.appContext.config.unwrapInjectedRef),o)for(const ae in o){const J=o[ae];K(J)&&(r[ae]=J.bind(n))}if(a){const ae=a.call(n,n);he(ae)&&(e.data=en(ae))}if(Vr=!0,i)for(const ae in i){const J=i[ae],Ee=K(J)?J.bind(n,n):K(J.get)?J.get.bind(n,n):ze,Tt=!K(J)&&K(J.set)?J.set.bind(n):ze,Ge=ce({get:Ee,set:Tt});Object.defineProperty(r,ae,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:Be=>Ge.value=Be})}if(s)for(const ae in s)Qo(s[ae],r,n,ae);if(l){const ae=K(l)?l.call(n):l;Reflect.ownKeys(ae).forEach(J=>{zn(J,ae[J])})}c&&mi(c,e,"c");function de(ae,J){H(J)?J.forEach(Ee=>ae(Ee.bind(n))):J&&ae(J.bind(n))}if(de(_c,d),de(kc,p),de(Ac,v),de(Ec,k),de(yc,I),de(xc,C),de(Rc,q),de(Sc,V),de(Pc,U),de(Cc,w),de(Ma,L),de(Oc,re),H(xe))if(xe.length){const ae=e.exposed||(e.exposed={});xe.forEach(J=>{Object.defineProperty(ae,J,{get:()=>n[J],set:Ee=>n[J]=Ee})})}else e.exposed||(e.exposed={});D&&e.render===ze&&(e.render=D),ve!=null&&(e.inheritAttrs=ve),Ae&&(e.components=Ae),ot&&(e.directives=ot)}function Fc(e,t,n=ze,r=!1){H(e)&&(e=Gr(e));for(const a in e){const i=e[a];let o;he(i)?"default"in i?o=Je(i.from||a,i.default,!0):o=Je(i.from||a):o=Je(i),fe(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function mi(e,t,n){De(H(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Qo(e,t,n,r){const a=r.includes(".")?qo(n,r):()=>n[r];if(me(e)){const i=t[e];K(i)&&Ut(a,i)}else if(K(e))Ut(a,e.bind(n));else if(he(e))if(H(e))e.forEach(i=>Qo(i,t,n,r));else{const i=K(e.handler)?e.handler.bind(n):t[e.handler];K(i)&&Ut(a,i,e)}}function Jo(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>Gn(l,f,o,!0)),Gn(l,t,o)),i.set(t,l),l}function Gn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Gn(e,i,n,!0),a&&a.forEach(o=>Gn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Lc[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Lc={data:hi,props:kt,emits:kt,methods:kt,computed:kt,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:kt,directives:kt,watch:jc,provide:hi,inject:$c};function hi(e,t){return t?e?function(){return ye(K(e)?e.call(this,this):e,K(t)?t.call(this,this):t)}:t:e}function $c(e,t){return kt(Gr(e),Gr(t))}function Gr(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function be(e,t){return e?[...new Set([].concat(e,t))]:t}function kt(e,t){return e?ye(ye(Object.create(null),e),t):t}function jc(e,t){if(!e)return t;if(!t)return e;const n=ye(Object.create(null),e);for(const r in t)n[r]=be(e[r],t[r]);return n}function zc(e,t,n,r=!1){const a={},i={};Kn(i,gr,1),e.propsDefaults=Object.create(null),Zo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Vl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Dc(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=Q(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let p=c[d];if(pr(e.emitsOptions,p))continue;const v=t[p];if(l)if(G(i,p))v!==i[p]&&(i[p]=v,f=!0);else{const k=Ve(p);a[k]=Xr(l,s,k,v,e,!1)}else v!==i[p]&&(i[p]=v,f=!0)}}}else{Zo(e,t,a,i)&&(f=!0);let c;for(const d in s)(!t||!G(t,d)&&((c=Qt(d))===d||!G(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(a[d]=Xr(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!G(t,d)&&!0)&&(delete i[d],f=!0)}f&&Ze(e,"set","$attrs")}function Zo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(jn(l))continue;const f=t[l];let c;a&&G(a,c=Ve(l))?!i||!i.includes(c)?n[c]=f:(s||(s={}))[c]=f:pr(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=Q(n),f=s||oe;for(let c=0;c<i.length;c++){const d=i[c];n[d]=Xr(a,l,d,f[d],e,!G(f,d))}}return o}function Xr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=G(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&K(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(qt(a),r=f[n]=l.call(null,t),Ot())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Qt(n))&&(r=!0))}return r}function es(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!K(e)){const c=d=>{l=!0;const[p,v]=es(d,t,!0);ye(o,p),v&&s.push(...v)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return r.set(e,Bt),Bt;if(H(i))for(let c=0;c<i.length;c++){const d=Ve(i[c]);gi(d)&&(o[d]=oe)}else if(i)for(const c in i){const d=Ve(c);if(gi(d)){const p=i[c],v=o[d]=H(p)||K(p)?{type:p}:p;if(v){const k=yi(Boolean,v.type),I=yi(String,v.type);v[0]=k>-1,v[1]=I<0||k<I,(k>-1||G(v,"default"))&&s.push(d)}}}const f=[o,s];return r.set(e,f),f}function gi(e){return e[0]!=="$"}function vi(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function bi(e,t){return vi(e)===vi(t)}function yi(e,t){return H(t)?t.findIndex(n=>bi(n,e)):K(t)&&bi(t,e)?0:-1}const ts=e=>e[0]==="_"||e==="$stable",Na=e=>H(e)?e.map(Ye):[Ye(e)],Bc=(e,t,n)=>{if(t._n)return t;const r=uc((...a)=>Na(t(...a)),n);return r._c=!1,r},ns=(e,t,n)=>{const r=e._ctx;for(const a in e){if(ts(a))continue;const i=e[a];if(K(i))t[a]=Bc(a,i,r);else if(i!=null){const o=Na(i);t[a]=()=>o}}},rs=(e,t)=>{const n=Na(t);e.slots.default=()=>n},Uc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Q(t),Kn(t,"_",n)):ns(t,e.slots={})}else e.slots={},t&&rs(e,t);Kn(e.slots,gr,1)},Hc=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=oe;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ye(a,t),!n&&s===1&&delete a._):(i=!t.$stable,ns(t,a)),o=t}else t&&(rs(e,t),o={default:1});if(i)for(const s in a)!ts(s)&&!(s in o)&&delete a[s]};function as(){return{app:null,config:{isNativeTag:ul,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wc=0;function Kc(e,t){return function(r,a=null){K(r)||(r=Object.assign({},r)),a!=null&&!he(a)&&(a=null);const i=as(),o=new Set;let s=!1;const l=i.app={_uid:Wc++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:uf,get config(){return i.config},set config(f){},use(f,...c){return o.has(f)||(f&&K(f.install)?(o.add(f),f.install(l,...c)):K(f)&&(o.add(f),f(l,...c))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,c){return c?(i.components[f]=c,l):i.components[f]},directive(f,c){return c?(i.directives[f]=c,l):i.directives[f]},mount(f,c,d){if(!s){const p=ge(r,a);return p.appContext=i,c&&t?t(p,f):e(p,f,d),s=!0,l._container=f,f.__vue_app__=l,$a(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,c){return i.provides[f]=c,l}};return l}}function Qr(e,t,n,r,a=!1){if(H(e)){e.forEach((p,v)=>Qr(p,t&&(H(t)?t[v]:t),n,r,a));return}if(Dn(r)&&!a)return;const i=r.shapeFlag&4?$a(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,c=s.refs===oe?s.refs={}:s.refs,d=s.setupState;if(f!=null&&f!==l&&(me(f)?(c[f]=null,G(d,f)&&(d[f]=null)):fe(f)&&(f.value=null)),K(l))gt(l,s,12,[o,c]);else{const p=me(l),v=fe(l);if(p||v){const k=()=>{if(e.f){const I=p?c[l]:l.value;a?H(I)&&wa(I,i):H(I)?I.includes(i)||I.push(i):p?(c[l]=[i],G(d,l)&&(d[l]=c[l])):(l.value=[i],e.k&&(c[e.k]=l.value))}else p?(c[l]=o,G(d,l)&&(d[l]=o)):v&&(l.value=o,e.k&&(c[e.k]=o))};o?(k.id=-1,_e(k,n)):k()}}}const _e=vc;function Yc(e){return qc(e)}function qc(e,t){const n=wl();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:c,parentNode:d,nextSibling:p,setScopeId:v=ze,cloneNode:k,insertStaticContent:I}=e,C=(u,m,h,x=null,y=null,E=null,S=!1,A=null,O=!!m.dynamicChildren)=>{if(u===m)return;u&&!an(u,m)&&(x=F(u),Te(u,y,E,!0),u=null),m.patchFlag===-2&&(O=!1,m.dynamicChildren=null);const{type:_,ref:$,shapeFlag:M}=m;switch(_){case Fa:g(u,m,h,x);break;case Pt:w(u,m,h,x);break;case Tr:u==null&&R(m,h,x,S);break;case Ie:ot(u,m,h,x,y,E,S,A,O);break;default:M&1?V(u,m,h,x,y,E,S,A,O):M&6?Re(u,m,h,x,y,E,S,A,O):(M&64||M&128)&&_.process(u,m,h,x,y,E,S,A,O,ie)}$!=null&&y&&Qr($,u&&u.ref,E,m||u,!m)},g=(u,m,h,x)=>{if(u==null)r(m.el=s(m.children),h,x);else{const y=m.el=u.el;m.children!==u.children&&f(y,m.children)}},w=(u,m,h,x)=>{u==null?r(m.el=l(m.children||""),h,x):m.el=u.el},R=(u,m,h,x)=>{[u.el,u.anchor]=I(u.children,m,h,x,u.el,u.anchor)},L=({el:u,anchor:m},h,x)=>{let y;for(;u&&u!==m;)y=p(u),r(u,h,x),u=y;r(m,h,x)},D=({el:u,anchor:m})=>{let h;for(;u&&u!==m;)h=p(u),a(u),u=h;a(m)},V=(u,m,h,x,y,E,S,A,O)=>{S=S||m.type==="svg",u==null?U(m,h,x,y,E,S,A,O):xe(u,m,y,E,S,A,O)},U=(u,m,h,x,y,E,S,A)=>{let O,_;const{type:$,props:M,shapeFlag:j,transition:B,patchFlag:X,dirs:ee}=u;if(u.el&&k!==void 0&&X===-1)O=u.el=k(u.el);else{if(O=u.el=o(u.type,E,M&&M.is,M),j&8?c(O,u.children):j&16&&re(u.children,O,null,x,y,E&&$!=="foreignObject",S,A),ee&&wt(u,null,x,"created"),M){for(const se in M)se!=="value"&&!jn(se)&&i(O,se,null,M[se],E,u.children,x,y,P);"value"in M&&i(O,"value",null,M.value),(_=M.onVnodeBeforeMount)&&He(_,x,u)}q(O,u,u.scopeId,S,x)}ee&&wt(u,null,x,"beforeMount");const te=(!y||y&&!y.pendingBranch)&&B&&!B.persisted;te&&B.beforeEnter(O),r(O,m,h),((_=M&&M.onVnodeMounted)||te||ee)&&_e(()=>{_&&He(_,x,u),te&&B.enter(O),ee&&wt(u,null,x,"mounted")},y)},q=(u,m,h,x,y)=>{if(h&&v(u,h),x)for(let E=0;E<x.length;E++)v(u,x[E]);if(y){let E=y.subTree;if(m===E){const S=y.vnode;q(u,S,S.scopeId,S.slotScopeIds,y.parent)}}},re=(u,m,h,x,y,E,S,A,O=0)=>{for(let _=O;_<u.length;_++){const $=u[_]=A?dt(u[_]):Ye(u[_]);C(null,$,m,h,x,y,E,S,A)}},xe=(u,m,h,x,y,E,S)=>{const A=m.el=u.el;let{patchFlag:O,dynamicChildren:_,dirs:$}=m;O|=u.patchFlag&16;const M=u.props||oe,j=m.props||oe;let B;h&&_t(h,!1),(B=j.onVnodeBeforeUpdate)&&He(B,h,m,u),$&&wt(m,u,h,"beforeUpdate"),h&&_t(h,!0);const X=y&&m.type!=="foreignObject";if(_?ve(u.dynamicChildren,_,A,h,x,X,E):S||Ee(u,m,A,null,h,x,X,E,!1),O>0){if(O&16)Ae(A,m,M,j,h,x,y);else if(O&2&&M.class!==j.class&&i(A,"class",null,j.class,y),O&4&&i(A,"style",M.style,j.style,y),O&8){const ee=m.dynamicProps;for(let te=0;te<ee.length;te++){const se=ee[te],Me=M[se],It=j[se];(It!==Me||se==="value")&&i(A,se,Me,It,y,u.children,h,x,P)}}O&1&&u.children!==m.children&&c(A,m.children)}else!S&&_==null&&Ae(A,m,M,j,h,x,y);((B=j.onVnodeUpdated)||$)&&_e(()=>{B&&He(B,h,m,u),$&&wt(m,u,h,"updated")},x)},ve=(u,m,h,x,y,E,S)=>{for(let A=0;A<m.length;A++){const O=u[A],_=m[A],$=O.el&&(O.type===Ie||!an(O,_)||O.shapeFlag&70)?d(O.el):h;C(O,_,$,null,x,y,E,S,!0)}},Ae=(u,m,h,x,y,E,S)=>{if(h!==x){for(const A in x){if(jn(A))continue;const O=x[A],_=h[A];O!==_&&A!=="value"&&i(u,A,_,O,S,m.children,y,E,P)}if(h!==oe)for(const A in h)!jn(A)&&!(A in x)&&i(u,A,h[A],null,S,m.children,y,E,P);"value"in x&&i(u,"value",h.value,x.value)}},ot=(u,m,h,x,y,E,S,A,O)=>{const _=m.el=u?u.el:s(""),$=m.anchor=u?u.anchor:s("");let{patchFlag:M,dynamicChildren:j,slotScopeIds:B}=m;B&&(A=A?A.concat(B):B),u==null?(r(_,h,x),r($,h,x),re(m.children,h,$,y,E,S,A,O)):M>0&&M&64&&j&&u.dynamicChildren?(ve(u.dynamicChildren,j,h,y,E,S,A),(m.key!=null||y&&m===y.subTree)&&is(u,m,!0)):Ee(u,m,h,$,y,E,S,A,O)},Re=(u,m,h,x,y,E,S,A,O)=>{m.slotScopeIds=A,u==null?m.shapeFlag&512?y.ctx.activate(m,h,x,S,O):ue(m,h,x,y,E,S,O):de(u,m,O)},ue=(u,m,h,x,y,E,S)=>{const A=u.component=rf(u,x,y);if(Vo(u)&&(A.ctx.renderer=ie),af(A),A.asyncDep){if(y&&y.registerDep(A,ae),!u.el){const O=A.subTree=ge(Pt);w(null,O,m,h)}return}ae(A,u,m,h,y,E,S)},de=(u,m,h)=>{const x=m.component=u.component;if(mc(u,m,h))if(x.asyncDep&&!x.asyncResolved){J(x,m,h);return}else x.next=m,ic(x.update),x.update();else m.el=u.el,x.vnode=m},ae=(u,m,h,x,y,E,S)=>{const A=()=>{if(u.isMounted){let{next:$,bu:M,u:j,parent:B,vnode:X}=u,ee=$,te;_t(u,!1),$?($.el=X.el,J(u,$,S)):$=X,M&&Pr(M),(te=$.props&&$.props.onVnodeBeforeUpdate)&&He(te,B,$,X),_t(u,!0);const se=Sr(u),Me=u.subTree;u.subTree=se,C(Me,se,d(Me.el),F(Me),u,y,E),$.el=se.el,ee===null&&hc(u,se.el),j&&_e(j,y),(te=$.props&&$.props.onVnodeUpdated)&&_e(()=>He(te,B,$,X),y)}else{let $;const{el:M,props:j}=m,{bm:B,m:X,parent:ee}=u,te=Dn(m);if(_t(u,!1),B&&Pr(B),!te&&($=j&&j.onVnodeBeforeMount)&&He($,ee,m),_t(u,!0),M&&W){const se=()=>{u.subTree=Sr(u),W(M,u.subTree,u,y,null)};te?m.type.__asyncLoader().then(()=>!u.isUnmounted&&se()):se()}else{const se=u.subTree=Sr(u);C(null,se,h,x,u,y,E),m.el=se.el}if(X&&_e(X,y),!te&&($=j&&j.onVnodeMounted)){const se=m;_e(()=>He($,ee,se),y)}(m.shapeFlag&256||ee&&Dn(ee.vnode)&&ee.vnode.shapeFlag&256)&&u.a&&_e(u.a,y),u.isMounted=!0,m=h=x=null}},O=u.effect=new Ea(A,()=>Do(_),u.scope),_=u.update=()=>O.run();_.id=u.uid,_t(u,!0),_()},J=(u,m,h)=>{m.component=u;const x=u.vnode.props;u.vnode=m,u.next=null,Dc(u,m.props,x,h),Hc(u,m.children,h),Jt(),dr(void 0,u.update),Zt()},Ee=(u,m,h,x,y,E,S,A,O=!1)=>{const _=u&&u.children,$=u?u.shapeFlag:0,M=m.children,{patchFlag:j,shapeFlag:B}=m;if(j>0){if(j&128){Ge(_,M,h,x,y,E,S,A,O);return}else if(j&256){Tt(_,M,h,x,y,E,S,A,O);return}}B&8?($&16&&P(_,y,E),M!==_&&c(h,M)):$&16?B&16?Ge(_,M,h,x,y,E,S,A,O):P(_,y,E,!0):($&8&&c(h,""),B&16&&re(M,h,x,y,E,S,A,O))},Tt=(u,m,h,x,y,E,S,A,O)=>{u=u||Bt,m=m||Bt;const _=u.length,$=m.length,M=Math.min(_,$);let j;for(j=0;j<M;j++){const B=m[j]=O?dt(m[j]):Ye(m[j]);C(u[j],B,h,null,y,E,S,A,O)}_>$?P(u,y,E,!0,!1,M):re(m,h,x,y,E,S,A,O,M)},Ge=(u,m,h,x,y,E,S,A,O)=>{let _=0;const $=m.length;let M=u.length-1,j=$-1;for(;_<=M&&_<=j;){const B=u[_],X=m[_]=O?dt(m[_]):Ye(m[_]);if(an(B,X))C(B,X,h,null,y,E,S,A,O);else break;_++}for(;_<=M&&_<=j;){const B=u[M],X=m[j]=O?dt(m[j]):Ye(m[j]);if(an(B,X))C(B,X,h,null,y,E,S,A,O);else break;M--,j--}if(_>M){if(_<=j){const B=j+1,X=B<$?m[B].el:x;for(;_<=j;)C(null,m[_]=O?dt(m[_]):Ye(m[_]),h,X,y,E,S,A,O),_++}}else if(_>j)for(;_<=M;)Te(u[_],y,E,!0),_++;else{const B=_,X=_,ee=new Map;for(_=X;_<=j;_++){const Ce=m[_]=O?dt(m[_]):Ye(m[_]);Ce.key!=null&&ee.set(Ce.key,_)}let te,se=0;const Me=j-X+1;let It=!1,ei=0;const rn=new Array(Me);for(_=0;_<Me;_++)rn[_]=0;for(_=B;_<=M;_++){const Ce=u[_];if(se>=Me){Te(Ce,y,E,!0);continue}let Ue;if(Ce.key!=null)Ue=ee.get(Ce.key);else for(te=X;te<=j;te++)if(rn[te-X]===0&&an(Ce,m[te])){Ue=te;break}Ue===void 0?Te(Ce,y,E,!0):(rn[Ue-X]=_+1,Ue>=ei?ei=Ue:It=!0,C(Ce,m[Ue],h,null,y,E,S,A,O),se++)}const ti=It?Vc(rn):Bt;for(te=ti.length-1,_=Me-1;_>=0;_--){const Ce=X+_,Ue=m[Ce],ni=Ce+1<$?m[Ce+1].el:x;rn[_]===0?C(null,Ue,h,ni,y,E,S,A,O):It&&(te<0||_!==ti[te]?Be(Ue,h,ni,2):te--)}}},Be=(u,m,h,x,y=null)=>{const{el:E,type:S,transition:A,children:O,shapeFlag:_}=u;if(_&6){Be(u.component.subTree,m,h,x);return}if(_&128){u.suspense.move(m,h,x);return}if(_&64){S.move(u,m,h,ie);return}if(S===Ie){r(E,m,h);for(let M=0;M<O.length;M++)Be(O[M],m,h,x);r(u.anchor,m,h);return}if(S===Tr){L(u,m,h);return}if(x!==2&&_&1&&A)if(x===0)A.beforeEnter(E),r(E,m,h),_e(()=>A.enter(E),y);else{const{leave:M,delayLeave:j,afterLeave:B}=A,X=()=>r(E,m,h),ee=()=>{M(E,()=>{X(),B&&B()})};j?j(E,X,ee):ee()}else r(E,m,h)},Te=(u,m,h,x=!1,y=!1)=>{const{type:E,props:S,ref:A,children:O,dynamicChildren:_,shapeFlag:$,patchFlag:M,dirs:j}=u;if(A!=null&&Qr(A,null,h,u,!0),$&256){m.ctx.deactivate(u);return}const B=$&1&&j,X=!Dn(u);let ee;if(X&&(ee=S&&S.onVnodeBeforeUnmount)&&He(ee,m,u),$&6)N(u.component,h,x);else{if($&128){u.suspense.unmount(h,x);return}B&&wt(u,null,m,"beforeUnmount"),$&64?u.type.remove(u,m,h,y,ie,x):_&&(E!==Ie||M>0&&M&64)?P(_,m,h,!1,!0):(E===Ie&&M&384||!y&&$&16)&&P(O,m,h),x&&Cr(u)}(X&&(ee=S&&S.onVnodeUnmounted)||B)&&_e(()=>{ee&&He(ee,m,u),B&&wt(u,null,m,"unmounted")},h)},Cr=u=>{const{type:m,el:h,anchor:x,transition:y}=u;if(m===Ie){b(h,x);return}if(m===Tr){D(u);return}const E=()=>{a(h),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:S,delayLeave:A}=y,O=()=>S(h,E);A?A(u.el,E,O):O()}else E()},b=(u,m)=>{let h;for(;u!==m;)h=p(u),a(u),u=h;a(m)},N=(u,m,h)=>{const{bum:x,scope:y,update:E,subTree:S,um:A}=u;x&&Pr(x),y.stop(),E&&(E.active=!1,Te(S,u,m,h)),A&&_e(A,m),_e(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},P=(u,m,h,x=!1,y=!1,E=0)=>{for(let S=E;S<u.length;S++)Te(u[S],m,h,x,y)},F=u=>u.shapeFlag&6?F(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),Z=(u,m,h)=>{u==null?m._vnode&&Te(m._vnode,null,null,!0):C(m._vnode||null,u,m,null,null,null,h),Ho(),m._vnode=u},ie={p:C,um:Te,m:Be,r:Cr,mt:ue,mc:re,pc:Ee,pbc:ve,n:F,o:e};let Y,W;return t&&([Y,W]=t(ie)),{render:Z,hydrate:Y,createApp:Kc(Z,Y)}}function _t({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function is(e,t,n=!1){const r=e.children,a=t.children;if(H(r)&&H(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=dt(a[i]),s.el=o.el),n||is(o,s))}}function Vc(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Gc=e=>e.__isTeleport,Ie=Symbol(void 0),Fa=Symbol(void 0),Pt=Symbol(void 0),Tr=Symbol(void 0),hn=[];let $e=null;function ke(e=!1){hn.push($e=e?null:[])}function Xc(){hn.pop(),$e=hn[hn.length-1]||null}let Cn=1;function xi(e){Cn+=e}function os(e){return e.dynamicChildren=Cn>0?$e||Bt:null,Xc(),Cn>0&&$e&&$e.push(e),e}function Ke(e,t,n,r,a,i){return os(bt(e,t,n,r,a,i,!0))}function Xn(e,t,n,r,a){return os(ge(e,t,n,r,a,!0))}function Jr(e){return e?e.__v_isVNode===!0:!1}function an(e,t){return e.type===t.type&&e.key===t.key}const gr="__vInternal",ss=({key:e})=>e!=null?e:null,Bn=({ref:e,ref_key:t,ref_for:n})=>e!=null?me(e)||fe(e)||K(e)?{i:Le,r:e,k:t,f:!!n}:e:null;function bt(e,t=null,n=null,r=0,a=null,i=e===Ie?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ss(t),ref:t&&Bn(t),scopeId:mr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(La(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=me(n)?8:16),Cn>0&&!o&&$e&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&$e.push(l),l}const ge=Qc;function Qc(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Tc)&&(e=Pt),Jr(e)){const s=Yt(e,t,!0);return n&&La(s,n),Cn>0&&!i&&$e&&(s.shapeFlag&6?$e[$e.indexOf(e)]=s:$e.push(s)),s.patchFlag|=-2,s}if(ff(e)&&(e=e.__vccOpts),t){t=Jc(t);let{class:s,style:l}=t;s&&!me(s)&&(t.class=Wt(s)),he(l)&&(No(l)&&!H(l)&&(l=ye({},l)),t.style=Xt(l))}const o=me(e)?1:gc(e)?128:Gc(e)?64:he(e)?4:K(e)?2:0;return bt(e,t,n,r,a,o,i,!0)}function Jc(e){return e?No(e)||gr in e?ye({},e):e:null}function Yt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?ef(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&ss(s),ref:t&&t.ref?n&&a?H(a)?a.concat(Bn(t)):[a,Bn(t)]:Bn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ie?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Yt(e.ssContent),ssFallback:e.ssFallback&&Yt(e.ssFallback),el:e.el,anchor:e.anchor}}function Zc(e=" ",t=0){return ge(Fa,null,e,t)}function Qn(e="",t=!1){return t?(ke(),Xn(Pt,null,e)):ge(Pt,null,e)}function Ye(e){return e==null||typeof e=="boolean"?ge(Pt):H(e)?ge(Ie,null,e.slice()):typeof e=="object"?dt(e):ge(Fa,null,String(e))}function dt(e){return e.el===null||e.memo?e:Yt(e)}function La(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),La(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(gr in t)?t._ctx=Le:a===3&&Le&&(Le.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else K(t)?(t={default:t,_ctx:Le},n=32):(t=String(t),r&64?(n=16,t=[Zc(t)]):n=8);e.children=t,e.shapeFlag|=n}function ef(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Wt([t.class,r.class]));else if(a==="style")t.style=Xt([t.style,r.style]);else if(ir(a)){const i=t[a],o=r[a];o&&i!==o&&!(H(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function He(e,t,n,r=null){De(e,t,7,[n,r])}const tf=as();let nf=0;function rf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||tf,i={uid:nf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new wo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:es(r,a),emitsOptions:Ko(r,a),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:r.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=lc.bind(null,i),e.ce&&e.ce(i),i}let pe=null;const ls=()=>pe||Le,qt=e=>{pe=e,e.scope.on()},Ot=()=>{pe&&pe.scope.off(),pe=null};function cs(e){return e.vnode.shapeFlag&4}let On=!1;function af(e,t=!1){On=t;const{props:n,children:r}=e.vnode,a=cs(e);zc(e,n,a,t),Uc(e,r);const i=a?of(e,t):void 0;return On=!1,i}function of(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Kt(new Proxy(e.ctx,Mc));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?lf(e):null;qt(e),Jt();const i=gt(r,e,0,[e.props,a]);if(Zt(),Ot(),xo(i)){if(i.then(Ot,Ot),t)return i.then(o=>{wi(e,o,t)}).catch(o=>{ur(o,e,0)});e.asyncDep=i}else wi(e,i,t)}else fs(e,t)}function wi(e,t,n){K(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:he(t)&&(e.setupState=jo(t)),fs(e,n)}let _i;function fs(e,t,n){const r=e.type;if(!e.render){if(!t&&_i&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=ye(ye({isCustomElement:i,delimiters:s},o),l);r.render=_i(a,f)}}e.render=r.render||ze}qt(e),Jt(),Nc(e),Zt(),Ot()}function sf(e){return new Proxy(e.attrs,{get(t,n){return Pe(e,"get","$attrs"),t[n]}})}function lf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=sf(e))},slots:e.slots,emit:e.emit,expose:t}}function $a(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(jo(Kt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Vn)return Vn[n](e)}}))}function cf(e,t=!0){return K(e)?e.displayName||e.name:e.name||t&&e.__name}function ff(e){return K(e)&&"__vccOpts"in e}const ce=(e,t)=>nc(e,t,On);function vr(e,t,n){const r=arguments.length;return r===2?he(t)&&!H(t)?Jr(t)?ge(e,null,[t]):ge(e,t):ge(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Jr(n)&&(n=[n]),ge(e,t,n))}const uf="3.2.37",df="http://www.w3.org/2000/svg",At=typeof document!="undefined"?document:null,ki=At&&At.createElement("template"),pf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?At.createElementNS(df,e):At.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>At.createTextNode(e),createComment:e=>At.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>At.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ki.innerHTML=r?`<svg>${e}</svg>`:e;const s=ki.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function mf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function hf(e,t,n){const r=e.style,a=me(n);if(n&&!a){for(const i in n)Zr(r,i,n[i]);if(t&&!me(t))for(const i in t)n[i]==null&&Zr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ai=/\s*!important$/;function Zr(e,t,n){if(H(n))n.forEach(r=>Zr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=gf(e,t);Ai.test(n)?e.setProperty(Qt(r),n.replace(Ai,""),"important"):e[r]=n}}const Ei=["Webkit","Moz","ms"],Ir={};function gf(e,t){const n=Ir[t];if(n)return n;let r=Ve(t);if(r!=="filter"&&r in e)return Ir[t]=r;r=lr(r);for(let a=0;a<Ei.length;a++){const i=Ei[a]+r;if(i in e)return Ir[t]=i}return t}const Ci="http://www.w3.org/1999/xlink";function vf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ci,t.slice(6,t.length)):e.setAttributeNS(Ci,t,n);else{const i=sl(t);n==null||i&&!yo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function bf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=yo(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[us,yf]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let ea=0;const xf=Promise.resolve(),wf=()=>{ea=0},_f=()=>ea||(xf.then(wf),ea=us());function kf(e,t,n,r){e.addEventListener(t,n,r)}function Af(e,t,n,r){e.removeEventListener(t,n,r)}function Ef(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Cf(t);if(r){const f=i[t]=Of(r,a);kf(e,s,f,l)}else o&&(Af(e,s,o,l),i[t]=void 0)}}const Oi=/(?:Once|Passive|Capture)$/;function Cf(e){let t;if(Oi.test(e)){t={};let n;for(;n=e.match(Oi);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Qt(e.slice(2)),t]}function Of(e,t){const n=r=>{const a=r.timeStamp||us();(yf||a>=n.attached-1)&&De(Pf(r,n.value),t,5,[r])};return n.value=e,n.attached=_f(),n}function Pf(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Pi=/^on[a-z]/,Sf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?mf(e,r,a):t==="style"?hf(e,n,r):ir(t)?xa(t)||Ef(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Rf(e,t,r,a))?bf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),vf(e,t,r,a))};function Rf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Pi.test(t)&&K(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Pi.test(t)&&me(n)?!1:t in e}const Tf=ye({patchProp:Sf},pf);let Si;function If(){return Si||(Si=Yc(Tf))}const Mf=(...e)=>{const t=If().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Nf(r);if(!a)return;const i=t._component;!K(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Nf(e){return me(e)?document.querySelector(e):e}var Ff=!1;/*!
  * pinia v2.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let ds;const br=e=>ds=e,ps=Symbol();function ta(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var gn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(gn||(gn={}));function Lf(){const e=_o(!0),t=e.run(()=>fr({}));let n=[],r=[];const a=Kt({install(i){br(a),a._a=i,i.provide(ps,a),i.config.globalProperties.$pinia=a,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Ff?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return a}const ms=()=>{};function Ri(e,t,n,r=ms){e.push(t);const a=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&ls()&&Ma(a),a}function Mt(e,...t){e.slice().forEach(n=>{n(...t)})}function na(e,t){for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],a=e[n];ta(a)&&ta(r)&&e.hasOwnProperty(n)&&!fe(r)&&!ht(r)?e[n]=na(a,r):e[n]=r}return e}const $f=Symbol();function jf(e){return!ta(e)||!e.hasOwnProperty($f)}const{assign:Xe}=Object;function zf(e){return!!(fe(e)&&e.effect)}function Df(e,t,n,r){const{state:a,actions:i,getters:o}=t,s=n.state.value[e];let l;function f(){s||(n.state.value[e]=a?a():{});const c=Jl(n.state.value[e]);return Xe(c,i,Object.keys(o||{}).reduce((d,p)=>(d[p]=Kt(ce(()=>{br(n);const v=n._s.get(e);return o[p].call(v,v)})),d),{}))}return l=hs(e,f,t,n,r,!0),l.$reset=function(){const d=a?a():{};this.$patch(p=>{Xe(p,d)})},l}function hs(e,t,n={},r,a,i){let o;const s=Xe({actions:{}},n),l={deep:!0};let f,c,d=Kt([]),p=Kt([]),v;const k=r.state.value[e];!i&&!k&&(r.state.value[e]={}),fr({});let I;function C(U){let q;f=c=!1,typeof U=="function"?(U(r.state.value[e]),q={type:gn.patchFunction,storeId:e,events:v}):(na(r.state.value[e],U),q={type:gn.patchObject,payload:U,storeId:e,events:v});const re=I=Symbol();Ia().then(()=>{I===re&&(f=!0)}),c=!0,Mt(d,q,r.state.value[e])}const g=ms;function w(){o.stop(),d=[],p=[],r._s.delete(e)}function R(U,q){return function(){br(r);const re=Array.from(arguments),xe=[],ve=[];function Ae(ue){xe.push(ue)}function ot(ue){ve.push(ue)}Mt(p,{args:re,name:U,store:D,after:Ae,onError:ot});let Re;try{Re=q.apply(this&&this.$id===e?this:D,re)}catch(ue){throw Mt(ve,ue),ue}return Re instanceof Promise?Re.then(ue=>(Mt(xe,ue),ue)).catch(ue=>(Mt(ve,ue),Promise.reject(ue))):(Mt(xe,Re),Re)}}const L={_p:r,$id:e,$onAction:Ri.bind(null,p),$patch:C,$reset:g,$subscribe(U,q={}){const re=Ri(d,U,q.detached,()=>xe()),xe=o.run(()=>Ut(()=>r.state.value[e],ve=>{(q.flush==="sync"?c:f)&&U({storeId:e,type:gn.direct,events:v},ve)},Xe({},l,q)));return re},$dispose:w},D=en(Xe({},L));r._s.set(e,D);const V=r._e.run(()=>(o=_o(),o.run(()=>t())));for(const U in V){const q=V[U];if(fe(q)&&!zf(q)||ht(q))i||(k&&jf(q)&&(fe(q)?q.value=k[U]:na(q,k[U])),r.state.value[e][U]=q);else if(typeof q=="function"){const re=R(U,q);V[U]=re,s.actions[U]=q}}return Xe(D,V),Xe(Q(D),V),Object.defineProperty(D,"$state",{get:()=>r.state.value[e],set:U=>{C(q=>{Xe(q,U)})}}),r._p.forEach(U=>{Xe(D,o.run(()=>U({store:D,app:r._a,pinia:r,options:s})))}),k&&i&&n.hydrate&&n.hydrate(D.$state,k),f=!0,c=!0,D}function Bf(e,t,n){let r,a;const i=typeof t=="function";typeof e=="string"?(r=e,a=i?n:t):(a=e,r=e.id);function o(s,l){const f=ls();return s=s||f&&Je(ps),s&&br(s),s=ds,s._s.has(r)||(i?hs(r,t,a,s):Df(r,a,s)),s._s.get(r)}return o.$id=r,o}var Rn=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n};const Uf={};function Hf(e,t){const n=mn("RouterView");return ke(),Xn(n)}var Wf=Rn(Uf,[["render",Hf]]);/*!
  * vue-router v4.0.16
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const gs=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",tn=e=>gs?Symbol(e):"_vr_"+e,Kf=tn("rvlm"),Ti=tn("rvd"),ja=tn("r"),vs=tn("rl"),ra=tn("rvl"),$t=typeof window!="undefined";function Yf(e){return e.__esModule||gs&&e[Symbol.toStringTag]==="Module"}const ne=Object.assign;function Mr(e,t){const n={};for(const r in t){const a=t[r];n[r]=Array.isArray(a)?a.map(e):e(a)}return n}const vn=()=>{},qf=/\/$/,Vf=e=>e.replace(qf,"");function Nr(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("?"),l=t.indexOf("#",s>-1?s:0);return s>-1&&(r=t.slice(0,s),i=t.slice(s+1,l>-1?l:t.length),a=e(i)),l>-1&&(r=r||t.slice(0,l),o=t.slice(l,t.length)),r=Jf(r!=null?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function Gf(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ii(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Xf(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Vt(t.matched[r],n.matched[a])&&bs(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Vt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function bs(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Qf(e[n],t[n]))return!1;return!0}function Qf(e,t){return Array.isArray(e)?Mi(e,t):Array.isArray(t)?Mi(t,e):e===t}function Mi(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Jf(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let a=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(a===1||o==="."))if(o==="..")a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Pn;(function(e){e.pop="pop",e.push="push"})(Pn||(Pn={}));var bn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(bn||(bn={}));function Zf(e){if(!e)if($t){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Vf(e)}const eu=/^[^#]+#/;function tu(e,t){return e.replace(eu,"#")+t}function nu(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const yr=()=>({left:window.pageXOffset,top:window.pageYOffset});function ru(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=nu(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ni(e,t){return(history.state?history.state.position-t:-1)+e}const aa=new Map;function au(e,t){aa.set(e,t)}function iu(e){const t=aa.get(e);return aa.delete(e),t}let ou=()=>location.protocol+"//"+location.host;function ys(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),Ii(l,"")}return Ii(n,e)+r+a}function su(e,t,n,r){let a=[],i=[],o=null;const s=({state:p})=>{const v=ys(e,location),k=n.value,I=t.value;let C=0;if(p){if(n.value=v,t.value=p,o&&o===k){o=null;return}C=I?p.position-I.position:0}else r(v);a.forEach(g=>{g(n.value,k,{delta:C,type:Pn.pop,direction:C?C>0?bn.forward:bn.back:bn.unknown})})};function l(){o=n.value}function f(p){a.push(p);const v=()=>{const k=a.indexOf(p);k>-1&&a.splice(k,1)};return i.push(v),v}function c(){const{history:p}=window;!p.state||p.replaceState(ne({},p.state,{scroll:yr()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c),{pauseListeners:l,listen:f,destroy:d}}function Fi(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?yr():null}}function lu(e){const{history:t,location:n}=window,r={value:ys(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,f,c){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:ou()+e+l;try{t[c?"replaceState":"pushState"](f,"",p),a.value=f}catch(v){console.error(v),n[c?"replace":"assign"](p)}}function o(l,f){const c=ne({},t.state,Fi(a.value.back,l,a.value.forward,!0),f,{position:a.value.position});i(l,c,!0),r.value=l}function s(l,f){const c=ne({},a.value,t.state,{forward:l,scroll:yr()});i(c.current,c,!0);const d=ne({},Fi(r.value,l,null),{position:c.position+1},f);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function cu(e){e=Zf(e);const t=lu(e),n=su(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=ne({location:"",base:e,go:r,createHref:tu.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function fu(e){return typeof e=="string"||e&&typeof e=="object"}function xs(e){return typeof e=="string"||typeof e=="symbol"}const lt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ws=tn("nf");var Li;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Li||(Li={}));function Gt(e,t){return ne(new Error,{type:e,[ws]:!0},t)}function ct(e,t){return e instanceof Error&&ws in e&&(t==null||!!(e.type&t))}const $i="[^/]+?",uu={sensitive:!1,strict:!1,start:!0,end:!0},du=/[.+*?^${}()[\]/\\]/g;function pu(e,t){const n=ne({},uu,t),r=[];let a=n.start?"^":"";const i=[];for(const f of e){const c=f.length?[]:[90];n.strict&&!f.length&&(a+="/");for(let d=0;d<f.length;d++){const p=f[d];let v=40+(n.sensitive?.25:0);if(p.type===0)d||(a+="/"),a+=p.value.replace(du,"\\$&"),v+=40;else if(p.type===1){const{value:k,repeatable:I,optional:C,regexp:g}=p;i.push({name:k,repeatable:I,optional:C});const w=g||$i;if(w!==$i){v+=10;try{new RegExp(`(${w})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${k}" (${w}): `+L.message)}}let R=I?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;d||(R=C&&f.length<2?`(?:/${R})`:"/"+R),C&&(R+="?"),a+=R,v+=20,C&&(v+=-8),I&&(v+=-20),w===".*"&&(v+=-50)}c.push(v)}r.push(c)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(f){const c=f.match(o),d={};if(!c)return null;for(let p=1;p<c.length;p++){const v=c[p]||"",k=i[p-1];d[k.name]=v&&k.repeatable?v.split("/"):v}return d}function l(f){let c="",d=!1;for(const p of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const v of p)if(v.type===0)c+=v.value;else if(v.type===1){const{value:k,repeatable:I,optional:C}=v,g=k in f?f[k]:"";if(Array.isArray(g)&&!I)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const w=Array.isArray(g)?g.join("/"):g;if(!w)if(C)p.length<2&&e.length>1&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${k}"`);c+=w}}return c}return{re:o,score:r,keys:i,parse:s,stringify:l}}function mu(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function hu(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=mu(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(ji(r))return 1;if(ji(a))return-1}return a.length-r.length}function ji(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const gu={type:0,value:""},vu=/[a-zA-Z0-9_]/;function bu(e){if(!e)return[[]];if(e==="/")return[[gu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(v){throw new Error(`ERR (${n})/"${f}": ${v}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,f="",c="";function d(){!f||(n===0?i.push({type:0,value:f}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function p(){f+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(f&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:vu.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),d(),o(),a}function yu(e,t,n){const r=pu(bu(e.path),n),a=ne(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function xu(e,t){const n=[],r=new Map;t=Di({strict:!1,end:!0,sensitive:!1},t);function a(c){return r.get(c)}function i(c,d,p){const v=!p,k=_u(c);k.aliasOf=p&&p.record;const I=Di(t,c),C=[k];if("alias"in c){const R=typeof c.alias=="string"?[c.alias]:c.alias;for(const L of R)C.push(ne({},k,{components:p?p.record.components:k.components,path:L,aliasOf:p?p.record:k}))}let g,w;for(const R of C){const{path:L}=R;if(d&&L[0]!=="/"){const D=d.record.path,V=D[D.length-1]==="/"?"":"/";R.path=d.record.path+(L&&V+L)}if(g=yu(R,d,I),p?p.alias.push(g):(w=w||g,w!==g&&w.alias.push(g),v&&c.name&&!zi(g)&&o(c.name)),"children"in k){const D=k.children;for(let V=0;V<D.length;V++)i(D[V],g,p&&p.children[V])}p=p||g,l(g)}return w?()=>{o(w)}:vn}function o(c){if(xs(c)){const d=r.get(c);d&&(r.delete(c),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(c);d>-1&&(n.splice(d,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function s(){return n}function l(c){let d=0;for(;d<n.length&&hu(c,n[d])>=0&&(c.record.path!==n[d].record.path||!_s(c,n[d]));)d++;n.splice(d,0,c),c.record.name&&!zi(c)&&r.set(c.record.name,c)}function f(c,d){let p,v={},k,I;if("name"in c&&c.name){if(p=r.get(c.name),!p)throw Gt(1,{location:c});I=p.record.name,v=ne(wu(d.params,p.keys.filter(w=>!w.optional).map(w=>w.name)),c.params),k=p.stringify(v)}else if("path"in c)k=c.path,p=n.find(w=>w.re.test(k)),p&&(v=p.parse(k),I=p.record.name);else{if(p=d.name?r.get(d.name):n.find(w=>w.re.test(d.path)),!p)throw Gt(1,{location:c,currentLocation:d});I=p.record.name,v=ne({},d.params,c.params),k=p.stringify(v)}const C=[];let g=p;for(;g;)C.unshift(g.record),g=g.parent;return{name:I,path:k,params:v,matched:C,meta:Au(C)}}return e.forEach(c=>i(c)),{addRoute:i,resolve:f,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function wu(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function _u(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ku(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function ku(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function zi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Au(e){return e.reduce((t,n)=>ne(t,n.meta),{})}function Di(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function _s(e,t){return t.children.some(n=>n===e||_s(e,n))}const ks=/#/g,Eu=/&/g,Cu=/\//g,Ou=/=/g,Pu=/\?/g,As=/\+/g,Su=/%5B/g,Ru=/%5D/g,Es=/%5E/g,Tu=/%60/g,Cs=/%7B/g,Iu=/%7C/g,Os=/%7D/g,Mu=/%20/g;function za(e){return encodeURI(""+e).replace(Iu,"|").replace(Su,"[").replace(Ru,"]")}function Nu(e){return za(e).replace(Cs,"{").replace(Os,"}").replace(Es,"^")}function ia(e){return za(e).replace(As,"%2B").replace(Mu,"+").replace(ks,"%23").replace(Eu,"%26").replace(Tu,"`").replace(Cs,"{").replace(Os,"}").replace(Es,"^")}function Fu(e){return ia(e).replace(Ou,"%3D")}function Lu(e){return za(e).replace(ks,"%23").replace(Pu,"%3F")}function $u(e){return e==null?"":Lu(e).replace(Cu,"%2F")}function Jn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function ju(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(As," "),o=i.indexOf("="),s=Jn(o<0?i:i.slice(0,o)),l=o<0?null:Jn(i.slice(o+1));if(s in t){let f=t[s];Array.isArray(f)||(f=t[s]=[f]),f.push(l)}else t[s]=l}return t}function Bi(e){let t="";for(let n in e){const r=e[n];if(n=Fu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&ia(i)):[r&&ia(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function zu(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Array.isArray(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}function on(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function pt(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(Gt(4,{from:n,to:t})):d instanceof Error?s(d):fu(d)?s(Gt(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},f=e.call(r&&r.instances[a],t,n,l);let c=Promise.resolve(f);e.length<3&&(c=c.then(l)),c.catch(d=>s(d))})}function Fr(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Du(s)){const f=(s.__vccOpts||s)[t];f&&a.push(pt(f,n,r,i,o))}else{let l=s();a.push(()=>l.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const c=Yf(f)?f.default:f;i.components[o]=c;const p=(c.__vccOpts||c)[t];return p&&pt(p,n,r,i,o)()}))}}return a}function Du(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ui(e){const t=Je(ja),n=Je(vs),r=ce(()=>t.resolve(un(e.to))),a=ce(()=>{const{matched:l}=r.value,{length:f}=l,c=l[f-1],d=n.matched;if(!c||!d.length)return-1;const p=d.findIndex(Vt.bind(null,c));if(p>-1)return p;const v=Hi(l[f-2]);return f>1&&Hi(c)===v&&d[d.length-1].path!==v?d.findIndex(Vt.bind(null,l[f-2])):p}),i=ce(()=>a.value>-1&&Wu(n.params,r.value.params)),o=ce(()=>a.value>-1&&a.value===n.matched.length-1&&bs(n.params,r.value.params));function s(l={}){return Hu(l)?t[un(e.replace)?"replace":"push"](un(e.to)).catch(vn):Promise.resolve()}return{route:r,href:ce(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const Bu=rt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ui,setup(e,{slots:t}){const n=en(Ui(e)),{options:r}=Je(ja),a=ce(()=>({[Wi(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Wi(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:vr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),Uu=Bu;function Hu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Wu(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!Array.isArray(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function Hi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Wi=(e,t,n)=>e!=null?e:t!=null?t:n,Ku=rt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Je(ra),a=ce(()=>e.route||r.value),i=Je(Ti,0),o=ce(()=>a.value.matched[i]);zn(Ti,i+1),zn(Kf,o),zn(ra,a);const s=fr();return Ut(()=>[s.value,o.value,e.name],([l,f,c],[d,p,v])=>{f&&(f.instances[c]=l,p&&p!==f&&l&&l===d&&(f.leaveGuards.size||(f.leaveGuards=p.leaveGuards),f.updateGuards.size||(f.updateGuards=p.updateGuards))),l&&f&&(!p||!Vt(f,p)||!d)&&(f.enterCallbacks[c]||[]).forEach(k=>k(l))},{flush:"post"}),()=>{const l=a.value,f=o.value,c=f&&f.components[e.name],d=e.name;if(!c)return Ki(n.default,{Component:c,route:l});const p=f.props[e.name],v=p?p===!0?l.params:typeof p=="function"?p(l):p:null,I=vr(c,ne({},v,t,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(f.instances[d]=null)},ref:s}));return Ki(n.default,{Component:I,route:l})||I}}});function Ki(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Yu=Ku;function qu(e){const t=xu(e.routes,e),n=e.parseQuery||ju,r=e.stringifyQuery||Bi,a=e.history,i=on(),o=on(),s=on(),l=Gl(lt);let f=lt;$t&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Mr.bind(null,b=>""+b),d=Mr.bind(null,$u),p=Mr.bind(null,Jn);function v(b,N){let P,F;return xs(b)?(P=t.getRecordMatcher(b),F=N):F=b,t.addRoute(F,P)}function k(b){const N=t.getRecordMatcher(b);N&&t.removeRoute(N)}function I(){return t.getRoutes().map(b=>b.record)}function C(b){return!!t.getRecordMatcher(b)}function g(b,N){if(N=ne({},N||l.value),typeof b=="string"){const W=Nr(n,b,N.path),u=t.resolve({path:W.path},N),m=a.createHref(W.fullPath);return ne(W,u,{params:p(u.params),hash:Jn(W.hash),redirectedFrom:void 0,href:m})}let P;if("path"in b)P=ne({},b,{path:Nr(n,b.path,N.path).path});else{const W=ne({},b.params);for(const u in W)W[u]==null&&delete W[u];P=ne({},b,{params:d(b.params)}),N.params=d(N.params)}const F=t.resolve(P,N),Z=b.hash||"";F.params=c(p(F.params));const ie=Gf(r,ne({},b,{hash:Nu(Z),path:F.path})),Y=a.createHref(ie);return ne({fullPath:ie,hash:Z,query:r===Bi?zu(b.query):b.query||{}},F,{redirectedFrom:void 0,href:Y})}function w(b){return typeof b=="string"?Nr(n,b,l.value.path):ne({},b)}function R(b,N){if(f!==b)return Gt(8,{from:N,to:b})}function L(b){return U(b)}function D(b){return L(ne(w(b),{replace:!0}))}function V(b){const N=b.matched[b.matched.length-1];if(N&&N.redirect){const{redirect:P}=N;let F=typeof P=="function"?P(b):P;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=w(F):{path:F},F.params={}),ne({query:b.query,hash:b.hash,params:b.params},F)}}function U(b,N){const P=f=g(b),F=l.value,Z=b.state,ie=b.force,Y=b.replace===!0,W=V(P);if(W)return U(ne(w(W),{state:Z,force:ie,replace:Y}),N||P);const u=P;u.redirectedFrom=N;let m;return!ie&&Xf(r,F,P)&&(m=Gt(16,{to:u,from:F}),Tt(F,F,!0,!1)),(m?Promise.resolve(m):re(u,F)).catch(h=>ct(h)?ct(h,2)?h:Ee(h):ae(h,u,F)).then(h=>{if(h){if(ct(h,2))return U(ne(w(h.to),{state:Z,force:ie,replace:Y}),N||u)}else h=ve(u,F,!0,Y,Z);return xe(u,F,h),h})}function q(b,N){const P=R(b,N);return P?Promise.reject(P):Promise.resolve()}function re(b,N){let P;const[F,Z,ie]=Vu(b,N);P=Fr(F.reverse(),"beforeRouteLeave",b,N);for(const W of F)W.leaveGuards.forEach(u=>{P.push(pt(u,b,N))});const Y=q.bind(null,b,N);return P.push(Y),Nt(P).then(()=>{P=[];for(const W of i.list())P.push(pt(W,b,N));return P.push(Y),Nt(P)}).then(()=>{P=Fr(Z,"beforeRouteUpdate",b,N);for(const W of Z)W.updateGuards.forEach(u=>{P.push(pt(u,b,N))});return P.push(Y),Nt(P)}).then(()=>{P=[];for(const W of b.matched)if(W.beforeEnter&&!N.matched.includes(W))if(Array.isArray(W.beforeEnter))for(const u of W.beforeEnter)P.push(pt(u,b,N));else P.push(pt(W.beforeEnter,b,N));return P.push(Y),Nt(P)}).then(()=>(b.matched.forEach(W=>W.enterCallbacks={}),P=Fr(ie,"beforeRouteEnter",b,N),P.push(Y),Nt(P))).then(()=>{P=[];for(const W of o.list())P.push(pt(W,b,N));return P.push(Y),Nt(P)}).catch(W=>ct(W,8)?W:Promise.reject(W))}function xe(b,N,P){for(const F of s.list())F(b,N,P)}function ve(b,N,P,F,Z){const ie=R(b,N);if(ie)return ie;const Y=N===lt,W=$t?history.state:{};P&&(F||Y?a.replace(b.fullPath,ne({scroll:Y&&W&&W.scroll},Z)):a.push(b.fullPath,Z)),l.value=b,Tt(b,N,P,Y),Ee()}let Ae;function ot(){Ae||(Ae=a.listen((b,N,P)=>{const F=g(b),Z=V(F);if(Z){U(ne(Z,{replace:!0}),F).catch(vn);return}f=F;const ie=l.value;$t&&au(Ni(ie.fullPath,P.delta),yr()),re(F,ie).catch(Y=>ct(Y,12)?Y:ct(Y,2)?(U(Y.to,F).then(W=>{ct(W,20)&&!P.delta&&P.type===Pn.pop&&a.go(-1,!1)}).catch(vn),Promise.reject()):(P.delta&&a.go(-P.delta,!1),ae(Y,F,ie))).then(Y=>{Y=Y||ve(F,ie,!1),Y&&(P.delta?a.go(-P.delta,!1):P.type===Pn.pop&&ct(Y,20)&&a.go(-1,!1)),xe(F,ie,Y)}).catch(vn)}))}let Re=on(),ue=on(),de;function ae(b,N,P){Ee(b);const F=ue.list();return F.length?F.forEach(Z=>Z(b,N,P)):console.error(b),Promise.reject(b)}function J(){return de&&l.value!==lt?Promise.resolve():new Promise((b,N)=>{Re.add([b,N])})}function Ee(b){return de||(de=!b,ot(),Re.list().forEach(([N,P])=>b?P(b):N()),Re.reset()),b}function Tt(b,N,P,F){const{scrollBehavior:Z}=e;if(!$t||!Z)return Promise.resolve();const ie=!P&&iu(Ni(b.fullPath,0))||(F||!P)&&history.state&&history.state.scroll||null;return Ia().then(()=>Z(b,N,ie)).then(Y=>Y&&ru(Y)).catch(Y=>ae(Y,b,N))}const Ge=b=>a.go(b);let Be;const Te=new Set;return{currentRoute:l,addRoute:v,removeRoute:k,hasRoute:C,getRoutes:I,resolve:g,options:e,push:L,replace:D,go:Ge,back:()=>Ge(-1),forward:()=>Ge(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:ue.add,isReady:J,install(b){const N=this;b.component("RouterLink",Uu),b.component("RouterView",Yu),b.config.globalProperties.$router=N,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>un(l)}),$t&&!Be&&l.value===lt&&(Be=!0,L(a.location).catch(Z=>{}));const P={};for(const Z in lt)P[Z]=ce(()=>l.value[Z]);b.provide(ja,N),b.provide(vs,en(P)),b.provide(ra,l);const F=b.unmount;Te.add(b),b.unmount=function(){Te.delete(b),Te.size<1&&(f=lt,Ae&&Ae(),Ae=null,l.value=lt,Be=!1,de=!1),F()}}}}function Nt(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Vu(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(f=>Vt(f,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(f=>Vt(f,l))||a.push(l))}return[n,r,a]}const Gu=Bf({id:"global",state:()=>({characters:[{name:"Locke",isRecruited:!0,isBackrow:!0,pos:0,nextTurn:100,speed:219,phys:20,mag:10,level:1,exp:0,hpMax:100,hpCurrent:100,mpMax:0,mpCurrent:0,wpn:null,head:null,armor:null,relic:null,relic2:null,abilities:["Fight","Convert","Rage","Darkness"],levelUp:[[1,1,3,1,100],[2,1,4,2,250],[3,2,5,3,600]]},{name:"Cecil",isRecruited:!0,isBackrow:!1,pos:1,nextTurn:100,speed:5,phys:20,mag:10,level:1,exp:0,hpMax:100,hpCurrent:100,mpMax:0,mpCurrent:0,wpn:null,head:null,armor:null,relic:null,relic2:null,abilities:["Fight","Convert","Rage","Darkness"],levelUp:[[1,1,3,1,100],[2,1,4,2,250],[3,2,5,3,600]]},{name:"Rydia",isRecruited:!0,isBackrow:!0,pos:2,nextTurn:100,speed:3,phys:2,mag:30,level:1,exp:0,hpMax:60,hpCurrent:60,mpMax:100,mpCurrent:100,wpn:null,head:null,armor:null,relic:null,relic2:null,abilities:["Fight","Summon","Black Magic"],levelUp:[[1,1,1,3,100],[2,1,1,5,250],[3,2,2,6,600]]},{name:"X",isRecruited:!0,isBackrow:!1,pos:3,nextTurn:100,speed:28,phys:28,mag:28,level:1,exp:0,hpMax:60,hpCurrent:60,mpMax:100,mpCurrent:100,wpn:null,head:null,armor:null,relic:null,relic2:null,abilities:["Fight"],levelUp:[[1,1,1,3,100],[2,1,1,5,250],[3,2,2,6,600]]}],selectedCharacter:null,enemies:[{name:"Goblin",pos:0,nextTurn:100,speed:50,phys:1,mag:1,level:1,exp:2,hpMax:20,hpCurrent:20,mpMax:0,mpCurrent:0,abilities:["Fight"]},{name:"Bat",pos:1,nextTurn:100,speed:50,phys:1,mag:1,level:1,exp:2,hpMax:20,hpCurrent:20,mpMax:0,mpCurrent:0,abilities:["Fight"]},{name:"Goblin",pos:2,nextTurn:100,speed:50,phys:1,mag:1,level:1,exp:2,hpMax:20,hpCurrent:20,mpMax:0,mpCurrent:0,abilities:["Fight"]},{name:"Bat",pos:3,nextTurn:100,speed:50,phys:1,mag:1,level:1,exp:2,hpMax:20,hpCurrent:20,mpMax:0,mpCurrent:0,abilities:["Fight"]},{name:"Goblin",pos:4,nextTurn:100,speed:50,phys:1,mag:1,level:1,exp:2,hpMax:20,hpCurrent:20,mpMax:0,mpCurrent:0,abilities:["Fight"]},{name:"Bat",pos:5,nextTurn:100,speed:50,phys:1,mag:1,level:1,exp:2,hpMax:20,hpCurrent:20,mpMax:0,mpCurrent:0,abilities:["Fight"]},{name:"Goblin",pos:6,nextTurn:100,speed:50,phys:1,mag:1,level:1,exp:2,hpMax:20,hpCurrent:20,mpMax:0,mpCurrent:0,abilities:["Fight"]},{name:"Bat",pos:7,nextTurn:100,speed:50,phys:1,mag:1,level:1,exp:2,hpMax:20,hpCurrent:20,mpMax:0,mpCurrent:0,abilities:["Fight"]}],moment:0}),getters:{getAvailableCharacters:e=>e.characters.filter(t=>t.isRecruited),getActiveCharacters:e=>{let t=[{},{},{},{}];return e.characters.map(n=>t[n.pos]=n),t},getActiveEnemies:e=>{let t=[{},{},{},{},{},{},{},{}];return e.enemies.map(n=>{n.pos!==null&&(t[n.pos]=n)}),t},getTimeline:e=>{let t=[{},{},{},{}];e.characters.map(a=>t[a.pos]=a);let n=[{},{},{},{},{},{},{},{}];e.enemies.map(a=>{a.pos!==null&&(n[a.pos]=a)});let r=t.concat(n);return r.sort((a,i)=>{a.pos-i.pos}),r},getMoment:e=>e.moment},actions:{getCharacter(e){this.characters.filter(t=>t.name===e)},incrementMoment(){this.moment++},updateGame(){this.incrementMoment();function e(t){let n=Math.log(t.speed)/Math.log(255),r=n<=.1?.1:n;t.nextTurn=t.nextTurn-r.toFixed(2)-Math.random()/2}this.characters.map(t=>t.nextTurn>0?e(t):0),this.enemies.map(t=>{t.nextTurn>0&&e(t),t.nextTurn<=0&&(console.log(`${t.name} ATTACKS!`),t.nextTurn=100)})}}});const Xu=rt({inheritAttrs:!1,props:{char:{type:Object}},methods:{focus(){var e;(e=this.$refs.button)==null||e.focus()}}}),Qu=["src"];function Ju(e,t,n,r,a,i){var o,s,l,f,c;return((o=e.char)==null?void 0:o.pos)!==null?(ke(),Ke("div",{key:0,class:"character-sprite",style:Xt({right:(s=e.char)!=null&&s.isBackrow?"20px":"80px",top:(((l=e.char)==null?void 0:l.pos)+1)*65+200+"px"})},[bt("img",{src:`./sprites/${(f=e.char)==null?void 0:f.name}/${(c=e.char)==null?void 0:c.name}.png`,style:{zoom:"4"},class:"sharp"},null,8,Qu)],4)):Qn("",!0)}var Zu=Rn(Xu,[["render",Ju],["__scopeId","data-v-4b56c33b"]]);const ed=rt({inheritAttrs:!1,props:{char:{type:Object}},methods:{}}),td=["src"];function nd(e,t,n,r,a,i){var o,s,l,f,c,d,p,v,k,I,C,g,w,R,L,D,V;return((o=e.char)==null?void 0:o.pos)!==null?(ke(),Ke("div",{key:0,class:Wt(["character-sprite",{blink:((s=e.char)==null?void 0:s.nextTurn)>=100,pos0:((l=e.char)==null?void 0:l.pos)===0,pos1:((f=e.char)==null?void 0:f.pos)===1,pos2:((c=e.char)==null?void 0:c.pos)===2,pos3:((d=e.char)==null?void 0:d.pos)===3,pos4:((p=e.char)==null?void 0:p.pos)===4,pos5:((v=e.char)==null?void 0:v.pos)===5,pos6:((k=e.char)==null?void 0:k.pos)===6,pos7:((I=e.char)==null?void 0:I.pos)===7}]),style:Xt({left:((C=e.char)==null?void 0:C.pos)%2?`${150+(((g=e.char)==null?void 0:g.pos)+1)*20}px`:`${0+(((w=e.char)==null?void 0:w.pos)+1)*20}px`,top:((R=e.char)==null?void 0:R.pos)%2?(((L=e.char)==null?void 0:L.pos)/2+1)*75+40+"px":(((D=e.char)==null?void 0:D.pos)/2+1)*75+130+"px"})},[bt("img",{src:`./timelines/${(V=e.char)==null?void 0:V.name}.png`,style:{zoom:"4"},class:"sharp"},null,8,td)],6)):Qn("",!0)}var rd=Rn(ed,[["render",nd],["__scopeId","data-v-d7a5e24e"]]);const ad=rt({inheritAttrs:!1,props:{char:{type:Object}},computed:{left(){var t,n;let e=((t=this.char)==null?void 0:t.nextTurn)<0?0:(n=this.char)==null?void 0:n.nextTurn;return e=e>=98?98:e,e+"%"}}}),id=["src"];function od(e,t,n,r,a,i){var s,l,f,c,d,p,v,k,I,C,g,w,R,L,D;const o=mn("font-awesome-icon");return ke(),Ke("span",{class:"timelineItem",style:Xt({left:e.left,top:(s=e.char)!=null&&s.isRecruited?"5px":"45px"}),align:"center"},[(l=e.char)!=null&&l.isRecruited?(ke(),Xn(o,{key:0,icon:"fa-solid fa-location-pin",size:"2x"})):Qn("",!0),(f=e.char)!=null&&f.isRecruited?Qn("",!0):(ke(),Xn(o,{key:1,icon:"fa-solid fa-location-pin",rotation:180,size:"2x",class:Wt({blink:((c=e.char)==null?void 0:c.nextTurn)>=100,pos0:((d=e.char)==null?void 0:d.pos)===0,pos1:((p=e.char)==null?void 0:p.pos)===1,pos2:((v=e.char)==null?void 0:v.pos)===2,pos3:((k=e.char)==null?void 0:k.pos)===3,pos4:((I=e.char)==null?void 0:I.pos)===4,pos5:((C=e.char)==null?void 0:C.pos)===5,pos6:((g=e.char)==null?void 0:g.pos)===6,pos7:((w=e.char)==null?void 0:w.pos)===7})},null,8,["class"])),bt("img",{class:Wt({"timeline-portrait":(R=e.char)==null?void 0:R.isRecruited,"timeline-portrait-enemy":!((L=e.char)!=null&&L.isRecruited)}),src:`./timelines/${(D=e.char)==null?void 0:D.name}.png`,width:"16",height:"16"},null,10,id)],4)}var sd=Rn(ad,[["render",od],["__scopeId","data-v-59510674"]]);const ld=rt({components:{CharacterComponent:Zu,EnemyComponent:rd,TimelineComponent:sd},setup(){const e=Gu(),t=fr("");return window.stores={game:e},setInterval(e.updateGame,100),{game:e,gameName:t}}}),cd=e=>(cc("data-v-537efa1b"),e=e(),fc(),e),fd={class:"timeline"},ud=cd(()=>bt("span",{class:"timeline-line"},null,-1)),dd={class:"battlefield"};function pd(e,t,n,r,a,i){const o=mn("timeline-component"),s=mn("enemy-component"),l=mn("character-component");return ke(),Ke("main",null,[bt("div",fd,[ud,(ke(!0),Ke(Ie,null,Rr(e.game.getTimeline,(f,c)=>(ke(),Ke("span",{key:c},[ge(o,{char:f},null,8,["char"])]))),128))]),bt("div",dd,[(ke(!0),Ke(Ie,null,Rr(e.game.getActiveEnemies,(f,c)=>(ke(),Ke("span",{key:c},[ge(s,{char:f},null,8,["char"])]))),128)),(ke(!0),Ke(Ie,null,Rr(e.game.getActiveCharacters,(f,c)=>(ke(),Ke("span",{key:c},[ge(l,{char:f},null,8,["char"])]))),128))])])}var md=Rn(ld,[["render",pd],["__scopeId","data-v-537efa1b"]]);const hd=qu({history:cu("/"),routes:[{path:"/",name:"game",component:md}]});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Yi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Yi(Object(n),!0).forEach(function(r){bd(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Zn(e){return Zn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Zn(e)}function gd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function qi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function vd(e,t,n){return t&&qi(e.prototype,t),n&&qi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function bd(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Da(e,t){return xd(e)||_d(e,t)||Ps(e,t)||Ad()}function xr(e){return yd(e)||wd(e)||Ps(e)||kd()}function yd(e){if(Array.isArray(e))return oa(e)}function xd(e){if(Array.isArray(e))return e}function wd(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function _d(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Ps(e,t){if(!!e){if(typeof e=="string")return oa(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return oa(e,t)}}function oa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function kd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ad(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Vi=function(){},Ba={},Ss={},Rs=null,Ts={mark:Vi,measure:Vi};try{typeof window!="undefined"&&(Ba=window),typeof document!="undefined"&&(Ss=document),typeof MutationObserver!="undefined"&&(Rs=MutationObserver),typeof performance!="undefined"&&(Ts=performance)}catch{}var Ed=Ba.navigator||{},Gi=Ed.userAgent,Xi=Gi===void 0?"":Gi,yt=Ba,le=Ss,Qi=Rs,$n=Ts;yt.document;var it=!!le.documentElement&&!!le.head&&typeof le.addEventListener=="function"&&typeof le.createElement=="function",Is=~Xi.indexOf("MSIE")||~Xi.indexOf("Trident/"),et="___FONT_AWESOME___",sa=16,Ms="fa",Ns="svg-inline--fa",St="data-fa-i2svg",la="data-fa-pseudo-element",Cd="data-fa-pseudo-element-pending",Ua="data-prefix",Ha="data-icon",Ji="fontawesome-i2svg",Od="async",Pd=["HTML","HEAD","STYLE","SCRIPT"],Fs=function(){try{return!0}catch{return!1}}(),Wa={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},er={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Ls={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Sd={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Rd=/fa[srltdbk\-\ ]/,$s="fa-layers-text",Td=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Id={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},js=[1,2,3,4,5,6,7,8,9,10],Md=js.concat([11,12,13,14,15,16,17,18,19,20]),Nd=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Et={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Fd=[].concat(xr(Object.keys(er)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Et.GROUP,Et.SWAP_OPACITY,Et.PRIMARY,Et.SECONDARY]).concat(js.map(function(e){return"".concat(e,"x")})).concat(Md.map(function(e){return"w-".concat(e)})),zs=yt.FontAwesomeConfig||{};function Ld(e){var t=le.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function $d(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(le&&typeof le.querySelector=="function"){var jd=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];jd.forEach(function(e){var t=Da(e,2),n=t[0],r=t[1],a=$d(Ld(n));a!=null&&(zs[r]=a)})}var zd={familyPrefix:Ms,styleDefault:"solid",replacementClass:Ns,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},yn=T(T({},zd),zs);yn.autoReplaceSvg||(yn.observeMutations=!1);var z={};Object.keys(yn).forEach(function(e){Object.defineProperty(z,e,{enumerable:!0,set:function(n){yn[e]=n,Un.forEach(function(r){return r(z)})},get:function(){return yn[e]}})});yt.FontAwesomeConfig=z;var Un=[];function Dd(e){return Un.push(e),function(){Un.splice(Un.indexOf(e),1)}}var ft=sa,qe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Bd(e){if(!(!e||!it)){var t=le.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=le.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return le.head.insertBefore(t,r),e}}var Ud="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Sn(){for(var e=12,t="";e-- >0;)t+=Ud[Math.random()*62|0];return t}function nn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ka(e){return e.classList?nn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ds(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Hd(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ds(e[n]),'" ')},"").trim()}function wr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ya(e){return e.size!==qe.size||e.x!==qe.x||e.y!==qe.y||e.rotate!==qe.rotate||e.flipX||e.flipY}function Wd(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Kd(e){var t=e.transform,n=e.width,r=n===void 0?sa:n,a=e.height,i=a===void 0?sa:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Is?l+="translate(".concat(t.x/ft-r/2,"em, ").concat(t.y/ft-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/ft,"em), calc(-50% + ").concat(t.y/ft,"em)) "):l+="translate(".concat(t.x/ft,"em, ").concat(t.y/ft,"em) "),l+="scale(".concat(t.size/ft*(t.flipX?-1:1),", ").concat(t.size/ft*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Yd=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Bs(){var e=Ms,t=Ns,n=z.familyPrefix,r=z.replacementClass,a=Yd;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Zi=!1;function Lr(){z.autoAddCss&&!Zi&&(Bd(Bs()),Zi=!0)}var qd={mixout:function(){return{dom:{css:Bs,insertCss:Lr}}},hooks:function(){return{beforeDOMElementCreation:function(){Lr()},beforeI2svg:function(){Lr()}}}},tt=yt||{};tt[et]||(tt[et]={});tt[et].styles||(tt[et].styles={});tt[et].hooks||(tt[et].hooks={});tt[et].shims||(tt[et].shims=[]);var je=tt[et],Us=[],Vd=function e(){le.removeEventListener("DOMContentLoaded",e),tr=1,Us.map(function(t){return t()})},tr=!1;it&&(tr=(le.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(le.readyState),tr||le.addEventListener("DOMContentLoaded",Vd));function Gd(e){!it||(tr?setTimeout(e,0):Us.push(e))}function Tn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Ds(e):"<".concat(t," ").concat(Hd(r),">").concat(i.map(Tn).join(""),"</").concat(t,">")}function eo(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Xd=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},$r=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Xd(n,a):n,l,f,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function Qd(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ca(e){var t=Qd(e);return t.length===1?t[0].toString(16):null}function Jd(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function to(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function fa(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=to(t);typeof je.hooks.addPack=="function"&&!a?je.hooks.addPack(e,to(t)):je.styles[e]=T(T({},je.styles[e]||{}),i),e==="fas"&&fa("fa",t)}var xn=je.styles,Zd=je.shims,ep=Object.values(Ls),qa=null,Hs={},Ws={},Ks={},Ys={},qs={},tp=Object.keys(Wa);function np(e){return~Fd.indexOf(e)}function rp(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!np(a)?a:null}var Vs=function(){var t=function(i){return $r(xn,function(o,s,l){return o[l]=$r(s,i,{}),o},{})};Hs=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Ws=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),qs=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in xn||z.autoFetchSvg,r=$r(Zd,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Ks=r.names,Ys=r.unicodes,qa=_r(z.styleDefault)};Dd(function(e){qa=_r(e.styleDefault)});Vs();function Va(e,t){return(Hs[e]||{})[t]}function ap(e,t){return(Ws[e]||{})[t]}function zt(e,t){return(qs[e]||{})[t]}function Gs(e){return Ks[e]||{prefix:null,iconName:null}}function ip(e){var t=Ys[e],n=Va("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function xt(){return qa}var Ga=function(){return{prefix:null,iconName:null,rest:[]}};function _r(e){var t=Wa[e],n=er[e]||er[t],r=e in je.styles?e:null;return n||r||null}function kr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=rp(z.familyPrefix,s);if(xn[s]?(s=ep.includes(s)?Sd[s]:s,a=s,o.prefix=s):tp.indexOf(s)>-1?(a=s,o.prefix=_r(s)):l?o.iconName=l:s!==z.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var f=a==="fa"?Gs(o.iconName):{},c=zt(o.prefix,o.iconName);f.prefix&&(a=null),o.iconName=f.iconName||c||o.iconName,o.prefix=f.prefix||o.prefix,o.prefix==="far"&&!xn.far&&xn.fas&&!z.autoFetchSvg&&(o.prefix="fas")}return o},Ga());return(i.prefix==="fa"||a==="fa")&&(i.prefix=xt()||"fas"),i}var op=function(){function e(){gd(this,e),this.definitions={}}return vd(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=T(T({},n.definitions[s]||{}),o[s]),fa(s,o[s]);var l=Ls[s];l&&fa(l,o[s]),Vs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[s][d]=f)}),n[s][l]=f}),n}}]),e}(),no=[],Dt={},Ht={},sp=Object.keys(Ht);function lp(e,t){var n=t.mixoutsTo;return no=e,Dt={},Object.keys(Ht).forEach(function(r){sp.indexOf(r)===-1&&delete Ht[r]}),no.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Zn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Dt[o]||(Dt[o]=[]),Dt[o].push(i[o])})}r.provides&&r.provides(Ht)}),n}function ua(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Dt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Rt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Dt[e]||[];a.forEach(function(i){i.apply(null,n)})}function nt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ht[e]?Ht[e].apply(null,t):void 0}function da(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||xt();if(!!t)return t=zt(n,t)||t,eo(Xs.definitions,n,t)||eo(je.styles,n,t)}var Xs=new op,cp=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,Rt("noAuto")},fp={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return it?(Rt("beforeI2svg",t),nt("pseudoElements2svg",t),nt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,Gd(function(){dp({autoReplaceSvgRoot:n}),Rt("watch",t)})}},up={icon:function(t){if(t===null)return null;if(Zn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:zt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=_r(t[0]);return{prefix:r,iconName:zt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(z.familyPrefix,"-"))>-1||t.match(Rd))){var a=kr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||xt(),iconName:zt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=xt();return{prefix:i,iconName:zt(i,t)||t}}}},Se={noAuto:cp,config:z,dom:fp,parse:up,library:Xs,findIconDefinition:da,toHtml:Tn},dp=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?le:n;(Object.keys(je.styles).length>0||z.autoFetchSvg)&&it&&z.autoReplaceSvg&&Se.dom.i2svg({node:r})};function Ar(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Tn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!it){var r=le.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function pp(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Ya(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=wr(T(T({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function mp(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(z.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:T(T({},a),{},{id:o}),children:r}]}]}function Xa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,d=e.extra,p=e.watchable,v=p===void 0?!1:p,k=r.found?r:n,I=k.width,C=k.height,g=a==="fak",w=[z.replacementClass,i?"".concat(z.familyPrefix,"-").concat(i):""].filter(function(re){return d.classes.indexOf(re)===-1}).filter(function(re){return re!==""||!!re}).concat(d.classes).join(" "),R={children:[],attributes:T(T({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:w,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(I," ").concat(C)})},L=g&&!~d.classes.indexOf("fa-fw")?{width:"".concat(I/C*16*.0625,"em")}:{};v&&(R.attributes[St]=""),l&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(c||Sn())},children:[l]}),delete R.attributes.title);var D=T(T({},R),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:T(T({},L),d.styles)}),V=r.found&&n.found?nt("generateAbstractMask",D)||{children:[],attributes:{}}:nt("generateAbstractIcon",D)||{children:[],attributes:{}},U=V.children,q=V.attributes;return D.children=U,D.attributes=q,s?mp(D):pp(D)}function ro(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=T(T(T({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[St]="");var c=T({},o.styles);Ya(a)&&(c.transform=Kd({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=wr(c);d.length>0&&(f.style=d);var p=[];return p.push({tag:"span",attributes:f,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function hp(e){var t=e.content,n=e.title,r=e.extra,a=T(T(T({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=wr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var jr=je.styles;function pa(e){var t=e[0],n=e[1],r=e.slice(4),a=Da(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(z.familyPrefix,"-").concat(Et.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.familyPrefix,"-").concat(Et.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(z.familyPrefix,"-").concat(Et.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var gp={found:!1,width:512,height:512};function vp(e,t){!Fs&&!z.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ma(e,t){var n=t;return t==="fa"&&z.styleDefault!==null&&(t=xt()),new Promise(function(r,a){if(nt("missingIconAbstract"),n==="fa"){var i=Gs(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&jr[t]&&jr[t][e]){var o=jr[t][e];return r(pa(o))}vp(e,t),r(T(T({},gp),{},{icon:z.showMissingIcons&&e?nt("missingIconAbstract")||{}:{}}))})}var ao=function(){},ha=z.measurePerformance&&$n&&$n.mark&&$n.measure?$n:{mark:ao,measure:ao},cn='FA "6.1.1"',bp=function(t){return ha.mark("".concat(cn," ").concat(t," begins")),function(){return Qs(t)}},Qs=function(t){ha.mark("".concat(cn," ").concat(t," ends")),ha.measure("".concat(cn," ").concat(t),"".concat(cn," ").concat(t," begins"),"".concat(cn," ").concat(t," ends"))},Qa={begin:bp,end:Qs},Hn=function(){};function io(e){var t=e.getAttribute?e.getAttribute(St):null;return typeof t=="string"}function yp(e){var t=e.getAttribute?e.getAttribute(Ua):null,n=e.getAttribute?e.getAttribute(Ha):null;return t&&n}function xp(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(z.replacementClass)}function wp(){if(z.autoReplaceSvg===!0)return Wn.replace;var e=Wn[z.autoReplaceSvg];return e||Wn.replace}function _p(e){return le.createElementNS("http://www.w3.org/2000/svg",e)}function kp(e){return le.createElement(e)}function Js(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?_p:kp:n;if(typeof e=="string")return le.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Js(o,{ceFn:r}))}),a}function Ap(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Wn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Js(a),n)}),n.getAttribute(St)===null&&z.keepOriginalSource){var r=le.createComment(Ap(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ka(n).indexOf(z.replacementClass))return Wn.replace(t);var a=new RegExp("".concat(z.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===z.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Tn(s)}).join(`
`);n.setAttribute(St,""),n.innerHTML=o}};function oo(e){e()}function Zs(e,t){var n=typeof t=="function"?t:Hn;if(e.length===0)n();else{var r=oo;z.mutateApproach===Od&&(r=yt.requestAnimationFrame||oo),r(function(){var a=wp(),i=Qa.begin("mutate");e.map(a),i(),n()})}}var Ja=!1;function el(){Ja=!0}function ga(){Ja=!1}var nr=null;function so(e){if(!!Qi&&!!z.observeMutations){var t=e.treeCallback,n=t===void 0?Hn:t,r=e.nodeCallback,a=r===void 0?Hn:r,i=e.pseudoElementsCallback,o=i===void 0?Hn:i,s=e.observeMutationsRoot,l=s===void 0?le:s;nr=new Qi(function(f){if(!Ja){var c=xt();nn(f).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!io(d.addedNodes[0])&&(z.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&z.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&io(d.target)&&~Nd.indexOf(d.attributeName))if(d.attributeName==="class"&&yp(d.target)){var p=kr(Ka(d.target)),v=p.prefix,k=p.iconName;d.target.setAttribute(Ua,v||c),k&&d.target.setAttribute(Ha,k)}else xp(d.target)&&a(d.target)})}}),it&&nr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ep(){!nr||nr.disconnect()}function Cp(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Op(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=kr(Ka(e));return a.prefix||(a.prefix=xt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||a.prefix&&r.length>0&&(a.iconName=ap(a.prefix,e.innerText)||Va(a.prefix,ca(e.innerText))),a}function Pp(e){var t=nn(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return z.autoA11y&&(n?t["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(r||Sn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Sp(){return{iconName:null,title:null,titleId:null,prefix:null,transform:qe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function lo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Op(e),r=n.iconName,a=n.prefix,i=n.rest,o=Pp(e),s=ua("parseNodeAttributes",{},e),l=t.styleParser?Cp(e):[];return T({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:qe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Rp=je.styles;function tl(e){var t=z.autoReplaceSvg==="nest"?lo(e,{styleParser:!1}):lo(e);return~t.extra.classes.indexOf($s)?nt("generateLayersText",e,t):nt("generateSvgReplacementMutation",e,t)}function co(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!it)return Promise.resolve();var n=le.documentElement.classList,r=function(d){return n.add("".concat(Ji,"-").concat(d))},a=function(d){return n.remove("".concat(Ji,"-").concat(d))},i=z.autoFetchSvg?Object.keys(Wa):Object.keys(Rp),o=[".".concat($s,":not([").concat(St,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(St,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=nn(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Qa.begin("onTree"),f=s.reduce(function(c,d){try{var p=tl(d);p&&c.push(p)}catch(v){Fs||v.name==="MissingIcon"&&console.error(v)}return c},[]);return new Promise(function(c,d){Promise.all(f).then(function(p){Zs(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),d(p)})})}function Tp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;tl(e).then(function(n){n&&Zs([n],t)})}function Ip(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:da(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:da(a||{})),e(r,T(T({},n),{},{mask:a}))}}var Mp=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?qe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,d=n.title,p=d===void 0?null:d,v=n.titleId,k=v===void 0?null:v,I=n.classes,C=I===void 0?[]:I,g=n.attributes,w=g===void 0?{}:g,R=n.styles,L=R===void 0?{}:R;if(!!t){var D=t.prefix,V=t.iconName,U=t.icon;return Ar(T({type:"icon"},t),function(){return Rt("beforeDOMElementCreation",{iconDefinition:t,params:n}),z.autoA11y&&(p?w["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(k||Sn()):(w["aria-hidden"]="true",w.focusable="false")),Xa({icons:{main:pa(U),mask:l?pa(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:D,iconName:V,transform:T(T({},qe),a),symbol:o,title:p,maskId:c,titleId:k,extra:{attributes:w,styles:L,classes:C}})})}},Np={mixout:function(){return{icon:Ip(Mp)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=co,n.nodeCallback=Tp,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?le:r,i=n.callback,o=i===void 0?function(){}:i;return co(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,d=r.maskId,p=r.extra;return new Promise(function(v,k){Promise.all([ma(a,s),c.iconName?ma(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(I){var C=Da(I,2),g=C[0],w=C[1];v([n,Xa({icons:{main:g,mask:w},prefix:s,iconName:a,transform:l,symbol:f,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(k)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=wr(s);l.length>0&&(a.style=l);var f;return Ya(o)&&(f=nt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},Fp={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Ar({type:"layer"},function(){Rt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(z.familyPrefix,"-layers")].concat(xr(i)).join(" ")},children:o}]})}}}},Lp={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Ar({type:"counter",content:n},function(){return Rt("beforeDOMElementCreation",{content:n,params:r}),hp({content:n.toString(),title:i,extra:{attributes:f,styles:d,classes:["".concat(z.familyPrefix,"-layers-counter")].concat(xr(s))}})})}}}},$p={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?qe:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,p=r.styles,v=p===void 0?{}:p;return Ar({type:"text",content:n},function(){return Rt("beforeDOMElementCreation",{content:n,params:r}),ro({content:n,transform:T(T({},qe),i),title:s,extra:{attributes:d,styles:v,classes:["".concat(z.familyPrefix,"-layers-text")].concat(xr(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Is){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return z.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ro({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},jp=new RegExp('"',"ug"),fo=[1105920,1112319];function zp(e){var t=e.replace(jp,""),n=Jd(t,0),r=n>=fo[0]&&n<=fo[1],a=t.length===2?t[0]===t[1]:!1;return{value:ca(a?t[0]:t),isSecondary:r||a}}function uo(e,t){var n="".concat(Cd).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=nn(e.children),o=i.filter(function(V){return V.getAttribute(la)===t})[0],s=yt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Td),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?er[l[2].toLowerCase()]:Id[f],v=zp(d),k=v.value,I=v.isSecondary,C=l[0].startsWith("FontAwesome"),g=Va(p,k),w=g;if(C){var R=ip(k);R.iconName&&R.prefix&&(g=R.iconName,p=R.prefix)}if(g&&!I&&(!o||o.getAttribute(Ua)!==p||o.getAttribute(Ha)!==w)){e.setAttribute(n,w),o&&e.removeChild(o);var L=Sp(),D=L.extra;D.attributes[la]=t,ma(g,p).then(function(V){var U=Xa(T(T({},L),{},{icons:{main:V,mask:Ga()},prefix:p,iconName:w,extra:D,watchable:!0})),q=le.createElement("svg");t==="::before"?e.insertBefore(q,e.firstChild):e.appendChild(q),q.outerHTML=U.map(function(re){return Tn(re)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Dp(e){return Promise.all([uo(e,"::before"),uo(e,"::after")])}function Bp(e){return e.parentNode!==document.head&&!~Pd.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(la)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function po(e){if(!!it)return new Promise(function(t,n){var r=nn(e.querySelectorAll("*")).filter(Bp).map(Dp),a=Qa.begin("searchPseudoElements");el(),Promise.all(r).then(function(){a(),ga(),t()}).catch(function(){a(),ga(),n()})})}var Up={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=po,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?le:r;z.searchPseudoElements&&po(a)}}},mo=!1,Hp={mixout:function(){return{dom:{unwatch:function(){el(),mo=!0}}}},hooks:function(){return{bootstrap:function(){so(ua("mutationObserverCallbacks",{}))},noAuto:function(){Ep()},watch:function(n){var r=n.observeMutationsRoot;mo?ga():so(ua("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ho=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Wp={mixout:function(){return{parse:{transform:function(n){return ho(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=ho(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(f," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:d,path:p};return{tag:"g",attributes:T({},v.outer),children:[{tag:"g",attributes:T({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:T(T({},r.icon.attributes),v.path)}]}]}}}},zr={x:0,y:0,width:"100%",height:"100%"};function go(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Kp(e){return e.tag==="g"?e.children:[e]}var Yp={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?kr(a.split(" ").map(function(o){return o.trim()})):Ga();return i.prefix||(i.prefix=xt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,d=o.width,p=o.icon,v=Wd({transform:l,containerWidth:d,iconWidth:f}),k={tag:"rect",attributes:T(T({},zr),{},{fill:"white"})},I=c.children?{children:c.children.map(go)}:{},C={tag:"g",attributes:T({},v.inner),children:[go(T({tag:c.tag,attributes:T(T({},c.attributes),v.path)},I))]},g={tag:"g",attributes:T({},v.outer),children:[C]},w="mask-".concat(s||Sn()),R="clip-".concat(s||Sn()),L={tag:"mask",attributes:T(T({},zr),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,g]},D={tag:"defs",children:[{tag:"clipPath",attributes:{id:R},children:Kp(p)},L]};return r.push(D,{tag:"rect",attributes:T({fill:"currentColor","clip-path":"url(#".concat(R,")"),mask:"url(#".concat(w,")")},zr)}),{children:r,attributes:a}}}},qp={provides:function(t){var n=!1;yt.matchMedia&&(n=yt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:T(T({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=T(T({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:T(T({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:T(T({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:T(T({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:T(T({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:T(T({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:T(T({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:T(T({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Vp={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Gp=[qd,Np,Fp,Lp,$p,Up,Hp,Wp,Yp,qp,Vp];lp(Gp,{mixoutsTo:Se});Se.noAuto;var nl=Se.config,Xp=Se.library;Se.dom;var rr=Se.parse;Se.findIconDefinition;Se.toHtml;var Qp=Se.icon;Se.layer;var Jp=Se.text;Se.counter;function vo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Fe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?vo(Object(n),!0).forEach(function(r){we(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ar(e){return ar=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ar(e)}function we(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Zp(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function em(e,t){if(e==null)return{};var n=Zp(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function va(e){return tm(e)||nm(e)||rm(e)||am()}function tm(e){if(Array.isArray(e))return ba(e)}function nm(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function rm(e,t){if(!!e){if(typeof e=="string")return ba(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ba(e,t)}}function ba(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function am(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var im=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},rl={exports:{}};(function(e){(function(t){var n=function(g,w,R){if(!f(w)||d(w)||p(w)||v(w)||l(w))return w;var L,D=0,V=0;if(c(w))for(L=[],V=w.length;D<V;D++)L.push(n(g,w[D],R));else{L={};for(var U in w)Object.prototype.hasOwnProperty.call(w,U)&&(L[g(U,R)]=n(g,w[U],R))}return L},r=function(g,w){w=w||{};var R=w.separator||"_",L=w.split||/(?=[A-Z])/;return g.split(L).join(R)},a=function(g){return k(g)?g:(g=g.replace(/[\-_\s]+(.)?/g,function(w,R){return R?R.toUpperCase():""}),g.substr(0,1).toLowerCase()+g.substr(1))},i=function(g){var w=a(g);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(g,w){return r(g,w).toLowerCase()},s=Object.prototype.toString,l=function(g){return typeof g=="function"},f=function(g){return g===Object(g)},c=function(g){return s.call(g)=="[object Array]"},d=function(g){return s.call(g)=="[object Date]"},p=function(g){return s.call(g)=="[object RegExp]"},v=function(g){return s.call(g)=="[object Boolean]"},k=function(g){return g=g-0,g===g},I=function(g,w){var R=w&&"process"in w?w.process:w;return typeof R!="function"?g:function(L,D){return R(L,g,D)}},C={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(g,w){return n(I(a,w),g)},decamelizeKeys:function(g,w){return n(I(o,w),g,w)},pascalizeKeys:function(g,w){return n(I(i,w),g)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=C:t.humps=C})(im)})(rl);var om=rl.exports,sm=["class","style"];function lm(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=om.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function cm(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Za(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Za(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var c=e.attributes[f];switch(f){case"class":l.class=cm(c);break;case"style":l.style=lm(c);break;default:l.attrs[f]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=em(n,sm);return vr(e.tag,Fe(Fe(Fe({},t),{},{class:a.class,style:Fe(Fe({},a.style),o)},a.attrs),s),r)}var al=!1;try{al=!0}catch{}function fm(){if(!al&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function wn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?we({},e,t):{}}function um(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},we(t,"fa-".concat(e.size),e.size!==null),we(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),we(t,"fa-pull-".concat(e.pull),e.pull!==null),we(t,"fa-swap-opacity",e.swapOpacity),we(t,"fa-bounce",e.bounce),we(t,"fa-shake",e.shake),we(t,"fa-beat",e.beat),we(t,"fa-fade",e.fade),we(t,"fa-beat-fade",e.beatFade),we(t,"fa-flash",e.flash),we(t,"fa-spin-pulse",e.spinPulse),we(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function bo(e){if(e&&ar(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(rr.icon)return rr.icon(e);if(e===null)return null;if(ar(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var dm=rt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ce(function(){return bo(t.icon)}),i=ce(function(){return wn("classes",um(t))}),o=ce(function(){return wn("transform",typeof t.transform=="string"?rr.transform(t.transform):t.transform)}),s=ce(function(){return wn("mask",bo(t.mask))}),l=ce(function(){return Qp(a.value,Fe(Fe(Fe(Fe({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Ut(l,function(c){if(!c)return fm("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=ce(function(){return l.value?Za(l.value.abstract[0],{},r):null});return function(){return f.value}}});rt({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=nl.familyPrefix,i=ce(function(){return["".concat(a,"-layers")].concat(va(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return vr("div",{class:i.value},r.default?r.default():[])}}});rt({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=nl.familyPrefix,i=ce(function(){return wn("classes",[].concat(va(t.counter?["".concat(a,"-layers-counter")]:[]),va(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=ce(function(){return wn("transform",typeof t.transform=="string"?rr.transform(t.transform):t.transform)}),s=ce(function(){var f=Jp(t.value.toString(),Fe(Fe({},o.value),i.value)),c=f.abstract;return t.counter&&(c[0].attributes.class=c[0].attributes.class.replace("fa-layers-text","")),c[0]}),l=ce(function(){return Za(s.value,{},r)});return function(){return l.value}}});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var pm={prefix:"fas",iconName:"location-pin",icon:[384,512,["map-marker"],"f041","M384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192H384z"]};Xp.add(pm);const Er=Mf(Wf);Er.use(Lf());Er.use(hd);Er.component("font-awesome-icon",dm);Er.mount("#app");

(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(o){if(o.ep)return;o.ep=!0;const l=i(o);fetch(o.href,l)}})();const j={},re=(e,t)=>e===t,se=Symbol("solid-track"),E={equals:re};let ae=ie;const C=1,F=2,X={owned:null,cleanups:null,context:null,owner:null};var h=null;let x=null,f=null,g=null,T=null,q=0;function I(e,t){const i=f,n=h,o=e.length===0,l=o?X:{owned:null,cleanups:null,context:null,owner:t===void 0?n:t},s=o?e:()=>e(()=>G(()=>M(l)));h=l,f=null;try{return $(s,!0)}finally{f=i,h=n}}function de(e,t){t=t?Object.assign({},E,t):E;const i={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},n=o=>(typeof o=="function"&&(o=o(i.value)),z(i,o));return[Z.bind(i),n]}function O(e,t,i){const n=ee(e,t,!1,C);L(n)}function ce(e,t,i){i=i?Object.assign({},E,i):E;const n=ee(e,t,!0,0);return n.observers=null,n.observerSlots=null,n.comparator=i.equals||void 0,L(n),Z.bind(n)}function G(e){if(f===null)return e();const t=f;f=null;try{return e()}finally{f=t}}function fe(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function Z(){const e=x;if(this.sources&&(this.state||e))if(this.state===C||e)L(this);else{const t=g;g=null,$(()=>B(this),!1),g=t}if(f){const t=this.observers?this.observers.length:0;f.sources?(f.sources.push(this),f.sourceSlots.push(t)):(f.sources=[this],f.sourceSlots=[t]),this.observers?(this.observers.push(f),this.observerSlots.push(f.sources.length-1)):(this.observers=[f],this.observerSlots=[f.sources.length-1])}return this.value}function z(e,t,i){let n=e.value;return(!e.comparator||!e.comparator(n,t))&&(e.value=t,e.observers&&e.observers.length&&$(()=>{for(let o=0;o<e.observers.length;o+=1){const l=e.observers[o],s=x&&x.running;s&&x.disposed.has(l),(s&&!l.tState||!s&&!l.state)&&(l.pure?g.push(l):T.push(l),l.observers&&oe(l)),s||(l.state=C)}if(g.length>1e6)throw g=[],new Error},!1)),t}function L(e){if(!e.fn)return;M(e);const t=h,i=f,n=q;f=h=e,ue(e,e.value,n),f=i,h=t}function ue(e,t,i){let n;try{n=e.fn(t)}catch(o){e.pure&&(e.state=C,e.owned&&e.owned.forEach(M),e.owned=null),ne(o)}(!e.updatedAt||e.updatedAt<=i)&&(e.updatedAt!=null&&"observers"in e?z(e,n):e.value=n,e.updatedAt=i)}function ee(e,t,i,n=C,o){const l={fn:e,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:null,pure:i};return h===null||h!==X&&(h.owned?h.owned.push(l):h.owned=[l]),l}function te(e){const t=x;if(e.state===0||t)return;if(e.state===F||t)return B(e);if(e.suspense&&G(e.suspense.inFallback))return e.suspense.effects.push(e);const i=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<q);)(e.state||t)&&i.push(e);for(let n=i.length-1;n>=0;n--)if(e=i[n],e.state===C||t)L(e);else if(e.state===F||t){const o=g;g=null,$(()=>B(e,i[0]),!1),g=o}}function $(e,t){if(g)return e();let i=!1;t||(g=[]),T?i=!0:T=[],q++;try{const n=e();return pe(i),n}catch(n){i||(T=null),g=null,ne(n)}}function pe(e){if(g&&(ie(g),g=null),e)return;const t=T;T=null,t.length&&$(()=>ae(t),!1)}function ie(e){for(let t=0;t<e.length;t++)te(e[t])}function B(e,t){const i=x;e.state=0;for(let n=0;n<e.sources.length;n+=1){const o=e.sources[n];o.sources&&(o.state===C||i?o!==t&&te(o):(o.state===F||i)&&B(o,t))}}function oe(e){const t=x;for(let i=0;i<e.observers.length;i+=1){const n=e.observers[i];(!n.state||t)&&(n.state=F,n.pure?g.push(n):T.push(n),n.observers&&oe(n))}}function M(e){let t;if(e.sources)for(;e.sources.length;){const i=e.sources.pop(),n=e.sourceSlots.pop(),o=i.observers;if(o&&o.length){const l=o.pop(),s=i.observerSlots.pop();n<o.length&&(l.sourceSlots[s]=n,o[n]=l,i.observerSlots[n]=s)}}if(e.owned){for(t=0;t<e.owned.length;t++)M(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function he(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function ne(e){throw e=he(e),e}const ge=Symbol("fallback");function U(e){for(let t=0;t<e.length;t++)e[t]()}function me(e,t,i={}){let n=[],o=[],l=[],s=0,r=t.length>1?[]:null;return fe(()=>U(l)),()=>{let c=e()||[],d,a;return c[se],G(()=>{let u=c.length,p,v,S,H,N,_,w,k,A;if(u===0)s!==0&&(U(l),l=[],n=[],o=[],s=0,r&&(r=[])),i.fallback&&(n=[ge],o[0]=I(le=>(l[0]=le,i.fallback())),s=1);else if(s===0){for(o=new Array(u),a=0;a<u;a++)n[a]=c[a],o[a]=I(m);s=u}else{for(S=new Array(u),H=new Array(u),r&&(N=new Array(u)),_=0,w=Math.min(s,u);_<w&&n[_]===c[_];_++);for(w=s-1,k=u-1;w>=_&&k>=_&&n[w]===c[k];w--,k--)S[k]=o[w],H[k]=l[w],r&&(N[k]=r[w]);for(p=new Map,v=new Array(k+1),a=k;a>=_;a--)A=c[a],d=p.get(A),v[a]=d===void 0?-1:d,p.set(A,a);for(d=_;d<=w;d++)A=n[d],a=p.get(A),a!==void 0&&a!==-1?(S[a]=o[d],H[a]=l[d],r&&(N[a]=r[d]),a=v[a],p.set(A,a)):l[d]();for(a=_;a<u;a++)a in S?(o[a]=S[a],l[a]=H[a],r&&(r[a]=N[a],r[a](a))):o[a]=I(m);o=o.slice(0,s=u),n=c.slice(0)}return o});function m(u){if(l[a]=u,r){const[p,v]=de(a);return r[a]=v,t(c[a],p)}return t(c[a])}}}function y(e,t){return G(()=>e(t||{}))}function K(e){const t="fallback"in e&&{fallback:()=>e.fallback};return ce(me(()=>e.each,e.children,t||void 0))}function _e(e,t,i){let n=i.length,o=t.length,l=n,s=0,r=0,c=t[o-1].nextSibling,d=null;for(;s<o||r<l;){if(t[s]===i[r]){s++,r++;continue}for(;t[o-1]===i[l-1];)o--,l--;if(o===s){const a=l<n?r?i[r-1].nextSibling:i[l-r]:c;for(;r<l;)e.insertBefore(i[r++],a)}else if(l===r)for(;s<o;)(!d||!d.has(t[s]))&&t[s].remove(),s++;else if(t[s]===i[l-1]&&i[r]===t[o-1]){const a=t[--o].nextSibling;e.insertBefore(i[r++],t[s++].nextSibling),e.insertBefore(i[--l],a),t[o]=i[l]}else{if(!d){d=new Map;let m=r;for(;m<l;)d.set(i[m],m++)}const a=d.get(t[s]);if(a!=null)if(r<a&&a<l){let m=s,u=1,p;for(;++m<o&&m<l&&!((p=d.get(t[m]))==null||p!==a+u);)u++;if(u>a-r){const v=t[s];for(;r<a;)e.insertBefore(i[r++],v)}else e.replaceChild(i[r++],t[s++])}else s++;else t[s++].remove()}}}function we(e,t,i,n={}){let o;return I(l=>{o=l,t===document?e():b(t,e(),t.firstChild?null:void 0,i)},n.owner),()=>{o(),t.textContent=""}}function R(e,t,i){const n=document.createElement("template");n.innerHTML=e;let o=n.content.firstChild;return i&&(o=o.firstChild),o}function V(e,t,i){i==null?e.removeAttribute(t):e.setAttribute(t,i)}function b(e,t,i,n){if(i!==void 0&&!n&&(n=[]),typeof t!="function")return D(e,t,n,i);O(o=>D(e,t(),o,i),n)}function D(e,t,i,n,o){for(j.context&&!i&&(i=[...e.childNodes]);typeof i=="function";)i=i();if(t===i)return i;const l=typeof t,s=n!==void 0;if(e=s&&i[0]&&i[0].parentNode||e,l==="string"||l==="number"){if(j.context)return i;if(l==="number"&&(t=t.toString()),s){let r=i[0];r&&r.nodeType===3?r.data=t:r=document.createTextNode(t),i=P(e,i,n,r)}else i!==""&&typeof i=="string"?i=e.firstChild.data=t:i=e.textContent=t}else if(t==null||l==="boolean"){if(j.context)return i;i=P(e,i,n)}else{if(l==="function")return O(()=>{let r=t();for(;typeof r=="function";)r=r();i=D(e,r,i,n)}),()=>i;if(Array.isArray(t)){const r=[],c=i&&Array.isArray(i);if(W(r,t,i,o))return O(()=>i=D(e,r,i,n,!0)),()=>i;if(j.context){if(!r.length)return i;for(let d=0;d<r.length;d++)if(r[d].parentNode)return i=r}if(r.length===0){if(i=P(e,i,n),s)return i}else c?i.length===0?J(e,r,n):_e(e,i,r):(i&&P(e),J(e,r));i=r}else if(t instanceof Node){if(j.context&&t.parentNode)return i=s?[t]:t;if(Array.isArray(i)){if(s)return i=P(e,i,n,t);P(e,i,null,t)}else i==null||i===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);i=t}}return i}function W(e,t,i,n){let o=!1;for(let l=0,s=t.length;l<s;l++){let r=t[l],c=i&&i[l];if(r instanceof Node)e.push(r);else if(!(r==null||r===!0||r===!1))if(Array.isArray(r))o=W(e,r,c)||o;else if(typeof r=="function")if(n){for(;typeof r=="function";)r=r();o=W(e,Array.isArray(r)?r:[r],Array.isArray(c)?c:[c])||o}else e.push(r),o=!0;else{const d=String(r);c&&c.nodeType===3&&c.data===d?e.push(c):e.push(document.createTextNode(d))}}return o}function J(e,t,i=null){for(let n=0,o=t.length;n<o;n++)e.insertBefore(t[n],i)}function P(e,t,i,n){if(i===void 0)return e.textContent="";const o=n||document.createTextNode("");if(t.length){let l=!1;for(let s=t.length-1;s>=0;s--){const r=t[s];if(o!==r){const c=r.parentNode===e;!l&&!s?c?e.replaceChild(o,r):e.insertBefore(o,i):c&&r.remove()}else l=!0}}else e.insertBefore(o,i);return[o]}const Q=[{id:"lotr",name:"The Lord of the Rings",books:[{title:"The Hobbit",cover:"https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg"},{title:"The Fellowship of the Ring",cover:"https://upload.wikimedia.org/wikipedia/en/8/8e/The_Fellowship_of_the_Ring_cover.gif"},{title:"The Two Towers",cover:"https://upload.wikimedia.org/wikipedia/en/a/a1/The_Two_Towers_cover.gif"},{title:"The Return of the King",cover:"https://upload.wikimedia.org/wikipedia/en/1/11/The_Return_of_the_King_cover.gif"}]},{id:"harry-potter",name:"Harry Potter",books:[{title:"Harry Potter and the Philosopher's Stone",cover:"https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg"},{title:"Harry Potter and the Chamber of Secrets",cover:"https://upload.wikimedia.org/wikipedia/en/5/5c/Harry_Potter_and_the_Chamber_of_Secrets.jpg"},{title:"Harry Potter and the Prisoner of Azkaban",cover:"https://upload.wikimedia.org/wikipedia/en/a/a0/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg"},{title:"Harry Potter and the Goblet of Fire",cover:"https://upload.wikimedia.org/wikipedia/en/b/b6/Harry_Potter_and_the_Goblet_of_Fire_cover.png"},{title:"Harry Potter and the Order of the Phoenix",cover:"https://upload.wikimedia.org/wikipedia/en/7/70/Harry_Potter_and_the_Order_of_the_Phoenix.jpg"},{title:"Harry Potter and the Half-Blood Prince",cover:"https://upload.wikimedia.org/wikipedia/en/b/b5/Harry_Potter_and_the_Half-Blood_Prince_cover.png"},{title:"Harry Potter and the Deathly Hallows",cover:"https://upload.wikimedia.org/wikipedia/en/a/a9/Harry_Potter_and_the_Deathly_Hallows.jpg"}]},{id:"darkest-minds",name:"The Darkest Minds",books:[{title:"The Darkest Minds",cover:"https://images.squarespace-cdn.com/content/v1/57d478de414fb51a88afb5c3/1473548512438-D2IG4QV2YPPIOR7WG3KV/thedarkestminds_finalcomp-198x300.png?format=300w"},{title:"Never Fade",cover:"https://images.squarespace-cdn.com/content/v1/57d478de414fb51a88afb5c3/1473548998144-ZGH09IMT9LW0NWQQNP8B/NeverFade_final-198x300.jpg?format=300w"},{title:"In the After Light",cover:"https://images.squarespace-cdn.com/content/v1/57d478de414fb51a88afb5c3/1473549459741-MBJGXKOY283QYYYDXA48/intheafterlight-197x300.jpg?format=300w"}]},{id:"hunger-games",name:"Hunger Games",books:[{title:"The Hunger Games",cover:"https://upload.wikimedia.org/wikipedia/en/d/dc/The_Hunger_Games.jpg"},{title:"Catching Fire",cover:"https://upload.wikimedia.org/wikipedia/en/a/a2/Catching_Fire_%28Suzanne_Collins_novel_-_cover_art%29.jpg"},{title:"Mockingjay",cover:"https://upload.wikimedia.org/wikipedia/en/c/cc/Mockingjay.JPG"}]},{id:"jack-ryan",name:"Jack Ryan",books:[{title:"Without Remorse",cover:"https://upload.wikimedia.org/wikipedia/en/5/50/Without_Remorse_cover.jpg"},{title:"Patriot Games",cover:"https://upload.wikimedia.org/wikipedia/en/4/44/PatriotGames.JPG"},{title:"Red Rabbit",cover:"https://upload.wikimedia.org/wikipedia/en/f/fb/Red_Rabbit_cover.jpg"},{title:"The Hunt for Red October",cover:"https://upload.wikimedia.org/wikipedia/en/c/c2/HuntForRedOctober.JPG"},{title:"The Cardinal of the Kremlin",cover:"https://upload.wikimedia.org/wikipedia/en/8/85/CardinalOfTheKremlin.JPG"},{title:"Clear and Present Danger",cover:"https://upload.wikimedia.org/wikipedia/en/c/c8/Clear_And_Present_Danger_cover.jpg"},{title:"The Sum of All Fears",cover:"https://upload.wikimedia.org/wikipedia/en/f/fa/Tom_Clancy_-_The_Sum_of_All_Fears_cover.jpg"},{title:"Debt of Honor",cover:"https://upload.wikimedia.org/wikipedia/en/3/38/DebtOfHonor.jpg"},{title:"Executive Orders",cover:"https://upload.wikimedia.org/wikipedia/en/f/f2/Executiveorders.jpg"},{title:"Rainbow Six",cover:"https://upload.wikimedia.org/wikipedia/en/8/80/TomClancy_RainbowSix.jpg"},{title:"The Bear and the Dragon",cover:"https://upload.wikimedia.org/wikipedia/en/8/80/TomClancy_TheBearAndTheDragon.jpg"},{title:"Threat Vector",cover:"https://upload.wikimedia.org/wikipedia/en/9/9c/Threat_vector.jpg"},{title:"Dead or Alive",cover:"https://upload.wikimedia.org/wikipedia/en/b/b7/Dead_Or_Alive_cover.jpg"},{title:"Locked On",cover:"https://upload.wikimedia.org/wikipedia/en/4/49/LockedOn.jpg"}]},{id:"uncollected",name:"Uncollected",books:[{title:"The Alchemist",cover:"https://upload.wikimedia.org/wikipedia/en/c/c4/TheAlchemist.jpg"},{title:"Pride and Prejudice",cover:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/PrideAndPrejudiceTitlePage.jpg/330px-PrideAndPrejudiceTitlePage.jpg"},{title:"Khuda aur Mohabbat",cover:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348574003i/16046385.jpg"},{title:"If I Stay",cover:"https://upload.wikimedia.org/wikipedia/en/b/b7/If_i_stay_book_cover.jpg"},{title:"The Perks of being a Wallflower",cover:"https://upload.wikimedia.org/wikipedia/en/6/69/Perksofbeingwallflower1.jpg"},{title:"The Old Man and The Sea",cover:"https://upload.wikimedia.org/wikipedia/en/7/73/Oldmansea.jpg"},{title:"To Kill a Mockingbird",cover:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/330px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg"},{title:"A Time to Kill",cover:"https://upload.wikimedia.org/wikipedia/en/d/de/A_Time_To_Kill_%28Grisham_novel%29_cover.jpg"},{title:"Fahrenheit 451",cover:"https://upload.wikimedia.org/wikipedia/en/d/db/Fahrenheit_451_1st_ed_cover.jpg"},{title:"Never Let Me Go",cover:"https://upload.wikimedia.org/wikipedia/en/6/66/Never_Let_Me_Go_%28First-edition_cover%29.jpg"},{title:"Frankenstein",cover:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Frankenstein_1818_edition_title_page.jpg/330px-Frankenstein_1818_edition_title_page.jpg"},{title:"Ender's Game",cover:"https://upload.wikimedia.org/wikipedia/en/e/e4/Ender%27s_game_cover_ISBN_0312932081.jpg"},{title:"How much land does a man need?",cover:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Leo_Tolstoy_by_Nesterov.jpg/300px-Leo_Tolstoy_by_Nesterov.jpg"},{title:"Nightfall",cover:"https://upload.wikimedia.org/wikipedia/en/6/65/Nightfall_cover.jpg"}]}],be=R('<div class="min-w-[250px] max-w-[250px] py-6 flex flex-col items-center justify-between gap-4 border rounded-xl border-slate-700 bg-slate-900"><div><img class="h-[250px]"></div><div class="text-lg text-slate-300 text-center font-bold px-4"></div></div>'),ve=e=>(()=>{const t=be.cloneNode(!0),i=t.firstChild,n=i.firstChild,o=i.nextSibling;return b(o,()=>e.book.title),O(l=>{const s=e.book.cover,r=e.book.title;return s!==l._v$&&V(n,"src",l._v$=s),r!==l._v$2&&V(n,"alt",l._v$2=r),l},{_v$:void 0,_v$2:void 0}),t})(),ke=R('<div class="w-full bg-slate-800 px-6 pt-8 pb-16 border-b border-b-slate-600"><div class="mb-6 pl-8 pb-4 text-2xl border-b border-b-slate-600"> <span class="ml-2 py-2 px-3 text-lg rounded-full bg-slate-700"></span></div><div class="w-full flex gap-4 flex-wrap"></div></div>'),ye=e=>(()=>{const t=ke.cloneNode(!0),i=t.firstChild,n=i.firstChild,o=n.nextSibling,l=i.nextSibling;return b(i,()=>e.name,n),b(o,()=>e.books.length),b(l,y(K,{get each(){return e.books},children:s=>y(ve,{book:s})})),t})(),xe=R('<div class="p-12 border rounded-xl border-slate-700 bg-slate-800"><div class="text-xl text-slate-300 text-center font-bold px-4"></div></div>'),Te=e=>(()=>{const t=xe.cloneNode(!0),i=t.firstChild;return b(i,()=>e.game.name),t})(),Y=[{name:"[Prototype]",image:""},{name:"[Prototype 2]",image:""},{name:"Sniper Elite",image:""},{name:"Sniper Elite V2",image:""},{name:"Call of Duty I",image:""},{name:"Call of Duty II",image:""},{name:"Call of Duty: Modern Warfare I",image:""},{name:"Call of Duty: Modern Warfare II",image:""},{name:"Call of Duty: Modern Warfare III",image:""},{name:"BioShock Infinite",image:""},{name:"Half-Life 2",image:""},{name:"Project Snowblind",image:""},{name:"Freedom Fighters",image:""},{name:"Need for Speed: Most Wanted",image:""},{name:"Dishonored",image:""},{name:"Far Cry Primal",image:""},{name:"Call of Duty: Black Ops 3",image:""},{name:"Battlefield 1",image:""},{name:"Battlefield 4",image:""},{name:"Far Cry 3",image:""},{name:"Far Cry 4",image:""},{name:"A Plague Tale: Innocence",image:""},{name:"Sniper Elite 4",image:""},{name:"Polybridge 2",image:""},{name:"Counter-Strike: Global Offensive",image:""},{name:"Hogwarts Legacy",image:""}],Ce=R(`<div class="text-white font-mono py-8"><div class="w-full flex"><div class="w-1/2"><div class="text-center text-5xl">Books Read</div><div class="text-center my-4 text-xl pb-4 border-b border-b-slate-700">A list of books I've read<span class="ml-2 p-2 text-lg rounded-full bg-slate-700"></span></div></div><div class="w-1/2"><div class="text-center text-5xl">Games Played</div><div class="text-center my-4 text-xl pb-4 border-b border-b-slate-700">A list of games I've played<span class="ml-2 p-2 text-lg rounded-full bg-slate-700"></span></div><div class="w-full px-8 grid grid-cols-2 gap-x-16 gap-y-4"></div></div></div><div class="text-center p-8">&copy; <a href="https://afaan.dev" target="_blank" rel="noopener" class="text-cyan-600">Afaan Bilal</a></div></div>`),Ae=()=>(()=>{const e=Ce.cloneNode(!0),t=e.firstChild,i=t.firstChild,n=i.firstChild,o=n.nextSibling,l=o.firstChild,s=l.nextSibling,r=i.nextSibling,c=r.firstChild,d=c.nextSibling,a=d.firstChild,m=a.nextSibling,u=d.nextSibling;return b(s,()=>Q.map(p=>p.books).reduce((p,v)=>p+v.length,0)),b(i,y(K,{each:Q,children:p=>y(ye,p)}),null),b(m,()=>Y.length),b(u,y(K,{each:Y,children:p=>y(Te,{game:p})})),e})(),Pe=document.getElementById("root");we(()=>y(Ae,{}),Pe);

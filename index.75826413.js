var e,t,r,n,i,o,a,c,s,u,l,f,p,h,d,v,g=globalThis;function y(e){return e&&e.__esModule?e.default:e}var m={},b={},_=function(e){return e&&e.Math===Math&&e};b=_("object"==typeof globalThis&&globalThis)||_("object"==typeof window&&window)||_("object"==typeof self&&self)||_("object"==typeof g&&g)||_("object"==typeof b&&b)||function(){return this}()||Function("return this")();var w={},E={};w=!(E=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var $={},S={};S=!E(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var j=Function.prototype.call;$=S?j.bind(j):function(){return j.apply(j,arguments)};var O={}.propertyIsEnumerable,L=Object.getOwnPropertyDescriptor;n=L&&!O.call({1:2},1)?function(e){var t=L(this,e);return!!t&&t.enumerable}:O;var P={};P=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var k={},M={},x={},T=Function.prototype,N=T.call,I=S&&T.bind.bind(N,N),F={},D=(x=S?I:function(e){return function(){return N.apply(e,arguments)}})({}.toString),q=x("".slice);F=function(e){return q(D(e),8,-1)};var C=Object,H=x("".split);M=E(function(){return!C("z").propertyIsEnumerable(0)})?function(e){return"String"===F(e)?H(e,""):C(e)}:C;var R={},A={};A=function(e){return null==e};var G=TypeError;R=function(e){if(A(e))throw new G("Can't call method on "+e);return e},k=function(e){return M(R(e))};var U={},B={},z={},W={},Y="object"==typeof document&&document.all;W=void 0===Y&&void 0!==Y?function(e){return"function"==typeof e||e===Y}:function(e){return"function"==typeof e},z=function(e){return"object"==typeof e?null!==e:W(e)};var Q={},K={};K=function(e,t){var r;return arguments.length<2?(r=b[e],W(r)?r:void 0):b[e]&&b[e][t]};var V={};V=x({}.isPrototypeOf);var J={},X={},Z={},ee={},et=b.navigator,er=et&&et.userAgent;ee=er?String(er):"";var en=b.process,ei=b.Deno,eo=en&&en.versions||ei&&ei.version,ea=eo&&eo.v8;ea&&(o=(i=ea.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!o&&ee&&(!(i=ee.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=ee.match(/Chrome\/(\d+)/))&&(o=+i[1]),Z=o;var ec=b.String;J=(X=!!Object.getOwnPropertySymbols&&!E(function(){var e=Symbol("symbol detection");return!ec(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&Z&&Z<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var es=Object;Q=J?function(e){return"symbol"==typeof e}:function(e){var t=K("Symbol");return W(t)&&V(t.prototype,es(e))};var eu={},el={},ef={},ep=String;ef=function(e){try{return ep(e)}catch(e){return"Object"}};var eh=TypeError;el=function(e){if(W(e))return e;throw new eh(ef(e)+" is not a function")},eu=function(e,t){var r=e[t];return A(r)?void 0:el(r)};var ed={},ev=TypeError;ed=function(e,t){var r,n;if("string"===t&&W(r=e.toString)&&!z(n=$(r,e))||W(r=e.valueOf)&&!z(n=$(r,e))||"string"!==t&&W(r=e.toString)&&!z(n=$(r,e)))return n;throw new ev("Can't convert object to primitive value")};var eg={},ey={},em={};em=!1;var eb={},e_=Object.defineProperty;eb=function(e,t){try{e_(b,e,{value:t,configurable:!0,writable:!0})}catch(r){b[e]=t}return t};var ew="__core-js_shared__",eE=ey=b[ew]||eb(ew,{});(eE.versions||(eE.versions=[])).push({version:"3.38.1",mode:em?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",source:"https://github.com/zloirock/core-js"}),eg=function(e,t){return ey[e]||(ey[e]=t||{})};var e$={},eS={},ej=Object;eS=function(e){return ej(R(e))};var eO=x({}.hasOwnProperty);e$=Object.hasOwn||function(e,t){return eO(eS(e),t)};var eL={},eP=0,ek=Math.random(),eM=x(1..toString);eL=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eM(++eP+ek,36)};var ex=b.Symbol,eT=eg("wks"),eN=J?ex.for||ex:ex&&ex.withoutSetter||eL,eI=TypeError,eF=(e$(eT,e="toPrimitive")||(eT[e]=X&&e$(ex,e)?ex[e]:eN("Symbol."+e)),eT[e]);B=function(e,t){if(!z(e)||Q(e))return e;var r,n=eu(e,eF);if(n){if(void 0===t&&(t="default"),r=$(n,e,t),!z(r)||Q(r))return r;throw new eI("Can't convert object to primitive value")}return void 0===t&&(t="number"),ed(e,t)},U=function(e){var t=B(e,"string");return Q(t)?t:t+""};var eD={},eq={},eC=b.document,eH=z(eC)&&z(eC.createElement);eq=function(e){return eH?eC.createElement(e):{}},eD=!w&&!E(function(){return 7!==Object.defineProperty(eq("div"),"a",{get:function(){return 7}}).a});var eR=Object.getOwnPropertyDescriptor;r=w?eR:function(e,t){if(e=k(e),t=U(t),eD)try{return eR(e,t)}catch(e){}if(e$(e,t))return P(!$(n,e,t),e[t])};var eA={},eG={};eG=w&&E(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eU={},eB=String,ez=TypeError;eU=function(e){if(z(e))return e;throw new ez(eB(e)+" is not an object")};var eW=TypeError,eY=Object.defineProperty,eQ=Object.getOwnPropertyDescriptor,eK="enumerable",eV="configurable",eJ="writable";a=w?eG?function(e,t,r){if(eU(e),t=U(t),eU(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eJ in r&&!r[eJ]){var n=eQ(e,t);n&&n[eJ]&&(e[t]=r.value,r={configurable:eV in r?r[eV]:n[eV],enumerable:eK in r?r[eK]:n[eK],writable:!1})}return eY(e,t,r)}:eY:function(e,t,r){if(eU(e),t=U(t),eU(r),eD)try{return eY(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eW("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eA=w?function(e,t,r){return a(e,t,P(1,r))}:function(e,t,r){return e[t]=r,e};var eX={},eZ={},e0=Function.prototype,e1=w&&Object.getOwnPropertyDescriptor,e2=e$(e0,"name")&&(!w||w&&e1(e0,"name").configurable),e9={},e4=x(Function.toString);W(ey.inspectSource)||(ey.inspectSource=function(e){return e4(e)}),e9=ey.inspectSource;var e3={},e7={},e8=b.WeakMap;e7=W(e8)&&/native code/.test(String(e8));var e6={},e5=eg("keys");e6=function(e){return e5[e]||(e5[e]=eL(e))};var te={};te={};var tt="Object already initialized",tr=b.TypeError,tn=b.WeakMap;if(e7||ey.state){var ti=ey.state||(ey.state=new tn);ti.get=ti.get,ti.has=ti.has,ti.set=ti.set,c=function(e,t){if(ti.has(e))throw new tr(tt);return t.facade=e,ti.set(e,t),t},s=function(e){return ti.get(e)||{}},u=function(e){return ti.has(e)}}else{var to=e6("state");te[to]=!0,c=function(e,t){if(e$(e,to))throw new tr(tt);return t.facade=e,eA(e,to,t),t},s=function(e){return e$(e,to)?e[to]:{}},u=function(e){return e$(e,to)}}var ta=(e3={set:c,get:s,has:u,enforce:function(e){return u(e)?s(e):c(e,{})},getterFor:function(e){return function(t){var r;if(!z(t)||(r=s(t)).type!==e)throw new tr("Incompatible receiver, "+e+" required");return r}}}).enforce,tc=e3.get,ts=String,tu=Object.defineProperty,tl=x("".slice),tf=x("".replace),tp=x([].join),th=w&&!E(function(){return 8!==tu(function(){},"length",{value:8}).length}),td=String(String).split("String"),tv=eZ=function(e,t,r){"Symbol("===tl(ts(t),0,7)&&(t="["+tf(ts(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!e$(e,"name")||e2&&e.name!==t)&&(w?tu(e,"name",{value:t,configurable:!0}):e.name=t),th&&r&&e$(r,"arity")&&e.length!==r.arity&&tu(e,"length",{value:r.arity});try{r&&e$(r,"constructor")&&r.constructor?w&&tu(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=ta(e);return e$(n,"source")||(n.source=tp(td,"string"==typeof t?t:"")),e};Function.prototype.toString=tv(function(){return W(this)&&tc(this).source||e9(this)},"toString"),eX=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(W(r)&&eZ(r,o,n),n.global)i?e[t]=r:eb(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:a(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tg={},ty={},tm={},tb={},t_={},tw={},tE=Math.ceil,t$=Math.floor;tw=Math.trunc||function(e){var t=+e;return(t>0?t$:tE)(t)},t_=function(e){var t=+e;return t!=t||0===t?0:tw(t)};var tS=Math.max,tj=Math.min;tb=function(e,t){var r=t_(e);return r<0?tS(r+t,0):tj(r,t)};var tO={},tL={},tP=Math.min;tL=function(e){var t=t_(e);return t>0?tP(t,0x1fffffffffffff):0},tO=function(e){return tL(e.length)};var tk=function(e){return function(t,r,n){var i,o=k(t),a=tO(o);if(0===a)return!e&&-1;var c=tb(n,a);if(e&&r!=r){for(;a>c;)if((i=o[c++])!=i)return!0}else for(;a>c;c++)if((e||c in o)&&o[c]===r)return e||c||0;return!e&&-1}},tM={includes:tk(!0),indexOf:tk(!1)}.indexOf,tx=x([].push);tm=function(e,t){var r,n=k(e),i=0,o=[];for(r in n)!e$(te,r)&&e$(n,r)&&tx(o,r);for(;t.length>i;)e$(n,r=t[i++])&&(~tM(o,r)||tx(o,r));return o};var tT=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(e){return tm(e,tT)},f=Object.getOwnPropertySymbols;var tN=x([].concat);ty=K("Reflect","ownKeys")||function(e){var t=l(eU(e));return f?tN(t,f(e)):t},tg=function(e,t,n){for(var i=ty(t),o=0;o<i.length;o++){var c=i[o];e$(e,c)||n&&e$(n,c)||a(e,c,r(t,c))}};var tI={},tF=/#|\.prototype\./,tD=function(e,t){var r=tC[tq(e)];return r===tR||r!==tH&&(W(t)?E(t):!!t)},tq=tD.normalize=function(e){return String(e).replace(tF,".").toLowerCase()},tC=tD.data={},tH=tD.NATIVE="N",tR=tD.POLYFILL="P";tI=tD,m=function(e,t){var n,i,o,a,c,s=e.target,u=e.global,l=e.stat;if(n=u?b:l?b[s]||eb(s,{}):b[s]&&b[s].prototype)for(i in t){if(a=t[i],o=e.dontCallGetSet?(c=r(n,i))&&c.value:n[i],!tI(u?i:s+(l?".":"#")+i,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tg(a,o)}(e.sham||o&&o.sham)&&eA(a,"sham",!0),eX(n,i,a,e)}};var tA={},tG={},tU=Function.prototype,tB=tU.apply,tz=tU.call;tG="object"==typeof Reflect&&Reflect.apply||(S?tz.bind(tB):function(){return tz.apply(tB,arguments)});var tW={},tY={},tQ=(tY=function(e){if("Function"===F(e))return x(e)})(tY.bind);tW=function(e,t){return el(e),void 0===t?e:S?tQ(e,t):function(){return e.apply(t,arguments)}};var tK={};tK=K("document","documentElement");var tV={};tV=x([].slice);var tJ={},tX=TypeError;tJ=function(e,t){if(e<t)throw new tX("Not enough arguments");return e};var tZ={};tZ=/(?:ipad|iphone|ipod).*applewebkit/i.test(ee);var t0={},t1={},t2=function(e){return ee.slice(0,e.length)===e};t0="NODE"==(t1=t2("Bun/")?"BUN":t2("Cloudflare-Workers")?"CLOUDFLARE":t2("Deno/")?"DENO":t2("Node.js/")?"NODE":b.Bun&&"string"==typeof Bun.version?"BUN":b.Deno&&"object"==typeof Deno.version?"DENO":"process"===F(b.process)?"NODE":b.window&&b.document?"BROWSER":"REST");var t9=b.setImmediate,t4=b.clearImmediate,t3=b.process,t7=b.Dispatch,t8=b.Function,t6=b.MessageChannel,t5=b.String,re=0,rt={},rr="onreadystatechange";E(function(){p=b.location});var rn=function(e){if(e$(rt,e)){var t=rt[e];delete rt[e],t()}},ri=function(e){return function(){rn(e)}},ro=function(e){rn(e.data)},ra=function(e){b.postMessage(t5(e),p.protocol+"//"+p.host)};t9&&t4||(t9=function(e){tJ(arguments.length,1);var t=W(e)?e:t8(e),r=tV(arguments,1);return rt[++re]=function(){tG(t,void 0,r)},h(re),re},t4=function(e){delete rt[e]},t0?h=function(e){t3.nextTick(ri(e))}:t7&&t7.now?h=function(e){t7.now(ri(e))}:t6&&!tZ?(v=(d=new t6).port2,d.port1.onmessage=ro,h=tW(v.postMessage,v)):b.addEventListener&&W(b.postMessage)&&!b.importScripts&&p&&"file:"!==p.protocol&&!E(ra)?(h=ra,b.addEventListener("message",ro,!1)):h=rr in eq("script")?function(e){tK.appendChild(eq("script"))[rr]=function(){tK.removeChild(this),rn(e)}}:function(e){setTimeout(ri(e),0)});var rc=(tA={set:t9,clear:t4}).clear;m({global:!0,bind:!0,enumerable:!0,forced:b.clearImmediate!==rc},{clearImmediate:rc});var rs=tA.set,ru={},rl=b.Function,rf=/MSIE .\./.test(ee)||"BUN"===t1&&((t=b.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));ru=function(e,t){var r=t?2:1;return rf?function(n,i){var o=tJ(arguments.length,1)>r,a=W(n)?n:rl(n),c=o?tV(arguments,r):[],s=o?function(){tG(a,this,c)}:a;return t?e(s,i):e(s)}:e};var rp=b.setImmediate?ru(rs,!1):rs;m({global:!0,bind:!0,enumerable:!0,forced:b.setImmediate!==rp},{setImmediate:rp});const rh="https://forkify-api.herokuapp.com/api/v2/recipes/",rd=async function(e){try{let t=await Promise.race([fetch(e),new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),r=await t.json();if(!t.ok)throw Error(`${r.message} (${t.status})`);return r}catch(e){throw e}},rv={recipe:{},search:{query:"",recipes:[],page:1,recipesPerPage:10}},rg=async function(e){try{let{recipe:t}=(await rd(`${rh}${e}`)).data;rv.recipe={id:t.id,image:t.image_url,sourceUrl:t.source_url,ingredients:t.ingredients,publisher:t.publisher,title:t.title,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients}}catch(e){throw e}},ry=async function(e){try{rv.search.query=e;let t=await rd(`${rh}?search=${e}`);rv.search.recipes=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url}))}catch(e){throw console.log(e),e}},rm=function(e=rv.search.page){rv.search.page=e;let t=(e-1)*rv.search.recipesPerPage,r=e*rv.search.recipesPerPage;return rv.search.recipes.slice(t,r)},rb=function(e){rv.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rv.recipe.servings}),rv.recipe.servings=e};var r_={};r_=new URL("icons.0dd9027a.svg",import.meta.url).toString();class rw{_data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e,this._clear();let t=this._generateMarkup();this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentElement.innerHTML=""}renderError(e=this._errorMessage){let t=`
      <div class="error">
        <div>
          <svg>
            <use href="${/*@__PURE__*/y(r_)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
      <div class="error">
        <div>
          <svg>
            <use href="${/*@__PURE__*/y(r_)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderSpinner(){let e=`
            <div class="spinner">
                <svg>
                  <use href="${/*@__PURE__*/y(r_)}#icon-loader"></use>
                </svg>
            </div>
          `;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",e)}}var rE={};function r$(e,t,r,n,i){var o,a,c;let s=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&s.push(t);let u=0,l=e,f=t;for(;u<=s.length;)l%s[u]==0&&f%s[u]==0?(s[u],l/=s[u],f/=s[u]):u++;return o=f,a=l,c=r,1===o&&1===a?(c=`${n}${(parseInt(c)+1).toString()}`,`${c}`):0===a?`${n}${c}`:"0"==c?`${n}${a}/${o}`:`${n}${c} ${a}/${o}`}rE=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),i=n.split("."),o=i[0];if("0"==r&&"0"!==o)return o;if("0"==r&&"0"==o)return"0";if("99"==(r=n.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==o)return`${o} 99/100`;if("99"==r&&"0"==o)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return o;let a=r.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(!a||!(r.length>2)){var c,s;return c=r,s=t,r$(parseInt(c,10),Math.pow(10,c.length),o,s,!1)}{let e=a[0].split("").reverse().join(""),n=a[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),function(e,t,r,n,i){let o=e.length-r.length>=1?e.length-r.length:1,a=Math.pow(10,o),c=parseFloat(`0.${e}`),s=Math.pow(10,t.length);return r$(Math.round((c*s-c)*Math.pow(10,o)),(s-1)*a,n,i,!0)}(r,n,e,o,t)}};class rS extends rw{_parentElement=document.querySelector(".recipe");_errorMessage="No recipes found. Please try again! :(";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;console.log(n),+n>0&&e(+n)})}_generateMarkup(){return`
    <figure class="recipe__fig">
      <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this._data.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${/*@__PURE__*/y(r_)}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${/*@__PURE__*/y(r_)}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
            <svg>
              <use href="${/*@__PURE__*/y(r_)}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
            <svg>
              <use href="${/*@__PURE__*/y(r_)}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated">

      </div>
      <button class="btn--round">
        <svg class="">
          <use href="${/*@__PURE__*/y(r_)}#icon-bookmark-fill"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
      ${this._data.ingredients.map(e=>`
        <li class="recipe__ingredient">
          <svg class="recipe__icon">
            <use href="${/*@__PURE__*/y(r_)}#icon-check"></use>
          </svg>
          <div class="recipe__quantity">${e.quantity?rE(e.quantity).toString():""}</div>
          <div class="recipe__description">
            <span class="recipe__unit">${e.unit}</span>
            ${e.description}
          </div>
        </li>

        `).join("")}

      </ul>
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${this._data.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${/*@__PURE__*/y(r_)}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
    `}}var rj=new rS;class rO{#e=document.querySelector(".search");getQuery(){let e=this.#e.querySelector(".search__field").value;return this.#t(),e}#t(){this.#e.querySelector(".search__field").value=""}addHandlerSearch(e){this.#e.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rL=new rO;class rP extends rw{_parentElement=document.querySelector(".results");_errorMessage="NO recipes found for your query! Please try again :(";_message="";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(e){return`
    <li class="preview">
        <a class="preview__link preview__link--active" href="#${e.id}">
            <figure class="preview__fig">
            <img src="${e.image}" alt="Test" />
            </figure>
            <div class="preview__data">
            <h4 class="preview__title">${e.title}</h4>
            <p class="preview__publisher">${e.publisher}</p>

            </div>
        </a>
    </li>`}}var rk=new rP;class rM extends rw{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.recipes.length/this._data.recipesPerPage);return 1===e&&t>1?`
            <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
                <span>Page ${e+1}</span>
                <svg class="search__icon">
                <use href="${/*@__PURE__*/y(r_)}#icon-arrow-right"></use>
                </svg>
            </button>
            `:e===t&&t>1?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${/*@__PURE__*/y(r_)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
        </button>`:e<t?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${/*@__PURE__*/y(r_)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
        </button>
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
            <span>Page ${e+1}</span>
            <svg class="search__icon">
            <use href="${/*@__PURE__*/y(r_)}#icon-arrow-right"></use>
            </svg>
        </button>
        `:""}}var rx=new rM,rT=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,c,s=Object.create((r&&r.prototype instanceof g?r:g).prototype);return i(s,"_invoke",{value:(a=new L(o||[]),c=p,function(r,i){if(c===h)throw Error("Generator is already running");if(c===d){if("throw"===r)throw i;return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var s=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),v;var a=f(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var c=a.arg;return c?c.done?(n[r.resultName]=c.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):c:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(o,a);if(s){if(s===v)continue;return s}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===p)throw c=d,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=h;var u=f(e,n,a);if("normal"===u.type){if(c=a.done?d:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(c=d,a.method="throw",a.arg=u.arg)}})}),s}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",h="executing",d="completed",v={};function g(){}function y(){}function m(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(P([])));w&&w!==r&&n.call(w,a)&&(b=w);var E=m.prototype=g.prototype=Object.create(b);function $(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,c){var s=f(e[i],e,o);if("throw"===s.type)c(s.arg);else{var u=s.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,c)},function(e){r("throw",e,a,c)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,c)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function P(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return y.prototype=m,i(E,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,s,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},$(S.prototype),u(S.prototype,c,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},$(E),u(E,s,"Generator"),u(E,a,function(){return this}),u(E,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=P,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return c.type="throw",c.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=rT}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rT:Function("r","regeneratorRuntime = r")(rT)}const rN=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rj.renderSpinner(),await rg(e),rj.render(rv.recipe)}catch(e){rj.renderError(),console.log(e)}},rI=async function(){try{let e=rL.getQuery();if(!e)return;rk.renderSpinner(),await ry(e),rk.render(rm()),rx.render(rv.search)}catch(e){console.log(e)}};rj.addHandlerRender(rN),rj.addHandlerUpdateServings(function(e){rb(e),rj.render(rv.recipe)}),rL.addHandlerSearch(rI),rx.addHandlerClick(function(e){rk.render(rm(e)),rx.render(rv.search)});
//# sourceMappingURL=index.75826413.js.map

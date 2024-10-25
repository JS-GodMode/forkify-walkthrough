function e(e){return e&&e.__esModule?e.default:e}var i=globalThis,t={},r={},s=i.parcelRequire6e42;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in r){var i=r[e];delete r[e];var s={id:e,exports:{}};return t[e]=s,i.call(s.exports,s,s.exports),s.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,i){r[e]=i},i.parcelRequire6e42=s),(0,s.register)("27Lyk",function(e,i){Object.defineProperty(e.exports,"register",{get:()=>t,set:e=>t=e,enumerable:!0,configurable:!0});var t,r=new Map;t=function(e,i){for(var t=0;t<i.length-1;t+=2)r.set(i[t],{baseUrl:e,path:i[t+1]})}}),s("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.75826413.js","eyyUD","icons.0dd9027a.svg"]'));const n=async function(e){try{let i=await Promise.race([fetch(e),new Promise(function(e,i){setTimeout(function(){i(Error("Request took too long! Timeout after 10 second"))},1e4)})]),t=await i.json();if(!i.ok)throw Error(`${t.message} (${i.status})`);return t}catch(e){throw e}},a={recipe:{}},c=async function(e){try{let{recipe:i}=(await n(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}`)).data;a.recipe={id:i.id,image:i.image_url,sourceUrl:i.source_url,ingredients:i.ingredients,publisher:i.publisher,title:i.title,servings:i.servings,cookingTime:i.cooking_time,ingredients:i.ingredients}}catch(e){throw e}};var o={};o=new URL("icons.0dd9027a.svg",import.meta.url).toString();var l={};function u(e,i,t,r,s){var n,a,c;let o=[2,3,5];if(!0===s)for(let i=3;i*i<=e;i+=2)e%i==0&&o.push(i);let l=0,u=e,p=i;for(;l<=o.length;)u%o[l]==0&&p%o[l]==0?(o[l],u/=o[l],p/=o[l]):l++;return n=p,a=u,c=t,1===n&&1===a?(c=`${r}${(parseInt(c)+1).toString()}`,`${c}`):0===a?`${r}${c}`:"0"==c?`${r}${a}/${n}`:`${r}${c} ${a}/${n}`}l=function(e){let i,t;if(e<0?(e=Math.abs(e),i="-"):i="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${i}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${i}${e}`;if(e<1e-6)return"0";let r=e.toString(),s=r.split("."),n=s[0];if("0"==t&&"0"!==n)return n;if("0"==t&&"0"==n)return"0";if("99"==(t=r.length>=17?s[1].slice(0,s[1].length-1):s[1])&&"0"!==n)return`${n} 99/100`;if("99"==t&&"0"==n)return"99/100";if(1-parseFloat(`.${t}`)<.0011&&(t="999"),void 0==t)return n;let a=t.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(!a||!(t.length>2)){var c,o;return c=t,o=i,u(parseInt(c,10),Math.pow(10,c.length),n,o,!1)}{let e=a[0].split("").reverse().join(""),r=a[1].split("").reverse().join("");if(r.length>1){let e=r.split(""),i=1;for(let t=0;t<e.length;t++)i/=e[0]/e[t];1===i&&(r=e[0])}return r.length>1&&r.length%2==0&&(r=parseInt(r.slice(0,r.length/2),10)-parseInt(r.slice(r.length/2,r.length),10)==0?r.slice(0,r.length/2):r),function(e,i,t,r,s){let n=e.length-t.length>=1?e.length-t.length:1,a=Math.pow(10,n),c=parseFloat(`0.${e}`),o=Math.pow(10,i.length);return u(Math.round((c*o-c)*Math.pow(10,n)),(o-1)*a,r,s,!0)}(t,r,e,n,i)}};class p{#e=document.querySelector(".recipe");#i;#t="No recipes found. Please try again! :(";#r="";render(e){this.#i=e,this.#s();let i=this.#n();this.#e.insertAdjacentHTML("afterbegin",i)}#s(){this.#e.innerHTML=""}renderError(i=this.#t){let t=`
    <div class="error">
      <div>
        <svg>
          <use href="${/*@__PURE__*/e(o)}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${i}</p>
    </div>
    `;this.#s(),this.#e.insertAdjacentHTML("afterbegin",t)}renderMessage(i=this.#r){let t=`
    <div class="error">
      <div>
        <svg>
          <use href="${/*@__PURE__*/e(o)}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${i}</p>
    </div>
    `;this.#s(),this.#e.insertAdjacentHTML("afterbegin",t)}renderSpinner(){let i=`
          <div class="spinner">
              <svg>
                <use href="${/*@__PURE__*/e(o)}#icon-loader"></use>
              </svg>
          </div>
        `;this.#e.innerHTML="",this.#e.insertAdjacentHTML("afterbegin",i)}addHandlerRender(e){["hashchange","load"].forEach(i=>window.addEventListener(i,e))}#n(){return`
    <figure class="recipe__fig">
      <img src="${this.#i.image}" alt="${this.#i.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this.#i.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${/*@__PURE__*/e(o)}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${this.#i.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${/*@__PURE__*/e(o)}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this.#i.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${/*@__PURE__*/e(o)}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${/*@__PURE__*/e(o)}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated">
        <svg>
          <use href="${/*@__PURE__*/e(o)}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round">
        <svg class="">
          <use href="${/*@__PURE__*/e(o)}#icon-bookmark-fill"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
      ${this.#i.ingredients.map(i=>`
        <li class="recipe__ingredient">
          <svg class="recipe__icon">
            <use href="${/*@__PURE__*/e(o)}#icon-check"></use>
          </svg>
          <div class="recipe__quantity">${i.quantity?l(i.quantity).toString():""}</div>
          <div class="recipe__description">
            <span class="recipe__unit">${i.unit}</span>
            ${i.description}
          </div>
        </li>

        `).join("")}

      </ul>
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${this.#i.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${this.#i.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${/*@__PURE__*/e(o)}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
    `}}var d=new p;document.querySelector(".recipe");const g=async function(){try{let e=window.location.hash.slice(1);if(!e)return;d.renderSpinner(),await c(e),d.render(a.recipe)}catch(e){d.renderError(),console.log(e)}};d.addHandlerRender(g);
//# sourceMappingURL=index.75826413.js.map

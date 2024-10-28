function e(e){return e&&e.__esModule?e.default:e}var r=globalThis,t={},i={},s=r.parcelRequire6e42;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in i){var r=i[e];delete i[e];var s={id:e,exports:{}};return t[e]=s,r.call(s.exports,s,s.exports),s.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,r){i[e]=r},r.parcelRequire6e42=s),(0,s.register)("27Lyk",function(e,r){Object.defineProperty(e.exports,"register",{get:()=>t,set:e=>t=e,enumerable:!0,configurable:!0});var t,i=new Map;t=function(e,r){for(var t=0;t<r.length-1;t+=2)i.set(r[t],{baseUrl:e,path:r[t+1]})}}),s("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.75826413.js","eyyUD","icons.0dd9027a.svg"]'));const n="https://forkify-api.herokuapp.com/api/v2/recipes/",a=async function(e){try{let r=await Promise.race([fetch(e),new Promise(function(e,r){setTimeout(function(){r(Error("Request took too long! Timeout after 10 second"))},1e4)})]),t=await r.json();if(!r.ok)throw Error(`${t.message} (${r.status})`);return t}catch(e){throw e}},c={recipe:{},search:{query:"",recipes:[]}},l=async function(e){try{let{recipe:r}=(await a(`${n}${e}`)).data;c.recipe={id:r.id,image:r.image_url,sourceUrl:r.source_url,ingredients:r.ingredients,publisher:r.publisher,title:r.title,servings:r.servings,cookingTime:r.cooking_time,ingredients:r.ingredients}}catch(e){throw e}},o=async function(e){try{c.search.query=e;let r=await a(`${n}?search=${e}`);c.search.recipes=r.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url}))}catch(e){throw console.log(e),e}};var u={};u=new URL("icons.0dd9027a.svg",import.meta.url).toString();class p{_data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e,this._clear();let r=this._generateMarkup();this._parentElement.insertAdjacentHTML("afterbegin",r)}_clear(){this._parentElement.innerHTML=""}renderError(r=this._errorMessage){let t=`
      <div class="error">
        <div>
          <svg>
            <use href="${/*@__PURE__*/e(u)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${r}</p>
      </div>
      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(r=this._message){let t=`
      <div class="error">
        <div>
          <svg>
            <use href="${/*@__PURE__*/e(u)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${r}</p>
      </div>
      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderSpinner(){let r=`
            <div class="spinner">
                <svg>
                  <use href="${/*@__PURE__*/e(u)}#icon-loader"></use>
                </svg>
            </div>
          `;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",r)}}var d={};function g(e,r,t,i,s){var n,a,c;let l=[2,3,5];if(!0===s)for(let r=3;r*r<=e;r+=2)e%r==0&&l.push(r);let o=0,u=e,p=r;for(;o<=l.length;)u%l[o]==0&&p%l[o]==0?(l[o],u/=l[o],p/=l[o]):o++;return n=p,a=u,c=t,1===n&&1===a?(c=`${i}${(parseInt(c)+1).toString()}`,`${c}`):0===a?`${i}${c}`:"0"==c?`${i}${a}/${n}`:`${i}${c} ${a}/${n}`}d=function(e){let r,t;if(e<0?(e=Math.abs(e),r="-"):r="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${r}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${r}${e}`;if(e<1e-6)return"0";let i=e.toString(),s=i.split("."),n=s[0];if("0"==t&&"0"!==n)return n;if("0"==t&&"0"==n)return"0";if("99"==(t=i.length>=17?s[1].slice(0,s[1].length-1):s[1])&&"0"!==n)return`${n} 99/100`;if("99"==t&&"0"==n)return"99/100";if(1-parseFloat(`.${t}`)<.0011&&(t="999"),void 0==t)return n;let a=t.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(!a||!(t.length>2)){var c,l;return c=t,l=r,g(parseInt(c,10),Math.pow(10,c.length),n,l,!1)}{let e=a[0].split("").reverse().join(""),i=a[1].split("").reverse().join("");if(i.length>1){let e=i.split(""),r=1;for(let t=0;t<e.length;t++)r/=e[0]/e[t];1===r&&(i=e[0])}return i.length>1&&i.length%2==0&&(i=parseInt(i.slice(0,i.length/2),10)-parseInt(i.slice(i.length/2,i.length),10)==0?i.slice(0,i.length/2):i),function(e,r,t,i,s){let n=e.length-t.length>=1?e.length-t.length:1,a=Math.pow(10,n),c=parseFloat(`0.${e}`),l=Math.pow(10,r.length);return g(Math.round((c*l-c)*Math.pow(10,n)),(l-1)*a,i,s,!0)}(t,i,e,n,r)}};class h extends p{_parentElement=document.querySelector(".recipe");_errorMessage="No recipes found. Please try again! :(";_message="";addHandlerRender(e){["hashchange","load"].forEach(r=>window.addEventListener(r,e))}_generateMarkup(){return`
    <figure class="recipe__fig">
      <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this._data.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${/*@__PURE__*/e(u)}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${/*@__PURE__*/e(u)}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${/*@__PURE__*/e(u)}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${/*@__PURE__*/e(u)}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated">

      </div>
      <button class="btn--round">
        <svg class="">
          <use href="${/*@__PURE__*/e(u)}#icon-bookmark-fill"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
      ${this._data.ingredients.map(r=>`
        <li class="recipe__ingredient">
          <svg class="recipe__icon">
            <use href="${/*@__PURE__*/e(u)}#icon-check"></use>
          </svg>
          <div class="recipe__quantity">${r.quantity?d(r.quantity).toString():""}</div>
          <div class="recipe__description">
            <span class="recipe__unit">${r.unit}</span>
            ${r.description}
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
          <use href="${/*@__PURE__*/e(u)}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
    `}}var _=new h;class v{#e=document.querySelector(".search");getQuery(){let e=this.#e.querySelector(".search__field").value;return this.#r(),e}#r(){this.#e.querySelector(".search__field").value=""}addHandlerSearch(e){this.#e.addEventListener("submit",function(r){r.preventDefault(),e()})}}var f=new v;class m extends p{_parentElement=document.querySelector(".results");_errorMessage="NO recipes found for your query! Please try again :(";_message="";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(e){return`
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
    </li>`}}var $=new m;const w=async function(){try{let e=window.location.hash.slice(1);if(!e)return;_.renderSpinner(),await l(e),_.render(c.recipe)}catch(e){_.renderError(),console.log(e)}},y=async function(){let e=f.getQuery();e&&($.renderSpinner(),await o(e),$.render(c.search.recipes))};_.addHandlerRender(w),f.addHandlerSearch(y);
//# sourceMappingURL=index.75826413.js.map

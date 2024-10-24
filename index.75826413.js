function e(e){return e&&e.__esModule?e.default:e}var i=globalThis,s={},t={},n=i.parcelRequire6e42;null==n&&((n=function(e){if(e in s)return s[e].exports;if(e in t){var i=t[e];delete t[e];var n={id:e,exports:{}};return s[e]=n,i.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,i){t[e]=i},i.parcelRequire6e42=n),(0,n.register)("27Lyk",function(e,i){Object.defineProperty(e.exports,"register",{get:()=>s,set:e=>s=e,enumerable:!0,configurable:!0});var s,t=new Map;s=function(e,i){for(var s=0;s<i.length-1;s+=2)t.set(i[s],{baseUrl:e,path:i[s+1]})}}),n("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.75826413.js","eyyUD","icons.0dd9027a.svg"]'));var r={};r=new URL("icons.0dd9027a.svg",import.meta.url).toString();var a={};function c(e,i,s,t,n){var r,a,c;let l=[2,3,5];if(!0===n)for(let i=3;i*i<=e;i+=2)e%i==0&&l.push(i);let o=0,u=e,p=i;for(;o<=l.length;)u%l[o]==0&&p%l[o]==0?(l[o],u/=l[o],p/=l[o]):o++;return r=p,a=u,c=s,1===r&&1===a?(c=`${t}${(parseInt(c)+1).toString()}`,`${c}`):0===a?`${t}${c}`:"0"==c?`${t}${a}/${r}`:`${t}${c} ${a}/${r}`}a=function(e){let i,s;if(e<0?(e=Math.abs(e),i="-"):i="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${i}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${i}${e}`;if(e<1e-6)return"0";let t=e.toString(),n=t.split("."),r=n[0];if("0"==s&&"0"!==r)return r;if("0"==s&&"0"==r)return"0";if("99"==(s=t.length>=17?n[1].slice(0,n[1].length-1):n[1])&&"0"!==r)return`${r} 99/100`;if("99"==s&&"0"==r)return"99/100";if(1-parseFloat(`.${s}`)<.0011&&(s="999"),void 0==s)return r;let a=s.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(!a||!(s.length>2)){var l,o;return l=s,o=i,c(parseInt(l,10),Math.pow(10,l.length),r,o,!1)}{let e=a[0].split("").reverse().join(""),t=a[1].split("").reverse().join("");if(t.length>1){let e=t.split(""),i=1;for(let s=0;s<e.length;s++)i/=e[0]/e[s];1===i&&(t=e[0])}return t.length>1&&t.length%2==0&&(t=parseInt(t.slice(0,t.length/2),10)-parseInt(t.slice(t.length/2,t.length),10)==0?t.slice(0,t.length/2):t),function(e,i,s,t,n){let r=e.length-s.length>=1?e.length-s.length:1,a=Math.pow(10,r),l=parseFloat(`0.${e}`),o=Math.pow(10,i.length);return c(Math.round((l*o-l)*Math.pow(10,r)),(o-1)*a,t,n,!0)}(s,t,e,r,i)}};const l=document.querySelector(".recipe");!async function(){try{let i=await fetch("https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886"),{recipe:s}=(await i.json()).data;s={id:s.id,image:s.image_url,sourceUrl:s.source_url,ingredients:s.ingredients,publisher:s.publisher,title:s.title,servings:s.servings,cookingTime:s.cooking_time,ingredients:s.ingredients},console.log(s);let t=`
    <figure class="recipe__fig">
      <img src="${s.image}" alt="${s.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${s.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${/*@__PURE__*/e(r)}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${s.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${/*@__PURE__*/e(r)}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${s.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${/*@__PURE__*/e(r)}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${/*@__PURE__*/e(r)}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated">
        <svg>
          <use href="${/*@__PURE__*/e(r)}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round">
        <svg class="">
          <use href="${/*@__PURE__*/e(r)}#icon-bookmark-fill"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
      ${s.ingredients.map(i=>`
        <li class="recipe__ingredient">
          <svg class="recipe__icon">
            <use href="${/*@__PURE__*/e(r)}#icon-check"></use>
          </svg>
          <div class="recipe__quantity">${i.quantity?a(i.quantity).toString():""}</div>
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
        <span class="recipe__publisher">${s.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${s.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${/*@__PURE__*/e(r)}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
    `;l.innerHTML="",l.insertAdjacentHTML("afterbegin",t)}catch(e){alert(e)}}();
//# sourceMappingURL=index.75826413.js.map

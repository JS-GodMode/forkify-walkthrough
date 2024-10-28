import * as model from './model';
import icons from 'url:../img/icons.svg';

import recipeView from './views/recipeView';
import searchView from './views/searchView';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    //0. render spinner
    recipeView.renderSpinner();

    //1. load data from api
    await model.loadRecipe(id);

    //2. render recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    // alert(error);
    recipeView.renderError();
    console.log(error);
  }
};

const controlSearchResults = async function () {
  const query = searchView.getQuery();
  console.log(query);
  await model.loadSearchResults(query);
  console.log(model.state.search.recipes);
};
// controlSearchResults();

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};

init();
// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);

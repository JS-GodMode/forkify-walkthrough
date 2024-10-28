import * as model from './model';

import recipeView from './views/recipeView';
import searchView from './views/searchView';
import resultsView from './views/resultsView';

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
  // 1. get search query
  const query = searchView.getQuery();
  if (!query) return;

  resultsView.renderSpinner();

  // 2. Load search results
  await model.loadSearchResults(query);

  //3. render the results
  resultsView.render(model.state.search.recipes);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};

init();

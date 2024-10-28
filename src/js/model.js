import { API_URL } from './config';
import { getJSON } from './helpers';

export const state = {
  recipe: {},
  search: {
    query: '',
    recipes: [],
  },
};

export const loadRecipe = async function (id) {
  try {
    //1. load data from api
    const data = await getJSON(`${API_URL}${id}`);
    const { recipe } = data.data;

    state.recipe = {
      id: recipe.id,
      image: recipe.image_url,
      sourceUrl: recipe.source_url,
      ingredients: recipe.ingredients,
      publisher: recipe.publisher,
      title: recipe.title,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    //   console.log(recipe);
  } catch (error) {
    // alert(error);
    throw error;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}`);

    state.search.recipes = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      };
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

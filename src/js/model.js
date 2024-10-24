export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    //1. load data from api
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    // console.log(res);
    const data = await res.json();

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
    alert(error);
  }
};

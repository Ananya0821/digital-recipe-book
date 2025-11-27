
import Recipe from "../models/recipeModel.js";

// @desc Get all recipes
export const getRecipes = async (req, res) => {
  const recipes = await Recipe.find();
  res.json(recipes);
};

// @desc Create new recipe
export const createRecipe = async (req, res) => {
  const recipe = await Recipe.create(req.body);
  res.status(201).json(recipe);
};

// @desc Get recipe by ID
export const getRecipeById = async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  if (!recipe) return res.status(404).json({ message: "Recipe not found" });
  res.json(recipe);
};

// @desc Update recipe
export const updateRecipe = async (req, res) => {
  const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(recipe);
};

// @desc Delete recipe
export const deleteRecipe = async (req, res) => {
  await Recipe.findByIdAndDelete(req.params.id);
  res.json({ message: "Recipe removed" });
};

// src/components/RecipeGrid.jsx

import { FaUtensils } from "react-icons/fa";
import RecipeCard from "./RecipeCard";

const RecipeGrid = ({ recipes = [] }) => {

  // ⭐ STEP E — EMPTY STATE
  if (recipes.length === 0) {
    return (
      <div className="text-center py-20 text-brown-300 flex flex-col items-center gap-4">
        <FaUtensils className="text-5xl text-caramel-300" />

        <p className="text-lg font-display text-brown-400">
          No recipes found
        </p>

        <p className="text-brown-300">
          Start adding your favorite dishes!
        </p>
      </div>
    );
  }

  return (
    <div className="pt-6">

      <div className="flex items-baseline justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-brown-400">
            Your Recipes
          </h2>
          <p className="text-xs text-brown-300">
            {recipes.length} recipe{recipes.length !== 1 && "s"} found
          </p>
        </div>

        <button className="px-4 py-2 rounded-full border border-caramel-300 text-caramel-500 hover:bg-cream-100 transition flex items-center gap-2">
          + Add new recipe
        </button>
      </div>

      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id || recipe._id || recipe.title} recipe={recipe} />
        ))}
      </div>

    </div>
  );
};

export default RecipeGrid;

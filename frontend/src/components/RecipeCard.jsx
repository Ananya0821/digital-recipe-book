// src/components/RecipeCard.jsx
import React from "react";
import { FaClock, FaCarrot, FaUtensils } from "react-icons/fa";

const RecipeCard = ({ recipe = {} }) => {
  const {
    image = "https://via.placeholder.com/1200x800?text=No+image",
    title = "Untitled",
    category = "",
    rating = "-",
    time = "-",
    difficulty = "Unknown",
    tags = [],
    veg = true,
  } = recipe || {};

  return (
    <article className="bg-white rounded-xl2 overflow-hidden border border-neutral-200 shadow-card hover:shadow-hover hover:-translate-y-1 transition transform flex flex-col">
      <div className="relative h-44 w-full">
        <img src={image} alt={title} className="w-full h-full object-cover" />

        {category && (
          <div className="absolute top-3 left-3 bg-brown-400/80 text-white px-3 py-1 rounded-full text-xs">
            {category}
          </div>
        )}

        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full shadow flex items-center justify-center">
          {veg ? (
            <FaCarrot className="text-green-600" aria-hidden="true" />
          ) : (
            <FaUtensils className="text-red-500" aria-hidden="true" />
          )}
        </div>
      </div>

      <div className="p-4 flex flex-col gap-3">
        <div className="flex justify-between items-start gap-3">
          <h3 className="text-sm font-semibold text-brown-400 leading-tight">{title}</h3>
          <span className="text-xs text-caramel-400 font-semibold">★ {rating}</span>
        </div>

        <p className="text-xs text-brown-300 flex items-center gap-2">
          <FaClock className="text-brown-300" aria-hidden="true" /> {time} mins • {difficulty}
        </p>

        <div className="flex flex-wrap gap-2">
          {(tags || []).map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full bg-cream-200 text-xs text-brown-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default RecipeCard;

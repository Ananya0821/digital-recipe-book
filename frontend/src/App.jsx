// src/App.jsx
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SidebarFilters from "./components/SidebarFilters";
import RecipeGrid from "./components/RecipeGrid";

/* ---------------- MOCK RECIPES: existing + 3 newly added ---------------- */
const MOCK_RECIPES = [
  {
    id: 1,
    title: "Creamy Paneer Butter Masala",
    category: "Dinner",
    time: 40,
    difficulty: "Intermediate",
    rating: 4.8,
    tags: ["Indian", "Vegetarian"],
    image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1200",
    veg: true,
  },
  {
    id: 2,
    title: "Classic Margherita Pizza",
    category: "Lunch",
    time: 25,
    difficulty: "Easy",
    rating: 4.5,
    tags: ["Italian", "Vegetarian"],
    image: "https://images.pexels.com/photos/1596888/pexels-photo-1596888.jpeg?auto=compress&cs=tinysrgb&w=1200",
    veg: true,
  },
  {
    id: 3,
    title: "Overnight Oats with Fruits",
    category: "Breakfast",
    time: 10,
    difficulty: "Easy",
    rating: 4.2,
    tags: ["Healthy", "Vegetarian"],
    image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1200",
    veg: true,
  },
  {
    id: 4,
    title: "Spicy Chicken Tikka Wraps",
    category: "Lunch",
    time: 30,
    difficulty: "Intermediate",
    rating: 4.6,
    tags: ["Indian", "Non-Veg", "Street Food"],
    image: "https://images.pexels.com/photos/4611989/pexels-photo-4611989.jpeg?auto=compress&cs=tinysrgb&w=1200",
    veg: false,
  },
  {
    id: 5,
    title: "Caramel Banana Pancakes",
    category: "Breakfast",
    time: 20,
    difficulty: "Easy",
    rating: 4.7,
    tags: ["Breakfast", "Sweet"],
    image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1200",
    veg: true,
  },
  {
    id: 6,
    title: "Mango Lassi Cheesecake (No Bake)",
    category: "Dessert",
    time: 60,
    difficulty: "Intermediate",
    rating: 4.9,
    tags: ["Dessert", "Fusion"],
    image: "https://images.pexels.com/photos/302680/pexels-photo-302680.jpeg?auto=compress&cs=tinysrgb&w=1200",
    veg: true,
  },

  /* ---- three MORE recipes you asked to add now ---- */
  {
    id: 7,
    title: "Herbed Lemon Salmon",
    category: "Dinner",
    time: 28,
    difficulty: "Easy",
    rating: 4.7,
    tags: ["Seafood", "Healthy"],
    image: "https://images.pexels.com/photos/46239/salmon-dish-food-healthy-46239.jpeg?auto=compress&cs=tinysrgb&w=1200",
    veg: false,
  },
  {
    id: 8,
    title: "Roasted Vegetable Buddha Bowl",
    category: "Lunch",
    time: 35,
    difficulty: "Easy",
    rating: 4.6,
    tags: ["Vegan", "Healthy"],
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200",
    veg: true,
  },
  {
    id: 9,
    title: "Chocolate Lava Cake",
    category: "Dessert",
    time: 25,
    difficulty: "Intermediate",
    rating: 4.9,
    tags: ["Dessert", "Chocolate"],
    image: "https://images.pexels.com/photos/4109996/pexels-photo-4109996.jpeg?auto=compress&cs=tinysrgb&w=1200",
    veg: true,
  },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecipes = MOCK_RECIPES.filter((r) => {
    const matchesCategory =
      selectedCategory === "All" || r.category === selectedCategory;
    const lower = searchTerm.toLowerCase();
    const matchesSearch =
      r.title.toLowerCase().includes(lower) ||
      (r.tags || []).some((t) => t.toLowerCase().includes(lower));
    return matchesCategory && matchesSearch;
  });

  return (
    /* Choose wrapper class:
       - Use "app-watermark" for centered background watermark (Option A)
       - Use "corner-watermark" for corner accent (Option C)
       You can combine with the fixed overlay below if desired.
    */
    <div className="app-watermark min-h-screen">
      {/* Option B overlay: uncomment to enable fixed centered overlay */}
      <div className="fixed-watermark-overlay pointer-events-none">
        <img src="/recipebook_logo.jpg" alt="RecipeNest watermark" style={{ width: 520, opacity: 0.10, filter: 'blur(.3px)'}} />
      </div>

      <div className="app-content relative z-10 min-h-screen flex flex-col">
        <Navbar />
        <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 pb-10 flex gap-6">
          <aside className="hidden md:block w-64 shrink-0">
            <SidebarFilters
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </aside>

          <section className="flex-1">
            <RecipeGrid recipes={filteredRecipes} />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;

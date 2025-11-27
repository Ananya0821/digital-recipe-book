// src/components/SidebarFilters.jsx

import { FaBreadSlice, FaPizzaSlice, FaCoffee, FaIceCream } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";

const categories = ["All", "Breakfast", "Lunch", "Dinner", "Snacks", "Dessert"];

// Map category → icon
const iconMap = {
  All: <GiKnifeFork />,
  Breakfast: <FaBreadSlice />,
  Lunch: <FaPizzaSlice />,
  Dinner: <GiKnifeFork />,
  Snacks: <FaPizzaSlice />,
  Dessert: <FaIceCream />,
};

const SidebarFilters = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="card sticky top-24">
      <p className="text-xs font-semibold text-brown-300 uppercase tracking-widest mb-3">
        Filter
      </p>

      <div className="space-y-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`w-full flex items-center justify-between px-4 py-2 rounded-lg text-sm ${
              selectedCategory === cat
                ? "bg-caramel-500 text-white border-caramel-500"
                : "border border-neutral-200 text-brown-400 hover:bg-neutral-50"
            }`}
          >
            {/* LEFT SIDE → Icon + Text */}
            <span className="flex items-center gap-2">
              {iconMap[cat]}
              {cat}
            </span>

            {/* RIGHT SIDE → Optional indicator bullet */}
            {selectedCategory === cat && <span>•</span>}
          </button>
        ))}
      </div>

      <div className="mt-5 border-t pt-4">
        <p className="text-xs font-semibold text-brown-300 mb-2">Coming soon</p>
        <ul className="text-xs text-brown-200 space-y-1">
          <li>• Filter by cooking time</li>
          <li>• Filter by difficulty</li>
          <li>• Favourite recipes</li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarFilters;

// src/components/Navbar.jsx
import { FaUtensils } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 bg-cream-100/80 backdrop-blur border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo + Icon */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-caramel-500 flex items-center justify-center text-white text-lg shadow-card">
            <FaUtensils />
          </div>
          <div>
            <p className="font-semibold text-brown-400 flex items-center gap-1">
              RecipeNest
            </p>
            <p className="text-xs text-brown-200">Digital Recipe Book</p>
          </div>
        </div>

        <nav className="flex items-center gap-3 text-sm">
          <button className="btn-outline hidden md:inline-flex">Explore</button>
          <button className="btn-outline hidden md:inline-flex">My Recipes</button>
          <button className="btn-primary">Sign in</button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

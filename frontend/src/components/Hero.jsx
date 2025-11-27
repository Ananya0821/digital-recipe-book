// src/components/Hero.jsx
import { FaSearch } from "react-icons/fa";

const Hero = ({ searchTerm, setSearchTerm }) => {
  return (
    <section className="w-full border-b bg-gradient-to-br from-cream-100 to-cream-50">
      <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="kicker">Digital Recipe Book</p>

          <h1 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight text-brown-500">
            Save, organize & cook your favourite recipes beautifully.
          </h1>

          <p className="mt-4 text-brown-300 max-w-lg">
            Search across your personal cookbook, filter by category and cook with confidence.
            Built for home chefs, food bloggers and families.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <button className="btn-primary">Create recipe</button>
            <button className="btn-outline">Import</button>
          </div>
        </div>

        <div className="w-full max-w-md">
          <label htmlFor="hero-search" className="text-sm font-medium text-brown-300">
            Search recipes
          </label>

          <div className="mt-2 flex items-center gap-3 rounded-full border border-neutral-200 bg-white px-4 py-2 shadow-sm">
            <span className="text-brown-200" aria-hidden="true">
              <FaSearch />
            </span>

            <input
              id="hero-search"
              type="text"
              placeholder="Try 'paneer', 'breakfast', 'pasta'..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search recipes"
              className="flex-1 bg-transparent text-brown-400 outline-none focus:ring-2 focus:ring-caramel-200 focus:border-transparent rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { MdOutlineSearch } from "react-icons/md";
import { NavLink } from "react-router-dom";


function Navbar({ bgColor = "#647403", textColor = "white"}) {
  // default color diya hai
  return (
    <div
      className={`flex text-white px-25 py-10 justify-between`}
      style={{ backgroundColor: bgColor, color: textColor }} // 👈 yahan dynamic color lagaya
    >
      <div>
        <h1 className='text-5xl font-["syne"]'>My Food</h1>
      </div>
      <div className='flex text-2xl cursor-pointer font-["synebold"] items-center gap-15'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/recipes">Recipes</NavLink>
        <NavLink to="/RecipeMainPage">RecipeDetails</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <span className="font-bold">
          <MdOutlineSearch size={30} />
        </span>
      </div>
    </div>
  );
}

export default Navbar;

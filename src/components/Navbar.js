import { Link, NavLink } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="shadow-lg backdrop-blur-lg py-5 text-gray-900 bg-gray-50">
      <nav className="flex items-center container mx-auto">
        <div>
          <Link to="/" className="text-gray-700 italic text-4xl">
          Buy-Sell Furnitures
          </Link>
        </div>
        <ul className="list-none flex justify-center items-center ml-auto gap-5">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/booking">Booking</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Blogs</NavLink>
          </li>

          <div className="sm:col-span-3">
                        
                        <div className="mt-2">
                            <select id="country" name="country" autoComplete="country-name" className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                <option>Seller</option>
                                <option>Buyer</option>
                                <option>Admin</option>
                            </select>
                        </div>
                    </div>

          <li>
            <NavLink to="/login">
              <FaArrowCircleLeft />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

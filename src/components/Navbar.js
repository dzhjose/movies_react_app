import ButtonDarkMode from "./ButtonDarkMode";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const toggleMenu = () => {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("hidden");
  };

  return (
    <nav className="bg-gray-100 dark:bg-gray-600">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
            <NavLink
                to="/"
                className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
              >
                <svg
                  className="h-6 w-6 mr-1 text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                <span className="font-bold dark:text-white">Movies App</span>
                </NavLink>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <NavLink
                to="/"
                className="py-5 px-3 text-gray-700 hover:text-gray-900 dark:text-white"
              >
                Home
              </NavLink>
              <NavLink
                to="/movies"
                className="py-5 px-3 text-gray-700 hover:text-gray-900 dark:text-white"
              >
                Movies
              </NavLink>
            </div>
          </div>

          {/* <div className="hidden md:flex items-center space-x-1">
        <a href="" className="py-5 px-3">Login</a>
        <a href="" className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Signup</a>
      </div> */}

          <div className="flex items-center">
            <div className="md:hidden flex items-center py-2 px-4">
              <button className="mobile-menu-button" onClick={() => toggleMenu() }>
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <div className="py-2 px-4">
              <ButtonDarkMode />
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-menu hidden md:hidden shadow-md">
        <NavLink
          to="/"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          Movies
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

import { NavLink } from "react-router-dom";
import logo from "../assets/NavLogo2.png";

const Navbar = () => {

    
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center w-1/2 justify-between">
            <img src={logo} alt="Logo" className="w-64" />
            <h1 className="text-white ml-2 text-2xl font-bold">CarVerse</h1>
          </div>
          <ul className="flex space-x-4">
            <li className="text-white">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-white">
              <NavLink to="/products">Add product</NavLink>
            </li>
            <li className="text-white">
              <NavLink to="/cart">My Cart</NavLink>
            </li>
            <li className="text-white">
              <NavLink to="/login">Log in/Register</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

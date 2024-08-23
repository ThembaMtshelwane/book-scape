import { Link } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <nav className="flex justify-between border-2 border-green-500 p-5 items-center">
      <Link
        className="border-2 border-red-500 flex justify-center py-2 px-4"
        to="/dashboard"
      >
        Logo
      </Link>

      <ul className=" hidden sm:flex ">
        <li className="border-2 border-black  mx-1">
          <Link className=" flex justify-center py-2 px-4" to="/dashbaord">
            Favourites
          </Link>
        </li>
        <li className="border-2 border-black  mx-1">
          <Link className=" flex justify-center py-2 px-4 " to="/dashbaord">
            Reaing
          </Link>
        </li>
        <li className="border-2 border-black  mx-1">
          <Link className=" flex justify-center py-2 px-4 " to="/dashbaord">
            To Read
          </Link>
        </li>
        <li className="border-2 border-black  mx-1">
          <Link className=" flex justify-center py-2 px-4" to="/dashbaord">
            Read
          </Link>
        </li>
      </ul>

      {toggle ? (
        <IoMenu
          className="sm:hidden"
          onClick={() => setToggle((prevState) => !prevState)}
        />
      ) : (
        <ul className="fixed w-full h-full flex flex-col items-center bg-blueGray sm:hidden">
          <li
            onClick={() => setToggle((prevState) => !prevState)}
            className="nav-item"
          >
            <Link className=" w-full p-3 flex justify-center " to="/dashbaord">
              <IoClose />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="w-full p-3 flex justify-center" to="/favourites">
              Favourites
            </Link>
          </li>
          <li className="nav-item">
            <Link className="w-full p-3 flex justify-center" to="/reading">
              Reaing
            </Link>
          </li>
          <li className="nav-item">
            <Link className="w-full p-3 flex justify-center" to="/to-read">
              To Read
            </Link>
          </li>
          <li className="nav-item">
            <Link className="w-full p-3 flex justify-center" to="/read">
              Read
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

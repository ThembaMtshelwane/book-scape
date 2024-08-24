import { Link } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <nav className="flex justify-between  p-5 items-center">
      <Link
        className=" flex justify-center py-2 px-4 overflow-hidden"
        to="/dashboard"
      >
        <img
          src="/logo.jpg"
          alt=""
          className="object-cover object-centerborder-2 border-yellowGreen rounded-[100%] w-[60px] h-[60px] "
        />
      </Link>

      <ul className=" hidden sm:flex ">
        <li className="nav-item-desktop ">
          <Link
            className=" flex justify-center py-2 px-4 "
            to="/latest-books/1"
          >
            {/* Favourites */}
            Latest Books
          </Link>
        </li>
        <li className="nav-item-desktop">
          <Link className=" flex justify-center py-2 px-4 " to="/about-us">
            {/* Reaing */}
            About Us
          </Link>
        </li>

        <li className="nav-item-desktop ">
          <Link className=" flex justify-center py-2 px-4 " to="/">
            Log-Out
          </Link>
        </li>
        {/* <li className="nav-item-desktop ">
          <Link className=" flex justify-center py-2 px-4" to="/read">
            Read
          </Link>
        </li> */}
      </ul>

      {toggle ? (
        <IoMenu
          className="sm:hidden hover:text-yellowGreen text-3xl nav-item-desktop "
          onClick={() => setToggle((prevState) => !prevState)}
        />
      ) : (
        <ul className="fixed z-[999] w-full h-screen border-[5px] border-green-500 top-0 left-0 flex flex-col items-center bg-blueGray sm:hidden">
          <li
            onClick={() => setToggle((prevState) => !prevState)}
            className="nav-item"
          >
            <Link className=" w-full p-3 flex justify-center " to="/dashboard">
              <IoClose />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="w-full p-3 flex justify-center"
              to="/latest-books/1"
            >
              {/* Favourites */}
              Latest Books
            </Link>
          </li>
          <li className="nav-item">
            <Link className="w-full p-3 flex justify-center" to="/about-us">
              {/* Reaing */}
              About Us
            </Link>
          </li>

          {/* <li className="nav-item">
            <Link className="w-full p-3 flex justify-center" to="/to-read">
              To Read
            </Link>
          </li>
          <li className="nav-item">
            <Link className="w-full p-3 flex justify-center" to="/read">
              Read
            </Link>
          </li> */}

          <li className="nav-item ">
            <Link className=" flex justify-center py-2 px-4 " to="/">
              Log-Out
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

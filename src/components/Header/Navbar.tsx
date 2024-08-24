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
          src="logo.jpg"
          alt=""
          className="object-cover object-centerborder-2 border-yellowGreen rounded-[100%] w-[90px] h-[90px] "
        />
      </Link>

      <ul className=" hidden sm:flex ">
        <li className="nav-item-desktop ">
          <Link className=" flex justify-center py-2 px-4 " to="/favourites">
            Favourites
          </Link>
        </li>
        <li className="nav-item-desktop">
          <Link className=" flex justify-center py-2 px-4 " to="/reading">
            Reaing
          </Link>
        </li>
        <li className="nav-item-desktop ">
          <Link className=" flex justify-center py-2 px-4 " to="/to-read">
            To Read
          </Link>
        </li>
        <li className="nav-item-desktop ">
          <Link className=" flex justify-center py-2 px-4" to="/read">
            Read
          </Link>
        </li>
      </ul>

      {toggle ? (
        <IoMenu
          className="sm:hidden hover:text-yellowGreen text-3xl nav-item-desktop "
          onClick={() => setToggle((prevState) => !prevState)}
        />
      ) : (
        <ul className="fixed w-full h-screen top-0 left-0 flex flex-col items-center bg-blueGray sm:hidden">
          <li
            onClick={() => setToggle((prevState) => !prevState)}
            className="nav-item"
          >
            <Link className=" w-full p-3 flex justify-center " to="/dashboard">
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

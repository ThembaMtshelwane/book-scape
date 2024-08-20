import { Link } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <nav className="flex justify-between">
      <Link to="/dashbaord">Logo</Link>

      {toggle ? (
        <IoMenu onClick={() => setToggle((prevState) => !prevState)} />
      ) : (
        <ul className="">
          <li>
            <IoClose onClick={() => setToggle((prevState) => !prevState)} />
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>{" "}
          </li>
          <li>
            <Link to="/reading">Reaing</Link>{" "}
          </li>
          <li>
            <Link to="/to-read">To Read</Link>{" "}
          </li>
          <li>
            <Link to="/read">Read</Link>{" "}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

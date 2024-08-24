import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <section className="flex flex-row-reverse justify-around bg-blueGray opacity-90 h-fit p-5 md:h-[20vh]  md:justify-between">
        <ul className="md:flex">
          <li className="nav-item-desktop ">
            <Link className="flex justify-center py-2 px-4" to="/dashboard">
              Facebook
            </Link>
          </li>
          <li className="nav-item-desktop ">
            <Link className="flex justify-center py-2 px-4" to="/dashboard">
              Twiiter
            </Link>
          </li>
          <li className="nav-item-desktop ">
            <Link className="flex justify-center py-2 px-4" to="/dashboard">
              Pinterest
            </Link>
          </li>
        </ul>

        <ul className=" md:flex">
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
      </section>
    </footer>
  );
};

export default Footer;

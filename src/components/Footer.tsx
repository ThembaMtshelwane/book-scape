import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative -z-[1]">
      <section className="flex flex-row-reverse justify-around bg-blueGray opacity-90 h-fit p-5 md:h-[20vh]  md:justify-between">
        <ul className="md:flex">
          <li className="nav-item-desktop ">
            <Link
              className="flex justify-center py-2 px-4"
              to="/https:/facebook.com/"
            >
              Facebook
            </Link>
          </li>
          <li className="nav-item-desktop ">
            <Link className="flex justify-center py-2 px-4" to="/https:/x.com/">
              Twiiter
            </Link>
          </li>
          <li className="nav-item-desktop ">
            <Link
              className="flex justify-center py-2 px-4"
              to="/https://pinterest.com/"
            >
              Pinterest
            </Link>
          </li>
        </ul>

        <ul className=" md:flex">
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
          {/* <li className="nav-item-desktop ">
            <Link className=" flex justify-center py-2 px-4 " to="/to-read">
              To Read
            </Link>
          </li>
          <li className="nav-item-desktop ">
            <Link className=" flex justify-center py-2 px-4" to="/read">
              Read
            </Link>
          </li> */}
          <li className="nav-item-desktop">
            <Link className=" flex justify-center py-2 px-4 " to="/">
              Log-Out
            </Link>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;

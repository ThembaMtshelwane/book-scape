import Navbar from "./Navbar";
import Search from "./Search/Search";

const Header = () => {
  return (
    <section className="border-2 border-black h-[50vh] bg-blueGray">
      <Navbar />
      <Search />
    </section>
  );
};

export default Header;

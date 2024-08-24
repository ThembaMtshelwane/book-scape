import Navbar from "./Navbar";
import Search from "./Search/Search";

const Header = () => {
  return (
    <section className=" h-[55vh] bg-blueGray flex flex-col opacity-[0.99] md:h-[65vh]">
      <Navbar />
      <h1 className="text-5xl text-center my-6 mt-8 text-yellowGreen sm:text-6xl md:text-8xl">
        BookScape
      </h1>
      <Search />
    </section>
  );
};

export default Header;

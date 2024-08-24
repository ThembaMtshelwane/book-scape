import Navbar from "./Navbar";
import Search from "./Search/Search";

const Header = () => {
  return (
    <section className="h-[55vh] max-h-[450px] bg-blueGray flex flex-col i opacity-[0.99] md:h-[65vh]">
      <Navbar />
      <section className=" flex flex-col h-[60%] justify-center gap-5">
        <h1 className="text-5xl text-center text-yellowGreen sm:text-6xl md:text-8xl ">
          BookScape
        </h1>
        <Search />
      </section>
    </section>
  );
};

export default Header;

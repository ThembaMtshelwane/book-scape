import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <section className="h-screen border-2 border-black bg-backgroundColour relative">
      <section className="h-[60%]  border-2 border-black">
        <video
          src="l3.mp4"
          autoPlay
          loop
          className="h-full w-full object-cover relative "
        ></video>
        <section className="absolute inset-0 h-[60%] flex flex-col justify-center w-[80%] mx-auto  max-w-[860px] ">
          <p className="text-3xl sm:text-4xl md:text-5xl">Welcome to </p>
          <h1 className="text-5xl sm:text-6xl  md:text-7xl">BOOKSCAPE</h1>
        </section>
      </section>
      <section className="flex flex-col  items-center absolute bottom-[33%] w-full md:flex-row md:justify-center md:static ">
        <Link className="p-2 w-[150px] text-center m-2" to="/login">
          Login
        </Link>
        <Link
          className="p-2 text-textColour w-[150px] text-center m-2"
          to="/signup"
        >
          Sign-Up
        </Link>
      </section>
    </section>
  );
};

export default LandingPage;

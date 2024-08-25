import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <section className="h-screen bg-paper">
      <section className="h-[60%] relative">
        <video
          src="/l3.mp4"
          autoPlay
          loop
          muted
          className="h-full w-full object-cover relative "
        ></video>
        <section className="absolute inset-0 h-[60%] flex flex-col justify-center w-[80%] mx-auto  max-w-[860px] ">
          <p className="text-3xl sm:text-4xl md:text-5xl">Welcome to </p>
          <h1 className="text-5xl sm:text-7xl  md:text-8xl">BOOKSCAPE</h1>
        </section>
      </section>
      <section className="flex flex-col  items-center  bottom-[33%] w-full md:flex-row md:justify-center md:static ">
        {/* <Link className="p-2  w-[150px] m-2 button" to="/login">
          Login
        </Link>
        <Link className="p-2 w-[150px] m-2 button" to="/signup">
          Sign-Up
        </Link> */}
        <Link className="text-xl w-[150px] m-2 button p-4" to="/dashboard">
          Enter
        </Link>
      </section>
    </section>
  );
};

export default LandingPage;

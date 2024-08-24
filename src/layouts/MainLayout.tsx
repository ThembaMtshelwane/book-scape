import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const MainLayout = () => {
  return (
    <section>
      <video
        src="l2.mp4"
        autoPlay
        muted
        loop
        className="w-full fixed -z-10 opacity-25"
      ></video>
      <Header />
      <section className="border-2 border-blue-500 flex flex-col items-center min-h-screen md:w-[90%] lg:max-w-[1350px]  mx-auto bg-backgroundColour opacity-[0.99]">
        <Outlet />
      </section>
    </section>
  );
};

export default MainLayout;

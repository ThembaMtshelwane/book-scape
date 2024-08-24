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
        className="w-full fixed -z-10 md:opacity-25"
      ></video>
      <Header />
      <section className="border-2 border-blue-500 bg-backgroundColour flex flex-col items-center min-h-screen md:w-[90%] lg:max-w-[1350px]  mx-auto opacity-[0.98] md:opacity-[0.99] relative -z-10">
        <Outlet />
      </section>
    </section>
  );
};

export default MainLayout;

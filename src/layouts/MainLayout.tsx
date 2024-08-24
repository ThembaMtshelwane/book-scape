import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <section>
      <video
        src="/l2.mp4"
        autoPlay
        muted
        loop
        className="w-full fixed -z-10 md:opacity-25"
      ></video>
      <Header />
      <section className="border-2 border-blue-500 bg-backgroundColour flex flex-col items-center min-h-screen justify-center max-h-[2000px] h-fit md:w-[90%] lg:max-w-[1350px]  mx-auto  ">
        <Outlet />
      </section>
      <Footer />
    </section>
  );
};

export default MainLayout;

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
        className="fixed -z-[999] w-full md:opacity-25"
      ></video>
      <Header />
      <section className=" bg-paper flex flex-col items-center min-h-screen justify-center max-h-[5000px] h-fit md:w-[95%] lg:max-w-[1350px]  mx-auto  ">
        <Outlet />
      </section>
      <Footer />
    </section>
  );
};

export default MainLayout;

import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const MainLayout = () => {
  return (
    <section>
      <Header />
      <section className="border-2 border-blue-500 flex flex-col items-center min-h-screen md:w-[90%] lg:max-w-[1350px]  mx-auto ">
        <Outlet />
      </section>
    </section>
  );
};

export default MainLayout;

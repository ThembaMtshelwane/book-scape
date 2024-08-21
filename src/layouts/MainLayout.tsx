import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const MainLayout = () => {
  return (
    <section>
      <Header />
      <Outlet />
    </section>
  );
};

export default MainLayout;

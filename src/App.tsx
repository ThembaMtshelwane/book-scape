import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import MainLayout from "./layouts/MainLayout";
import Dashbaord from "./pages/Dashbaord";
import LatestBooks from "./pages/LatestBooks";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/dashbaord" element={<MainLayout />}>
          <Route path="/dashbaord/" element={<Dashbaord />} />
        </Route>
        <Route path="/latest-books/:id" element={<MainLayout />}>
          <Route path="/latest-books/:id" element={<LatestBooks />} />
        </Route>
        <Route path="/books/" element={<MainLayout />}>
          <Route path="/books/:id" element={<>specific book</>} />
        </Route>
      </Route>
    )
  ); //
  return <RouterProvider router={router} />;
}

export default App;

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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/dashbaord" element={<MainLayout />}>
          <Route path="/dashbaord/" element={<>Dashboard</>} />
        </Route>
        <Route path="/books/" element={<MainLayout />}>
          <Route path="/books/:id" element={<>Book</>} />
        </Route>
      </Route>
    )
  ); //
  return <RouterProvider router={router} />;
}

export default App;

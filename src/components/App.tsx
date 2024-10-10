import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import LatestBooks from "../pages/LatestBooks";
import NotFound from "../pages/NotFound";
import { SearchResults } from "../pages/SearchResults";
import SingleBook from "../pages/SingleBook";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import { BooksProvider } from "./context/BooksContext";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/about-us" element={<MainLayout />}>
          <Route index element={<About />} />
        </Route>

        <Route path="/dashboard" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/latest-books/:id" element={<MainLayout />}>
          <Route path="/latest-books/:id" element={<LatestBooks />} />
        </Route>

        <Route path="/results/" element={<MainLayout />}>
          <Route
            path="/results/:searchItem/:genres?/:id"
            element={<SearchResults />}
          />
        </Route>

        <Route path="/books/" element={<MainLayout />}>
          <Route path="/books/:id" element={<SingleBook />} />
        </Route>

        <Route path="/*" element={<NotFound />} />
      </Route>
    )
  ); //
  return (
    <BooksProvider>
      <RouterProvider router={router} />
    </BooksProvider>
  );
}

export default App;

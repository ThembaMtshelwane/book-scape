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
import LatestBooks from "./pages/LatestBooks";
import { SearchResults } from "./pages/SearchResults";
import Dashboard from "./pages/Dashboard";
import { BooksProvider } from "./components/context/BooksContext";
import SingleBook from "./pages/SingleBook";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

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

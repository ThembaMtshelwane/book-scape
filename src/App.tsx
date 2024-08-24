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
import { resultsLoader } from "./components/Header/Search/SearchMechanisms";
import { SearchResults } from "./pages/SearchResults";
import Dashboard from "./pages/Dashboard";
import { allBooksLoader, latestBooksLoader } from "./utils";
import { BooksProvider } from "./components/context/BooksContext";
import SingleBook from "./pages/SingleBook";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { SearchResultsProvider } from "./components/context/SearchResultsContext";
import { LatestBooksProvider } from "./components/context/LatestBooksContext";

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
            // loader={resultsLoader}
          />
        </Route>

        <Route path="/books/" element={<MainLayout />}>
          <Route
            path="/books/:id"
            element={<SingleBook />}
            // loader={resultsLoader}
          />
        </Route>

        <Route
          path="/*"
          element={<NotFound />}
          // loader={resultsLoader}
        />
      </Route>
    )
  ); //
  return (
    <BooksProvider>
      <SearchResultsProvider>
        <LatestBooksProvider>
          <RouterProvider router={router} />
        </LatestBooksProvider>
      </SearchResultsProvider>
    </BooksProvider>
  );
}

export default App;

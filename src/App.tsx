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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/dashboard" element={<MainLayout />}>
          <Route path="/dashboard/" element={<Dashboard />} />
        </Route>
        <Route path="/latest-books/:id" element={<MainLayout />}>
          <Route path="/latest-books/:id" element={<LatestBooks />} />
        </Route>
        <Route path="/books/" element={<MainLayout />}>
          <Route
            path="/books/:searchItem/:geners/"
            element={<SearchResults />}
            loader={resultsLoader}
          />
        </Route>
      </Route>
    )
  ); //
  return <RouterProvider router={router} />;
}

export default App;

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<>Login</>} />
        <Route path="/signup" element={<>Sign-up</>} />

        <Route path="/dashbaord" element={<>Dasboard layout</>}>
          <Route path="/dashbaord/" element={<>Dashboard</>} />
        </Route>
      </Route>
    )
  ); //
  return <RouterProvider router={router} />;
}

export default App;

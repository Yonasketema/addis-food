import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import ProtectedRoutes from "./components/ProtectedRoutes";
import AppLayout from "./components/AppLayout";

const About = lazy(() => import("./pages/About"));
const Create = lazy(() => import("./pages/Create"));
const DashboardLayout = lazy(() => import("./components/DashboardLayout"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <>
      <GlobalStyles />

      <AppLayout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="how-it-work" element={<About />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />

          <Route element={<ProtectedRoutes />}>
            <Route element={<DashboardLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="settings" element={<p>settings</p>} />
            </Route>
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="create" element={<Create />} />
          </Route>
        </Routes>
      </AppLayout>
    </>
  );
}

export default App;

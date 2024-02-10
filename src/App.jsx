import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import GlobalStyles from "./styles/GlobalStyles";

import Signup from "./pages/Signup";
import Create from "./pages/Create";

import About from "./pages/About";
import DashboardLayout from "./components/DashboardLayout";
import AppLayout from "./components/AppLayout";
import ProtectedRoutes from "./components/ProtectedRoutes";

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

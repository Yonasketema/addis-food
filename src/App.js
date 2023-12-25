import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Create from "./pages/Create";

import About from "./pages/About";
import DashboardLayout from "./components/DashboardLayout";

function App() {
  return (
    <>
      <GlobalStyles />

      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route element={<DashboardLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="settings" element={<p>settings</p>} />
          </Route>
          <Route path="how-it-work" element={<About />} />
          <Route path="create" element={<Create />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

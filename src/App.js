import "./App.css";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import NoMatch from "./pages/NoMatch";

import PrivateRoute from "./privateRoute/PrivateRoute";

function App() {
  return (
    <Routes>
      {/* <Route index element={<Home />} /> */}
      <Route path="login" element={<Login />} />

      <Route path="/" element={<Layout />}>
        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;

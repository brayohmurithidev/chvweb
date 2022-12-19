import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import "./pages/pages.css";
import "./components/components.css";
import Layout from "./components/Layout";
import PrivateRoute from "./providers/PrivateRoute";
import { userRoles } from "./providers/constants";
import Chvs from "./pages/Chvs";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        element={
          <PrivateRoute roles={[userRoles.admin]}>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route
          path="/"
          element={
            <PrivateRoute roles={[userRoles.admin]}>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/chvs"
          element={
            <PrivateRoute roles={[userRoles.admin]}>
              <Chvs />
            </PrivateRoute>
          }
        />
        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route
          path="*"
          element={
            <PrivateRoute roles={[userRoles.admin]}>
              <NoMatch />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;

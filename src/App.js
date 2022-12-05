import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import "./pages/pages.css";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;

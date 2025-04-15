import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import PrincipalCitas from "./pages/principalCitas";
import HistoryCitas from "./pages/HistoryCitas";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PrincipalCitas />} />
          <Route path="history" element={<HistoryCitas />} />
        </Route>
      </Routes>
    </Router>

  );
}

export default App;

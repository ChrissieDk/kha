import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ComingSoon from "./pages/ComingSoon";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ComingSoon />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import "./App.css";
import Calculator from "./pages/Calculator";      // ✅ capital C
import WelcomePage from "./pages/Welcomepage";    // ✅ capital W
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
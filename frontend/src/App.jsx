import "./App.css";
import Calculator from "./pages/calculator";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DesignPublish from "./pages/welcomepage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<DesignPublish />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-gradient-electric">
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
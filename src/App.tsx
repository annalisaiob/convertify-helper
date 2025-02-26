
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import ServicesPage from "@/pages/services";
import ToolsPage from "@/pages/tools";
import CommunityPage from "@/pages/community";
import AboutPage from "@/pages/about";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-gradient-electric">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

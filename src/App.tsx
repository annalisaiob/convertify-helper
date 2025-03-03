
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import ServicesPage from './pages/services';
import AboutPage from './pages/about';
import ToolsPage from './pages/tools';
import CommunityPage from './pages/community';
import './App.css';

function App() {
  useEffect(() => {
    // Create cursor element
    const cursor = document.createElement('div');
    cursor.id = 'custom-cursor';
    document.body.appendChild(cursor);

    // Update cursor position
    const updateCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    // Add mouse move listener
    document.addEventListener('mousemove', updateCursor);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', updateCursor);
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen w-full bg-gradient-electric">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/community" element={<CommunityPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

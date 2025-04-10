// eslint-disable-next-line no-unused-vars
import React,  { useEffect } from 'react';
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
const trackPageView = (url) => {
  if (typeof window.gtag === 'function') {
    window.gtag('config', 'G-LLNKZEJCBP', {
      page_path: url,
    });
  }
};

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return (
    <div className="overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
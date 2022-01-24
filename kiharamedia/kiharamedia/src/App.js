import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/contact' component={Contact} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Training from './pages/Training';
import Graphics from './pages/Graphics';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/graphisme" element={<Graphics />} />
          <Route path="/training" element={<Training />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </Router>
  );
}

export default App;
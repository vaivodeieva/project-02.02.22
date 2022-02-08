import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import Header from './Components/Header';
import Footer from'./Components/Footer';
import Tours from './Views/Tours';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Tours />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

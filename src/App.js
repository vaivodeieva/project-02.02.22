import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Views/Home';
import './Components/Header';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
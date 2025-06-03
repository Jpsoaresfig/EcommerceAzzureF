
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/home/home.jsx';
import Login from './Pages/login/login.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

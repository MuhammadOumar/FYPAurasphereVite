import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './SignUpPage';
import LoginPage from './LoginPage';
import ResidencePage from './ResidencePage'; // Add import

function App() {
  return (
    <Router>
      <div className="bg-amber-300 min-h-screen">
        <Routes>
          <Route path="/" element={<ResidencePage />} /> {/* Updated route */}
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<h1 className="text-center mt-10 text-xl">Welcome to Dashboard</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
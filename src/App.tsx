// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProfile } from './pages/user-profile';
import Homepage from './pages/homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
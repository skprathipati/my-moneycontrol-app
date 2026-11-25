import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Dashboard from './components/Dashboard/Dashboard';
import Reports from './components/Reports/Reports';
import Header from './components/Header/Header';

function App() {
  
  return (
    <Router>
      <div className="app"> 
        <Header />
        <div className="bodyContent">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App

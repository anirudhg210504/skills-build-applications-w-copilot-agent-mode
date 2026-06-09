import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">OctoFit Tracker</a>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

function Home() {
  return (
    <div className="mt-5">
      <h1>Welcome to OctoFit Tracker</h1>
      <p>Track your activities, manage teams, and compete on the leaderboard!</p>
    </div>
  )
}

export default App

import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Home />
      </div>
    </Router>
  )
}

export default App
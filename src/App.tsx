import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Ejercicios from './pages/Ejercicios'
import GruposMusculares from './pages/GruposMusculares'
import Categorias from './pages/Categorias'
import NoEncontrado from './pages/NoEncontrado'

function App() {

  return (
    <Router>
      <div className='min-h-screen bg-gray-100'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ejercicios' element={<Ejercicios />} />
        <Route path='/grupos-musculares' element={<GruposMusculares />} />
        <Route path='/categorias' element={<Categorias />} />
        <Route path='*' element={<NoEncontrado />} />
      </Routes>
      </div>
    </Router>
  )
}

export default App

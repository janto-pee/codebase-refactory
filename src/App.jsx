import { useState } from 'react'
import './App.css'
import Homepage from './pages/homepage'
import { Routes, Route } from 'react-router-dom'
import Product from './pages/Product'
import About from './pages/About'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/' element={ <Homepage /> } />
        <Route path='/products' element={ <Product /> } />
        <Route path='/about' element={ <About /> } />
      </Routes>
    <Footer />
    </div>
  )
}

export default App

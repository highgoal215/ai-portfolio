import './App.css'
import Layout from './components/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />}>

          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

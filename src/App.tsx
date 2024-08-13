import './App.css'
import Layout from './components/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Bio from './components/About/Bio'
import Education from './components/About/Education'
import Skills from './components/About/Skills'
import TechExperiences from './components/About/TechExperiences'
import Contact from './components/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />}>
            <Route index element={<Bio />} />
            <Route path='education' element={<Education />} />
            <Route path='skills' element={<Skills />} />
            <Route path='experience' element={<TechExperiences />} />
          </Route>
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

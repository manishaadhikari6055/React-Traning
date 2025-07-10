
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import { Route, Routes } from 'react-router-dom'
import Toolbar from './Components/Navigation/Toolbar'
import PageNotFound from './Pages/PageNotFound'


function App() {

  return (
    <>
  <Toolbar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='*' element={<PageNotFound />} />
      </Routes>
    </> 
  )
}

export default App

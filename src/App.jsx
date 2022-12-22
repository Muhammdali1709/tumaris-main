import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import{Routes,Route} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import SinglePage from './components/SinglePage/SinglePage'
import About from './components/About/About'
import Poster from './components/Poster/Poster'
import Login from './components/Login/Login'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/singlePage' element={<SinglePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/poster' element={<Poster />} />
        <Route path='/login' element={  <Login/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import {GithubProvider} from './context/github/GithubContext'


function App() {
  const title= "Github Finder"
  return (
    <GithubProvider>
    <Router>
      <div className='container'>
        <Navbar title={title}/>
        <main className='main'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/notfound' element={<NotFound />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </GithubProvider>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from '../components/shared/ScrollToTop'
import Header from '../components/layout/header/Header'
import Navbar from '../components/layout/header/Navbar'
import Footer from '../components/layout/footer/Footer'
import Home from '../pages/Home'
import About from '../pages/About'
import MakingOff from '../pages/MakingOff'

function AppRouter() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/making-off" element={<MakingOff />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default AppRouter

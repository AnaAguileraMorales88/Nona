import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/layout/header/Header'
import Navbar from '../components/layout/header/Navbar'
import Footer from '../components/layout/footer/Footer'
import Home from '../pages/Home'
import About from '../pages/About'

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRouter
import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import { Route, Routes, useLocation } from 'react-router'
import Home from './pages/Home'
import SeatLayout from './Pages/SeatLayout'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import MyBookings from './pages/MyBookings'
import Favorite from './pages/Favorite'
import Footer from './Components/Footer/Footer'
import { Toaster } from 'react-hot-toast'


function App() {

  const isAdminRoute = useLocation().pathname.startsWith('/admin');

  return (
    <>
      <Toaster />
      { !isAdminRoute && <NavBar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<MovieDetails />} />
        <Route path='/movies/:id/:date' element={<SeatLayout />} />
        <Route path='/my-bookings' element={<MyBookings />} />
        <Route path='/favorite' element={<Favorite />} />
      </Routes>
      { !isAdminRoute && <Footer />}
    </>
  )
}

export default App
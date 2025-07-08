import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import AllRooms from './pages/AllRooms'
import Footer from './components/Footer'
import RoomDetails from './pages/RoomDetails'
import MyBookings from './pages/MyBookings'
import HotelReg from './components/HotelReg'

const App = () => {
  const isOwnerPath = useLocation().pathname.includes('owner')

  return (
    <div className="flex flex-col min-h-screen">
      {!isOwnerPath && <Navbar />}
      {false && <HotelReg/>}
      <main className="flex-grow">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<AllRooms />} />
          <Route path='/rooms/:id' element={<RoomDetails />} />
          <Route path='/my-bookings' element={<MyBookings />} />
        </Routes>
      </main>
       <Footer />
    </div>
  )
}

export default App

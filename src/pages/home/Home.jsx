import React from 'react'
import Featured from '../../components/featured/Featured'
import Header from '../../components/header/Header'
import HotelList from '../../components/hotelTypeList/HotelList'
import Navbar from '../../components/navbar/Navbar'
import './home.css'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by hotel type</h1>
        <HotelList/>
      </div>
    </div>
  )
}

export default Home
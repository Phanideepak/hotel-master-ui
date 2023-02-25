import React from 'react'
import FeaturedHotel from '../../components/featured-hotels/FeaturedHotel'
import Featured from '../../components/featured/Featured'
import Footer from '../../components/footers/Footer'
import Header from '../../components/header/Header'
import HotelList from '../../components/hotelTypeList/HotelList'
import MailList from '../../components/mail-List/MailList'
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
        <h1 className="homeTitle">Home guests love</h1>
        <FeaturedHotel/>
        <MailList />
        <Footer/>
      </div>
    </div>
  )
}

export default Home
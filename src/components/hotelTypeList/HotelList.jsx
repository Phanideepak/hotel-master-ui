import React from 'react'
import './hotelList.css'

const HotelList = () => {
  return (
    <div className="hotelList">
        <div className="hotelListItem">
            <img src="https://5.imimg.com/data5/SELLER/Default/2020/10/CX/EI/DE/111984546/five-star-hotel-services-500x500.jpeg" 
            alt="" class = "hotelListImage"/>
            <div className="hotelListTitle">
                <h1>Five Star</h1>
                <h2>500 hotels</h2>
            </div>
        </div>

        <div className="hotelListItem">
            <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGF8ZW58MHx8MHx8&w=1000&q=80"
             alt="" 
             class = "hotelListImage"/>
            <div className="hotelListTitle">
                <h1>Villas</h1>
                <h2>100 hotels</h2>
            </div>
        </div>

        <div className="hotelListItem">
            <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGF8ZW58MHx8MHx8&w=1000&q=80"
             alt="" 
             class = "hotelListImage"/>
            <div className="hotelListTitle">
                <h1>Four Star</h1>
                <h2>100 hotels</h2>
            </div>
        </div>

        <div className="hotelListItem">
            <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGF8ZW58MHx8MHx8&w=1000&q=80"
             alt="" 
             class = "hotelListImage"/>
            <div className="hotelListTitle">
                <h1>Three Star</h1>
                <h2>100 hotels</h2>
            </div>
        </div>
    </div>
  )
}

export default HotelList
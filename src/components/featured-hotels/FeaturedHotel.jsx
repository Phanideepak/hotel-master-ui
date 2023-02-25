import React from 'react'
import './feature-hotel.css'


const FeaturedHotel = () => {
  return (
    <div className="fp">
        <div className="fpItem">
            <img src="https://tuggingmyluggage.files.wordpress.com/2017/10/pool.jpg?w=1024&h=667&crop=1" 
            alt="" className="fpImage" />
            <span className="fpName">Novotel</span>
            <span className="fpCity">Goa</span>
            <span className="fpPrice">Starting from 10,000 rs</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        
        <div className="fpItem">
            <img src="https://tuggingmyluggage.files.wordpress.com/2017/10/pool.jpg?w=1024&h=667&crop=1" 
            alt="" className="fpImage" />
            <span className="fpName">Novotel</span>
            <span className="fpCity">Goa</span>
            <span className="fpPrice">Starting from 10,000 rs</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>

        <div className="fpItem">
            <img src="https://tuggingmyluggage.files.wordpress.com/2017/10/pool.jpg?w=1024&h=667&crop=1" 
            alt="" className="fpImage" />
            <span className="fpName">Novotel</span>
            <span className="fpCity">Goa</span>
            <span className="fpPrice">Starting from 10,000 rs</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
    </div>
  )
}

export default FeaturedHotel
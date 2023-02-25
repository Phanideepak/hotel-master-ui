import React from 'react'
import './featured.css'

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src = "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/2/2017/02/24210018/Araku_valley-i.jpg?w=1200&h=628&fill=blur&fit=fill"
             alt = "vizag"
             className='featuredImage'
            />
            <div className="featuredTitles">
                  <h1>Vizag</h1>
                  <h2>100 hotels</h2>
            </div>
        </div>
        <div className="featuredItem">
        <img src = "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/2/2017/02/24210018/Araku_valley-i.jpg?w=1200&h=628&fill=blur&fit=fill"
             alt = "Bangalor"
             className="featuredImage"
            />
            <div className="featuredTitles">
                  <h1>Bangalore</h1>
                  <h2>102 hotels</h2>
            </div>
        </div>
        <div className="featuredItem">
        <img src = "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/2/2017/02/24210018/Araku_valley-i.jpg?w=1200&h=628&fill=blur&fit=fill"
             alt = "vijayawada"
             className="featuredImage"
            />
            <div className="featuredTitles">
                  <h1>Vijayawada</h1>
                  <h2>110 hotels</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured
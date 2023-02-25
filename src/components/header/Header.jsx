import { faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="headerContainer">
            <div className="headerList">
                <div className="headerListItem">
                <FontAwesomeIcon icon={faBed} />
                <span>Stays</span>
                </div>
                <div className="headerListItem active">
                <FontAwesomeIcon icon={faPlane} />
                <span>Flights</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faCar} />
                <span>Car Rentals</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faBed} />
                <span>Attractions</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Airport Taxis</span>
                </div>
            </div>
            <h1 className="headerTitle">A lifetime of discounts for anime lovers.</h1>
            <p className="headerDescription">
                Get rewarded for travels. Unlock instant savings of 10% or more with 
                account.
            </p>
            <button className="headerButton">Sign in / Register</button>
        </div>
    </div>
  )
}

export default Header
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {DateRange} from 'react-date-range';
import {React,useState} from 'react'
import './header.css'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import {format} from 'date-fns'

const Header = ({type}) => {
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
        startDate: new Date(),
        endDate: new Date(),
        key : 'selection' 
    }])
  const [openOptions, setOpenOptions] = useState(false) 
  const [options, setOptions] = useState({
       adult : 1,
       children: 2,
       room : 4, 
  });

  const handleOption = (name,operation)=>{
    setOptions(prev=>{return{
      ...prev,[name] : operation === "i" ? options[name]+1 : options[name]-1,
    }})
  }



  return (
    <div className='header'>
        <div className={type === "list"? "headerContainer listMode":"headerContainer" }>
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
            { 
            type !== "list"  &&
            <>
            <h1 className="headerTitle">A lifetime of discounts for anime lovers.</h1>
            <p className="headerDescription">
                Get rewarded for travels. Unlock instant savings of 10% or more with 
                account.
            </p>
            <button className="headerButton">Sign in / Register</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faBed} className="headerIcon" />
                  <input type="text" 
                  placeholder='Where are you staying'
                  className= "headerSearchInput"
                  />
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                  <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
                  {
                   openDate && <DateRange 
                              editableDateInputs = {true}
                              onChange ={item=>setDate([item.selection])}
                              moveRangeOnFirstSelection = {false}
                              ranges = {date}
                              className = "date"/>
                  }
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                  <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                  {
                   openOptions && 
                    <div className="options">
                      <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                          <button disabled={options.adult <= 1}  onClick={()=>handleOption("adult","d")} className="optionCounterButton">-</button>
                          <span className="optionCounterNumber" >{options.adult}</span>
                          <button onClick={()=>handleOption("adult","i")} className="optionCounterButton">+</button> 
                        </div>
                      </div>

                      <div className="optionItem">
                        <span className="optionText">Children</span>
                        <div className="optionCounter">
                          <button disabled={options.children <= 2} onClick={()=>handleOption("children","d")} className="optionCounterButton">-</button>
                          <span className="optionCounterNumber" >{options.children}</span>
                          <button onClick={()=>handleOption("children","i")} className="optionCounterButton">+</button>
                        </div>
                      </div>

                      <div className="optionItem">
                        <span className="optionText">Room</span>
                        <div className="optionCounter">
                          <button disabled={options.room <= 4} onClick={()=>handleOption("room","d")} className="optionCounterButton">-</button>
                          <span className="optionCounterNumber" >{options.room}</span>
                          <button onClick={()=>handleOption("room","i")} className="optionCounterButton">+</button>
                        </div>
                      </div>
                    </div>
                  }
                </div>
                <div className="headerSearchItem">
                    <button className="headerButton">Search</button>
                </div>
            </div>
            </>
            }
        </div>
    </div>
  )
}

export default Header
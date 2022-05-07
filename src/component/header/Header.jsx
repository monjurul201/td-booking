import { faBed,faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  './header.css';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { useState } from 'react';

import {format} from 'date-fns';
import { useNavigate } from 'react-router-dom';


const Header = ({type}) => {
    const [destination,setDestination]=useState("")
    const [openDate,setOpenDate]=useState()
    const [date,setDate]=useState([
        {
            startDate:new Date(),
            endDate:new Date(),
            key: 'selection'
        }
    ])
    const [openOption,setOpenOption]=useState(false)
    const [option,setOption]=useState({
        adult:1,
        children:0,
        room:1,
    })

    const handleOption =(name,operation)=> {
        setOption(prev => {return {
            ...prev,[name]:operation ==="i" ? option[name]+1 : option[name]-1,
        }})
    }
    
    const navigate = useNavigate()

    const handleSerch =() => {
        navigate("/hotels", {state:{destination,date,option}});
    }
    return (
        <div className='header'>
            <div className={type === "list" ? 'headerContainer listMode': 'headerContainer'}>
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed}/>
                     <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane}/>
                     <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar}/>
                     <span>Car Rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi}/>
                     <span>Taxi</span>
                </div>
            </div>
               { 
                type !== "list" &&
               <>
               <h1 className="headerTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
                 <p className="deaderDec">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis repudiandae </p>
                 <button className="headerBtn">Sign | Register</button>
                 <div className="headerSerch">

                     <div className="headerSerrchItems">
                         <FontAwesomeIcon icon={faBed} className='headerIcon'/>
                         <input 
                         onChange={e => setDestination(e.target.value)}
                         type="text" 
                         placeholder=' where are you goning?'
                         className='headerSearchInpur'/>
                     </div>

                     <div className="headerSerrchItems">
                         <FontAwesomeIcon icon={faCalendarDays} className='headerIcon'/>
                         <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'> {`${format(date[0].startDate,"dd/MM/yyy")} to ${format(date[0].endDate,"dd/MM/yyy")}`}</span>

                        
                        { openDate && <DateRange
                         editableDateInputs={true}
                         onChange={item => setDate([item.selection])}
                         moveRangeOnFirstSelection={false}
                         ranges={date} className='date'
                         minDate={new Date()}
                         />
                         }
                     </div>

                     <div className="headerSerrchItems">
                         <FontAwesomeIcon icon={faPerson} className='headerIcon'/>
                         <span className='headerSearchText' onClick={() => setOpenOption(!openOption)}> 
                         {
                             `${option.adult} adult .${option.children} children .${option.room} room`
                         }</span>
                         { openOption && <div className="option">
                             <div className="optionItems">
                                 <span className="optionText">Adult</span>
                                 <div className="optionCounter">
                                    <button 
                                    disabled={option.adult<=1}
                                    className="optionCounterbtn"
                                     onClick={() => handleOption ('adult',"d")}>-</button>
                                    <span className="ontionCouterNumber">{option.adult}</span>
                                    <button className="optionCounterbtn"  onClick={() => handleOption ('adult',"i")}>+</button>
                                  </div>  
                             </div>
                             <div className="optionItems">
                                 <span className="optionText">Children</span>
                                 <div className="optionCounter">
                                    <button
                                    disabled={option.children<=0}
                                     className="optionCounterbtn" 
                                      onClick={() => handleOption ('children',"d")}>-</button>
                                    <span className="ontionCouterNumber">{option.children}</span>
                                    <button className="optionCounterbtn"  onClick={() => handleOption ('children',"i")}>+</button>
                                  </div> 
                             </div>
                             <div className="optionItems">
                                 <span className="optionText">Room</span>
                                 <div className="optionCounter">
                                    <button disabled={option.room<=1} className="optionCounterbtn"  onClick={() => handleOption ('room',"d")}>-</button>
                                    <span className="ontionCouterNumber">{option.room}</span>
                                    <button className="optionCounterbtn"  onClick={() => handleOption ('room',"i")}>+</button>
                                  </div> 
                             </div>
                         </div>
                         }
                     </div>
                     <div className="headerSerrchItems">
                         <button className="headerBtn" onClick={handleSerch}>Search</button>
                     </div>
                 </div>
                 </>
                 }
            </div>
        </div>
    );
};

export default Header;
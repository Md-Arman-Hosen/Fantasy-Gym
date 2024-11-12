/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Details.css'
import img from '../Images/profile-picture.png'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Details = (props) => {



    // console.log(breaktime);
    let time = 0;
    let breaktime = 0;

    // eslint-disable-next-line react/prop-types
    for (let info of props.details) {
        time = time + info.time;
    }


    const timefromLocalstorage = localStorage.getItem("Breaking-Time")
    breaktime = timefromLocalstorage;


    return (
        <div className='detailes-Container'>

            <div className='profile'>
                <img src={img} alt="" />
                <div className='name-location'>
                    <h1 className='name-title'>MD.Arman Hosen Patoary</h1>
                    <div className='location'>
                        <p><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon></p>
                        <p>Savar,Dhaka</p>
                    </div>
                </div>
            </div>


            <div className='health-info'>
                <div className='health-unit-info'>
                    <h1>72<small className='unit-style'>Kg</small></h1>
                    <p className='unit-style'>Weight</p>
                </div>

                <div className='health-unit-info'>
                    <h1>5.4</h1>
                    <p className='unit-style'>Hight</p>
                </div>

                <div className='health-unit-info'>
                    <h1>25<small className='unit-style'>yrs</small></h1>
                    <p className='unit-style'>Age</p>
                </div>

            </div>

            <h1>Take A Break</h1>

            <div className='health-info'>
                <button onClick={() => { props.breaktime(10) }}>10s</button>
                <button onClick={() => { props.breaktime(20) }}>20s</button>
                <button onClick={() => { props.breaktime(30) }}>30s</button>
                <button onClick={() => { props.breaktime(40) }}>40s</button>
                <button onClick={() => { props.breaktime(50) }}>50s</button>
            </div>

            <h1 className='Exercise-Details'>Exercise Details</h1>

            <div className='exercise-time-break-time health-info'>
                <h1>Exercise time </h1>
                <h2>{time} <span className='unit-style'>seconds</span></h2>
            </div>

            <div className='exercise-time-break-time health-info'>
                <h1>Break time </h1>
                <h2>{breaktime} <span className='unit-style'>seconds</span></h2>
            </div>

        

            <button onClick={()=>{props.click()}} className='Activity-btn'>Activity Completed</button>
            
        </div>

    );
};

export default Details;
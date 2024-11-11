// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Details.css'
import img from '../Images/profile-picture.png'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Details = () => {
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


            <div>
                <div>

                </div>

                <div>

                </div>

                <div>

                </div>
            </div>
             
        </div>
    );
};
export default Details;
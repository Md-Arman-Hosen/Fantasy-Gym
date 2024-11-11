// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Details from '../Details/Details';
import './Exercise.css'

const Exercise = () => {

    const [equpments, setequpment] = useState([])


    useEffect( ()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setequpment(data))
    } , [])


    return (

        <div className='Exercise-Container'>

          <div>
            <div><h1 className='cart-title'>Please Select Your Exercise..</h1></div>
                <div className='cart-Container'>

                {
                    equpments.map(equpment =>  <Cart 
                        key={equpment.id}
                        eqp = {equpment}></Cart>
                    )
                }
                </div>
          </div>
            <div>
                <Details></Details>
            </div>

        </div>
    );
};
export default Exercise;
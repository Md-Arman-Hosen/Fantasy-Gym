// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Details from '../Details/Details';
import './Exercise.css'

const Exercise = () => {

    const [equpments, setequpment] = useState([])
    const [details, setdetails] = useState([])


    useEffect( ()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setequpment(data))
    } , [])

    const adddetails= (equpment) =>  {
        const newCart = [...details, equpment];
        setdetails(newCart);
    }

    return (

        <div className='Exercise-Container'>

          <div>
            <div><h1 className='cart-title'>Please Select Your Exercise</h1></div>
                <div className='cart-Container'>

                {
                    equpments.map(equpment =>  <Cart 
                        key={equpment.id}
                        eqp = {equpment}
                        handeldetails = {adddetails}                       
                        ></Cart>
                    )
                }
                </div>
          </div>
            <div>
            <Details details={details}></Details>     
            </div>

        </div>
    );
};
export default Exercise;
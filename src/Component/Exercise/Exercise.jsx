// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
// eslint-disable-next-line no-unused-vars
import Details from '../Details/Details';
import './Exercise.css'
import Question from '../Questions/Question';


const Exercise = () => {

    const [equpments, setequpment] = useState([])
    const [details, setdetails] = useState([])
    // eslint-disable-next-line no-unused-vars
    const [breaktime, setbreaktime] = useState([])



    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setequpment(data))
    }, [])

    const adddetails = (equpment) => {
        const newCart = [...details, equpment];
        setdetails(newCart);
    }


    const addbreaktimes = (time) => {
        // setbreaktime(time);
        localStorage.setItem('Breaking-Time', time);
        let times = localStorage.getItem("Breaking-Time")
        setbreaktime(times)
        Details(time)
    }


    return (
        <div className='main'>
            <div className='Exercise-Container'>
                <div>
                    <div><h1 className='cart-title'>Please Select Your Exercise</h1></div>
                    <div className='cart-Container'>
                        {
                            equpments.map(equpment => <Cart
                                key={equpment.id}
                                eqp={equpment}
                                handeldetails={adddetails}
                            ></Cart>
                            )
                        }
                    </div>
                </div>
                <div>
                    <div className='details-Container'>
                        <Details details={details}
                            breaktime={addbreaktimes}
                        // breakingtime = {breaktime}
                        ></Details>
                    </div>
                </div>
            </div>
            <div className='Question-Container'>
             <Question></Question>
                </div>
        </div>
    );
};
export default Exercise;
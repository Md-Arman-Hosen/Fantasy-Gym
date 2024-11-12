/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Details from '../Details/Details';
import Question from '../Questions/Question';
import './Exercise.css'

const Exercise = () => {

    const [equpments, setequpment] = useState([])
    const [details, setdetails] = useState([])
    const [breaktime, setbreaktime] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setequpment(data))
    }, [])
    const adddetails = (equpment) => {
        // console.log(equpment);
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
    function myFunction() {
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    }
    return (

        <div className='main'>
            <div id="snackbar">Congratulation !!! You Complete The Mission</div>
            <div className='Exercise-Container'>

                <div>
                    <div><h1 className='cart-title'>Select Your Exercise</h1></div>
                    <div className='cart-Container'>
                        {
                            equpments.map(equpment => <Cart
                                key={equpment.id}
                                eqp={equpment}
                                handeldetails={adddetails}

                            >
                            </Cart>
                            )
                        }
                    </div>
                </div>
                <div className='details-Container'>
                    <Details details={details}
                        breaktime={addbreaktimes}

                        click={myFunction}

                    ></Details>
                </div>
            </div>
            <div className='Question-Container'>
                <Question></Question>
            </div>
        </div>
    );
};

export default Exercise;
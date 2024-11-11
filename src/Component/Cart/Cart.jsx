/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const {name, img,time,age,details } = props.eqp;
    console.log(props.eqp)


    return (

        <div className='cart'>
            <img src={img} alt="" />
            <div className='cart-info'>
                <h3>Name: {name}</h3>
                <p>{details}</p>
                <p><span className='age-time'>For Age: {age}</span></p>
                <p><span className='age-time'>Time required: {time}</span></p>
            </div>
            <button onClick={() => props.handeldetails(props.eqp) } className='btn-cart'>Add to Card</button>

        </div>


    );
};

export default Cart;
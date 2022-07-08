import React from 'react';
import './Service.css';

const Service = ({service}) => {
const {name, price, description, img} = service;

    return (
        <section>
            <div className='service'>
                <img  className='w-100' src={img} alt='' />
                <h3>This is service {name}</h3>
                <p>{price}</p>
                <p>{description}</p>
                <button className='btn btn-primary'>Booking: {name}</button>
            </div>
        </section>
    );
};

export default Service;
import React from 'react';

const Service = ({ service }) => {
    const {name ,slots} = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 className="card-title text-secondary text-center">{name}</h2>
                <p className='text-center'>
                    {
                        slots.length > 0
                        ? <span>{slots[0]}</span>
                        :<span className='text-red font-bold '>No Slots Available</span>
                    }
                </p>
                <p className='text-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space' } are available</p>
                <div class="card-actions justify-center">
                    <button disabled ={slots.length === 0} class="btn btn-secondary text-white uppercase">Booked Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;
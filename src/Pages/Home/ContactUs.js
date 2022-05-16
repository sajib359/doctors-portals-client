import React from 'react';
import appointment from '../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <div style={{
            background: `url(${appointment})`
        }} className='mt-10 flex content-center items-center justify-items-center justify-center w-full mx-auto'>
            <div className='mt-10 mb-10'>
            <div className='mb-5 text-center'>
                <h3 className='text-xl text-white font-bold'>Contact Us</h3>
                <h1 className='text-3xl text-white font-bold'>Stay connected with us</h1>
            </div>
            <div className='mx-auto'>

                <input type="text" placeholder="Type here" className="mb-5 input input-bordered input-sm w-full max-w-xs" /><br></br>
                <input type="text" placeholder="Type here" className="mb-5 input input-bordered input-sm w-full max-w-xs" /><br></br>

                <input type="text" placeholder="Type here" className="mb-5 input input-bordered input-lg w-full max-w-xs" /><br></br>
                <button  className='p-2 rounded bg-primary w-1/2 mx-auto'>Submit</button>
            </div>
            </div>

        </div>
    );
};

export default ContactUs;
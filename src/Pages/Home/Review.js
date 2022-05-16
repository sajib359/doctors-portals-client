import React from 'react';

const Review = ({review}) => {

    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                
                <p className='mb-5'>{review.review}</p>
    
                
                <div className='flex  items-center'>
                <div class="avatar">
                    <div class="w-16 rounded-full ring ring-primary ring-offset-base-100  mr-5">
                        <img src={review.img} alt=""/>
                    </div>
                    </div>
                    <div className=''>
                        <h1>{review.name}</h1>
                        <h3>{review.city}</h3>
                    </div>
                </div>
                
                </div>
               
            </div>
        
    );
};

export default Review;
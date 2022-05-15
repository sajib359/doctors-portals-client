import React from 'react';

const Review = (review) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iure reprehenderit veritatis cumque cupiditate quasi quidem libero velit aliquam harum?</p>

                <div class="avatar">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://api.lorem.space/image/face?hash=3174"/>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Review;
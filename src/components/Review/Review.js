import React from 'react';
import useProduct from '../hooks/useProduct';
import ReviewDetail from '../ReviewDetail/ReviewDetail';
import './Review.css';

const Review = () => {

    const [reviews, setReviews] = useProduct();
    return (
       <section className='review-container'>
         <h2>What Our Customer Say!!!</h2>
         <div className='review'>
           
            {
                reviews.map(review => <ReviewDetail 
                    key={review.id}
                    review={review}
                    ></ReviewDetail>)
            }
        </div>
       </section>
    );
};

export default Review;
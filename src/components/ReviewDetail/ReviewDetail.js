import React from 'react';
import './ReviewDetail.css';

const ReviewDetail = (props) => {
    const { name, img, review, rating } = props.review;
    // console.log(props)
    return (
        <div className='review-detail'>
            <div className="review-img">
                <img src={img} alt="" />
            </div>
            <div className="review-info">
                <h3>Name : {name}</h3>
                <p>Review : {review}</p>
                <p><small>Rating : {rating}</small></p>
            </div>
        </div>
    );
};

export default ReviewDetail;
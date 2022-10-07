import React from 'react';
import './ShowReview.css';

const ShowReview = (props) => {
    const { name, img, review, rating } = props.review;
    return (
        <div className='show-container'>
            <div className="show-img">
                <img src={img} alt="" />
            </div>
            <div className="show-info">
                <h3>Name : {name}</h3>
                <p>Review : {review}</p>
                <p><small>Rating : {rating}</small></p>
            </div>
           
        </div>
    );
};

export default ShowReview;
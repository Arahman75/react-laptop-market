import React from 'react';
import './PageNotFound.css';
import notfound from '../image/notfound.jpg'

const PageNotFound = () => {
    return (
        <div className='not-found'>
            <h1>The page is not found please try again!!!</h1>
            <img src={notfound} alt="" />
        </div>
    );
};

export default PageNotFound;
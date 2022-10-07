import React from 'react';
import './Home.css';
import laptop from '../../image/laptop3.jpg';

const Home = () => {
    return (
        <section className='title'>
            <h1>Welcome To Our Laptop Shop</h1>
            <div className='home-container'>
                <div className="laptop-detail">
                    <h2>YOUR NEXT LAPTOP <br /> YOUR BEST LAPTOP</h2>
                    <h4>Hello dear customer, how may I help you? If you are buying a laptop, we show laptops from many companies. Please visit our store. Thank you very much. Coming to our store again.</h4>
                    <button>Live Demo</button>
                </div>
                <div className="laptop-photo">
                    <img src={laptop} alt="" />
                </div>

            </div>
        </section>
    );
};

export default Home;
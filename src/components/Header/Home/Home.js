import React from 'react';
import './Home.css';
import laptop from '../../image/laptop3.jpg';
import useProduct from '../../hooks/useProduct';
import ShowReview from '../../ShowReview/ShowReview';
import { Link } from 'react-router-dom';

const Home = () => {
    const [reviews, setReviews] = useProduct();
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
            <div>
                <h1>Show the Reviews :{reviews.length} </h1>
                <div className='show-review'>
                    {
                        reviews.map(review => <ShowReview 
                            key ={review.id}
                            review={review}
                            ></ShowReview>)
                    }
                </div>
               <div  className='review-btn'>
             <button> <Link to="/review">See All Reviews</Link></button>
               </div>
            </div>
        </section>
    );
};

export default Home;
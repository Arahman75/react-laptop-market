import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <section>
            <div className='blog-container'>
                <div className='blog'>
                    <h3>Question : What is Context API?</h3>
                    <p>Answer : The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                    <h3>প্রশ্ন: কনটেক্সট এপিআই কি?</h3>
                    <p>উত্তর: রিঅ্যাক্ট কনটেক্সট এপিআই হল একটি রিঅ্যাক্ট অ্যাপের জন্য কার্যকরীভাবে গ্লোবাল ভেরিয়েবল তৈরি করার একটি উপায় যা চারপাশে পাস করা যায়। এটি "প্রপ ড্রিলিং" বা দাদা-দাদি থেকে শিশু থেকে পিতা-মাতার কাছে প্রপস সরানোর বিকল্প। রেডক্স ব্যবহার করে রাজ্য পরিচালনার জন্য প্রসঙ্গটিকে একটি সহজ, হালকা পদ্ধতি হিসাবেও উল্লেখ করা হয়।</p>
                </div>
                <div className='blog'>
                    <h3>Question : What is HTML Semantic tag?</h3>
                    <p>
                        The HTML semantics refers to the tags that provide meaning to an HTML page rather than just presentation. It makes HTML more comprehensible by better defining the different sections and layout of web pages. This article will focus on ‘What is Semantics in HTML’.</p>
                    <h3>প্রশ্ন: HTML শব্দার্থিক ট্যাগ কি?</h3>
                    <p>
                        HTML শব্দার্থবিদ্যা এমন ট্যাগগুলিকে বোঝায় যেগুলি শুধুমাত্র উপস্থাপনার পরিবর্তে একটি HTML পৃষ্ঠাকে অর্থ প্রদান করে। এটি ওয়েব পৃষ্ঠাগুলির বিভিন্ন বিভাগ এবং বিন্যাস আরও ভালভাবে সংজ্ঞায়িত করে HTML কে আরও বোধগম্য করে তোলে। এই নিবন্ধটি 'এইচটিএমএল-এ শব্দার্থবিদ্যা কী' এর উপর আলোকপাত করবে।</p>
                </div>
                <div className='blog'>
                    <h3>Question : what is difference inline and inline block elements?</h3>
                    <p>
                        Answer : There are two display values: block and inline. A block-level element always starts on a new line and takes up the full width available. An inline element does not start on a new line and it only takes up as much width as necessary.</p>
                    <h3>প্রশ্ন: ইনলাইন এবং ইনলাইন ব্লক উপাদান পার্থক্য কি?</h3>
                    <p>
                        উত্তর: দুটি প্রদর্শন মান আছে: ব্লক এবং ইনলাইন। একটি ব্লক-স্তরের উপাদান সর্বদা একটি নতুন লাইনে শুরু হয় এবং উপলব্ধ সম্পূর্ণ প্রস্থ গ্রহণ করে। একটি ইনলাইন উপাদান একটি নতুন লাইনে শুরু হয় না এবং এটি শুধুমাত্র প্রয়োজনীয় যতটা প্রস্থ নেয়।</p>
                </div>
            </div>
        </section>
    );
};

export default Blogs;
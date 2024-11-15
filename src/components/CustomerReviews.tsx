import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReviewCard from './ReviewCard';

const reviews = [
  {
    name: "James Anderson",
    date: "4 days ago",
    image: "https://sun9-26.userapi.com/impg/lpQ6hNwR752pFnNibh_3h1KUCfJlYDBg5Qr1VA/YOsVpiM-xYI.jpg?size=736x736&quality=96&sign=dd729b60bd5a52d36ea34da41508a5d0&type=album",
    text: "Coin Lem helped me earn significant profits in just a few months. The platform is easy to use, and the trading signals are accurate. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emily Johnson",
    date: "3 days ago",
    image: "https://sun9-40.userapi.com/impg/tnv-9s_z7tUqpmeeJOwmLrOnJiBU6c0uWzOA6Q/M-Tutnhm63M.jpg?size=736x736&quality=96&sign=91666027b4a5a99a37a7bbf12b208122&type=album",
    text: "I started trading on Coin Lem a few weeks ago, and I'm already seeing great results. The platform tracks cryptocurrency trends easily.",
    rating: 5,
  },
  {
    name: "Michael Williams",
    date: "6 days ago",
    image: "https://sun9-60.userapi.com/impg/hcq2OyGID-LVZqpc4RFYZ7RthiaCQ2GEoxMXUQ/dEDNApOvb7c.jpg?size=736x736&quality=96&sign=6e2b351b1ef013c2c46c873a7be0a161&type=album",
    text: "After extensive research, I found Coin Lem, and it was a breakthrough! The platform is reliable and secure. Now I'm earning money I never dreamed of.",
    rating: 5,
  },
  {
    name: "Sophia Brown",
    date: "5 days ago",
    image: "https://sun9-75.userapi.com/impg/AmjGMLD5e43y4_ZERCFhYJUUzia_WGTBQIoAhA/nZ4GVaeRiX4.jpg?size=736x736&quality=96&sign=49a2f92b399a1fb48b670f515accb81c&type=album",
    text: "Coin Lem offers transparent fees and a secure way to trade. I've achieved excellent results with my portfolio and look forward to future investments.",
    rating: 5,
  },
  {
    name: "David Wilson",
    date: "3 days ago",
    image: "https://sun9-16.userapi.com/impg/rtcikau-Vf6XMUxhadMB_iHa4ipNaNz9Mw4Aag/hyiIxSEGx9Y.jpg?size=1024x1024&quality=96&sign=a4ecce19a72d198b508c67650648d638&type=album",
    text: "Coin Lem helped me earn profits in just a few weeks. It's a real gem for anyone serious about cryptocurrency trading.",
    rating: 5,
  },
  {
    name: "Isabella Martinez",
    date: "2 days ago",
    image: "https://sun9-59.userapi.com/impg/zdKaEej6dQbeDSC3-U_wrS6T--h1bYCjDSknuw/a_psc-KavB0.jpg?size=736x736&quality=96&sign=cce26bae4d64e6b25625b4fbecf4bc00&type=album",
    text: "I noticed improvements in my earnings within just a couple of weeks with Coin Lem. It's amazing how much I've learned about cryptocurrency trading with their help.",
    rating: 5,
  },
  {
    name: "Lucas Taylor",
    date: "today",
    image: "https://sun9-26.userapi.com/impg/LCBtdjBhJT97LiqnqstbYIdUIAa1DakjPQDCIg/CYkOLiuj33o.jpg?size=751x751&quality=96&sign=d3931cae661815c315fab4db6b1dc541&type=album",
    text: "Coin Lem completely changed my approach to trading. Now I don't worry about market volatility – the platform makes everything much easier.",
    rating: 5,
  }
];

const CustomerReviews: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedReviews = showAll ? reviews : reviews.slice(0, 3);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Customer Reviews
          </h2>
          <p className="text-sm text-gray-600">
            See what people are saying about their experience with Coin Lem.
          </p>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {displayedReviews.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </AnimatePresence>
        </motion.div>

        {reviews.length > 3 && (
          <motion.div 
            layout
            className="text-center mt-6"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              {showAll ? 'Show less' : 'Show more reviews'}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CustomerReviews;

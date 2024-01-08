// components/CustomerReviewSwiper.js
"use client"
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import dynamic from 'next/dynamic';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const StarRating = dynamic(() => import('./StarRating'), { ssr: false });

const CustomerReviewSwiper = ({ reviews }) => {
    const breakpoints = {
        640: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 2,
        },
        1280: {
            slidesPerView: 4,
        },
    };

    const [expandedReviews, setExpandedReviews] = useState([]);

    useEffect(() => {
        setExpandedReviews(new Array(reviews.length).fill(false));
    }, [reviews]);

    const toggleExpand = (index) => {
        setExpandedReviews((prevExpanded) => {
            const newExpanded = [...prevExpanded];
            newExpanded[index] = !newExpanded[index];
            return newExpanded;
        });
    };

    return (
        <Swiper
            spaceBetween={20}
            pagination={{ clickable: true }}
            className="mt-[40px]"
            breakpoints={breakpoints}


        >
            {reviews.map((review, index) => (
                <SwiperSlide key={index} className="bg-white px-[25px] pt-[55px] md:pl-[28px] lg:pl-[28px] pb-[70px]  lg:pr-[23px] rounded-lg shadow-lg">
                    <div className="flex flex-col mb-4">
                        <div className='flex gap-2 my-2 items-center '>
                            <img
                                src={review.photo}
                                alt={`User Avatar - ${review.name}`}
                                className="w-[30px] h-[30px] rounded-full  object-center object-cover aspect-square"
                            />
                            <h3 className="text-xl font-semibold mb-1">{review.name}</h3>
                        </div>
                        <p className=""><StarRating rating={review.rating} /></p>
                        <h4 className="text-lg font-medium mb-2">{review.title}</h4>
                        {expandedReviews[index] ? (
                            <div>
                                <p className="text-gray-700">{review.body}</p>
                                <p className='text-[#FF5E01] cursor-pointer' onClick={() => toggleExpand(index)}>Read less</p>
                            </div>
                        ) : (
                            <div>
                                <p className="text-gray-700">{review.body.substring(0, 50)}</p>
                                {review.body.length > 50 && (
                                    <p className='text-[#FF5E01] cursor-pointer' onClick={() => toggleExpand(index)}>Read more</p>
                                )}
                            </div>
                        )}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CustomerReviewSwiper;

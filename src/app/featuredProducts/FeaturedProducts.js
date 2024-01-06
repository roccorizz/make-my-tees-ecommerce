"use client"
import React, { useState } from 'react';

import Shirt from '@/components/Products/Shirts';
const FeaturedProducts = () => {
    const shirtsData = [
        {
            title: 'T-Shirt for Nike AIR FORCE 1 PIXEL SE LEOPARD LEMON',
            image: '/tshirt1.png',

        },
        {
            title: 'T-Shirt for Nike AIR FORCE 1 PIXEL SE LEOPARD LEMON',
            image: '/tshirt2.png',
        },
        {
            title: 'T-Shirt for Nike AIR FORCE 1 PIXEL SE LEOPARD LEMON',
            image: '/tshirt3.png',
        },
        {
            title: 'T-Shirt for Nike AIR FORCE 1 PIXEL SE LEOPARD LEMON',
            image: '/tshirt4.png',
        },
        {
            title: 'T-Shirt for Nike AIR FORCE 1 PIXEL SE LEOPARD LEMON',
            image: '/tshirt5.png',
        },
        {
            title: 'T-Shirt for Nike AIR FORCE 1 PIXEL SE LEOPARD LEMON',
            image: '/tshirt5.png',
        },
        {
            title: 'T-Shirt for Nike AIR FORCE 1 PIXEL SE LEOPARD LEMON',
            image: '/tshirt4.png',
        },
        {
            title: 'T-Shirt for Nike AIR FORCE 1 PIXEL SE LEOPARD LEMON',
            image: '/tshirt3.png',
        },
        {
            title: 'T-Shirt for Nike AIR FORCE 1 PIXEL SE LEOPARD LEMON',
            image: '/tshirt2.png',
        },
        {
            title: 'T-Shirt for Nike AIR FORCE 1 PIXEL SE LEOPARD LEMON',
            image: '/tshirt1.png',
        },

    ];

    const [selectedTab, setSelectedTab] = useState('justDropped');

    const renderShirts = () => {
        const filteredShirts = shirtsData.filter((shirt) => {

            return true;
        });

        // Show only 3 items in a single column on small screens
        if (window.innerWidth < 640) {
            const limitedShirts = filteredShirts.slice(0, 3);
            return limitedShirts.map((shirt, index) => (
                <Shirt key={index} shirt={shirt} />
            ));
        }

        return filteredShirts.map((shirt, index) => (
            <Shirt key={index} shirt={shirt} />
        ));
    };

    return (
        <div className="flex flex-col justify-center items-center text-center mx-[16px] md:mx-auto lg:mx-auto">
            <h2 className="text-[20px] md:text-[45px] lg:text-[45px] font-staatliches mb-[16px] md:mb-[32px] lg:mb-[32px]">
                Featured products
            </h2>
            <p className="text-[14px] md:text-[20px] lg:text-[20px] font-roboto-regular md:font-roboto lg:font-roboto">
                A good rule of thumb when matching clothes is to find a base color and
                construct your outfit around it.
            </p>

            <div className="max-w-[1634px] text-center mt-[24px] md:mt-[45px] lg:mt-[45px]">
                <div className="flex justify-center items-center space-x-[70px]  md:space-x-[239px] lg:space-x-[239px]">
                    <button
                        onClick={() => setSelectedTab('justDropped')}
                        className={`uppercase text-[14px] md:text-[24px] lg:text-[24px] font-staatliches relative`}
                    >
                        <span className={`${selectedTab === 'justDropped' ? 'border-b-2 border-[#161616]' : ''}`}>
                            just dropped
                        </span>
                    </button>
                    <button
                        onClick={() => setSelectedTab('classic')}
                        className={`uppercase text-[14px] md:text-[24px] lg:text-[24px] font-staatliches relative`}
                    >
                        <span className={`${selectedTab === 'classic' ? 'border-b-2 border-[#161616]' : ''}`}>
                            Classic
                        </span>
                    </button>
                </div>
                <div className='w-[288px] lg:w-[1602px] border-b-2 border-[#D9D9D9]'></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-[36px] mt-[44px] md:mt-[54px] lg:mt-[54px]">{renderShirts()}</div>
            {window.innerWidth < 640 && (
                <button
                    className="uppercase flex lg:hidden md:hidden text-[14px] md:text-[24px] lg:text-[24px] font-roboto-regular py-[12px] px-[23px] bg-[#FF5E01] text-white rounded-lg"

                >
                    Load More
                </button>
            )}
        </div>
    );
};

export default FeaturedProducts;

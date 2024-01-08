"use client"
import React, { useState, useEffect } from 'react';

import ProductDetail from '@/components/Products/ProductDetail';
const PopularSneakers = () => {
    const productsData = [
        {
            title: 'Nike Jumping shoes classic ',
            image: '/ayon1.png',

        },
        {
            title: 'Nike Jumping shoes classic ',
            image: '/ayon2.png',

        },
        {
            title: 'Nike Jumping shoes classic ',
            image: '/ayon3.png',

        },
        {
            title: 'Nike Jumping shoes classic ',
            image: '/ayon4.png',

        },
        {
            title: 'Nike Jumping shoes classic ',
            image: '/ayon5.png',

        },
        {
            title: 'Nike Jumping shoes classic ',
            image: '/ayon6.png',

        },
        {
            title: 'Nike Jumping shoes classic ',
            image: '/ayon7.png',

        },
        {
            title: 'Nike Jumping shoes classic ',
            image: '/ayon8.png',

        },
        {
            title: 'Nike Jumping shoes classic ',
            image: '/ayon9.png',

        },
        {
            title: 'Nike Jumping shoes classic ',
            image: '/ayon5.png',

        },

    ];

    const [selectedTab, setSelectedTab] = useState('recentlyAdded');
    const [windowWidth, setWindowWidth] = useState(0);

    // Use useEffect to set the initial window width and update it on window resize
    useEffect(() => {
        setWindowWidth(window.innerWidth);

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const renderSneakers = () => {
        const filteredSneakers = productsData.filter((product) => {

            return true;
        });

        // Show only 3 items in a single column on small screens
        if (windowWidth < 640) {
            const limitedSneakers = filteredSneakers.slice(0, 3);
            return limitedSneakers.map((product, index) => (
                <ProductDetail key={index} product={product} />
            ));
        }

        return filteredSneakers.map((product, index) => (
            <ProductDetail key={index} product={product} />
        ));
    };

    return (
        <div className="flex flex-col justify-center items-center text-center mx-[16px] md:mx-auto lg:mx-auto">
            <h2 className="uppercase text-[14px] md:text-[32px] lg:text-[32px] font-staatliches mb-[8px] md:mb-[4px] lg:mb-[4px]">
                match these
            </h2>
            <p className="text-[20px] md:text-[45px] lg:text-[45px] font-staatliches ">popular sneakers
            </p>

            <div className="max-w-[1634px] text-center mt-[24px] md:mt-[45px] lg:mt-[45px]">
                <div className="flex justify-center items-center space-x-[70px]  md:space-x-[239px] lg:space-x-[239px]">
                    <button
                        onClick={() => setSelectedTab('recentlyAdded')}
                        className={`uppercase text-[14px] md:text-[24px] lg:text-[24px] font-staatliches relative`}
                    >
                        <span className={`${selectedTab === 'recentlyAdded' ? 'border-b-2 border-[#161616]' : ''}`}>
                            Recently Added
                        </span>
                    </button>
                    <button
                        onClick={() => setSelectedTab('bestSellers')}
                        className={`uppercase text-[14px] md:text-[24px] lg:text-[24px] font-staatliches relative`}
                    >
                        <span className={`${selectedTab === 'bestSellers' ? 'border-b-2 border-[#161616]' : ''}`}>
                            Best Sellers
                        </span>
                    </button>
                </div>
                <div className='w-[288px] lg:w-[1602px] border-b-2 border-[#D9D9D9]'></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-[25px] mt-[44px] md:mt-[54px] lg:mt-[54px]">{renderSneakers()}</div>
            {windowWidth < 640 && (
                <button
                    className="uppercase flex lg:hidden md:hidden text-[14px] md:text-[24px] lg:text-[24px] font-roboto-regular py-[12px] px-[23px] mt-[32px] mb-[60px] bg-[#FF5E01] text-white rounded-lg"

                >
                    Load More
                </button>
            )}
        </div>
    );
};

export default PopularSneakers;

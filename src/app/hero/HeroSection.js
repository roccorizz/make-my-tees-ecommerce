// HeroSection.jsx
import Image from 'next/image';
import React from 'react';
import bannerpic from '../../../public/bannerphoto.png'
import bannersm from '../../../public/herosm.png'
const HeroSection = () => {
    return (
        <div className=' bg-[url("/back.png")] h-[321px] md:h-[633px] lg:h-[633px] w-full bg-cover relative bg-norepeat mt-[-60px] md:mt-[-85px] lg:mt-[-85px] mb-[67px] md:mb-[169px] lg:mb-[169px]'>
            <div className='container mx-auto items-center justify-center  '>
                <h2 className='text-center font-staatliches text-[20px] md:text-[50px] lg:text-[50px] relative mt-[65px] md:mt-[110px] lg:mt-[110px]'>Match your outfits<br />to your sneakers</h2>
                <Image className='hidden md:flex  lg:flex mt-[-270px] absolute' src={bannerpic} alt='' />
                <Image className='flex md:hidden lg:hidden mt-[25px] ml-[24px] mr-[13px] absolute' src={bannersm} width={283} height={210} alt='' />

            </div>
        </div>
    );
};

export default HeroSection;

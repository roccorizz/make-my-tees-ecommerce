import Image from 'next/image'
import React from 'react'
import line from '../../../public/lineCurve.png'
import property1 from '../../../public/property1.png'
import property2 from '../../../public/property2.png'
import property3 from '../../../public/property3.png'
const HowItWorks = () => {
    return (
        <div className='flex flex-col items-center justify-center sm:mx-[16px]   mb-[59px] md:mb-[140px] lg:mb-[140px]'>
            <h3 className='text-[20px] md:text-[45px] lg:text-[45px]  font-staatliches mb-[28px] md:mb-[60px] lg:mb-[60px]'>How it Works</h3>
            <div className='flex  items-center justify-center '>

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-[221px] gap-y-[24px] relative mb-[32px] md:mb-[48px] lg:mb-[48px] '>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <Image className='w-[48px] h-[48px] md:w-[90px] md:h-[90px] lg:w-[90px] lg:h-[90px] ' src={property1} alt='' />
                        <h3 className='mt-[16px] md:mt-[49px] lg:mt-[49px] mb-[8px] md:mb-[26px] lg:mb-[26px]text-[16px] md:text-[32px] lg:text-[32px] font-staatliches uppercase'>Locate your sneakers</h3>
                        <p className='w-[288px] md:w-[373px] lg:w-[373px] font-roboto-regular text-[14px] md:text-[20px] lg:text-[20px] h-[67px] md:h-[79px] lg:h-[79px] '>Search our database of 80k from sneakers Gallery to find the shoes which kids of you want to match</p>
                    </div>
                    <div className='flex flex-col items-center justify-center text-center '>
                        <Image className='w-[48px] h-[48px] md:w-[90px] md:h-[90px] lg:w-[90px] lg:h-[90px]' src={property2} alt='' />
                        <h3 className='mt-[16px] md:mt-[49px] lg:mt-[49px] mb-[8px] md:mb-[26px] lg:mb-[26px]text-[16px] md:text-[32px] lg:text-[32px] font-staatliches uppercase'>match the design & color</h3>
                        <p className='w-[288px] md:w-[353px] lg:w-[353px] font-roboto-regular text-[14px] md:text-[20px] lg:text-[20px] h-[67px] md:h-[79px] lg:h-[79px]'>Find a design you want to wear with your kicks, and choose from t-shirts,hoodies, & more.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <Image className='w-[48px] h-[48px] md:w-[90px] md:h-[90px] lg:w-[90px] lg:h-[90px]' src={property3} alt='' />
                        <h3 className='mt-[16px] md:mt-[49px] lg:mt-[49px] mb-[8px] md:mb-[26px] lg:mb-[26px]text-[16px] md:text-[32px] lg:text-[32px] font-staatliches uppercase'>seamless style delivered</h3>
                        <p className='w-[288px] md:w-[363px] lg:w-[363px] h-[67px] md:h-[79px] lg:h-[79px] font-roboto-regular text-[14px] md:text-[20px] lg:text-[20px]'>We will color match your t-shirt design to your sneakers, & ship it to you. 100% color match guaranteed.</p>
                    </div>
                </div>
                <Image className='w-[1093px] h-[56px] hidden md:flex lg:flex mt-[-230px] ml-[6px] absolute' src={line} alt='' />
            </div>
            <button className='font-roboto-regular text-[14px] md:text-[22px] lg:text-[22px] py-[16px] md:pt-[12px] lg:pt-[12px] md:pb-[9px] lg:pb-[9px]  px-[17px] md:pl-[39px] lg:pl-[39px] md:pr-[40px] lg:pr-[40px] bg-[#FF5E01] text-white rounded-xl '>Start By Searching Your Sneakers</button>

        </div>
    )
}

export default HowItWorks
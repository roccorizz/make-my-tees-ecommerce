import Image from 'next/image'
import React from 'react'
import sneaker from '../../../public/sneakerGif.gif'
import sneakerStyle from '../../../public/sneakerStyle.png'
import search from '../../../public/Vector.png'

const CustomizeSneaker = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-items-center  container mx-auto mb-[60px] md:mb-[169px] lg:mb-[169px]'>


            <div className='bg-[#ABECFB] w-[241px] md:w-[576px] lg:w-[576px] h-[211px] md:h-[503px] lg:h-[503px] rounded-[40px]'>
                <div className='flex flex-col items-center justify-center mt-[30px] md:mt-[71px] lg:mt-[71px]'>

                    <Image className='w-[167px] h-[108px] md:w-[400px] lg:w-[400px] md:h-[258px] lg:h-[258px]' src={sneaker} alt='' />
                    <div>
                        <p className='uppercase bg-[#6ACFE7] pt-[9px] pb-[8px] md:pt-[19px] md:pb-[22px] lg:pt-[19px] lg:pb-[22px] md:w-[576px] lg:w-[576px] w-[240px] font-staatliches text-[14px] md:text-[24px] lg:text-[24px] text-white text-center mt-[16.6px] md:mt-[40px] lg:mt-[40px] md:rounded-b-none lg:rounded-b-none rounded-b-2xl relative'>nike air jordan sneakers</p>
                        <Image className='absolute w-[41px] h-[41px] md:w-[99px] md:h-[99px] lg:w-[99px] lg:h-[99px] mt-[-40px] ml-[220px] md:mt-[-90px] md:ml-[520px] lg:mt-[-90px] lg:ml-[520px]' src={sneakerStyle} alt='' />
                    </div>
                </div>
            </div>
            <div className='mx-[21px] flex flex-col justify-center'>
                <h3 className='text-[20px] md:text-[45px] lg:text-[45px] leading-[24px] md:leading-[55px] lg:leading-[55px] font-staatliches uppercase mb-[32px] mt-[40px] text-center md:text-start lg:text-start'>Customize Your Own Tees<br />With Match Your Sneakers</h3>
                <button className='pt-[16px] pb-[15px] md:pt-[16px] md:pb-[15px] lg:pt-[16px] lg:pb-[15px] px-[16px] bg-[#FFE000] font-roboto-regular text-[14px] md:text-[22px] lg:text-[22px] flex items-center justify-between rounded-lg'>Search sneakers to match <span className='pl-56px md:pl-218px lg:pl-218px '><Image src={search} alt='' /></span></button>
                <p className='text-[#474747] mt-[24px] md:mt-[30px] lg:mt-[30px] font-roboto w-[277px] md:w-[609px] lg:w-[609px]'>Match your trendsetting sneakers with our extensive database featuring millions of products from renowned brands like Adidas, ASICS, Converse, Gucci, Jordan, Louis Vuitton, New Balance, Nike, Puma, Reebok, Saucony, Vans, and more. We seamlessly match your sneakers to an array of outfits, including T-shirts, hoodies, crop tops, and socks. Customize designs and colors to align perfectly with your sneaker theme, for a look thats uniquely yours.</p>
            </div>



        </div>
    )
}

export default CustomizeSneaker
import Image from 'next/image';
import React from 'react';
import '../globals.css'
import group1 from '../../../public/Group 1.svg';
import group2 from '../../../public/group2.svg';
import group3 from '../../../public/group3.svg';
import group4 from '../../../public/group4.svg';
import socials from '../../../public/Social icons.svg';
import logo from '../../../public/Logo.svg';

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaArrowRight } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className="flex flex-col  justify-center ">

            <div className='w-full bg-[#D3F4FD] md:bg-[#9FDAFA] bg-cover mb-50 text-black'>
                <div className='max-w-[1351px]  mx-auto my-[38px]'>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-y-[24px]  ">
                        {/* Item 1 */}
                        <div className='flex justify-around'>
                            <div className=" flex flex-col md:flex-row lg:flex-row items-center gap-[12px] md:gap-[20px] lg:gap-[20px] justify-center text-center">
                                <Image className=" mt-[-3px] w-[24px] h-[18px] md:w-[49px] md:h-[47px] lg:w-[49px] lg:h-[47px] " src={group1} alt="" />
                                <div className="flex flex-col">
                                    <h4 className="text-[12px] md:text-[18px] lg:text-[18px] font-roboto">Free Shipping</h4>
                                    <p className=" text-[10px] md:text-[13px] lg:text-[13px] leading-[12px] md:leading-[22.4px] lg:leading-[22.4px] tracking-tight font-roboto-regular">
                                        On Orders Over $100
                                    </p>
                                </div>
                            </div>
                            <div className='border-black border-r-[0.5px] w-[51px] hidden md:grid lg:grid '></div>

                        </div>


                        {/* Item 2 */}
                        <div className='flex justify-around'>
                            <div className=" flex flex-col md:flex-row lg:flex-row items-center gap-[12px] md:gap-[20px] lg:gap-[20px] justify-center text-center">
                                <Image className=" mt-[5px] w-[24px] h-[18px] md:w-[49px] md:h-[47px] lg:w-[49px] lg:h-[47px] " src={group2} alt="" />
                                <div className="flex flex-col">
                                    <h4 className="text-[12px] md:text-[18px] lg:text-[18px] font-roboto">Secure Payment</h4>
                                    <p className=" text-[10px] md:text-[13px] lg:text-[13px] leading-[12px] md:leading-[22.4px] lg:leading-[22.4px] tracking-tight font-roboto-regular">
                                        100% Secure Guarantee
                                    </p>
                                </div>
                            </div>
                            <div className='border-black border-r-[0.5px] w-[51px] hidden md:grid lg:grid '></div>
                        </div>

                        {/* Item 3 */}
                        <div className='flex justify-around'>
                            <div className=" flex flex-col md:flex-row lg:flex-row items-center gap-[12px] md:gap-[20px] lg:gap-[20px] justify-center text-center">
                                <Image className=" w-[24px] h-[18px] md:w-[49px] md:h-[47px] lg:w-[49px] lg:h-[47px] " src={group4} alt="" />
                                <div className="flex flex-col">
                                    <h4 className="text-[12px] md:text-[18px] lg:text-[18px] font-roboto">Easy Process</h4>
                                    <p className=" text-[10px] md:text-[13px] lg:text-[13px] leading-[12px] md:leading-[22.4px] lg:leading-[22.4px] tracking-tight font-roboto-regular">
                                        Order in 2 Minutes
                                    </p>
                                </div>
                            </div>
                            <div className='border-black border-r-[0.5px] w-[51px] hidden md:grid lg:grid '></div>
                        </div>

                        {/* Item 4 */}
                        <div className=" flex flex-col md:flex-row lg:flex-row items-center gap-[12px] md:gap-[20px] lg:gap-[20px] justify-center text-center">
                            <Image className=" mt-[4px] ml-[1px] w-[24px] h-[18px] md:w-[49px] md:h-[47px] lg:w-[49px] lg:h-[47px] " src={group3} alt="" />
                            <div className="flex flex-col">
                                <h4 className="text-[12px] md:text-[18px] lg:text-[18px] font-roboto">Special Support</h4>
                                <p className=" text-[10px] md:text-[13px] lg:text-[13px] leading-[12px] md:leading-[22.4px] lg:leading-[22.4px] tracking-tight font-roboto-regular">
                                    24/7 Dedicated Support
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



            {/* link section */}
            <div className='w-full bg-[url("/back.png")] bg-cover pt-20 mb-50 text-black'>

                <div className='max-w-[1351px] ml-[18px] mr-[16px] md:mx-auto lg:mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
                        <div>
                            <div className='flex justify-between'>

                                <h4 className='text-[14px] md:text-[16px] lg:text-[16px] pb-[24px] md:pb-[20px] lg:pb-[20px] text-first font-roboto'>ABOUT MATCH MY TEES</h4>
                                <span className=' lg:hidden text-first w-[10px] h-[10px] text-'>+</span>
                            </div>

                            <ul className='hidden md:grid lg:grid'>
                                <li className='pb-4'>Designs We Do</li>
                                <li className='pb-4'>Military or First Responder Discount</li>
                                <li className='pb-4'>Size Chart</li>
                                <li className='pb-4'>Frequently Asked Questions</li>
                                <li className='pb-4'>Returns & Refunds</li>
                                <li className='pb-4'>Terms of Use</li>
                            </ul>
                        </div>
                        <div >
                            <h4 className='text-[14px] md:text-[16px] lg:text-[16px] pb-[24px] md:pb-[20px] lg:pb-[20px] text-first font-roboto uppercase md:normal-case lg:normal-case'>Information</h4>
                            <ul className='hidden md:grid lg:grid'>
                                <li className='pb-4'>FAQ</li>
                                <li className='pb-4'>Blog</li>
                                <li className='pb-4'>Size Chart</li>
                                <li className='pb-4'>Support</li>
                            </ul>
                        </div>
                        <div className=''>
                            <h4 className='text-[14px] md:text-[16px] lg:text-[16px] pb-[24px] md:pb-[20px] lg:pb-[20px] text-first font-roboto uppercase md:normal-case lg:normal-case'>Company</h4>
                            <ul className='hidden md:grid lg:grid'>
                                <li className='pb-4'>About us</li>
                                <li className='pb-4'>Careers</li>
                                <li className='pb-4'>Contact us</li>
                                <li className='pb-4'>Match my Tees</li>
                            </ul>
                        </div>

                        <h4 className='grid md:hidden lg:hidden text-[14px] md:text-[16px] lg:text-[16px] pb-[24px] md:pb-[20px] lg:pb-[20px] text-first font-roboto uppercase md:normal-case lg:normal-case'>Newsletter signup</h4>
                        <div className='mb-5 mt-55 hidden md:grid lg:grid w-[365px] h-[258px]'>
                            <div className='bg-white w-full h-[258px]  py-[32px] pl-[37px] pr-[27px] flex flex-col gap-4  rounded-lg'>

                                <p className='font-roboto text-[16px]'>Subscribe</p>
                                <form className='flex flex-row flex-wrap' action="">
                                    <input type="text" className='text-gray-500 border-[#7A7E92] border-t border-b border-l rounded-md focus:outline-none  w-[249px] h-[50px] py-[16px] px-[17px] relative' placeholder='Email Address' />
                                    <button className='p-3 justify-center rounded-md focus:outline-none  bg-[#FF5E01] text-white w-[53px] h-[50px] absolute ml-[200px] '><FaArrowRight /></button>
                                </form>
                                <p className='font-roboto-regular font-[14px] text-[#474747]'>Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.</p>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:grid lg:grid w-full  mt-[64px] mb-[37px] border-[1px] border-[#161616] opacity-[20%] justify-center'></div>
                </div>
                <div className='w-full text-[#161616]'>

                    <div className='max-w-[1351px] ml-[18px] mr-[16px] md:mx-auto lg:mx-auto'>
                        <div className=' flex flex-row   justify-between items-center'>
                            <div className='text-center'>
                                <Image className=' w-[126px] h-[14px] md:w-[199px] md:h-[22px] lg:w-[199px] lg:h-[22px]' src={logo} alt='logo' />
                            </div>
                            <div className='hidden md:flex lg:flex text-center font-roboto text-[14px] no-underline space-x-[30px]'>
                                <a href="">Terms</a>
                                <a href="">Privacy</a>
                                <a href="">Cookies</a>
                            </div>
                            <div className='text-center text-xl text-black mb-2 hidden md:flex lg:flex'>
                                <a href='#' className='w-[28px] h-[28px] md:w-[35px] md:h-[35px] lg:w-[35px] lg:h-[35px] rounded-full border-[1.5px] bg-none border-[#161616] mx-1 inline-block pt-[3px] pl-[3px] md:pt-[6px] md:pl-[6px] lg:pt-[6px] lg:pl-[6px]'><FaLinkedinIn className='md:p-[2px] lg:p-[2px] p-[4px]' /></a>
                                <a href='#' className='w-[28px] h-[28px] md:w-[35px] md:h-[35px] lg:w-[35px] lg:h-[35px] rounded-full border-[1.5px] bg-none border-[#161616] mx-1 inline-block pt-[3px] pl-[3px] md:pt-[6px] md:pl-[6px] lg:pt-[6px] lg:pl-[6px]'><FaFacebookF className='md:p-[2px] lg:p-[2px] p-[4px]' /></a>
                                <a href='#' className='w-[28px] h-[28px] md:w-[35px] md:h-[35px] lg:w-[35px] lg:h-[35px] rounded-full border-[1.5px] bg-none border-[#161616] mx-1 inline-block pt-[3px] pl-[3px] md:pt-[6px] md:pl-[6px] lg:pt-[6px] lg:pl-[6px]'><FaTwitter className='md:p-[2px] lg:p-[2px] p-[4px]' /></a>
                            </div>
                            <Image className='flex md:hidden lg:hidden' src={socials} alt='' />
                        </div>
                        <div className=' flex md:hidden lg:hidden text-center items-center justify-center font-roboto text-[14px] no-underline space-x-[19px] mt-[43px] my-[40px]'>
                            <a href="">Terms</a>
                            <a href="">Privacy</a>
                            <a href="">Cookies</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

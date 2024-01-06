"use client"
import { useState, useEffect, useRef } from 'react';
import '../globals.css'
import chevIcon from '/public/Chevron.png'
import adidas from '/public/adidas.png'
import model1 from '/public/model1.png'
import outfits1 from '/public/outfits1.png'
import Image from 'next/image';
const ChooseBySneaker = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownBtnRef = useRef(null);
    const dropdownMenuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownBtnRef.current &&
                !dropdownBtnRef.current.contains(event.target) &&
                dropdownMenuRef.current &&
                !dropdownMenuRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };
    return (
        <div className='flex flex-col justify-center items-center my-[140px] w-full bg-[url("/Rectangle144.png")] bg-cover bg-center'>
            <div className='mx-[28px]  md:mx-auto lg:mx-auto text-center py-[101px]'>

                <h3 className='pb-[32px] font-staatliches text-[20px] md:text-[45px] lg:text-[45px]'>Choose by Sneakers</h3>
                <p className='font-roboto-regular md:font-roboto lg:font-roboto text-[14px] md:text-[20px] lg:text-[20px] text-[#474747]'>Select your sneakers brand name, model number and outfit<br />
                    category to match with the sneaker. Go to Experiment Room to find best design match.</p>

                <div className='max-w-[1634px] mt-[24px]'>
                    <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center lg:grid-cols-3 gap-[233px] md:gap-[281px] lg:gap-[281px]'>
                        <div className="relative inline-block text-center">
                            <button
                                ref={dropdownBtnRef}
                                onClick={toggleDropdown}
                                type="button"
                                className="inline-flex justify-center items-center pt-[18px] pb-[14px] md:pt-[17px] md:pb-[19px] lg:pt-[17px] lg:pb-[19px] pl-[16px] pr-[20px] md:pl-[29px] md:pr-[26px] lg:pl-[29px] lg:pr-[26px] border border-gray-300 rounded-xl shadow-sm text-sm font-roboto-regular text-[14px] md:text-[16px] lg:text-[16px] text-white bg-[#2C2C31]  focus:outline-none mb-[68px]"
                            >
                                Choose Brand Name
                                <Image className='ml-[39px] md:ml-[38px] lg:ml-[38px]' src={chevIcon} w={10} h={5} alt='' />
                            </button>

                            <div ref={dropdownMenuRef} className={` absolute  ${isDropdownOpen ? '' : 'hidden'}`}>
                                <div className=" mt-[68px] md:mt-[167px] lg:mt-[167px] ">
                                    <Image className='w-[129px] h-[87px] md:w-[222px] md:h-[147px] ' src={adidas} alt='' />

                                </div>
                            </div>
                        </div>
                        <div className=" inline-block text-center ">
                            <button
                                ref={dropdownBtnRef}
                                onClick={toggleDropdown}
                                type="button"
                                className="inline-flex justify-center items-center pt-[18px] pb-[14px] md:pt-[17px] md:pb-[19px] lg:pt-[17px] lg:pb-[19px] pl-[16px] pr-[20px] md:pl-[29px] md:pr-[26px] lg:pl-[29px] lg:pr-[26px] border border-gray-300 rounded-xl shadow-sm text-sm font-roboto-regular text-[14px] md:text-[16px] lg:text-[16px] text-white bg-[#2C2C31]  focus:outline-none mb-[68px]"
                            >
                                Choose Brand Name
                                <Image className='ml-[39px] md:ml-[38px] lg:ml-[38px]' src={chevIcon} w={10} h={5} alt='' />
                            </button>

                            <div ref={dropdownMenuRef} className={`   ${isDropdownOpen ? '' : 'hidden'}`}>
                                <div className=" justify-center mt-[69px] md:mt-[201px] lg:mt-[201px]">
                                    <Image className='w-[156px] h-[84px] md:w-[241px] md:h-[107px] lg:w-[241px] lg:h-[107px] object-center object-cover' src={model1} alt='' />

                                </div>
                            </div>
                        </div>
                        <div className=" inline-block text-center">
                            <button
                                ref={dropdownBtnRef}
                                onClick={toggleDropdown}
                                type="button"
                                className="inline-flex justify-center items-center pt-[18px] pb-[14px] md:pt-[17px] md:pb-[19px] lg:pt-[17px] lg:pb-[19px] pl-[16px] pr-[20px] md:pl-[29px] md:pr-[26px] lg:pl-[29px] lg:pr-[26px] border border-gray-300 rounded-xl shadow-sm text-sm font-roboto-regular text-[14px] md:text-[16px] lg:text-[16px] text-white bg-[#2C2C31]  focus:outline-none mb-[68px]"
                            >
                                Choose Brand Name
                                <Image className='ml-[39px] md:ml-[38px] lg:ml-[38px]' src={chevIcon} w={10} h={5} alt='' />
                            </button>

                            <div ref={dropdownMenuRef} className={`   ${isDropdownOpen ? '' : 'hidden'}`}>
                                <div className="py-1 justify-center mt-[71px] md:mt-[101px] lg:mt-[101px] ">
                                    <Image className='w-[154px] h-[157px] md:w-[218px] md:h-[221px]  lg:w-[218px] lg:h-[221px] object-cover object-center ' src={outfits1} alt='' />

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <button className='mt-[63px] md:mt-[94px] lg:mt-[94px] bg-[#FF5E01]  px-[35px] md:px-[61px] lg:px-[61px]  py-[12px]  lg:py-[16px] font-roboto-regular text-[14px] md:text-[22px] lg:text-[22px] text-white rounded-xl'>Search</button>
                <p className='mt-[16px] md:mt-[33px] lg:mt-[33px] font-roboto-regular text-[14px] md:text-[18px] lg:text-[18px]'>Can’t find your sneaker?</p>
            </div >
        </div >
    )
}

export default ChooseBySneaker
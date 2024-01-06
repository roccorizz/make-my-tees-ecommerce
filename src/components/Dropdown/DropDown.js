import { useState, useEffect, useRef } from 'react';

const Dropdown = ({ id, imageSrc }) => {
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
        <div className="inline-block text-center">
            <button
                ref={dropdownBtnRef}
                onClick={toggleDropdown}
                type="button"
                className="inline-flex justify-center items-center pt-[18px] pb-[14px] md:pt-[17px] md:pb-[19px] lg:pt-[17px] lg:pb-[19px] pl-[16px] pr-[20px] md:pl-[29px] md:pr-[26px] lg:pl-[29px] lg:pr-[26px] border border-gray-300 rounded-xl shadow-sm text-sm font-roboto-regular text-[14px] md:text-[16px] lg:text-[16px] text-white bg-[#2C2C31]  focus:outline-none mb-[68px]"
            >
                Choose Brand Name
                <img className='ml-[39px] md:ml-[38px] lg:ml-[38px]' src={chevIcon} width={10} height={5} alt='' />
            </button>

            <div ref={dropdownMenuRef} className={`absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${isDropdownOpen ? '' : 'hidden'}`}>
                <div className="justify-center mt-2">
                    <img className='w-[129px] h-[87px] md:w-[222px] md:h-[147px]' src={imageSrc} alt='' />
                </div>
            </div>
        </div>
    );
};

export default Dropdown;

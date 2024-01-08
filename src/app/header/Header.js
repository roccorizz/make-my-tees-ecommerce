import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import navToogle from '../../../public/toggle.svg'
import Logo from '../../../public/Logo.svg'
import searchButton from '../../../public/Search.svg'
import about from '../../../public/about.svg'
import cart from '../../../public/cart.svg'
import '../globals.css';
const Header = () => {
    return (
        <nav className='flex items-center justify-between px-[16px] lg:pl-[158px] lg:pr-[167px] py-[20px] md:py-[30px] lg:py-[30px] text-[16px] z-50 '>
            <div className='lg:hidden'>
                <Image src={navToogle} width={18} height={13} alt='toggle' />
            </div>
            <div>
                <Image className='w-[154px] h-[17px] md:w-[226px] md:h-[25px] lg:w-[226px] lg:h-[25px]' src={Logo} alt='Logo' />
            </div>
            <div className="space-x-[60px] hidden lg:flex text-[#161616] font-roboto text-[16px]">
                <Link href="/tshirts" >T-Shirts
                </Link>
                <Link href="/hoodies">Hoodies
                </Link>
                <Link href="/croptops">Crop Tops
                </Link>
                <Link href="/socks" >Socks
                </Link>
                <Link href="/mycloset" >My Closet
                </Link>
            </div>
            <div className='flex space-x-[24px]'>
                <div>
                    <Image src={searchButton} width={15} height={15} alt='search' />
                </div>
                <div className='hidden lg:flex'>
                    <Image src={about} width={15} height={15} alt='search' />
                </div>
                <div className='hidden lg:flex'>
                    <Image src={cart} width={15} height={15} alt='search' />
                </div>
            </div>

        </nav>
    )
}

export default Header
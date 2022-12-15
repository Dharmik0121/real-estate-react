// import { motion } from 'framer-motion'
import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png'
import '../index.css'
import Nav from './Nav'
import NavMobile from './NavMobile'

// import icons
import { FaBars } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

const Header = () => {
    const [navMobile, setNavMobile] = useState(false);
    return (
        // <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        //     <header className='flex justify-between p-2 items-center px-3 max-w-6xl mx-auto'>
        //         <div className='flex items-center'>
        //             <Link to='/'><motion.img src={logo} whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }} alt="logo" className='h-12 cursor-pointer' /></Link>
        //         </div>
        //         <div  >
        //             <ul className='flex space-x-10'>
        //                 <Link to='/'><li className='cursor-pointer hover-underline-animation'><lord-icon src="https://cdn.lordicon.com/kxoxiwrf.json" trigger="hover" stroke="100" colors="primary:#050505,secondary:#7a7979"></lord-icon>Home</li></Link>
        //                 <Link to='/offers'><li className='cursor-pointer hover-underline-animation'><lord-icon src="https://cdn.lordicon.com/bwwdkiyf.json" trigger="hover" colors="primary:#050505,secondary:#7a7979" stroke="100"></lord-icon>Offers</li></Link>
        //                 <Link to='/sign-in'><li className='cursor-pointer hover-underline-animation'><lord-icon src="https://cdn.lordicon.com/ljvjsnvh.json" trigger="hover" colors="primary:#050505,secondary:#7a7979" stroke="100"></lord-icon>SignIn</li></Link>
        //             </ul>
        //         </div>
        //     </header >
        // </div >

        <header
            className='mb-12 lg:mb-0 z-20 relative px-4 lg:px-0'
            data-aos='fade-down'
            data-aos-delay='1200'
            data-aos-duration='1000'
        >
            <div className='container mx-auto'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-[120px]'>
                        <a href=''>
                            <img src={logo} alt='' />
                        </a>

                        <div className='hidden lg:flex'>
                            <Nav />
                        </div>
                    </div>

                    <div
                        className={`${navMobile ? 'max-h-52' : 'max-h-0'
                            } lg:hidden absolute top-24 bg-accent-tertiary w-full left-0 right-0 font-bold rounded transition-all overflow-hidden`}
                    >
                        <NavMobile />
                    </div>

                    <button className='btn btn-quaternary flex items-center gap-x-[20px] group'>
                        Request Demo
                        <BsArrowRight className='text-2xl text-accent-primary group-hover:text-white transition' />
                    </button>

                    {/* nav trigger btn / only shows on mobile screens */}
                    <div
                        onClick={() => setNavMobile(!navMobile)}
                        className='text-2xl text-primary cursor-pointer lg:hidden'
                    >
                        <FaBars />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
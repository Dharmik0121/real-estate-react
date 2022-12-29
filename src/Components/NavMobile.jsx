import React from 'react'
import logo from '../assets/img/hero-bg.png'
import { Link } from 'react-router-dom';

const NavMobile = () => {
    return (
        <>
            <nav className='bg-white shadow-2xl w-full h-full'>
                <div className="p-5" style={{ background: 'linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7))' }}>
                    <Link to='/' className='' >
                        <img className='h-10 lg:h-8' src={logo} alt='' />
                    </Link>
                </div>
                <ul className='text-center h-full flex flex-col items-center justify-center gap-y-6'>
                    <li><Link to='/' className='text-xl font-medium capitalize'>Home</Link></li>
                    <li><Link to='/about' className='text-xl font-medium capitalize'>about</Link></li>
                    <li><Link to='/contact' className='text-xl font-medium capitalize'>contact</Link></li>
                    <li><Link to='/sign-in' className='text-xl font-medium capitalize'>sign-in</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default NavMobile
import React, { useEffect, useState } from 'react'
// import logo from '../assets/img/hero_illustration.png'
import logo from '../assets/img/hero-bg.png'
import { CgMenuRight, CgClose } from 'react-icons/cg';
import NavMobile from './NavMobile';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const Header = () => {
    const [bg, setBg] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);
    useEffect(() => {
        // add event listener
        window.addEventListener('scroll', () => {
            // when scrollY is bigger than 50px setBg to true, else false
            return window.scrollY > 50 ? setBg(true) : setBg(false);
        });
    });

    const [pageState, setPageState] = useState("Sign in");
    const location = useLocation();
    const navigate = useNavigate();
    const auth = getAuth();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setPageState("Profile");
            } else {
                setPageState("Sign in");
            }
        });
    }, [auth]);
    function pathMatchRoute(route) {
        if (route === location.pathname) {
            return true;
        }
    }


    return (
        <>
            <header
                className={`${
                    // if bg is true
                    bg
                        ? 'bg-primary py-3.5 lg:py-6'
                        : // if bg is false
                        'bg-none'
                    }
      fixed left-0 py-8 z-10 w-full transition-all duration-200`}
            >
                <div className='container mx-auto'>
                    <div className='flex justify-between items-center'>
                        {/* logo */}
                        <Link to='/'>
                            <img className='h-10 lg:h-10 ' src={logo} alt='' />
                        </Link>
                        {/* menu icon */}
                        <div
                            onClick={() => setMobileNav(!mobileNav)}
                            className='md:hidden text-2xl lg:text-3xl text-white cursor-pointer'
                        >
                            {mobileNav ? <CgClose /> : <CgMenuRight />}
                        </div>
                        {/* nav */}
                        <nav className='hidden md:flex'>
                            <ul className='md:flex md:gap-x-12'>
                                <li><Link to='/' className='capitalize text-white hover:border-b transition-all'>Home</Link></li>
                                <li><Link to='/about' className='capitalize text-white hover:border-b transition-all'>About</Link></li>
                                <li><Link to='/contact' className='capitalize text-white hover:border-b transition-all'>contact</Link></li>
                                {/* <li><Link to='/sign-in' className='capitalize text-white hover:border-b transition-all'>signIn</Link></li> */}
                                <li
                                    className={`capitalize text-white hover:border-b transition-all ${(pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) &&
                                        ""
                                        }`}
                                    onClick={() => navigate("/profile")}
                                >
                                    {pageState}
                                </li>
                            </ul>
                        </nav>
                        {/* nav mobile */}
                        <div
                            className={`${mobileNav ? 'left-0' : '-left-full'
                                } md:hidden fixed bottom-0 w-3/4 max-w-xs h-screen transition-all`}
                        >
                            <NavMobile />
                        </div>
                    </div>
                </div>
            </header>
        </>

    )
}

export default Header
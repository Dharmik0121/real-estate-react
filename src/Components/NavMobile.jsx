import React, { useEffect, useState } from 'react'
import logo from '../assets/img/hero-bg.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const NavMobile = () => {
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
                    {/* <li><Link to='/sign-in' className='text-xl font-medium capitalize'>sign-in</Link></li> */}
                    <li
                        className={`cursor-pointer text-xl font-medium capitalize ${(pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) &&
                            ""
                            }`}
                        onClick={() => navigate("/profile")}
                    >
                        {pageState}
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavMobile
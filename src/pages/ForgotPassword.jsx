import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bounce } from "react-reveal";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import toast from "react-hot-toast";
import { useState } from "react";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    function onChange(e) {
        setEmail(e.target.value);
    }

    async function onSubmit(e) {
        e.preventDefault();
        try {
            const auth = getAuth();
            await sendPasswordResetEmail(auth, email);
            toast.success("Email was sent");
        } catch (error) {
            toast.error("Invalid Email");
        }
    }
    return (
        <>
            <section className="bg-gray-50 min-h-screen flex items-center justify-center">
                <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                    <Bounce right>
                        <div className="">
                            <section className='absolute -right-24 -top-20 m-0.5 justify-end items-end'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-octagon m-2 cursor-pointer text-gray-600 hover:text-black" viewBox="0 0 16 16" onClick={() => { navigate('/sign-in') }}>
                                    <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" />
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </section>
                            <h2 className="font-bold text-2xl text-[#002D74]">Forgot Password</h2>
                            <p className="text-xs mt-4 text-[#002D74]">Enter email and easily forgot password</p>
                            <form action className="flex flex-col gap-4" onSubmit={onSubmit}>
                                <input className="p-2 mt-8 rounded-xl outline-none border" id='email' type="email" name="email" placeholder="Email" value={email} onChange={onChange} />
                                <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Send Email</button>
                            </form>
                            <div className="mt-1 text-xs border-b border-[#002D74] py-4 text-[#002D74]">

                            </div>
                            <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                                <p>Back to login ?</p>
                                <Link to='/sign-in'><button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Login</button></Link>
                            </div>
                        </div>
                    </Bounce>
                </div>
            </section>
        </>
    )
}

export default ForgotPassword

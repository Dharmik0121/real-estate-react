import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import OAuth from "../Components/OAuth";
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { db } from "../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast'
import { Bounce } from "react-reveal";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });
    const { name, email, phone, password } = formData;
    const navigate = useNavigate();
    function onChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    }
    async function onSubmit(e) {
        e.preventDefault();

        try {
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                phone,
                password
            );

            updateProfile(auth.currentUser, {
                displayName: name,
            });
            const user = userCredential.user;
            const formDataCopy = { ...formData };
            delete formDataCopy.password;
            formDataCopy.timestamp = serverTimestamp();

            await setDoc(doc(db, "users", user.uid), formDataCopy);
            toast.success("SignUp was successful");
            navigate("/");
        } catch (error) {
            toast.error("Something went wrong");
        }
    }

    return (
        <>
            <section className="bg-gray-50 min-h-screen flex items-center justify-center">
                {/* login container */}
                <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                    {/* form */}
                    <Bounce left>
                        <div className="md:block hidden w-1/2">
                            <img className="rounded-2xl" src="https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' />
                        </div>
                    </Bounce>
                    {/* image */}
                    <Bounce right>
                        <div className="md:w-1/2 px-8 md:px-16">
                            <section className='absolute -right-24 -top-20 m-0.5 justify-end items-end'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-octagon m-2 cursor-pointer text-gray-600 hover:text-black" viewBox="0 0 16 16" onClick={() => { navigate('/') }}>
                                    <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" />
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </section>
                            <h2 className="font-bold text-2xl text-[#002D74]">Registration</h2>
                            <p className="text-xs mt-4 text-[#002D74]">If you are already a member, easily log in</p>
                            <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                                <input className="p-2 mt-8 rounded-xl outline-none border" value={name} id='name' type="text" name="name" placeholder="User Name" onChange={onChange} />
                                <input className="p-2 rounded-xl outline-none border" value={email} id='email' type="email" name="email" placeholder="Email" onChange={onChange} />
                                <div className="relative">
                                    <input className="p-2 rounded-xl outline-none border w-full" value={password} id='password' type={showPassword ? "text" : "password"} name="password" placeholder="Password" onChange={onChange} />
                                    {
                                        showPassword ? (
                                            <AiFillEyeInvisible className="absolute text-gray-400 right-3 top-3 text-xl cursor-pointer"
                                                onClick={() => setShowPassword((prevState) => !prevState)}
                                            />
                                        ) : (
                                            <AiFillEye
                                                className="absolute right-3 text-gray-400 top-3 text-xl cursor-pointer"
                                                onClick={() => setShowPassword((prevState) => !prevState)}
                                            />
                                        )
                                    }
                                </div>
                                <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Register</button>
                            </form>
                            <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                                <hr className="border-gray-400" />
                                <p className="text-center text-sm">OR</p>
                                <hr className="border-gray-400" />
                            </div>
                            <OAuth />
                            <div className="mt-1 text-xs border-b border-[#002D74] py-4 text-[#002D74]">

                            </div>
                            <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                                <p>Do have an account?</p>
                                <Link to='/sign-in'><button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Login</button></Link>
                            </div>
                        </div>
                    </Bounce>
                </div>
            </section>
        </>
    )
}

export default SignUp

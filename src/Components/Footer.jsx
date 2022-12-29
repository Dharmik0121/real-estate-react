import React from "react";
import logo from "../assets/img/hero-bg.png";
import { Link } from "react-router-dom";
import { footer } from "../data";
import { Slide } from 'react-reveal'

const Footer = () => {
    return (
        <>
            {/* <footer className='section bg-primary text-white'>
                <div className='container mx-auto'>
                    <div className='flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-gray-700 pb-7 lg:pb-14 mb-14'>
                        <Link className='mb-6 lg:mb-0' to='/'>
                            <img src={logo} className='w-1/2' alt='' />
                        </Link>
                        <div className='flex gap-x-4'>
                            {footer.social.map((item, index) => {
                                return (
                                    <div
                                        className='w-12 h-12 text-2xl bg-gray-700 hover:bg-accent rounded-full flex justify-center items-center transition-all'
                                        key={index}
                                    >
                                        <Link>{item.icon}</Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <p className='text-center'>
                        &copy; RealEstate 2022 - All Rights Reserved.
                    </p>
                </div>
            </footer> */}
            <footer className="relative pt-8 pb-6 bg-primary text-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap text-left lg:text-left">
                        <div className="w-full lg:w-6/12 px-4">
                            <h4 className="text-3xl font-semibold text-blueGray-700">
                                Let's keep in touch!
                            </h4>
                            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                                Find us on any of these platforms, we respond 1-2 business days.
                            </h5>
                            <div className="mt-2 lg:mb-0 mb-6">
                                <Slide left>
                                    <button className="btn " type="button">
                                        <i className="fab fa-twitter " />
                                    </button>
                                    <button className="btn " type="button">
                                        <i className="fab fa-facebook-square" />
                                    </button>
                                    <button className="btn " type="button">
                                        <i className="fab fa-instagram" />
                                    </button>
                                    <button className="btn " type="button">
                                        <i className="fab fa-github" />
                                    </button>
                                </Slide>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full lg:w-4/12 px-4 ml-auto">
                                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                                        Useful Links
                                    </span>
                                    <ul className="list-unstyled">
                                        <div>
                                            <li>
                                                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">
                                                    About Us
                                                </a>
                                            </li>
                                            <li>
                                                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">
                                                    Blog
                                                </a>
                                            </li>
                                            <li>
                                                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">
                                                    Github
                                                </a>
                                            </li>
                                            <li>
                                                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">
                                                    Free Products
                                                </a>
                                            </li>
                                        </div>

                                    </ul>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                                        Other Resources
                                    </span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                                            >
                                                MIT License
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://creative-tim.com/terms?ref=njs-profile"
                                            >
                                                Terms &amp; Conditions
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://creative-tim.com/privacy?ref=njs-profile"
                                            >
                                                Privacy Policy
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://creative-tim.com/contact-us?ref=njs-profile"
                                            >
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-blueGray-300" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-blueGray-500 font-semibold py-1">
                                Copyright © <span id="get-current-year">2021</span>
                                <a href="#a">
                                    {" "}
                                    RealEstate by
                                </a>
                                <a href="#a">
                                    Way to Glory Tim
                                </a>
                                .
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;

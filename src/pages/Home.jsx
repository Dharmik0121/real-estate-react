import React from 'react'
import { motion } from 'framer-motion'
import logo from '../Assets/logo.png'
// import heroData from '../Data'

const Home = () => {

    // const { title, subtitle, btnText, image } = heroData;
    return (
        <>
            {/* <motion.div style={{ width: '200px', height: '200px', background: 'red' }}
                animate={{ scale: [1, 2, 2, 1, 1], rotate: [0, 0, 180, 180, 0], borderRadius: ["0%", "0%", "50%", "50%", "0%"] }}
                transition={{ duration: 2, ease: "easeInOut", times: [0, 0.2, 0.5, 0.8, 1], repeat: Infinity, repeatDelay: 1 }}>
            </motion.div> */}

            <section className='lg:h-[900px] py-12'>

                <div className='container mx-auto h-full relative'>
                    <div className='flex flex-col xl:flex-row items-center h-full md:py-24'>
                        {/* text */}
                        <div className='text-center xl:text-left xl:absolute'>
                            {/* title */}
                            <h1
                                className='h1 xl:max-w-[700px] mb-6 xl:mb-12'
                                data-aos='fade-down'
                                data-aos-delay='400'
                            >
                                <h1>hello</h1>
                            </h1>
                            {/* subtitle */}
                            <p
                                className='lead xl:max-w-[380px] mb-6 lg:mb-12'
                                data-aos='fade-down'
                                data-aos-delay='500'
                            >
                                <h2>hiii</h2>
                            </p>
                            <button
                                className='btn btn-primary mb-8 xl:mb-0'
                                data-aos='fade-down'
                                data-aos-delay='600'
                            >
                                button
                            </button>
                        </div>
                        {/* image */}
                        <div
                            className='xl:absolute xl:-right-12 xl:bottom-16'
                            data-aos='fade-up'
                            data-aos-delay='700'
                        >
                            <img src={
                                logo
                            } alt='' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home

import React from 'react'
import heroBg from '../Assets/hero_illustration.png'
import Slide from 'react-reveal/Slide';

const Home = () => {
    return (
        <>
            {/* <motion.div style={{ width: '200px', height: '200px', background: 'red' }}
                animate={{ scale: [3, 2, 2, 1, 1], rotate: [20, 20, 180, 180, 0], borderRadius: ["0%", "0%", "50%", "50%", "0%"] }}
                transition={{ duration: 2, ease: "easeInOut", times: [0, 0.2, 0.5, 0.8, 1], repeatDelay: 1 }}>
            </motion.div> */}
            {/* <motion.div animate={{
                            x: -10,
                            y: -13,
                            scale: 1.2,
                            rotate: 0,
                        }}
                            transition={{ ease: "easeOut", duration: 2 }} className="lg:max-w-lg lg:w-full md:w-1/2 w-4/5">
                            <img className="object-cover object-center rounded" alt="hero" src={heroBg} />
                        </motion.div> */}

            <section className="text-gray-600  body-font bg-blue-100" >
                <div className="container mx-auto flex px-5 pt-24 pb-20 md:flex-row flex-col items-center" style={{ width: '90%' }}>
                    <Slide left>
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
                                <br className="hidden lg:inline-block" />ready made gluten
                            </h1>
                            <p className="mb-8 leading-relaxed">Copper mug try-hard -pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                            <div className="flex justify-center">
                                <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Button</button>
                                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                            </div>
                        </div>
                    </Slide>
                    <Slide right>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-4/5">
                            <img className="object-cover object-center rounded" alt="hero" src={heroBg} />
                        </div>
                    </Slide>
                </div>
            </section>






        </>
    )
}

export default Home

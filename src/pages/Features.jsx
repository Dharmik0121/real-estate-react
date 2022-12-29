import React from 'react'
import { features } from '../data'
import { Slide } from 'react-reveal';

const Features = () => {
    const { title, subtitle, image, items } = features;
    return (
        <>
            <section className='section p-10'>
                <div className='container mx-auto'>
                    <div className='flex flex-col lg:flex-row lg:gap-x-[100px]'>
                        <div className='flex-1 order-1 lg:-order-1'>
                            <Slide left><img src={image.type} alt='' /></Slide>
                        </div>
                        <div className=' flex flex-col justify-center'>
                            <Slide right>
                                <h2 className='title'>{title}</h2>
                                <p className='subtitle'>{subtitle}</p>
                                <div>
                                    {items.map((item, index) => {
                                        const { icon, title, subtitle } = item;
                                        return (
                                            <div className='flex mb-6 lg:last:mb-0' key={index}>
                                                <div className='text-2xl lg:text-3xl mr-4'>{icon}</div>
                                                <div>
                                                    <h4 className='text-base lg:text-xl font-semibold mb-3'>
                                                        {title}
                                                    </h4>
                                                    <p>{subtitle}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </Slide>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features

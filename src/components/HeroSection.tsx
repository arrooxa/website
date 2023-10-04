"use client";
import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
    return (
        <section className='grid grid-cols-1 sm:grid-cols-12'>
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I'm</span>
                    <br />
                    <TypeAnimation
                        sequence={[
                            'Vitor',
                            1000,
                            'Web Developer',
                            1000,
                            'Mobile Developer',
                            1000,
                            'Software Architect',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />

                </h1>
                <p className='text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl'>I'm a passionate Full Stack developer driven by solving problems and tackling complex challenges. My solutions have played a pivotal role in facilitating transactions worth millions of Brazilian reais in the financial market.</p>
                <div>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Hire Me</button>
                    <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                    </button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
                    <Image src="/images/hero-image.png" className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' alt='Hero Image' width={300} height={300} />
                </div>
            </div>
        </section>
    )
}

export default HeroSection
import React from 'react'

import { BsArrowRight } from 'react-icons/bs'

export const Hero = ({ onClick }) => {
    // const style1 = {
    //     'backgroundImage': 'url("https://i.ibb.co/PZ0QYh5/Hero-image.jpg")',
    // }
    return (
        <>
            <div className='h-[70vh] md:h-[100vh] w-full '>
                <div className="w-full h-[70vh] md:h-[100vh] absolute -z-10">
                    <img src="https://i.ibb.co/PZ0QYh5/Hero-image.jpg" alt="IntroImg" className="w-full h-full bg-cover bg-center object-cover" />
                </div>

                <div className='w-full h-full relative flex flex-col items-center justify-center pt-[4rem]'>
                    <div className='w-fit max-w-[90%]'>
                        <h1 className=" text-white text-xl sm:text-3xl md:text-5xl  lg:text-7xl leading-[3rem] md:leading-[5.9rem] tracking-[0.16rem] md:font-thin">
                            Revolutionizing
                            <br />
                            Healthcare
                            <br />
                            AI-Powered Diagnostics
                        </h1>
                        <p className='text-white text-sm md:text-lg md:leading-10 tracking-[0.1rem] '>
                            Hello, I am your AI-Powered Diagnostic System, your virtual partner in health.
                            <br />
                            With advanced artificial intelligence and data analysis,
                            <br />I am here to assist you in understanding your health and well-being better than ever before.
                        </p>
                        <div className="buttons mt-10 md:mt-24 w-full flex flex-row justify-center" onClick={onClick}>
                            <div className=' border-white p-2 cursor-pointer hover:bg-[#ffffff66] border-solid text-white border-2 flex flex-row gap-2 hover:gap-4 hover:-translate-y-1 hover:scale-110 duration-300' onClick={onClick}>
                                Explore Technologies
                                <div className=' flex items-center' onClick={onClick}>
                                    <BsArrowRight />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}

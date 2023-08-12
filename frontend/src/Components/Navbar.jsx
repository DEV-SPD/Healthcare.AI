import React from 'react'

import { Link, useLocation } from 'react-router-dom'

import { FaBars, FaTimes } from "react-icons/fa"

import { useState } from 'react'

export const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    const location = useLocation();
    const path = location.pathname;

    window.addEventListener("scroll", changeColor);

    return (
        <>
            {((path === "/")
                ?
                (<div className={" flex justify-between items-center p-[1rem] fixed w-full h-[90px] z-20" + (color ? " bg-[rgba(0,0,0,0.85)] transition duration-[0.5s] " : "")}>
                    <h1 className={'text-[2rem] md:text-[1.5rem] text-white flex items-center  font-semibold h-full'}>
                        <img src="https://i.ibb.co/ch5x527/logo-health-care.png" alt="logo-health-care" border="0" className='h-[90%] ' />
                        <Link to="/">
                            HEALTHCARE.AI
                        </Link>
                    </h1>
                    <ul className={(click ? "flex md:flex-row flex-col justify-center items-center w-full h-[100vh] bg-[rgba(0,0,0,0.9)] left-0 absolute top-0 -z-[3] transition-all duration-[0.3s] md:w-auto md:h-auto md:bg-transparent md:relative md:left-0 md:top-0" : "flex md:flex-row flex-col justify-center items-center w-full h-[100vh] bg-[rgba(0,0,0,0.9)] left-[-100%] absolute top-0 -z-[3] transition-all duration-[0.3s] md:w-auto md:h-auto md:bg-transparent md:relative md:left-0 md:top-0")}>
                        <li className='md:py-0 md:px-[1rem] px-0 py-[1rem]'>
                            <Link to="/works" className=' text-[2rem] md:text-[1.2rem] text-white  font-bold'> HOW IT WORKS </Link>
                        </li>
                        <li className='md:py-0 md:px-[1rem] px-0 py-[1rem]'>
                            <Link to="/tech" className=' text-[2rem] md:text-[1.2rem] text-white font-bold'> TECHNOLOGY </Link>
                        </li>
                        <li className='md:py-0 md:px-[1rem] px-0 py-[1rem] '>
                            <Link to="/offer" className=' text-[2rem] md:text-[1.2rem] text-white font-bold'> OUR OFFERINGS </Link>
                        </li>
                        <li className='md:py-0 md:px-[1rem] px-0 py-[1rem] '>
                            <Link to="/about" className=' text-[2rem] md:text-[1.2rem] text-white font-bold'> ABOUT US </Link>
                        </li>

                    </ul>
                    <div className=' md:hidden' onClick={handleClick}>
                        {click ? (<FaTimes size={20} style={{ color: "#fff" }} />)
                            : (
                                <FaBars size={20} style={{ color: "#fff" }} />
                            )}
                    </div>
                </div>)
                :
                (<div className={" flex justify-between items-center p-[1rem] fixed w-full h-[90px] z-20" + (color ? " bg-[rgba(0,0,0,0.85)] transition duration-[0.5s] text-white" : " text-[#3A8F99]")}>
                    <h1 className={'text-[2rem] md:text-[1.5rem] flex items-center  font-bold h-full'}>
                        <img src="https://i.ibb.co/ch5x527/logo-health-care.png" alt="logo-health-care" border="0" className='h-[90%] ' />
                        <Link to="/">
                            HEALTHCARE.AI
                        </Link>
                    </h1>
                    <ul className={(click ? "flex md:flex-row flex-col justify-center items-center w-full h-[100vh] bg-[rgba(0,0,0,0.9)] left-0 absolute top-0 -z-[3] transition-all duration-[0.3s] md:w-auto md:h-auto md:bg-transparent md:relative md:left-0 md:top-0" : "flex md:flex-row flex-col justify-center items-center w-full h-[100vh] bg-[rgba(0,0,0,0.14)] left-[-100%] absolute top-0 -z-[3] transition-all duration-[0.3s] md:w-auto md:h-auto md:bg-transparent md:relative md:left-0 md:top-0")}>
                        <li className='md:py-0 md:px-[1rem] px-0 py-[1rem]'>
                            <Link to="/works" className={" text-[2rem] md:text-[1.2rem]  font-bold"}> HOW IT WORKS </Link>
                        </li>
                        <li className='md:py-0 md:px-[1rem] px-0 py-[1rem]'>
                            <Link to="/tech" className=' text-[2rem] md:text-[1.2rem]  font-bold'> TECHNOLOGY </Link>
                        </li>
                        <li className='md:py-0 md:px-[1rem] px-0 py-[1rem] '>
                            <Link to="/offer" className=' text-[2rem] md:text-[1.2rem]   font-bold'> OUR OFFERINGS </Link>
                        </li>
                        <li className='md:py-0 md:px-[1rem] px-0 py-[1rem] '>
                            <Link to="/about" className=' text-[2rem] md:text-[1.2rem]  font-bold'> ABOUT US </Link>
                        </li>

                    </ul>
                    <div className=' md:hidden' onClick={handleClick}>
                        {click ? (<FaTimes size={20} style={{ color: "#fff" }} />)
                            : (
                                <FaBars size={20} style={{ color: "#000" }} />
                            )}
                    </div>
                </div>))
            }
        </>

    )
}

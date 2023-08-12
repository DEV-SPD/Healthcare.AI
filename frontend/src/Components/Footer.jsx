import React from 'react'

import { Link } from 'react-router-dom'

export const Footer = () => {
    // <img src="https://i.ibb.co/c1Tm3Jm/footer.jpg" alt="footer" border="0"></img>
    // const style1 = {
    //     backgroundImage: 'url("https://i.ibb.co/c1Tm3Jm/footer.jpg")',
    // }
    return (
        <>
            <div className="footer w-full min-h-[30vh] h-fit " >
                <div className="back-image absolute h-[50vh] md:h-[30vh] w-full -z-20">
                    <img className='w-full h-full bg-cover bg-center object-cover' src="https://i.ibb.co/c1Tm3Jm/footer.jpg" alt="footer" border="0" />
                </div>
                <div className="shaddow absolute h-[50vh] md:h-[30vh] w-full bg-black opacity-[0.5] slate-700 -z-10" >
                </div>
                <div className="relative flex flex-col h-full max-w-[90%] items-center justify-center ">
                    <div className="diseases flex flex-row flex-wrap gap-[6vw] text-white underline-offset-4 justify-center pt-[2vw]">
                        <Link to="/liver">Liver Disease <hr /></Link>
                        <Link to="/diabetes">Diabetes <hr /></Link>
                        <Link to="/kidney">Kidney Disease <hr /></Link>
                        <Link to="/heart">Heart Disease <hr /></Link>
                    </div>

                    <div className='flex flex-wrap pt-[2vw] justify-center'>

                        <div className='flex flex-col w-[70%]'>
                            <p className=' text-[#3A8F99] font-mono text-center'>
                                AI-powered diagnostics revolutionize healthcare by enhancing accuracy, aiding professionals, and increasing global access.
                                <br />
                                <br />
                                Addressing ethics, privacy, and regulations ensures responsible implementation.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

import React from 'react'

import { Link } from 'react-router-dom'

export const Card = ({ refe }) => {
    return (
        //<img src="https://i.ibb.co/QpXmdDS/liver.jpg" alt="liver" border="0"></img>
        // <img src="https://i.ibb.co/sKxmstR/heart.jpg" alt="heart" border="0"></img>
        // <img src="https://i.ibb.co/B6hDXFv/diabetes.jpg" alt="diabetes" border="0"></img>
        // <img src="https://i.ibb.co/L0N7FVn/kidney.jpg" alt="kidney" border="0"></img>
        // <img src="https://i.ibb.co/FJbqW8S/thorax-disease.png" alt="thorax-disease" border="0"></img>
        <>
            <section ref={refe} className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <h1 className='text-3xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 w-full text-center pb-[5vw]'>
                        OUR Technology
                    </h1>
                    <div className="flex flex-wrap -m-4 justify-center lg:gap-y-[5vw] lg:gap-x-[10vw]">
                        <div className="p-4 md:w-1/2 lg:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://i.ibb.co/FJbqW8S/thorax-disease.png" alt="diabetes" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Category</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Thorax Disease Diagnosis</h1>
                                    <p className="leading-relaxed mb-3">The thorax disease diagnosis tool assists medical professionals in accurately identifying and evaluating various thoracic region disorders using patient data and medical imaging.</p>
                                    <div className="flex items-center flex-wrap ">
                                        <Link to="https://dev-spd-thorax-disease-app-7bj8iw.streamlit.app/" target="_blank" className="text-[#3A8799] inline-flex items-center md:mb-2 lg:mb-0 hover:bg-opacity-[0.1] hover:text-black rounded-lg group hover:scale-110 duration-300 ">Diagnose Now
                                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-3 duration-300 " viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" >
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2 lg:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://i.ibb.co/QpXmdDS/liver.jpg" alt="blog" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Category</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Liver Disease Diagnosis </h1>
                                    <p className="leading-relaxed mb-3">Empower your health decisions with our Heart Disease Diagnosis Tool – a cutting-edge solution for assessing your risk of cardiovascular issues.</p>
                                    <div className="flex items-center flex-wrap ">
                                        <Link to="/liver" className="text-[#3A8799] inline-flex items-center md:mb-2 lg:mb-0 hover:bg-opacity-[0.1] hover:text-black rounded-lg group hover:scale-110 duration-300 ">Diagnose Now
                                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-3 duration-300 " viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" >
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2 lg:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://i.ibb.co/B6hDXFv/diabetes.jpg" alt="diabetes" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Category</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Diabetes Diagnosis</h1>
                                    <p className="leading-relaxed mb-3">Empower your health decisions with our Diabetes Diagnosis Tool: Accurate risk assessment for early detection and prevention.</p>
                                    <div className="flex items-center flex-wrap ">
                                        <Link to="https://dev-spd-diabetes-diagnosis-app-2lu3nn.streamlit.app/" target="_blank" className="text-[#3A8799] inline-flex items-center md:mb-2 lg:mb-0 hover:bg-opacity-[0.1] hover:text-black rounded-lg group hover:scale-110 duration-300 ">Diagnose Now
                                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-3 duration-300 " viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" >
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2 lg:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://i.ibb.co/L0N7FVn/kidney.jpg" alt="blog" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Category</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Kidney Disease Diagnosis</h1>
                                    <p className="leading-relaxed mb-3">An advanced tool for predicting kidney disease risk by analyzing relevant health factors and providing early detection insights</p>
                                    <div className="flex items-center flex-wrap ">
                                        <Link to="/kidney" className="text-[#3A8799] inline-flex items-center md:mb-2 lg:mb-0 hover:bg-opacity-[0.1] hover:text-black rounded-lg group hover:scale-110 duration-300 ">Diagnose Now
                                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-3 duration-300 " viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" >
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2 lg:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://i.ibb.co/sKxmstR/heart.jpg" alt="diabetes" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Category</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Heart Disease Diagnosis</h1>
                                    <p className="leading-relaxed mb-3">Empower your health decisions with our Heart Disease Diagnosis: Assess your risk accurately and make informed choices for a heart-healthy life.</p>
                                    <div className="flex items-center flex-wrap ">
                                        <Link to="https://dev-spd-cardiovasucular-disease-app-eb6laq.streamlit.app/" target="_blank" className="text-[#3A8799] inline-flex items-center md:mb-2 lg:mb-0 hover:bg-opacity-[0.1] hover:text-black rounded-lg group hover:scale-110 duration-300 ">Diagnose Now
                                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-3 duration-300 " viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" >
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section >
        </>
    )
}

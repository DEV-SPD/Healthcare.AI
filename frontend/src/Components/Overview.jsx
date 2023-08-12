import React from 'react'

export const Overview = () => {

    return (
        <>
            <div className='flex items-center justify-center'>
                <div className="flex md:flex-row flex-col h-fit w-fit max-w-[90%] items-center justify-center">
                    <div className="image md:self-start md:max-w-[50vw] max-w-full flex justify-center">
                        <img src="https://i.ibb.co/74TH9Tx/virus.png" alt="virus" border="0" />
                    </div>
                    <div className="overview md:max-w-[50vw] h-full flex flex-col justify-center gap-3 lg:gap-6">
                        <h1 className='md:text-end text-center lg:text-6xl md:text-5xl text-3xl'>
                            Overview
                        </h1>
                        <p className='md:text-end text-center capitalize leading-5 md:leading-7'>
                            AI-powered diagnostics is a field of healthcare that utilizes artificial intelligence (AI) and machine learning algorithms to assist in diagnosing medical conditions and diseases. The goal of AI-powered diagnostics is to enhance the accuracy, speed, and efficiency of the diagnostic process, ultimately leading to improved patient outcomes and more effective healthcare delivery.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

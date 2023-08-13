import React from 'react'
import { Navbar } from '../Components/Navbar';
import { Footer } from '../Components/Footer'
import { LiverRes } from '../Components/LiverRes';

export const Result = ({ result }) => {
    console.log(result);
    return (
        <>
            <Navbar />
            {
                result?.disease == 'liver' ?
                    <LiverRes result={result} />
                    : (<></>)
            }
            <Footer />
        </>
    )
}

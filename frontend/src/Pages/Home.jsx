import React, { useRef } from 'react'
import { Navbar } from '../Components/Navbar'
import { Hero } from '../Components/Hero'
import { Overview } from '../Components/Overview'
import { Card } from '../Components/Card'
import { Footer } from '../Components/Footer'

export const Home = () => {
    const targetRef = useRef(null);

    const scrollToSection = () => {
        console.log("Hello");
        targetRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <>
            <Navbar />
            <Hero onClick={scrollToSection} />
            <Overview />
            <Card refe={targetRef} />
            <Footer />
        </>
    )
}

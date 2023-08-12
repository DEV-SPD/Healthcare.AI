import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Footer } from '../Components/Footer'
import { Input1 } from '../Components/Input1'
import { Diabetes } from '../Components/Diabetes'
import { Heart } from '../Components/Heart'
import { Kidney } from '../Components/Kidney'

export const Input = ({ path, setResult }) => {
    return (
        <>
            <Navbar />
            {
                (path === "liver")
                    ? (<Input1 setResult={setResult} />)
                    : ((path === "diabetes")
                        ?
                        <Diabetes setResult={setResult} />
                        : ((path === "heart")
                            ?
                            <Heart setResult={setResult} />
                            : ((path === "kidney")
                                ?
                                <Kidney setResult={setResult} />
                                : <></>
                            )
                        )
                    )
            }

            <Footer />
        </>
    )
}

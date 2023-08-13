import React from 'react'
import { Medication } from './Medication'
import { Link } from 'react-router-dom'

export const KidneyRes = ({ result }) => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                        {
                            (result.result === 1) ? (
                                <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-red-600">
                                    The Report is Positive.
                                </h1>
                            ) : (
                                <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-green-500" >
                                    I'm happy to share that your test results came back negative. This means everything looks normal and there's no cause for concern.

                                </h1>
                            )
                        }

                        <Link to="/kidney" className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">Test Again</Link>
                    </div>

                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Medication</h1>
                    <div className="flex flex-wrap -m-4">
                        {result?.treat?.map((e, i) => (
                            <Medication content={e} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

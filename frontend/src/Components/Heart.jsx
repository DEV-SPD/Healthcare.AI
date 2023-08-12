
import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

export const Heart = ({ setResult }) => {
    const [formData, setFormData] = useState({}); // State to hold the form data
    let navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData);
            const response = await fetch('/api/heart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log(data); // Output the response from Flask backend
            function jsonConcat(o1, o2) {
                for (var key in o2) {
                    o1[key] = o2[key];
                }
                return o1;
            }

            var output = {};
            output = jsonConcat(output, data);
            output = jsonConcat(output, formData);
            output = jsonConcat(output, { "disease": "heart" });
            setResult(output);

        } catch (error) {
            console.error('Error:', error);
        }
        navigate("/result")
    };
    return (
        <>
            <div className="container flex w-full flex-col items-center justify-center pt-[120px]">
                <div className='flex flex-col w-[70vw]'>
                    <div className="heading  text-3xl md:text-6xl capitalize w-fit">
                        Input for Heart Disease
                        <br />
                        <hr className=' border-solid border-[0.2vw] border-[#3A8F99] w-[70%] mt-[0.5vw]' />
                    </div>
                    <div className="container flex flex-row flex-wrap mt-[5vw] w-full pb-[5vh]">
                        <form className="form w-full lg:w-[70%] flex flex-col lg:gap-5 gap-3" onSubmit={handleSubmit}>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] capitalize'>Age Of The Patient</p>
                                <input type="number" name="age" min={0} max={150} autoComplete="given-age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" onChange={handleChange} />
                            </div>


                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] capitalize'>Gender of The Patient</p>
                                <select name="sex" autoComplete="country-name" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" onChange={handleChange} >
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] capitalize'>Chest Pain Type</p>
                                <select name="cp" autoComplete="country-name" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" onChange={handleChange} >
                                    <option>Typical Angina</option>
                                    <option>Atypical Angina</option>
                                    <option>non-Anginal</option>
                                    <option>Asymptomatic</option>
                                </select>
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] capitalize'>resting blood pressure
                                </p>
                                <input type="text" name="trestbps" autoComplete="given-age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" onChange={handleChange} />
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] capitalize'>serum cholestoral in mg/dl
                                </p>
                                <input type="text" name="chol" autoComplete="given-age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" onChange={handleChange} />
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '> Fasting Blood Sugar &gt; 120 mg/dl
                                </p>
                                <input type="text" name="fbs" autoComplete="given-age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" onChange={handleChange} />
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] capitalize'>resting electrocardiographic results</p>
                                <select name="gender" autoComplete="country-name" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" onChange={handleChange} >
                                    <option>Normal</option>
                                    <option>Stt Abnormality</option>
                                    <option>Lv Hypertrophy</option>
                                </select>
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] capitalize'>maximum heart rate achieved</p>
                                <input type="text" name="age" autoComplete="given-age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" onChange={handleChange} />
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] capitalize'>exercise induced angina
                                </p>
                                <input type="text" name="age" autoComplete="given-age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" onChange={handleChange} />
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] capitalize'>ST depression induced by exercise relative to rest</p>
                                <input type="text" name="age" autoComplete="given-age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" onChange={handleChange} />
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] capitalize'>the slope of the peak exercise ST segment </p>
                                <input type="text" name="age" autoComplete="given-age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" onChange={handleChange} />
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] capitalize'>number of major vessels (0-3) colored by flourosopy</p>
                                <input type="text" name="age" autoComplete="given-age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" onChange={handleChange} />
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] capitalize'>Thal</p>
                                <select name="gender" autoComplete="country-name" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" onChange={handleChange} >
                                    <option>Normal</option>
                                    <option>Fixed Defect</option>
                                    <option>Reversible Defect</option>
                                </select>
                            </div>
                            <div className="submit w-full flex justify-center">
                                <button type="submit" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-[50%]">
                                    Predict Now
                                </button>
                            </div>

                        </form>
                    </div>



                </div>

            </div>
        </>
    )
}

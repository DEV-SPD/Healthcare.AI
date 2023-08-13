

import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

export const Kidney = ({ setResult }) => {
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
            const response = await fetch('/api/kidney', {
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
            output = jsonConcat(output, { "disease": "kidney" });
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
                    <div className="heading  text-3xl md:text-6xl  w-fit">
                        Input for Kidney Disease
                        <br />
                        <hr className=' border-solid border-[0.2vw] border-[#3A8F99] w-[70%] mt-[0.5vw]' />
                    </div>
                    <div className="container flex flex-row flex-wrap mt-[5vw] w-full pb-[5vh]">
                        <form className="form w-full lg:w-[70%] flex flex-col lg:gap-5 gap-3" onSubmit={handleSubmit} >
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Age Of The Patient</p>
                                <input type="number" name="age" min={0} max={150} autoComplete="given-age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" onChange={handleChange} />
                            </div>

                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Blood Pressure in mm/Hg
                                </p>
                                <input type="text" name="bp" autoComplete="given-age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" onChange={handleChange} />
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Specific Gravity</p>
                                <select name="sg" autoComplete="country-name" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" onChange={handleChange} >
                                    <option value="none">not selected</option>
                                    <option value="1.005">1.005</option>
                                    <option value="1.010">1.010</option>
                                    <option value="1.015">1.015</option>
                                    <option value="1.020">1.020</option>
                                    <option value="1.025">1.025</option>
                                </select>
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Albumin</p>
                                <select name="al" autoComplete="country-name" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" onChange={handleChange} >
                                    <option value="none">SELECT ALBUMIN LEVEL</option>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Sugar</p>
                                <select name="su" autoComplete="country-name" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" onChange={handleChange} >
                                    <option value="none">SELECT SUGAR LEVEL</option>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Red Blood Cells</p>
                                <select name="rbc" autoComplete="country-name" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" onChange={handleChange} >
                                    <option value="none">not selected</option>
                                    <option value="normal">Normal</option>
                                    <option value="abnormal">Abnormal</option>
                                </select>
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Pus Cell</p>
                                <select name="pc" autoComplete="country-name" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" onChange={handleChange} >
                                    <option value="none">not selected</option>
                                    <option value="normal">Normal</option>
                                    <option value="abnormal">Abnormal</option>
                                </select>
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Pus Cell Clumps</p>
                                <select name="pcc" autoComplete="country-name" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" onChange={handleChange} >
                                    <option value="none">not selected</option>
                                    <option value="present">Present</option>
                                    <option value="not present">Not Present</option>
                                </select>
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Bacteria</p>
                                <select name="ba" autoComplete="country-name" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" onChange={handleChange} >
                                    <option value="none">not selected</option>
                                    <option value="present">Present</option>
                                    <option value="not present">Not Present</option>
                                </select>
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%]'>Blood Glucose Random in mgs/dl
                                </p>
                                <input type="text" name="bgr" autoComplete="given-age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" onChange={handleChange} />
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%]'>Blood Urea in mgs/dl
                                </p>
                                <input type="text" name="bu" autoComplete="given-age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" onChange={handleChange} />
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Serum Creatinine in mgs/dl
                                </p>
                                <input type="text" name="sc" autoComplete="given-age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" onChange={handleChange} />
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Sodium in mEq/L
                                </p>
                                <input type="text" name="sod" autoComplete="given-age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" onChange={handleChange} />
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Potassium in mEq/L
                                </p>
                                <input type="text" name="pot" autoComplete="given-age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" onChange={handleChange} />
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Hemoglobin in gms
                                </p>
                                <input type="text" name="hemo" autoComplete="given-age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" onChange={handleChange} />
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Packed Cell Volume
                                </p>
                                <input type="text" name="pcv" autoComplete="given-age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" onChange={handleChange} />
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>White Blood Cell Count in cells/cumm
                                </p>
                                <input type="text" name="wc" autoComplete="given-age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" onChange={handleChange} />
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Red Blood Cell Count in millions/cmm
                                </p>
                                <input type="text" name="rc" autoComplete="given-age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" onChange={handleChange} />
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Hypertension</p>
                                <select name="htn" autoComplete="country-name" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" onChange={handleChange} >
                                    <option value="none">not selected</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Diabetes Mellitus</p>
                                <select name="dm" autoComplete="country-name" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" onChange={handleChange} >
                                    <option value="none">not selected</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Coronary Artery Disease</p>
                                <select name="cad" autoComplete="country-name" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" onChange={handleChange} >
                                    <option value="none">not selected</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Appetite</p>
                                <select name="appet" autoComplete="country-name" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" onChange={handleChange} >
                                    <option value="none">not selected</option>
                                    <option value="Good">Good</option>
                                    <option value="Poor">Poor</option>
                                </select>
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Pedal Edema</p>
                                <select name="pe" autoComplete="country-name" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" onChange={handleChange} >
                                    <option value="none">not selected</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Anemia</p>
                                <select name="ane" autoComplete="country-name" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" onChange={handleChange} >
                                    <option value="none">not selected</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div className="submit w-full flex justify-center">
                                <button type="submit" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-[50%]" >
                                    Diagnose Now
                                </button>
                            </div>

                        </form>
                    </div>



                </div>

            </div>
        </>
    )
}

import React from 'react'

export const Medication = ({ content }) => {
    return (
        <div className="p-4 w-full flex">
            <div className="h-full w-full bg-gray-100 p-2 rounded">

                <p className="leading-relaxed my-3">{content}</p>
            </div>
        </div>
    )
}

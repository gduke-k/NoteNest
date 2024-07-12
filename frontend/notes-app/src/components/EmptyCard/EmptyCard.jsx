/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const EmptyCard = ({ message }) => {
    return (
        <div className="flex flex-col items-center justify-center mt-20">
            <p className="w-1/2 text-sm font-medium text-slate-700 text-center leading-7 mt-2">
                {message}
            </p>
        </div>
    )
}

export default EmptyCard

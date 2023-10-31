import React from 'react'

function PrimaryButton() {
    return (
        <div className='flex w-full items-center mt-6'>
            <button className=' rounded-md font-bold px-2 py-4 bg-primary-color text-text-color' style={{ width: '448px' }}>
                Subscribe to monthly newsletter
            </button>
        </div>
    )
}

export default PrimaryButton

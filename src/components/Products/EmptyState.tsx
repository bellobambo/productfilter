import { XCircle } from 'lucide-react'
import React from 'react'

const EmptyState = () => {
    return (
        <div className='relative col-span-full h-80 bg-gray-50 w-full p-112 flex flex-col items-center justify-center'>
            <XCircle className='h-8 w-8 text-red-500' />
            <h3 className='font-semibold text-xl'>
                No Product Found
            </h3>
            <p className='text-zinc-500 text-sm'>
                We Found No Search results
            </p>
        </div>
    )
}

export default EmptyState
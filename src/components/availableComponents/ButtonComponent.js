'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const ButtonComponent = ({ data }) => {
    const buttondata = data.data
    const remove = data.hidden
    
    const router = useRouter()

    return remove ? false : (
        <button
            className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}
            onClick={() => router.push(buttondata.url)}
        >
            {buttondata.caption}
        </button>
    )
}

export default ButtonComponent
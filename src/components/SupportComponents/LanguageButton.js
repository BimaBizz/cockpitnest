import React from 'react'
import Link from 'next/link'

const LanguageButton = () => {
  return (
    <div className='dropdown dropdown-end my-auto text-primary'>

      <label tabIndex="0" className="btn btn-ghost m-1">
      <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path d="m476-80 182-480h84L924-80h-84l-43-122H603L560-80h-84ZM160-200l-56-56 202-202q-35-35-63.5-80T190-640h84q20 39 40 68t48 58q33-33 68.5-92.5T484-720H40v-80h280v-80h80v80h280v80H564q-21 72-63 148t-83 116l96 98-30 82-122-125-202 201Zm468-72h144l-72-204-72 204Z"/></svg> <svg className="fill-current ml-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
      </label>
      
      <ul
        tabIndex="0"
        className="dropdown-content menu bg-base-100 rounded-box shadow-lg w-52 p-2 mt-3"
      >
        <li>
            <Link href="/en" className="hover:bg-base-100 cursor-pointer px-4 py-2">
                English
            </Link>
        </li>
        <li>
            <Link href="/id" className="hover:bg-base-100 cursor-pointer px-4 py-2">
                Indonesia
            </Link>
        </li>
      </ul>
        
    </div>
  )
}

export default LanguageButton
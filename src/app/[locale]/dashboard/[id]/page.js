import React from 'react'
import { fetchUserById } from '@/lib/account'
import { decodeJwt } from 'jose'

export default async function Page({ params }) {
    const token = await fetchUserById((await params).id);
    const decodedToken = decodeJwt(token);
    console.log(decodedToken);


    return (
        <div>
            <h1>User Details</h1>
            {/* <p>ID: {decodedToken._id}</p>
            <p>Name: {decodedToken.user}</p>
            <p>Email: {decodedToken.email}</p>
            Add more user details as needed */}
        </div>
    )
}


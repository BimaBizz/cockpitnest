import React from 'react'
import Image from 'next/image'
import { fetchLocalze } from '@/lib/hook';
import Link from 'next/link';
import FormLogin from '@/components/SupportComponents/FormLogin';
import ButtonHistory from '@/components/SupportComponents/ButtonHistory';

const page = async ({params}) => {

    const locale = (await params).locale;

    const data = await fetchLocalze('login', locale);
    

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 w-full min-h-screen'>
        <div className='flex items-center justify-center p-4 relative'>
            <ButtonHistory />
            <div className='w-full max-w-md'>
                <h1 className='text-2xl mb-4 font-bold'>{data.greatting}</h1>
                <FormLogin button={data.button}/>
                <p className='mt-4'>{data.akun} <span className='font-medium text-primary'><Link href={`/${locale}/signup`}>{data.daftar}</Link></span></p>
            </div>
        </div>  
            <div className='hidden md:block'>
                <Image src="/loginBG.jpg" width={600} height={400} alt='Login Image' className='w-full h-full object-cover' />
            </div>
    </div>
  )
}

export default page
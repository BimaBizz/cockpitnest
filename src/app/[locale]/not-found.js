'use client'

// import { useRouter } from "next/navigation"
import { useParams } from "next/navigation"

export default function NotFound() {

  const params = useParams()
  // const router = useRouter()

  // Assuming params is an object
  const paramsString = params ? Object.values(params).join('/').replace(/,/g, '/') : ''
  const fullUrl = `${process.env.NEXT_PUBLIC_UR_DOMAIN}/${paramsString}`

  console.log(paramsString)
  return (
    <div className="mockup-browser border-base-300 border h-screen">
      <div className="mockup-browser-toolbar">
        <div className="input border-base-300 border">{fullUrl}</div>
      </div>
      <div className="border-base-300 flex flex-col justify-center items-center border-t h-full">
        <h1 className="text-7xl font-bold">404</h1>
        <p>Not found</p>
      </div>
    </div>
  )
}
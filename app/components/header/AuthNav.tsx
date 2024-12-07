"use client"


import Link from 'next/link'

const AuthNav = () => {
  return (
    <nav className="">
       
            <Link href={"/auth"} className="px-4 py-2 outline-none bg-blue-600 text-white hover:bg-blue-700 rounded">
                Get Started
            </Link>
            
            
       
    </nav>
  )
}

export default AuthNav
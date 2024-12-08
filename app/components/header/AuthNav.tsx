
import Link from 'next/link'
import UserCard from './UserCard'
import { createClient } from '@/config/supabase/supabaseServer'
import UserLinks from './UserLinks'




const AuthNav = async () => {
  const client = await createClient()
  const res = await client.auth.getUser()
  const user = res?.data.user
  return (
    <nav className="">
    <div>
    
            {user ? (
                <UserLinks/>
              
            ):<Link href={"/auth"} className="px-4 py-2 outline-none bg-blue-600 text-white hover:bg-blue-700 rounded">
            Get Started
        </Link>}
        </div>
            
            
       
    </nav>
  )
}

export default AuthNav
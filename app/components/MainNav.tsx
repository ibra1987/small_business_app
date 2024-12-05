import { navLinks } from "@/constants"
import Link from "next/link"




const MainNav = () => {
  return (
    <nav className="flex-grow  ">
        <ul className="w-full flex justify-center items-center gap-8  text-gray-600 ">
           {navLinks.map((link) => (
            <li key={link.name}>
                <Link href={link.path} className="text-gray-600 hover:text-gray-900 hover:underline">
                    {link.name}
                </Link>
            </li>
           ))}
        </ul>
    </nav>
  )
}

export default MainNav
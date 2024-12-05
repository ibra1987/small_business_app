import MainNav from "../MainNav"
import AuthNav from "./AuthNav"
import Logo from "./Logo"




const Header = () => {
  return (
    <header className="w-full flex  justify-between items-center py-4 text-lg ">
        <Logo/>
        <MainNav/>
        <AuthNav/>

    </header>
  )
}

export default Header
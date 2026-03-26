import { Link } from "react-router-dom"
import appLogo from "../assets/app-logo.svg"
import { LuUserRoundCheck } from "react-icons/lu"
import { IoSearchOutline } from "react-icons/io5"
import { IoIosHeartEmpty } from "react-icons/io"
import { IoCartOutline } from "react-icons/io5"

const Header = () => {
    return (
        <>
            <div className="bg-white h-6 py-9 fixed top-0 z-10 w-full flex  shadow-md">
                <div className="max-w-7xl px-4 mx-auto flex w-full items-center justify-between">
                    <div className="flex gap-2">
                        <img src={appLogo} alt="app-logo" />
                        <span className="font-bold font-montserrat text-2xl">Furniro</span>
                    </div>
                    <div>
                        <nav className="flex gap-12 font-poppins font-medium text-[16px]">
                            <Link to="/" className="cursor-pointer transform hover:scale-110">Home</Link>
                            <Link to="/products" className="cursor-pointer transform hover:scale-110">Shop</Link>
                            <Link to="/blog" className="cursor-pointer transform hover:scale-110">Blog</Link>
                            <Link to="/contact" className="cursor-pointer transform hover:scale-110">Contact</Link>
                        </nav>
                    </div>
                    <div className="flex justify-center gap-7">
                        <span><LuUserRoundCheck /></span>
                        <span><IoSearchOutline /></span>
                        <span><IoIosHeartEmpty /></span>
                        <span><IoCartOutline /></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
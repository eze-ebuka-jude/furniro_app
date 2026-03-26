import ShopHeroImg from "../assets/shop-hero-img.svg"
import appLogo from "../assets/app-logo.svg"
import { IoIosArrowForward } from "react-icons/io";
import { useLocation } from "react-router";

const Hero = () => {
    const location = useLocation()

    return (
        <div className="relative">
            <img src={ShopHeroImg} alt="shop-hero-img" className="w-full" />
            <div className="absolute top-35 flex flex-col justify-center items-center gap-2 mx-auto w-full">
                <img src={appLogo} alt="app-logo" />
                {location.pathname === "/products" && (
                    <>
                        <h4 className="font-poppins font-medium text-3xl text-[#000000]">Shop</h4>
                        <div className="flex gap-1 font-poppins">
                            <span className="font-semibold text-sm">Home</span>
                            <span><IoIosArrowForward className="mt-0.5" /></span>
                            <span className="text-sm">Shop</span>
                        </div>
                    </>
                )}
            </div>


        </div>
    )
}

export default Hero
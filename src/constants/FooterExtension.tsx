import { useLocation } from "react-router"
import TrophyIcon from "../assets/trophy.svg"
import GuarantyIcon from "../assets/guarantee.svg"
import ShippingIcon from "../assets/shipping.svg"
import SupportIcon from "../assets/customer-support.svg"

const footerExtPages = ["/products", "/comparison", "/cart", "/checkout", "/contact", "/blog"]

const FooterExtension = () => {
    const location = useLocation()
    const display = footerExtPages.filter(loc => loc === location.pathname)

    return (
        <>
            {display.length >= 1 && (
                <div className="bg-[#FAF3EA] px-4 py-14 w-full">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-4 gap-2 font-poppins">
                            <div className="flex items-center justify-center gap-2 w-full">
                                <div><img src={TrophyIcon} alt="trophy-icon" /></div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-semibold text-xl">High Quality</h4>
                                    <span className="text-[#898989] font-medium text-md">crafted from top materials</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-2 w-full">
                                <div><img src={GuarantyIcon} alt="guaranty-icon" /></div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-semibold text-xl">Warranty Protection</h4>
                                    <span className="text-[#898989] font-medium text-md">Over 2 years</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-2 w-full">
                                <div><img src={ShippingIcon} alt="shipping-icon" /></div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-semibold text-xl">Free Shipping</h4>
                                    <span className="text-[#898989] font-medium text-md">Order over 150 $</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-2 w-full">
                                <div><img src={SupportIcon} alt="customer-icon" /></div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-semibold text-xl">24 / 7 Support</h4>
                                    <span className="text-[#898989] font-medium text-md">Dedicated support</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </>
    )
}

export default FooterExtension
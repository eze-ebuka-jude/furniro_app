import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="mt-12 mb-2 border border-b-0 border-l-0 border-r-0 border-t-gray-400">
            <div className="max-w-7xl px-4 mx-auto pt-12 pb-8">
                <div className="grid grid-cols-4 gap-12 items-start w-[85%]">
                    <div className="flex flex-col gap-8 w-full items-start justify-between font-poppins">
                        <h5 className="text-2xl font-bold">Furniro.</h5>
                        <span className="font-extralight text-[12px] text-[#9F9F9F]">400 University Drive Suite 200 Coral <br /> Gables, <br />FL 33134 USA</span>
                    </div>

                    <div className="flex flex-col gap-8 items-start justify-between font-poppins">
                        <h5 className="text-md text-[#9F9F9F] font-medium">Links</h5>
                        <nav className="flex flex-col gap-12 font-poppins font-medium text-[16px]">
                            <Link to="/" className="cursor-pointer transform hover:scale-110">Home</Link>
                            <Link to="/products" className="cursor-pointer transform hover:scale-110">Shop</Link>
                            <Link to="/blog" className="cursor-pointer transform hover:scale-110">Blog</Link>
                            <Link to="/contact" className="cursor-pointer transform hover:scale-110">Contact</Link>
                        </nav>
                    </div>

                    <div className="flex flex-col gap-8 items-start justify-between font-poppins">
                        <h5 className="text-md text-[#9F9F9F] font-medium">Help</h5>
                        <nav className="flex flex-col gap-12 font-poppins font-medium text-[16px]">
                            <Link to="/" className="cursor-pointer transform hover:scale-110">Payment Options</Link>
                            <Link to="/" className="cursor-pointer transform hover:scale-110">Returns</Link>
                            <Link to="/" className="cursor-pointer transform hover:scale-110">Privacy Policies</Link>
                        </nav>
                    </div>

                    <div className="flex flex-col gap-8 items-start justify-between font-poppins">
                        <h5 className="text-md text-[#9F9F9F] font-medium">Newsletter</h5>
                        <form>
                            <div className="flex gap-4 justify-center items-center">
                                <input type="email" placeholder="Enter Your Email Address" className="border-x-none outline-none border-b-2 border-b-[#000000] text-sm py-1 pr-12 text-[#9F9F9F]" />
                                <button className="border-x-none outline-none border-b-2 border-b-[#000000] p-1 mb-1">SUBSCRIBE</button>
                            </div>
                        </form>
                    </div>
                </div>

                <hr className="w-full h-8 border-[#D9D9D9] mt-12 mb-4" />

                <span className="font-medium text-[#000000] font-poppins text-sm">2026 furniro. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer
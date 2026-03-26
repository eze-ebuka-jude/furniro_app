import heroImg from "../../assets/hero-img.svg"

const Hero = () => {
    return (
        <div className="relative">
            <img src={heroImg} alt="hero-img" className="w-full" />
            <div className="absolute bottom-40 right-35 bg-[#FFF3E3] w-150 p-7">
                <div className="flex flex-col py-4 gap-4 font-poppins">
                    <span className="font-semibold text-[16px] tracking-widest">New Arrival</span>
                    <h3 className="text-[#B88E2F] font-bold text-5xl">Discover Our <br /> New Collection</h3>
                    <p className="font-poppins font-medium text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    <div className="mt-8">
                        <button className="bg-[#B88E2F] text-white text-md px-8 py-4 cursor-pointer rounded-md transform hover:scale-110">BUY NOW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
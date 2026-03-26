import innerPeace from "../../assets/inner-peace.svg"
import carousel1 from "../../assets/carousel-1.svg"
import carousel2 from "../../assets/carousel-2.svg"
import { FaArrowRightLong } from "react-icons/fa6"
import { IoIosArrowForward } from "react-icons/io"

const BeautifulRooms = () => {
    return (
        <div className="bg-[#FCF8F3] my-14 py-14">
            <div className="max-w-7xl px-4 mx-auto flex justify-center items-center gap-3">
                <div className="flex flex-col gap-3 font-poppins">
                    <h1 className="font-extrabold text-4xl w-full space-y-2">50+ Beautiful rooms inspiration</h1>
                    <p className="font-light text-sm w-[20rem]">Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
                    <button className="bg-[#B88E2F] text-white py-3 px-6 w-40.5 my-3 cursor-pointer">Explore More</button>
                </div>

                <div className="relative">
                    <img src={innerPeace} alt="inner-peace" />
                    <div className="flex">
                        <div className="absolute bg-white flex flex-col opacity-75 font-poppins items-center justify-center gap-3 bottom-4 left-4 w-34.5 h-22.5">
                            <span className="text-[#616161] text-[12px] font-light">01 - Bed Room</span>
                            <h5 className="font-bold">Inner Peace</h5>
                        </div>
                        <div className="absolute bg-[#B88E2F] bottom-4 left-38.5 py-2 px-2 ">
                            <FaArrowRightLong color="white" />
                        </div>
                    </div>
                </div>

                <div className="flex items-start justify-start flex-col gap-3 mb-12">
                    <div className="relative">
                        <div className="flex gap-4">
                            <div><img src={carousel1} alt="carousel1" /></div>
                            <div><img src={carousel2} alt="carousel2" /></div>
                        </div>

                        <div className="absolute z-10 bg-white shadow-md w-10 h-10 pt-1 pl-1 rounded-full bottom-34 right-10">
                            <IoIosArrowForward color="#B88E2F" fontSize='2rem' />
                        </div>
                    </div>

                    <div className="flex items-start justify-start gap-3">
                        {[1, 2, 3, 4].map((_, index) => (
                            <div className={`${index === 0 ? 'bg-[#B88E2F]' : 'bg-[#D8D8D8]'} rounded-full h-2 w-2 mt-4`} key={index}></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeautifulRooms
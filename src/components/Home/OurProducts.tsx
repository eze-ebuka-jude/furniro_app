import { useState } from "react";
import prodData from "../../data/homeProductData"
import type { homeProductDataType } from "../../types/productDataType";
import { IoShareSocialOutline } from "react-icons/io5"
import { MdOutlineCompareArrows } from "react-icons/md"
import { IoMdHeartEmpty } from "react-icons/io"

const OurProducts = () => {
    const [data] = useState<homeProductDataType[]>(prodData)

    return (
        <div className="my-14 flex flex-col gap-8 items-center justify-center">
            <h3 className="font-poppins font-bold text-3xl">Our Products</h3>
            <div className="grid grid-cols-4 gap-4">
                {data && data.map(d => (
                    <div className="bg-[#F4F5F7] relative group overflow-hidden cursor-pointer" key={d.name}>
                        <div className="relative">
                            <img src={d.image} alt={d.name} />
                            {d.status && (
                                <div className={`absolute bg-[#2EC1AC] p-2 top-4 right-6 rounded-full`}>
                                    <span className="text-sm text-white font-light">New</span>
                                </div>
                            )}

                            {d.discountPercent && (
                                <div className={`absolute bg-[#e97171] p-2 top-4 right-6 rounded-full`}>
                                    <span className="text-sm text-white font-light">{d.discountPercent}%</span>
                                </div>
                            )}
                        </div>
                        <div className="my-4 font-poppins px-6">
                            <h6 className="font-semibold text-md">{d.name}</h6>
                            <p className="font-medium text-[12px] text-[#898989] py-2">{d.desc}</p>
                            <div className="flex items-start gap-6">
                                <span className="text-[#3A3A3A] text-sm font-semibold">₦{d.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                                {d.discountPrice && <span className="text-[#B0B0B0] text-sm line-through">₦{d.discountPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>}
                            </div>
                        </div>

                        <div className="absolute inset-0 flex flex-col gap-3 justify-center items-center opacity-0 group-hover:opacity-60 transition-opacity duration-400 bg-black bg-opacity-60">
                            <button className="bg-white text-md font-poppins font-extrabold text-[#604609] w-[50%] py-3 px-6 rounded-md cursor-pointer ">Add to cart</button>
                            <div className="flex justify-center items-center w-full gap-4 mt-2 font-poppins">
                                <span className="text-white text-sm flex gap-1 cursor-pointer">
                                    <IoShareSocialOutline /> Share
                                </span>
                                <span className="text-white text-sm flex gap-1 cursor-pointer">
                                    <MdOutlineCompareArrows /> Compare
                                </span>
                                <span className="text-white text-sm flex gap-1 cursor-pointer">
                                    <IoMdHeartEmpty /> Like
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-3">
                <button className="bg-transparent border border-[#B88E2F] border-solid w-full rounded-md py-2 px-7 cursor-pointer text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white hover:font-bold">Show More</button>
            </div>
        </div>
    )
}

export default OurProducts
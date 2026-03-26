import { useState } from "react"
import ViewListIcon from "../../assets/view-list.svg"
import GridIcon from "../../assets/grid.svg"
import FilterIcon from "../../assets/filter.svg"
import prodData from "../../data/shopProductData"
import type { shopProductDataType } from "../../types/productDataType"
import { IoMdHeartEmpty } from "react-icons/io"
import { IoShareSocialOutline } from "react-icons/io5"
import { MdOutlineCompareArrows } from "react-icons/md"

const ProductsSection = () => {
    const [data] = useState<shopProductDataType[]>(prodData)

    return (
        <>
            <div className="bg-[#F9F1E7] w-full -mt-1">
                <div className="flex items-center justify-between max-w-7xl px-4 py-6 mx-auto">
                    <div className="flex  items-start gap-8">
                        <div className="flex items-center gap-7">
                            <span className="flex gap-2 font-poppins font-medium text-md">
                                <img src={FilterIcon} alt="filter-icon" />
                                Filter
                            </span>
                            <span><img src={GridIcon} alt="grid-icon" /></span>
                            <span><img src={ViewListIcon} alt="view-list-icon" /></span>
                        </div>
                        <div className="bg-[#9F9F9F] border-[#9F9F9F] w-0.5 h-8"></div>
                        <div className="font-poppins mt-1">
                            <span className="font-semibold text-[12px]">Showing 1 - 16 of 32 results</span>
                        </div>
                    </div>

                    <div className="flex items-start gap-6 font-poppins">
                        <div className="flex gap-4 items-center justify-center">
                            <span className="font-medium">Show</span>
                            <div className="bg-[#FFFFFF] px-3 py-2 text-[#9F9F9F]">16</div>
                        </div>
                        <div className="flex gap-4 items-center justify-center">
                            <span className="font-medium">Short by</span>
                            <div className="bg-[#FFFFFF] pr-8 pl-4 py-2 text-[#9F9F9F]">Default</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl px-4 py-6 mx-auto my-12">
                <div className="grid grid-cols-4 gap-8">
                    {data && data.map(d => (
                        <div className="bg-[#F4F5F7] relative group overflow-hidden cursor-pointer" key={d.name}>
                            <div className="relative">
                                <img src={d.image} alt={d.name} className="w-full" />
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

                {/* Pagination links */}
                <div className="flex items-center justify-center mx-auto gap-4 mt-12">
                    <span className="bg-[#B88E2F] px-4 py-2 rounded-sm text-white">1</span>
                    <span className="bg-[#F9F1E7] px-4 py-2 rounded-sm">2</span>
                    <span className="bg-[#F9F1E7] px-4 py-2 rounded-sm">3</span>
                    <span className="bg-[#F9F1E7] px-4 py-2 rounded-sm">Next</span>
                </div>
            </div>
        </>
    )
}

export default ProductsSection
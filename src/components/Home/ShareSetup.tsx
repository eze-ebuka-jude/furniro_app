import share5 from "../../assets/share-5.svg"
import share1 from "../../assets/share-1.svg"
import share2 from "../../assets/share-2.svg"
import share3 from "../../assets/share-3.svg"
import share4 from "../../assets/share-4.svg"
import share6 from "../../assets/share-6.svg"
import share7 from "../../assets/share-7.svg"
import share8 from "../../assets/share-8.svg"
import share9 from "../../assets/share-9.svg"

const ShareSetup = () => {
    return (
        <div className="my-12 font-poppins flex flex-col items-center justify-center gap-1">
            <p className="text-[12px] font-semibold">Share your setup with</p>
            <h1 className="font-bold text-2xl">#FurniroFurniture</h1>

            <div className="grid grid-cols-5 py-8 gap-2 w-full">
                {/* <div className=""> */}
                <img src={share1} alt="share-1" />
                <img src={share3} alt="share-3" className="-ml-32 mt-32 w-[40rem]" />
                {/* </div> */}
                {/* <div className=""> */}
                <img src={share5} alt="share-5" />
                <img src={share6} alt="share-6" />
                {/* </div> */}
                {/* <div className="row-span-1"> */}
                <img src={share8} alt="share-8" />
                {/* </div> */}
                {/* <div className="row-span-2 mt-21.25"> */}
                <img src={share2} alt="share-2" className="-mt-10" />
                {/* </div> */}
                {/* <div className="row-span-2"> */}
                <img src={share4} alt="share-4" className="-ml-24 -mt-10 w-full" />
                <div></div>
                <img src={share7} alt="share-7" />
                <img src={share9} alt="share-9" />
                {/* </div> */}
            </div>
        </div>
    )
}

export default ShareSetup
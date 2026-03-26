import dining from "../../assets/dining.svg"
import living from "../../assets/living.svg"
import bedroom from "../../assets/bedroom.svg"

const BrowseTheRange = () => {
    return (
        <div className="flex flex-col items-center justify-center my-12">
            <h3 className="font-poppins font-bold text-3xl">Browse The Range</h3>
            <p className="font-light mt-3 font-poppins text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="mt-12 grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center gap-4">
                    <img src={dining} alt="dining-img" />
                    <span className="font-semibold font-poppins text-lg">Dining</span>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <img src={living} alt="living-img" />
                    <span className="font-semibold font-poppins text-lg">Living</span>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <img src={bedroom} alt="bedroom-img" />
                    <span className="font-semibold font-poppins text-lg">Bedroom</span>
                </div>
            </div>
        </div>
    )
}

export default BrowseTheRange
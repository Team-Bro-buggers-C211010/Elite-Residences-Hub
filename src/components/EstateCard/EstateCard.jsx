import { BiArea } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineHouse } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const EstateCard = ({estate}) => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className="lg:w-1/2 relative"><img src={estate.image} className="h-full object-cover" alt="Album" />
                <div className="bg-[#8cbd52] w-24 h-10 absolute flex justify-center items-center p-3 rounded-full rounded-l-none left-0"><p className="text-white text-lg font-medium">{estate.status}</p></div>
            </figure>
            <div className="card-body p-2 md:p-5 lg:w-1/2 justify-center">
                <h2 className="text-base md:text-lg font-bold mb-2 md:mb-3">{estate.estate_title}</h2>
                <h3 className="flex gap-x-1 mt-1 mb-1 md:mb-2 items-center"><MdOutlineLocationOn className="w-5 h-5" />{estate.location} </h3>
                <hr className="border-[#8cbd52]" />
                <div className="mt-3 mb-1">
                    <p className="flex items-center gap-x-1"><MdOutlineHouse className="w-5 h-5" /><div className="bg-[#8cbd52] rounded-full py-1 px-3 text-white font-medium">{estate.segment_name}</div></p>
                </div>
                <h3 className="mb-2"><span className="font-bold">Property Description :</span> <br />{estate.short_description}</h3>
                <hr className="border-[#8cbd52]" />
                <div className="mt-1 md:mt-2 mb-1 md:mb-2 grid grid-cols-1 gap-2">
                    <div className="flex items-center gap-x-1"><BiArea className="w-5 h-5" /> <span className="font-bold">Area :</span> {estate.area}</div>
                </div>
                <hr className="border-[#8cbd52]" />
                <div className="flex flex-col justify-center md:mt-2 gap-y-2">
                    <p className="flex items-center gap-x-1"> <IoPricetagsOutline className="w-5 h-5" />
                        <span className="font-bold">Price : </span>{estate.price}</p>
                    <div className="flex justify-center">
                        <Link to={`/estate/${estate.id}`} className="btn w-full p-0 bg-white border border-[#70b100] text-[#70b100] hover:bg-[#70b100] hover:text-white">View Property</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateCard;
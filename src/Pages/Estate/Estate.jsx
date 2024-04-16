import { useLoaderData } from "react-router-dom";
import EstateCard from "../../components/EstateCard/EstateCard";

const Estate = () => {
    const estateData = useLoaderData();
    return (
        <div>
            <div>
                <h1 className="text-3xl md:text-5xl mt-36 text-center font-semibold">
                    <span className="text-[#71b100]">Featured</span> Properties
                </h1>
                <p className="text-center container text-sm md:text-base mx-auto md:w-1/2 mt-7">Explore our curated collection of exquisite luxury properties, from chic urban penthouses to secluded beachfront retreats and historic estates. Each residence offers refined living and exceptional amenities, epitomizing elegance and sophistication.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto gap-5 mt-6 px-2 md:px-0">
                {
                    estateData.map( estate => <EstateCard key={estate.id} estate={estate}></EstateCard>)
                }
            </div>
        </div>
    );
};

export default Estate;
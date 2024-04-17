import { useLoaderData, useParams } from "react-router-dom";
import { IoPricetagsOutline } from "react-icons/io5";
import { MdOutlineHouse } from "react-icons/md";
import { MdOutlineBedroomParent } from "react-icons/md";
import { LiaBathSolid } from "react-icons/lia";
import { BiArea } from "react-icons/bi";
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiMiniHashtag } from "react-icons/hi2";
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const EstateDetails = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    const estatesData = useLoaderData();
    const { id } = useParams();
    const estateData = estatesData.find(data => data.id == id);
    const position = [estateData.latitude, estateData.longitude]
    return (
        <div className="mt-24 container mx-auto px-2 md:px-0">
            <Helmet>
                <title> {estateData.estate_title} </title>
            </Helmet>
            <h1 data-aos="fade-down" data-aos-duration="1000" className="text-3xl md:text-5xl text-center font-semibold">Property <span className="text-[#71b100]">Details</span></h1>
            <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1500" className="relative mt-5 hero rounded-lg bg-base-200 min-h-[300px] md:min-h-[700px] bg-cover bg-center" style={{ backgroundImage: `url("${estateData.image}")` }}>
                <div className="bg-[#8cbd52] w-24 md:w-32 h-10 md:h-16 absolute flex justify-center items-center p-3 rounded-full rounded-l-none left-0 font-Lora"><p className="text-white text-lg md:text-3xl font-medium">{estateData.status}</p></div>
            </div>
            <div className="mt-10">
                <h1 data-aos="fade-right"
                    data-aos-duration="1500" className="font-Lora text-2xl md:text-4xl font-semibold">{estateData.estate_title}</h1>
                <div data-aos="fade-right"
                    data-aos-duration="2000" className="mt-2 text-xl md:text-3xl flex gap-x-2 items-center text-[#71b100] font-medium"><IoPricetagsOutline /><p>{estateData.price}</p></div>
                <div data-aos="fade-right"
                    data-aos-duration="2500" className="mt-2 text-xl md:text-3xl flex gap-x-2 items-center text-[#71b100] font-medium"><MdOutlineHouse /> {estateData.segment_name}</div>
            </div>
            <hr className="border-[#71b100] border-dashed mt-4" />
            <div className="mt-4">
                <h1 data-aos="fade-down" data-aos-duration="2000" className="text-xl md:text-3xl font-medium">Description : </h1>
                <br />
                <p data-aos="zoom-in-down" data-aos-duration="2000" className="text-base md:text-xl font-Roboto">{estateData.description}</p>
            </div>
            <hr className="border-[#71b100] border-dashed mt-4" />
            <div className="mt-4">
                <h1 data-aos="fade-down" data-aos-duration="1000" className="text-xl md:text-3xl font-medium">Property Specifications :</h1>
                <ul className="pl-4 mt-3 font-Roboto flex flex-col gap-y-2">
                    <li className="flex gap-x-1 items-center text-base md:text-xl"><BiArea className="text-[#8cbd52]" /> <p>Area : {estateData.area}</p></li>
                    <li className="flex gap-x-1 items-center text-base md:text-xl"><FaRegBuilding className="text-[#8cbd52]" /><p>Floor : {estateData.floor}</p></li>
                    <li className="flex gap-x-1 items-center text-base md:text-xl"><MdOutlineBedroomParent className="text-[#8cbd52]" /> <p>Bed : {estateData.bed}</p></li>
                    <li className="flex gap-x-1 items-center text-base md:text-xl"><LiaBathSolid className="text-[#8cbd52]" /> <p>Bathroom : {estateData.bathroom}</p></li>
                </ul>
            </div>
            <hr className="border-[#71b100] border-dashed mt-4" />
            <div className="mt-4">
                <h1 data-aos="fade-down" data-aos-duration="1000" className="text-xl md:text-3xl font-medium">Facilities : </h1>
                <ul className="font-Roboto grid grid-cols-1 lg:grid-cols-3 lg:w-2/3 mt-2 pl-4 gap-2">
                    {
                        estateData.facilities.map((facility, idx) => <li key={idx} className="flex gap-x-1 items-center text-base md:text-xl"><HiMiniHashtag className="text-[#8cbd52] font-extrabold" /><p>{facility}</p></li>)
                    }
                </ul>
            </div>
            <hr className="border-[#71b100] border-dashed mt-4" />
            <div className="mt-4">
                <h1 data-aos="fade-down" data-aos-duration="1000" className="text-xl md:text-3xl font-medium">Location Info :</h1>
                <p className="mt-4 flex items-center gap-x-1 text-xl md:text-2xl text-[#71b100] font-medium font-Roboto"><MdOutlineLocationOn /> {estateData.location}</p>
                <div data-aos="zoom-out-up" data-aos-duration="1000" className="mt-2 border-2 border-[#8cbd52] p-1 shadow-xl">
                    <MapContainer className="h-96" center={position} zoom={14} scrollWheelZoom={true} >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                {estateData.estate_title}
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;
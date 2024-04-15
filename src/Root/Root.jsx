import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
const Root = () => {
    return (
        <div className="font-poppins">
            <div className="shadow-lg">
                <Navbar className=""></Navbar>
            </div>
            <div className="">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;
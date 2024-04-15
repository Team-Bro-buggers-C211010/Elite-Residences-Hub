import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
const Root = () => {
    return (
        <div>
            <div className="shadow-lg">
                <Navbar className=""></Navbar>
            </div>
            <div className="container mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;
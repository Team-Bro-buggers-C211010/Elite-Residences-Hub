import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
const Root = () => {
    return (
        <div>
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
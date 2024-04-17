import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
const Root = () => {
    return (
        <div className="font-poppins">
            <div className="shadow-lg">
                <Navbar className=""></Navbar>
            </div>
            <div className="mb-8">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;
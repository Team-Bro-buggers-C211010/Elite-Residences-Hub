import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
            <ToastContainer position="top-center" />
        </div>
    );
};

export default Root;
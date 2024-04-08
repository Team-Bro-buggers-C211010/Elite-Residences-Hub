import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
const Root = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <h2>This is root page.</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
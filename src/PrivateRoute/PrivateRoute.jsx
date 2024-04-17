import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from 'react-toastify';
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className="relative top-[67px] flex justify-center items-center"><span className="text-[#71b100] loading loading-bars loading-lg min-h-screen"></span></div>;
    }
    if (user) {
        return children;
    }
    return(
        <>
            <Navigate state={location.pathname} to="/signin"></Navigate>
            {toast.warning("You are not logged in yet !!!")}
        </>
    ) ;
};

export default PrivateRoute;
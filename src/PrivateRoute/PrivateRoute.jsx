import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div className="relative top-[67px] flex justify-center items-center"><span className="text-[#71b100] loading loading-bars loading-lg min-h-screen"></span></div>;
    }
    if (user) {
        return children;
    }
    return <Navigate to="/signin"></Navigate>;
};

export default PrivateRoute;
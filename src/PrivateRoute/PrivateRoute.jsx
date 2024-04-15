import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    if (user && user.emailVerified) {
        return children;
    }
    return <Navigate to="/signin"></Navigate>;
};

export default PrivateRoute;
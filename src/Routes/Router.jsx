import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignIn from './../Pages/SignIn/SignIn';
import Register from './../Pages/Register/Register';
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import EstateDetails from './../Pages/EstateDetails/EstateDetails';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("../luxuryData.json"),
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: "/update-profile",
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: "/signin",
                element: <SignIn></SignIn>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: "/register",
                element: <Register></Register>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: "/estate/:id",
                element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
                errorElement: <ErrorPage></ErrorPage>
            },
        ]
    }
])

export default router;